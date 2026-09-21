import { table, note, safety } from '../../../lib/render.mjs';

export default {
  slug: 'reconnaitre-chenille-processionnaire',
  category: 'identifier',
  title: 'Comment reconnaître une chenille processionnaire ?',
  description: "Trois critères suffisent : le déplacement en file, la vie en colonie et l'arbre hôte. Et les cinq chenilles inoffensives que l'on confond avec elles.",
  h1: 'Comment reconnaître une chenille processionnaire ?',
  excerpt: "Le comportement compte davantage que la couleur. Trois critères permettent de trancher sans s'approcher, et cinq chenilles inoffensives sont régulièrement confondues avec elles.",
  datePublished: '2026-06-10',
  dateModified: '2026-09-19',
  lead: `Chaque printemps, des chenilles parfaitement inoffensives sont détruites par précaution, tandis que
  de vraies processionnaires passent inaperçues. Trois critères d'observation, applicables depuis le sol,
  permettent de faire la différence.`,
  answer: `<p>Une chenille processionnaire se reconnaît à trois signes : elle se déplace
  <strong>en file indienne continue</strong>, chaque chenille touchant celle qui la précède ; elle vit
  <strong>en colonie</strong> et n'est jamais isolée ; et elle est associée à un <strong>pin, un cèdre ou un
  chêne</strong>. Une chenille velue seule sur un rosier ou un buis n'en est pas une.</p>`,
  sections: [
    { h2: 'Le comportement avant la couleur',
      html: `
      <p>C'est l'erreur la plus répandue : on cherche à identifier une chenille à sa couleur ou à ses poils,
      alors que le critère le plus fiable est son comportement.</p>
      <p>Les processionnaires avancent en <strong>file continue</strong>, tête contre abdomen, parfois sur
      plusieurs mètres. Elles sécrètent un fil de soie que chacune suit, ce qui produit cette procession
      parfaitement alignée dont elles tirent leur nom. Aucune autre chenille de nos régions ne reproduit ce
      comportement.</p>
      <p>Second signe : elles ne sont jamais seules. On peut rencontrer une traînarde séparée de sa colonie,
      mais l'absence totale de file, de groupe et de nid à proximité rend l'hypothèse peu probable.</p>` },

    { h2: "L'arbre hôte, raccourci le plus efficace",
      html: `
      <p>Ces insectes sont strictement liés à leurs arbres hôtes. C'est ce qui permet de conclure en
      quelques secondes.</p>
      ${table(
        ['Arbre', 'Processionnaire possible ?'],
        [
          ['Pin (sylvestre, noir, maritime)', 'Oui — processionnaire du pin'],
          ['Cèdre', 'Oui — processionnaire du pin'],
          ['Chêne (pédonculé, sessile, rouge)', 'Oui — processionnaire du chêne'],
          ['Fruitier, fusain, aubépine', 'Non'],
          ['Buis', 'Non — probablement la pyrale du buis'],
          ['Tilleul, érable, platane, marronnier', 'Non'],
          ['Thuya, cyprès, laurier', 'Non']
        ],
        "Pas de pin, pas de cèdre, pas de chêne : pas de processionnaire")}
      ${note(`<p>Cette règle a une exception à connaître : une chenille descendue au sol peut se trouver
      n'importe où, loin de son arbre. Mais elle y sera alors en file, pas isolée sur une feuille de
      salade.</p>`)}` },

    { h2: 'À quoi ressemblent les deux espèces',
      html: `
      <p>Si l'arbre et le comportement concordent, l'aspect confirme l'espèce.</p>
      <p>La <strong>processionnaire du pin</strong> mesure 3 à 4 cm à maturité. Le dos est brun sombre avec
      des taches roussâtres, les flancs plus clairs tirent sur l'orangé, et l'ensemble est couvert de longs
      poils blanchâtres qui lui donnent un aspect duveteux. La tête est noire.</p>
      <p>La <strong>processionnaire du chêne</strong> mesure environ 3 cm. Elle est nettement plus terne :
      grise à gris-brun, avec une bande dorsale sombre bien marquée et de longs poils blancs sur les flancs.
      Sur une écorce de chêne, elle se voit très peu.</p>
      ${safety(`<p>Les poils visibles ne sont pas ceux qui urtiquent. Les poils dangereux sont
      microscopiques, logés dans des replis dorsaux, et ils n'apparaissent qu'à partir du troisième stade
      larvaire. Une chenille jeune de quelques millimètres n'est pas encore urticante — mais rien, à l'œil
      nu, ne permet de déterminer le stade avec certitude.</p>`, 'Ce que l\'on voit n\'est pas le danger')}` },

    { h2: 'Cinq chenilles souvent confondues',
      html: `
      <ul class="plain">
        <li><strong>Le bombyx cul-brun</strong> — velue et grégaire, sur feuillus. Elle est réellement urticante, mais ne forme pas de processions linéaires.</li>
        <li><strong>L'hyponomeute</strong> — petites chenilles jaunâtres qui tissent d'immenses toiles translucides sur les fusains, pruniers et aubépines. Spectaculaire, totalement inoffensif.</li>
        <li><strong>La pyrale du buis</strong> — verte à tête noire, sur buis uniquement. Aucun risque urticant.</li>
        <li><strong>Les chenilles de sphinx et de vanesses</strong> — grandes, isolées, parfois d'apparence épineuse, sur plantes basses. Inoffensives.</li>
        <li><strong>Les larves de tenthrèdes</strong> — regroupées sur une feuille, elles se cabrent toutes ensemble quand on les dérange. Impressionnant, sans danger.</li>
      </ul>
      <p>En cas de doute, la bonne réaction n'est pas de détruire : c'est de photographier à distance et de
      faire confirmer. <a href="/identifier-chenilles-processionnaires/">Voir la page d'identification
      complète</a>.</p>` },

    { h2: 'Observer sans s\'exposer',
      html: `
      <ol>
        <li><strong>Restez à un mètre cinquante ou deux mètres.</strong> Le zoom d'un téléphone donne une photo parfaitement exploitable à cette distance.</li>
        <li><strong>Ne vous placez pas au vent de la file</strong> ni directement sous un nid.</li>
        <li><strong>Ne secouez rien</strong> : ni la branche, ni la végétation, ni le sol autour.</li>
        <li><strong>N'écrasez pas</strong> une chenille pour l'examiner : l'écrasement libère ses poils d'un coup.</li>
        <li><strong>Photographiez aussi l'arbre entier</strong>, pas seulement la chenille : c'est l'arbre qui permet de conclure.</li>
      </ol>` }
  ],
  faq: [
    { q: "Une chenille velue est-elle forcément urticante ?",
      a: `<p>Non. La grande majorité des chenilles velues de nos jardins sont inoffensives. Seules quelques
      espèces, dont les processionnaires et le bombyx cul-brun, portent de véritables poils urticants.</p>` },
    { q: "Peut-on toucher une chenille processionnaire avec des gants ?",
      a: `<p>Ce n'est pas recommandé. Les poils traversent les mailles lâches, s'accrochent au tissu et
      voyagent ensuite. Un gant de jardinage ordinaire ne constitue pas une protection suffisante.</p>` },
    { q: "Les chenilles sortent-elles la nuit ?",
      a: `<p>Elles s'alimentent principalement la nuit, ce qui explique qu'on constate les dégâts sans jamais
      voir les chenilles. Les processions de descente, en revanche, ont lieu de jour, par temps doux.</p>` },
    { q: "Comment identifier une chenille morte ?",
      a: `<p>Par l'arbre à proximité et par la présence d'autres individus. Attention : une chenille morte
      reste urticante, et une chenille écrasée l'est davantage encore.</p>` }
  ],
  related: [
    { url: '/identifier-chenilles-processionnaires/', label: 'Identifier une chenille', hint: 'La page de référence' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: "L'indice le plus visible" },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Mécanisme des poils urticants' }
  ]
};
