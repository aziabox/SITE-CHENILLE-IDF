import { standardPage } from '../../lib/layout.mjs';
import { site } from '../../lib/site.mjs';
import { note, table, hasValue, esc } from '../../lib/render.mjs';

/** Ligne de tableau : valeur réelle, ou mention explicite si non renseignée. */
const ligne = (label, valeur) => [
  label,
  hasValue(valeur) ? esc(valeur) : '<em>information à compléter</em>'
];

const aCompleter = [
  ['Numéro de TVA intracommunautaire', site.vat],
  ['Certibiocide', site.certibiocide],
  ['Assurance responsabilité civile professionnelle', site.insurance],
  ['Médiateur de la consommation', site.mediateur],
  ['Adresse e-mail de contact', site.email]
].filter(([, v]) => !hasValue(v)).map(([l]) => l);

export default standardPage({
  url: '/mentions-legales/',
  title: 'Mentions légales — Chenilles processionnaires Île-de-France',
  description: "Mentions légales : éditeur du site, immatriculation, directeur de la publication, hébergeur, propriété intellectuelle et responsabilité.",
  h1: 'Mentions légales',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Mentions légales', url: '/mentions-legales/' }],
  datePublished: '2026-06-06',
  dateModified: '2026-09-21',
  priority: '0.2',
  toc: false,
  lead: `Informations légales relatives à l'éditeur et à l'hébergement de ce site, publiées
  conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.`,
  sections: [
    { h2: "Éditeur du site",
      html: `
      ${table(['', ''], [
        ligne('Dénomination', site.legalName),
        ligne('Forme juridique', site.legalForm),
        ['Adresse', `${esc(site.address.street)}, ${esc(site.address.postalCode)} ${esc(site.address.city)}`],
        ['Téléphone', `<a href="${site.phoneHref}">${site.phoneDisplay}</a>`],
        ligne('Adresse e-mail', site.email),
        ligne('SIREN', site.siren),
        ligne('SIRET (siège)', site.siret),
        ligne('Immatriculation au RCS', `${site.rcs} (greffe de ${site.rcsGreffe}, le ${site.rcsDate})`),
        ligne('Inscription au RNE', `le ${site.rneDate}`),
        ligne('Code APE / NAF', site.ape),
        ligne('Numéro de TVA intracommunautaire', site.vat),
        ligne('Directeur de la publication', site.publicationDirector)
      ], "Identification de l'éditeur")}
      <p>Le site est exploité sous le nom commercial
      « <strong>${esc(site.name)}</strong> ». L'activité déclarée est la désinfection, la
      désinsectisation et la dératisation ; le site ne présente que la lutte contre les chenilles
      processionnaires du pin et du chêne.</p>` },

    { h2: "Hébergement",
      html: `
      ${table(['', ''], [
        ['Hébergeur', esc(site.host.name)],
        ['Adresse', esc(site.host.address)],
        ['Site web', `<a href="${site.host.url}" rel="noopener nofollow" target="_blank">${esc(site.host.url.replace('https://', ''))}</a>`]
      ], "Identification de l'hébergeur")}` },

    { h2: "Activité réglementée et assurance",
      html: `
      <p>L'application de produits biocides à titre professionnel est encadrée. Les informations
      relatives à la certification et à l'assurance de responsabilité civile professionnelle sont
      communiquées sur demande, au <a href="${site.phoneHref}">${site.phoneDisplay}</a>.</p>
      ${table(['', ''], [
        ligne('Certibiocide', site.certibiocide),
        ligne('Assurance responsabilité civile professionnelle', site.insurance)
      ], 'Certification et assurance')}` },

    { h2: "Règlement des litiges",
      html: `
      <p>En cas de réclamation, contactez-nous en premier lieu au
      <a href="${site.phoneHref}">${site.phoneDisplay}</a> ou par courrier à l'adresse indiquée
      ci-dessus. Nous nous efforçons d'apporter une réponse dans les meilleurs délais.</p>
      <p>Conformément aux articles L.616-1 et R.616-1 du code de la consommation, tout consommateur a
      le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution
      amiable d'un litige qui l'oppose à un professionnel.</p>
      ${table(['', ''], [ligne('Médiateur de la consommation', site.mediateur)], 'Médiation')}
      <p>La plateforme européenne de règlement en ligne des litiges est accessible à l'adresse
      <span>ec.europa.eu/consumers/odr</span>.</p>` },

    { h2: "Propriété intellectuelle",
      html: `
      <p>L'ensemble des contenus de ce site — textes, illustrations, schémas, structure — est protégé
      par le droit de la propriété intellectuelle. Toute reproduction, représentation ou adaptation,
      totale ou partielle, sans autorisation écrite préalable est interdite.</p>
      <p>Les schémas et illustrations ont été réalisés spécifiquement pour ce site à des fins
      pédagogiques. Ils représentent les espèces et les dispositifs décrits, et n'ont pas valeur de
      photographie documentaire.</p>
      <p>La carte des départements franciliens s'appuie sur des contours issus d'<strong>Admin Express</strong>
      (IGN) et sur les noms et codes de l'<strong>INSEE</strong>.</p>` },

    { h2: "Responsabilité et contenu",
      html: `
      <p>Les informations publiées ont un caractère général et informatif. Elles décrivent des espèces,
      des méthodes et des repères de calendrier qui varient selon les années, les sites et les
      conditions locales. Elles ne sauraient se substituer à un diagnostic réalisé sur place.</p>
      <p>Les informations relatives à la santé humaine ou animale sont fournies à titre général et ne
      constituent ni un diagnostic, ni une prescription, ni un avis médical ou vétérinaire. En cas
      d'exposition, il appartient à chacun de consulter un professionnel de santé ou un vétérinaire
      selon la situation.</p>
      <p>Les liens vers des sites tiers sont fournis à titre d'information. L'éditeur n'exerce aucun
      contrôle sur leur contenu et décline toute responsabilité à leur égard.</p>` },

    { h2: "Données personnelles et cookies",
      html: `
      <p>Le traitement des données transmises via le formulaire de contact, la durée de conservation,
      les destinataires et les modalités d'exercice de vos droits sont décrits dans la
      <a href="/politique-de-confidentialite/">politique de confidentialité</a>, qui précise également
      la politique applicable aux cookies et à la mesure d'audience.</p>` }
  ],
  afterSections: aCompleter.length ? `
<div class="prose">
  ${note(`<p><strong>À renseigner avant la mise en ligne définitive :</strong>
  ${aCompleter.map(l => esc(l)).join(', ')}.</p>
  <p>Ces champs sont volontairement laissés vides plutôt que remplis approximativement.
  Ils se complètent dans <code>src/lib/site.mjs</code>.</p>`, 'Note à l\'exploitant')}
</div>` : '',
  cta: null,
  related: [
    { url: '/politique-de-confidentialite/', label: 'Politique de confidentialité', hint: 'Données et cookies' },
    { url: '/contact/', label: 'Contact', hint: 'Nous joindre' }
  ]
});
