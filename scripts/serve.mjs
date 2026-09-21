/**
 * Serveur statique du site genere.
 *
 *   node scripts/serve.mjs [port]      # developpement
 *   npm start                          # build + demarrage (PORT lu dans l'env)
 *
 * Sans dependance. Ecoute sur 0.0.0.0 et sur la variable PORT lorsqu'elle est
 * definie : c'est ce qu'attendent les plateformes qui lancent « npm start ».
 */
import http from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'dist');
const PORT = Number(process.env.PORT || process.argv[2] || 4173);
const HOST = process.env.HOST || '0.0.0.0';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

/** Cache long pour les ressources versionnees, court pour le HTML. */
const cacheFor = (file) =>
  /\/assets\/styles\.[a-f0-9]{8}\.css$/.test(file) ? 'public, max-age=31536000, immutable'
  : /\.(png|svg|jpg|jpeg|webp|avif|ico)$/.test(file) ? 'public, max-age=604800'
  : 'public, max-age=300';

const server = http.createServer(async (req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Requête invalide');
    return;
  }
  if (pathname.endsWith('/')) pathname += 'index.html';

  // Interdit toute sortie du dossier dist.
  const file = path.resolve(ROOT, '.' + pathname);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403).end('Accès refusé');
    return;
  }

  try {
    const data = await fs.readFile(file);
    res.writeHead(200, {
      'content-type': TYPES[path.extname(file)] || 'application/octet-stream',
      'cache-control': cacheFor(file),
      'x-content-type-options': 'nosniff'
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    // URL sans slash final : on redirige vers la forme canonique.
    if (!path.extname(pathname)) {
      try {
        await fs.access(path.join(file, 'index.html'));
        res.writeHead(301, { location: pathname + '/' }).end();
        return;
      } catch { /* pas un dossier : on tombe en 404 */ }
    }
    try {
      const nf = await fs.readFile(path.join(ROOT, '404.html'));
      res.writeHead(404, { 'content-type': TYPES['.html'] }).end(nf);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Page introuvable');
    }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Site servi sur http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`);
});
