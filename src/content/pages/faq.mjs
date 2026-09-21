import { standardPage } from '../../lib/layout.mjs';
import { faqBlock, note } from '../../lib/render.mjs';

const groupes = [
  { titre: 'Reconnaître', id: 'reconnaitre', questions: [
    { q: "Quelle est la différence entre processionnaire du pin et processionnaire du chêne ?",
      a: `<p>Ce sont deux espèces distinctes, avec des arbres hôtes et des calendriers opposés. La
      processionnaire du pin vit sur pins et cèdres, construit une boule de soie blanche en bout de branche
      et descend au sol en procession à la fin de l'hiver. La processionnaire du chêne vit sur chênes,
      construit un nid plat contre le tronc, est active au printemps et se transforme en chrysalide dans le
      nid sans jamais descendre. <a href="/chenilles-processionnaires/">Comparatif détaillé</a>.</p>` },
    { q: "Comment reconnaître un nid ?",
      a: `<p>Par son opacité et son emplacement. Un nid de processionnaire est fait de soie dense : on ne
      voit pas le rameau ni l'écorce au travers. Sur pin, c'est une boule blanche en bout de rameau ; sur
      chêne, une plaque grise aplatie contre le tronc. Une toile translucide à travers laquelle on distingue
      le support est autre chose, et sans danger.
      <a href="/identifier-nid-chenilles-processionnaires/">Voir les critères</a>.</p>` },
    { q: "Comment savoir si un arbre est infesté sans voir de nid ?",
      a: `<p>Trois indices : des rameaux ou des branches dégarnis alors que le reste du feuillage est
      intact, des déjections en petits grains sombres réguliers au pied de l'arbre, et des mues blanchâtres
      accrochées à l'écorce. Sur chêne, un houppier nettement plus clairsemé que celui des arbres voisins en
      mai est un signal fort.</p>` }
  ]},
  { titre: 'Risques', id: 'risques', questions: [
    { q: "Peut-on toucher une chenille processionnaire ?",
      a: `<p>Non. À partir du troisième stade larvaire, elle porte des centaines de milliers de poils
      urticants microscopiques qui se détachent au moindre contact ou courant d'air. Il n'est d'ailleurs pas
      nécessaire de la toucher : tondre sous un arbre infesté suffit à provoquer une réaction.
      <a href="/chenilles-processionnaires-danger/">En savoir plus</a>.</p>` },
    { q: "Que faire si un chien entre en contact avec une processionnaire ?",
      a: `<p>C'est une urgence vétérinaire. Rincez abondamment la gueule à l'eau claire, sans frotter et
      sans rien ajouter à l'eau, puis contactez immédiatement un vétérinaire ou une clinique d'urgence, sans
      attendre l'apparition des symptômes. Ne faites pas vomir l'animal.
      <a href="/chenilles-processionnaires-chien/">Conduite à tenir détaillée</a>.</p>` },
    { q: "Que faire si un enfant a été exposé ?",
      a: `<p>Empêcher le frottement, retirer les vêtements avec précaution et les laver séparément, rincer
      abondamment à l'eau, doucher et laver les cheveux. Consultez un médecin en cas d'atteinte des yeux, de
      gêne respiratoire, de gonflement du visage, de réaction étendue, ou chez un nourrisson. En cas de
      difficulté à respirer, appelez le 15 ou le 112.
      <a href="/chenilles-processionnaires-enfant/">Détail</a>.</p>` },
    { q: "Un nid vide est-il encore dangereux ?",
      a: `<p>Oui. Le nid contient les mues de toute la colonie, et chaque mue a laissé ses poils. Un ancien
      nid continue d'en libérer à chaque coup de vent pendant des mois, parfois au-delà d'une année. Sur
      chêne, où les nids restent collés au tronc à hauteur d'homme, leur retrait est un motif d'intervention
      à part entière.</p>` },
    { q: "Combien de temps le sol reste-t-il contaminé ?",
      a: `<p>Plusieurs mois. Les poils tombés se maintiennent dans l'herbe et la litière, et la tonte ou le
      soufflage les remettent en suspension. C'est pourquoi une intervention se termine toujours par des
      consignes sur le sol, et pas seulement par le retrait du nid.</p>` }
  ]},
  { titre: 'Traitement', id: 'traitement', questions: [
    { q: "Quand faut-il intervenir ?",
      a: `<p>Sur pin : un traitement biologique en septembre-octobre, un échenillage de novembre à février,
      une pose de collier avant la descente. Sur chêne : un traitement biologique en avril, l'aspiration des
      nids de mai à juillet. Se tromper d'espèce revient à perdre six mois.
      <a href="/traitement-chenilles-processionnaires/">Calendrier complet</a>.</p>` },
    { q: "Comment fonctionne l'échenillage ?",
      a: `<p>Le nid est séparé de l'arbre sans être ouvert : sur pin, le rameau porteur est sectionné au
      sécateur de perche ; sur chêne, le nid plaqué au tronc est aspiré. Dans les deux cas, il est confiné
      immédiatement dans un sac fermé, sans toucher le sol, puis éliminé par une filière adaptée.
      <a href="/echenillage/">Voir le déroulé</a>.</p>` },
    { q: "Comment fonctionne le piégeage ?",
      a: `<p>Deux dispositifs, deux saisons. Le collier de piégeage, posé sur le tronc en hiver, intercepte
      les chenilles qui descendent et les dirige vers un sac fermé : il protège le sol. Le piège à
      phéromone, posé en été, capture les papillons mâles et réduit les pontes de l'année suivante.
      <a href="/piegeage-chenilles-processionnaires/">Détail</a>.</p>` },
    { q: "Combien de temps dure une intervention ?",
      a: `<p>Pour un jardin de particulier avec un à trois arbres, comptez généralement une demi-journée sur
      place, sécurisation et contrôle du sol compris. Un patrimoine arboré de copropriété ou de commune se
      traite par campagne, sur plusieurs passages.</p>` },
    { q: "Quel est le prix d'une intervention ?",
      a: `<p>Nous ne publions pas de tarif forfaitaire, parce qu'il serait trompeur. Le coût dépend
      principalement de la hauteur du nid — perche, nacelle ou grimpeur —, de l'accès au pied de l'arbre, du
      nombre de nids et de la méthode. Le devis est établi après diagnostic, détaillé poste par poste.</p>` },
    { q: "Peut-on traiter soi-même ?",
      a: `<p>La pose d'un collier de piégeage sur un petit pin accessible est à la portée d'un particulier
      soigneux, à condition de le faire tôt. Le retrait d'un nid urticant en hauteur ne l'est pas : c'est
      l'opération qui provoque le plus d'accidents domestiques.</p>` }
  ]},
  { titre: 'Prévention', id: 'prevention', questions: [
    { q: "Peut-on prévenir une infestation ?",
      a: `<p>Oui, et c'est moins coûteux que de la subir. Quatre leviers : un traitement biologique sur
      jeunes larves à la bonne saison, le piégeage pour réduire la pression, des aménagements favorables aux
      prédateurs naturels — nichoirs à mésanges, gîtes à chauves-souris — et une surveillance annuelle des
      arbres à risque. <a href="/traitement-preventif/">En savoir plus</a>.</p>` },
    { q: "Comment protéger un jardin ?",
      a: `<p>En commençant par identifier les arbres hôtes : pins, cèdres, chênes. Ensuite, deux contrôles
      annuels suffisent — en novembre pour les conifères, en mai pour les chênes. Si un chien ou des enfants
      utilisent le jardin, la protection du sol devient prioritaire, par retrait des nids avant la descente
      ou par pose d'un collier.</p>` },
    { q: "Que faire autour d'une école ?",
      a: `<p>Inspecter les troncs de chênes au printemps, baliser immédiatement toute zone suspecte,
      programmer l'intervention hors présence des enfants et informer les familles. Le balisage ne coûte
      rien et supprime l'essentiel de l'exposition en attendant l'intervention.
      <a href="/ecoles/">Voir la marche à suivre</a>.</p>` },
    { q: "Une intervention suffit-elle à régler le problème ?",
      a: `<p>Elle règle la saison en cours. Si des arbres hôtes infestés subsistent à proximité — a fortiori
      un massif forestier —, la recolonisation est probable. C'est pourquoi nous proposons systématiquement
      une mesure de suite plutôt que de promettre une éradication.</p>` }
  ]},
  { titre: 'Pratique', id: 'pratique', questions: [
    { q: "Qui contacter en cas de nid dangereux ?",
      a: `<p>Cela dépend du propriétaire de l'arbre. Jardin privé : le propriétaire. Partie commune de
      résidence : le syndic ou le bailleur. Parc, square, rue, école publique : les services de la commune.
      Forêt domaniale : son gestionnaire. Un signalement avec photo et localisation précise est toujours
      traité plus vite.</p>` },
    { q: "Intervenez-vous en dehors de l'Île-de-France ?",
      a: `<p>Non. Nous couvrons uniquement les huit départements franciliens. Si vous êtes en dehors, nous
      vous le dirons dès le premier échange — et nous pouvons néanmoins vous aider à identifier l'espèce et
      à savoir quelle fenêtre viser.</p>` },
    { q: "Traitez-vous d'autres nuisibles ?",
      a: `<p>Non. Nous ne traitons ni rats, ni cafards, ni punaises de lit, ni guêpes. Une seule famille
      d'organismes, deux espèces, toute l'année. C'est ce qui nous permet de connaître les fenêtres
      d'intervention, les essences et les massifs franciliens.</p>` },
    { q: "Que deviennent les nids retirés ?",
      a: `<p>Ils sont ensachés sur place, transportés fermés et éliminés par une filière adaptée aux déchets
      présentant un risque sanitaire. Ils ne partent ni aux déchets verts, ni au compost : les poils y
      resteraient actifs.</p>` },
    { q: "Les chenilles processionnaires sont-elles réglementées ?",
      a: `<p>Oui. Le décret n° 2022-1124 du 5 août 2022 les a inscrites sur la liste des espèces animales
      nuisibles à la santé humaine. Ce classement permet aux préfets et aux maires de prescrire des mesures
      de lutte ; certaines communes prennent des arrêtés en ce sens. Renseignez-vous auprès de votre
      mairie.</p>` }
  ]}
];

