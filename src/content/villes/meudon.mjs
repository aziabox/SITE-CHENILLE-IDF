import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/92-hauts-de-seine/meudon/',
  villeName: 'Meudon',
  deptSlug: '92-hauts-de-seine',
  villeTeaser: "coteaux boisés, terrains en pente et propriétés arborées anciennes",
  title: 'Chenilles processionnaires à Meudon (92190)',
  description: "Meudon : une forêt de coteau, des terrains en pente et un habitat arboré ancien. Comment la topographie change le calendrier et les moyens d'intervention.",
  h1: 'Chenilles processionnaires à Meudon',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Hauts-de-Seine (92)', url: '/departements/92-hauts-de-seine/' },
          { name: 'Meudon', url: '/departements/92-hauts-de-seine/meudon/' }],
  datePublished: '2026-05-16',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Meudon',
    type: 'Échenillage et aspiration de nids en terrain pentu',
    description: "Traitement des chenilles processionnaires à Meudon et sur les coteaux voisins : propriétés en pente, copropriétés arborées et patrimoine communal.",
    areaServed: ['Meudon', 'Hauts-de-Seine (92)']
  },
  lead: `À Meudon, deux facteurs commandent l'intervention et on les sous-estime souvent : la pente, qui
  limite le matériel, et l'exposition, qui décale les dates d'un versant à l'autre de la même commune.`,
  answer: `<p>Meudon associe une <strong>forêt de coteau à dominante de chênes</strong> — réservoir de la
  processionnaire du chêne — et un habitat ancien largement planté de <strong>conifères d'ornement</strong>,
  favorable à la processionnaire du pin. La <strong>pente</strong> est la contrainte de chantier principale :
  elle limite l'usage de la nacelle et oriente fréquemment vers le travail au grimpeur.</p>`,
  sections: [
    { h2: 'La pente, contrainte principale',
      html: `
      <p>Meudon est construite sur un relief marqué. Beaucoup de propriétés occupent des terrains en pente,
      avec des accès étroits, des escaliers, des murs de soutènement et peu d'emprise plane.</p>
      <p>Pour un chantier d'échenillage, cela change tout. Une nacelle élévatrice a besoin d'une surface
      stable et sensiblement horizontale pour se caler : sur un terrain pentu, cette condition est rarement
      réunie. Deux options subsistent alors :</p>
      <ul class="plain">
        <li><strong>Le travail à la perche depuis le point le plus favorable</strong> — efficace jusqu'à une douzaine de mètres, à condition de pouvoir se positionner correctement sous le nid.</li>
        <li><strong>Le grimpeur-élagueur</strong> — qui n'exige aucun accès véhicule et permet d'atteindre précisément un nid dans un houppier, quelle que soit la topographie.</li>
      </ul>
      ${note(`<p>C'est pourquoi une photo de l'arbre seule ne suffit pas à chiffrer une intervention à
      Meudon. Il nous faut aussi savoir comment on accède au pied de l'arbre, et ce qu'il y a autour :
      talus, escalier, mur, terrasse en contrebas.</p>`, 'Ce qu\'il faut nous dire')}` },

    { h2: 'Versant sud, versant nord : des dates différentes',
      html: `
      <p>Sur un coteau, l'exposition varie fortement sur de courtes distances. Un versant sud bien ensoleillé
      se réchauffe plus tôt qu'un fond de vallon ou un versant nord.</p>
      <p>Cela a deux conséquences concrètes. Pour la <a href="/chenille-processionnaire-du-chene/">
      processionnaire du chêne</a>, le débourrement des feuilles — et donc l'éclosion — avance de plusieurs
      jours sur les versants exposés : la fenêtre de traitement biologique d'avril n'est pas la même en haut
      et en bas de la commune. Pour la <a href="/chenille-processionnaire-du-pin/">processionnaire du
      pin</a>, les processions de fin d'hiver démarrent plus tôt sur les pentes sud bien réchauffées.</p>
      <p>Pour un gestionnaire de patrimoine arboré, l'enseignement pratique est simple : traiter les
      versants exposés en premier.</p>` },

    { h2: 'Un habitat arboré hérité',
      html: `
      <p>Le secteur a été, à partir du XIXe siècle, un lieu de résidence apprécié pour ses vues et son air.
      Il en reste de nombreuses propriétés anciennes, avec des jardins plantés à la mode de l'époque —
      <strong>cèdres</strong>, <strong>pins noirs</strong>, sujets d'ornement isolés — aujourd'hui devenus
      de grands arbres.</p>
      ${table(
        ['Contexte', 'Espèce', 'Difficulté propre'],
        [
          ['Propriété ancienne en pente', 'Pin', "Cèdres de grande hauteur, accès nacelle impossible"],
          ['Copropriété de coteau', 'Les deux', "Espaces verts en terrasses, cheminements en escalier"],
          ['Jardin en contrebas de la forêt', 'Chêne', "Chênes de lisière, nids sur tronc à hauteur d'homme"],
          ['Petite parcelle en hauteur', 'Pin', "Peu de recul pour manœuvrer une perche"],
          ['Abords d\'équipement public', 'Les deux', "Fréquentation et dénivelé combinés"]
        ],
        'Ce que nous rencontrons sur les coteaux meudonnais')}` },

    { h2: 'Le repérage sur cèdre : un point de vigilance',
      html: `
      <p>Le cèdre est très présent localement, et il pose une difficulté d'identification. Sur un pin, le
      nid d'hiver est une boule blanche nette, visible de loin. Sur un cèdre, la colonie produit souvent des
      amas plus <strong>diffus</strong>, répartis sur plusieurs rameaux, moins contrastés sur le feuillage
      bleuté.</p>
      <p>Résultat : les nids sont repérés plus tard, parfois seulement au moment où la procession descend le
      long du tronc, en fin d'hiver. À ce stade, le retrait du nid n'empêche plus la contamination du sol.</p>
      <p>Si vous avez un cèdre, l'observation de novembre mérite d'être plus attentive que sur un pin :
      regardez l'arbre aux jumelles, sur toute sa hauteur et sur toutes ses faces, en cherchant des zones de
      feuillage roussi plutôt qu'une boule blanche.</p>` }
  ],
  faq: [
    { q: "Pourquoi une nacelle ne peut-elle pas toujours intervenir ?",
      a: `<p>Parce qu'elle doit être calée sur une surface stable et sensiblement plane. Sur un terrain en
      pente, avec des accès étroits et des murs de soutènement, cette condition est rarement réunie. Le
      grimpeur est alors la solution, sans que cela nuise à la qualité de l'intervention.</p>` },
    { q: "Les dates d'intervention varient-elles dans la commune ?",
      a: `<p>De quelques jours, selon l'exposition. Un versant sud voit le débourrement et les processions
      démarrer avant un fond de vallon. L'écart est faible mais il compte pour caler un traitement de
      printemps ou une pose de collier.</p>` },
    { q: "Comment repérer un nid sur un cèdre ?",
      a: `<p>Plutôt qu'une boule blanche, cherchez des amas de soie diffus et des zones de feuillage roussi,
      sur plusieurs rameaux. Une observation aux jumelles, en faisant le tour de l'arbre, est nettement plus
      fiable qu'un coup d'œil depuis une fenêtre.</p>` },
    { q: "La forêt de coteau est-elle traitée ?",
      a: `<p>Le gestionnaire du massif concentre ses actions sur les zones d'accueil du public. Pour une
      propriété en contrebas ou en lisière, la protection porte sur votre parcelle.</p>` },
    { q: "Que faut-il nous envoyer pour obtenir un devis fiable ?",
      a: `<p>Une photo de l'arbre entier avec un repère de hauteur, une photo de la zone suspecte au zoom,
      et une photo de l'accès au pied de l'arbre. Cette dernière est celle qui manque le plus souvent, et
      c'est celle qui détermine le moyen d'intervention.</p>` }
  ],
  cta: {
    title: "Terrain en pente : dites-nous comment on accède à l'arbre",
    text: `À Meudon, l'accès conditionne la méthode autant que la hauteur du nid. Une photo du chemin jusqu'au
    pied de l'arbre nous évite une visite pour rien.`,
    primary: 'Demander un devis'
  },
  related: [
    { url: '/departements/92-hauts-de-seine/', label: 'Hauts-de-Seine (92)', hint: 'Situation départementale' },
    { url: '/departements/92-hauts-de-seine/rueil-malmaison/', label: 'Rueil-Malmaison', hint: 'Autre secteur de grandes propriétés' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Moyens d\'accès selon la hauteur' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce des cèdres" },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Le cas du cèdre' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Espaces verts en terrasses' }
  ]
});
