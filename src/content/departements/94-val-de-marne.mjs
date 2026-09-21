import { standardPage } from '../../lib/layout.mjs';
import { note, table, esc } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';

const villes = villesOf('94-val-de-marne');

export default standardPage({
  url: '/departements/94-val-de-marne/',
  title: 'Chenilles processionnaires dans le Val-de-Marne (94)',
  description: "Val-de-Marne : bois de Vincennes, massifs du plateau briard et pavillonnaire dense. Deux espèces, deux calendriers, des jardins au contact des bois.",
  h1: 'Chenilles processionnaires dans le Val-de-Marne (94)',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Val-de-Marne (94)', url: '/departements/94-val-de-marne/' }],
  datePublished: '2026-04-30',
  dateModified: '2026-09-16',
  service: {
    name: 'Traitement des chenilles processionnaires dans le Val-de-Marne',
    type: 'Échenillage, aspiration de nids et piégeage',
    description: "Traitement des chenilles processionnaires du chêne et du pin dans les jardins, copropriétés et espaces publics du Val-de-Marne.",
    areaServed: ['Val-de-Marne (94)']
  },
  lead: `Le Val-de-Marne a une particularité : c'est le département de petite couronne où la densité de
  jardins privés est la plus forte, et ces jardins sont, pour une part importante, situés à quelques
  centaines de mètres d'un massif de chênes. Le contact entre le bois et le pavillon y est plus direct
  qu'ailleurs.`,
  answer: `<p>Dans le Val-de-Marne, la <strong>processionnaire du chêne</strong> est alimentée par le
  <strong>bois de Vincennes</strong> au nord-ouest et par les <strong>massifs du plateau briard</strong> au
  sud-est — bois Notre-Dame, forêt de la Grange et boisements associés. La <strong>processionnaire du
  pin</strong> concerne les conifères d'ornement des jardins pavillonnaires, des résidences et des parcs.
  Le tissu pavillonnaire dense met beaucoup de familles au contact direct de ces foyers.</p>`,
  sections: [
    { h2: 'Deux extrémités boisées, un centre urbain',
      tocLabel: 'Géographie du département',
      html: `
      <p>Le département s'organise entre deux pôles boisés et un centre densément bâti.</p>
      <p>Au nord-ouest, le <strong>bois de Vincennes</strong> — administrativement parisien, mais bordant
      directement plusieurs communes val-de-marnaises. C'est un grand ensemble de chênes, très fréquenté,
      qui alimente en permanence les arbres des communes riveraines.</p>
      <p>Au sud-est, le <strong>plateau briard</strong> et ses massifs — bois Notre-Dame, forêt de la Grange
      et boisements associés — constituent un ensemble forestier important, en contact avec des communes
      résidentielles qui se sont développées à leur lisière.</p>
      <p>Entre les deux, les <strong>boucles de la Marne</strong> et un tissu pavillonnaire ancien, avec de
      nombreux jardins plantés, souvent de conifères d'ornement installés dans les décennies d'après-guerre.</p>
      ${note(`<p>Cette configuration produit une situation typiquement val-de-marnaise : un pavillon avec
      un pin noir planté dans les années 1960 au milieu de la pelouse, à deux kilomètres d'un massif de
      chênes. Les deux espèces peuvent donc concerner la même famille, à six mois d'écart dans l'année.</p>`,
      'Une double exposition')}` },

    { h2: 'Le pavillonnaire, cas dominant',
      html: `
      <p>C'est la configuration que nous rencontrons le plus souvent dans ce département : une parcelle de
      quelques centaines de mètres carrés, un ou deux arbres, et un usage intensif du jardin.</p>
      ${table(
        ['Élément', 'Ce qui pose problème'],
        [
          ['Parcelle étroite', "Le pied de l'arbre est à quelques mètres de la terrasse et de la maison"],
          ['Arbre en limite séparative', "La procession descend chez le voisin autant que chez vous"],
          ['Pelouse et potager', "Zone de retombée des poils, et travail du sol qui les remet en suspension"],
          ['Chien au jardin', "Accès permanent au pied de l'arbre pendant la saison des processions"],
          ['Accès par le pavillon', "Passage du matériel par la maison ou un portillon étroit : contrainte de chantier réelle"],
          ['Voisins concernés', "Les arbres d'une même rue ont souvent été plantés ensemble"]
        ],
        'Ce qui caractérise une intervention en pavillonnaire dense')}
      <p>La contrainte d'accès est plus fréquente ici qu'ailleurs : dans beaucoup de parcelles, la nacelle ne
      peut pas entrer. Le travail se fait alors à la perche, ce qui limite la hauteur atteignable et impose
      parfois de recourir à un grimpeur. Ce point se règle lors de la visite préalable, et il conditionne le
      devis.</p>` },

    { h2: 'Les jardins collectifs et familiaux',
      html: `
      <p>Le Val-de-Marne compte un nombre important de jardins familiaux et de parcelles collectives, souvent
      installés en lisière de zones boisées ou le long d'infrastructures. Ce sont des lieux où l'on travaille
      le sol, accroupi, plusieurs heures par semaine, parfois avec des enfants.</p>
      <p>Lorsqu'un pin ou un chêne infesté borde ces parcelles, l'exposition est réelle et répétée. Pour
      ces sites, la mesure la plus efficace n'est pas toujours le retrait du nid — souvent situé sur un
      arbre qui n'appartient pas aux jardiniers — mais l'information des usagers, le balisage de la zone
      concernée et la démarche auprès du propriétaire de l'arbre, commune ou gestionnaire d'infrastructure.</p>` },

    { h2: 'Communes et secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département, avec une concentration de demandes autour du
      <strong>pourtour du bois de Vincennes</strong>, dans les <strong>boucles de la Marne</strong> et sur
      les <strong>communes de plateau du sud-est</strong>, au contact des massifs briards.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>Dans les quartiers pavillonnaires, l'intervention groupée entre voisins est particulièrement
      pertinente : les parcelles sont petites, les arbres proches les uns des autres, et traiter un seul
      jardin laisse la source à quelques mètres.</p>` },

    { h2: 'Deux calendriers à ne pas confondre',
      html: `
      <p>Dans un département où les deux espèces sont présentes, l'erreur la plus coûteuse est de se
      tromper de saison.</p>
      <ul class="plain">
        <li><strong>Sur un pin ou un cèdre</strong> — la fenêtre utile va de l'automne à la fin de l'hiver. Un appel en mai porte presque toujours sur un nid déjà vide, dont le retrait reste utile mais n'a plus d'urgence.</li>
        <li><strong>Sur un chêne</strong> — l'inspection se fait au printemps et le traitement de mai à juillet. Un appel en décembre ne permet aucune action sur les chenilles : elles n'existent qu'à l'état d'œuf.</li>
      </ul>
      <p>En pratique, la première question que nous posons est donc l'essence de l'arbre.
      <a href="/traitement-chenilles-processionnaires/">Voir le calendrier complet</a>.</p>` }
  ],
  faq: [
    { q: "Mon voisin a un pin infesté et refuse de le traiter, que faire ?",
      a: `<p>La discussion amiable reste la voie la plus efficace, d'autant que le coût d'une intervention
      groupée est plus faible pour chacun. Si elle échoue, la mairie est l'interlocuteur à solliciter,
      notamment si un arrêté local encadre la lutte sur la commune.</p>` },
    { q: "Peut-on intervenir dans un jardin sans accès véhicule ?",
      a: `<p>Oui, par le travail à la perche depuis le sol, dans la limite d'une douzaine de mètres de
      hauteur. Au-delà, il faut un grimpeur. C'est une configuration fréquente dans le pavillonnaire
      val-de-marnais, et elle se règle lors de la visite préalable.</p>` },
    { q: "Le bois de Vincennes est-il traité ?",
      a: `<p>Il relève de la Ville de Paris, qui organise ses propres campagnes en priorisant les zones
      d'accueil du public. Pour une propriété riveraine, c'est votre parcelle qui doit être protégée.</p>` },
    { q: "Les deux espèces peuvent-elles être présentes chez moi ?",
      a: `<p>Oui, si votre jardin comporte à la fois des conifères et des chênes. C'est assez courant dans
      ce département. Dans ce cas, deux passages à des saisons différentes sont nécessaires.</p>` },
    { q: "Faut-il traiter un jardin familial ?",
      a: `<p>Le traitement porte sur l'arbre, pas sur les parcelles cultivées. Si l'arbre appartient à la
      commune ou à un gestionnaire d'infrastructure, la démarche passe par lui. Dans l'intervalle, le
      balisage et l'information des jardiniers réduisent déjà fortement l'exposition.</p>` }
  ],
  cta: {
    title: "Un arbre en limite de parcelle : parlez-en à vos voisins",
    text: `Dans le pavillonnaire val-de-marnais, une intervention coordonnée sur plusieurs jardins le même
    jour coûte nettement moins cher à chacun — et supprime réellement la source.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/departements/93-seine-saint-denis/', label: 'Seine-Saint-Denis (93)', hint: 'Département voisin, autre profil' },
    { url: '/departements/91-essonne/', label: 'Essonne (91)', hint: 'Autre rive de la forêt de Sénart' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Intervention en jardin pavillonnaire' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Jardins de petite taille' },
    { url: '/identifier-chenilles-processionnaires/', label: 'Identifier une chenille', hint: 'Savoir de quelle espèce il s\'agit' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
