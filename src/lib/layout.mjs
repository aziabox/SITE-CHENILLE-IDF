import { esc, anchorId, faqBlock, cta, relatedLinks, frDate, keyAnswer } from './render.mjs';
import { site } from './site.mjs';
import { carteIdf } from './carte.mjs';

/**
 * Gabarit editorial commun aux pages de contenu.
 * Les modules de contenu ne fournissent que des donnees : le gabarit se
 * charge du H1, du sommaire, des ancres, de la FAQ, du CTA et du maillage.
 */
export function standardPage(def) {
  const sections = (def.sections || []).map(s => ({ ...s, id: s.id || anchorId(s.h2) }));

  const toc = (def.toc !== false && sections.length >= 5) ? `
<nav class="toc" aria-labelledby="toc-title">
  <p class="toc__title" id="toc-title">Sur cette page</p>
  <ol>${sections.map(s => `<li><a href="#${s.id}">${esc(s.tocLabel || s.h2)}</a></li>`).join('')}
  ${def.renderFaq !== false && def.faq && def.faq.length ? `<li><a href="#faq">Questions fréquentes</a></li>` : ''}</ol>
</nav>` : '';

  const meta = [];
  if (def.datePublished) meta.push(`<span>Publié le ${frDate(def.datePublished)}</span>`);
  if (def.dateModified && def.dateModified !== def.datePublished) {
    meta.push(`<span>Mis à jour le ${frDate(def.dateModified)}</span>`);
  }
  if (def.metaExtra) meta.push(`<span>${def.metaExtra}</span>`);

  const head = `
<div class="page-head prose">
  <h1>${esc(def.h1)}</h1>
  ${meta.length ? `<p class="page-meta">${meta.join('')}</p>` : ''}
  ${def.lead ? `<p class="lead">${def.lead}</p>` : ''}
  ${def.answer ? keyAnswer(def.answer, def.answerLabel) : ''}
  ${toc}
</div>`;

  const bodySections = sections.map(s => `
<section class="section prose" id="${s.id}" aria-labelledby="${s.id}-t">
  <h2 id="${s.id}-t">${s.h2}</h2>
  ${s.html}
</section>`).join('');

  // renderFaq: false -> les questions sont deja affichees par la page
  // (ex. FAQ groupee par theme) ; on ne les repete pas, mais elles restent
  // utilisees pour les donnees structurees FAQPage.
  const faqHtml = (def.renderFaq !== false && def.faq && def.faq.length)
    ? `<div class="prose">${faqBlock(def.faq, def.faqHeading || 'Questions fréquentes')}</div>` : '';

  const ctaHtml = def.cta ? cta(def.cta) : '';
  const relatedHtml = def.related
    ? `<div class="prose">${relatedLinks(def.relatedTitle || 'À lire ensuite', def.related)}</div>` : '';

  // carteActive : code de département à mettre en évidence sur la carte.
  const carteHtml = def.carteActive
    ? `<div class="wrap">${carteIdf({ active: def.carteActive, id: 'carte-' + def.carteActive })}</div>`
    : '';

  const body = [head, bodySections, carteHtml, def.afterSections || '', faqHtml, ctaHtml, relatedHtml]
    .filter(Boolean).join('\n');

  return { ...def, sections, body };
}

/** Rappel de la zone couverte, insere en bas des pages de service. */
export const zoneReminder = `
<p>Nous intervenons uniquement en Île-de-France : Paris (75), Seine-et-Marne (77),
Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93),
Val-de-Marne (94) et Val-d'Oise (95).
<a href="/departements/">Voir le détail par département</a>.</p>`;

/** Ligne de contact reutilisable dans un paragraphe de contenu. */
export const telLink = `<a href="${site.phoneHref}" data-cta="tel" data-cta-zone="texte">${site.phoneDisplay}</a>`;
