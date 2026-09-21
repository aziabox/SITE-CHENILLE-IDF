import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';
import { esc } from '../../lib/render.mjs';

const villes = villesOf('77-seine-et-marne');

export default standardPage({
  url: '/departements/77-seine-et-marne/',
  title: 'Chenilles processionnaires en Seine-et-Marne (77)',
  description: "Seine-et-Marne : le seul département francilien où les deux espèces cohabitent largement, entre pins de Fontainebleau et chênaies de Brie.",
  h1: 'Chenilles processionnaires en Seine-et-Marne (77)',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Seine-et-Marne (77)', url: '/departements/77-seine-et-marne/' }],
  datePublished: '2026-04-20',
  dateModified: '2026-09-16',
  service: {
    name: 'Traitement des chenilles processionnaires en Seine-et-Marne',
    type: 'Échenillage, piégeage et traitement biologique',
    description: "Traitement des chenilles processionnaires du pin et du chêne en Seine-et-Marne : jardins, lisières forestières, centres équestres, campings et patrimoine communal.",
    areaServed: ['Seine-et-Marne (77)']
  },
  lead: `La Seine-et-Marne est le département francilien le plus étendu, et celui où notre métier est le
  plus varié : c'est le seul où l'on traite, parfois dans la même semaine, un pin sylvestre du Gâtinais et
  un chêne de Brie, à six mois d'intervalle dans le cycle.`,
  answer: `<p>La Seine-et-Marne cumule les deux espèces. Le <strong>massif de Fontainebleau</strong> et les
  sols sableux du sud du département offrent au <strong>pin sylvestre</strong> un terrain idéal pour la
  processionnaire du pin. Les <strong>chênaies de Brie</strong> — Armainvilliers, Ferrières, Crécy,
  Villefermoy — alimentent la processionnaire du chêne. Les secteurs les plus exposés sont les communes
  installées en lisière de massif, ainsi que les centres équestres et les campings.</p>`,
  sections: [
    { h2: 'Un département, deux milieux, deux espèces',
      tocLabel: 'Géographie du département',
      html: `
      <p>Le sud du département repose largement sur des <strong>sols sableux</strong> — les fameux sables de
      Fontainebleau — qui portent des peuplements de pin sylvestre, souvent mêlés aux chênes sur les
      plateaux et les platières. Ce substrat est doublement favorable à la processionnaire du pin : il
      offre l'essence hôte, et il offre un sol meuble et drainant où les chenilles s'enfouissent facilement
      en fin d'hiver pour se nymphoser.</p>
      <p>Le nord et le centre, la <strong>Brie</strong>, relèvent d'une autre logique : des plateaux
      limoneux cultivés, ponctués de grands massifs de chênes. Armainvilliers, Ferrières, Crécy,
      Villefermoy, Jouy : ce sont des chênaies au contact immédiat de communes résidentielles qui se sont
      développées en lisière depuis les années 1970.</p>
      ${note(`<p>Cette double géographie a une conséquence pratique directe : en Seine-et-Marne, la
      question « de quelle espèce s'agit-il ? » se pose réellement. Ailleurs en Île-de-France, la réponse
      est souvent évidente au vu de l'arbre. Ici, une même propriété peut abriter les deux.</p>`,
      'Pourquoi l\'identification compte davantage ici')}` },

    { h2: 'Les situations les plus fréquentes',
      html: `
      ${table(
        ['Contexte', 'Espèce dominante', 'Ce que nous y faisons'],
        [
          ['Propriété en lisière du massif de Fontainebleau', 'Les deux', "Inventaire des pins et des chênes, traitement différencié selon la saison"],
          ['Lotissement briard en bordure de chênaie', 'Chêne', "Inspection des troncs au printemps, aspiration des nids"],
          ['Centre équestre, pré arboré', 'Pin', "Protection du sol pendant les processions, piégeage sur tronc"],
          ['Camping et hébergement de plein air', 'Pin', "Passage en fin d'hiver, avant l'ouverture de saison"],
          ['Parc et patrimoine communal', 'Les deux', "Inventaire, hiérarchisation par usage, campagne annuelle"],
          ['Grande propriété avec alignement de cèdres', 'Pin', "Échenillage et surveillance pluriannuelle"]
        ],
        'Les configurations que nous rencontrons le plus souvent en Seine-et-Marne')}` },

    { h2: 'Chevaux et centres équestres',
      html: `
      <p>C'est une spécificité locale qu'on ne retrouve pas au même degré ailleurs dans la région. Le sud de
      la Seine-et-Marne concentre une densité inhabituelle d'activités équestres, et les prés y sont souvent
      bordés ou ombragés de pins.</p>
      <p>Le cheval qui broute sous un pin infesté, ou qui traverse une zone où une procession est passée,
      peut présenter des atteintes buccales : lésions des lèvres, de la langue et des muqueuses, salivation,
      difficultés à s'alimenter. La situation appelle un avis vétérinaire, et elle est d'autant plus
      pénalisante qu'un cheval de sport immobilisé représente un coût réel.</p>
      <p>Pour ces sites, l'approche pratique consiste à protéger les zones de pâture plutôt que l'ensemble du
      boisement : <a href="/piegeage-chenilles-processionnaires/">colliers de piégeage</a> sur les pins
      bordant les prés, retrait des nids accessibles, et mise en défens temporaire des parcelles pendant la
      période de descente.</p>` },

    { h2: 'Communes et secteurs où nous intervenons',
      tocLabel: 'Secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département, avec une concentration de demandes autour de trois
      ensembles : le <strong>massif de Fontainebleau et ses communes riveraines</strong>, la
      <strong>vallée de la Seine entre Melun et Montereau</strong>, et le <strong>nord briard entre Meaux,
      Coulommiers et les forêts d'Armainvilliers et de Ferrières</strong>.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>Les communes de l'est et du sud du département sont éloignées de la petite couronne : pour ces
      secteurs, nous groupons les interventions par journée afin de limiter le coût de déplacement. Si
      plusieurs voisins sont concernés — ce qui est fréquent dans un lotissement de lisière —, signalez-le :
      cela change le chiffrage.</p>` },

    { h2: 'Calendrier local',
      html: `
      <p>Les plateaux briards, plus exposés et plus froids que la vallée de la Seine, voient généralement
      les processions de processionnaire du pin démarrer un peu plus tard que le sud du département. À
      l'inverse, les versants bien exposés du sud sableux peuvent connaître des descentes précoces dès
      janvier lors d'un hiver doux.</p>
      <p>Pour la processionnaire du chêne, le débourrement conditionne tout : l'éclosion suit l'ouverture des
      feuilles, qui varie de quelques jours selon l'exposition. C'est pourquoi nous ne fixons pas une date
      de traitement biologique en janvier, mais une fourchette confirmée en mars.
      <a href="/traitement-chenilles-processionnaires/">Voir le calendrier complet</a>.</p>` }
  ],
  faq: [
    { q: "Pourquoi la processionnaire du pin est-elle si présente autour de Fontainebleau ?",
      a: `<p>Parce que deux conditions y sont réunies : la présence de pins sylvestres en peuplements
      étendus, et des sols sableux, drainants et bien exposés, qui facilitent l'enfouissement des chenilles
      au moment de la nymphose. C'est un contexte nettement plus favorable que les plateaux limoneux du
      nord du département.</p>` },
    { q: "Ma maison est en lisière de forêt : peut-on espérer être tranquille ?",
      a: `<p>L'objectif réaliste est de protéger votre parcelle et vos zones d'usage, pas d'éradiquer
      l'espèce du massif voisin. Concrètement : traiter vos arbres, protéger le sol, et surveiller chaque
      année. C'est une gestion continue, et nous le disons dès le premier échange.</p>` },
    { q: "Un cheval peut-il être gravement atteint ?",
      a: `<p>Des lésions buccales sérieuses sont possibles, avec difficultés à s'alimenter. Tout contact
      suspect justifie un avis vétérinaire rapide. Ces informations sont générales et ne remplacent pas
      l'examen d'un vétérinaire.</p>` },
    { q: "Intervenez-vous dans le sud et l'est du département ?",
      a: `<p>Oui, sur l'ensemble de la Seine-et-Marne. Pour les secteurs éloignés, nous groupons les
      interventions par journée, ce qui réduit la part de déplacement dans le devis.</p>` },
    { q: "Qui traite les arbres du massif forestier lui-même ?",
      a: `<p>Un massif domanial relève de son gestionnaire forestier, qui applique une logique de gestion
      forestière et non de lutte généralisée. Notre intervention porte sur les propriétés, les équipements
      et le patrimoine communal en lisière.</p>` }
  ],
  cta: {
    title: "Pin ou chêne ? En Seine-et-Marne, la question se pose vraiment",
    text: `Envoyez une photo de l'arbre et du nid avec votre commune : l'espèce détermine la saison utile, et
    se tromper d'espèce revient à perdre six mois.`,
    primary: 'Faire identifier un arbre'
  },
  related: [
    { url: '/departements/91-essonne/', label: 'Essonne (91)', hint: 'Même géologie sableuse au sud-ouest' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce du sud sableux" },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Les chênaies briardes' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger prés et zones de pâture' },
    { url: '/entreprises/', label: 'Entreprises', hint: 'Campings et hébergements de plein air' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
