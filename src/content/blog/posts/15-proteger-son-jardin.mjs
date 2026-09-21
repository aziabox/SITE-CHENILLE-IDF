import { steps, table, note } from '../../../lib/render.mjs';

export default {
  slug: 'proteger-son-jardin',
  category: 'prevention',
  title: 'Comment protéger son jardin des chenilles processionnaires ?',
  description: "Inventaire des arbres hôtes, deux contrôles annuels, protection du sol, nichoirs : les mesures concrètes pour un jardin sans processionnaires.",
  h1: 'Comment protéger son jardin des chenilles processionnaires ?',
  excerpt: "Tout commence par une question à dix secondes : ai-je un pin, un cèdre ou un chêne ? Si la réponse est non, le sujet est clos.",
  datePublished: '2026-07-12',
  dateModified: '2026-09-19',
  lead: `Un jardin bien géré ne devient pas un foyer. Les mesures utiles sont peu nombreuses, peu coûteuses,
  et tiennent surtout à une discipline d'observation à deux moments précis de l'année.`,
  answer: `<p>Quatre actions suffisent dans la plupart des jardins : <strong>identifier les arbres
  hôtes</strong> (pins, cèdres, chênes — les autres essences ne sont pas concernées) ; <strong>contrôler
  deux fois par an</strong>, en novembre pour les conifères et en mai pour les chênes ;
  <strong>protéger le sol</strong> si un chien ou des enfants utilisent le jardin ; et
  <strong>favoriser les prédateurs</strong> par la pose de nichoirs.</p>`,
  sections: [
    { h2: 'Étape 1 : savoir ce que vous avez',
      html: `
      <p>C'est le point de départ, et il élimine d'emblée une grande partie des inquiétudes. Ces insectes
      sont strictement liés à leurs arbres hôtes.</p>
      ${table(
        ['Votre jardin contient', 'Concerné ?'],
        [
          ['Pin (sylvestre, noir, maritime)', 'Oui — processionnaire du pin'],
          ['Cèdre', 'Oui — processionnaire du pin'],
          ['Chêne, y compris chêne rouge', 'Oui — processionnaire du chêne'],
          ['Thuya, cyprès, if, laurier', 'Non'],
          ['Fruitiers, érable, tilleul, bouleau', 'Non'],
          ['Buis, haie de troène, bambou', 'Non']
        ],
        "Sans pin, cèdre ni chêne, votre jardin n'est pas concerné")}
      ${note(`<p>Une nuance utile : même sans arbre hôte chez vous, une procession venue d'un pin voisin
      peut traverser votre terrain. Si vous constatez des chenilles au sol sans avoir de conifère, regardez
      de l'autre côté de la clôture.</p>`)}` },

    { h2: 'Étape 2 : deux contrôles par an',
      html: `
      ${steps([
        { title: 'En novembre — les conifères', body: `<p>Regardez pins et cèdres sur toutes leurs faces, jumelles
          si l'arbre est haut. Sur pin, on cherche une boule de soie blanche en bout de rameau, presque
          toujours du côté le plus ensoleillé. Sur cèdre, des amas plus diffus et des zones de feuillage
          roussi.</p>` },
        { title: 'En mai — les chênes', body: `<p>Faites le tour de chaque tronc à deux mètres de distance, en
          regardant jusqu'à cinq ou six mètres de hauteur. On cherche une plaque grise, mate, aplatie contre
          l'écorce. Regardez aussi le pied de l'arbre.</p>` }
      ])}
      <p>Dix minutes par an, au total. C'est la mesure au meilleur rapport efficacité-effort, parce qu'elle
      permet d'intervenir dans la bonne fenêtre plutôt qu'en urgence.</p>` },

    { h2: 'Étape 3 : protéger le sol si nécessaire',
      html: `
      <p>Tous les jardins ne demandent pas le même niveau de protection. Le critère n'est pas l'arbre, c'est
      <strong>l'usage du sol en dessous</strong>.</p>
      <ul class="plain">
        <li><strong>Chien sur la parcelle</strong> — protection du sol prioritaire : retrait des nids avant la descente, ou <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a> si les nids sont hors d'atteinte.</li>
        <li><strong>Jeunes enfants</strong> — éloigner jeux, trampoline et bac à sable du pied des arbres hôtes ; couvrir le bac à sable hors utilisation.</li>
        <li><strong>Potager au pied d'un pin</strong> — travail du sol à reporter pendant et après la période de descente.</li>
        <li><strong>Arbre isolé, sol non fréquenté</strong> — la surveillance suffit souvent, sans intervention urgente.</li>
      </ul>` },

    { h2: 'Étape 4 : installer une pression naturelle',
      html: `
      <p>Aucune espèce ne fait disparaître une population à elle seule, mais l'ensemble des prédateurs
      exerce une pression réelle et durable. C'est la partie la moins coûteuse d'une prévention.</p>
      <ul class="plain">
        <li><strong>Nichoirs à mésanges</strong> — un par arbre sensible, posé en automne ou en hiver, à environ trois mètres du sol, entrée orientée à l'est ou au sud-est, à l'abri des vents dominants et hors de portée des chats.</li>
        <li><strong>Gîtes à chauves-souris</strong> — elles chassent les papillons adultes la nuit, pendant la période de vol. À poser en hauteur, à l'écart des éclairages.</li>
        <li><strong>Diversité végétale</strong> — un jardin varié accueille davantage d'oiseaux insectivores et de parasitoïdes qu'une pelouse rase ponctuée de deux conifères.</li>
        <li><strong>Limiter l'éclairage nocturne</strong> — il attire les papillons et gêne les chauves-souris.</li>
      </ul>
      <p>L'effet se construit sur plusieurs saisons. Ce n'est pas une solution d'urgence, c'est un
      investissement de fond.</p>` },

    { h2: 'Ce qu\'un particulier ne devrait pas faire seul',
      html: `
      <ul class="plain">
        <li><strong>Retirer un nid</strong> avec une échelle et un sécateur — cumul du risque de chute et d'exposition massive.</li>
        <li><strong>Brûler un nid</strong> — projection des poils, risque d'incendie sur résineux, blessure de l'arbre.</li>
        <li><strong>Arroser au jet haute pression</strong> — dispersion sur toute la parcelle et chez le voisin.</li>
        <li><strong>Balayer ou écraser une procession</strong> — libération massive de poils au niveau du sol.</li>
        <li><strong>Tondre sous un arbre infesté</strong> — remise en suspension au niveau du visage.</li>
      </ul>
      <p>Voir <a href="/blog/conseils/erreurs-a-eviter-face-a-un-nid/">les erreurs à éviter face à un
      nid</a>.</p>` }
  ],
  faq: [
    { q: "Faut-il abattre les pins de mon jardin ?",
      a: `<p>Non. L'abattage d'un arbre sain pour cette seule raison est disproportionné, et il ne protège
      pas des arbres voisins. La diversification des essences se réfléchit au moment d'un renouvellement,
      pas en réaction à une infestation.</p>` },
    { q: "Un jardin traité une fois est-il protégé durablement ?",
      a: `<p>Cela dépend du voisinage. Loin de tout autre arbre hôte, une intervention peut suffire
      plusieurs saisons. À proximité d'un massif ou de pins infestés, la recolonisation est probable : c'est
      alors une surveillance annuelle.</p>` },
    { q: "Les nichoirs à mésanges fonctionnent-ils vraiment ?",
      a: `<p>Ils ont un effet documenté sur la prédation des chenilles, à condition d'être en nombre
      suffisant, bien posés et occupés. L'effet se construit sur plusieurs saisons et complète les autres
      mesures plutôt qu'il ne les remplace.</p>` },
    { q: "Que faire si l'arbre infesté est chez le voisin ?",
      a: `<p>La discussion amiable reste la voie la plus efficace, d'autant qu'une intervention groupée
      coûte moins cher à chacun. En cas de blocage, la mairie est l'interlocuteur à solliciter.</p>` }
  ],
  related: [
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Page de référence' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Déroulé d\'une intervention' },
    { url: '/blog/prevention/eviter-le-retour-des-processionnaires/', label: 'Éviter le retour', hint: 'Sur plusieurs saisons' }
  ]
};
