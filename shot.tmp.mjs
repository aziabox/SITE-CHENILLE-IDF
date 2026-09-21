import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args:['--no-sandbox'] });
const shots = [
  ['mobile-320', 320, 700, '/', '/tmp/m320.png'],
  ['mobile-390', 390, 844, '/', '/tmp/m390.png'],
  ['article', 1280, 1000, '/chenille-processionnaire-du-pin/', '/tmp/article.png'],
  ['dept', 1280, 1000, '/departements/', '/tmp/dept.png']
];
for (const [name, w, h, url, out] of shots) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('http://localhost:4173' + url, { waitUntil: 'load' });
  await p.screenshot({ path: out });
  const o = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  console.log(name, 'overflow:', o);
  await p.close();
}
await b.close();
