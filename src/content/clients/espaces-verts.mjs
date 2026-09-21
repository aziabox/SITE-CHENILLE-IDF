import { standardPage } from '../../lib/layout.mjs';
import { safety, note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/espaces-verts/',
  title: 'Espaces verts et chenilles processionnaires : protéger les équipes',
  description: "Paysagistes, agents et élagueurs : quand la tonte, le soufflage et la taille exposent aux poils urticants, et comment organiser les chantiers.",
  h1: 'Espaces verts : protéger les équipes et les usagers',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Espaces verts', url: '/espaces-verts/' }],
  datePublished: '2026-04-12',
  dateModified: '2026-09-09',
  service: {
    name: 'Intervention sur espaces verts',
    type: 'Traitement des chenilles processionnaires sur espaces verts',
    description: "Repérage, traitement et coordination de chantier sur espaces verts exposés aux chenilles processionnaires, en Île-de-France."
  },
  lead: `Les professionnels des espaces verts sont, statistiquement, parmi les plus exposés — non pas parce
  qu'ils manipulent les nids, mais parce que leurs outils remettent en suspension des poils déjà tombés,
  des mois après le départ des chenilles.`,
  answer: `<p>Pour une équipe d'espaces verts, le risque principal n'est pas le nid mais le
  <strong>sol et l'écorce chargés de poils</strong>. La <strong>tonte, le soufflage, le débroussaillage et
  la taille</strong> sous un arbre infesté exposent directement les opérateurs. La prévention passe par le
  <strong>repérage des arbres avant le chantier</strong>, l'adaptation des tâches et le traitement des
  sujets porteurs.</p>`,
  sections: [
    { h2: 'Les gestes métier qui exposent',
      html: `
      <p>La particularité de ce public tient à ce que l'exposition est souvent <strong>décalée dans le
      temps</strong> : elle a lieu là où les chenilles sont passées, pas là où elles sont.</p>
      ${table(
        ['Opération', 'Pourquoi elle expose'],
        [
          ['Tonte sous un pin ou un chêne infesté', 'La lame projette en aérosol les poils déposés au sol, au niveau du visage'],
          ['Soufflage de feuilles', "L'opération la plus exposante : elle remet en suspension tout ce qui est tombé"],
          ['Débroussaillage en lisière', 'Contact direct avec la végétation basse chargée de poils'],
          ['Taille et élagage', "Contact avec l'écorce, le feuillage et parfois les nids eux-mêmes"],
          ['Ramassage de branches au sol', 'Manipulation de rameaux ayant porté un nid'],
          ['Entretien de massifs au pied des arbres', 'Travail accroupi, visage proche du sol']
        ],
        'Là où le risque se concentre réellement')}
      ${safety(`<p><strong>Le soufflage sous un arbre infesté est à proscrire</strong>, y compris hors saison
      et y compris quand aucun nid n'est visible. C'est le geste qui génère la plus forte concentration de
      poils en suspension, à hauteur de respiration, sur une durée prolongée.</p>`, 'Le geste à supprimer')}` },

    { h2: 'Repérer avant d\'intervenir',
      html: `
      <p>Un repérage de cinq minutes en début de chantier évite la majorité des incidents. Il s'organise
      autour de trois questions.</p>
      <ol>
        <li><strong>Y a-t-il des pins, des cèdres ou des chênes sur le site ?</strong> Si non, le sujet ne se pose pas.</li>
        <li><strong>Ces arbres portent-ils des nids ?</strong> Boule blanche en bout de rameau pour le pin, plaque grise sur tronc pour le chêne — <a href="/identifier-nid-chenilles-processionnaires/">voir les critères</a>.</li>
        <li><strong>Y a-t-il des indices au sol ?</strong> Mues, déjections, chenilles mortes, rameaux tombés.</li>
      </ol>
      <p>Réponse positive à la deuxième ou à la troisième question : la zone sous l'arbre est traitée à part
      — pas de tonte, pas de soufflage, et signalement au donneur d'ordre.</p>
      ${note(`<p>Sur un chantier récurrent, il est utile de <strong>marquer les arbres concernés</strong>
      (rubalise, marquage temporaire, point sur le plan) plutôt que de refaire le repérage à chaque passage.
      C'est aussi ce qui permet de transmettre l'information à un intérimaire ou à un nouvel arrivant.</p>`,
      'Transmettre l\'information')}` },

    { h2: 'Adapter les tâches plutôt que les reporter',
      html: `
      <p>Un chantier ne peut pas toujours attendre le traitement de l'arbre. Plusieurs adaptations
      permettent de continuer à travailler en réduisant fortement l'exposition.</p>
      <ul class="plain">
        <li><strong>Remplacer le soufflage par un ramassage humide</strong> — arroser légèrement avant, pour plaquer les poils.</li>
        <li><strong>Relever la hauteur de coupe</strong> sous les arbres concernés, ou différer la tonte de la zone.</li>
        <li><strong>Travailler dos au vent</strong> et éviter les journées venteuses pour les tâches proches du sol.</li>
        <li><strong>Porter des manches longues fermées, des gants et des lunettes</strong> pour toute intervention sous un arbre porteur ; un masque pour les opérations générant de la poussière.</li>
        <li><strong>Prévoir un point d'eau</strong> et se laver les avant-bras, le cou et le visage avant la pause.</li>
        <li><strong>Laver les tenues séparément</strong>, sans les secouer, et nettoyer les cabines et les outils.</li>
      </ul>` },

    { h2: 'Coordination avec un chantier d\'élagage',
      tocLabel: 'Élagage',
      html: `
      <p>C'est la situation la plus délicate, parce qu'elle place l'opérateur au contact direct de l'arbre,
      en hauteur, dans le feuillage. Un grimpeur qui découvre un nid en cours de progression se trouve dans
      la pire des configurations : il ne peut ni redescendre immédiatement, ni s'écarter.</p>
      <p>La règle est donc d'<strong>inspecter avant de monter</strong>, à la jumelle depuis le sol, et de
      traiter le sujet des processionnaires <strong>avant</strong> le chantier d'élagage plutôt que pendant.
      Sur chêne, cela signifie souvent programmer l'élagage en dehors de la période d'activité, ou faire
      retirer les nids en amont.</p>
      <p>Nous intervenons régulièrement en amont de chantiers d'élagage, sur la seule partie
      processionnaires, en coordination avec l'entreprise d'élagage.</p>` },

    { h2: 'Ce que nous apportons à un prestataire d\'entretien',
      tocLabel: 'Travailler ensemble',
      html: `
      <p>Nous ne faisons pas d'entretien d'espaces verts : nous traitons une seule famille d'organismes.
      Cela fait de nous un complément, pas un concurrent, pour les entreprises du paysage et les services
      techniques.</p>
      <ul class="plain">
        <li><strong>Repérage et inventaire</strong> des arbres porteurs sur un site que vous entretenez.</li>
        <li><strong>Retrait des nids</strong> avant vos chantiers de taille ou d'élagage.</li>
        <li><strong>Traitement biologique</strong> aux fenêtres utiles, avec le matériel adapté à la hauteur.</li>
        <li><strong>Compte rendu écrit</strong> transmissible à votre client ou à votre donneur d'ordre.</li>
        <li><strong>Information de vos équipes</strong> sur les zones à traiter différemment.</li>
      </ul>` }
  ],
  faq: [
    { q: "Peut-on tondre sous un arbre qui a porté un nid l'hiver dernier ?",
      a: `<p>Avec précaution. Les poils tombés restent urticants plusieurs mois au sol. Si le nid a été
      retiré et que la zone a été contrôlée, la tonte redevient possible après le délai indiqué à l'issue de
      l'intervention. Sans traitement, mieux vaut différer ou relever la hauteur de coupe.</p>` },
    { q: "Quels équipements de protection pour une équipe d'espaces verts ?",
      a: `<p>Pour les travaux courants sous un arbre porteur : manches longues fermées, gants, lunettes
      enveloppantes et protection respiratoire pour les opérations poussiéreuses. Pour le retrait d'un nid,
      c'est une combinaison intégrale, qui relève d'une intervention spécialisée.</p>` },
    { q: "Un salarié a réagi après une tonte, que faire ?",
      a: `<p>Ne pas frotter, retirer la tenue avec précaution, rincer abondamment à l'eau, doucher et laver
      les cheveux. Consulter en cas d'atteinte oculaire, de gêne respiratoire, de gonflement ou de réaction
      étendue. Le signalement en interne permet d'identifier l'arbre en cause.</p>` },
    { q: "Faut-il signaler les arbres infestés au client ?",
      a: `<p>C'est à la fois utile et protecteur : le client peut décider du traitement, et l'information
      écrite documente le fait que la situation a été portée à sa connaissance.</p>` },
    { q: "Intervenez-vous en sous-traitance pour une entreprise du paysage ?",
      a: `<p>Oui, régulièrement : nous prenons le volet processionnaires d'un site que vous entretenez, en
      amont ou en parallèle de vos propres chantiers.</p>` }
  ],
  cta: {
    title: "Faire traiter les arbres avant vos chantiers",
    text: `Un repérage en amont évite d'exposer une équipe et de devoir interrompre un chantier. Nous
    intervenons en complément des entreprises du paysage et des services techniques.`,
    primary: 'Demander un repérage'
  },
  related: [
    { url: '/collectivites/', label: 'Collectivités', hint: 'Services techniques et patrimoine arboré' },
    { url: '/entreprises/', label: 'Entreprises', hint: 'Sites professionnels et prestataires' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Durée du risque au sol' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Repérage avant chantier' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Retrait avant élagage' },
    { url: '/blog/arbres/savoir-si-un-arbre-est-infeste/', label: 'Arbre infesté ?', hint: 'Les signes à examiner' }
  ]
});