const body = groupes.map(g =>
  `<div class="prose">${faqBlock(g.questions, g.titre, g.id)}</div>`).join('');

export default standardPage({
  url: '/faq/',
  title: 'FAQ chenilles processionnaires : toutes les questions',
  description: "Différence pin / chêne, dangers, contact avec un animal, traitements, prévention, prix, réglementation : vingt-trois réponses directes.",
  h1: 'Questions fréquentes sur les chenilles processionnaires',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'FAQ', url: '/faq/' }],
  datePublished: '2026-06-04',
  dateModified: '2026-09-18',
  priority: '0.7',
  toc: false,
  lead: `Les questions que l'on nous pose le plus souvent, regroupées par thème. Les réponses sont
  volontairement directes : si vous avez besoin d'un avis sur une situation précise, un appel reste plus
  rapide qu'une page.`,
  sections: [
    { h2: 'Cinq thèmes, vingt réponses',
      toc: false,
      html: `
      <p>Cette page rassemble les questions récurrentes sur les deux espèces, les risques, les méthodes,
      la prévention et l'organisation pratique d'une intervention. Chaque réponse renvoie vers la page
      détaillée correspondante.</p>
      ${note(`<p>Les informations relatives à la santé humaine ou animale sont générales et ne remplacent
      pas l'avis d'un médecin ou d'un vétérinaire. En cas d'exposition sérieuse, la prise en charge
      médicale passe avant tout le reste.</p>`)}
      <p><a href="#reconnaitre">Reconnaître</a> · <a href="#risques">Risques</a> ·
      <a href="#traitement">Traitement</a> · <a href="#prevention">Prévention</a> ·
      <a href="#pratique">Pratique</a></p>` }
  ],
  afterSections: body,
  // La FAQPage structuree reprend exactement les questions visibles ci-dessus.
  faq: groupes.flatMap(g => g.questions),
  renderFaq: false,
  cta: {
    title: "Votre question n'est pas là ?",
    text: `Décrivez la situation en quelques mots : essence de l'arbre, hauteur du nid, ce qui se trouve en
    dessous. C'est généralement suffisant pour obtenir une réponse utile.`,
    primary: 'Poser la question'
  },
  related: [
    { url: '/chenilles-processionnaires/', label: 'Les deux espèces', hint: 'Comparatif complet' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Méthodes et calendrier' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Poils urticants et durée du risque' },
    { url: '/blog/', label: 'Blog', hint: 'Articles détaillés' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Les huit départements' },
    { url: '/contact/', label: 'Contact', hint: 'Envoyer des photos' }
  ]
});
