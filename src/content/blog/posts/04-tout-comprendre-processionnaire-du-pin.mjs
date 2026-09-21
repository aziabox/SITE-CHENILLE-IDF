import { note, table } from '../../../lib/render.mjs';

export default {
  slug: 'tout-comprendre-processionnaire-du-pin',
  category: 'identifier',
  title: 'Chenille processionnaire du pin : tout comprendre',
  description: "Cycle complet, nid d'hiver, procession, diapause, expansion vers le nord : comprendre la biologie de la processionnaire du pin pour agir à temps.",
  h1: 'Chenille processionnaire du pin : tout comprendre',
  excerpt: "Comprendre le cycle de cet insecte, c'est comprendre pourquoi une intervention de mars coûte plus cher et protège moins qu'une intervention d'octobre.",
  datePublished: '2026-06-16',
  dateModified: '2026-09-19',
  lead: `On peut traiter sans comprendre. Mais on traite mieux, moins cher et plus durablement quand on sait
  où en est l'insecte dans son cycle — parce que chaque étape ouvre une prise différente.`,
  answer: `<p>La processionnaire du pin boucle son cycle en un an : <strong>ponte en été</strong>,
  <strong>éclosion en fin d'été</strong>, <strong>croissance et construction du nid à l'automne</strong>,
  <strong>hivernage en colonie</strong>, <strong>procession au sol en fin d'hiver</strong>,
  <strong>nymphose enfouie</strong> et <strong>émergence l'été suivant</strong>. Une partie des chrysalides
  peut rester en diapause plusieurs années.</p>`,
  sections: [
    { h2: "Un cycle annuel, mais pas toujours",
      html: `
      <p>Le schéma classique est annuel : un papillon donne une génération par an. Mais une particularité
      complique le tableau — la <strong>diapause prolongée</strong>.</p>
      <p>Une partie des chrysalides enfouies dans le sol n'émerge pas l'été suivant. Elles restent en
      attente, parfois deux ans, parfois davantage, avant de donner un papillon. Ce mécanisme est une
      assurance contre les mauvaises années : il garantit qu'une population ne disparaît pas totalement
      après un hiver défavorable ou un traitement efficace.</p>
      ${note(`<p>C'est la raison biologique derrière une observation que beaucoup de propriétaires nous
      rapportent : « on n'avait rien eu pendant deux ans, et là ça recommence ». Ce n'est ni une
      recolonisation venue d'ailleurs, ni un échec du traitement précédent : c'est le stock enfoui qui se
      réveille.</p>`, 'Pourquoi ça revient après deux ans de calme')}` },

    { h2: 'Le nid d\'hiver : une serre collective',
      html: `
      <p>Le nid définitif n'est pas un simple abri. C'est un dispositif thermique. La soie blanche, dense et
      orientée au sud, capte le rayonnement et permet à la colonie d'élever sa température interne de
      plusieurs degrés par rapport à l'air ambiant.</p>
      <p>Cela a deux conséquences pratiques. D'abord, le nid est <strong>toujours du côté le plus
      ensoleillé</strong> : c'est un repère fiable lorsqu'on cherche un second nid sur un arbre. Ensuite, la
      colonie peut <strong>digérer par temps froid</strong>, ce qui explique qu'elle continue de se
      développer en plein hiver alors que la plupart des insectes sont à l'arrêt.</p>
      <p>Cela explique aussi pourquoi un insecticide pulvérisé sur le nid n'a guère d'effet : la soie est
      très peu perméable, et la colonie est protégée à l'intérieur.</p>` },

    { h2: 'La procession : un déplacement contraint',
      html: `
      <p>À la fin de l'hiver, lors des premières journées douces et ensoleillées, la colonie quitte le nid.
      Les chenilles descendent le long du tronc en file continue, chacune suivant le fil de soie et le
      contact de celle qui la précède.</p>
      <p>Elles cherchent un <strong>sol meuble, drainant et bien exposé</strong> pour s'enfouir à quelques
      centimètres et se transformer en chrysalides. La file peut parcourir plusieurs dizaines de mètres et
      mettre des heures à traverser une pelouse.</p>
      ${table(
        ['Ce que cherche la colonie', 'Ce que cela donne dans un jardin'],
        [
          ['Sol meuble', 'Massifs, potager, bac à sable, sable de jeu'],
          ['Bonne exposition', 'Pelouse plein sud, talus, bordure de terrasse'],
          ['Sol drainant', 'Terrains sableux, allées gravillonnées'],
          ['Chaleur', "Abords de murs exposés, dallages clairs"]
        ],
        "Pourquoi la procession s'arrête là où les enfants jouent")}
      <p>C'est précisément ce comportement que le <a href="/piegeage-chenilles-processionnaires/">collier de
      piégeage</a> exploite : puisque la colonie doit passer par le tronc, il suffit de l'intercepter.</p>` },

    { h2: 'Une espèce en expansion vers le nord',
      html: `
      <p>Historiquement méridionale, la processionnaire du pin a progressé vers le nord au fil des
      décennies. Plusieurs facteurs se combinent : des hivers moins rigoureux, qui augmentent la survie des
      colonies, et la plantation de pins et de cèdres d'ornement bien au-delà de leur aire naturelle.</p>
      <p>En Île-de-France, elle se rencontre aujourd'hui dans toute la région. Elle est particulièrement
      installée sur les <strong>sols sableux du sud</strong> — où elle trouve à la fois le pin sylvestre et
      un substrat idéal pour la nymphose — et elle colonise en zone urbaine les <strong>pins noirs et les
      cèdres isolés</strong> des parcs, des résidences et des cimetières.</p>
      <p>Un arbre isolé, bien exposé, sans concurrence et sans prédation forte est un site de ponte de
      premier choix. C'est ce qui explique qu'un cèdre planté au milieu d'une pelouse de résidence soit
      régulièrement porteur, alors qu'aucun pin ne pousse à un kilomètre à la ronde.</p>` },

    { h2: 'Ce que le cycle dit du bon moment pour agir',
      html: `
      <ol>
        <li><strong>Septembre-octobre</strong> — jeunes larves non urticantes, en train de s'alimenter activement : c'est la fenêtre du <a href="/traitement-preventif/">traitement biologique</a>. La plus efficace, la moins visible, la moins chère.</li>
        <li><strong>Novembre-février</strong> — nid constitué et colonie groupée : c'est la fenêtre de l'<a href="/echenillage/">échenillage</a>. Résultat immédiat et vérifiable.</li>
        <li><strong>Décembre-février</strong> — avant la première descente : c'est la fenêtre du <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a>.</li>
        <li><strong>Février-mars</strong> — descente en cours : l'intervention porte autant sur le sol que sur l'arbre. C'est la période la plus contraignante.</li>
        <li><strong>Juin-septembre</strong> — vol des papillons : piège à phéromone, pour mesurer et préparer l'automne.</li>
      </ol>
      <p><a href="/traitement-processionnaire-du-pin/">Voir le protocole complet de traitement</a>.</p>` }
  ],
  faq: [
    { q: "Combien de temps vit un papillon de processionnaire ?",
      a: `<p>Quelques jours seulement. Il ne s'alimente pas : son unique rôle est la reproduction. Le vol a
      lieu la nuit, ce qui explique qu'on ne le voie pratiquement jamais.</p>` },
    { q: "Combien d'œufs pond une femelle ?",
      a: `<p>De l'ordre d'une à deux centaines, déposés en manchon autour d'un rameau et recouverts
      d'écailles protectrices. C'est ce qui explique qu'une seule ponte puisse produire une colonie
      entière.</p>` },
    { q: "Le froid détruit-il les colonies ?",
      a: `<p>Un hiver très rigoureux réduit la survie, mais le nid offre une protection thermique
      considérable. Compter sur le froid n'est pas une stratégie de lutte fiable.</p>` },
    { q: "Les chenilles peuvent-elles changer d'arbre ?",
      a: `<p>Elles peuvent se déplacer vers un rameau voisin, voire vers un arbre proche si la ressource
      s'épuise. Mais la dispersion à distance est le fait des papillons, pas des chenilles.</p>` }
  ],
  related: [
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: 'Fiche complète' },
    { url: '/traitement-processionnaire-du-pin/', label: 'Traitement du pin', hint: 'Protocole par saison' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Exploiter le comportement' }
  ]
};
