import { table, note } from '../../../lib/render.mjs';

export default {
  slug: 'quand-traiter-chenilles-processionnaires',
  category: 'traitement',
  title: 'Quand traiter les chenilles processionnaires ?',
  description: "Calendrier mois par mois : quelle action est possible à quelle période, sur pin et sur chêne — et ce qui ne sert strictement à rien.",
  h1: 'Quand traiter les chenilles processionnaires ?',
  excerpt: "Les deux espèces sont décalées de six mois. Un mauvais mois, et la même intervention devient inutile, plus chère, ou les deux.",
  datePublished: '2026-07-02',
  dateModified: '2026-09-19',
  lead: `C'est la question la plus utile qu'on puisse se poser avant d'appeler qui que ce soit. La réponse
  dépend entièrement de deux éléments : l'essence de l'arbre, et le mois.`,
  answer: `<p>Sur <strong>pin et cèdre</strong> : traitement biologique en <strong>septembre-octobre</strong>,
  échenillage de <strong>novembre à février</strong>, collier de piégeage <strong>avant la descente</strong>,
  piège à phéromone en <strong>été</strong>. Sur <strong>chêne</strong> : traitement biologique en
  <strong>avril</strong>, aspiration des nids de <strong>mai à juillet</strong>, retrait des anciens nids en
  <strong>hiver</strong>.</p>`,
  sections: [
    { h2: 'Le calendrier, mois par mois',
      html: `
      ${table(
        ['Mois', 'Sur pin et cèdre', 'Sur chêne'],
        [
          ['Janvier', 'Échenillage ; pose de colliers ; début possible des processions', "Retrait des anciens nids ; inventaire"],
          ['Février', 'Échenillage tardif ; processions fréquentes ; colliers indispensables', "Retrait des anciens nids ; préparation de la campagne"],
          ['Mars', "Processions ; intervention portant aussi sur le sol", "Préparation ; surveillance du débourrement"],
          ['Avril', 'Fin de saison ; nids souvent vides', '<strong>Traitement biologique sur jeunes larves</strong>'],
          ['Mai', '—', '<strong>Inspection des troncs ; premiers nids ; aspiration</strong>'],
          ['Juin', '—', '<strong>Aspiration des nids ; balisage des zones</strong>'],
          ['Juillet', 'Début du vol ; pose des pièges à phéromone', 'Fin de saison urticante ; nids encore en place'],
          ['Août', 'Vol ; éclosions possibles en fin de mois', 'Nymphose puis envol'],
          ['Septembre', '<strong>Traitement biologique sur jeunes larves</strong>', 'Ponte ; rien à faire sur les chenilles'],
          ['Octobre', '<strong>Traitement biologique ; construction des nids</strong>', 'Retrait des anciens nids'],
          ['Novembre', '<strong>Échenillage des nids d\'hiver</strong>', 'Retrait des anciens nids'],
          ['Décembre', '<strong>Échenillage ; pose de colliers</strong>', 'Inventaire pour le printemps']
        ],
        'Ce qui est réellement possible chaque mois')}` },

    { h2: 'Les trois meilleures fenêtres',
      html: `
      <p>Si l'on devait n'en retenir que trois, ce seraient celles-là.</p>
      <ol>
        <li><strong>Septembre-octobre sur pin.</strong> Les chenilles viennent d'éclore, elles ne sont pas encore urticantes et elles s'alimentent activement. Le <a href="/traitement-preventif/">traitement biologique</a> est alors le plus efficace, le plus discret et le moins coûteux. C'est aussi la fenêtre la plus souvent ratée, parce qu'à ce stade rien n'est visible depuis le sol.</li>
        <li><strong>Novembre-janvier sur pin.</strong> Le nid est constitué, bien visible, et la colonie est groupée à l'intérieur. L'<a href="/echenillage/">échenillage</a> donne un résultat immédiat et vérifiable, avant toute descente.</li>
        <li><strong>Avril sur chêne.</strong> L'éclosion suit le débourrement et les larves sont encore jeunes. Un traitement bien calé évite la formation des nids — donc l'aspiration en pleine période urticante, le balisage et la perturbation d'usage.</li>
      </ol>
      ${note(`<p>Ces trois fenêtres ont un point commun : elles supposent d'<strong>anticiper</strong>. On
      ne décide pas en avril de traiter en avril. La décision se prend un à deux trimestres plus tôt, sur la
      base de l'historique des arbres.</p>`, 'Le vrai facteur limitant')}` },

    { h2: 'Ce qui ne sert à rien',
      html: `
      <ul class="plain">
        <li><strong>Traiter un chêne en hiver contre les chenilles</strong> — l'espèce n'existe alors qu'à l'état d'œuf, sur des rameaux fins et en hauteur. Seul le retrait des anciens nids a un intérêt.</li>
        <li><strong>Pulvériser un produit biologique sur un nid d'hiver de pin</strong> — les chenilles sont grandes, protégées par la soie et consomment peu. Le produit agit par ingestion : l'effet est marginal.</li>
        <li><strong>Poser un collier en mars</strong> — les processions ont généralement commencé. Le dispositif arrive après.</li>
        <li><strong>Attendre l'été pour un pin</strong> — le nid est vide, les chenilles sont dans le sol. Le retrait reste utile, mais le problème a changé de nature.</li>
        <li><strong>Espérer qu'un hiver froid règle la question</strong> — le nid protège thermiquement la colonie.</li>
      </ul>` },

    { h2: 'Comment caler la date exactement',
      html: `
      <p>Les fourchettes ci-dessus sont des repères, pas des dates. Deux éléments permettent d'affiner.</p>
      <p><strong>Pour le pin</strong>, la date du traitement d'automne se cale sur le vol de l'été
      précédent : un <a href="/piegeage-chenilles-processionnaires/">piège à phéromone</a> posé en juin
      indique quand les papillons ont volé, donc quand les éclosions auront lieu. C'est ce qui transforme
      une intervention approximative en intervention calée.</p>
      <p><strong>Pour le chêne</strong>, tout dépend du débourrement. Une exposition sud, un coteau bien
      orienté ou un secteur urbain plus chaud peuvent avancer l'éclosion de plusieurs jours sur un fond de
      vallée. La date se confirme en mars, par observation.</p>
      <p>C'est pourquoi nous annonçons une fourchette au moment du devis, et une date ferme quelques
      semaines avant l'intervention.</p>` },

    { h2: 'Et si on est hors fenêtre ?',
      html: `
      <p>On intervient quand même, mais la méthode change — et il faut le savoir avant d'appeler.</p>
      <p>Un nid signalé en mars sur un pin ne relève plus du même chantier qu'en décembre : la descente est
      engagée, une partie de la colonie est au sol, et l'intervention porte autant sur le terrain que sur
      l'arbre. C'est plus long, plus contraignant, et le jardin reste inutilisable plus longtemps.</p>
      <p>Un nid signalé en juin sur un chêne se traite par aspiration, en pleine période urticante, avec
      balisage et horaires décalés si le lieu est fréquenté.</p>
      <p>Dans les deux cas, la discussion se termine sur la même question : que met-on en place pour que la
      saison prochaine se passe autrement ?</p>` }
  ],
  faq: [
    { q: "Peut-on traiter toute l'année ?",
      a: `<p>On peut intervenir toute l'année, mais pas avec la même efficacité ni le même coût. Chaque mois
      n'ouvre pas les mêmes prises sur l'insecte.</p>` },
    { q: "Les dates sont-elles les mêmes partout en Île-de-France ?",
      a: `<p>À quelques jours près. Les secteurs urbains et les versants bien exposés sont un peu en avance
      sur les plateaux et les fonds de vallée. L'écart reste faible au regard de la variabilité d'une année
      à l'autre.</p>` },
    { q: "Le réchauffement change-t-il le calendrier ?",
      a: `<p>Des hivers plus doux tendent à avancer les processions et à améliorer la survie des colonies.
      C'est une des raisons de l'expansion de la processionnaire du pin vers le nord. Cela renforce
      l'intérêt d'observer plutôt que d'appliquer un calendrier figé.</p>` },
    { q: "Quand faut-il décider ?",
      a: `<p>Pour le pin, en été, pour une application en septembre-octobre. Pour le chêne, en hiver, pour
      une application en avril. Décider en pleine saison d'activité, c'est déjà du curatif.</p>` }
  ],
  related: [
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Toutes les méthodes' },
    { url: '/traitement-processionnaire-du-pin/', label: 'Traitement du pin', hint: 'Protocole par saison' },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: 'Fenêtre de printemps' }
  ]
};
