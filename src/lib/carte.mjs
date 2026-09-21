/**
 * Carte interactive de l'Île-de-France.
 *
 * SVG inline : chaque département est un lien vers sa page, survolable et
 * atteignable au clavier. Aucun JavaScript, aucune librairie, aucune tuile
 * distante — la carte fait partie du HTML et s'affiche instantanément.
 *
 * Tracés : src/lib/carte-idf-data.mjs (généré par scripts/make-carte-idf.mjs).
 */
import { carteViewBox, carteDepartements } from './carte-idf-data.mjs';
import { serviceArea } from './site.mjs';
import { esc } from './render.mjs';

/**
 * Départements trop petits pour accueillir leur nom en toutes lettres à
 * l'échelle de la carte : seul le code est inscrit. Les noms figurent dans
 * l'infobulle du lien et dans la légende sous la carte.
 */
const PETITE_COURONNE = new Set(['75', '92', '93', '94']);

const SLUGS = Object.fromEntries(serviceArea.map(d => [d.code, d.slug]));

/** Marge autour du tracé, pour que les bordures ne soient pas rognées. */
const MARGE = 12;

function viewBoxAvecMarge(vb) {
  const [x, y, w, h] = vb.split(' ').map(Number);
  return `${x - MARGE} ${y - MARGE} ${w + MARGE * 2} ${h + MARGE * 2}`;
}

export function carteIdf({ active = null, id = 'carte-idf' } = {}) {
  const depts = carteDepartements.map(d => {
    const url = `/departements/${SLUGS[d.code]}/`;
    const [cx, cy] = d.label;
    const courant = active === d.code;

    const etiquette = PETITE_COURONNE.has(d.code)
      ? `<text class="carte__code carte__code--petite" x="${cx}" y="${cy + 9}" text-anchor="middle">${d.code}</text>`
      : `<text class="carte__nom" x="${cx}" y="${cy}" text-anchor="middle">${esc(d.nom)}</text>
         <text class="carte__code carte__code--grande" x="${cx}" y="${cy + 30}" text-anchor="middle">${d.code}</text>`;

    return `<a class="carte__dept${courant ? ' is-courant' : ''}" href="${url}"${courant ? ' aria-current="page"' : ''}>
      <title>${esc(d.nom)} (${d.code}) — voir nos interventions</title>
      <path d="${d.d}"/>
      ${etiquette}
    </a>`;
  }).join('\n');

  const cle = carteDepartements
    .filter(d => PETITE_COURONNE.has(d.code))
    .map(d => `<a href="/departements/${SLUGS[d.code]}/"><b>${d.code}</b> ${esc(d.nom)}</a>`)
    .join(' · ');

  return `
<figure class="carte" id="${id}">
  <svg class="carte__svg" viewBox="${viewBoxAvecMarge(carteViewBox)}" aria-labelledby="${id}-titre" role="group">
    <title id="${id}-titre">Carte des huit départements d'Île-de-France. Chaque département renvoie à la page décrivant la situation locale.</title>
    ${depts}
  </svg>
  <figcaption class="carte__legende">
    <p class="carte__aide">Cliquez sur un département pour connaître les essences concernées,
    les massifs proches et les conditions d'intervention locales.</p>
    <p class="carte__cle"><span class="carte__cle-titre">Petite couronne</span> ${cle}</p>
    <p class="carte__source">Contours : IGN — Admin Express. Noms et codes : INSEE.</p>
  </figcaption>
</figure>`;
}
