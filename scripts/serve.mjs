/** Petit serveur statique de previsualisation : node scripts/serve.mjs [port] */
import http from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'dist');
const PORT = Number(process.argv[2] || 4173);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json'
};

http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, p);
  try {
    const data = await fs.readFile(file);
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    try {
      const nf = await fs.readFile(path.join(ROOT, '404.html'));
      res.writeHead(404, { 'content-type': TYPES['.html'] }); res.end(nf);
    } catch { res.writeHead(404); res.end('404'); }
  }
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
