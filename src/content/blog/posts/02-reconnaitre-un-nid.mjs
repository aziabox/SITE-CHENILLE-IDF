import { table, note, safety } from '../../../lib/render.mjs';

export default {
  slug: 'reconnaitre-un-nid',
  category: 'identifier',
  title: 'Comment reconnaître un nid de processionnaires ?',
  description: "Nid blanc sur pin, plaque grise sur chêne : identifier un nid de processionnaires et le distinguer d'une toile, d'un gui ou d'un nid d'oiseau.",
  h1: 'Comment reconnaître un nid de chenilles processionnaires ?',
  excerpt: "L'opacité de la soie est le critère décisif. Un nid de processionnaire ne laisse pas voir son support — c'est ce qui le distingue d'une toile d'hyponomeute, spectaculaire mais inoffensive.",
  datePublished: '2026-06-12',
  dateModified: '2026-09-19',
  lead: `C'est la question qui arrive en premier, bien avant celle du traitement : « est-ce que c'est ça ? ».
  Elle se règle dans la majorité des cas avec deux observations faites depuis le sol.`,
  answer: `<p>Un nid de processionnaire est fait de <strong>soie dense et opaque</strong> : on ne voit ni le
  rameau, ni l'écorce au travers. Sur <strong>pin ou cèdre</strong>, c'est une boule blanche accrochée en
  bout de branche, visible de loin en hiver. Sur <strong>chêne</strong>, c'est une plaque grise aplatie,
  plaquée contre le tronc, souvent à hauteur d'homme. Une toile translucide n'est pas un nid de
  processionnaire.</p>`,
  sections: [
    { h2: "L'opacité, critère décisif",
      html: `
      <p>Si vous ne deviez retenir qu'un seul test, c'est celui-là : <strong>regardez si vous voyez le
      support au travers</strong>.</p>
      <p>Les processionnaires tissent une soie épaisse, superposée en couches successives tout au long de la
      saison. Le résultat est opaque, feutré, presque cotonneux. Le rameau qui le traverse disparaît à
      l'intérieur.</p>
      <p>À l'inverse, les toiles d'hyponomeutes — celles qui recouvrent parfois un fusain entier et qui
      inquiètent tant de jardiniers — sont un voile fin et transparent. On distingue parfaitement les
      branches, les feuilles et les chenilles à l'intérieur.</p>
      ${note(`<p>Cette distinction est importante pour une raison concrète : les hyponomeutes sont
      totalement inoffensifs et leurs arbres hôtes refeuillent normalement. Les détruire n'a aucun
      intérêt.</p>`)}` },

    { h2: 'Le nid sur pin : une boule blanche en bout de branche',
      html: `
      <ul class="plain">
        <li><strong>Forme</strong> — poche de soie, de la taille d'un poing à celle d'un ballon de rugby.</li>
        <li><strong>Couleur</strong> — blanc vif au début de l'hiver, grisant avec le temps.</li>
        <li><strong>Emplacement</strong> — extrémité d'un rameau, presque toujours sur la face la plus ensoleillée de l'arbre.</li>
        <li><strong>Autour</strong> — aiguilles roussies puis rameaux totalement dégarnis.</li>
        <li><strong>Saison</strong> — bien visible de novembre à mars.</li>
        <li><strong>Sur cèdre</strong> — souvent plus diffus, réparti sur plusieurs rameaux, donc repéré plus tard.</li>
      </ul>
      <p>Faites le tour de l'arbre avant de conclure : un pin adulte porte fréquemment un second nid du côté
      opposé à celui depuis lequel vous observez.</p>` },

    { h2: 'Le nid sur chêne : une plaque grise sur le tronc',
      html: `
      <p>C'est le plus discret des deux, et de loin. Il ne pend pas, il ne brille pas : il colle à l'écorce
      et en prend la couleur.</p>
      <ul class="plain">
        <li><strong>Forme</strong> — plaque ou manchon aplati, parfois allongé le long du tronc.</li>
        <li><strong>Couleur</strong> — gris sale à brun clair, très proche de la teinte de l'écorce.</li>
        <li><strong>Hauteur</strong> — fréquemment entre 1,5 et 5 mètres, donc à portée directe des passants.</li>
        <li><strong>Texture</strong> — fibreuse et mate, avec des mues accumulées.</li>
        <li><strong>Saison</strong> — apparaît en mai, reste en place après l'envol des papillons.</li>
      </ul>
      ${safety(`<p>Ne grattez pas, ne touchez pas, ne passez pas la main « pour vérifier si c'est de la
      soie ». Un nid de chêne est très chargé en poils urticants et se trouve à hauteur de visage.
      Photographiez à distance, avec zoom.</p>`, 'Le geste à ne pas faire')}` },

    { h2: 'Tableau de tri rapide',
      html: `
      ${table(
        ['Ce que vous voyez', 'Ce que c\'est', 'Action'],
        [
          ['Voile blanc transparent sur fusain ou prunier', "Toile d'hyponomeute", 'Ne rien faire'],
          ['Boule verte de feuilles épaisses sur branche nue', 'Gui', 'Ne rien faire'],
          ['Amas de brindilles dans une fourche', "Nid d'oiseau ou d'écureuil", 'Ne pas déranger'],
          ['Masse compacte sombre sur une branche, en été', "Essaim d'abeilles en transit", 'Contacter un apiculteur'],
          ['Coulure blanche ou mousse sur tronc', 'Sève, lichen', 'Ne rien faire'],
          ['Boule blanche opaque en bout de rameau de pin', '<strong>Processionnaire du pin</strong>', '<strong>Faire intervenir</strong>'],
          ['Plaque grise plate sur tronc de chêne', '<strong>Processionnaire du chêne</strong>', '<strong>Baliser et faire intervenir</strong>']
        ],
        'Seules les deux dernières lignes justifient une intervention')}` },

    { h2: 'Un nid vide reste dangereux',
      html: `
      <p>C'est le point le plus souvent ignoré, et il change la conduite à tenir. Un nid contient toutes les
      mues de la colonie, et chaque mue a laissé ses poils urticants. Après le départ des chenilles, cette
      réserve reste en place.</p>
      <p>Un ancien nid continue donc de libérer des poils à chaque coup de vent et à chaque pluie
      ruisselante, pendant plusieurs mois et parfois au-delà d'une année. Sur chêne, où les nids restent
      collés au tronc à hauteur d'homme, leur retrait est un motif d'intervention à part entière — y compris
      en plein hiver, hors de toute saison d'activité.</p>
      <p><a href="/destruction-nid-chenilles-processionnaires/">Voir comment un nid est retiré et
      éliminé</a>.</p>` }
  ],
  faq: [
    { q: "Peut-il y avoir un nid sans chenille visible ?",
      a: `<p>Très souvent. Les chenilles s'alimentent surtout la nuit et restent groupées dans le nid la
      journée. L'absence de chenille visible ne signifie pas que le nid est vide.</p>` },
    { q: "Comment savoir si un nid est récent ou ancien ?",
      a: `<p>Un nid récent est plus clair, mieux structuré, entouré de rameaux en cours de défoliation. Un
      ancien nid est grisâtre, affaissé, parfois déchiré par le vent. Dans les deux cas, il reste
      urticant.</p>` },
    { q: "Un nid tombé au sol peut-il être ramassé ?",
      a: `<p>Pas à mains nues ni avec un balai. Un nid au sol est intact et chargé : le ramassage sans
      protection expose massivement. Balisez la zone et faites intervenir.</p>` },
    { q: "Combien de nids un arbre peut-il porter ?",
      a: `<p>Un pin peut en porter d'un à plusieurs selon sa taille. Sur un chêne adulte, il n'est pas rare
      d'en trouver trois à cinq, dont certains sur des branches hautes invisibles depuis le sol.</p>` }
  ],
  related: [
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'La page de référence' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Retrait et élimination' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Le nid le plus discret' }
  ]
};
