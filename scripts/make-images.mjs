/**
 * Generation des images bitmap (Open Graph, icones) sans dependance.
 * Encodeur PNG minimal + rasteriseur avec sur-echantillonnage x3.
 *
 * Ces visuels sont des illustrations de marque, pas des photographies.
 * Voir PHOTOS.md pour l'integration de vraies photos d'intervention.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

/* ---------- Encodeur PNG ------------------------------------------- */
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
const crc32 = (buf) => {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};
function encodePng(width, height, rgb) {
  const raw = Buffer.alloc(height * (width * 3 + 1));
  for (let y = 0; y < height; y++) {
    raw[y * (width * 3 + 1)] = 0;
    rgb.copy(raw, y * (width * 3 + 1) + 1, y * width * 3, (y + 1) * width * 3);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* ---------- Rasteriseur -------------------------------------------- */
const SS = 3; // sur-echantillonnage

class Canvas {
  constructor(w, h) {
    this.w = w * SS; this.h = h * SS; this.ow = w; this.oh = h;
    this.buf = new Float32Array(this.w * this.h * 3);
  }
  blend(x, y, [r, g, b], a = 1) {
    if (x < 0 || y < 0 || x >= this.w || y >= this.h || a <= 0) return;
    const i = (y * this.w + x) * 3;
    this.buf[i] += (r - this.buf[i]) * a;
    this.buf[i + 1] += (g - this.buf[i + 1]) * a;
    this.buf[i + 2] += (b - this.buf[i + 2]) * a;
  }
  fill(color) {
    for (let i = 0; i < this.buf.length; i += 3) {
      this.buf[i] = color[0]; this.buf[i + 1] = color[1]; this.buf[i + 2] = color[2];
    }
  }
  rect(x, y, w, h, color, a = 1) {
    const x0 = Math.round(x * SS), y0 = Math.round(y * SS);
    const x1 = Math.round((x + w) * SS), y1 = Math.round((y + h) * SS);
    for (let py = y0; py < y1; py++) for (let px = x0; px < x1; px++) this.blend(px, py, color, a);
  }
  circle(cx, cy, r, color, a = 1) {
    const CX = cx * SS, CY = cy * SS, R = r * SS, R2 = R * R;
    for (let py = Math.floor(CY - R); py <= Math.ceil(CY + R); py++) {
      for (let px = Math.floor(CX - R); px <= Math.ceil(CX + R); px++) {
        const dx = px + .5 - CX, dy = py + .5 - CY;
        if (dx * dx + dy * dy <= R2) this.blend(px, py, color, a);
      }
    }
  }
  /** Polygone convexe ou concave simple, remplissage par test pair-impair. */
  poly(points, color, a = 1) {
    const pts = points.map(([x, y]) => [x * SS, y * SS]);
    const ys = pts.map(p => p[1]), xs = pts.map(p => p[0]);
    const y0 = Math.max(0, Math.floor(Math.min(...ys)));
    const y1 = Math.min(this.h - 1, Math.ceil(Math.max(...ys)));
    const x0 = Math.max(0, Math.floor(Math.min(...xs)));
    const x1 = Math.min(this.w - 1, Math.ceil(Math.max(...xs)));
    for (let py = y0; py <= y1; py++) {
      const yc = py + .5;
      const nodes = [];
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [xi, yi] = pts[i], [xj, yj] = pts[j];
        if ((yi < yc && yj >= yc) || (yj < yc && yi >= yc)) {
          nodes.push(xi + ((yc - yi) / (yj - yi)) * (xj - xi));
        }
      }
      nodes.sort((p, q) => p - q);
      for (let k = 0; k + 1 < nodes.length; k += 2) {
        const sx = Math.max(x0, Math.ceil(nodes[k] - .5));
        const ex = Math.min(x1, Math.floor(nodes[k + 1] - .5));
        for (let px = sx; px <= ex; px++) this.blend(px, py, color, a);
      }
    }
  }
  line(x1, y1, x2, y2, width, color, a = 1) {
    const steps = Math.ceil(Math.hypot(x2 - x1, y2 - y1) * SS);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      this.circle(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, width / 2, color, a);
    }
  }
  /** Halo radial doux. */
  radial(cx, cy, r, color, maxAlpha = .3) {
    const CX = cx * SS, CY = cy * SS, R = r * SS;
    for (let py = Math.max(0, Math.floor(CY - R)); py <= Math.min(this.h - 1, CY + R); py++) {
      for (let px = Math.max(0, Math.floor(CX - R)); px <= Math.min(this.w - 1, CX + R); px++) {
        const d = Math.hypot(px - CX, py - CY) / R;
        if (d < 1) this.blend(px, py, color, maxAlpha * (1 - d) * (1 - d));
      }
    }
  }
  toPng() {
    const out = Buffer.alloc(this.ow * this.oh * 3);
    const n = SS * SS;
    for (let y = 0; y < this.oh; y++) {
      for (let x = 0; x < this.ow; x++) {
        let r = 0, g = 0, b = 0;
        for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
          const i = ((y * SS + sy) * this.w + x * SS + sx) * 3;
          r += this.buf[i]; g += this.buf[i + 1]; b += this.buf[i + 2];
        }
        const o = (y * this.ow + x) * 3;
        out[o] = Math.round(r / n); out[o + 1] = Math.round(g / n); out[o + 2] = Math.round(b / n);
      }
    }
    return encodePng(this.ow, this.oh, out);
  }
}

