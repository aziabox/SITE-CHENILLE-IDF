/**
 * Audit du site genere — SEO, contenu, duplication, accessibilite, local.
 *   node scripts/audit.mjs
 * Sortie : rapport lisible + code de sortie 1 si erreur bloquante.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { site } from '../src/lib/site.mjs';

const DIST = path.join(process.cwd(), 'dist');
const PLACEHOLDER_PREFIX = '[A COMPLETER';
const errors = [];
const warnings = [];
const infos = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ---------- collecte ---------- */
async function walk(dir, acc = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) await walk(f, acc);
    else if (e.name === 'index.html') acc.push(f);
  }
  return acc;
}

const decode = (s = '') => s
  .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const tag = (html, re) => decode((html.match(re) || [])[1] || '');
const all = (html, re) => [...html.matchAll(re)];
const textOf = (html) => html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<(header|footer|nav)[\s\S]*?<\/\1>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;|&#\d+;/g, ' ')
  .replace(/\s+/g, ' ').trim();

/* ---------- similarite (detection de contenu duplique) ---------- */
function shingles(text, n = 6) {
  const w = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
}
const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
};

/* ---------- audit ---------- */
const files = await walk(DIST);
const pages = [];

for (const file of files) {
  const html = await fs.readFile(file, 'utf8');
  const url = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const title = tag(html, /<title>([\s\S]*?)<\/title>/);
  const desc = tag(html, /<meta name="description" content="([^"]*)"/);
  const canonical = tag(html, /<link rel="canonical" href="([^"]*)"/);
  const h1s = all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g).map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = all(html, /<h2[^>]*>([\s\S]*?)<\/h2>/g);
  const noindex = /content="noindex/.test(html);
  const text = textOf(html);
  pages.push({ url, file, html, title, desc, canonical, h1s, h2count: h2s.length, noindex, text,
    words: text.split(' ').length });
}

const byUrl = new Map(pages.map(p => [p.url, p]));

/* --- 1. Balises et metas --- */
const titles = new Map(), descs = new Map(), h1map = new Map();
for (const p of pages) {
  if (!p.title) err(`${p.url} : <title> manquant`);
  if (!p.desc) err(`${p.url} : meta description manquante`);
  if (!p.canonical) err(`${p.url} : canonical manquant`);
  if (p.h1s.length !== 1) err(`${p.url} : ${p.h1s.length} balise(s) H1 (attendu : 1)`);
  if (p.h2count === 0 && !p.noindex) warn(`${p.url} : aucun H2`);
  if (p.title.length > 70) warn(`${p.url} : title de ${p.title.length} caractères (> 70)`);
  if (p.title.length < 25) warn(`${p.url} : title très court (${p.title.length})`);
  if (p.desc.length > 165) warn(`${p.url} : meta description de ${p.desc.length} caractères (> 165)`);
  if (p.desc.length < 70) warn(`${p.url} : meta description courte (${p.desc.length})`);
  if (!p.noindex && p.words < 350) warn(`${p.url} : contenu court (${p.words} mots)`);

  const t = p.title.toLowerCase();
  if (titles.has(t)) err(`Title dupliqué : « ${p.title} » (${p.url} et ${titles.get(t)})`);
  titles.set(t, p.url);
  const d = p.desc.toLowerCase();
  if (descs.has(d)) err(`Meta description dupliquée (${p.url} et ${descs.get(d)})`);
  descs.set(d, p.url);
  const h = (p.h1s[0] || '').toLowerCase();
  if (h && h1map.has(h)) err(`H1 dupliqué : « ${p.h1s[0]} » (${p.url} et ${h1map.get(h)})`);
  if (h) h1map.set(h, p.url);
}

