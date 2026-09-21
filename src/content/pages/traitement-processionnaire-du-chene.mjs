import { standardPage } from '../../lib/layout.mjs';
import { table, note, safety } from '../../lib/render.mjs';

export default standardPage({
  url: '/traitement-processionnaire-du-chene/',
  title: 'Traitement de la processionnaire du chêne : méthode et campagnes',
  description: "Traiter la processionnaire du chêne : aspiration des nids sur tronc, biocontrôle d'avril et organisation d'une campagne sur patrimoine arboré.",
  h1: 'Traiter la processionnaire du chêne',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Traitement', url: '/traitement-chenilles-processionnaires/' },
          { name: 'Traitement du chêne', url: '/traitement-processionnaire-du-chene/' }],
  datePublished: '2026-03-18',
  dateModified: '2026-09-04',
  service: {
    name: 'Traitement de la processionnaire du chêne',
    type: 'Lutte contre Thaumetopoea processionea',
    description: "Aspiration des nids, traitement biologique de printemps et campagnes de traitement sur patrimoine arboré contre la processionnaire du chêne, en Île-de-France."
  },
  lead: `Sur chêne, deux contraintes structurent tout : la fenêtre d'action est courte, et elle tombe au
  moment où les lieux sont le plus fréquentés. Traiter un chêne de cour d'école en juin ne se planifie pas
  comme un pin de jardin en janvier.`,
  answer: `<p>Le traitement de la processionnaire du chêne repose sur deux actions :
  un <strong>traitement biologique en avril</strong>, au débourrement, sur les jeunes larves non encore
  urticantes, et l'<strong>aspiration des nids</strong> plaqués sur le tronc, de mai à juillet, avec un
  appareil à filtration. Les anciens nids doivent aussi être retirés, même vides, car ils restent
  urticants.</p>`,
  sections: [
    { h2: 'Une fenêtre courte, au printemps',
      html: `
      <p>Contrairement au pin, il n'y a rien à faire en hiver contre les chenilles : l'espèce passe la
      mauvaise saison à l'état d'œuf, sur des rameaux fins situés en hauteur. Aucun traitement n'est
      opérant, et aucun nid n'existe encore.</p>
      <p>Tout se joue donc à partir d'avril. L'éclosion suit le débourrement des feuilles, avec un décalage
      de quelques jours selon l'exposition du sujet et le microclimat. La fenêtre de traitement biologique
      s'ouvre alors, et elle est brève : passé quelques semaines, les chenilles atteignent les stades
      urticants et le biocontrôle perd beaucoup d'intérêt.</p>
      ${table(
        ['Période', 'Ce qui est possible', 'Remarque'],
        [
          ['Novembre — mars', 'Retrait des anciens nids, inventaire des arbres', 'Aucune action sur les chenilles : elles n\'existent pas encore'],
          ['Avril', 'Traitement biologique sur jeunes larves', 'Fenêtre courte, calée sur le débourrement réel'],
          ['Mai — juillet', 'Aspiration des nids, balisage des zones', 'Période urticante : protection renforcée obligatoire'],
          ['Juillet — septembre', 'Retrait des nids après envol, inventaire pour l\'année suivante', 'Les nids restent dangereux']
        ],
        'Le calendrier du chêne')}` },

    { h2: 'L\'aspiration : la technique de référence',
      tocLabel: 'Aspiration des nids',
      html: `
      <p>Un nid de processionnaire du chêne est collé à l'écorce. On ne peut ni le couper avec le support,
      ni le décoller sans le déchirer. La réponse professionnelle est l'aspiration : une buse décolle
      progressivement la soie et aspire l'ensemble — chenilles, mues, chrysalides, poils — dans une cuve
      équipée d'une filtration adaptée.</p>
      <p>Trois points font la qualité de l'opération :</p>
      <ol>
        <li><strong>Ne pas racler l'écorce.</strong> Un geste trop appuyé blesse le cambium et disperse les poils. L'aspiration se fait à faible distance, sans contact agressif.</li>
        <li><strong>Traiter l'écorce après coup.</strong> Une partie des poils reste accrochée aux crevasses ; un passage complémentaire est nécessaire.</li>
        <li><strong>Faire le tour complet.</strong> Sur un sujet adulte, les nids des charpentières hautes sont invisibles depuis le sol. Une inspection à la jumelle ou en nacelle précède l'intervention.</li>
      </ol>
      ${safety(`<p>L'aspiration a lieu en pleine période urticante. En site recevant du public, elle se
      planifie hors présence : mercredi, week-end, vacances scolaires, ou tôt le matin. Le balisage est
      maintenu pendant la retombée des poils.</p>`, 'Organisation en site public')}` },

    { h2: 'Le traitement biologique d\'avril',
      html: `
      <p>Le Btk pulvérisé sur le jeune feuillage est ingéré par les larves qui s'alimentent. Bien calé, il
      évite la formation des nids — donc l'aspiration, donc le balisage, donc la perturbation de l'usage.</p>
      <p>Sa contrainte principale est la hauteur. Un chêne adulte de vingt-cinq mètres demande un matériel
      de pulvérisation capable d'atteindre le houppier, et des conditions de vent faible pour limiter la
      dérive. Cela se planifie : décider en avril de traiter en avril est généralement trop tard.</p>
      ${note(`<p>Sur un alignement ou un parc, le traitement se cible sur les arbres ayant un historique
      d'infestation plutôt que sur l'ensemble du patrimoine. C'est plus efficace, moins coûteux et plus
      respectueux des autres lépidoptères présents.</p>`, 'Cibler plutôt que couvrir')}` },

    { h2: 'Organiser une campagne sur patrimoine arboré',
      tocLabel: 'Campagnes',
      html: `
      <p>Pour une commune, une copropriété ou un site d'entreprise disposant de plusieurs dizaines de chênes,
      l'approche « un arbre, une intervention » ne tient pas. Nous travaillons par campagne.</p>
      <ol>
        <li><strong>Inventaire</strong> — recensement des chênes, repérage des sujets porteurs et des nids anciens, relevé des usages au sol (jeux, bancs, cheminements, terrasses).</li>
        <li><strong>Hiérarchisation</strong> — priorité aux arbres surplombant une zone d'usage intensif, puis aux lisières fréquentées, puis au reste.</li>
        <li><strong>Programmation</strong> — traitement biologique sur les prioritaires en avril, aspiration des nids apparus en mai-juin, retrait des anciens nids hors saison.</li>
        <li><strong>Traçabilité</strong> — compte rendu par arbre : identifiant, méthode, date, nombre de nids, mode d'élimination.</li>
        <li><strong>Reconduction</strong> — l'inventaire est actualisé chaque année, ce qui réduit progressivement le périmètre traité.</li>
      </ol>
      <p>Ce format concerne particulièrement les <a href="/collectivites/">collectivités</a>, les
      <a href="/ecoles/">établissements scolaires</a> et les gestionnaires d'<a href="/espaces-verts/">espaces
      verts</a>.</p>` },

    { h2: 'Le cas des lisières forestières',
      html: `
      <p>En Île-de-France, une grande partie des demandes concerne des propriétés situées en bordure de
      massif : Fontainebleau, Rambouillet, Sénart, Montmorency, Saint-Germain-en-Laye. La situation y est
      particulière — on traite un jardin adossé à un réservoir permanent.</p>
      <p>Dans ce cas, l'objectif réaliste n'est pas l'absence totale de chenilles, mais la
      <strong>protection de la zone d'usage</strong> : les chênes du jardin et de la limite, pas ceux de la
      forêt. Le traitement de l'ensemble du massif relève du gestionnaire forestier et d'une logique
      différente.</p>
      <p>Nous le disons aux propriétaires concernés dès le premier échange, parce que c'est ce qui détermine
      le budget et les attentes. <a href="/departements/">Voir la situation par département</a>.</p>` }
  ],
  faq: [
    { q: "Pourquoi ne peut-on pas traiter un chêne en hiver ?",
      a: `<p>Parce qu'il n'y a pas de chenilles : l'espèce passe l'hiver à l'état d'œuf, sur des rameaux fins
      et en hauteur. L'hiver est en revanche la bonne période pour retirer les anciens nids et préparer la
      campagne de printemps.</p>` },
    { q: "Peut-on aspirer un nid situé à quinze mètres ?",
      a: `<p>Oui, avec une nacelle ou un grimpeur, l'aspiration étant réalisée au plus près du nid. La
      contrainte est l'accès du matériel plutôt que la hauteur elle-même.</p>` },
    { q: "Faut-il retirer les nids des années précédentes ?",
      a: `<p>Oui. Un nid vide reste chargé de poils pendant des mois et continue d'en relarguer à chaque coup
      de vent. Sur un arbre proche d'un lieu de passage, leur retrait fait partie du traitement.</p>` },
    { q: "Le traitement biologique est-il autorisé en cour d'école ?",
      a: `<p>Les produits de biocontrôle utilisés doivent être appliqués conformément à leur autorisation,
      avec respect des délais de rentrée et en dehors de la présence du public. Dans un établissement
      scolaire, l'intervention se cale donc sur les périodes de fermeture.</p>` },
    { q: "Une campagne suffit-elle pour un parc communal ?",
      a: `<p>Rarement la première année. Un parc bordé de bois est réalimenté chaque été par les pontes
      venues de la forêt. L'objectif est de maintenir les zones d'usage sûres, avec un périmètre traité qui
      se réduit à mesure que l'inventaire s'affine.</p>` }
  ],
  cta: {
    title: "Chêne porteur de nids : la période conditionne la méthode",
    text: `En avril, un traitement biologique peut éviter la formation des nids. En juin, il faut les aspirer
    et baliser la zone. Signalez-nous la situation avec une photo du tronc prise à distance.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "Biologie et cycle de l'espèce" },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Confinement et élimination' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Chênes de cour, organisation hors présence' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Campagnes sur patrimoine communal' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Protection des équipes de terrain' },
    { url: '/traitement-processionnaire-du-pin/', label: 'Traitement du pin', hint: "L'autre protocole" }
  ]
});
