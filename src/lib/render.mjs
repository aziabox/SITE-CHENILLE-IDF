import { site, nav, serviceArea, PLACEHOLDER } from './site.mjs';

/* ------------------------------------------------------------------ *
 * Utilitaires
 * ------------------------------------------------------------------ */

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** Un champ de configuration est-il reellement renseigne ? */
export const hasValue = (v) => typeof v === 'string' && v.trim() !== '' && !v.startsWith(PLACEHOLDER);

/** Retire les balises HTML (pour les meta et le JSON-LD). */
export const stripTags = (html = '') => String(html)
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/\s+/g, ' ')
  .trim();

export const abs = (url) => site.origin + url;

/** Identifiant d'ancre stable a partir d'un intitule de section. */
export const anchorId = (text) => stripTags(text)
  .toLowerCase()
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 60);

const FR_MONTHS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
export const frDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${FR_MONTHS[m - 1]} ${y}`;
};

/* ------------------------------------------------------------------ *
 * Composants de contenu (reutilisables par les pages)
 * ------------------------------------------------------------------ */

/**
 * Bloc "reponse directe" : la reponse courte placee juste apres le H1 ou
 * un H2. C'est le format le plus exploitable par les moteurs generatifs
 * et les assistants vocaux (GEO).
 */
export const keyAnswer = (html, label = 'En bref') => `
<div class="answer">
  <p class="answer__label">${esc(label)}</p>
  <div class="answer__body">${html}</div>
</div>`;

/** Encadre d'information secondaire. */
export const note = (html, title = '') => `
<aside class="note">${title ? `<p class="note__title">${esc(title)}</p>` : ''}${html}</aside>`;

/** Encadre de securite / sante. Ton factuel, jamais de diagnostic. */
export const safety = (html, title = 'Sécurité') => `
<aside class="note note--safety">
  <p class="note__title">${esc(title)}</p>${html}
</aside>`;

/** Tableau comparatif. rows = [[c1, c2, ...], ...] */
export const table = (headers, rows, caption = '') => `
<div class="table-wrap">
  <table>
    ${caption ? `<caption>${esc(caption)}</caption>` : ''}
    <thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map((c, i) =>
      i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}
    </tbody>
  </table>
</div>`;

/** Liste d'etapes numerotees. */
export const steps = (items) => `
<ol class="steps">${items.map(it => `
  <li class="steps__item">
    <p class="steps__title">${esc(it.title)}</p>
    <div class="steps__body">${it.body}</div>
  </li>`).join('')}
</ol>`;

/** Grille de cartes sobres (2 a 4 colonnes). */
export const cards = (items, modifier = '') => `
<ul class="cards ${modifier}">${items.map(it => `
  <li class="card">
    ${it.url ? `<h3 class="card__title"><a href="${it.url}">${it.title}</a></h3>`
             : `<h3 class="card__title">${it.title}</h3>`}
    <p class="card__text">${it.text}</p>
  </li>`).join('')}
</ul>`;

/** Bloc FAQ accessible, sans JavaScript (details/summary natifs). */
export const faqBlock = (faq, heading = 'Questions fréquentes', id = 'faq') => {
  if (!faq || !faq.length) return '';
  return `
<section class="section" id="${id}" aria-labelledby="${id}-title">
  <h2 id="${id}-title">${esc(heading)}</h2>
  <div class="faq">${faq.map((item, i) => `
    <details class="faq__item"${i === 0 ? ' open' : ''}>
      <summary class="faq__q">${esc(item.q)}</summary>
      <div class="faq__a">${item.a}</div>
    </details>`).join('')}
  </div>
</section>`;
};

/**
 * Bloc d'appel a l'action. Volontairement discret et contextualise :
 * on ne repete pas le meme CTA apres chaque paragraphe.
 */
export const cta = ({ title, text, primary = 'Appeler un spécialiste', secondary = true }) => `
<section class="cta">
  <div class="cta__inner">
    <h2 class="cta__title">${esc(title)}</h2>
    <p class="cta__text">${text}</p>
    <p class="cta__actions">
      <a class="btn btn--accent" href="${site.phoneHref}" data-cta="tel" data-cta-zone="section">${esc(primary)} — ${site.phoneDisplay}</a>
      ${secondary ? `<a class="btn btn--ghost" href="/contact/" data-cta="form" data-cta-zone="section">Décrire la situation en ligne</a>` : ''}
    </p>
  </div>
