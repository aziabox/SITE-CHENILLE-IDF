import { standardPage } from '../../lib/layout.mjs';
import { note, table, esc } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';

const villes = villesOf('95-val-d-oise');

export default standardPage({
  url: '/departements/95-val-d-oise/',
  title: "Chenilles processionnaires dans le Val-d'Oise (95)",
  description: "Val-d'Oise : coteaux de Montmorency, forêts de L'Isle-Adam et de Carnelle, Vexin. Des lisières boisées très proches de l'habitat.",
  h1: "Chenilles processionnaires dans le Val-d'Oise (95)",
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: "Val-d'Oise (95)", url: '/departements/95-val-d-oise/' }],
  carteActive: '95',
  datePublished: '2026-05-02',
  dateModified: '2026-09-16',
  service: {
    name: "Traitement des chenilles processionnaires dans le Val-d'Oise",
    type: 'Échenillage, aspiration de nids et traitement biologique',
    description: "Traitement des chenilles processionnaires dans les jardins de coteau, les lisières forestières, les communes du Vexin et le patrimoine arboré du Val-d'Oise.",
    areaServed: ["Val-d'Oise (95)"]
  },
  lead: `Le Val-d'Oise se caractérise par une succession de massifs boisés implantés sur des buttes et des
  coteaux, avec un habitat qui grimpe jusqu'à leur lisière. Peu de départements franciliens placent autant
  de jardins au contact direct d'un couvert forestier.`,
  answer: `<p>Dans le Val-d'Oise, la <strong>processionnaire du chêne</strong> est alimentée par les massifs
  de <strong>Montmorency, L'Isle-Adam et Carnelle</strong>, tous installés sur des buttes et directement
  bordés d'habitat. La <strong>processionnaire du pin</strong> concerne les conifères d'ornement des
  jardins, des résidences et des parcs, y compris dans les quartiers récents de
  <strong>Cergy-Pontoise</strong>. Le <strong>Vexin français</strong>, rural, présente une configuration
  différente : villages, propriétés anciennes et arbres isolés.</p>`,
  sections: [
    { h2: 'Les buttes boisées et leurs lisières',
      tocLabel: 'Massifs et coteaux',
      html: `
      <p>La géographie du département explique presque tout. Les principaux massifs — Montmorency,
      L'Isle-Adam, Carnelle — occupent des buttes et des plateaux surélevés, dont les versants ont été
      urbanisés progressivement depuis le XIXe siècle.</p>
      <p>Il en résulte une situation particulière : au lieu d'une limite nette entre la ville et la forêt,
      on trouve une <strong>interpénétration</strong>. Des rues qui montent dans le bois, des propriétés
      dont le fond de jardin est déjà en couvert forestier, des lotissements enclavés dans le massif. Pour
      la <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>, cela signifie une
      continuité complète entre le réservoir et les arbres de jardin.</p>
      <p>Le relief ajoute un effet d'exposition marqué : un versant sud voit le débourrement, et donc
      l'éclosion, avancer de plusieurs jours sur un versant nord de la même butte. Sur un même quartier, les
      dates utiles peuvent donc différer.</p>
      ${note(`<p>Sur les coteaux de Montmorency, beaucoup de propriétés sont anciennes et fortement
      arborées, avec des sujets de grande hauteur implantés sur des terrains en pente. La pente est une
      contrainte de chantier à part entière : elle limite l'usage d'une nacelle et oriente souvent vers le
      travail au grimpeur.</p>`, 'La pente, contrainte sous-estimée')}` },

    { h2: 'Cergy-Pontoise et les quartiers planifiés',
      html: `
      <p>L'agglomération de Cergy-Pontoise présente un profil différent du reste du département. Conçue à
      partir des années 1970, elle a été accompagnée de plantations massives et cohérentes : parcs, coulées
      vertes, alignements, espaces verts de résidences.</p>
      <p>Ces plantations arrivent aujourd'hui à maturité. Les essences retenues à l'époque incluaient
      largement des <strong>conifères d'ornement</strong> et des <strong>chênes</strong>, ce qui en fait un
      terrain favorable aux deux espèces. L'avantage, pour un gestionnaire, est que ce patrimoine est
      documenté et homogène : un inventaire y est beaucoup plus simple à établir que sur un tissu ancien.</p>
      <p>C'est typiquement le contexte où un <a href="/traitement-preventif/">plan pluriannuel</a> donne de
      bons résultats : arbres connus, essences identifiées, gestionnaire unique sur de larges emprises.</p>` },

    { h2: 'Le Vexin français : une autre configuration',
      html: `
      <p>À l'ouest, le Vexin présente un paysage ouvert de plateaux cultivés, ponctué de villages, de
      bosquets et de vallées boisées. Le contexte y est rural.</p>
      ${table(
        ['Élément', 'Ce que cela implique'],
        [
          ['Habitat groupé en village', "Peu d'arbres en continu, mais des sujets isolés très exposés"],
          ['Propriétés anciennes arborées', "Parcs de demeures, alignements de tilleuls et de marronniers, quelques cèdres"],
          ['Bosquets et vallées boisées', 'Chênaies de coteau alimentant les lisières'],
          ['Distances', "Interventions groupées par journée pour limiter le coût de déplacement"],
          ['Activité agricole et équestre', "Prés arborés, protection du sol pendant les processions"]
        ],
        'Le Vexin, un contexte rural à part')}
      <p>Un arbre isolé au milieu d'une pâture ou d'une place de village est un site de ponte
      particulièrement attractif pour la processionnaire du pin : bien exposé, sans concurrence, sans
      prédation forte. Ces sujets méritent une surveillance, même quand ils sont les seuls conifères à des
      centaines de mètres.</p>` },

    { h2: 'Communes et secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département, avec une concentration de demandes sur les
      <strong>coteaux de Montmorency</strong>, le <strong>pourtour des forêts de L'Isle-Adam et de
      Carnelle</strong>, et l'<strong>agglomération de Cergy-Pontoise</strong>.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>Pour les communes du Vexin et du nord du département, plus éloignées, nous groupons les
      interventions par journée. Si plusieurs propriétés d'un même village sont concernées, signalez-le :
      cela change sensiblement le chiffrage.</p>` },

    { h2: 'Ce que nous conseillons dans ce département',
      tocLabel: 'Stratégie locale',
      html: `
      <p>Dans un contexte de lisière permanente, la question n'est pas « comment faire disparaître le
      problème » mais « comment garder ma parcelle sûre chaque année ».</p>
      <ol>
        <li><strong>Inspecter les troncs de chênes au printemps</strong> — c'est le geste qui évite les découvertes tardives, et il ne coûte rien.</li>
        <li><strong>Retirer les anciens nids en hiver</strong> — sur chêne, ils continuent de relarguer des poils pendant des mois.</li>
        <li><strong>Traiter les conifères à l'automne</strong> — la fenêtre de biocontrôle est la moins perturbante pour l'usage du jardin.</li>
        <li><strong>Poser des nichoirs à mésanges</strong> — dans un contexte de lisière, la prédation naturelle a un effet réel, à construire sur plusieurs saisons.</li>
        <li><strong>Accepter une surveillance annuelle</strong> plutôt que d'attendre une éradication qui ne viendra pas tant que le massif est là.</li>
      </ol>` }
  ],
  faq: [
    { q: "Mon jardin donne directement sur la forêt : y a-t-il un intérêt à traiter ?",
      a: `<p>Oui, pour vos arbres et votre zone d'usage. L'objectif n'est pas d'éliminer l'espèce du massif
      voisin, mais que votre terrasse, votre pelouse et vos arbres ne soient pas une source de poils. C'est
      une gestion annuelle, et nous le disons clairement dès le premier échange.</p>` },
    { q: "Le versant de la butte change-t-il quelque chose ?",
      a: `<p>Oui, de quelques jours : un versant sud bien exposé voit le débourrement et l'éclosion avancer
      sur un versant nord. Cela suffit à décaler la date d'un traitement de printemps entre deux quartiers
      d'une même commune.</p>` },
    { q: "Les plantations récentes de Cergy-Pontoise sont-elles concernées ?",
      a: `<p>Celles arrivées à maturité, oui. Un arbre devient attractif pour une colonie lorsqu'il atteint
      une taille et une exposition suffisantes. Les plantations des années 1970-1990 y sont aujourd'hui
      pleinement concernées.</p>` },
    { q: "Peut-on intervenir sur un terrain en forte pente ?",
      a: `<p>Oui, mais la pente limite l'usage d'une nacelle et oriente souvent vers le travail au grimpeur,
      ce qui change le devis. C'est un point que nous évaluons lors de la visite préalable.</p>` },
    { q: "Intervenez-vous dans le Vexin ?",
      a: `<p>Oui, sur l'ensemble du département. Pour ces communes plus éloignées, nous groupons les
      interventions par journée afin de limiter la part de déplacement dans le coût.</p>` }
  ],
  cta: {
    title: "Une propriété en lisière : organiser la surveillance",
    text: `Dans le Val-d'Oise, la question n'est pas d'éradiquer mais de garder votre parcelle sûre chaque
    année. Une première visite permet d'établir la liste des arbres à suivre.`,
    primary: 'Demander une visite'
  },
  related: [
    { url: '/departements/78-yvelines/', label: 'Yvelines (78)', hint: 'Autre rive de la Seine' },
    { url: '/departements/93-seine-saint-denis/', label: 'Seine-Saint-Denis (93)', hint: 'Département voisin' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'espèce des massifs de buttes" },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Gérer une lisière dans la durée' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Jardins de coteau' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
