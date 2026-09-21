import { standardPage } from '../../lib/layout.mjs';
import { note, table, esc } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';

const villes = villesOf('91-essonne');

export default standardPage({
  url: '/departements/91-essonne/',
  title: "Chenilles processionnaires en Essonne (91)",
  description: "Essonne : sols sableux du Hurepoix, forêt de Sénart, vallées boisées. Le département où la processionnaire du pin est la mieux installée.",
  h1: "Chenilles processionnaires en Essonne (91)",
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Essonne (91)', url: '/departements/91-essonne/' }],
  carteActive: '91',
  datePublished: '2026-04-24',
  dateModified: '2026-09-16',
  service: {
    name: "Traitement des chenilles processionnaires en Essonne",
    type: 'Échenillage, piégeage et traitement biologique',
    description: "Traitement des chenilles processionnaires du pin et du chêne en Essonne : jardins pavillonnaires, lisières de Sénart, vallées et patrimoine communal.",
    areaServed: ['Essonne (91)']
  },
  lead: `Si l'on devait désigner le département francilien où la processionnaire du pin est le plus chez
  elle, ce serait l'Essonne. La raison tient moins à la latitude qu'au sol : le sable, omniprésent au sud du
  département, offre à l'espèce exactement ce dont elle a besoin pour boucler son cycle.`,
  answer: `<p>L'Essonne est le département francilien où la <strong>processionnaire du pin</strong> est la
  mieux implantée, en raison des <strong>sols sableux du Hurepoix et du nord du Gâtinais</strong> et de la
  présence de pins sylvestres. La <strong>processionnaire du chêne</strong> y est également très présente,
  notamment autour de la <strong>forêt de Sénart</strong> et dans les vallées boisées. Les zones
  pavillonnaires de lisière concentrent l'essentiel des demandes.</p>`,
  sections: [
    { h2: 'Le sable, facteur déterminant',
      html: `
      <p>Le cycle de la <a href="/chenille-processionnaire-du-pin/">processionnaire du pin</a> comporte une
      étape souvent négligée : après la descente de fin d'hiver, les chenilles doivent
      <strong>s'enfouir dans le sol</strong> pour se transformer en chrysalides. Cette étape exige un
      substrat meuble, drainant et bien exposé.</p>
      <p>Le sud de l'Essonne, avec ses formations sableuses et ses pinèdes, réunit précisément ces
      conditions. À cela s'ajoute la présence de pins sylvestres et, dans les jardins, de pins noirs
      d'ornement plantés en nombre dans les lotissements des décennies 1960 à 1980.</p>
      ${note(`<p>Conséquence concrète pour un propriétaire : sur un terrain sableux et ensoleillé, les
      chrysalides sont dans votre sol. Retirer le nid ne supprime pas ce stock enfoui, dont une partie peut
      d'ailleurs rester en diapause plusieurs années. C'est ce qui explique les réapparitions apparemment
      inexpliquées après une ou deux saisons calmes.</p>`, 'Pourquoi le problème revient')}` },

    { h2: 'Sénart, les vallées et le nord du département',
      tocLabel: 'Les secteurs boisés',
      html: `
      <p>La <strong>forêt de Sénart</strong>, à cheval sur l'Essonne et la Seine-et-Marne, est une chênaie
      étendue directement bordée par une urbanisation dense. Les communes riveraines présentent une
      configuration de lisière très nette, avec des pavillons en contact immédiat avec le massif.</p>
      <p>Les <strong>vallées de l'Yvette, de l'Orge et de la Juine</strong> forment des couloirs boisés qui
      traversent le département. Leurs coteaux bien exposés avancent les cycles de quelques jours et
      concentrent des propriétés arborées anciennes.</p>
      <p>Le <strong>nord du département</strong>, plus dense et plus urbain, relève d'une autre logique :
      arbres de parcs, patrimoine communal, résidences collectives. Les essences y sont plantées plutôt que
      spontanées, ce qui déplace le sujet vers les cèdres, les pins noirs et les chênes rouges
      d'ornement.</p>` },

    { h2: 'Les demandes que nous recevons',
      html: `
      ${table(
        ['Contexte', 'Espèce', 'Motif d\'appel le plus courant'],
        [
          ['Pavillon du sud, terrain sableux', 'Pin', "Procession traversant la pelouse en février-mars, chien au jardin"],
          ['Lisière de Sénart', 'Chêne', "Nids découverts sur tronc en mai, réactions cutanées dans la famille"],
          ['Coteau de vallée', 'Les deux', "Propriété arborée ancienne, plusieurs essences concernées"],
          ['Résidence collective du nord', 'Pin', "Cèdres ou pins noirs d'allée porteurs de nids, aire de jeux en dessous"],
          ['Parc communal', 'Les deux', "Inventaire et campagne annuelle"],
          ['Terrain avec chevaux ou chenil', 'Pin', "Protection du sol prioritaire sur le retrait des nids"]
        ],
        "Ce qui déclenche un appel en Essonne")}` },

    { h2: 'Communes et secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département. Les demandes se concentrent sur le
      <strong>pourtour de la forêt de Sénart</strong>, les <strong>vallées de l'Orge et de l'Yvette</strong>
      et le <strong>sud sableux</strong>, où la pression de la processionnaire du pin est la plus forte.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>Dans les lotissements du sud, l'intervention groupée entre voisins a un intérêt particulier : les
      pins d'ornement d'une même rue ont généralement été plantés en même temps, sont de même essence et de
      même âge, et sont colonisés ensemble. Traiter un seul jardin laisse la source à quinze mètres.</p>` },

    { h2: 'Ce qui fonctionne le mieux ici',
      tocLabel: 'Stratégie locale',
      html: `
      <p>Dans un contexte de forte pression sur pin, l'expérience locale conduit à privilégier une
      combinaison plutôt qu'une action isolée.</p>
      <ol>
        <li><strong>Traitement biologique d'automne</strong> sur les pins à historique — c'est la mesure au meilleur rapport efficacité/perturbation. Voir <a href="/traitement-preventif/">traitement préventif</a>.</li>
        <li><strong>Échenillage hivernal</strong> des nids constitués sur les arbres accessibles.</li>
        <li><strong><a href="/piegeage-chenilles-processionnaires/">Collier de piégeage</a></strong> systématique sur les pins dont le sol est fréquenté — enfants, chien, potager.</li>
        <li><strong>Piège à phéromone</strong> en été sur les sites récurrents, pour caler la date du traitement d'automne.</li>
        <li><strong>Nichoirs à mésanges</strong>, dont l'effet se construit sur plusieurs saisons mais qui ne coûtent presque rien.</li>
      </ol>
      <p>Sur chêne, en revanche, la stratégie est celle des départements de chênaie : inspection des troncs
      au printemps et <a href="/traitement-processionnaire-du-chene/">aspiration des nids</a>.</p>` }
  ],
  faq: [
    { q: "Pourquoi ai-je des processionnaires alors que mon voisin n'en a pas ?",
      a: `<p>L'exposition fait beaucoup. Un pin isolé, bien ensoleillé, en bordure de pelouse est un site de
      ponte privilégié ; un pin à l'ombre ou serré dans un bosquet l'est beaucoup moins. Le sol compte
      également : un terrain sableux et drainant favorise l'enfouissement des chrysalides.</p>` },
    { q: "Les chrysalides restent-elles dans mon terrain ?",
      a: `<p>Oui, à quelques centimètres de profondeur, dans les zones meubles et ensoleillées. Certaines
      peuvent rester en diapause plusieurs années. C'est l'une des raisons pour lesquelles une seule
      intervention ne clôt pas toujours le sujet.</p>` },
    { q: "Faut-il traiter les pins d'ornement d'un lotissement collectivement ?",
      a: `<p>C'est nettement plus efficace, et moins cher par jardin. Les pins d'une même rue ayant été
      plantés ensemble, ils sont généralement colonisés ensemble. Une intervention groupée le même jour
      supprime la source de proximité.</p>` },
    { q: "Peut-on remplacer les pins par d'autres essences ?",
      a: `<p>C'est une option à envisager lors d'un renouvellement, pas une réponse à une infestation en
      cours. Diversifier les essences d'un jardin réduit durablement la pression, mais l'abattage d'un arbre
      sain uniquement pour cette raison est rarement justifié.</p>` },
    { q: "La forêt de Sénart est-elle traitée ?",
      a: `<p>Un massif forestier relève de son gestionnaire, avec une logique de gestion et non de lutte
      généralisée. Les actions se concentrent sur les zones d'accueil du public. Pour une propriété en
      lisière, c'est votre parcelle qui doit être protégée.</p>` }
  ],
  cta: {
    title: "Terrain sableux et pins au jardin : anticiper la descente",
    text: `En Essonne, la fenêtre utile sur pin se situe à l'automne et en début d'hiver. Décrivez-nous vos
    arbres et l'usage du terrain : nous vous dirons ce qui doit être fait, et quand.`,
    primary: 'Demander un diagnostic'
  },
  related: [
    { url: '/departements/77-seine-et-marne/', label: 'Seine-et-Marne (77)', hint: 'Même géologie sableuse à l\'est' },
    { url: '/departements/94-val-de-marne/', label: 'Val-de-Marne (94)', hint: 'Autre rive de la forêt de Sénart' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce la plus présente ici" },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger le sol du jardin' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Le motif d\'appel n°1 au printemps' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
