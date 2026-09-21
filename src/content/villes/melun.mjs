import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/77-seine-et-marne/melun/',
  villeName: 'Melun',
  deptSlug: '77-seine-et-marne',
  villeTeaser: "ville de vallée entre deux massifs, avec un tissu de faubourgs pavillonnaires",
  title: 'Chenilles processionnaires à Melun (77000)',
  description: "Melun : une ville de vallée entre forêt de Sénart et massif de Fontainebleau, avec des faubourgs pavillonnaires largement plantés.",
  h1: 'Chenilles processionnaires à Melun',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Seine-et-Marne (77)', url: '/departements/77-seine-et-marne/' },
          { name: 'Melun', url: '/departements/77-seine-et-marne/melun/' }],
  datePublished: '2026-05-08',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Melun',
    type: 'Échenillage et traitement en milieu urbain et pavillonnaire',
    description: "Traitement des chenilles processionnaires à Melun et dans son agglomération : jardins, copropriétés, écoles et patrimoine communal.",
    areaServed: ['Melun', 'Seine-et-Marne (77)']
  },
  lead: `Melun n'est pas une commune forestière, et c'est précisément ce qui rend sa situation intéressante :
  le problème n'y vient pas d'un massif attenant, mais des arbres plantés — dans les faubourgs, les
  résidences, les parcs et les cours d'école.`,
  answer: `<p>À Melun, les chenilles processionnaires concernent principalement les <strong>arbres
  plantés</strong> : conifères d'ornement des jardins de faubourg, chênes des parcs et des cours d'école,
  alignements des résidences. La commune est située entre deux grands massifs — la
  <strong>forêt de Sénart</strong> au nord-ouest et le <strong>massif de Fontainebleau</strong> au sud —
  qui alimentent la pression régionale sans être directement au contact du tissu urbain.</p>`,
  sections: [
    { h2: 'Une situation d\'entre-deux',
      html: `
      <p>Melun occupe une position particulière dans le département : ville de vallée, installée sur la
      Seine, à quelques kilomètres de deux ensembles forestiers majeurs sans être enclavée dans aucun.</p>
      <p>Cette distance change la nature du problème. Là où une commune de lisière subit une pression
      continue, Melun connaît une situation plus <strong>ponctuelle et localisée</strong> : des arbres
      isolés, porteurs, dans un environnement urbain. L'avantage est réel — une intervention bien menée peut
      durablement régler le cas d'un jardin, ce qui est rarement vrai en lisière de massif.</p>
      ${note(`<p>Conséquence pratique : à Melun, il est souvent pertinent de viser l'élimination du foyer
      plutôt que la seule protection du sol. Un pin d'ornement traité dans un quartier où aucun autre
      conifère ne pousse à proximité a de bonnes chances de rester indemne plusieurs saisons.</p>`,
      'Une différence qui compte')}` },

    { h2: 'Les faubourgs pavillonnaires',
      html: `
      <p>Le tissu pavillonnaire melunais et celui des communes de l'agglomération se sont développés par
      vagues successives, avec les modes de plantation de chaque époque. Les décennies 1960 à 1980 ont vu
      l'installation en nombre de <strong>pins noirs, de cèdres et de thuyas</strong> dans les jardins, ainsi
      que de <strong>chênes rouges</strong> dans les lotissements plus vastes.</p>
      <p>Ces arbres sont aujourd'hui matures. Un pin noir planté il y a cinquante ans au milieu d'une
      pelouse est un site de ponte attractif : exposition dégagée, aucune concurrence, sol souvent meuble
      autour. C'est la configuration qui génère l'essentiel des appels.</p>
      ${table(
        ['Situation', 'Réponse adaptée'],
        [
          ['Pin noir isolé en pelouse, nids visibles', "Échenillage en hiver, puis surveillance l'année suivante"],
          ['Cèdre en fond de jardin', "Repérage attentif : les nids y sont souvent diffus et repérés tard"],
          ['Chêne de lotissement', "Inspection du tronc au printemps, aspiration si nids présents"],
          ['Haie de thuyas', "Essence non hôte : aucune action nécessaire"],
          ['Arbre en limite séparative', "Intervention groupée avec le voisin, plus efficace et moins coûteuse"]
        ],
        'Les configurations melunaises les plus courantes')}` },

    { h2: 'Établissements et patrimoine communal',
      html: `
      <p>En ville, les demandes portent aussi sur les espaces collectifs : cours d'école, squares, abords
      d'équipements sportifs, résidences. Le sujet devient alors celui d'un gestionnaire.</p>
      <p>Deux points reviennent régulièrement. D'une part, les <strong>cours d'école plantées de
      chênes</strong> : la période urticante de la processionnaire du chêne tombe en mai-juin, en pleine
      année scolaire, ce qui impose de programmer l'intervention hors présence des enfants. Voir
      <a href="/ecoles/">écoles et crèches</a>.</p>
      <p>D'autre part, les <strong>résidences des années 1960-1970</strong>, dont les espaces verts ont été
      plantés à la livraison et arrivent aujourd'hui à maturité. Le donneur d'ordre est le syndic ou le
      bailleur. Voir <a href="/coproprietes/">copropriétés</a>.</p>` },

    { h2: 'Ce qu\'il faut regarder, et quand',
      html: `
      <p>Deux contrôles annuels suffisent à éviter la quasi-totalité des découvertes tardives, et ils
      prennent quelques minutes.</p>
      <ol>
        <li><strong>En novembre</strong> — regarder les conifères du jardin : pins et cèdres. On cherche une boule de soie blanche en bout de rameau, souvent du côté le plus ensoleillé. C'est visible de loin.</li>
        <li><strong>En mai</strong> — faire le tour des troncs de chênes, à deux mètres de distance. On cherche une plaque grise et mate, aplatie contre l'écorce, jusqu'à cinq ou six mètres de hauteur.</li>
      </ol>
      <p>Dans les deux cas, la consigne est la même : ne pas s'approcher, ne rien gratter, photographier à
      distance avec zoom. <a href="/identifier-nid-chenilles-processionnaires/">Voir les critères
      d'identification</a>.</p>` }
  ],
  faq: [
    { q: "Melun est-elle une commune très touchée ?",
      a: `<p>Moins que les communes de lisière forestière du département. Les situations y sont plus
      isolées, liées à des arbres plantés plutôt qu'à une pression forestière continue — ce qui rend
      l'intervention souvent plus durablement efficace.</p>` },
    { q: "Un seul traitement peut-il suffire ?",
      a: `<p>C'est plus probable ici qu'en lisière de massif. Si aucun autre arbre hôte ne se trouve à
      proximité immédiate, un jardin traité peut rester indemne plusieurs saisons. Une vérification annuelle
      reste recommandée.</p>` },
    { q: "Mes thuyas peuvent-ils être infestés ?",
      a: `<p>Non. Les processionnaires dont nous parlons sont strictement liées aux pins, aux cèdres et aux
      chênes. Un amas dans une haie de thuyas relève d'autre chose, généralement sans danger urticant.</p>` },
    { q: "À qui signaler un arbre dans un square ou une cour d'école ?",
      a: `<p>Aux services techniques de la commune, avec une photo et une localisation précise. Pour une
      école, le signalement remonte de la direction de l'établissement au gestionnaire des locaux.</p>` },
    { q: "Intervenez-vous dans les communes de l'agglomération ?",
      a: `<p>Oui, ainsi que sur l'ensemble de la Seine-et-Marne. Les interventions sont groupées par secteur
      afin de limiter les déplacements.</p>` }
  ],
  cta: {
    title: "Un conifère ou un chêne à faire vérifier",
    text: `Deux photos — l'arbre entier et la zone suspecte — suffisent le plus souvent à savoir s'il s'agit
    d'une processionnaire et à quelle période il faudra intervenir.`,
    primary: 'Faire identifier un arbre'
  },
  related: [
    { url: '/departements/77-seine-et-marne/', label: 'Seine-et-Marne (77)', hint: 'Situation départementale' },
    { url: '/departements/77-seine-et-marne/fontainebleau/', label: 'Fontainebleau', hint: 'La situation en plein massif' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Les critères visuels' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Intervention dans un jardin' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Cours plantées de chênes' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Résidences des années 1960-1970' }
  ]
});
