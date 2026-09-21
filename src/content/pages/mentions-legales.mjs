import { standardPage } from '../../lib/layout.mjs';
import { site } from '../../lib/site.mjs';
import { note, hasValue } from '../../lib/render.mjs';

const champ = (label, valeur) => hasValue(valeur)
  ? `<li><strong>${label}</strong> — ${valeur}</li>`
  : `<li><strong>${label}</strong> — <em>information à compléter avant la mise en ligne</em></li>`;

export default standardPage({
  url: '/mentions-legales/',
  title: 'Mentions légales',
  description: "Mentions légales du site : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
  h1: 'Mentions légales',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Mentions légales', url: '/mentions-legales/' }],
  datePublished: '2026-06-06',
  dateModified: '2026-09-18',
  noindex: false,
  priority: '0.2',
  toc: false,
  lead: `Informations légales relatives à l'éditeur et à l'hébergement de ce site.`,
  sections: [
    { h2: "Éditeur du site",
      html: `
      ${note(`<p><strong>Ces mentions doivent être complétées avant la mise en ligne.</strong> Les champs
      marqués « information à compléter » attendent les données réelles de l'entreprise : raison sociale,
      forme juridique, capital, SIRET, RCS, numéro de TVA, adresse du siège, directeur de la publication,
      numéro d'agrément et assurance responsabilité civile professionnelle. Aucune information n'a été
      inventée pour remplir cette page.</p>`, 'À renseigner avant publication')}
      <ul class="plain">
        ${champ('Raison sociale', site.legalName)}
        ${champ('SIRET', site.siret)}
        ${champ('RCS', site.rcs)}
        ${champ('Adresse du siège', hasValue(site.address.street) ? `${site.address.street}, ${site.address.postalCode} ${site.address.city}` : site.address.street)}
        <li><strong>Téléphone</strong> — <a href="${site.phoneHref}">${site.phoneDisplay}</a></li>
        ${champ('Adresse e-mail', site.email)}
        ${champ('Directeur de la publication', site.editorial.author)}
        ${champ('Agrément / certification', site.certibiocide)}
        ${champ('Assurance responsabilité civile professionnelle', site.insurance)}
      </ul>` },

    { h2: "Hébergement",
      html: `
      <ul class="plain">
        <li><strong>Hébergeur</strong> — <em>information à compléter avant la mise en ligne</em></li>
        <li><strong>Adresse</strong> — <em>information à compléter avant la mise en ligne</em></li>
        <li><strong>Contact</strong> — <em>information à compléter avant la mise en ligne</em></li>
      </ul>` },

    { h2: "Propriété intellectuelle",
      html: `
      <p>L'ensemble des contenus de ce site — textes, illustrations, schémas, structure — est protégé par
      le droit de la propriété intellectuelle. Toute reproduction, représentation ou adaptation, totale ou
      partielle, sans autorisation écrite préalable est interdite.</p>
      <p>Les schémas et illustrations présents sur le site ont été réalisés spécifiquement pour celui-ci à
      des fins pédagogiques. Ils représentent les espèces et les dispositifs décrits, et n'ont pas valeur de
      photographie documentaire.</p>` },

    { h2: "Responsabilité et contenu",
      html: `
      <p>Les informations publiées sur ce site ont un caractère général et informatif. Elles décrivent des
      espèces, des méthodes et des repères de calendrier qui varient selon les années, les sites et les
      conditions locales. Elles ne sauraient se substituer à un diagnostic réalisé sur place.</p>
      <p>Les informations relatives à la santé humaine ou animale sont fournies à titre général et ne
      constituent ni un diagnostic, ni une prescription, ni un avis médical ou vétérinaire. En cas
      d'exposition, il appartient à chacun de consulter un professionnel de santé ou un vétérinaire selon la
      situation.</p>
      <p>Les liens vers des sites tiers sont fournis à titre d'information. L'éditeur n'exerce aucun
      contrôle sur leur contenu et décline toute responsabilité à leur égard.</p>` },

    { h2: "Données personnelles et cookies",
      html: `
      <p>Le traitement des données transmises via le formulaire de contact est décrit dans la
      <a href="/politique-de-confidentialite/">politique de confidentialité</a>, qui précise également la
      politique applicable aux cookies et aux outils de mesure d'audience.</p>` },

    { h2: "Contact",
      html: `
      <p>Pour toute question relative au site ou à son contenu :
      <a href="${site.phoneHref}">${site.phoneDisplay}</a> ou via le
      <a href="/contact/">formulaire de contact</a>.</p>` }
  ],
  cta: null,
  related: [
    { url: '/politique-de-confidentialite/', label: 'Politique de confidentialité', hint: 'Données et cookies' },
    { url: '/contact/', label: 'Contact', hint: 'Nous joindre' }
  ]
});
