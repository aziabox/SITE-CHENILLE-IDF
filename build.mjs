/**
 * Generateur statique — zero dependance.
 *   node build.mjs   ->  ./dist
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { renderPage, abs } from './src/lib/render.mjs';
import { site, serviceArea } from './src/lib/site.mjs';
import { makeImages } from './scripts/make-images.mjs';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'dist');

const CONTENT_DIRS = ['pages', 'clients', 'departements', 'villes', 'blog'];

async function collectPages() {
  const pages = [];
  for (const dir of CONTENT_DIRS) {
    const full = path.join(SRC, 'content', dir);
    let files = [];
    try { files = await fs.readdir(full); } catch { continue; }
    for (const f of files.filter(f => f.endsWith('.mjs')).sort()) {
      const mod = await import(pathToFileURL(path.join(full, f)).href);
      const value = mod.default;
      if (!value) throw new Error(`${dir}/${f} : export par defaut manquant`);
      const list = Array.isArray(value) ? value : [value];
      for (const p of list) pages.push({ ...p, _source: `${dir}/${f}` });
    }
  }
  return pages;
}

function validate(pages) {
  const errors = [];
  const seen = new Map();
  for (const p of pages) {
    const where = p._source || p.url;
    if (!p.url || !p.url.startsWith('/') || !p.url.endsWith('/')) {
      errors.push(`${where} : url invalide (${p.url}) — doit commencer et finir par "/"`);
    }
    if (seen.has(p.url)) errors.push(`URL dupliquee : ${p.url} (${where} et ${seen.get(p.url)})`);
    seen.set(p.url, where);
    if (!p.title) errors.push(`${where} : title manquant`);
    if (!p.description) errors.push(`${where} : meta description manquante`);
    if (!p.h1 && !p.body) errors.push(`${where} : h1 manquant`);
  }
  if (errors.length) {
    console.error('\nBuild interrompu :\n' + errors.map(e => '  - ' + e).join('\n') + '\n');
    process.exit(1);
  }
}

async function copyDir(from, to) {
  await fs.mkdir(to, { recursive: true });
  for (const entry of await fs.readdir(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name), d = path.join(to, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

function sitemapXml(pages) {
  const entries = pages
    .filter(p => !p.noindex && !p.excludeFromSitemap)
    .map(p => {
      const lastmod = p.dateModified || p.datePublished || new Date().toISOString().slice(0, 10);
      return `  <url>
    <loc>${abs(p.url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq || (p.url === '/' ? 'weekly' : 'monthly')}</changefreq>
    <priority>${p.priority ?? (p.url === '/' ? '1.0' : '0.6')}</priority>
  </url>`;
    });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

const robotsTxt = () => `# robots.txt — ${site.name}
User-agent: *
Allow: /
Disallow: /merci/

# Moteurs generatifs : contenu accessible a la lecture.
User-agent: GPTBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${abs('/sitemap.xml')}
`;

const webmanifest = () => JSON.stringify({
  name: site.name,
  short_name: site.shortName,
  start_url: '/',
  display: 'browser',
  background_color: '#ffffff',
  theme_color: site.themeColor,
  lang: 'fr-FR',
  icons: [
    { src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
  ]
}, null, 2);

/** Redirections permanentes (Netlify / Vercel / Apache). */
function redirectFiles(redirects) {
  const netlify = redirects.map(r => `${r.from}  ${r.to}  301`).join('\n') + '\n';
  const htaccess = `# Redirections 301
RewriteEngine On
${redirects.map(r => `RedirectPermanent ${r.from} ${r.to}`).join('\n')}

# Page 404
ErrorDocument 404 /404.html

# Cache des ressources versionnees
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml
</IfModule>
`;
  return { netlify, htaccess };
}

/** Redirections prevues : anciennes URLs courtes -> URLs canoniques. */
const REDIRECTS = [
  { from: '/prevention/', to: '/traitement-preventif/' },
  { from: '/dangers/', to: '/chenilles-processionnaires-danger/' },
  { from: '/chiens/', to: '/chenilles-processionnaires-chien/' },
  { from: '/chats/', to: '/chenilles-processionnaires-chat/' },
  { from: '/enfants/', to: '/chenilles-processionnaires-enfant/' },
  { from: '/destruction-nid/', to: '/destruction-nid-chenilles-processionnaires/' },
  { from: '/piegeage/', to: '/piegeage-chenilles-processionnaires/' },
  { from: '/zones-d-intervention/', to: '/departements/' }
];

async function main() {
  const t0 = Date.now();
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });

  // --- Assets : CSS avec empreinte pour un cache long ------------------
  const css = await fs.readFile(path.join(SRC, 'assets/styles.css'), 'utf8');
  const cssMin = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .replace(/\n\s*/g, '')
    .trim();
  const hash = crypto.createHash('sha1').update(cssMin).digest('hex').slice(0, 8);
  const cssPath = `/assets/styles.${hash}.css`;
  await fs.mkdir(path.join(OUT, 'assets'), { recursive: true });
  await fs.writeFile(path.join(OUT, cssPath.slice(1)), cssMin);

  await copyDir(path.join(SRC, 'assets/img'), path.join(OUT, 'assets/img'));
  await makeImages(path.join(OUT, 'assets/img'), OUT);

  const assets = { css: cssPath };

  // --- Pages -----------------------------------------------------------
  const pages = await collectPages();
  validate(pages);

  for (const page of pages) {
    const dir = page.url === '/' ? OUT : path.join(OUT, page.url.slice(1, -1));
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'index.html'), renderPage(page, assets));
  }

  // 404 servie a la racine (et copie /404/ pour les hebergeurs qui l'exigent)
  const notFound = pages.find(p => p.url === '/404/');
  if (notFound) await fs.writeFile(path.join(OUT, '404.html'), renderPage(notFound, assets));

  // --- Fichiers techniques ---------------------------------------------
  await fs.writeFile(path.join(OUT, 'sitemap.xml'), sitemapXml(pages));
  await fs.writeFile(path.join(OUT, 'robots.txt'), robotsTxt());
  await fs.writeFile(path.join(OUT, 'site.webmanifest'), webmanifest());
  const { netlify, htaccess } = redirectFiles(REDIRECTS);
  await fs.writeFile(path.join(OUT, '_redirects'), netlify);
  await fs.writeFile(path.join(OUT, '.htaccess'), htaccess);

  const byDir = {};
  for (const p of pages) {
    const k = (p._source || '').split('/')[0] || 'autre';
    byDir[k] = (byDir[k] || 0) + 1;
  }
  console.log(`\n✓ ${pages.length} pages générées en ${Date.now() - t0} ms`);
  console.log('  ' + Object.entries(byDir).map(([k, v]) => `${k}: ${v}`).join('   '));
  console.log(`  CSS : ${(cssMin.length / 1024).toFixed(1)} Ko (${cssPath})`);
  console.log(`  ${serviceArea.length} départements couverts\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
