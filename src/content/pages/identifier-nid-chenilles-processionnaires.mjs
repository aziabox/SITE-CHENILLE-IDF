import { standardPage } from '../../lib/layout.mjs';
import { table, note, safety, figure } from '../../lib/render.mjs';

export default standardPage({
  url: '/identifier-nid-chenilles-processionnaires/',
  title: 'Identifier un nid de chenilles processionnaires',
  description: "Reconnaître un nid de processionnaire du pin ou du chêne, le distinguer d'une toile d'hyponomeute, d'un gui ou d'un nid d'oiseau, et savoir si un nid vide reste dangereux.",
  h1: 'Identifier un nid de chenilles processionnaires',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Chenilles processionnaires', url: '/chenilles-processionnaires/' },
          { name: 'Identifier un nid', url: '/identifier-nid-chenilles-processionnaires/' }],
  datePublished: '2026-03-22',
  dateModified: '2026-09-11',
  primaryImage: '/assets/img/identifier-nid-processionnaire.svg',
  lead: `Dans une majorité des signalements que nous recevons, la question n'est pas « comment traiter »
  mais « est-ce bien ça ». La réponse tient en trois observations, toutes réalisables depuis le sol.`,
  answer: `<p>Un nid de processionnaire est fait de <strong>soie dense et opaque</strong> : on ne distingue
  pas le rameau ni l'écorce au travers. Sur <strong>pin</strong>, c'est une boule blanche en bout de branche,
  visible de loin en hiver. Sur <strong>chêne</strong>, c'est un manchon gris aplati, plaqué contre le tronc,
  souvent à hauteur d'homme et peu visible. Une toile translucide n'est pas un nid de processionnaire.</p>`,
  sections: [
    { h2: 'Les trois observations qui suffisent',
      html: `
      <ol>
        <li><strong>L'arbre.</strong> Pin, cèdre ou chêne ? Si l'arbre est un fruitier, un fusain, un tilleul, un érable ou un buis, ce n'est pas un nid de processionnaire.</li>
        <li><strong>L'opacité.</strong> Regardez si l'on voit le support au travers. La soie des processionnaires est épaisse et opaque ; celle des hyponomeutes est un voile fin et transparent.</li>
        <li><strong>L'emplacement.</strong> En bout de rameau et en hauteur → pin. Plaqué sur le tronc ou une grosse branche → chêne. Au creux d'une fourche, fait de brindilles → nid d'oiseau.</li>
      </ol>
      ${figure({ src: '/assets/img/identifier-nid-processionnaire.svg', width: 960, height: 400,
        alt: "Trois formes comparées : nid de processionnaire opaque en bout de rameau, toile d'hyponomeute translucide, boule de gui verte",
        caption: "De gauche à droite : nid de processionnaire, toile d'hyponomeute, gui. Seule la première justifie une intervention." })}` },

    { h2: 'Le nid de processionnaire du pin',
      html: `
      <p>C'est le plus reconnaissable. Une poche de soie blanche, de la taille d'un poing à celle d'un
      ballon de rugby, accrochée à l'extrémité d'un rameau, presque toujours du côté le plus ensoleillé de
      l'arbre.</p>
      <ul class="plain">
        <li><strong>Couleur</strong> — blanc vif au début, grisant avec le temps et la pollution.</li>
        <li><strong>Texture</strong> — dense, feutrée, avec des couches de soie superposées.</li>
        <li><strong>Contenu visible</strong> — aiguilles prises dans la soie, déjections, parfois des chenilles en surface par temps doux.</li>
        <li><strong>Autour</strong> — rameaux roussis puis totalement dégarnis.</li>
        <li><strong>Saison</strong> — bien visible de novembre à mars.</li>
      </ul>
      ${note(`<p>Un pin peut porter plusieurs nids. Faites le tour de l'arbre avant de conclure : le second
      nid est souvent du côté opposé à la maison, donc invisible depuis la fenêtre par laquelle vous
      observez.</p>`)}` },

    { h2: 'Le nid de processionnaire du chêne',
      html: `
      <p>Beaucoup plus discret, et c'est ce qui en fait le problème. Il ne pend pas, il ne brille pas : il
      colle.</p>
      <ul class="plain">
        <li><strong>Forme</strong> — plaque ou manchon aplati, parfois allongé le long du tronc.</li>
        <li><strong>Couleur</strong> — gris sale à brun clair, très proche de la teinte de l'écorce.</li>
        <li><strong>Hauteur</strong> — souvent entre 1,5 et 5 mètres, donc à portée directe des passants.</li>
        <li><strong>Texture</strong> — surface fibreuse et mate, avec des mues et des poils accumulés.</li>
        <li><strong>Saison</strong> — apparaît en mai, reste en place après l'envol des papillons.</li>
      </ul>
      ${safety(`<p>Ne grattez pas, ne touchez pas, ne passez pas la main pour « vérifier si c'est de la
      soie ». Un nid de chêne est extrêmement chargé en poils urticants, et il est à hauteur de visage.
      Photographiez à distance, avec zoom.</p>`, 'Le geste à ne pas faire')}` },

    { h2: 'Ce que l\'on confond avec un nid',
      tocLabel: 'Fausses alertes courantes',
      html: `
      ${table(
        ['Ce que vous voyez', 'De quoi il s\'agit', 'Risque'],
        [
          ['Voile blanc transparent sur un fusain, un prunier, une aubépine', "Toile d'hyponomeute", 'Aucun — insecte inoffensif'],
          ['Boule verte de feuilles épaisses sur une branche nue', 'Gui', 'Aucun pour l\'homme'],
          ['Amas de brindilles dans une fourche', "Nid d'oiseau ou d'écureuil", 'Aucun — espèces protégées, à ne pas déranger'],
          ['Masse noire compacte sur une branche, en été', 'Essaim d\'abeilles en transit', 'À signaler à un apiculteur, pas à détruire'],
          ['Coulure blanche ou mousse sur un tronc', 'Écoulement de sève, lichen', 'Aucun'],
          ['Nid blanc opaque en bout de rameau de pin', '<strong>Processionnaire du pin</strong>', '<strong>Urticant</strong>'],
          ['Plaque grise plate sur un tronc de chêne', '<strong>Processionnaire du chêne</strong>', '<strong>Urticant</strong>']
        ],
        'Tableau de tri rapide')}
      <p>Les deux dernières lignes sont les seules qui appellent une intervention. Toutes les autres se
      règlent en ne faisant rien — et il est important de le dire, parce que des colonies d'insectes utiles
      sont détruites chaque année par erreur.</p>` },

    { h2: 'Un nid vide est-il encore dangereux ?',
      html: `
      <p>Oui, et c'est le point le plus souvent ignoré. Un nid contient toutes les mues de la colonie, et
      chaque mue a laissé ses poils. Après le départ des chenilles, cette réserve reste en place.</p>
      <p>Concrètement, un ancien nid continue de libérer des poils à chaque coup de vent et à chaque pluie
      ruisselante, pendant plusieurs mois et parfois au-delà d'une année. Sur chêne, où les nids restent
      collés au tronc à hauteur d'homme, c'est un motif d'intervention à part entière — y compris en hiver,
      hors de toute saison d'activité.</p>
      <p>Voir <a href="/destruction-nid-chenilles-processionnaires/">destruction de nid</a>.</p>` },

    { h2: 'Faire vérifier avant d\'agir',
      html: `
      <p>Une identification à distance évite deux erreurs symétriques : intervenir sur un nid qui n'en est
      pas un, et laisser en place un nid réel pendant des mois.</p>
      <p>Envoyez trois photos — l'arbre entier, la zone suspecte au zoom, le pied de l'arbre — avec la
      commune et la date. Nous vous répondons sur l'espèce probable, le degré d'urgence et la fenêtre
      d'intervention utile. <a href="/contact/">Envoyer des photos</a>.</p>` }
  ],
  faq: [
    { q: "À quoi ressemble un nid de processionnaire du chêne exactement ?",
      a: `<p>À une plaque de soie grise, aplatie, collée contre l'écorce, de la taille d'une main à celle
      d'un ballon. Sa couleur très proche de celle du tronc explique qu'il passe inaperçu pendant des
      semaines.</p>` },
    { q: "Peut-il y avoir un nid sans chenilles visibles ?",
      a: `<p>Très souvent. Les chenilles s'alimentent surtout la nuit et restent groupées dans le nid la
      journée. L'absence de chenille visible ne signifie donc pas que le nid est vide.</p>` },
    { q: "Un nid tombé au sol peut-il être ramassé ?",
      a: `<p>Pas à mains nues, ni avec un balai. Un nid au sol est intact et chargé : le ramassage sans
      protection expose massivement. Balisez la zone et faites intervenir.</p>` },
    { q: "Comment savoir si le nid est récent ou ancien ?",
      a: `<p>Un nid récent est plus clair, plus structuré et souvent entouré de rameaux en cours de
      défoliation. Un ancien nid est grisâtre, affaissé, parfois déchiré par le vent. Dans les deux cas, il
      reste urticant.</p>` },
    { q: "Dois-je signaler un nid sur un arbre communal ?",
      a: `<p>Oui, au service des espaces verts ou à la mairie, avec une photo et la localisation précise.
      C'est la voie la plus rapide, et elle permet à la commune de repérer les foyers sur son territoire.</p>` }
  ],
  cta: {
    title: "Avant de conclure, faites vérifier",
    text: `Une toile translucide sur un fusain et un nid de processionnaire sur un pin n'ont rien à voir.
    Trois photos suffisent le plus souvent à écarter une fausse alerte — ou à confirmer qu'il faut agir.`,
    primary: 'Faire identifier un nid'
  },
  related: [
    { url: '/identifier-chenilles-processionnaires/', label: 'Identifier une chenille', hint: 'Critères et confusions' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Ce qui se passe ensuite' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Le nid le plus discret' },
    { url: '/blog/identifier/reconnaitre-un-nid/', label: 'Reconnaître un nid', hint: 'Article détaillé' },
    { url: '/blog/arbres/savoir-si-un-arbre-est-infeste/', label: 'Arbre infesté ?', hint: 'Les signes à examiner' },
    { url: '/contact/', label: 'Envoyer une photo', hint: 'Identification à distance' }
  ]
});
