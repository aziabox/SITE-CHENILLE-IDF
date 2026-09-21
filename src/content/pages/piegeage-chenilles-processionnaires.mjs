import { standardPage } from '../../lib/layout.mjs';
import { figure, note, table, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/piegeage-chenilles-processionnaires/',
  title: 'Piégeage des chenilles processionnaires : colliers et phéromones',
  description: "Collier sur tronc et piège à phéromone : comment fonctionnent les deux dispositifs, quand les poser, et ce qu'ils ne règlent pas.",
  h1: 'Piégeage des chenilles processionnaires',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Traitement', url: '/traitement-chenilles-processionnaires/' },
          { name: 'Piégeage', url: '/piegeage-chenilles-processionnaires/' }],
  datePublished: '2026-03-06',
  dateModified: '2026-09-05',
  service: {
    name: 'Piégeage des chenilles processionnaires',
    type: 'Pose et suivi de pièges à collier et de pièges à phéromone',
    description: "Pose, réglage et suivi de colliers de piégeage sur tronc et de pièges à phéromone contre la processionnaire du pin, en Île-de-France."
  },
  lead: `Le piégeage joue sur le comportement de l'insecte plutôt que sur un produit. Deux dispositifs, deux
  saisons, deux objectifs différents — et une même condition de réussite : la pose.`,
  answer: `<p>Deux pièges existent contre la <strong>processionnaire du pin</strong>. Le <strong>collier de
  piégeage</strong>, posé sur le tronc en hiver, intercepte les chenilles qui descendent et les dirige vers
  un sac fermé. Le <strong>piège à phéromone</strong>, posé en été, capture les papillons mâles et réduit les
  pontes. Aucun des deux ne remplace le retrait d'un nid déjà installé ; ils le complètent.</p>`,
  sections: [
    { h2: 'Le collier de piégeage : intercepter la descente',
      tocLabel: 'Collier sur tronc',
      html: `
      <p>Le principe exploite une contrainte de l'insecte : pour aller s'enfouir, la colonie doit
      <strong>descendre le long du tronc</strong>, en file continue. Un collier étanche ceinture le tronc et
      empêche les chenilles de poursuivre leur chemin. Elles suivent alors la seule voie disponible, une
      gouttière qui les conduit dans un sac de collecte fermé.</p>
      ${figure({ src: '/assets/img/piegeage-collier-schema.svg', width: 960, height: 440,
        alt: "Schéma d'un collier étanche ceinturant un tronc de pin, avec gouttière dirigeant les chenilles vers un sac de collecte",
        caption: "Toute la réussite tient à l'étanchéité : une chenille qui trouve un passage sous le collier atteint le sol." })}
      <p>Bien posé, le dispositif est remarquablement efficace. Mal posé, il ne sert à rien. Les deux
      défauts que nous corrigeons le plus souvent sur des installations grand public sont un collier posé
      trop tard — après le début des processions — et un joint mal réalisé sur une écorce crevassée, ce qui
      laisse un passage sous la bande.</p>
      ${steps([
        { title: "Préparer l'écorce", body: `<p>Sur un pin adulte à écorce profondément crevassée, les creux se
          comblent avec un mastic adapté pour obtenir une surface continue. C'est l'étape la plus souvent
          escamotée.</p>` },
        { title: 'Poser le collier', body: `<p>À hauteur d'homme en général, sous les premières branches, en
          serrant sans blesser le cambium. Le collier doit épouser le tronc sur toute sa circonférence.</p>` },
        { title: 'Régler la descente', body: `<p>La gouttière est orientée vers le bas et le sac fixé en dessous,
          hors de portée d'un enfant ou d'un animal.</p>` },
        { title: 'Suivre et relever', body: `<p>Le sac se contrôle régulièrement pendant toute la période de
          descente, et se remplace lorsqu'il se remplit. Un sac saturé fait échouer le dispositif.</p>` },
        { title: 'Déposer en fin de saison', body: `<p>Une fois les processions terminées, le collier est retiré,
          le sac évacué, et l'arbre libéré. Laisser un collier à demeure toute l'année ne présente pas
          d'intérêt et peut marquer l'écorce.</p>` }
      ])}` },

    { h2: 'Le piège à phéromone : agir sur la génération suivante',
      tocLabel: 'Piège à phéromone',
      html: `
      <p>En été, les papillons mâles cherchent les femelles en suivant une phéromone sexuelle. Le piège
      diffuse une phéromone de synthèse depuis une capsule et capture les mâles attirés, dans un entonnoir
      ou un bac.</p>
      ${figure({ src: '/assets/img/piege-pheromone-schema.svg', width: 960, height: 380,
        alt: "Schéma d'un piège à entonnoir avec capsule de phéromone attirant des papillons mâles vers un bac de capture",
        caption: "Le piège à phéromone est d'abord un outil de mesure : il dit quand le vol commence et quelle est sa pression." })}
      <p>Son intérêt est double. D'une part, il <strong>renseigne</strong> : la courbe de capture indique le
      début, le pic et la fin du vol, ce qui permet de caler précisément la date du traitement biologique
      d'automne. D'autre part, il <strong>réduit les accouplements</strong>, donc les pontes, donc la
      population de l'hiver suivant.</p>
      ${note(`<p>Son effet est différé d'une saison. Poser un piège à phéromone en juillet ne change rien
      aux nids déjà présents sur l'arbre, et ne dispense pas d'un <a href="/echenillage/">échenillage</a>.
      C'est un investissement sur l'année suivante.</p>`, 'Ce qu\'il ne fait pas')}` },

    { h2: 'Comparaison des deux dispositifs',
      html: `
      ${table(
        ['', 'Collier sur tronc', 'Piège à phéromone'],
        [
          ['Cible', 'Chenilles en descente', 'Papillons mâles en vol'],
          ['Saison de pose', 'Décembre à février, avant la descente', 'Juin, avant le début du vol'],
          ['Effet', 'Immédiat, sur la saison en cours', "Différé, sur la génération suivante"],
          ['Protège le sol', 'Oui, c\'est son objet principal', 'Non'],
          ['Espèce concernée', 'Processionnaire du pin uniquement', 'Processionnaire du pin uniquement'],
          ['Suivi nécessaire', 'Contrôle du sac pendant toute la descente', 'Remplacement de la capsule en cours de saison']
        ],
        'Deux pièges, deux logiques')}
      <p>La <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a> n'est concernée par
      aucun des deux : elle ne descend pas au sol, et les pièges à phéromone disponibles pour cette espèce
      relèvent du suivi scientifique plus que de la lutte opérationnelle. Sur chêne, le retrait des nids
      reste la réponse.</p>` },

    { h2: 'Dans quels cas le piégeage est la bonne réponse',
      html: `
      <ul class="plain">
        <li><strong>Nid inaccessible</strong> — un nid à vingt mètres sur un pin sans accès nacelle : le collier protège le sol même si le nid reste en place.</li>
        <li><strong>Pression de voisinage</strong> — un jardin entouré de pins infestés chez les voisins : l'interception limite les processions traversantes.</li>
        <li><strong>Sécurisation d'un usage</strong> — une aire de jeux, un chenil, un pré à chevaux : on protège la zone d'usage plutôt que l'arbre.</li>
        <li><strong>Suivi pluriannuel</strong> — sur un patrimoine arboré, le piège à phéromone fournit une donnée objective pour décider d'une campagne.</li>
      </ul>
      <p>À l'inverse, sur un pin isolé portant deux nids accessibles à la perche au-dessus d'une terrasse,
      l'échenillage règle la question plus directement.</p>` }
  ],
  faq: [
    { q: "Un collier de piégeage suffit-il à protéger mon jardin ?",
      a: `<p>Il protège le sol autour de l'arbre équipé, ce qui est déjà beaucoup si vous avez un chien ou
      des enfants. Il ne supprime pas la colonie, et les poils continuent de tomber du nid. Pour un jardin
      réellement sécurisé, il se combine à un retrait de nid.</p>` },
    { q: "Peut-on poser un collier sur un chêne ?",
      a: `<p>Cela n'a pas d'utilité : les chenilles du chêne ne descendent pas au sol pour se nymphoser.
      Un collier posé sur un chêne infesté ne capturera pratiquement rien.</p>` },
    { q: "À quelle fréquence faut-il relever le sac ?",
      a: `<p>Pendant la période de descente, un contrôle régulier est nécessaire — en pratique toutes les
      deux à trois semaines, plus souvent après une série de journées douces qui déclenchent les
      processions. Un sac plein cesse de fonctionner.</p>` },
    { q: "Le piège à phéromone attire-t-il davantage de papillons dans mon jardin ?",
      a: `<p>C'est une inquiétude fréquente. Le piège attire effectivement des mâles dans son rayon d'action,
      mais il les capture : il ne crée pas de population supplémentaire. Le placement reste toutefois à
      réfléchir, à distance des zones de séjour.</p>` },
    { q: "Les pièges sont-ils dangereux pour les animaux domestiques ?",
      a: `<p>Le sac de collecte doit être placé hors de portée : il contient des chenilles urticantes
      vivantes. C'est un point que nous vérifions systématiquement lorsqu'un chien a accès au pied de
      l'arbre.</p>` }
  ],
  cta: {
    title: "Faire poser un piège avant la descente",
    text: `La pose d'un collier se décide en décembre-janvier, pas en mars. Si vous avez eu des processions
    l'an dernier sur le même arbre, c'est le moment de le prévoir.`,
    primary: 'Demander une pose de piège'
  },
  related: [
    { url: '/echenillage/', label: 'Échenillage', hint: 'Supprimer le nid lui-même' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Ce qui se combine au piégeage' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: 'Le comportement exploité par le piège' },
    { url: '/blog/traitement/piegeage-comment-ca-fonctionne/', label: 'Le piégeage expliqué', hint: 'Article détaillé' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Protéger un jardin avec chien ou enfants' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Toutes les méthodes', hint: 'Comparatif complet' }
  ]
});