/* ---------- Palette ------------------------------------------------- */
const VERT_900 = [19, 44, 33];
const VERT_700 = [37, 81, 57];
const VERT_500 = [61, 133, 96];
const VERT_300 = [127, 185, 149];
const CREME = [237, 243, 236];
const ACCENT = [176, 85, 47];

/** Silhouette de pin (conifere) construite par etages de branches. */
function pine(c, cx, baseY, height, color) {
  const tiers = 5;
  for (let i = 0; i < tiers; i++) {
    const t = i / (tiers - 1);
    const y = baseY - height * (0.16 + 0.78 * (1 - t));
    const half = height * (0.10 + 0.20 * t);
    const drop = height * 0.20;
    c.poly([[cx, y - drop * 0.75], [cx + half, y + drop * 0.25], [cx - half, y + drop * 0.25]], color);
  }
  c.rect(cx - height * 0.022, baseY - height * 0.2, height * 0.044, height * 0.2, color);
}

/** Silhouette de chene : houppier arrondi compose de cercles. */
function oak(c, cx, baseY, height, color) {
  const r = height * 0.28;
  const cy = baseY - height * 0.60;
  c.circle(cx, cy, r, color);
  c.circle(cx - r * 0.85, cy + r * 0.35, r * 0.66, color);
  c.circle(cx + r * 0.85, cy + r * 0.32, r * 0.70, color);
  c.circle(cx - r * 0.35, cy - r * 0.62, r * 0.55, color);
  c.circle(cx + r * 0.42, cy - r * 0.58, r * 0.50, color);
  c.rect(cx - height * 0.03, cy + r * 0.5, height * 0.06, baseY - (cy + r * 0.5), color);
}

/** Procession de chenilles : file de segments en ligne. */
function procession(c, x, y, len, count, color) {
  const step = len / count;
  for (let i = 0; i < count; i++) {
    // corps effile vers la queue, segments jointifs
    const r = step * (i === 0 ? 0.72 : 0.62 - 0.22 * (i / count));
    const py = y + Math.sin(i * 0.55) * step * 0.22;
    c.circle(x + i * step, py, r, color);
    if (i === 0) { // amorce de tete
      c.circle(x - step * 0.34, py - step * 0.22, r * 0.34, color);
      c.circle(x - step * 0.34, py + step * 0.22, r * 0.34, color);
    }
  }
}

/* ---------- Compositions -------------------------------------------- */
function ogImage() {
  const c = new Canvas(1200, 630);
  c.fill(VERT_900);
  c.radial(940, 120, 620, VERT_500, .38);
  c.radial(180, 600, 520, [10, 30, 22], .45);

  // Ligne d'horizon
  c.rect(0, 470, 1200, 2, [255, 255, 255], .12);

  // Groupe d'arbres
  pine(c, 250, 470, 300, VERT_700);
  pine(c, 400, 470, 380, VERT_500);
  oak(c, 600, 470, 300, VERT_300);
  pine(c, 760, 470, 250, VERT_700);
  oak(c, 930, 470, 360, VERT_500);

  // Procession au premier plan
  procession(c, 160, 545, 600, 14, CREME);
  // Rappel accent
  c.rect(0, 614, 1200, 16, ACCENT);
  c.rect(0, 0, 1200, 6, VERT_300);
  return c.toPng();
}

function iconImage(size) {
  const c = new Canvas(size, size);
  c.fill(VERT_900);
  const s = size / 100;
  pine(c, 50 * s, 82 * s, 66 * s, CREME);
  procession(c, 24 * s, 90 * s, 52 * s, 6, VERT_300);
  return c.toPng();
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="8" fill="#132C21"/>
<path d="M32 9c5.6 4.9 9 11.1 9 18.3C41 36.2 37 42.2 32 45.4c-5-3.2-9-9.2-9-18.1C23 20.1 26.4 13.9 32 9Z" fill="none" stroke="#EDF3EC" stroke-width="2.4"/>
<path d="M32 13v33" stroke="#EDF3EC" stroke-width="2"/>
<path d="M32 21.5 25 17M32 29l-7.6-4.4M32 36.5 25.4 32.6M32 21.5 39 17M32 29l7.6-4.4M32 36.5l6.6-3.9" stroke="#EDF3EC" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="18" cy="54" r="3.2" fill="#7FB995"/><circle cx="26" cy="54.6" r="2.8" fill="#7FB995"/>
<circle cx="33.5" cy="54" r="2.8" fill="#7FB995"/><circle cx="41" cy="54.6" r="2.8" fill="#7FB995"/>
<circle cx="48.5" cy="54" r="2.8" fill="#7FB995"/>
</svg>`;

export async function makeImages(imgDir, outRoot) {
  await fs.mkdir(imgDir, { recursive: true });
  await fs.writeFile(path.join(imgDir, 'og-default.png'), ogImage());
  for (const s of [180, 192, 512]) {
    await fs.writeFile(path.join(imgDir, `icon-${s}.png`), iconImage(s));
  }
  await fs.writeFile(path.join(outRoot, 'favicon.svg'), FAVICON);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await makeImages('dist/assets/img', 'dist');
  console.log('images generees');
}
