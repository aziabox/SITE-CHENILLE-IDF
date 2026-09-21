import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/91-essonne/etampes/',
  villeName: 'Étampes',
  deptSlug: '91-essonne',
  villeTeaser: "vallées et coteaux sableux du sud essonnien, où la processionnaire du pin est bien installée",
  title: 'Chenilles processionnaires à Étampes (91150)',
  description: "Étampes : vallées de la Juine et de la Chalouette, coteaux sableux et habitat rural. Un secteur où la processionnaire du pin trouve à la fois son arbre et son sol.",
  h1: 'Chenilles processionnaires à Étampes',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Essonne (91)', url: '/departements/91-essonne/' },
          { name: 'Étampes', url: '/departements/91-essonne/etampes/' }],
  datePublished: '2026-05-22',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Étampes',
    type: 'Échenillage, piégeage et traitement biologique',
    description: "Traitement des chenilles processionnaires du pin et du chêne dans le secteur d'Étampes : propriétés rurales, coteaux boisés, prés arborés et patrimoine communal.",
    areaServed: ['Étampes', 'Essonne (91)']
  },
  lead: `Le sud de l'Essonne réunit les deux conditions dont la processionnaire du pin a besoin : des pins,
  et un sol où s'enfouir. C'est ce qui en fait l'un des secteurs franciliens où cette espèce est la plus
  solidement installée.`,
  answer: `<p>Dans le secteur d'Étampes, la <strong>processionnaire du pin</strong> est bien installée :
  les coteaux et plateaux sableux portent des pins, et le sol offre un substrat idéal pour la nymphose. La
  <strong>processionnaire du chêne</strong> est présente dans les boisements de coteau et les vallées. Le
  contexte est rural : propriétés de bourg, prés arborés, hameaux et exploitations.</p>`,
  sections: [
    { h2: 'Vallées, coteaux et sables',
      html: `
      <p>Le secteur s'organise autour de vallées — la Juine, la Chalouette et leurs affluents — encaissées
      dans les plateaux du sud essonnien. Les versants portent des boisements, et les plateaux des sols où
      le sable est fréquent.</p>
      <p>Pour la <a href="/chenille-processionnaire-du-pin/">processionnaire du pin</a>, cette combinaison
      est idéale. L'espèce trouve son essence hôte sur les coteaux et dans les jardins, et un sol meuble,
      drainant et bien exposé pour la phase d'enfouissement qui suit la descente de fin d'hiver.</p>
      ${note(`<p>C'est pourquoi, dans ce secteur, nous insistons systématiquement sur la
      <strong>protection du sol</strong> et pas seulement sur le retrait des nids. Les chrysalides sont dans
      le terrain, parfois pour plusieurs années, et une partie du problème de l'année prochaine y est déjà.</p>`,
      'Traiter le sol autant que l\'arbre')}` },

    { h2: 'Un contexte rural, des usages différents',
      html: `
      <p>Les configurations rencontrées ici ne ressemblent pas à celles de la banlieue dense. Les parcelles
      sont plus grandes, les usages plus variés, et les arbres souvent isolés.</p>
      ${table(
        ['Contexte', 'Situation typique', 'Priorité'],
        [
          ['Propriété de bourg avec grand jardin', "Pins isolés en pelouse, enfants ou chien sur la parcelle", 'Retrait des nids, puis protection du sol'],
          ['Pré arboré, paddock', "Pins en bordure de pâture, chevaux exposés", 'Colliers de piégeage, mise en défens temporaire'],
          ['Hameau ou ferme', "Alignements anciens, bâtiments agricoles", 'Inventaire et traitement groupé'],
          ['Coteau boisé en limite de parcelle', "Chênes porteurs de nids plats", 'Inspection de printemps'],
          ['Gîte, chambre d\'hôtes, camping', "Accueil de public en extérieur", "Passage avant l'ouverture de saison"],
          ['Espace communal, place plantée', "Arbre isolé très exposé", 'Signalement aux services communaux']
        ],
        "Les configurations du sud essonnien")}` },

    { h2: 'L\'arbre isolé, site de ponte idéal',
      html: `
      <p>Un point revient constamment dans ce secteur : ce sont les <strong>arbres isolés</strong> qui sont
      les plus touchés. Un pin seul au milieu d'une pelouse, au bord d'une place de village ou en limite
      d'un pré est un site de ponte de premier choix.</p>
      <p>Les raisons sont simples et cumulatives : l'arbre reçoit le soleil toute la journée, ce qui accélère
      le développement de la colonie ; il n'a aucune concurrence pour la lumière, donc un feuillage
      abondant ; et il bénéficie d'une prédation faible, faute d'un environnement boisé riche en oiseaux
      insectivores.</p>
      <p>C'est aussi ce qui rend la <strong>pose de nichoirs à mésanges</strong> particulièrement pertinente
      ici : autour d'un arbre isolé, l'apport de prédation est immédiat et mesurable, alors qu'en milieu
      forestier il se dilue. Voir <a href="/traitement-preventif/">traitement préventif</a>.</p>` },

    { h2: 'Organisation des interventions',
      html: `
      <p>Le secteur est éloigné de la petite couronne et l'habitat est dispersé. Nous groupons donc les
      interventions par journée et par secteur géographique, ce qui réduit sensiblement la part de
      déplacement dans le devis.</p>
      <p>Deux conseils pratiques pour les habitants du secteur :</p>
      <ul class="plain">
        <li><strong>Signalez tôt.</strong> Un nid repéré en novembre se traite dans de bien meilleures conditions — et à un coût moindre — que le même nid en mars, quand la descente a commencé.</li>
        <li><strong>Parlez-en autour de vous.</strong> Dans un hameau ou une rue de bourg, les pins sont souvent concernés ensemble. Une intervention coordonnée le même jour divise le coût de déplacement entre plusieurs propriétaires.</li>
      </ul>` }
  ],
  faq: [
    { q: "Pourquoi les chenilles reviennent-elles chaque année sur le même pin ?",
      a: `<p>Parce que l'arbre réunit les conditions recherchées — exposition, feuillage abondant, faible
      prédation — et parce que des chrysalides sont enfouies dans le sol à proximité. Une partie d'entre
      elles peut rester en diapause plusieurs années avant d'émerger.</p>` },
    { q: "Un cheval peut-il être atteint ?",
      a: `<p>Des lésions buccales sont possibles en cas de contact, avec difficultés à s'alimenter. Tout
      contact suspect justifie un avis vétérinaire rapide. Ces informations sont générales et ne remplacent
      pas l'examen d'un vétérinaire.</p>` },
    { q: "Les nichoirs à mésanges sont-ils vraiment utiles ici ?",
      a: `<p>Plus qu'en milieu forestier, oui. Autour d'un arbre isolé, l'installation de nichoirs apporte
      une prédation qui n'existait pas. L'effet se construit sur plusieurs saisons et complète les autres
      mesures plutôt qu'il ne les remplace.</p>` },
    { q: "Faut-il éviter de planter des pins ?",
      a: `<p>Dans un secteur à forte pression, une plantation de pin isolé en plein soleil est à réfléchir.
      Diversifier les essences réduit durablement le risque. En revanche, abattre un pin sain uniquement
      pour cette raison est rarement justifié.</p>` },
    { q: "Intervenez-vous dans les communes voisines ?",
      a: `<p>Oui, sur l'ensemble du sud de l'Essonne et plus largement dans le département. Les
      interventions sont groupées par journée sur les secteurs éloignés.</p>` }
  ],
  cta: {
    title: "Pins isolés et terrain sableux : anticiper la descente",
    text: `Dans le sud essonnien, la fenêtre utile se situe de l'automne au début de l'hiver. Décrivez-nous
    vos arbres et l'usage de la parcelle — pré, jardin, accueil de public.`,
    primary: 'Demander un diagnostic'
  },
  related: [
    { url: '/departements/91-essonne/', label: 'Essonne (91)', hint: 'Situation départementale' },
    { url: '/departements/91-essonne/evry-courcouronnes/', label: 'Évry-Courcouronnes', hint: 'Le nord urbain du département' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger prés et pelouses' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Nichoirs et biocontrôle' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce dominante ici" },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Grands jardins et propriétés' }
  ]
});
