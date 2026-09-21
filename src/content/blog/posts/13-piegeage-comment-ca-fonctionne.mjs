import { table, note, steps } from '../../../lib/render.mjs';

export default {
  slug: 'piegeage-comment-ca-fonctionne',
  category: 'traitement',
  title: 'Piégeage des chenilles processionnaires : comment ça fonctionne ?',
  description: "Collier sur tronc et piège à phéromone : principe, pose, suivi et limites. Pourquoi une pose bâclée fait échouer un dispositif très efficace.",
  h1: 'Piégeage des chenilles processionnaires : comment ça fonctionne ?',
  excerpt: "Le piégeage exploite une contrainte de l'insecte plutôt qu'un produit. Bien posé, il est remarquablement efficace ; mal posé, il ne sert strictement à rien.",
  datePublished: '2026-07-06',
  dateModified: '2026-09-19',
  lead: `Deux dispositifs, deux saisons, deux objectifs. L'un protège le sol dès cet hiver, l'autre prépare
  l'année suivante. Aucun des deux ne remplace le retrait d'un nid installé.`,
  answer: `<p>Le <strong>collier de piégeage</strong>, posé sur le tronc en hiver, exploite le fait que la
  colonie doit descendre le long du tronc : une gouttière étanche la dirige vers un sac fermé. Le
  <strong>piège à phéromone</strong>, posé en été, attire et capture les papillons mâles, réduisant les
  pontes de l'année suivante. Les deux ne concernent que la processionnaire du pin.</p>`,
  sections: [
    { h2: 'Le collier : intercepter une obligation biologique',
      html: `
      <p>Le principe est élégant parce qu'il ne laisse aucune alternative à l'insecte. Pour se nymphoser,
      la colonie doit atteindre le sol. Pour atteindre le sol, elle doit descendre le long du tronc, en
      file continue.</p>
      <p>Un collier étanche ceinture le tronc et interrompt ce chemin. Les chenilles suivent alors la seule
      voie disponible — une gouttière qui les conduit dans un sac de collecte fermé, d'où elles ne
      ressortent pas.</p>
      ${note(`<p>Ce dispositif protège le <strong>sol</strong>, pas l'arbre. Le nid reste en place et les
      poils continuent d'en tomber. C'est la solution de référence lorsqu'un nid est hors d'atteinte et
      qu'un chien ou des enfants ont accès au pied de l'arbre.</p>`, 'Ce qu\'il protège exactement')}` },

    { h2: 'La pose, qui fait tout',
      html: `
      <p>Les deux défauts que nous corrigeons le plus souvent sur des installations grand public sont
      toujours les mêmes : une pose trop tardive, et un joint mal réalisé.</p>
      ${steps([
        { title: "Préparer l'écorce", body: `<p>Sur un pin adulte à écorce profondément crevassée, les creux se
          comblent avec un mastic adapté pour obtenir une surface continue. C'est l'étape la plus souvent
          escamotée — et une seule crevasse non comblée suffit à laisser passer la colonie.</p>` },
        { title: 'Poser le collier', body: `<p>À hauteur d'homme en général, sous les premières branches, en
          serrant sans blesser le cambium. Le collier doit épouser le tronc sur toute sa
          circonférence.</p>` },
        { title: 'Régler la descente', body: `<p>La gouttière est orientée vers le bas et le sac fixé en dessous,
          hors de portée d'un enfant ou d'un animal — il contient des chenilles vivantes et urticantes.</p>` },
        { title: 'Suivre et relever', body: `<p>Contrôle régulier pendant toute la période de descente, avec
          remplacement du sac lorsqu'il se remplit. Un sac saturé fait échouer le dispositif.</p>` },
        { title: 'Déposer en fin de saison', body: `<p>Une fois les processions terminées, le collier est retiré et
          le sac évacué. Laisser un collier à demeure toute l'année ne présente pas d'intérêt et peut marquer
          l'écorce.</p>` }
      ])}` },

    { h2: 'Le piège à phéromone : mesurer et réduire',
      html: `
      <p>En été, les papillons mâles cherchent les femelles en suivant une phéromone sexuelle. Le piège
      diffuse une phéromone de synthèse depuis une capsule et capture les mâles attirés.</p>
      <p>Son intérêt est double, et le premier est souvent sous-estimé.</p>
      <ul class="plain">
        <li><strong>Il renseigne.</strong> La courbe de capture indique le début, le pic et la fin du vol. C'est ce qui permet de caler précisément la date du traitement biologique d'automne, au lieu de s'en remettre à un calendrier moyen.</li>
        <li><strong>Il réduit les accouplements</strong>, donc les pontes, donc la population de l'hiver suivant.</li>
      </ul>
      <p>Son effet est différé d'une saison : poser un piège en juillet ne change rien aux nids déjà
      présents sur l'arbre.</p>` },

    { h2: 'Les erreurs de pose que nous corrigeons le plus souvent',
      html: `
      <p>Le collier est un dispositif simple, ce qui donne à penser qu'il est facile à installer. Voici ce
      que nous constatons le plus souvent sur des poses réalisées sans expérience.</p>
      <ol>
        <li><strong>Posé trop tard.</strong> Une installation de mars intervient après les premières
        processions : une partie de la colonie est déjà au sol, et le dispositif ne capture plus grand-chose.</li>
        <li><strong>Écorce non préparée.</strong> Sur un pin adulte, une seule crevasse non comblée laisse
        passer la file entière — les chenilles suivent le fil de soie et trouvent le passage.</li>
        <li><strong>Serrage excessif.</strong> Un collier trop serré blesse le cambium. Un collier trop
        lâche laisse un interstice. Le réglage n'est ni l'un ni l'autre.</li>
        <li><strong>Sac mal orienté.</strong> Une gouttière qui ne descend pas suffisamment, ou un sac posé
        contre le tronc, et les chenilles ressortent.</li>
        <li><strong>Sac jamais relevé.</strong> Un sac saturé cesse de fonctionner. C'est la cause d'échec
        la plus fréquente sur les poses de début de saison.</li>
        <li><strong>Sac à hauteur d'animal.</strong> Il contient des chenilles vivantes et urticantes :
        placé à cinquante centimètres du sol, il devient lui-même un point d'exposition pour un chien.</li>
      </ol>
      <p>Aucune de ces erreurs n'est spectaculaire. Chacune, prise isolément, suffit à rendre le dispositif
      inopérant — ce qui explique les retours déçus que l'on entend parfois sur le piégeage.</p>` },

    { h2: 'Quand le piégeage est la bonne réponse',
      html: `
      <ul class="plain">
        <li><strong>Nid inaccessible</strong> — un pin de vingt mètres sans accès nacelle : le collier protège le sol même si le nid reste en place.</li>
        <li><strong>Pression de voisinage</strong> — un jardin entouré de pins infestés : l'interception limite les processions traversantes.</li>
        <li><strong>Sécurisation d'un usage</strong> — aire de jeux, chenil, pré à chevaux : on protège la zone d'usage plutôt que l'arbre.</li>
        <li><strong>Suivi pluriannuel</strong> — sur un patrimoine arboré, le piège à phéromone fournit une donnée objective pour décider d'une campagne.</li>
      </ul>
      <p>À l'inverse, sur un pin isolé portant deux nids accessibles à la perche au-dessus d'une terrasse,
      l'<a href="/echenillage/">échenillage</a> règle la question plus directement.</p>
      <p><a href="/piegeage-chenilles-processionnaires/">Voir la page complète sur le piégeage</a>.</p>` }
  ],
  faq: [
    { q: "Un collier suffit-il à protéger un jardin ?",
      a: `<p>Il protège le sol autour de l'arbre équipé, ce qui est déjà beaucoup avec un chien ou des
      enfants. Il ne supprime pas la colonie, et les poils continuent de tomber du nid.</p>` },
    { q: "Peut-on poser un collier sur un chêne ?",
      a: `<p>Cela n'a pas d'utilité : les chenilles du chêne ne descendent pas au sol pour se nymphoser.
      Un collier posé sur un chêne ne capturera pratiquement rien.</p>` },
    { q: "À quelle fréquence relever le sac ?",
      a: `<p>Toutes les deux à trois semaines pendant la période de descente, et plus souvent après une
      série de journées douces qui déclenchent les processions.</p>` },
    { q: "Le piège à phéromone attire-t-il plus de papillons chez moi ?",
      a: `<p>Il attire des mâles dans son rayon d'action, mais il les capture : il ne crée pas de
      population supplémentaire. Son placement se réfléchit néanmoins, à distance des zones de séjour.</p>` }
  ],
  related: [
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Page de référence' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: 'Le comportement exploité' },
    { url: '/chenilles-processionnaires-chien/', label: 'Chiens', hint: 'Le cas qui justifie le collier' }
  ]
};
