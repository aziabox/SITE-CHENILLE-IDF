import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/95-val-d-oise/montmorency/',
  villeName: 'Montmorency',
  deptSlug: '95-val-d-oise',
  villeTeaser: "coteau boisé où l'habitat monte jusque dans la forêt, sur des terrains en forte pente",
  title: 'Chenilles processionnaires à Montmorency (95160)',
  description: "Montmorency : un coteau où l'habitat monte dans la forêt, sur des terrains en forte pente. Contraintes de chantier et stratégie locale.",
  h1: 'Chenilles processionnaires à Montmorency',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: "Val-d'Oise (95)", url: '/departements/95-val-d-oise/' },
          { name: 'Montmorency', url: '/departements/95-val-d-oise/montmorency/' }],
  datePublished: '2026-05-28',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Montmorency',
    type: 'Aspiration de nids et échenillage en terrain pentu',
    description: "Traitement des chenilles processionnaires à Montmorency et sur les coteaux voisins : propriétés en pente, jardins de lisière et patrimoine communal.",
    areaServed: ['Montmorency', "Val-d'Oise (95)"]
  },
  lead: `À Montmorency, il n'y a pas de frontière nette entre la ville et la forêt : les rues montent dans
  le massif, les jardins prolongent le couvert, et certaines propriétés ont la forêt pour fond de parcelle.
  Ajoutez-y la pente, et vous avez les deux données qui commandent toute intervention.`,
  answer: `<p>À Montmorency, la <strong>processionnaire du chêne</strong> domine : la forêt de coteau qui
  surplombe la ville est une chênaie, et l'habitat y pénètre directement. Les deux contraintes locales sont
  la <strong>continuité entre la forêt et les jardins</strong>, qui rend la recolonisation annuelle
  probable, et la <strong>forte pente</strong>, qui limite l'usage d'une nacelle et oriente vers le travail
  au grimpeur.</p>`,
  sections: [
    { h2: 'Un habitat qui monte dans la forêt',
      html: `
      <p>Le coteau de Montmorency a été urbanisé progressivement depuis le XIXe siècle, en suivant les
      chemins qui montent vers le plateau. Il en résulte une <strong>interpénétration</strong> plutôt qu'une
      limite : des rues bordées d'arbres forestiers, des propriétés dont le fond de jardin est déjà sous
      couvert, des parcelles enclavées.</p>
      <p>Pour la <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>, cette
      continuité signifie qu'il n'existe aucune barrière entre le réservoir forestier et les arbres de
      jardin. La recolonisation est donc la règle, pas l'exception.</p>
      ${note(`<p>Cela ne rend pas le traitement inutile — au contraire. Mais cela impose de fixer le bon
      objectif dès le départ : <strong>garder la parcelle sûre chaque année</strong>, et non espérer une
      élimination définitive qui ne viendra pas tant que le massif est là.</p>`, 'Le bon objectif')}` },

    { h2: 'La pente, contrainte de chantier',
      html: `
      <p>Les terrains montmorencéens sont souvent en forte pente, avec des accès par escalier, des murs de
      soutènement et peu de surface plane. Une nacelle élévatrice a besoin d'un calage stable et
      sensiblement horizontal : sur ce type de parcelle, la condition est rarement réunie.</p>
      ${table(
        ['Configuration', 'Moyen retenu'],
        [
          ['Jardin en terrasses, accès par escalier', 'Grimpeur-élagueur'],
          ['Arbre proche de la rue, emprise disponible', 'Nacelle depuis la voirie, avec autorisation'],
          ['Nid bas sur tronc de chêne', 'Aspiration depuis le sol'],
          ['Parcelle plane en haut de coteau', 'Nacelle possible selon accès'],
          ['Arbre en fond de parcelle sous couvert', 'Grimpeur, avec repérage préalable']
        ],
        'Ce que la topographie impose')}
      <p>C'est pourquoi une photo de l'arbre ne suffit pas à chiffrer : il nous faut aussi une vue de
      l'accès et de ce qui entoure le pied de l'arbre.</p>` },

    { h2: 'Exposition et calendrier',
      html: `
      <p>Sur un coteau, l'exposition varie fortement en quelques centaines de mètres. Les versants bien
      exposés se réchauffent plus tôt, ce qui avance le débourrement des chênes et donc l'éclosion des
      chenilles de plusieurs jours.</p>
      <p>Concrètement, la fenêtre de <a href="/traitement-preventif/">traitement biologique</a> n'est pas la
      même en haut et en bas du coteau. Pour un gestionnaire de patrimoine, l'enseignement pratique est de
      traiter les secteurs exposés en premier. Pour un particulier, cela signifie simplement que l'inspection
      de printemps doit être faite dès le début du mois de mai sur les parcelles bien exposées.</p>` },

    { h2: 'La stratégie qui fonctionne localement',
      html: `
      <p>Dans un contexte de lisière permanente et de terrains difficiles, quatre mesures se sont révélées
      les plus utiles.</p>
      <ol>
        <li><strong>Inspecter les troncs de chênes chaque printemps</strong> — le nid plat est discret et se découvre souvent trop tard. Dix minutes suffisent pour un jardin.</li>
        <li><strong>Retirer les anciens nids en hiver</strong> — ils continuent de relarguer des poils pendant des mois, et l'hiver offre de meilleures conditions de chantier.</li>
        <li><strong>Traiter en avril les chênes à historique</strong> — cela évite l'aspiration en pleine période urticante, plus contraignante sur un terrain pentu.</li>
        <li><strong>Poser des nichoirs à mésanges</strong> — dans un contexte de lisière, la prédation naturelle a un effet réel qui se construit sur plusieurs saisons.</li>
      </ol>
      <p>Si des conifères sont présents sur la parcelle, ajoutez une observation en novembre et, le cas
      échéant, un <a href="/echenillage/">échenillage hivernal</a>.</p>` }
  ],
  faq: [
    { q: "Mon jardin donne sur la forêt : traiter sert-il à quelque chose ?",
      a: `<p>Oui, pour votre parcelle. Vous ne changerez pas la situation du massif, mais vos arbres ne
      porteront pas de nids et votre sol ne sera pas chargé de poils. C'est un suivi annuel, et c'est
      parfaitement atteignable.</p>` },
    { q: "Pourquoi une nacelle ne peut-elle pas toujours intervenir ?",
      a: `<p>Parce qu'elle doit être calée sur une surface stable et sensiblement plane. Sur un terrain en
      terrasses avec accès par escalier, cette condition n'est pas réunie. Le grimpeur est alors la solution,
      sans perte de qualité.</p>` },
    { q: "Les dates d'intervention varient-elles dans la commune ?",
      a: `<p>De quelques jours, selon l'exposition du versant. Les parcelles bien exposées voient le
      débourrement et l'éclosion démarrer avant celles situées à l'ombre du coteau.</p>` },
    { q: "Les arbres de la forêt sont-ils traités ?",
      a: `<p>Pas de manière généralisée. Le gestionnaire du massif concentre ses actions sur les zones
      d'accueil du public. Les arbres situés sur votre parcelle relèvent de vous, même s'ils paraissent
      faire partie du bois.</p>` },
    { q: "Peut-on promener son chien en forêt au printemps ?",
      a: `<p>Oui, en restant attentif. Sur chêne, les chenilles restent sur l'arbre ; le risque au sol vient
      des poils tombés au pied des sujets porteurs. Évitez de laisser le chien fouiller longuement contre
      les troncs.</p>` }
  ],
  cta: {
    title: "Coteau et lisière : organiser une surveillance annuelle",
    text: `À Montmorency, la bonne question n'est pas « comment en finir » mais « comment garder la parcelle
    sûre chaque année ». Une première visite permet d'établir la liste des arbres à suivre.`,
    primary: 'Demander une visite'
  },
  related: [
    { url: '/departements/95-val-d-oise/', label: "Val-d'Oise (95)", hint: 'Situation départementale' },
    { url: '/departements/95-val-d-oise/cergy/', label: 'Cergy', hint: 'Un patrimoine arboré planifié' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'espèce du massif" },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'La fenêtre d\'avril' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Moyens d\'accès en terrain pentu' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Jardins de coteau' }
  ]
});
