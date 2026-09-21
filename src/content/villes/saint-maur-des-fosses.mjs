import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/94-val-de-marne/saint-maur-des-fosses/',
  villeName: 'Saint-Maur-des-Fossés',
  deptSlug: '94-val-de-marne',
  villeTeaser: "boucle de la Marne, tissu pavillonnaire ancien et jardins très plantés",
  title: 'Chenilles processionnaires à Saint-Maur-des-Fossés (94100)',
  description: "Saint-Maur-des-Fossés : une boucle de la Marne densément pavillonnaire, avec des jardins anciens très plantés. Contraintes d'accès et intervention entre voisins.",
  h1: 'Chenilles processionnaires à Saint-Maur-des-Fossés',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Val-de-Marne (94)', url: '/departements/94-val-de-marne/' },
          { name: 'Saint-Maur-des-Fossés', url: '/departements/94-val-de-marne/saint-maur-des-fosses/' }],
  datePublished: '2026-05-26',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Saint-Maur-des-Fossés',
    type: 'Échenillage en jardins de ville et piégeage',
    description: "Traitement des chenilles processionnaires à Saint-Maur-des-Fossés : jardins pavillonnaires, propriétés de bord de Marne et copropriétés arborées.",
    areaServed: ['Saint-Maur-des-Fossés', 'Val-de-Marne (94)']
  },
  lead: `Saint-Maur est une commune de jardins. C'est sa qualité principale, et c'est aussi ce qui explique
  la fréquence des demandes : des milliers de parcelles plantées, souvent depuis longtemps, avec des
  conifères d'ornement arrivés à pleine maturité.`,
  answer: `<p>À Saint-Maur-des-Fossés, la <strong>processionnaire du pin</strong> est l'espèce la plus
  fréquemment rencontrée, sur les <strong>conifères d'ornement des jardins pavillonnaires</strong> —
  cèdres, pins noirs — plantés au fil du XXe siècle. Les principales difficultés sont l'<strong>accès aux
  parcelles</strong>, souvent impossible en véhicule, et la <strong>proximité entre voisins</strong>, qui
  rend l'intervention coordonnée particulièrement pertinente.</p>`,
  sections: [
    { h2: 'Une densité de jardins inhabituelle',
      html: `
      <p>La boucle de la Marne s'est urbanisée par lotissements successifs à partir de la fin du XIXe
      siècle, avec un modèle dominant : la maison individuelle sur une parcelle plantée. Un siècle plus
      tard, le résultat est un tissu pavillonnaire très dense et très arboré.</p>
      <p>Les essences d'ornement des différentes époques s'y superposent, et les conifères y occupent une
      place importante : <strong>cèdres</strong> plantés dans les jardins les plus anciens,
      <strong>pins noirs</strong> et <strong>sapins d'ornement</strong> des décennies d'après-guerre.
      Beaucoup sont aujourd'hui des arbres de quinze à vingt-cinq mètres, sur des parcelles de quelques
      centaines de mètres carrés.</p>
      ${note(`<p>Cette disproportion entre la taille de l'arbre et celle de la parcelle est la
      caractéristique locale. Elle a deux conséquences : le nid surplombe presque toujours une zone
      utilisée — terrasse, allée, jardin voisin — et l'intervention est contrainte par l'espace
      disponible.</p>`, 'Grand arbre, petite parcelle')}` },

    { h2: 'L\'accès, difficulté n°1',
      html: `
      <p>Dans une grande partie des parcelles saint-mauriennes, la nacelle ne peut pas entrer : le portail
      est étroit, l'allée mène au garage, le jardin est derrière la maison. Il reste alors deux voies.</p>
      ${table(
        ['Moyen', 'Portée', 'Conditions'],
        [
          ['Perche télescopique depuis le sol', "Jusqu'à une douzaine de mètres", 'Recul suffisant pour se positionner sous le nid'],
          ['Grimpeur-élagueur', 'Toute hauteur', "Aucun accès véhicule nécessaire ; solution la plus fréquente ici"],
          ['Nacelle depuis la voirie', 'Variable', "Si l'arbre est proche de la rue ; autorisation de stationnement à prévoir"],
          ['Nacelle dans le jardin', 'Toute hauteur', "Rare : suppose un accès large et un sol portant"]
        ],
        "Les moyens d'accès réellement utilisables en pavillonnaire dense")}
      <p>C'est pourquoi nous demandons toujours, en plus des photos de l'arbre, une <strong>photo du chemin
      jusqu'au pied de l'arbre</strong>. C'est elle qui détermine le moyen d'accès, donc le devis.</p>` },

    { h2: 'L\'intervention entre voisins',
      html: `
      <p>Sur des parcelles de cette taille, un arbre n'appartient jamais tout à fait à un seul jardin. Le
      houppier déborde, la procession traverse la clôture, les poils se déposent des deux côtés.</p>
      <p>Cela crée deux situations fréquentes, et opposées :</p>
      <ul class="plain">
        <li><strong>L'arbre est chez vous, la gêne est chez le voisin.</strong> C'est votre arbre, donc votre intervention. Prévenir le voisin avant le chantier évite bien des tensions, et lui permet de rentrer linge et animaux.</li>
        <li><strong>L'arbre est chez le voisin, la gêne est chez vous.</strong> La discussion amiable reste la voie la plus efficace, d'autant que le coût d'une intervention groupée est plus faible. En cas de blocage, la mairie est l'interlocuteur à solliciter.</li>
      </ul>
      <p>Dans les deux cas, une intervention coordonnée sur plusieurs jardins le même jour réduit nettement
      le coût pour chacun et supprime réellement la source de proximité.
      Voir <a href="/particuliers/">intervention chez les particuliers</a>.</p>` },

    { h2: 'Ce qu\'il faut surveiller, et quand',
      html: `
      <p>Sur une commune dominée par les conifères, le rendez-vous important est
      <strong>l'automne et le début de l'hiver</strong>.</p>
      <ol>
        <li><strong>Novembre</strong> — regarder pins et cèdres, sur toutes leurs faces. Sur pin, on cherche une boule de soie blanche en bout de rameau ; sur cèdre, des amas plus diffus et des zones de feuillage roussi.</li>
        <li><strong>Novembre à février</strong> — fenêtre d'<a href="/echenillage/">échenillage</a>, la plus confortable.</li>
        <li><strong>Décembre à février</strong> — <a href="/piegeage-chenilles-processionnaires/">pose de colliers</a> si le nid est hors d'atteinte et que le sol est fréquenté.</li>
        <li><strong>Février à mars</strong> — période des processions : c'est déjà tard, et le sol est concerné autant que l'arbre.</li>
      </ol>
      <p>Si des chênes sont présents sur la parcelle, ajoutez une inspection des troncs en mai.</p>` }
  ],
  faq: [
    { q: "La nacelle ne peut pas entrer dans mon jardin, est-ce bloquant ?",
      a: `<p>Non. Le grimpeur-élagueur intervient sans aucun accès véhicule et atteint précisément un nid
      dans un houppier. C'est la solution la plus courante à Saint-Maur, et elle ne nuit pas à la qualité de
      l'intervention.</p>` },
    { q: "Mon voisin refuse de traiter son pin, que puis-je faire ?",
      a: `<p>Commencez par la discussion : une intervention groupée coûte moins cher à chacun, et beaucoup
      de propriétaires ignorent simplement ce qu'est un nid de processionnaires. En cas de blocage, la
      mairie est l'interlocuteur à solliciter, notamment si un arrêté local encadre la lutte.</p>` },
    { q: "Un cèdre est-il plus difficile à traiter qu'un pin ?",
      a: `<p>Le repérage y est plus délicat, les nids étant souvent diffus plutôt que concentrés en une
      boule. L'intervention elle-même ne diffère pas, mais elle demande une inspection plus attentive de
      l'ensemble du houppier.</p>` },
    { q: "Faut-il prévenir avant l'intervention ?",
      a: `<p>Prévenez les voisins immédiats deux à trois jours avant : ils pourront rentrer le linge, les
      jouets et les animaux, et fermer les fenêtres donnant sur le chantier.</p>` },
    { q: "Que faire si la procession a déjà traversé le jardin ?",
      a: `<p>Ne pas tondre, ne pas balayer, ne pas écraser. Balisez la zone, tenez enfants et animaux à
      l'écart et signalez-le : l'intervention portera alors sur le sol autant que sur le nid.</p>` }
  ],
  cta: {
    title: "Envoyez aussi une photo de l'accès au pied de l'arbre",
    text: `À Saint-Maur, c'est l'accès qui détermine la méthode et le devis, plus encore que la hauteur du
    nid. Trois photos — l'arbre, le nid, le chemin — suffisent à chiffrer.`,
    primary: 'Demander un devis'
  },
  related: [
    { url: '/departements/94-val-de-marne/', label: 'Val-de-Marne (94)', hint: 'Situation départementale' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Intervention groupée entre voisins' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Moyens d\'accès en parcelle étroite' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Quand le nid est hors d\'atteinte' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Petits jardins, chien présent' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce dominante ici" }
  ]
});
