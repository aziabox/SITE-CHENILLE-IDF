import { standardPage } from '../../lib/layout.mjs';
import { table, note, safety, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenille-processionnaire-du-chene/',
  title: 'Chenille processionnaire du chêne : reconnaître et traiter',
  description: "Processionnaire du chêne (Thaumetopoea processionea) : nid plat sur le tronc, activité de printemps, risques et méthodes de traitement.",
  h1: 'La chenille processionnaire du chêne',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Chenilles processionnaires', url: '/chenilles-processionnaires/' },
          { name: 'Processionnaire du chêne', url: '/chenille-processionnaire-du-chene/' }],
  datePublished: '2026-02-14',
  dateModified: '2026-09-10',
  priority: '0.9',
  lead: `Moins connue que celle du pin, la processionnaire du chêne pose en Île-de-France un problème plus
  fréquent — et plus sournois. Son nid ne ressemble pas à un nid, son pic d'activité tombe en pleine saison
  d'usage des jardins et des cours d'école, et elle reste dangereuse après l'envol des papillons.`,
  answer: `<p>La chenille processionnaire du chêne est la larve du papillon <em>Thaumetopoea processionea</em>.
  Elle vit exclusivement sur les <strong>chênes</strong>, éclôt au <strong>printemps</strong> et forme un
  <strong>nid plat, gris, plaqué contre le tronc ou une grosse branche</strong>, souvent à hauteur d'homme.
  Elle ne descend pas au sol : elle se transforme en chrysalide dans le nid, qui reste urticant même vide.
  Le risque est maximal de mai à juillet.</p>`,
  sections: [
    { h2: 'Une espèce que l\'on voit tard',
      tocLabel: 'Pourquoi on la repère tard',
      html: `
      <p>Le nid de la processionnaire du chêne ne ressemble pas à l'image que l'on a d'un nid de chenilles.
      Il n'y a pas de boule blanche : c'est une <strong>plaque de soie grisâtre, aplatie, collée au tronc</strong>,
      qui prend rapidement la couleur de l'écorce. À trois mètres de distance, on dirait une cicatrice, une
      tache de mousse ou un écoulement de sève.</p>
      <p>Résultat : dans une majorité des cas que l'on nous signale, ce ne sont pas les nids qui déclenchent
      l'appel, mais les <strong>symptômes</strong>. Des enfants qui rentrent d'une récréation avec des plaques,
      des jardiniers qui se plaignent de démangeaisons après une taille, des habitants d'une résidence qui ne
      peuvent plus utiliser leur terrasse. On remonte alors jusqu'au chêne — et on trouve trois ou quatre nids
      que personne n'avait remarqués.</p>
      ${note(`<p>Autre signe précoce, souvent mal interprété : une <strong>défoliation en mai-juin</strong> alors
      que les chênes voisins sont bien feuillus. Un chêne qui s'éclaircit anormalement au printemps mérite un
      examen du tronc, pas seulement du houppier.</p>`, 'Le signal à ne pas manquer')}` },

    { h2: 'Aspect de la chenille et des nids',
      html: `
      <p>La chenille mature atteint environ 3 centimètres. Elle est <strong>grise à gris-brun</strong>, avec une
      bande dorsale sombre bien marquée et de longs poils blancs sur les flancs. Elle est nettement plus terne
      que celle du pin, ce qui la rend peu visible sur une écorce de chêne.</p>
      <p>Les colonies se déplacent en processions courtes, le long du tronc et des branches, souvent la nuit,
      pour aller consommer les feuilles. Contrairement à l'espèce du pin, ces processions restent sur l'arbre :
      on peut vivre sous un chêne infesté sans jamais voir une chenille au sol.</p>
      ${table(
        ['Élément', 'Caractéristique'],
        [
          ['Nid', 'Plaque de soie grise, aplatie, de la taille d\'une main à celle d\'un ballon, collée au tronc ou à une charpentière'],
          ['Contenu', 'Chenilles, mues accumulées, chrysalides, poils urticants en très grande quantité'],
          ['Hauteur', 'Fréquemment entre 1,5 et 5 mètres, donc à portée directe des passants'],
          ['Nombre par arbre', "Un chêne peut en porter plusieurs, y compris sur des branches maîtresses"],
          ['Après l\'envol', "Le nid reste en place et reste urticant pendant des mois"]
        ],
        "Repères sur le nid de processionnaire du chêne")}` },

    { h2: 'Le cycle : tout se joue au printemps',
      tocLabel: 'Cycle annuel',
      html: `
      ${steps([
        { title: 'Juillet à septembre — ponte', body: `<p>Les papillons volent la nuit et pondent sur les rameaux fins,
          en hauteur, en plaques recouvertes d'écailles. Rien n'est visible depuis le sol.</p>` },
        { title: "Automne et hiver — les œufs attendent", body: `<p>Les œufs passent l'hiver sur l'arbre. Aucune action
          n'est possible à ce stade, et aucun traitement d'hiver n'a de sens sur cette espèce — c'est une
          différence majeure avec le pin.</p>` },
        { title: 'Avril — éclosion', body: `<p>L'éclosion suit le débourrement des feuilles. Les chenilles sont minuscules
          et pas encore urticantes : c'est la seule fenêtre réellement favorable à un
          <a href="/traitement-preventif/">traitement biologique</a>, et elle dure peu.</p>` },
        { title: 'Mai à juillet — stades urticants', body: `<p>Les chenilles deviennent urticantes, forment les nids sur
          le tronc et défolient l'arbre. C'est la période où les signalements affluent et où il faut
          <a href="/destruction-nid-chenilles-processionnaires/">retirer les nids</a> avec un matériel adapté.</p>` },
        { title: "Juillet à septembre — nymphose et envol", body: `<p>La nymphose a lieu dans le nid. Les papillons
          s'envolent, mais le nid demeure, chargé de poils. Un chêne « calme » en septembre peut donc rester
          dangereux.</p>` }
      ])}` },

    { h2: 'Un problème d\'espace public autant que de jardin',
      tocLabel: 'Espaces publics et collectifs',
      html: `
      <p>La géographie de cette espèce en fait d'abord un sujet de gestionnaire. Les chênes concernés sont
      souvent des arbres d'alignement, des sujets de parc, des lisières de bois attenantes à un lotissement,
      des arbres de cour d'école plantés il y a cinquante ans.</p>
      <ul class="plain">
        <li><strong>Écoles et crèches</strong> — un chêne de cour infesté oblige à condamner une zone de récréation. <a href="/ecoles/">Intervention autour des écoles</a>.</li>
        <li><strong>Copropriétés</strong> — arbres d'agrément en pied d'immeuble, aires de jeux, cheminements. <a href="/coproprietes/">Intervention en copropriété</a>.</li>
        <li><strong>Collectivités</strong> — parcs, squares, chemins de promenade, abords d'équipements sportifs. <a href="/collectivites/">Intervention pour les collectivités</a>.</li>
        <li><strong>Espaces verts et paysagistes</strong> — la taille et l'élagage sur chêne infesté exposent directement les équipes. <a href="/espaces-verts/">Gestion des espaces verts</a>.</li>
      </ul>
      ${safety(`<p>Tant qu'un nid n'a pas été retiré, la mesure la plus efficace reste la mise à distance :
      baliser un périmètre autour du tronc, interrompre la tonte et le soufflage sous l'arbre, et éviter d'y
      installer des tables, des bancs ou du matériel de jeu. Ces mesures ne remplacent pas le traitement mais
      réduisent immédiatement l'exposition.</p>`, 'Mesure conservatoire immédiate')}` },

    { h2: 'Comment on retire un nid de chêne',
      html: `
      <p>La technique diffère de celle utilisée sur pin. Un nid plaqué contre une écorce ne se coupe pas : il
      s'<strong>aspire</strong>. Nous utilisons un aspirateur à filtration adaptée, alimenté depuis le sol ou
      depuis une nacelle, avec une buse qui décolle la soie sans la déchirer. Le contenu est confiné dans un
      sac fermé dès l'aspiration.</p>
      <p>Le tronc est ensuite traité pour retirer les poils résiduels restés sur l'écorce, et le pied de
      l'arbre est contrôlé. Dans un lieu accueillant du public, nous balisons la zone pendant l'opération et
      pendant le temps de retombée.</p>
      <p>Sur des arbres de grande hauteur ou en alignement, l'intervention se planifie par campagne, avec un
      inventaire préalable des sujets porteurs.
      <a href="/traitement-processionnaire-du-chene/">Détail du traitement de la processionnaire du chêne</a>.</p>` },

    { h2: "Une espèce bien installée en Île-de-France",
      html: `
      <p>Le chêne est l'essence dominante des grands massifs franciliens, et la processionnaire du chêne y est
      présente de longue date. Fontainebleau, Rambouillet, Sénart, Saint-Germain-en-Laye, Montmorency,
      Notre-Dame, la Grange, Armainvilliers : ces forêts constituent un réservoir permanent, et les communes
      qui les bordent voient revenir le sujet chaque printemps.</p>
      <p>Dans l'agglomération dense, ce sont les chênes de parcs et de squares qui concentrent les
      signalements — bois de Vincennes et de Boulogne, parcs départementaux, squares plantés de chênes rouges.
      La proximité immédiate entre l'arbre et l'usage du sol y rend l'intervention plus urgente qu'en lisière
      forestière. <a href="/departements/">Voir la situation département par département</a>.</p>` }
  ],
  faq: [
    { q: "Comment distinguer un nid de processionnaire du chêne d'une blessure de l'arbre ?",
      a: `<p>Le nid est fait de soie : il présente une surface fibreuse, mate, légèrement feutrée, et il est
      posé sur l'écorce plutôt qu'incrusté dedans. Une blessure ou un chancre est dans le bois. En cas de
      doute, ne grattez pas et n'approchez pas la main : envoyez une photo prise à distance.</p>` },
    { q: "Les chenilles du chêne descendent-elles au sol ?",
      a: `<p>Non, contrairement à celles du pin. Elles se déplacent sur l'arbre et se transforment en
      chrysalides à l'intérieur du nid. Le risque au sol vient des poils qui tombent, pas des chenilles
      elles-mêmes.</p>` },
    { q: "Peut-on traiter en hiver ?",
      a: `<p>Pas utilement contre les chenilles : à cette saison, l'espèce n'existe que sous forme d'œufs, sur
      des rameaux fins et en hauteur. L'hiver sert en revanche à retirer les anciens nids encore urticants et
      à préparer la campagne de printemps.</p>` },
    { q: "Un nid retiré revient-il l'année suivante ?",
      a: `<p>Le même nid ne se reforme pas, mais l'arbre peut être recolonisé si des chênes porteurs subsistent
      alentour. Dans un massif forestier proche, la recolonisation est très probable : c'est un sujet de
      surveillance annuelle plutôt que d'intervention unique.</p>` },
    { q: "Faut-il abattre un chêne infesté ?",
      a: `<p>Non, et ce serait disproportionné. L'infestation est un phénomène saisonnier qui n'entraîne pas
      la mort de l'arbre dans la très grande majorité des cas. L'abattage ne se discute que pour un sujet
      déjà dépérissant pour d'autres raisons.</p>` },
    { q: "Les chênes rouges d'Amérique sont-ils concernés ?",
      a: `<p>Oui. Les chênes rouges, très plantés dans les parcs et les lotissements franciliens des années
      1960-1980, sont colonisés comme les chênes indigènes.</p>` }
  ],
  cta: {
    title: "Un doute sur un tronc de chêne ? Ne grattez pas",
    text: `Les nids de processionnaire du chêne se confondent facilement avec une anomalie d'écorce. Une photo
    prise à distance suffit généralement à trancher, et évite un contact qui serait la pire des choses à faire.`,
    primary: 'Faire identifier un nid'
  },
  related: [
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement de la processionnaire du chêne', hint: 'Aspiration, biocontrôle, campagnes' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'autre espèce, en hiver" },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Chênes de cour et abords' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Parcs, alignements, patrimoine communal' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Ce qui trompe le plus souvent' },
    { url: '/blog/arbres/savoir-si-un-arbre-est-infeste/', label: 'Savoir si un arbre est infesté', hint: 'Les signes à examiner' }
  ]
});
