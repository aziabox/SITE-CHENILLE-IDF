import { standardPage } from '../../lib/layout.mjs';
import { safety, note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenilles-processionnaires-enfant/',
  title: 'Chenilles processionnaires et enfants : protéger et réagir',
  description: "Pourquoi les enfants sont plus exposés, comment sécuriser un jardin ou une aire de jeux, et que faire après un contact avec une chenille.",
  h1: 'Chenilles processionnaires et enfants',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Prévention', url: '/traitement-preventif/' },
          { name: 'Enfants', url: '/chenilles-processionnaires-enfant/' }],
  datePublished: '2026-02-26',
  dateModified: '2026-09-14',
  lead: `Une chenille processionnaire est, pour un enfant, un objet fascinant qui avance en file. C'est
  exactement ce qui en fait un sujet de prévention : le danger n'a aucun signal dissuasif, ni couleur vive,
  ni mouvement menaçant.`,
  answer: `<p>Les enfants sont plus exposés que les adultes parce qu'ils <strong>jouent au sol</strong>, à la
  hauteur exacte où circulent les processions, et parce qu'ils <strong>touchent puis portent les mains au
  visage</strong>. En cas de contact : ne pas frotter, retirer les vêtements avec précaution, rincer
  abondamment à l'eau, doucher et laver les cheveux, puis consulter un médecin en cas d'atteinte des yeux,
  de gêne respiratoire, de réaction étendue ou chez un nourrisson.</p>`,
  sections: [
    { h2: 'Pourquoi les enfants sont plus concernés',
      html: `
      <ul class="plain">
        <li><strong>La hauteur.</strong> Un enfant qui joue est au niveau du sol, là où passe la procession et où les poils se déposent.</li>
        <li><strong>Le geste.</strong> Toucher, ramasser, montrer : la curiosité est immédiate et le réflexe de méfiance inexistant.</li>
        <li><strong>Les mains au visage.</strong> Les yeux et la bouche sont atteints par transfert, souvent plus que par contact direct.</li>
        <li><strong>La peau.</strong> Plus fine, elle réagit plus fortement à quantité égale de poils.</li>
        <li><strong>Les lieux.</strong> Bacs à sable, pelouses ensoleillées, pieds d'arbres : ce sont à la fois les terrains de jeu et les zones où les chenilles cherchent à s'enfouir.</li>
      </ul>
      ${note(`<p>Une situation revient souvent : l'enfant ne signale rien sur le moment et les plaques
      apparaissent plus tard, à la maison ou le soir. On cherche alors une piqûre d'insecte, une allergie
      alimentaire, une plante — rarement une chenille. Si des pins ou des chênes infestés sont présents à
      proximité, mentionnez-le au médecin : cela oriente utilement.</p>`, 'Un diagnostic souvent retardé')}` },

    { h2: 'Que faire si un enfant a été en contact',
      tocLabel: 'Après un contact',
      html: `
      <ol>
        <li><strong>Empêcher le frottement.</strong> C'est le premier message à faire passer : ne pas gratter, ne pas se frotter les yeux. Le frottement casse les poils et aggrave la réaction.</li>
        <li><strong>Éloigner de la zone</strong> sans secouer les vêtements sur place.</li>
        <li><strong>Retirer les vêtements avec précaution</strong>, en les roulant vers l'extérieur, et les laver séparément à température élevée.</li>
        <li><strong>Rincer abondamment à l'eau</strong> la peau exposée ; pour les yeux, rincer à l'eau, paupières ouvertes, sans frotter.</li>
        <li><strong>Doucher et laver les cheveux</strong>, où les poils s'accrochent facilement.</li>
        <li><strong>Consulter</strong> selon les critères ci-dessous.</li>
      </ol>
      ${safety(`<p>Consultez un médecin sans attendre en cas d'<strong>atteinte des yeux</strong>, de
      <strong>gêne respiratoire</strong>, de <strong>gonflement du visage, des lèvres ou de la gorge</strong>,
      de réaction cutanée étendue, de fièvre, chez un <strong>nourrisson</strong>, ou si l'enfant a un terrain
      allergique ou asthmatique connu. En cas de difficulté à respirer, appelez le 15 ou le 112.</p>
      <p>Ces informations sont générales et ne remplacent pas un avis médical. Nous ne posons aucun
      diagnostic et ne recommandons aucun traitement.</p>`, 'Quand consulter')}` },

    { h2: 'Sécuriser un jardin familial',
      html: `
      ${table(
        ['Élément du jardin', 'Ce qu\'il faut vérifier'],
        [
          ['Bac à sable', "Sable meuble et ensoleillé : c'est un site d'enfouissement recherché. À couvrir hors utilisation et à contrôler avant chaque usage en fin d'hiver."],
          ['Pelouse sous un pin', "Zone de passage des processions et de retombée des poils. Éviter la tonte et le jeu tant que l'arbre n'est pas traité."],
          ['Aire de jeux, trampoline, cabane', "À éloigner du pied des pins et des chênes porteurs ; en cas d'impossibilité, traiter l'arbre en priorité."],
          ['Linge et jouets d\'extérieur', 'À rentrer pendant la saison à risque ; laver avant réutilisation.'],
          ['Limite de propriété', "Un pin infesté chez le voisin concerne aussi votre jardin : la procession ne s'arrête pas à la clôture."]
        ],
        'Les points à contrôler avant le printemps')}
      <p>La mesure la plus efficace reste le retrait des nids avant la descente. Voir
      <a href="/echenillage/">échenillage</a> et <a href="/particuliers/">intervention chez les
      particuliers</a>.</p>` },

    { h2: 'À l\'école, à la crèche, au centre de loisirs',
      tocLabel: 'Établissements accueillant des enfants',
      html: `
      <p>Le sujet devient collectif, et la <a href="/chenille-processionnaire-du-chene/">processionnaire du
      chêne</a> y tient le premier rôle : beaucoup de cours d'école franciliennes sont ombragées par des
      chênes plantés il y a plusieurs décennies, et le pic d'activité de l'espèce tombe en mai-juin, en
      pleine période scolaire.</p>
      <p>Pour un établissement, trois réflexes valent mieux qu'un plan complexe : <strong>inspecter les
      troncs au printemps</strong> (le nid plat est discret), <strong>baliser immédiatement</strong> toute
      zone suspecte, et <strong>programmer l'intervention hors présence des enfants</strong> — mercredi,
      week-end ou vacances.</p>
      <p>Voir <a href="/ecoles/">notre page dédiée aux écoles, crèches et centres de loisirs</a>.</p>` },

    { h2: 'Expliquer aux enfants sans les effrayer',
      html: `
      <p>La consigne qui fonctionne le mieux est courte, concrète et sans ambiguïté : <strong>« les chenilles
      qui avancent à la queue leu leu, on ne les touche pas, et on prévient un adulte »</strong>.</p>
      <p>Quelques points utiles à transmettre :</p>
      <ul class="plain">
        <li>Ce n'est pas la chenille qui pique : ce sont ses poils, et ils volent.</li>
        <li>Il ne faut ni les toucher, ni les écraser, ni jeter quelque chose dessus.</li>
        <li>Un nid blanc dans un arbre ou une tache grise sur un tronc, on le signale sans s'approcher.</li>
        <li>Si on a touché, on ne se frotte pas les yeux : on va se laver les mains et on le dit.</li>
      </ul>
      <p>Cette dernière phrase est la plus utile de toutes, parce qu'elle règle le principal facteur
      aggravant.</p>` }
  ],
  faq: [
    { q: "Une seule chenille peut-elle provoquer une réaction chez un enfant ?",
      a: `<p>Oui. Une chenille manipulée libère une quantité importante de poils, et une réaction cutanée
      marquée peut suivre un contact unique. L'intensité varie beaucoup d'un enfant à l'autre.</p>` },
    { q: "Les plaques apparaissent-elles immédiatement ?",
      a: `<p>Le plus souvent en quelques minutes à quelques heures. Un décalage est possible, ce qui explique
      que le lien avec la chenille ne soit pas toujours fait.</p>` },
    { q: "Faut-il retirer l'enfant de l'école si un chêne est infesté ?",
      a: `<p>Ce n'est généralement pas nécessaire si l'établissement a balisé la zone concernée et programmé
      l'intervention. Signalez toutefois toute situation où des enfants continuent de jouer sous un arbre
      porteur de nids.</p>` },
    { q: "Peut-on laisser les enfants jouer après le retrait du nid ?",
      a: `<p>Après la fin de la retombée des poils et le contrôle du sol, oui. Le délai vous est indiqué à
      l'issue de l'intervention : il dépend de la hauteur du nid retiré, du vent et de la surface concernée.</p>` },
    { q: "Le bac à sable doit-il être vidé ?",
      a: `<p>Pas systématiquement. S'il a servi de site d'enfouissement ou s'il se trouve sous un arbre
      fortement infesté, un remplacement du sable est la solution la plus simple. Dans le doute, couvrez-le
      et faites examiner la situation.</p>` }
  ],
  cta: {
    title: "Un arbre infesté au-dessus d'une zone de jeu : priorité",
    text: `Les situations où des enfants jouent sous un arbre porteur de nids passent devant les autres.
    Indiquez-nous la hauteur du nid, l'essence de l'arbre et l'usage du sol en dessous.`,
    primary: 'Demander une intervention rapide'
  },
  related: [
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Organisation dans un établissement' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Mécanisme et durée du risque' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Sécuriser un jardin familial' },
    { url: '/blog/danger/proteger-les-enfants/', label: 'Comment protéger les enfants', hint: 'Article détaillé' },
    { url: '/blog/danger/que-faire-autour-d-une-ecole/', label: 'Autour d\'une école', hint: 'Marche à suivre pour un établissement' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Supprimer la source' }
  ]
});
