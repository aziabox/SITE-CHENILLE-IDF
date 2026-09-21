import { standardPage } from '../../lib/layout.mjs';
import { note, table, esc } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';

const villes = villesOf('92-hauts-de-seine');

export default standardPage({
  url: '/departements/92-hauts-de-seine/',
  title: 'Chenilles processionnaires dans les Hauts-de-Seine (92)',
  description: "Hauts-de-Seine : parcs historiques, coteaux boisés et copropriétés plantées. Une densité inhabituelle de cèdres et de pins d'ornement.",
  h1: 'Chenilles processionnaires dans les Hauts-de-Seine (92)',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Hauts-de-Seine (92)', url: '/departements/92-hauts-de-seine/' }],
  carteActive: '92',
  datePublished: '2026-04-26',
  dateModified: '2026-09-16',
  service: {
    name: 'Traitement des chenilles processionnaires dans les Hauts-de-Seine',
    type: 'Échenillage et traitement en milieu urbain arboré',
    description: "Traitement des chenilles processionnaires sur cèdres, pins d'ornement et chênes des parcs, copropriétés et propriétés des Hauts-de-Seine.",
    areaServed: ['Hauts-de-Seine (92)']
  },
  lead: `Les Hauts-de-Seine cumulent une densité urbaine élevée et un patrimoine arboré exceptionnel :
  parcs de domaines, coteaux boisés, jardins de villas du XIXe siècle. C'est le département où nous
  intervenons le plus souvent sur des cèdres — une essence peu présente ailleurs à cette échelle.`,
  answer: `<p>Dans les Hauts-de-Seine, la <strong>processionnaire du pin</strong> se concentre sur les
  <strong>cèdres et pins noirs d'ornement</strong> hérités des parcs et des villas du XIXe siècle, très
  nombreux dans le département. La <strong>processionnaire du chêne</strong> concerne les
  <strong>coteaux boisés de Meudon, Saint-Cloud et Sèvres</strong> ainsi que les grands parcs. Les
  copropriétés des années 1960-1970, largement plantées, forment le troisième foyer.</p>`,
  sections: [
    { h2: 'Un patrimoine arboré hérité du XIXe siècle',
      tocLabel: 'Parcs et villas',
      html: `
      <p>Le département a été, à partir du Second Empire, un lieu de villégiature pour la bourgeoisie
      parisienne. Il en reste des parcs, des jardins de villas et des alignements plantés selon la mode de
      l'époque — laquelle faisait une large place aux <strong>cèdres de l'Atlas et du Liban</strong>, aux
      <strong>pins noirs</strong> et aux séquoias.</p>
      <p>Cent cinquante ans plus tard, ces arbres sont devenus des sujets de grande hauteur, souvent isolés
      au milieu d'un jardin ou d'une copropriété construite sur l'emprise de l'ancienne propriété. Ils
      réunissent tout ce que recherche la <a href="/chenille-processionnaire-du-pin/">processionnaire du
      pin</a> : une essence hôte, une exposition dégagée, aucune concurrence et peu de prédation.</p>
      ${note(`<p>Le cèdre pose une difficulté d'identification supplémentaire : les nids y sont souvent
      moins nets et plus diffus que sur pin, répartis entre plusieurs rameaux plutôt que concentrés en une
      boule unique. Ils sont donc repérés plus tard, parfois seulement lorsque la procession descend le
      long du tronc.</p>`, 'Le cas particulier du cèdre')}` },

    { h2: 'Les coteaux boisés',
      html: `
      <p>À l'ouest et au sud-ouest, le département présente un relief marqué : les coteaux qui dominent la
      Seine portent des ensembles boisés significatifs, notamment autour de Meudon, Saint-Cloud, Sèvres et
      Chaville. Ces boisements, largement composés de chênes, constituent un réservoir pour la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>.</p>
      <p>Leur particularité est topographique. Sur un coteau, l'exposition varie fortement sur quelques
      centaines de mètres : un versant sud bien ensoleillé voit le débourrement et donc l'éclosion avancer
      de plusieurs jours sur un fond de vallon ombragé. Pour une commune qui programme un traitement de
      printemps, cet écart n'est pas anecdotique — il justifie de traiter les versants exposés en premier.</p>` },

    { h2: 'Les copropriétés, troisième foyer',
      html: `
      <p>Le département compte une proportion élevée d'ensembles résidentiels construits entre 1955 et
      1980, presque tous dotés d'espaces verts plantés à la livraison. Les essences retenues à l'époque —
      pins noirs, cèdres, chênes rouges — sont précisément celles qui nous occupent.</p>
      ${table(
        ['Élément de la résidence', 'Problème rencontré'],
        [
          ['Allée centrale plantée de cèdres', "Nids en hauteur, procession traversant le cheminement principal"],
          ['Aire de jeux sous les arbres', "Zone inutilisable tant que les nids sont en place"],
          ['Parking arboré', 'Retombée sur les véhicules et dans les habitacles ouverts'],
          ['Pelouse collective', "Tonte par le prestataire d'entretien : exposition directe des agents"],
          ['Jardins privatifs en rez-de-chaussée', "Arbre de partie commune, procession chez un occupant"]
        ],
        "Configurations types en résidence des Hauts-de-Seine")}
      <p>Le sujet devient alors une affaire de syndic et de conseil syndical plus que de technique. Voir
      <a href="/coproprietes/">notre page consacrée aux copropriétés</a>.</p>` },

    { h2: 'Communes et secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département, avec une concentration de demandes sur les
      <strong>coteaux de l'ouest</strong>, le <strong>sud résidentiel</strong> et les
      <strong>grandes copropriétés arborées</strong> de la première couronne.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>La densité du département a un avantage : les déplacements sont courts, ce qui permet d'intervenir
      sur plusieurs sites dans la même journée et réduit la part de déplacement dans le devis. Elle a aussi
      un inconvénient : l'accès nacelle et le stationnement demandent une préparation.</p>` },

    { h2: 'Les contraintes d\'intervention en milieu dense',
      tocLabel: 'Contraintes de chantier',
      html: `
      <ul class="plain">
        <li><strong>Accès et stationnement</strong> — une nacelle demande un emplacement dégagé et, sur voirie, une autorisation à anticiper.</li>
        <li><strong>Mitoyenneté</strong> — les fenêtres et les balcons sont proches : l'information des occupants conditionne le bon déroulement du chantier.</li>
        <li><strong>Hauteur des sujets</strong> — les cèdres centenaires dépassent fréquemment vingt mètres, ce qui exclut la perche.</li>
        <li><strong>Arbres protégés</strong> — certains sujets sont classés ou protégés au titre du document d'urbanisme local ; aucune coupe autre que le rameau porteur du nid n'est envisagée.</li>
        <li><strong>Vent en couloir urbain</strong> — les effets de site imposent parfois un report de chantier plus souvent qu'en périphérie.</li>
      </ul>` }
  ],
  faq: [
    { q: "Pourquoi tant de cèdres dans les Hauts-de-Seine ?",
      a: `<p>C'est un héritage des plantations de villégiature du XIXe siècle, quand le département était un
      lieu de résidence secondaire pour la bourgeoisie parisienne. Ces sujets, aujourd'hui centenaires, se
      retrouvent dans les parcs publics comme au milieu de copropriétés construites plus tard sur les
      anciennes propriétés.</p>` },
    { q: "Un nid sur un cèdre est-il plus difficile à traiter ?",
      a: `<p>Principalement à cause de la hauteur et de la forme du houppier, très étalé. Le repérage est
      aussi plus délicat, les nids étant souvent diffus. L'opération en elle-même ne diffère pas de celle
      réalisée sur pin.</p>` },
    { q: "Qui paie l'intervention dans une copropriété ?",
      a: `<p>La copropriété, s'agissant d'arbres de parties communes. L'engagement se fait par le syndic,
      sur le budget d'entretien ou après résolution d'assemblée générale selon le montant. Voir notre page
      <a href="/coproprietes/">copropriétés</a>.</p>` },
    { q: "Les parcs départementaux sont-ils traités ?",
      a: `<p>Les gestionnaires de parcs publics organisent leurs propres campagnes. Un nid constaté dans un
      parc se signale au gestionnaire du site, avec une photo et une localisation précise.</p>` },
    { q: "Faut-il un accord pour intervenir sur un arbre protégé ?",
      a: `<p>Le retrait d'un nid ne constitue pas une atteinte à l'arbre et ne demande pas d'autorisation
      particulière, dès lors qu'aucune coupe de charpentière n'est réalisée. C'est précisément pour cela que
      nous n'en pratiquons pas.</p>` }
  ],
  cta: {
    title: "Un cèdre ou un pin d'ornement porteur de nids",
    text: `Dans les Hauts-de-Seine, la hauteur des sujets conditionne le moyen d'accès et donc le devis. Une
    photo de l'arbre entier, avec un repère de hauteur, nous permet de chiffrer précisément.`,
    primary: 'Demander un devis'
  },
  related: [
    { url: '/departements/75-paris/', label: 'Paris (75)', hint: 'Contraintes urbaines comparables' },
    { url: '/departements/78-yvelines/', label: 'Yvelines (78)', hint: 'Parcs historiques et grandes chênaies' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Le donneur d\'ordre le plus fréquent ici' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce des cèdres" },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Moyens d\'accès en hauteur' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
