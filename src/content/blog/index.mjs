import { standardPage } from '../../lib/layout.mjs';
import { esc, frDate, note } from '../../lib/render.mjs';
import { site, blogCategories } from '../../lib/site.mjs';
import { posts, postsByCategory } from './posts/_all.mjs';
import { hasValue } from '../../lib/render.mjs';

const catNav = (active = null, heading = true) => `
<nav class="related" aria-label="Catégories du blog">
  ${heading ? '<p class="related__title">Autres catégories</p>' : ''}
  <ul class="related__list">
    ${blogCategories.map(c => `<li><a href="/blog/${c.slug}/"${c.slug === active ? ' aria-current="page"' : ''}>
      <span class="related__label">${esc(c.name)}</span>
      <span class="related__hint">${postsByCategory(c.slug).length} article${postsByCategory(c.slug).length > 1 ? 's' : ''}</span>
    </a></li>`).join('')}
  </ul>
</nav>`;

const postList = (list) => `
<ul class="post-list">
  ${list.map(p => `<li class="post">
    <a class="post__cat" href="/blog/${p.category}/">${esc(p.categoryName)}</a>
    <h3 class="post__title"><a href="${p.url}">${esc(p.h1)}</a></h3>
    <p class="post__excerpt">${esc(p.excerpt)}</p>
    <p class="post__date">${frDate(p.dateModified || p.datePublished)}</p>
  </li>`).join('')}
</ul>`;

/* ------------------------------------------------------------------ *
 * Pages d'articles
 * ------------------------------------------------------------------ */
const articlePages = posts.map(p => {
  const cat = blogCategories.find(c => c.slug === p.category);
  const sameCat = postsByCategory(p.category).filter(x => x.slug !== p.slug).slice(0, 2);
  const related = [
    ...(p.related || []),
    ...sameCat.map(x => ({ url: x.url, label: x.h1, hint: `Dans « ${cat.name} »` }))
  ].slice(0, 6);

  return standardPage({
    url: p.url,
    title: p.title,
    description: p.description,
    h1: p.h1,
    trail: [
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: cat.name, url: `/blog/${cat.slug}/` },
      { name: p.h1, url: p.url }
    ],
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    metaExtra: hasValue(site.editorial.author)
      ? `Par ${esc(site.editorial.author)}, ${esc(site.editorial.role)}` : '',
    article: { section: cat.name, headline: p.h1 },
    pageType: 'WebPage',
    priority: '0.6',
    lead: p.lead,
    answer: p.answer,
    answerLabel: p.answerLabel || 'Réponse courte',
    sections: p.sections,
    faq: p.faq,
    cta: p.cta || {
      title: "Une situation précise à faire évaluer ?",
      text: `Un échange de quelques minutes permet d'identifier l'espèce, la fenêtre d'intervention utile et
      le degré d'urgence réel. Nous intervenons en Île-de-France.`,
      primary: 'Parler à un spécialiste'
    },
    related,
    relatedTitle: 'À lire ensuite'
  });
});

/* ------------------------------------------------------------------ *
 * Pages de categories
 * ------------------------------------------------------------------ */
const categoryPages = blogCategories.map(c => {
  const list = postsByCategory(c.slug);
  return standardPage({
    url: `/blog/${c.slug}/`,
    title: `${c.title} — blog`,
    description: c.description,
    h1: c.title,
    trail: [{ name: 'Accueil', url: '/' }, { name: 'Blog', url: '/blog/' }, { name: c.name, url: `/blog/${c.slug}/` }],
    dateModified: list[0]?.dateModified || list[0]?.datePublished,
    priority: '0.5',
    toc: false,
    lead: c.description,
    itemList: { name: c.title, items: list.map(p => ({ name: p.h1, url: p.url })) },
    sections: [
      { h2: `Pourquoi cette rubrique`, toc: false, html: c.intro },
      { h2: `${list.length} article${list.length > 1 ? 's' : ''} dans cette catégorie`, toc: false,
        html: postList(list) + catNav(c.slug) }
    ],
    cta: {
      title: "Besoin d'un avis sur votre situation ?",
      text: `Les articles donnent les repères généraux. Pour un arbre précis, une photo et quelques
      informations suffisent à répondre utilement.`,
      primary: 'Poser une question'
    },
    related: [
      { url: '/blog/', label: 'Tous les articles', hint: `${posts.length} articles publiés` },
      { url: '/faq/', label: 'FAQ complète', hint: 'Les questions les plus posées' }
    ]
  });
});

/* ------------------------------------------------------------------ *
 * Sommaire du blog
 * ------------------------------------------------------------------ */
const blogIndex = standardPage({
  url: '/blog/',
  title: 'Blog : chenilles processionnaires, identification et traitement',
  description: "Guides pratiques sur les chenilles processionnaires du pin et du chêne : reconnaître, comprendre les risques, traiter et prévenir le retour.",
  h1: 'Blog',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Blog', url: '/blog/' }],
  dateModified: posts[0]?.dateModified || posts[0]?.datePublished,
  priority: '0.7',
  toc: false,
  itemList: { name: 'Articles du blog', items: posts.map(p => ({ name: p.h1, url: p.url })) },
  lead: `Des articles écrits à partir des situations que l'on rencontre réellement sur le terrain :
  identifier avant d'agir, comprendre le cycle pour choisir la bonne saison, et savoir ce qui relève de
  l'urgence.`,
  sections: [
    { h2: 'Par catégorie', toc: false, html: catNav(null, false) },
    { h2: `Tous les articles`, toc: false,
      html: postList(posts) + note(`<p>Les informations relatives à la santé humaine ou animale publiées sur
      ce blog sont générales et ne remplacent pas l'avis d'un médecin ou d'un vétérinaire.</p>`) }
  ],
  cta: {
    title: "Un arbre, une photo, une réponse",
    text: `Les articles donnent le cadre. Pour votre situation, l'identification à distance est souvent
    suffisante pour savoir quoi faire et quand.`,
    primary: 'Faire identifier un nid'
  },
  related: [
    { url: '/chenilles-processionnaires/', label: 'Les deux espèces', hint: 'La page de référence' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Méthodes et calendrier' },
    { url: '/faq/', label: 'FAQ complète', hint: '23 questions' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Les huit départements' }
  ]
});

export default [blogIndex, ...categoryPages, ...articlePages];
