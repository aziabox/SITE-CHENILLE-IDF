/**
 * Genere les tracés SVG des huit départements franciliens à partir des
 * contours réels, pour la carte interactive du site.
 *
 *   node scripts/make-carte-idf.mjs
 *   -> écrit src/lib/carte-idf-data.mjs
 *
 * Source des données : src/data/idf-departements.geojson
 *   Tracés : IGN — Admin Express COG
 *   Noms et codes : INSEE
 *   Extrait du jeu de données france-geojson.
 *
 * Le fichier vendorisé permet de régénérer la carte sans accès réseau.
 * Aucune dépendance : projection et simplification sont écrites ici.
 */
import { promises as fs } from 'node:fs';

const SRC = 'src/data/idf-departements.geojson';
const OUT = 'src/lib/carte-idf-data.mjs';

/** Largeur du repère de sortie. La hauteur suit le rapport réel du territoire. */
const WIDTH = 1000;
/** Tolérance de simplification, en unités de sortie (≈ pixels à 1000 de large). */
const TOLERANCE = 1.8;

/* ---------- Projection ------------------------------------------------
 * Équirectangulaire corrigée en longitude par cos(latitude moyenne).
 * Sur une emprise de 2,2° de large, l'écart avec une projection conforme
 * est inférieur au pixel : inutile d'embarquer une vraie projection.
 * -------------------------------------------------------------------- */
function makeProjection(features) {
  let minLon = 180, maxLon = -180, minLat = 90, maxLat = -90;
  for (const f of features) {
    for (const ring of ringsOf(f.geometry)) {
      for (const [lon, lat] of ring) {
        if (lon < minLon) minLon = lon;
        if (lon > maxLon) maxLon = lon;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
      }
    }
  }
  const k = Math.cos(((minLat + maxLat) / 2) * Math.PI / 180);
  const rawW = (maxLon - minLon) * k;
  const rawH = maxLat - minLat;
  const scale = WIDTH / rawW;
  const height = rawH * scale;
  return {
    height,
    project: ([lon, lat]) => [
      (lon - minLon) * k * scale,
      (maxLat - lat) * scale
    ]
  };
}

function* ringsOf(geometry) {
  if (geometry.type === 'Polygon') yield* geometry.coordinates;
  else if (geometry.type === 'MultiPolygon') for (const p of geometry.coordinates) yield* p;
}

/* ---------- Simplification (Douglas-Peucker) -------------------------- */
function perpendicularDistance([x, y], [x1, y1], [x2, y2]) {
  const dx = x2 - x1, dy = y2 - y1;
  if (dx === 0 && dy === 0) return Math.hypot(x - x1, y - y1);
  const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  const cx = x1 + Math.max(0, Math.min(1, t)) * dx;
  const cy = y1 + Math.max(0, Math.min(1, t)) * dy;
  return Math.hypot(x - cx, y - cy);
}

function simplify(points, tolerance) {
  if (points.length < 3) return points;
  let maxDist = 0, index = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = perpendicularDistance(points[i], points[0], points[points.length - 1]);
    if (d > maxDist) { maxDist = d; index = i; }
  }
  if (maxDist <= tolerance) return [points[0], points[points.length - 1]];
  return [
    ...simplify(points.slice(0, index + 1), tolerance).slice(0, -1),
    ...simplify(points.slice(index), tolerance)
  ];
}

/* ---------- Géométrie utilitaire -------------------------------------- */
const area = (ring) => {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    a += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
  }
  return Math.abs(a / 2);
};

/** Centroïde de l'anneau le plus étendu : point d'ancrage de l'étiquette. */
function labelPoint(rings) {
  const main = rings.reduce((b, r) => (area(r) > area(b) ? r : b), rings[0]);
  let cx = 0, cy = 0, a = 0;
  for (let i = 0, j = main.length - 1; i < main.length; j = i++) {
    const f = main[j][0] * main[i][1] - main[i][0] * main[j][1];
    a += f;
    cx += (main[j][0] + main[i][0]) * f;
    cy += (main[j][1] + main[i][1]) * f;
  }
  a *= 0.5;
  if (!a) return [main[0][0], main[0][1]];
  return [cx / (6 * a), cy / (6 * a)];
}

const round = (n) => Math.round(n * 10) / 10;

/* ---------- Génération ------------------------------------------------ */
const geo = JSON.parse(await fs.readFile(SRC, 'utf8'));
const features = geo.features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
const { project, height } = makeProjection(features);

let totalIn = 0, totalOut = 0;
const departements = features.map(f => {
  const projected = [...ringsOf(f.geometry)].map(r => r.map(project));
  totalIn += projected.reduce((s, r) => s + r.length, 0);

  const simplified = projected
    .map(r => simplify(r, TOLERANCE))
    .filter(r => r.length >= 4);
  totalOut += simplified.reduce((s, r) => s + r.length, 0);

  const d = simplified
    .map(r => 'M' + r.map(([x, y]) => `${round(x)},${round(y)}`).join('L') + 'Z')
    .join('');

  const [lx, ly] = labelPoint(simplified);
  return { code: f.properties.code, nom: f.properties.nom, d, label: [round(lx), round(ly)] };
});

const body = `/**
 * Tracés des départements franciliens — GÉNÉRÉ, ne pas modifier à la main.
 * Régénérer avec : node scripts/make-carte-idf.mjs
 *
 * Contours : IGN — Admin Express COG. Noms et codes : INSEE.
 * Projection équirectangulaire corrigée en longitude, repère ${WIDTH}×${Math.round(height)}.
 */
export const carteViewBox = '0 0 ${WIDTH} ${Math.round(height)}';

export const carteDepartements = ${JSON.stringify(departements, null, 2)};
`;

await fs.writeFile(OUT, body);
console.log(`${departements.length} départements`);
console.log(`points : ${totalIn} -> ${totalOut} (tolérance ${TOLERANCE})`);
console.log(`repère : ${WIDTH} x ${Math.round(height)}`);
console.log(`${OUT} : ${(body.length / 1024).toFixed(1)} Ko`);
