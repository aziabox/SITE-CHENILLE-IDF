import { standardPage, zoneReminder } from '../../lib/layout.mjs';
import { table, figure, note, safety } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenilles-processionnaires/',
  title: 'Chenilles processionnaires : espèces, risques et traitements',
  description: "Les deux espèces de chenilles processionnaires : pin et chêne. Cycle, poils urticants, identification du nid, traitements et cadre réglementaire.",
  h1: 'Les chenilles processionnaires : ce qu\'il faut savoir avant d\'agir',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Chenilles processionnaires', url: '/chenilles-processionnaires/' }],
  datePublished: '2026-02-10',
  dateModified: '2026-09-15',
  priority: '0.9',
  primaryImage: '/assets/img/comparaison-pin-chene.svg',
  lead: `Sous le nom de « chenille processionnaire », on désigne en réalité deux insectes différents,
  qui ne vivent pas sur les mêmes arbres, n'apparaissent pas à la même saison et ne se traitent pas de la
  même façon. Confondre les deux, c'est intervenir au mauvais moment.`,
  answer: `<p>Les chenilles processionnaires sont les larves de deux papillons de nuit :
  <strong>la processionnaire du pin</strong> (<em>Thaumetopoea pityocampa</em>), active de l'automne à la
  fin de l'hiver sur les pins et les cèdres, et <strong>la processionnaire du chêne</strong>
  (<em>Thaumetopoea processionea</em>), active au printemps sur les chênes. Toutes deux portent des poils
  urticants qui provoquent des réactions cutanées, oculaires et respiratoires chez l'homme et l'animal, et
  restent dangereux longtemps après la mort de la chenille.</p>`,
  sections: [
    { h2: 'Deux espèces, deux calendriers, deux traitements',
      tocLabel: 'Deux espèces distinctes',
      html: `
      <p>C'est la première chose à établir devant un arbre suspect. Le reste en découle : la méthode, la
      saison, l'urgence, le matériel. Les deux espèces partagent un comportement grégaire — les chenilles
      vivent en colonie et se déplacent en file indienne, d'où leur nom — et une défense commune : des poils
      urticants qu'elles libèrent massivement quand elles se sentent menacées.</p>
      ${table(
        ['', 'Processionnaire du pin', 'Processionnaire du chêne'],
        [
          ['Nom scientifique', '<em>Thaumetopoea pityocampa</em>', '<em>Thaumetopoea processionea</em>'],
          ['Arbres concernés', 'Pins (sylvestre, noir, maritime, d\'Alep), cèdres', 'Chênes (pédonculé, sessile, rouge)'],
          ['Aspect du nid', 'Boule de soie blanche, opaque, en bout de rameau', 'Manchon plat gris, plaqué au tronc ou à une charpentière'],
          ['Chenilles visibles', "D'octobre à mars", "D'avril à juillet"],
          ['Descente au sol', 'Oui, en procession, fin d\'hiver', 'Non : nymphose dans le nid'],
          ['Pic de risque', 'Février-mars, pendant les processions', 'Mai-juillet, nids en pleine activité'],
          ['Vol des papillons', 'Juin à septembre', 'Juillet à septembre']
        ],
        'Tableau comparatif des deux espèces')}
      ${figure({ src: '/assets/img/comparaison-pin-chene.svg', width: 960, height: 460,
        alt: "Comparaison illustrée : nid blanc en bout de branche de pin à gauche, nid plat gris sur tronc de chêne à droite",
        caption: "La forme et l'emplacement du nid sont le critère de distinction le plus fiable depuis le sol." })}` },

    { h2: 'Pourquoi ces chenilles sont dangereuses',
      html: `
      <p>Le danger tient à un détail d'anatomie. À partir du troisième stade larvaire, le dos de la chenille
      se couvre de « miroirs » — des replis contenant des centaines de milliers de poils microscopiques,
      creux et barbelés. Chaque poil mesure quelques centièmes de millimètre. Il se détache au moindre
      frottement, vole avec le courant d'air, s'accroche à la peau, aux muqueuses, aux tissus, aux poils
      d'un animal.</p>
      <p>Ces poils contiennent une protéine urticante (la thaumétopoéine). La réaction n'est donc pas une
      piqûre mais une combinaison d'irritation mécanique et de réaction allergique : plaques rouges très
      prurigineuses, conjonctivite, toux, gêne respiratoire. Chez les personnes déjà sensibilisées par un
      contact antérieur, la réaction peut être plus forte au second épisode.</p>
      ${safety(`<p>Un nid vide reste dangereux. Les poils accumulés à l'intérieur — mues successives comprises —
      demeurent urticants pendant des mois, parfois plusieurs années, dans le nid, au pied de l'arbre et dans
      le sol. C'est la raison pour laquelle un nid n'est jamais simplement décroché et laissé sur place.</p>`,
      'Un point souvent ignoré')}
      <p>Les publics les plus exposés sont ceux qui vivent près du sol ou qui manipulent la végétation :
      les <a href="/chenilles-processionnaires-enfant/">jeunes enfants</a>, les
      <a href="/chenilles-processionnaires-chien/">chiens</a> — qui flairent et lèchent —, les jardiniers
      et les agents d'espaces verts. <a href="/chenilles-processionnaires-danger/">Voir le détail des
      risques et les réflexes à avoir</a>.</p>` },

    { h2: 'Le cycle de vie, clé de toute intervention',
      html: `
      <p>Une intervention efficace se cale sur le cycle, pas sur l'envie d'agir. Les deux espèces suivent le
      même schéma — œuf, cinq stades larvaires, chrysalide, papillon — mais décalé de six mois.</p>
      <h3>Processionnaire du pin</h3>
      <ol>
        <li><strong>Été</strong> — les papillons volent la nuit et pondent un manchon d'œufs autour d'un rameau.</li>
        <li><strong>Fin d'été / automne</strong> — éclosion ; les jeunes chenilles construisent des abris provisoires. C'est la fenêtre idéale pour un traitement biologique.</li>
        <li><strong>Automne / hiver</strong> — construction du nid définitif, bien visible, orienté au sud.</li>
        <li><strong>Fin d'hiver</strong> — descente au sol en procession, enfouissement, nymphose.</li>
        <li><strong>Été suivant</strong> — émergence. Certaines chrysalides restent en diapause plusieurs années, ce qui explique les retours apparemment inexpliqués.</li>
      </ol>
      <h3>Processionnaire du chêne</h3>
      <ol>
        <li><strong>Été</strong> — ponte sur les rameaux fins, en hauteur.</li>
        <li><strong>Hiver</strong> — les œufs passent la mauvaise saison sur l'arbre. Rien n'est visible.</li>
        <li><strong>Printemps</strong> — éclosion au débourrement des feuilles ; les chenilles se regroupent et forment le nid sur le tronc.</li>
        <li><strong>Mai à juillet</strong> — stades urticants, défoliation, risque maximal.</li>
        <li><strong>Été</strong> — nymphose dans le nid puis envol, le nid restant en place.</li>
      </ol>
      ${figure({ src: '/assets/img/cycle-annuel-processionnaires.svg', width: 960, height: 400,
        alt: "Frise de douze mois montrant les périodes de nid, de procession et de vol pour les deux espèces",
        caption: "Les dates réelles varient d'une année à l'autre : un hiver doux avance les processions de plusieurs semaines." })}` },

    { h2: 'Ce qui fonctionne, et ce qui aggrave la situation',
      tocLabel: 'Méthodes efficaces et erreurs',
      html: `
      <p>Les quatre méthodes professionnelles — <a href="/echenillage/">échenillage</a>,
      <a href="/traitement-preventif/">traitement biologique</a>,
      <a href="/piegeage-chenilles-processionnaires/">piégeage</a> et surveillance — se complètent plutôt
      qu'elles ne se remplacent. Le piégeage seul ne supprime pas un nid déjà installé ; l'échenillage seul
      ne protège pas contre une recolonisation depuis le massif voisin.</p>
      ${note(`<p><strong>Trois gestes à ne jamais faire.</strong></p>
      <ul>
        <li><strong>Brûler le nid sur l'arbre</strong> : la chaleur projette les poils, abîme le pin et présente un risque d'incendie.</li>
        <li><strong>Arroser au jet haute pression</strong> : on disperse les poils sur toute la parcelle, y compris chez le voisin.</li>
        <li><strong>Tirer le nid au fusil ou à la perche sans protection</strong> : le nid éclate et retombe en pluie de poils.</li>
      </ul>
      <p>Ces trois réflexes expliquent la majorité des consultations médicales liées aux processionnaires
      dans un cadre domestique.</p>`, 'À éviter absolument')}
      <p>Voir le détail des méthodes : <a href="/traitement-chenilles-processionnaires/">traitement des
      chenilles processionnaires</a>, <a href="/destruction-nid-chenilles-processionnaires/">destruction
      de nid</a>, <a href="/traitement-curatif/">traitement curatif</a>.</p>` },

    { h2: 'Ce que dit la réglementation',
      html: `
      <p>Le décret n° 2022-1124 du 5 août 2022 a inscrit les chenilles processionnaires du pin et du chêne
      sur la liste des espèces animales nuisibles à la santé humaine, au titre du code de la santé publique.
      Ce classement ne crée pas d'obligation générale de traitement pour tous les propriétaires, mais il
      ouvre aux préfets et aux maires la possibilité de prescrire des mesures de lutte, notamment lorsque
      des lieux fréquentés par du public sont concernés.</p>
      <p>En pratique, cela veut dire deux choses. D'une part, certaines communes prennent des arrêtés
      imposant l'échenillage des arbres privés : il faut se renseigner auprès de sa mairie. D'autre part,
      un gestionnaire d'espace accueillant du public — école, crèche, camping, copropriété, collectivité —
      a tout intérêt à documenter ses actions de surveillance et de traitement.</p>
      ${note(`<p>Les nids et les déchets d'échenillage ne se jettent pas dans les déchets verts ni au
      compost. Ils sont confinés puis éliminés par une filière adaptée. C'est un point que les gestionnaires
      publics nous demandent régulièrement de tracer par écrit.</p>`)}` },

    { h2: "La situation en Île-de-France",
      html: `
      <p>La région cumule les deux espèces, pour des raisons différentes. La processionnaire du chêne y est
      installée de longue date : les grands massifs de chênes — Fontainebleau, Rambouillet, Sénart,
      Saint-Germain-en-Laye, Montmorency, bois Notre-Dame — constituent un réservoir permanent, et les
      lisières pavillonnaires qui les bordent sont les premières concernées.</p>
      <p>La processionnaire du pin, elle, est une arrivante. Longtemps cantonnée au sud de la Loire, elle a
      progressé vers le nord au fil des décennies et se rencontre aujourd'hui dans toute la région, surtout
      sur les pins d'ornement et les cèdres plantés dans les parcs, les résidences et les jardins. Un pin
      noir isolé au milieu d'un lotissement est un candidat typique : bien exposé, sans concurrence, sans
      prédateur.</p>
      ${zoneReminder}` }
  ],
  faq: [
    { q: "Comment savoir si mon arbre est un pin ou un chêne quand il est dégarni ?",
      a: `<p>Le pin porte des aiguilles groupées par deux ou par trois et des cônes ligneux ; le chêne porte
      des feuilles lobées et des glands. En hiver, le chêne est nu, ce qui rend un nid plat très visible sur
      le tronc, alors que le pin reste vert et garde son nid en hauteur.</p>` },
    { q: "Une chenille processionnaire peut-elle piquer ?",
      a: `<p>Non, elle ne pique pas et ne mord pas. Ce sont ses poils urticants, libérés en grand nombre,
      qui provoquent les réactions. C'est pour cela qu'une exposition est possible sans aucun contact
      direct avec l'insecte.</p>` },
    { q: "Combien de chenilles peut contenir un nid ?",
      a: `<p>Cela varie beaucoup, mais une colonie de processionnaires du pin compte couramment plusieurs
      centaines de chenilles dans un nid d'hiver bien développé. Un chêne peut porter plusieurs nids
      simultanément.</p>` },
    { q: "Les processionnaires tuent-elles les arbres ?",
      a: `<p>Rarement à elles seules. Elles provoquent une défoliation qui affaiblit l'arbre, ralentit sa
      croissance et le rend plus vulnérable à d'autres agresseurs ou à la sécheresse. Un arbre déjà stressé
      et défolié plusieurs années de suite peut en revanche dépérir.</p>` },
    { q: "Faut-il traiter un arbre en limite de propriété ?",
      a: `<p>C'est le propriétaire de l'arbre qui est concerné. En cas de désaccord entre voisins, la mairie
      est l'interlocuteur à solliciter, d'autant plus si un arrêté local encadre la lutte. Nous intervenons
      régulièrement sur des arbres mitoyens après accord écrit des deux parties.</p>` }
  ],
  cta: {
    title: "Une photo suffit souvent à trancher",
    text: `Nid de processionnaire, toile d'hyponomeute ou simple nid d'oiseau : l'identification à distance
    évite un déplacement inutile et vous dit immédiatement si la situation demande une intervention rapide.`,
    primary: 'Faire identifier un nid'
  },
  related: [
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: 'Cycle, nid, procession, traitement' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Nid plat, printemps, forte présence francilienne' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Ce qui ressemble à un nid sans en être un' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements disponibles', hint: 'Quelle méthode à quelle saison' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers et poils urticants', hint: 'Effets sur les humains et les animaux' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Les huit départements franciliens' }
  ]
});
