import { safety, note, table } from '../../../lib/render.mjs';

export default {
  slug: 'proteger-les-enfants',
  category: 'danger',
  title: 'Comment protéger les enfants des chenilles processionnaires ?',
  description: "Jardin, bac à sable, aire de jeux : les mesures concrètes pour protéger les enfants des chenilles processionnaires, et les bons réflexes après un contact.",
  h1: 'Comment protéger les enfants des chenilles processionnaires ?',
  excerpt: "Une chenille qui avance en file est un objet fascinant, sans aucun signal de danger. La prévention passe donc par l'environnement plus que par la consigne.",
  datePublished: '2026-06-22',
  dateModified: '2026-09-19',
  lead: `Il n'y a ni couleur vive, ni mouvement menaçant, ni bruit d'alerte. Rien, dans l'apparence d'une
  procession, ne dit à un enfant qu'il ne faut pas y toucher — et c'est bien là le problème.`,
  answer: `<p>La protection repose d'abord sur l'<strong>environnement</strong> : faire retirer les nids
  avant la saison, éloigner les jeux du pied des arbres hôtes, couvrir le bac à sable, suspendre la tonte
  sous un arbre infesté. La consigne verbale vient ensuite, et tient en une phrase :
  <strong>« les chenilles qui avancent à la queue leu leu, on ne touche pas, on prévient un adulte »</strong>.</p>`,
  sections: [
    { h2: 'Pourquoi les enfants sont plus exposés',
      html: `
      <ul class="plain">
        <li><strong>La hauteur.</strong> Un enfant qui joue est au niveau du sol, là où passe la procession et où les poils se déposent.</li>
        <li><strong>Le geste.</strong> Toucher, ramasser, montrer : la curiosité est immédiate.</li>
        <li><strong>Les mains au visage.</strong> Les yeux et la bouche sont souvent atteints par transfert plutôt que par contact direct.</li>
        <li><strong>La peau.</strong> Plus fine, elle réagit plus fortement à quantité égale de poils.</li>
        <li><strong>Les lieux.</strong> Bacs à sable, pelouses ensoleillées et pieds d'arbres sont à la fois les terrains de jeu et les zones où les chenilles cherchent à s'enfouir.</li>
      </ul>
      ${note(`<p>Un enfant ne signale presque jamais le contact sur le moment. Les plaques apparaissent plus
      tard, à la maison ou le soir, et l'on cherche alors une piqûre d'insecte ou une allergie alimentaire.
      Si des pins ou des chênes infestés se trouvent à proximité, mentionnez-le au médecin : cela oriente
      utilement.</p>`, 'Un diagnostic souvent retardé')}` },

    { h2: 'Sécuriser le jardin, point par point',
      html: `
      ${table(
        ['Élément', 'Ce qu\'il faut faire'],
        [
          ['Bac à sable', "Le couvrir hors utilisation et le contrôler avant chaque usage en fin d'hiver : le sable meuble et chaud est un site d'enfouissement recherché"],
          ['Pelouse sous un pin', "Suspendre la tonte et le jeu tant que l'arbre n'est pas traité"],
          ['Aire de jeux, trampoline, cabane', "Les éloigner du pied des pins et des chênes porteurs ; sinon, traiter l'arbre en priorité"],
          ['Linge et jouets d\'extérieur', 'Les rentrer pendant la saison à risque et les laver avant réutilisation'],
          ['Limite de propriété', "Un pin infesté chez le voisin concerne votre jardin : la procession ne s'arrête pas à la clôture"],
          ['Terrasse sous un chêne', "Vérifier le tronc au printemps : le nid plat passe facilement inaperçu"]
        ],
        'Les six points à contrôler avant le printemps')}` },

    { h2: 'Ce qu\'il faut dire aux enfants',
      html: `
      <p>Une consigne courte et concrète fonctionne mieux qu'une explication longue. Quatre points
      suffisent :</p>
      <ol>
        <li><strong>« Les chenilles qui se suivent à la queue leu leu, on ne les touche pas. »</strong></li>
        <li><strong>« Ce n'est pas la chenille qui pique, ce sont ses poils, et ils volent. »</strong> — cela explique pourquoi il ne faut pas non plus jeter quelque chose dessus, ni les écraser.</li>
        <li><strong>« Une boule blanche dans un arbre ou une tache grise sur un tronc, on le dit à un adulte. »</strong></li>
        <li><strong>« Si on a touché, on ne se frotte pas les yeux : on va se laver les mains et on le dit. »</strong></li>
      </ol>
      <p>La dernière phrase est la plus utile de toutes, parce qu'elle règle le principal facteur
      aggravant.</p>` },

    { h2: 'Après un contact : les bons gestes',
      html: `
      <ol>
        <li><strong>Empêcher le frottement</strong> — c'est le geste qui aggrave le plus la réaction.</li>
        <li><strong>Éloigner de la zone</strong> sans secouer les vêtements sur place.</li>
        <li><strong>Retirer les vêtements avec précaution</strong>, en les roulant vers l'extérieur, et les laver séparément à température élevée.</li>
        <li><strong>Rincer abondamment à l'eau</strong> la peau exposée ; pour les yeux, rincer paupières ouvertes, sans frotter.</li>
        <li><strong>Doucher et laver les cheveux</strong>, où les poils s'accrochent facilement.</li>
      </ol>
      ${safety(`<p>Consultez un médecin sans attendre en cas d'<strong>atteinte des yeux</strong>, de
      <strong>gêne respiratoire</strong>, de <strong>gonflement du visage, des lèvres ou de la gorge</strong>,
      de réaction cutanée étendue, de fièvre, chez un <strong>nourrisson</strong>, ou si l'enfant présente un
      terrain allergique ou asthmatique connu. En cas de difficulté à respirer, appelez le 15 ou le 112.</p>
      <p>Ces informations sont générales et ne remplacent pas un avis médical.</p>`, 'Quand consulter')}` },

    { h2: 'En dehors de la maison',
      html: `
      <p>Le sujet ne s'arrête pas au jardin. Trois contextes méritent attention :</p>
      <ul class="plain">
        <li><strong>L'école et la crèche</strong> — la <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a> y tient le premier rôle, avec un pic en mai-juin. <a href="/blog/danger/que-faire-autour-d-une-ecole/">Voir la marche à suivre</a>.</li>
        <li><strong>Les parcs et squares</strong> — signalez au gestionnaire tout nid constaté, avec photo et localisation précise.</li>
        <li><strong>Les promenades en forêt</strong> — de janvier à mars, les allées sableuses et ensoleillées sont des zones de procession. Une file est visible de loin et facile à contourner.</li>
      </ul>
      <p><a href="/chenilles-processionnaires-enfant/">Voir la page complète enfants et
      processionnaires</a>.</p>` }
  ],
  faq: [
    { q: "Une seule chenille peut-elle provoquer une réaction ?",
      a: `<p>Oui. Une chenille manipulée libère une quantité importante de poils, et une réaction cutanée
      marquée peut suivre un contact unique. L'intensité varie beaucoup d'un enfant à l'autre.</p>` },
    { q: "Faut-il vider le bac à sable ?",
      a: `<p>Pas systématiquement. S'il a servi de site d'enfouissement ou s'il se trouve sous un arbre
      fortement infesté, le remplacement du sable est la solution la plus simple. Dans le doute, couvrez-le
      et faites examiner la situation.</p>` },
    { q: "Combien de temps faut-il attendre avant de laisser rejouer les enfants ?",
      a: `<p>Après une intervention, le temps que la retombée des poils se termine et que le sol soit
      contrôlé. Ce délai est indiqué sur place : il dépend de la hauteur du nid retiré, du vent et de la
      surface concernée.</p>` },
    { q: "Les plaques apparaissent-elles immédiatement ?",
      a: `<p>Le plus souvent en quelques minutes à quelques heures. Un décalage est possible, ce qui
      explique que le lien avec la chenille ne soit pas toujours fait.</p>` }
  ],
  related: [
    { url: '/chenilles-processionnaires-enfant/', label: 'Enfants et processionnaires', hint: 'Page de référence' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Le contexte collectif' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Sécuriser un jardin familial' }
  ]
};
