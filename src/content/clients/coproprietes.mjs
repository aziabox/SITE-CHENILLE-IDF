import { standardPage } from '../../lib/layout.mjs';
import { steps, note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/coproprietes/',
  title: 'Chenilles processionnaires en copropriété : organiser le traitement',
  description: "Syndic et conseil syndical : comment faire traiter les chenilles processionnaires sur les parties communes, informer les résidents, budgéter et passer d'une urgence à un plan pluriannuel.",
  h1: 'Chenilles processionnaires en copropriété',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Copropriétés', url: '/coproprietes/' }],
  datePublished: '2026-04-04',
  dateModified: '2026-09-09',
  service: {
    name: 'Traitement en copropriété',
    type: 'Traitement des chenilles processionnaires pour les copropriétés',
    description: "Inventaire des arbres, échenillage, piégeage et plan pluriannuel de prévention pour les copropriétés d'Île-de-France."
  },
  lead: `En résidence, la difficulté n'est presque jamais technique. Elle est organisationnelle : décider,
  informer, neutraliser une zone commune sans conflit, et disposer d'un document défendable en assemblée
  générale.`,
  answer: `<p>En copropriété, le traitement des chenilles processionnaires porte sur les arbres des
  <strong>parties communes</strong> et relève donc du syndic, sur décision de la copropriété. L'approche la
  plus efficace combine un <strong>inventaire des arbres à risque</strong>, une intervention sur les sujets
  porteurs et un <strong>plan pluriannuel</strong> inscrit au budget d'entretien — plutôt que des
  interventions d'urgence répétées chaque printemps.</p>`,
  sections: [
    { h2: 'Qui décide, et sur quel budget',
      html: `
      <p>Les arbres d'agrément d'une résidence sont, dans la quasi-totalité des cas, des parties communes.
      Leur entretien relève donc de la copropriété, et l'intervention est engagée par le syndic.</p>
      <p>Deux voies existent en pratique, et elles n'ont pas les mêmes délais :</p>
      <ul class="plain">
        <li><strong>Le budget d'entretien courant</strong> — quand l'entretien des espaces verts est déjà provisionné, l'intervention peut souvent s'y rattacher sans attendre une assemblée.</li>
        <li><strong>Une résolution d'assemblée générale</strong> — nécessaire pour un plan pluriannuel ou un budget significatif. Cela suppose d'anticiper d'une saison.</li>
      </ul>
      ${note(`<p>Une situation d'exposition immédiate — nid au-dessus d'une aire de jeux, procession sur un
      cheminement — relève de la conservation de l'immeuble et de la sécurité des occupants. C'est
      précisément le type de situation où le syndic peut agir sans attendre l'assemblée suivante. Nous
      fournissons un rapport de constat qui documente la décision.</p>`, 'Le cas de l\'urgence')}` },

    { h2: 'Le document qui débloque la décision',
      tocLabel: 'Rapport et devis',
      html: `
      <p>L'expérience montre qu'un devis seul passe mal en assemblée. Ce qui fonctionne, c'est un document
      court qui répond aux questions que les copropriétaires vont poser.</p>
      ${table(
        ['Question posée en AG', 'Ce que contient notre rapport'],
        [
          ['Combien d\'arbres sont concernés ?', "Inventaire numéroté avec essence, localisation et présence ou non de nids"],
          ['Est-ce vraiment dangereux ?', "Description factuelle du risque et des zones d'usage concernées"],
          ['Pourquoi maintenant ?', "Fenêtre d'intervention selon l'espèce et conséquence d'un report d'une saison"],
          ['Ça va durer combien de temps ?', "Durée prévue et zones indisponibles pendant l'opération"],
          ['Faudra-t-il recommencer chaque année ?', "Scénario pluriannuel avec l'évolution attendue du périmètre traité"],
          ['Où partent les déchets ?', "Mode de confinement et filière d'élimination"]
        ],
        "Ce qu'un conseil syndical a besoin d'avoir sous les yeux")}` },

    { h2: 'Informer les résidents',
      html: `
      <p>C'est la partie qui conditionne le bon déroulement du chantier. Une intervention non annoncée
      génère des appels, des passages dans le périmètre et parfois un conflit.</p>
      ${steps([
        { title: 'Affichage dans les halls, 5 à 7 jours avant', body: `<p>Date, horaires, zones concernées, consignes
          simples : fenêtres fermées côté chantier, linge rentré, animaux à l'intérieur, ne pas franchir le
          balisage.</p>` },
        { title: 'Message aux parents et aux propriétaires de chiens', body: `<p>Ce sont les deux publics les plus
          concernés. Une ligne suffit : l'aire de jeux et la pelouse seront inaccessibles telle journée.</p>` },
        { title: 'Balisage physique le jour J', body: `<p>Rubalise, panneaux, fermeture des accès au périmètre.
          Nous nous en chargeons, mais un représentant du conseil syndical sur place facilite beaucoup les
          choses.</p>` },
        { title: 'Information de fin de chantier', body: `<p>Un second affichage précise à partir de quand les zones
          redeviennent utilisables, et ce qu'il ne faut pas faire dans l'intervalle — notamment tondre.</p>` }
      ])}` },

    { h2: 'Les points sensibles propres aux résidences',
      html: `
      <ul class="plain">
        <li><strong>Aires de jeux</strong> — un nid au-dessus d'un module de jeu rend la zone inutilisable. C'est la priorité absolue d'un plan de traitement.</li>
        <li><strong>Parkings arborés</strong> — nids au-dessus de véhicules, retombée sur les carrosseries et dans les habitacles ouverts.</li>
        <li><strong>Cheminements piétons</strong> — les processions traversent les allées, souvent aux heures de sortie d'école.</li>
        <li><strong>Terrasses et balcons en rez-de-jardin</strong> — proximité immédiate avec le feuillage.</li>
        <li><strong>Local poubelles et espaces techniques</strong> — souvent sous les arbres, fréquentés quotidiennement.</li>
        <li><strong>Interface avec les jardins privatifs</strong> — un pin de partie commune peut envoyer sa procession dans un jardin à jouissance privative.</li>
      </ul>
      ${note(`<p>Beaucoup de résidences franciliennes des années 1960-1980 ont été plantées de chênes rouges
      et de pins noirs, deux essences très concernées. Ce n'est pas un hasard si ces ensembles reviennent
      régulièrement dans nos interventions : la structure du patrimoine arboré explique la récurrence.</p>`)}` },

    { h2: 'Passer de l\'urgence au plan pluriannuel',
      tocLabel: 'Plan pluriannuel',
      html: `
      <p>Une copropriété qui traite en urgence chaque printemps dépense davantage et obtient moins. Le
      passage à un plan structuré se fait en trois exercices.</p>
      <ol>
        <li><strong>Année 1</strong> — inventaire des arbres, traitement des sujets porteurs, pose des premiers nichoirs et pièges de suivi.</li>
        <li><strong>Année 2</strong> — <a href="/traitement-preventif/">traitement préventif ciblé</a> sur les arbres à historique, contrôle visuel aux deux saisons utiles.</li>
        <li><strong>Année 3</strong> — surveillance allégée, avec un périmètre traité normalement réduit.</li>
      </ol>
      <p>L'intérêt pour le syndic est double : une ligne budgétaire stable et prévisible, et un dossier de
      suivi qui documente la diligence de la copropriété.</p>` }
  ],
  faq: [
    { q: "Le syndic peut-il faire intervenir sans assemblée générale ?",
      a: `<p>Pour une situation présentant un risque immédiat pour la sécurité des occupants, ou dans le
      cadre d'un budget d'entretien déjà voté, c'est généralement possible. Pour un programme pluriannuel
      ou un budget significatif, une résolution d'assemblée est la voie normale. Le syndic reste seul juge
      de l'articulation avec le règlement de copropriété.</p>` },
    { q: "Qui paie si le nid est sur un arbre en jouissance privative ?",
      a: `<p>Cela dépend du règlement de copropriété : la jouissance privative ne transfère pas
      nécessairement l'entretien. C'est une question à trancher avec le syndic avant l'intervention ; nous
      établissons le devis au nom du donneur d'ordre qu'il désigne.</p>` },
    { q: "Peut-on traiter pendant les vacances scolaires ?",
      a: `<p>C'est souvent la meilleure fenêtre en résidence : moins d'enfants dans les espaces communs et
      moins de véhicules sur les parkings. Cela suppose simplement que la période coïncide avec la fenêtre
      biologique de l'espèce concernée.</p>` },
    { q: "Faut-il traiter tous les arbres de la résidence ?",
      a: `<p>Non. On traite les sujets porteurs et ceux qui présentent le même profil d'exposition.
      L'inventaire sert précisément à éviter un traitement généralisé, inutile et coûteux.</p>` },
    { q: "Comment justifier la dépense auprès des copropriétaires ?",
      a: `<p>Par le rapport d'inventaire et de constat, qui documente les arbres concernés, les zones
      d'usage exposées et la fenêtre d'intervention. C'est aussi une pièce utile en cas de réclamation
      ultérieure d'un occupant.</p>` }
  ],
  cta: {
    title: "Faire établir un inventaire avant la prochaine assemblée",
    text: `Un inventaire des arbres à risque et un chiffrage pluriannuel se préparent en amont de l'assemblée
    générale. Nous intervenons pour les syndics et les conseils syndicaux d'Île-de-France.`,
    primary: 'Demander un inventaire'
  },
  related: [
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'La logique pluriannuelle' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Même logique, autre échelle' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Coordination avec le prestataire d\'entretien' },
    { url: '/echenillage/', label: 'Échenillage', hint: "Le déroulé de l'opération" },
    { url: '/blog/conseils/chenilles-processionnaires-copropriete/', label: 'Le sujet en copropriété', hint: 'Article détaillé' },
    { url: '/blog/conseils/organiser-une-intervention/', label: 'Organiser une intervention', hint: 'Préparation et information' }
  ]
});
