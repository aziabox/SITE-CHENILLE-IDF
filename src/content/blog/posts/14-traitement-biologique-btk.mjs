import { note, table, safety } from '../../../lib/render.mjs';

export default {
  slug: 'traitement-biologique-btk',
  category: 'traitement',
  title: 'Le traitement biologique contre les processionnaires expliqué',
  description: "Comment agit Bacillus thuringiensis contre les processionnaires, quand l'appliquer, dans quelles conditions météo, et quelles sont ses limites.",
  h1: 'Le traitement biologique contre les processionnaires, expliqué',
  excerpt: "Une bactérie, un mode d'action par ingestion, et une fenêtre de quelques semaines. Bien calé, c'est le traitement le plus efficace et le moins perturbant. Mal calé, il ne sert à rien.",
  datePublished: '2026-07-08',
  dateModified: '2026-09-19',
  lead: `C'est la méthode dont on parle le moins et qui donne pourtant les meilleurs résultats — à une
  condition : être appliquée quand les chenilles sont jeunes et mangent beaucoup.`,
  answer: `<p>Le traitement biologique repose sur <em>Bacillus thuringiensis</em> var. <em>kurstaki</em>
  (Btk), une bactérie produisant des cristaux toxiques pour les larves de lépidoptères
  <strong>qui les ingèrent</strong>. Il s'applique sur le feuillage, sur des <strong>larves jeunes et
  actives</strong> : en septembre-octobre pour la processionnaire du pin, en avril pour celle du chêne.
  Il n'agit ni par contact, ni sur les chenilles âgées protégées dans un nid.</p>`,
  sections: [
    { h2: 'Comment ça marche',
      html: `
      <p>Le Btk est un produit de biocontrôle. Pulvérisé sur le feuillage, il est ingéré par les chenilles
      en même temps que les aiguilles ou les feuilles. Dans leur système digestif, les cristaux produits par
      la bactérie sont activés et perforent la paroi intestinale.</p>
      <p>Les larves cessent alors de s'alimenter, puis meurent en quelques jours. Il n'y a donc pas d'effet
      spectaculaire immédiat : un contrôle visuel quelques jours après l'application permet de vérifier
      l'effet.</p>
      <p>Trois conséquences découlent directement de ce mode d'action :</p>
      <ul class="plain">
        <li>Il faut que la chenille <strong>mange</strong> — donc qu'elle soit en phase active d'alimentation.</li>
        <li>Il faut que le produit soit <strong>sur le feuillage</strong> qu'elle consomme — la pulvérisation doit atteindre la zone où la colonie s'alimente.</li>
        <li>Il n'agit pas sur une chenille <strong>protégée dans un nid</strong>, ni sur un œuf, ni sur une chrysalide.</li>
      </ul>` },

    { h2: 'La fenêtre d\'application',
      html: `
      ${table(
        ['Espèce', "Fenêtre", 'Pourquoi'],
        [
          ['Processionnaire du pin', 'Septembre — octobre', "Larves des premiers stades, non encore urticantes, en alimentation intensive, avant la formation du nid définitif"],
          ['Processionnaire du chêne', 'Avril', "Éclosion au débourrement des feuilles ; fenêtre courte avant les stades urticants"]
        ],
        'Deux fenêtres, courtes, à ne pas manquer')}
      ${note(`<p>La date précise ne se fixe pas sur un calendrier mais sur l'observation. Pour le pin, un
      <a href="/piegeage-chenilles-processionnaires/">piège à phéromone</a> posé l'été précédent indique
      quand le vol a eu lieu, donc quand les éclosions auront lieu. Pour le chêne, c'est le débourrement
      réel des arbres concernés qui commande.</p>`, 'Observer plutôt qu\'appliquer un calendrier')}` },

    { h2: 'Les conditions météo',
      html: `
      <p>Le Btk est un produit biologique : il se dégrade. Les conditions d'application ne sont pas un
      détail de confort, elles conditionnent l'efficacité.</p>
      <ul class="plain">
        <li><strong>Températures douces</strong> — les chenilles doivent être actives et s'alimenter.</li>
        <li><strong>Feuillage sec au moment de l'application.</strong></li>
        <li><strong>Pas de pluie dans les heures qui suivent</strong> — le produit serait lessivé avant ingestion.</li>
        <li><strong>Vent faible</strong> — pour limiter la dérive et atteindre le feuillage visé.</li>
        <li><strong>Lumière</strong> — le rayonnement dégrade le produit : les applications de fin de journée sont souvent préférées.</li>
      </ul>
      <p>C'est pourquoi un traitement biologique se planifie avec une fourchette de dates plutôt qu'avec une
      date ferme, et qu'un report météo est possible jusqu'au dernier moment.</p>` },

    { h2: 'Ses limites, dites honnêtement',
      html: `
      <p>Trois limites méritent d'être connues avant de choisir cette méthode.</p>
      <p><strong>Il n'est pas sélectif de la seule processionnaire.</strong> Le Btk agit sur les larves de
      lépidoptères qui ingèrent le produit : d'autres chenilles présentes sur l'arbre traité peuvent être
      affectées. C'est pourquoi nous l'appliquons sur les arbres concernés, à la bonne période, et jamais en
      couverture générale d'un jardin ou d'un espace vert.</p>
      <p><strong>Il ne règle pas un nid déjà constitué.</strong> En décembre sur un pin, les chenilles sont
      grandes, protégées par la soie et consomment peu : l'effet serait marginal. C'est alors
      l'<a href="/echenillage/">échenillage</a> qui s'impose.</p>
      <p><strong>Il demande un matériel adapté à la hauteur.</strong> Traiter un chêne de vingt-cinq mètres
      suppose un équipement capable d'atteindre le houppier, ce qui n'est pas possible partout.</p>
      ${safety(`<p>Comme tout produit phytopharmaceutique, il s'applique conformément à son autorisation :
      respect des doses, des conditions d'emploi et des délais de rentrée. Dans un établissement recevant du
      public — école, crèche, parc —, l'application se cale sur une période de fermeture.</p>`,
      'Conditions d\'emploi')}` },

    { h2: 'Pourquoi c\'est souvent le meilleur choix',
      html: `
      <p>Quand la fenêtre est respectée, le traitement biologique présente un avantage que les autres
      méthodes n'ont pas : <strong>il évite le problème plutôt que de le réparer</strong>.</p>
      <p>Une colonie supprimée à l'état de jeunes larves ne construit pas de nid. Sans nid, il n'y a ni
      poils accumulés, ni procession, ni balisage, ni zone de jardin inutilisable, ni sol contaminé. Pour un
      gestionnaire d'espace public, la différence est considérable : une pulvérisation en avril hors
      présence du public, contre une aspiration de nids en juin avec périmètre de sécurité.</p>
      <p>C'est aussi, dans la plupart des cas, la méthode la moins coûteuse par arbre traité, parce qu'elle
      permet de traiter plusieurs sujets en une seule passe.</p>
      <p><a href="/traitement-preventif/">Voir la page traitement préventif</a>.</p>` }
  ],
  faq: [
    { q: "Le Btk est-il dangereux pour les humains ou les animaux ?",
      a: `<p>Il agit spécifiquement sur le système digestif des larves de lépidoptères et n'a pas d'effet
      sur les mammifères, les oiseaux ni les abeilles adultes. Il s'applique néanmoins selon les conditions
      d'emploi de son autorisation, délai de rentrée compris.</p>` },
    { q: "Combien de temps après le traitement voit-on un effet ?",
      a: `<p>Les larves cessent de s'alimenter rapidement et meurent en quelques jours. Un contrôle visuel
      une semaine après l'application permet de vérifier le résultat.</p>` },
    { q: "Faut-il répéter l'application ?",
      a: `<p>Selon la pression et l'étalement des éclosions, une seconde application peut être utile. Cela
      se décide au contrôle, pas à l'avance.</p>` },
    { q: "Peut-on traiter soi-même avec un produit du commerce ?",
      a: `<p>Des produits de biocontrôle existent pour les particuliers, mais la difficulté n'est pas le
      produit : c'est d'atteindre le feuillage à la bonne hauteur, au bon moment, dans les bonnes
      conditions. Sur un arbre de plus de quelques mètres, un pulvérisateur de jardin n'y suffit pas.</p>` }
  ],
  related: [
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Page de référence' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Toutes les méthodes', hint: 'Comparatif' },
    { url: '/blog/traitement/quand-traiter-chenilles-processionnaires/', label: 'Quand traiter ?', hint: 'Le calendrier complet' }
  ]
};
