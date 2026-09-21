import { safety, note, table } from '../../../lib/render.mjs';

export default {
  slug: 'pourquoi-dangereuses-pour-les-chiens',
  category: 'danger',
  title: 'Pourquoi les processionnaires sont dangereuses pour les chiens',
  description: "Comportement d'exploration, muqueuses fragiles, poils urticants : pourquoi le chien est l'animal le plus touché et quelles lésions surviennent.",
  h1: 'Pourquoi les chenilles processionnaires sont-elles si dangereuses pour les chiens ?',
  excerpt: "Ce n'est pas une question de sensibilité particulière : c'est une question de comportement. Le chien explore au ras du sol, avec la seule partie de son corps qui ne supporte pas les poils urticants.",
  datePublished: '2026-06-20',
  dateModified: '2026-09-19',
  lead: `Chaque fin d'hiver, les cliniques vétérinaires voient revenir les mêmes cas. Comprendre pourquoi le
  chien est à ce point exposé permet d'agir avant l'accident plutôt qu'après.`,
  answer: `<p>Le chien est le plus touché pour trois raisons : il <strong>explore avec la truffe et la
  gueule</strong>, au ras du sol, là où passe la procession ; ses <strong>muqueuses buccales sont
  directement exposées</strong>, sans protection ; et les poils urticants provoquent sur ces muqueuses une
  <strong>inflammation violente</strong> pouvant aller jusqu'à la nécrose d'une partie de la langue. Tout
  contact est une urgence vétérinaire.</p>`,
  sections: [
    { h2: 'Le comportement, première cause',
      html: `
      <p>Un chien découvre le monde par l'odorat, museau au sol. Une file de chenilles en mouvement est,
      pour lui, un objet mobile, odorant et inconnu — exactement ce qui déclenche l'exploration.</p>
      <p>Il approche la truffe, renifle, et souvent pousse ou lèche. En quelques secondes, plusieurs
      milliers de poils urticants se fixent sur la truffe, les babines, la langue et le palais.</p>
      <p>La <a href="/chenille-processionnaire-du-pin/">processionnaire du pin</a> est très majoritairement
      en cause, parce que c'est la seule des deux espèces à descendre au sol. Le pic des accidents suit donc
      celui des processions : en Île-de-France, le plus souvent de janvier à mars.</p>` },

    { h2: 'Le mécanisme de la lésion',
      html: `
      <p>Les poils urticants sont creux, barbelés et microscopiques. Sur une muqueuse — fine, humide, très
      vascularisée — ils s'ancrent immédiatement et libèrent leur contenu urticant.</p>
      <p>Il en résulte une réaction inflammatoire intense et rapide. Les tissus gonflent, la circulation
      locale est perturbée, et dans les cas les plus sévères une partie du tissu atteint peut se
      nécroser — c'est ce qui explique les lésions de la langue décrites dans les cas graves.</p>
      ${note(`<p>Le frottement aggrave tout. Un chien qui se frotte la gueule contre le sol ou avec ses
      pattes casse les poils, les enfonce plus profondément et étend la zone atteinte. C'est pourquoi le
      rinçage se fait <strong>sans frotter</strong>, à l'eau claire abondante.</p>`, 'Pourquoi ne pas frotter')}` },

    { h2: 'Les signes à repérer',
      html: `
      ${table(
        ['Signe', 'Délai habituel'],
        [
          ['Salivation abondante, parfois mousseuse', 'Quelques minutes'],
          ['Le chien se frotte la gueule', 'Quelques minutes'],
          ['Gonflement des babines, de la langue, de la face', 'Minutes à dizaines de minutes'],
          ['Langue anormalement colorée', 'Rapide'],
          ['Refus de manger ou de boire, gémissements', 'Rapide'],
          ['Vomissements, abattement', 'Variable'],
          ['Difficultés respiratoires', 'Signe de gravité — urgence absolue']
        ],
        "Ce que rapportent le plus souvent les propriétaires")}
      ${safety(`<p><strong>Tout contact suspect est une urgence vétérinaire</strong>, même si le chien
      semble aller bien. Rincez abondamment la gueule à l'eau claire, sans frotter et sans rien ajouter à
      l'eau, puis contactez immédiatement un vétérinaire ou une clinique d'urgence. Ne faites pas vomir
      l'animal : cela ferait repasser les poils sur les muqueuses.</p>
      <p>Ces informations sont générales et ne remplacent pas l'examen d'un vétérinaire, seul habilité à
      poser un diagnostic et à prescrire un traitement.</p>`, 'Conduite à tenir')}` },

    { h2: 'Pourquoi le chat est moins concerné',
      html: `
      <p>La comparaison éclaire le mécanisme. Le chat chasse à vue plutôt qu'au flair, garde le museau plus
      haut, et teste un objet inconnu avec la patte avant d'y mettre la gueule. Une première touche de patte
      suffit souvent à le faire renoncer.</p>
      <p>Il n'est pas pour autant à l'abri : l'exposition passe alors par les coussinets, puis par le
      toilettage, ce qui décale les symptômes et retarde le diagnostic.
      <a href="/chenilles-processionnaires-chat/">Voir les spécificités du chat</a>.</p>` },

    { h2: 'Prévenir plutôt que gérer l\'urgence',
      html: `
      <p>Un propriétaire de chien dispose de leviers simples, à condition de les activer avant la période de
      descente.</p>
      <ul class="plain">
        <li><strong>Faire retirer les nids</strong> des pins et cèdres du terrain, entre novembre et février. C'est la mesure la plus efficace.</li>
        <li><strong>Poser un <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a></strong> si les nids sont hors d'atteinte : il protège le sol.</li>
        <li><strong>Clôturer le pied des arbres à risque</strong> pendant la saison, même avec un dispositif léger.</li>
        <li><strong>Tenir le chien en laisse</strong> en promenade sur les allées sableuses ensoleillées, de janvier à mars.</li>
        <li><strong>Vérifier le jardin</strong> avant de lâcher le chien, lors des premières journées douces de fin d'hiver.</li>
      </ul>
      <p><a href="/chenilles-processionnaires-chien/">Voir la page complète chiens et
      processionnaires</a>.</p>` }
  ],
  faq: [
    { q: "Mon chien a juste reniflé, faut-il consulter ?",
      a: `<p>Oui. Le simple contact de la truffe suffit à fixer un grand nombre de poils, et les symptômes
      peuvent apparaître avec un léger décalage. Un avis vétérinaire immédiat est justifié.</p>` },
    { q: "Peut-on donner un antihistaminique humain ?",
      a: `<p>Non. N'administrez aucun médicament de votre propre initiative : certains sont toxiques pour le
      chien et peuvent compliquer la prise en charge. Seul le vétérinaire prescrit.</p>` },
    { q: "Le risque existe-t-il sans chenille visible ?",
      a: `<p>Oui. Les poils restent au sol là où une procession est passée, et sous un arbre infesté,
      pendant des mois. Un chien qui fouille cette zone peut réagir sans qu'aucune chenille ne soit
      visible.</p>` },
    { q: "Quelle est la période la plus à risque ?",
      a: `<p>La fin de l'hiver et le début du printemps, pendant les processions — le plus souvent de
      janvier à mars en Île-de-France, avec des variations selon la douceur de la saison.</p>` }
  ],
  related: [
    { url: '/chenilles-processionnaires-chien/', label: 'Chiens et processionnaires', hint: 'Page de référence' },
    { url: '/chenilles-processionnaires-chat/', label: 'Chats et processionnaires', hint: 'Un profil différent' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger le sol du jardin' }
  ]
};