</section>`;

/** Grille de liens internes contextualises (maillage). */
export const relatedLinks = (title, links) => {
  if (!links || !links.length) return '';
  return `
<nav class="related" aria-labelledby="related-title">
  <h2 id="related-title" class="related__title">${esc(title)}</h2>
  <ul class="related__list">${links.map(l => `
    <li><a href="${l.url}"><span class="related__label">${esc(l.label)}</span>${
      l.hint ? `<span class="related__hint">${esc(l.hint)}</span>` : ''}</a></li>`).join('')}
  </ul>
</nav>`;
};

/** Figure illustree (SVG interne, jamais de photo d'un autre nuisible). */
export const figure = ({ src, alt, caption = '', width = 960, height = 540, eager = false }) => `
<figure class="figure">
  <img src="${src}" alt="${esc(alt)}" width="${width}" height="${height}"
       ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>
  ${caption ? `<figcaption>${caption}</figcaption>` : ''}
</figure>`;

/* ------------------------------------------------------------------ *
 * Fil d'Ariane
 * ------------------------------------------------------------------ */

const breadcrumbHtml = (trail) => {
  if (!trail || trail.length < 2) return '';
  return `
<nav class="breadcrumb" aria-label="Fil d'Ariane">
  <ol>${trail.map((c, i) => {
    const last = i === trail.length - 1;
    return `<li>${last
      ? `<span aria-current="page">${esc(c.name)}</span>`
      : `<a href="${c.url}">${esc(c.name)}</a>`}</li>`;
  }).join('')}</ol>
</nav>`;
};

/* ------------------------------------------------------------------ *
 * Donnees structurees
 * ------------------------------------------------------------------ */

const organizationNode = () => {
  const node = {
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: site.name,
    url: abs('/'),
    telephone: site.phoneE164,
    areaServed: serviceArea.map(d => ({
      '@type': 'AdministrativeArea', name: `${d.name} (${d.code})`
    })),
    knowsAbout: [
      'Thaumetopoea pityocampa', 'Thaumetopoea processionea',
      'chenille processionnaire du pin', 'chenille processionnaire du chêne',
      'échenillage', 'piégeage des chenilles processionnaires'
    ]
  };
  if (hasValue(site.legalName)) node.legalName = site.legalName;
  if (hasValue(site.email)) node.email = site.email;
  if (hasValue(site.address.street) && hasValue(site.address.city)) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country
    };
  }
  if (hasValue(site.googleBusinessUrl)) node.sameAs = [site.googleBusinessUrl];
  return node;
};

const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': abs('/#website'),
  url: abs('/'),
  name: site.name,
  inLanguage: 'fr-FR',
  publisher: { '@id': abs('/#organization') }
});

/**
 * LocalBusiness n'est emis que si une adresse d'etablissement reelle est
 * renseignee. Sans adresse verifiable, on s'en tient a Organization :
 * aucun faux etablissement n'est declare aux moteurs.
 */
const localBusinessNode = () => {
  if (!hasValue(site.address.street) || !hasValue(site.address.city)) return null;
  return {
    '@type': 'PestControlService',
    '@id': abs('/#localbusiness'),
    name: site.name,
    url: abs('/'),
    telephone: site.phoneE164,
    parentOrganization: { '@id': abs('/#organization') },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country
    },
    openingHoursSpecification: site.openingHoursSchema.map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map(d => `https://schema.org/${d}`),
      opens: h.open, closes: h.close
    })),
    areaServed: serviceArea.map(d => ({ '@type': 'AdministrativeArea', name: `${d.name} (${d.code})` }))
  };
};

