import { standardPage } from '../../lib/layout.mjs';
import { table, note, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/collectivites/',
  title: 'Chenilles processionnaires : intervention pour les collectivités',
  description: "Communes, EPCI, bailleurs : inventaire du patrimoine arboré, campagnes de traitement, gestion des signalements citoyens et traçabilité des interventions.",
  h1: 'Intervention pour les collectivités',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Collectivités', url: '/collectivites/' }],
  datePublished: '2026-04-08',
  dateModified: '2026-09-09',
  service: {
    name: 'Traitement pour les collectivités',
    type: 'Campagnes de traitement sur patrimoine arboré public',
    description: "Inventaire, campagnes d'échenillage et de traitement biologique, et suivi pluriannuel des chenilles processionnaires sur patrimoine arboré public, en Île-de-France."
  },
  lead: `Une commune ne traite pas un arbre : elle gère un patrimoine, des signalements, un budget annuel et
  une attente d'habitants. Le sujet des processionnaires s'y joue davantage sur la méthode de priorisation
  que sur la technique de retrait.`,
  answer: `<p>Pour une collectivité, la démarche efficace repose sur quatre éléments : un
  <strong>inventaire géolocalisé</strong> des pins, cèdres et chênes du patrimoine, une
  <strong>hiérarchisation par usage du sol</strong> (écoles, aires de jeux, cheminements, équipements
  sportifs), des <strong>campagnes calées sur les fenêtres biologiques</strong> de chaque espèce, et une
  <strong>traçabilité écrite</strong> des interventions.</p>`,
  sections: [
    { h2: 'Le cadre réglementaire depuis 2022',
      html: `
      <p>Le décret n° 2022-1124 du 5 août 2022 a inscrit les chenilles processionnaires du pin et du chêne
      sur la liste des espèces animales nuisibles à la santé humaine. Ce classement, pris au titre du code
      de la santé publique, donne aux préfets et aux maires un fondement pour organiser la lutte sur leur
      territoire.</p>
      <p>Concrètement, cela ouvre plusieurs possibilités d'action, qu'il appartient à chaque collectivité
      d'apprécier avec ses services juridiques :</p>
      <ul class="plain">
        <li>Prescrire des mesures de lutte, y compris sur des terrains privés, dans des situations qui le justifient.</li>
        <li>Organiser des campagnes groupées à l'échelle d'un quartier ou d'une commune.</li>
        <li>Mettre en place un dispositif de signalement citoyen.</li>
        <li>Intégrer le sujet dans la gestion courante du patrimoine arboré.</li>
      </ul>
      ${note(`<p>Nous intervenons en tant que prestataire technique. Nous n'apportons pas de conseil
      juridique sur la rédaction d'un arrêté ou sur l'étendue des pouvoirs de police du maire : ces
      questions relèvent des services de la collectivité.</p>`, 'Notre rôle')}` },

    { h2: 'Inventaire et hiérarchisation',
      html: `
      <p>C'est le socle. Sans inventaire, une commune traite ce qui est signalé — donc ce qui est visible,
      pas nécessairement ce qui est prioritaire.</p>
      ${steps([
        { title: 'Recensement des essences sensibles', body: `<p>Pins, cèdres et chênes du patrimoine communal :
          parcs, squares, alignements, abords d'équipements, cimetières, terrains de sport.</p>` },
        { title: 'Relevé de l\'usage du sol', body: `<p>Ce qui se trouve sous chaque arbre : aire de jeux, banc,
          cheminement scolaire, arrêt de bus, terrasse, parking. C'est ce critère qui détermine la priorité,
          davantage que la taille du nid.</p>` },
        { title: 'Contrôle de présence', body: `<p>Repérage des nids et des anciens nids, à la bonne saison pour
          chaque espèce.</p>` },
        { title: 'Classement en trois niveaux', body: `<p>Priorité 1 : exposition directe et quotidienne.
          Priorité 2 : fréquentation régulière. Priorité 3 : arbres isolés ou peu fréquentés, mis sous
          surveillance.</p>` },
        { title: 'Programmation annuelle', body: `<p>Répartition des interventions sur les fenêtres utiles —
          automne pour le pin, printemps pour le chêne — avec un budget par campagne.</p>` }
      ])}` },

    { h2: 'Les lieux prioritaires sur un territoire communal',
      tocLabel: 'Sites prioritaires',
      html: `
      ${table(
        ['Site', 'Pourquoi il passe en premier'],
        [
          ['Écoles, crèches, centres de loisirs', "Public le plus sensible, présence quotidienne prolongée. Voir <a href=\"/ecoles/\">notre page dédiée</a>"],
          ['Aires de jeux et squares', 'Jeu au sol, usage familial, forte fréquentation aux beaux jours'],
          ['Cheminements scolaires et abords d\'arrêts', 'Passage quotidien, souvent sous alignements'],
          ['Équipements sportifs de plein air', "Effort physique et respiration accrue sous les arbres"],
          ['Cimetières', "Allées plantées de conifères, fréquentation régulière, entretien manuel"],
          ['Parcs et promenades', 'Longs linéaires, priorisation par tronçons']
        ],
        'Hiérarchiser selon la fréquentation réelle')}` },

    { h2: 'Gérer les signalements des habitants',
      html: `
      <p>Un dispositif de signalement bien conçu fait gagner un temps considérable et améliore la couverture
      du territoire. Trois principes suffisent.</p>
      <ol>
        <li><strong>Demander une photo et une localisation précise.</strong> La photo écarte les fausses alertes — toiles d'hyponomeute, gui, nids d'oiseaux — qui représentent une part importante des signalements.</li>
        <li><strong>Distinguer domaine public et domaine privé.</strong> Beaucoup de signalements concernent des arbres privés : la réponse est alors une information, pas une intervention.</li>
        <li><strong>Accuser réception avec une consigne immédiate.</strong> « Ne vous approchez pas, ne tentez pas de retirer le nid » vaut mieux qu'un simple enregistrement de la demande.</li>
      </ol>
      ${note(`<p>Nous fournissons aux communes qui le souhaitent une fiche de tri simple, utilisable par un
      agent d'accueil, pour classer un signalement en trois catégories : fausse alerte, arbre privé,
      intervention à programmer.</p>`, 'Outil de tri')}` },

    { h2: 'Campagnes groupées et communication',
      html: `
      <p>Sur un territoire où la pression est forte — communes de lisière forestière notamment —, la
      campagne groupée donne de meilleurs résultats qu'une succession d'interventions isolées. Traiter les
      arbres publics d'un quartier sans que les arbres privés voisins le soient laisse un réservoir
      intact.</p>
      <p>Plusieurs communes franciliennes organisent ainsi des opérations coordonnées, parfois associées à
      une information des riverains sur les fenêtres d'intervention et sur les gestes à éviter. Nous
      participons à ces dispositifs en fournissant le volet technique : inventaire, traitement, compte rendu
      par arbre.</p>
      <p>L'autre levier, moins coûteux et durable, concerne la <a href="/traitement-preventif/">biodiversité</a> :
      pose de nichoirs à mésanges sur les sites récurrents, gîtes à chauves-souris, réflexion sur l'éclairage
      nocturne des parcs.</p>` }
  ],
  faq: [
    { q: "Une commune peut-elle imposer un traitement sur un terrain privé ?",
      a: `<p>Le classement de 2022 fournit un fondement pour prescrire des mesures de lutte dans certaines
      situations. L'appréciation et la rédaction d'un éventuel arrêté relèvent des services juridiques de la
      collectivité et, le cas échéant, de la préfecture. Nous n'intervenons que sur le volet technique.</p>` },
    { q: "Comment budgéter une campagne annuelle ?",
      a: `<p>Sur la base de l'inventaire : nombre d'arbres par niveau de priorité, méthode retenue pour
      chacun et fenêtre d'intervention. Le coût par arbre baisse fortement lorsque les sujets sont groupés
      géographiquement et traités dans la même campagne.</p>` },
    { q: "Intervenez-vous dans le cadre d'un marché public ?",
      a: `<p>Oui. Nous répondons aux consultations portant sur le traitement des chenilles processionnaires
      et fournissons les pièces techniques nécessaires au dossier.</p>` },
    { q: "Peut-on traiter les arbres d'alignement en bord de voirie ?",
      a: `<p>Oui, avec les contraintes habituelles de circulation : intervention en dehors des heures de
      pointe, signalisation temporaire et, selon les cas, arrêté de circulation à prévoir par la
      collectivité.</p>` },
    { q: "Que faire des signalements portant sur un massif forestier ?",
      a: `<p>Un massif géré par l'ONF ou par un propriétaire forestier relève d'une logique différente : la
      lutte y est rarement généralisée. L'action communale porte plutôt sur la protection des zones d'usage
      en lisière que sur le massif lui-même.</p>` }
  ],
  cta: {
    title: "Faire réaliser un inventaire du patrimoine arboré",
    text: `L'inventaire est le document qui permet de hiérarchiser, de budgéter et de justifier les choix.
    Nous intervenons pour les communes, les EPCI et les bailleurs d'Île-de-France.`,
    primary: 'Demander un inventaire'
  },
  related: [
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Les sites prioritaires' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Protection des agents' },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: 'Campagnes sur alignements' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Plan pluriannuel' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Situation par département' },
    { url: '/blog/conseils/organiser-une-intervention/', label: 'Organiser une intervention', hint: 'Préparation et information' }
  ]
});
