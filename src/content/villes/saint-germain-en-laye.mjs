import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/78-yvelines/saint-germain-en-laye/',
  villeName: 'Saint-Germain-en-Laye',
  deptSlug: '78-yvelines',
  villeTeaser: "une forêt domaniale qui enserre la ville, avec une lisière franche et très habitée",
  title: 'Chenilles processionnaires à Saint-Germain-en-Laye (78100)',
  description: "Saint-Germain-en-Laye : une forêt domaniale de chênes qui enserre la ville. Pression de lisière, quartiers en première ligne et calendrier.",
  h1: 'Chenilles processionnaires à Saint-Germain-en-Laye',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Yvelines (78)', url: '/departements/78-yvelines/' },
          { name: 'Saint-Germain-en-Laye', url: '/departements/78-yvelines/saint-germain-en-laye/' }],
  datePublished: '2026-05-12',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Saint-Germain-en-Laye',
    type: 'Aspiration de nids, échenillage et traitement biologique',
    description: "Traitement des chenilles processionnaires du chêne et du pin à Saint-Germain-en-Laye : propriétés de lisière, copropriétés, établissements et patrimoine arboré.",
    areaServed: ['Saint-Germain-en-Laye', 'Yvelines (78)']
  },
  lead: `Ici, la limite entre la ville et la forêt est franche — une clôture, une rue, et le massif commence.
  Cette netteté a un avantage : elle permet de savoir assez précisément quels quartiers sont en première
  ligne, et lesquels ne le sont pas.`,
  answer: `<p>À Saint-Germain-en-Laye, la <strong>processionnaire du chêne</strong> domine largement : la
  forêt domaniale qui borde la ville est une chênaie étendue, et les quartiers qui la touchent reçoivent une
  pression annuelle. La <strong>processionnaire du pin</strong> concerne les conifères d'ornement des parcs
  et des propriétés. L'inspection des troncs au printemps est le geste le plus utile localement.</p>`,
  sections: [
    { h2: 'Une lisière nette, et ce que cela permet',
      html: `
      <p>Contrairement aux communes où l'habitat se disperse dans le massif, Saint-Germain présente une
      <strong>limite franche</strong> entre le tissu urbain et la forêt domaniale. C'est une chance, sur le
      plan opérationnel.</p>
      <p>Cela permet en effet de raisonner par <strong>bandes de distance</strong>. Les propriétés situées
      dans les premières dizaines de mètres de la lisière sont exposées chaque année et justifient une
      surveillance systématique. Au-delà, la pression décroît nettement, et le contrôle peut être plus
      espacé — sans disparaître, car les papillons volent la nuit sur plusieurs centaines de mètres.</p>
      ${note(`<p>Un test simple pour situer votre parcelle : depuis votre jardin, voyez-vous le couvert
      forestier ? Si oui, considérez-vous en première ligne et inspectez vos chênes chaque printemps. Si
      non, une inspection tous les deux ans suffit généralement, sauf antécédent.</p>`, 'Savoir où l\'on se situe')}` },

    { h2: 'La chênaie domaniale : réservoir permanent',
      html: `
      <p>La forêt domaniale qui entoure la ville est massivement composée de chênes, essence hôte de la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>. Elle constitue un
      réservoir permanent : il n'existe aucune perspective d'en faire disparaître l'espèce, et ce n'est
      d'ailleurs pas l'objectif d'une gestion forestière.</p>
      <p>La conséquence est à énoncer clairement : pour une propriété riveraine, l'objectif réaliste est
      la <strong>protection annuelle de la parcelle</strong>, pas l'éradication. Un jardin traité en mai
      sera potentiellement réexposé l'été suivant, par les pontes venues du massif.</p>
      <p>Cette réalité oriente la stratégie : privilégier le <a href="/traitement-preventif/">traitement
      biologique d'avril</a> sur les chênes de jardin à historique, plutôt que de subir chaque année
      l'aspiration de nids en pleine période urticante.</p>` },

    { h2: 'Ce que nous rencontrons localement',
      html: `
      ${table(
        ['Contexte', 'Situation typique'],
        [
          ['Pavillon de première ligne', "Un ou deux chênes en fond de jardin, nids découverts en mai, famille avec enfants"],
          ['Propriété ancienne avec parc', "Plusieurs essences, dont des cèdres : inventaire et deux passages annuels"],
          ['Copropriété de lisière', "Chênes en pied d'immeuble, aire de jeux ou cheminement en dessous"],
          ['Établissement scolaire', "Chêne de cour, découverte en pleine année scolaire"],
          ['Équipement sportif de plein air', "Terrains bordés de chênes, forte fréquentation en mai-juin"],
          ['Jardin en second rideau', "Pression plus faible, contrôle espacé suffisant"]
        ],
        'Les configurations les plus fréquentes à Saint-Germain-en-Laye')}` },

    { h2: 'Le geste local le plus utile : l\'inspection de printemps',
      tocLabel: 'Inspection de printemps',
      html: `
      <p>Dans une commune dominée par le chêne, l'essentiel des mauvaises surprises vient du fait que le nid
      de cette espèce est <strong>discret</strong> : une plaque grise plaquée contre l'écorce, à hauteur
      d'homme, de la couleur du tronc.</p>
      <p>Une inspection annuelle, en mai, prend une dizaine de minutes pour un jardin :</p>
      <ol>
        <li>Faire le tour complet de chaque chêne, à deux mètres de distance.</li>
        <li>Regarder le tronc jusqu'à cinq ou six mètres de hauteur, ainsi que les départs de charpentières.</li>
        <li>Observer le pied de l'arbre : accumulation de mues, de débris clairs, de petits grains sombres.</li>
        <li>Comparer le houppier à celui des chênes voisins : un sujet nettement plus clairsemé est un signal.</li>
        <li>En cas de doute, baliser et photographier à distance — sans gratter ni secouer.</li>
      </ol>
      <p><a href="/identifier-nid-chenilles-processionnaires/">Voir les critères d'identification</a>.</p>` },

    { h2: 'Qui fait quoi',
      html: `
      <ul class="plain">
        <li><strong>Votre jardin</strong> — vous êtes le donneur d'ordre. Voir <a href="/particuliers/">particuliers</a>.</li>
        <li><strong>Espaces communs de résidence</strong> — le syndic. Voir <a href="/coproprietes/">copropriétés</a>.</li>
        <li><strong>Squares, parcs et écoles communales</strong> — les services de la commune.</li>
        <li><strong>Forêt domaniale</strong> — le gestionnaire du massif, qui priorise les zones d'accueil du public.</li>
        <li><strong>Arbre en limite forêt / propriété</strong> — s'il est sur votre parcelle, il vous appartient, même s'il semble appartenir au massif.</li>
      </ul>` }
  ],
  faq: [
    { q: "Mon jardin touche la forêt : puis-je espérer ne plus avoir de chenilles ?",
      a: `<p>Non, et il faut le savoir avant d'engager des frais. La forêt réalimente la lisière chaque
      été. L'objectif est que vos arbres ne portent pas de nids et que votre sol ne soit pas chargé de
      poils — ce qui est parfaitement atteignable avec un suivi annuel.</p>` },
    { q: "Vaut-il mieux traiter en avril ou attendre de voir les nids ?",
      a: `<p>Sur un chêne à historique, le traitement biologique d'avril est nettement préférable : il évite
      la formation des nids, donc l'aspiration en pleine période urticante et le balisage du jardin. Sur un
      chêne sans antécédent, l'inspection de mai suffit.</p>` },
    { q: "À quelle distance de la forêt le risque diminue-t-il ?",
      a: `<p>Il décroît avec la distance sans disparaître : les papillons volent la nuit sur plusieurs
      centaines de mètres. En pratique, les premières dizaines de mètres concentrent la pression, et les
      quartiers de second rideau sont touchés plus irrégulièrement.</p>` },
    { q: "Les chênes de la forêt sont-ils traités ?",
      a: `<p>Pas de manière généralisée. Un massif domanial est géré selon une logique forestière ; les
      actions de lutte se concentrent sur les zones d'accueil du public.</p>` },
    { q: "Peut-on intervenir sur un arbre en limite de propriété ?",
      a: `<p>Oui, avec l'accord du propriétaire de l'arbre. Dans les rues de lisière, les chênes d'une même
      rangée sont souvent concernés ensemble : une intervention coordonnée entre voisins est plus efficace
      et moins coûteuse.</p>` }
  ],
  cta: {
    title: "Faire inspecter vos chênes avant l'été",
    text: `À Saint-Germain, l'inspection de mai évite la quasi-totalité des découvertes tardives. Si vos
    arbres ont déjà été porteurs, le traitement d'avril est à programmer dès l'hiver.`,
    primary: 'Demander une inspection'
  },
  related: [
    { url: '/departements/78-yvelines/', label: 'Yvelines (78)', hint: 'Situation départementale' },
    { url: '/departements/78-yvelines/rambouillet/', label: 'Rambouillet', hint: 'Un autre rapport à la forêt' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'espèce dominante ici" },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'La fenêtre d\'avril' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Le nid plat sur tronc' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Intervention dans un jardin' }
  ]
});