const buildGraph = (page) => {
  const graph = [organizationNode(), websiteNode()];
  const lb = localBusinessNode();
  if (lb) graph.push(lb);

  const pageNode = {
    '@type': page.pageType || 'WebPage',
    '@id': abs(page.url) + '#webpage',
    url: abs(page.url),
    name: page.title,
    description: page.description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': abs('/#website') },
    about: { '@id': abs('/#organization') }
  };
  if (page.primaryImage) {
    pageNode.primaryImageOfPage = { '@type': 'ImageObject', url: abs(page.primaryImage) };
  }
  if (page.datePublished) pageNode.datePublished = page.datePublished;
  if (page.dateModified) pageNode.dateModified = page.dateModified;
  if (page.trail && page.trail.length > 1) {
    pageNode.breadcrumb = { '@id': abs(page.url) + '#breadcrumb' };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': abs(page.url) + '#breadcrumb',
      itemListElement: page.trail.map((c, i) => ({
        '@type': 'ListItem', position: i + 1, name: c.name,
        ...(i === page.trail.length - 1 ? {} : { item: abs(c.url) })
      }))
    });
  }
  graph.push(pageNode);

  // Service : uniquement sur les pages qui decrivent reellement une prestation.
  if (page.service) {
    const svc = {
      '@type': 'Service',
      '@id': abs(page.url) + '#service',
      name: page.service.name,
      serviceType: page.service.type || page.service.name,
      description: page.service.description,
      provider: { '@id': abs('/#organization') },
      areaServed: (page.service.areaServed || serviceArea.map(d => `${d.name} (${d.code})`))
        .map(n => ({ '@type': 'AdministrativeArea', name: n })),
      mainEntityOfPage: { '@id': abs(page.url) + '#webpage' }
    };
    graph.push(svc);
  }

  // Article : pages de blog uniquement.
  if (page.article) {
    const art = {
      '@type': 'Article',
      '@id': abs(page.url) + '#article',
      headline: page.article.headline || page.h1,
      description: page.description,
      datePublished: page.datePublished,
      dateModified: page.dateModified || page.datePublished,
      inLanguage: 'fr-FR',
      isPartOf: { '@id': abs('/#website') },
      mainEntityOfPage: { '@id': abs(page.url) + '#webpage' },
      publisher: { '@id': abs('/#organization') },
      articleSection: page.article.section
    };
    // Auteur : uniquement si un responsable editorial reel est renseigne.
    if (hasValue(site.editorial.author)) {
      art.author = { '@type': 'Person', name: site.editorial.author };
    } else {
      art.author = { '@id': abs('/#organization') };
    }
    if (page.primaryImage) art.image = abs(page.primaryImage);
    graph.push(art);
  }

  // FAQPage : uniquement si les questions/reponses sont visibles sur la page.
  if (page.faq && page.faq.length >= 2) {
    graph.push({
      '@type': 'FAQPage',
      '@id': abs(page.url) + '#faq',
      mainEntity: page.faq.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) }
      }))
    });
  }

  if (page.itemList) {
    graph.push({
      '@type': 'ItemList',
      '@id': abs(page.url) + '#list',
      name: page.itemList.name,
      itemListElement: page.itemList.items.map((it, i) => ({
        '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.url)
      }))
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};

/* ------------------------------------------------------------------ *
 * En-tete et pied de page
 * ------------------------------------------------------------------ */

const logoSvg = `
<svg class="logo__mark" viewBox="0 0 40 40" width="34" height="34" aria-hidden="true" focusable="false">
  <path d="M20 3c5.4 4.6 8.6 10.4 8.6 17.1C28.6 28.4 24.8 34 20 37c-4.8-3-8.6-8.6-8.6-16.9C11.4 13.4 14.6 7.6 20 3Z" fill="currentColor" opacity=".18"/>
  <path d="M20 5.4c4.5 4.2 7.1 9.4 7.1 15.1 0 7-3.1 11.9-7.1 14.7-4-2.8-7.1-7.7-7.1-14.7 0-5.7 2.6-10.9 7.1-15.1Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M20 8.5V34" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <path d="M20 15.5 14.6 12M20 21.5l-6-3.4M20 27l-5.2-3M20 15.5 25.4 12M20 21.5l6-3.4M20 27l5.2-3" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
</svg>`;

const headerHtml = (current) => `
<a class="skip-link" href="#contenu">Aller au contenu</a>
<header class="header" id="header">
  <div class="header__bar">
    <a class="logo" href="/" aria-label="${esc(site.name)} — accueil">
      ${logoSvg}
      <span class="logo__text"><strong>Chenilles processionnaires</strong><span>Île-de-France</span></span>
    </a>

    <nav class="nav" aria-label="Navigation principale">
      <ul class="nav__list">
        ${nav.map(item => `
        <li class="nav__item${item.children ? ' has-sub' : ''}">
          <a href="${item.url}"${current && current.startsWith(item.url) && item.url !== '/' ? ' aria-current="true"' : ''}>${esc(item.label)}</a>
          ${item.children ? `
          <div class="subnav">
            <ul>${item.children.map(c => `<li><a href="${c.url}">${esc(c.label)}</a></li>`).join('')}</ul>
          </div>` : ''}
        </li>`).join('')}
      </ul>
    </nav>

    <a class="header__tel" href="${site.phoneHref}" data-cta="tel" data-cta-zone="header">
      <span class="header__tel-label">Un spécialiste</span>
      <span class="header__tel-num">${site.phoneDisplay}</span>
    </a>

    <button class="burger" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Ouvrir le menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="mobile-menu" id="menu-mobile" hidden>
    <ul class="mobile-menu__list">
      ${nav.map(item => item.children ? `
      <li>
        <details>
          <summary>${esc(item.label)}</summary>
          <ul>
            <li><a href="${item.url}">Vue d'ensemble</a></li>
            ${item.children.map(c => `<li><a href="${c.url}">${esc(c.label)}</a></li>`).join('')}
          </ul>
        </details>
      </li>` : `<li><a class="mobile-menu__link" href="${item.url}">${esc(item.label)}</a></li>`).join('')}
      <li><a class="mobile-menu__link" href="/contact/">Contact</a></li>
    </ul>
    <a class="btn btn--accent btn--block" href="${site.phoneHref}" data-cta="tel" data-cta-zone="menu">Appeler le ${site.phoneDisplay}</a>
  </div>
</header>`;

const footerHtml = () => `
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__col footer__col--about">
      <p class="footer__brand">${logoSvg}<span>Chenilles processionnaires<br>Île-de-France</span></p>
      <p>Nous traitons un seul sujet : la chenille processionnaire du pin et la chenille
      processionnaire du chêne. Identification, échenillage, piégeage, destruction de nids,
      suivi préventif — pour les particuliers, les copropriétés, les entreprises et les collectivités
      des huit départements franciliens.</p>
      <p class="footer__tel">
        <a href="${site.phoneHref}" data-cta="tel" data-cta-zone="footer">${site.phoneDisplay}</a>
        <span class="footer__hours">${esc(site.openingHours)}</span>
      </p>
    </div>

    <div class="footer__col">
      <h2>Espèces &amp; identification</h2>
      <ul>
        <li><a href="/chenilles-processionnaires/">Les chenilles processionnaires</a></li>
        <li><a href="/chenille-processionnaire-du-pin/">Processionnaire du pin</a></li>
        <li><a href="/chenille-processionnaire-du-chene/">Processionnaire du chêne</a></li>
        <li><a href="/identifier-chenilles-processionnaires/">Identifier une chenille</a></li>
        <li><a href="/identifier-nid-chenilles-processionnaires/">Identifier un nid</a></li>
        <li><a href="/chenilles-processionnaires-danger/">Dangers et poils urticants</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h2>Interventions</h2>
      <ul>
        <li><a href="/traitement-chenilles-processionnaires/">Traitement</a></li>
        <li><a href="/destruction-nid-chenilles-processionnaires/">Destruction de nid</a></li>
        <li><a href="/echenillage/">Échenillage</a></li>
        <li><a href="/piegeage-chenilles-processionnaires/">Piégeage</a></li>
        <li><a href="/traitement-preventif/">Traitement préventif</a></li>
        <li><a href="/traitement-curatif/">Traitement curatif</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h2>Qui fait appel à nous</h2>
      <ul>
        <li><a href="/particuliers/">Particuliers</a></li>
        <li><a href="/coproprietes/">Copropriétés</a></li>
        <li><a href="/entreprises/">Entreprises</a></li>
        <li><a href="/collectivites/">Collectivités</a></li>
        <li><a href="/ecoles/">Écoles et crèches</a></li>
        <li><a href="/espaces-verts/">Espaces verts</a></li>
      </ul>
    </div>

    <div class="footer__col">
      <h2>Île-de-France</h2>
      <ul>
        <li><a href="/departements/">Toutes les zones</a></li>
        ${serviceArea.map(d => `<li><a href="/departements/${d.slug}/">${esc(d.name)} (${d.code})</a></li>`).join('')}
      </ul>
    </div>

    <div class="footer__col">
      <h2>Ressources</h2>
      <ul>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/faq/">FAQ complète</a></li>
        <li><a href="/contact/">Contact &amp; devis</a></li>
        <li><a href="/mentions-legales/">Mentions légales</a></li>
        <li><a href="/politique-de-confidentialite/">Politique de confidentialité</a></li>
      </ul>
    </div>
  </div>

  <div class="footer__legal">
    <p>${esc(site.name)} — intervention en Île-de-France (75, 77, 78, 91, 92, 93, 94, 95).</p>
    <p>Les informations de santé publiées sur ce site sont générales et ne remplacent pas
       l'avis d'un médecin ou d'un vétérinaire.</p>
  </div>
</footer>`;

/* ------------------------------------------------------------------ *
 * Script d'interface (menu mobile + suivi des CTA)
 * Volontairement minimal : aucune librairie, ~1 Ko.
 * ------------------------------------------------------------------ */

const inlineJs = `
(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu-mobile');
  if(b&&m){b.addEventListener('click',function(){
    var o=b.getAttribute('aria-expanded')==='true';
    b.setAttribute('aria-expanded',String(!o));
    b.setAttribute('aria-label',o?'Ouvrir le menu':'Fermer le menu');
    m.hidden=o;document.documentElement.classList.toggle('menu-open',!o);
  });}
  document.addEventListener('click',function(e){
    var a=e.target.closest('[data-cta]');if(!a)return;
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:'cta_click',cta_type:a.getAttribute('data-cta'),
      cta_zone:a.getAttribute('data-cta-zone')||'',page_path:location.pathname});
  },{passive:true});
})();`;

/* ------------------------------------------------------------------ *
 * Page complete
 * ------------------------------------------------------------------ */

export function renderPage(page, assets) {
  const canonical = abs(page.url);
  const ogImage = abs(page.ogImage || page.primaryImage || '/assets/img/og-default.png');
  const robots = page.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const gtmHead = site.gtmId ? `
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
(window,document,'script','dataLayer','${site.gtmId}');</script>` : '';
  const gtmBody = site.gtmId ? `
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${site.gtmId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>` : '';

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="${site.themeColor}">
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(page.ogImageAlt || 'Chenilles processionnaires — intervention en Île-de-France')}">
${page.article ? `<meta property="article:published_time" content="${page.datePublished}">
<meta property="article:modified_time" content="${page.dateModified || page.datePublished}">
<meta property="article:section" content="${esc(page.article.section)}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" as="style" href="${assets.css}">
<link rel="stylesheet" href="${assets.css}">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<script type="application/ld+json">${JSON.stringify(buildGraph(page))}</script>${gtmHead}
</head>
<body class="${page.bodyClass || ''}">${gtmBody}
${headerHtml(page.url)}
<main id="contenu">
${breadcrumbHtml(page.trail)}
${page.body}
</main>
${footerHtml()}
<script>${inlineJs}</script>
</body>
</html>`;
}