/* --- 2. Liens internes --- */
let linkCount = 0;
for (const p of pages) {
  const links = all(p.html, /href="(\/[^"#?]*)"/g).map(m => m[1]);
  for (const href of new Set(links)) {
    linkCount++;
    if (/\.(css|png|svg|xml|txt|webmanifest|html)$/.test(href)) continue;
    if (!href.endsWith('/')) { warn(`${p.url} : lien interne sans slash final → ${href}`); continue; }
    if (!byUrl.has(href)) err(`${p.url} : lien interne cassé → ${href}`);
  }
}

/* --- 3. Images --- */
for (const p of pages) {
  for (const m of all(p.html, /<img\s[^>]*>/g)) {
    const t = m[0];
    if (!/\balt="/.test(t)) err(`${p.url} : <img> sans attribut alt`);
    const alt = tag(t, /alt="([^"]*)"/);
    if (alt !== undefined && alt.trim() === '') warn(`${p.url} : alt vide`);
    if (alt && alt.length > 180) warn(`${p.url} : alt très long (${alt.length})`);
    if (alt && /chenille processionnaire/gi.test(alt) &&
        (alt.match(/processionnaire/gi) || []).length > 2) {
      warn(`${p.url} : alt possiblement sur-optimisé`);
    }
    if (!/\bwidth="/.test(t) || !/\bheight="/.test(t)) {
      warn(`${p.url} : <img> sans width/height (risque de CLS)`);
    }
    if (!/loading="lazy"/.test(t) && !/fetchpriority="high"/.test(t)) {
      warn(`${p.url} : <img> sans loading="lazy" ni fetchpriority`);
    }
  }
}

/* --- 4. Donnees structurees --- */
for (const p of pages) {
  const ld = tag(p.html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) { err(`${p.url} : JSON-LD absent`); continue; }
  let g;
  try { g = JSON.parse(ld); } catch { err(`${p.url} : JSON-LD invalide`); continue; }
  const types = (g['@graph'] || []).map(n => n['@type']);
  if (!types.includes('Organization')) err(`${p.url} : Organization manquant dans le JSON-LD`);
  const faqNode = (g['@graph'] || []).find(n => n['@type'] === 'FAQPage');
  if (faqNode) {
    const visible = (p.html.match(/class="faq__item"/g) || []).length;
    if (faqNode.mainEntity.length !== visible) {
      err(`${p.url} : FAQPage déclare ${faqNode.mainEntity.length} questions pour ${visible} affichées`);
    }
  }
  // Aucune donnee fabriquee : ni avis, ni note, ni prix
  const forbidden = ['aggregateRating', 'review', 'priceRange', 'offers'];
  for (const f of forbidden) {
    if (ld.includes(`"${f}"`)) err(`${p.url} : JSON-LD contient « ${f} » — données non vérifiables`);
  }
}

/* --- 5. Placeholders non remplaces --- */
for (const p of pages) {
  if (p.html.includes('[A COMPLETER')) err(`${p.url} : placeholder brut publié dans le HTML`);
  if (/lorem ipsum/i.test(p.html)) err(`${p.url} : texte de remplissage détecté`);
}

/* --- 5 bis. Diffusion des informations d'identification --- */
// Quand site.publishIdentity vaut false, la denomination legale et l'adresse
// du siege ne doivent apparaitre que sur les pages legales, ou elles sont
// juridiquement obligatoires.
if (!site.publishIdentity) {
  const PAGES_LEGALES = new Set(['/mentions-legales/', '/politique-de-confidentialite/']);
  const secrets = [
    ['dénomination légale', site.legalName],
    ['adresse du siège', site.address.street],
    ['commune du siège', site.address.city],
    ['SIREN', site.siren],
    ['numéro RCS', site.rcs]
  ].filter(([, v]) => typeof v === 'string' && v.length > 4 && !v.startsWith(PLACEHOLDER_PREFIX));

  for (const p of pages) {
    if (PAGES_LEGALES.has(p.url)) continue;
    for (const [label, valeur] of secrets) {
      if (p.html.includes(valeur)) {
        err(`${p.url} : ${label} publiée hors des pages légales alors que site.publishIdentity vaut false`);
      }
    }
  }
}

/* --- 6. Duplication de contenu --- */
const sh = pages.filter(p => !p.noindex).map(p => ({ ...p, sh: shingles(p.text) }));
const pairs = [];
for (let i = 0; i < sh.length; i++) {
  for (let j = i + 1; j < sh.length; j++) {
    const s = jaccard(sh[i].sh, sh[j].sh);
    if (s > 0.25) pairs.push({ a: sh[i].url, b: sh[j].url, s });
  }
}
pairs.sort((x, y) => y.s - x.s);
for (const p of pairs) {
  const msg = `Similarité ${(p.s * 100).toFixed(0)} % entre ${p.a} et ${p.b}`;
  if (p.s > 0.4) err(msg); else warn(msg);
}
infos.push(`Similarité maximale entre deux pages : ${pairs.length ? (pairs[0].s * 100).toFixed(1) + ' %' : '< 25 %'}`);

/* --- 7. Sitemap, robots, 404 --- */
const sitemap = await fs.readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
const locs = all(sitemap, /<loc>([^<]+)<\/loc>/g).map(m => m[1].replace(/^https?:\/\/[^/]+/, ''));
for (const p of pages) {
  if (p.noindex) {
    if (locs.includes(p.url)) err(`${p.url} : page noindex présente dans le sitemap`);
  } else if (!locs.includes(p.url)) {
    err(`${p.url} : absente du sitemap`);
  }
}
for (const loc of locs) if (!byUrl.has(loc)) err(`Sitemap : URL inexistante ${loc}`);
const robots = await fs.readFile(path.join(DIST, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap:')) err('robots.txt : directive Sitemap manquante');
try { await fs.access(path.join(DIST, '404.html')); }
catch { err('404.html absent à la racine'); }

/* --- 8. NAP et coherence --- */
const PHONE = '07 56 82 27 85';
for (const p of pages) {
  if (!p.html.includes(PHONE)) err(`${p.url} : numéro de téléphone absent`);
  if (!p.html.includes('tel:+33756822785')) err(`${p.url} : lien tel: absent`);
}

/* --- 9. Maillage interne --- */
const inbound = new Map(pages.map(p => [p.url, 0]));
for (const p of pages) {
  const main = (p.html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  for (const href of new Set(all(main, /href="(\/[^"#?]*)"/g).map(m => m[1]))) {
    if (byUrl.has(href) && href !== p.url) inbound.set(href, (inbound.get(href) || 0) + 1);
  }
}
for (const [url, n] of inbound) {
  const p = byUrl.get(url);
  if (p.noindex || url === '/') continue;
  if (n === 0) err(`${url} : page orpheline (aucun lien entrant depuis le contenu)`);
  else if (n === 1) warn(`${url} : un seul lien entrant depuis le contenu`);
}

/* --- 10. Accessibilite de base --- */
for (const p of pages) {
  if (!/<html lang="fr">/.test(p.html)) err(`${p.url} : attribut lang manquant`);
  if (!/class="skip-link"/.test(p.html)) warn(`${p.url} : lien d'évitement absent`);
  if (!/<meta name="viewport"/.test(p.html)) err(`${p.url} : meta viewport absente`);
}

/* ---------- rapport ---------- */
const kb = (n) => (n / 1024).toFixed(1) + ' Ko';
const sizes = await Promise.all(pages.map(async p => (await fs.stat(p.file)).size));
const cssFile = (await fs.readdir(path.join(DIST, 'assets'))).find(f => f.endsWith('.css'));
const cssSize = (await fs.stat(path.join(DIST, 'assets', cssFile))).size;

console.log('\n══ AUDIT ══════════════════════════════════════════════');
console.log(`Pages analysées        : ${pages.length}`);
console.log(`Pages indexables       : ${pages.filter(p => !p.noindex).length}`);
console.log(`Mots (médiane)         : ${[...pages.map(p => p.words)].sort((a, b) => a - b)[Math.floor(pages.length / 2)]}`);
console.log(`Mots (total)           : ${pages.reduce((s, p) => s + p.words, 0).toLocaleString('fr-FR')}`);
console.log(`Liens internes vérifiés: ${linkCount}`);
console.log(`Poids HTML moyen       : ${kb(sizes.reduce((a, b) => a + b, 0) / sizes.length)}`);
console.log(`Poids HTML max         : ${kb(Math.max(...sizes))}`);
console.log(`CSS unique             : ${kb(cssSize)}`);
console.log(`Scripts externes       : 0`);
infos.forEach(i => console.log(i));

if (warnings.length) {
  console.log(`\n── Avertissements (${warnings.length}) ──`);
  warnings.slice(0, 40).forEach(w => console.log('  · ' + w));
  if (warnings.length > 40) console.log(`  … et ${warnings.length - 40} autres`);
}
if (errors.length) {
  console.log(`\n── Erreurs (${errors.length}) ──`);
  errors.forEach(e => console.log('  ✗ ' + e));
  console.log('');
  process.exit(1);
}
console.log('\n✓ Aucune erreur bloquante.\n');
