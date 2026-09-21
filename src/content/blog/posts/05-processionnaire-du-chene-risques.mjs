import { note, safety, table } from '../../../lib/render.mjs';

export default {
  slug: 'chenille-processionnaire-du-chene-risques',
  category: 'danger',
  title: 'Chenille processionnaire du chêne : risques et prévention',
  description: "Nid discret à hauteur d'homme, pic en mai-juin, nids urticants après l'envol : pourquoi la processionnaire du chêne pose un problème collectif.",
  h1: 'Chenille processionnaire du chêne : risques et prévention',
  excerpt: "Son nid ne ressemble pas à un nid, il se trouve à hauteur de visage, et son pic d'activité tombe quand les jardins et les cours d'école sont le plus fréquentés.",
  datePublished: '2026-06-18',
  dateModified: '2026-09-19',
  lead: `On parle beaucoup de la processionnaire du pin, parce qu'elle est spectaculaire. La processionnaire
  du chêne est plus discrète — et c'est précisément ce qui la rend problématique en espace fréquenté.`,
  answer: `<p>La processionnaire du chêne présente trois facteurs de risque propres : son <strong>nid est
  discret</strong> et plaqué contre le tronc, souvent <strong>à hauteur d'homme</strong> ; son <strong>pic
  d'activité tombe de mai à juillet</strong>, en pleine saison d'usage des espaces extérieurs ; et ses
  <strong>nids restent urticants après l'envol des papillons</strong>, parfois plus d'un an.</p>`,
  sections: [
    { h2: 'Un nid qui ne ressemble pas à un nid',
      html: `
      <p>L'image mentale que chacun a d'un nid de chenilles — une boule de soie blanche dans un arbre — ne
      correspond pas à cette espèce. Sur chêne, le nid est une <strong>plaque grise aplatie</strong>, collée
      à l'écorce, dont la couleur se confond avec celle du tronc.</p>
      <p>Résultat : dans une majorité des situations que l'on nous signale, ce ne sont pas les nids qui
      déclenchent l'appel, mais les <strong>symptômes</strong>. Des enfants qui rentrent de récréation avec
      des plaques, un jardinier qui se plaint de démangeaisons après une taille, des habitants d'une
      résidence qui n'utilisent plus leur terrasse. On remonte alors jusqu'au chêne, et on trouve trois ou
      quatre nids que personne n'avait vus.</p>` },

    { h2: 'La hauteur, facteur aggravant',
      html: `
      <p>Sur pin, le nid est en hauteur, souvent hors d'atteinte. Sur chêne, il se situe fréquemment entre
      un mètre cinquante et cinq mètres — c'est-à-dire <strong>à portée directe</strong> d'un adulte, d'un
      enfant sur les épaules de son père, ou d'une main curieuse.</p>
      ${safety(`<p>C'est ce qui explique les expositions les plus fortes : quelqu'un qui gratte la plaque
      « pour voir ce que c'est » reçoit en pleine figure le contenu de plusieurs mois de mues accumulées.
      La consigne est donc absolue : on ne touche pas, on ne gratte pas, on photographie à distance.</p>`,
      'Ne jamais gratter')}
      <p>À cette hauteur, les poils qui se détachent tombent aussi directement sur les personnes qui
      passent, s'assoient ou travaillent au pied de l'arbre.</p>` },

    { h2: 'Un calendrier qui tombe au pire moment',
      html: `
      <p>Le pic urticant de l'espèce s'étend de mai à juillet. C'est exactement la période où :</p>
      <ul class="plain">
        <li>les cours d'école et les centres de loisirs sont utilisés toute la journée ;</li>
        <li>les parcs et les squares connaissent leur plus forte fréquentation ;</li>
        <li>les terrasses, les aires de jeux et les jardins sont réinvestis ;</li>
        <li>les équipes d'espaces verts multiplient tontes, tailles et soufflages ;</li>
        <li>les équipements sportifs de plein air tournent à plein.</li>
      </ul>
      ${note(`<p>La conséquence opérationnelle est qu'une intervention de printemps sur chêne se fait
      presque toujours <strong>en présence d'usagers</strong>, ce qui impose balisage, horaires décalés et
      information. D'où l'intérêt du <a href="/traitement-preventif/">traitement biologique d'avril</a>, qui
      évite la formation des nids.</p>`, 'Pourquoi avril vaut mieux que juin')}` },

    { h2: 'Le nid vide, risque prolongé',
      html: `
      <p>Contrairement à la processionnaire du pin, qui quitte l'arbre pour s'enfouir, celle du chêne se
      transforme en chrysalide <strong>à l'intérieur du nid</strong>. Après l'envol des papillons, le nid
      reste en place, chargé des mues et des poils de toute la colonie.</p>
      ${table(
        ['Période', 'État du nid', 'Risque'],
        [
          ['Mai — juillet', 'Actif, chenilles présentes', 'Maximal'],
          ['Juillet — septembre', 'Nymphose puis envol', 'Élevé'],
          ['Automne — hiver', 'Vide, en place sur le tronc', 'Réel, souvent ignoré'],
          ['Printemps suivant', 'Ancien nid dégradé', 'Décroissant mais non nul']
        ],
        'Un nid de chêne reste un problème longtemps après la saison')}
      <p>C'est pourquoi le retrait des anciens nids est une intervention à part entière, utile y compris en
      plein hiver — quand les conditions de chantier sont d'ailleurs meilleures.</p>` },

    { h2: 'Prévenir : ce qui fonctionne',
      html: `
      <ol>
        <li><strong>Inspecter les troncs au printemps.</strong> Dix minutes par jardin, en faisant le tour de chaque chêne à deux mètres de distance. C'est la mesure la plus rentable.</li>
        <li><strong>Baliser dès le doute.</strong> Un simple ruban autour du tronc supprime l'essentiel de l'exposition en attendant l'intervention, et ne coûte rien.</li>
        <li><strong>Traiter en avril les chênes à historique.</strong> Le biocontrôle sur jeunes larves évite la formation des nids et donc tout le reste.</li>
        <li><strong>Retirer les anciens nids en hiver.</strong> Ils continuent de relarguer des poils.</li>
        <li><strong>Déplacer les usages.</strong> Bancs, tables, modules de jeu : les éloigner du pied des chênes porteurs est parfois la mesure la plus simple.</li>
      </ol>
      <p><a href="/chenille-processionnaire-du-chene/">Voir la fiche complète de l'espèce</a> et
      <a href="/traitement-processionnaire-du-chene/">le protocole de traitement</a>.</p>` }
  ],
  faq: [
    { q: "La processionnaire du chêne est-elle plus urticante que celle du pin ?",
      a: `<p>Les poils sont comparables. La différence tient à l'exposition : nid à hauteur d'homme, pic en
      pleine saison d'usage, et nid qui reste en place après la saison.</p>` },
    { q: "Peut-on traiter un chêne en hiver ?",
      a: `<p>Pas contre les chenilles : à cette saison, l'espèce n'existe qu'à l'état d'œuf. L'hiver sert en
      revanche à retirer les anciens nids et à préparer la campagne de printemps.</p>` },
    { q: "Faut-il abattre un chêne infesté ?",
      a: `<p>Non, et ce serait disproportionné. L'infestation est saisonnière et n'entraîne pas la mort de
      l'arbre dans la très grande majorité des cas.</p>` },
    { q: "Les chênes rouges sont-ils concernés ?",
      a: `<p>Oui, au même titre que les chênes indigènes. Très plantés dans les lotissements et les
      résidences des années 1960-1980, ils figurent régulièrement parmi les arbres porteurs.</p>` }
  ],
  related: [
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Fiche complète' },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: 'Aspiration et biocontrôle' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Le contexte le plus sensible' }
  ]
};
