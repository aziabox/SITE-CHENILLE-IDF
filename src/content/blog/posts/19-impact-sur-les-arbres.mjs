import { table, note } from '../../../lib/render.mjs';

export default {
  slug: 'impact-sur-la-sante-des-arbres',
  category: 'arbres',
  title: 'Les processionnaires tuent-elles les arbres ?',
  description: "Ce que la défoliation fait réellement à un pin ou à un chêne : croissance, réserves, vulnérabilité, et quand l'arbre est vraiment menacé.",
  h1: 'Les chenilles processionnaires tuent-elles les arbres ?',
  excerpt: "Non, dans la très grande majorité des cas. Mais elles affaiblissent, et c'est le cumul avec d'autres facteurs qui devient problématique.",
  datePublished: '2026-07-22',
  dateModified: '2026-09-19',
  lead: `C'est la question qui vient juste après « est-ce dangereux pour nous ». La réponse mérite d'être
  nuancée : l'arbre n'est pas en danger immédiat, mais il n'en sort pas indemne non plus.`,
  answer: `<p><strong>Non, sauf cas particuliers.</strong> Un pin ou un chêne en bonne santé survit à une
  défoliation, même marquée, et refeuille. L'impact se mesure en <strong>ralentissement de croissance</strong>
  et en <strong>vulnérabilité accrue</strong> face à la sécheresse et aux ravageurs secondaires. Le risque
  de dépérissement apparaît lorsque les défoliations se répètent sur un arbre déjà stressé.</p>`,
  sections: [
    { h2: 'Ce que la défoliation coûte à l\'arbre',
      html: `
      <p>Les feuilles et les aiguilles produisent, par photosynthèse, les sucres qui alimentent la
      croissance et constituent les réserves. Les supprimer revient à couper l'approvisionnement pendant
      une période donnée.</p>
      <p>L'arbre compense en puisant dans ses réserves, puis en refeuillant. Cette opération a un coût :
      moins de bois produit dans l'année, des réserves entamées, une capacité de réaction réduite si un
      autre stress survient.</p>
      ${table(
        ['Niveau de défoliation', 'Effet habituel'],
        [
          ['Quelques rameaux', 'Négligeable ; compensation sans conséquence visible'],
          ['Partie du houppier', 'Ralentissement de croissance sur la saison'],
          ['Défoliation importante, une année', "Refeuillage, réserves entamées, arbre affaibli temporairement"],
          ['Défoliation répétée plusieurs années', 'Perte de vigueur durable, sensibilité accrue'],
          ['Défoliation répétée sur arbre déjà stressé', "Risque réel de dépérissement"]
        ],
        "L'impact dépend surtout de la répétition, pas de l'intensité d'une année")}` },

    { h2: 'Pin et chêne ne réagissent pas pareil',
      html: `
      <p><strong>Le chêne</strong> est un feuillu : il perd ses feuilles chaque année et sait en refaire. Une
      défoliation de printemps est compensée par un second débourrement estival, phénomène courant et bien
      documenté. Le coût énergétique est réel, mais la capacité de récupération est bonne.</p>
      <p><strong>Le pin</strong> est un conifère à aiguilles persistantes, conservées plusieurs années. Une
      défoliation lui retire donc non seulement la production de l'année, mais aussi un capital constitué
      sur plusieurs saisons. La récupération est plus lente, ce qui explique qu'un pin défolié garde
      longtemps une silhouette clairsemée.</p>
      ${note(`<p>Sur pin, le dégât est généralement <strong>localisé</strong> autour des nids : la colonie
      consomme les aiguilles à proximité de son abri. C'est ce qui produit ces rameaux nus au milieu d'un
      arbre par ailleurs fourni, très caractéristiques.</p>`)}` },

    { h2: 'Quand l\'arbre est réellement menacé',
      html: `
      <p>Trois configurations méritent une attention particulière, parce que les facteurs s'additionnent.</p>
      <ul class="plain">
        <li><strong>Arbre déjà stressé</strong> — sécheresse répétée, sol tassé par le passage, racines endommagées par des travaux, plantation en bac ou en fosse trop petite.</li>
        <li><strong>Défoliation sur plusieurs années consécutives</strong> — les réserves n'ont pas le temps de se reconstituer.</li>
        <li><strong>Présence de ravageurs secondaires</strong> — scolytes et autres organismes qui s'installent sur un arbre affaibli, et qui, eux, peuvent le tuer.</li>
      </ul>
      <p>Dans ces cas, le traitement des processionnaires s'accompagne utilement d'un diagnostic sanitaire
      de l'arbre : le problème n'est alors plus seulement la chenille.</p>` },

    { h2: 'Faut-il abattre un arbre infesté ?',
      html: `
      <p>Non, dans la quasi-totalité des situations, et pour trois raisons.</p>
      <ol>
        <li><strong>L'infestation est saisonnière</strong> et n'entraîne pas la mort de l'arbre dans la très grande majorité des cas.</li>
        <li><strong>L'abattage ne protège de rien</strong> : les papillons volent sur plusieurs centaines de mètres, et les arbres voisins resteront concernés.</li>
        <li><strong>Le sol reste contaminé</strong> : les poils déjà tombés ne disparaissent pas avec l'arbre, et l'abattage lui-même disperse massivement ce qui reste dans le houppier.</li>
      </ol>
      <p>L'abattage ne se discute que pour un sujet déjà dépérissant pour d'autres raisons, et dans ce cas
      le retrait des nids <strong>précède</strong> le chantier : abattre un arbre porteur sans traitement
      préalable expose fortement l'équipe et contamine toute la zone.</p>` },

    { h2: 'Et pour le patrimoine arboré d\'une collectivité ?',
      html: `
      <p>À l'échelle d'un parc ou d'un alignement, la question change de nature : ce n'est plus la survie
      d'un arbre qui est en jeu, mais la <strong>trajectoire du patrimoine</strong>.</p>
      <p>Des défoliations répétées sur un alignement homogène — mêmes essences, même âge, même exposition —
      peuvent accélérer le vieillissement de l'ensemble et rapprocher l'échéance du renouvellement. C'est un
      argument qui pèse dans un arbitrage budgétaire, au même titre que l'enjeu sanitaire.</p>
      <p>C'est aussi une raison de fond pour diversifier les essences lors des renouvellements : un
      alignement composé de plusieurs essences ne se défolie pas en bloc.</p>
      <p><a href="/collectivites/">Voir notre page collectivités</a>.</p>` }
  ],
  faq: [
    { q: "Mon pin est complètement roussi, va-t-il mourir ?",
      a: `<p>Le plus souvent non. Il repartira, plus lentement qu'un feuillu, et gardera une silhouette
      clairsemée quelque temps. Si le phénomène se répète plusieurs années, un diagnostic sanitaire est
      justifié.</p>` },
    { q: "Faut-il fertiliser un arbre défolié ?",
      a: `<p>Rien ne l'impose. Un apport inadapté peut même aggraver un déséquilibre. Ce qui aide
      réellement un arbre affaibli, c'est un sol non tassé, un paillage et, en période sèche, un arrosage
      profond et espacé.</p>` },
    { q: "Peut-on tailler un arbre infesté ?",
      a: `<p>Pas avant traitement. Une taille sur un arbre porteur expose directement l'équipe et disperse
      les poils. Le retrait des nids doit précéder tout chantier d'élagage.</p>` },
    { q: "Les processionnaires attaquent-elles les jeunes arbres ?",
      a: `<p>Un jeune sujet offre peu de prise à une colonie et est rarement colonisé. Le sujet se pose
      lorsque l'arbre atteint une taille et une exposition qui en font un site de ponte attractif.</p>` }
  ],
  related: [
    { url: '/blog/arbres/savoir-si-un-arbre-est-infeste/', label: 'Savoir si un arbre est infesté', hint: 'Les sept signes' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Élagage et chantiers sur arbres porteurs' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Gestion du patrimoine arboré' }
  ]
};
