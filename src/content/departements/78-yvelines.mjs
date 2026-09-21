import { standardPage } from '../../lib/layout.mjs';
import { note, table, esc } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';

const villes = villesOf('78-yvelines');

export default standardPage({
  url: '/departements/78-yvelines/',
  title: 'Chenilles processionnaires dans les Yvelines (78)',
  description: "Yvelines : forêts de Rambouillet, Saint-Germain-en-Laye et Marly, parcs historiques et communes résidentielles de lisière. Où la processionnaire du chêne se concentre et comment nous intervenons.",
  h1: 'Chenilles processionnaires dans les Yvelines (78)',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Yvelines (78)', url: '/departements/78-yvelines/' }],
  datePublished: '2026-04-22',
  dateModified: '2026-09-16',
  service: {
    name: 'Traitement des chenilles processionnaires dans les Yvelines',
    type: 'Échenillage, aspiration de nids et traitement biologique',
    description: "Traitement des chenilles processionnaires du chêne et du pin dans les Yvelines : propriétés de lisière, parcs historiques, patrimoine communal et établissements scolaires.",
    areaServed: ['Yvelines (78)']
  },
  lead: `Les Yvelines sont, avec la Seine-et-Marne, le département francilien le plus boisé — et ses forêts
  sont massivement des chênaies. C'est aussi celui où nous intervenons le plus souvent sur des arbres
  anciens, de grande hauteur, dans des parcs dont la valeur patrimoniale interdit toute approche
  expéditive.`,
  answer: `<p>Dans les Yvelines, la <strong>processionnaire du chêne</strong> domine nettement. Les massifs
  de <strong>Rambouillet, Saint-Germain-en-Laye et Marly</strong> constituent un réservoir continu, et les
  communes résidentielles installées à leur contact sont les premières concernées. La
  <strong>processionnaire du pin</strong> apparaît plus ponctuellement, sur les cèdres et pins d'ornement
  des parcs historiques et des grandes propriétés.</p>`,
  sections: [
    { h2: 'Trois grands massifs, trois profils différents',
      tocLabel: 'Les massifs yvelinois',
      html: `
      <p>Les forêts du département ne posent pas toutes les mêmes questions, parce qu'elles ne sont pas
      entourées du même type d'habitat.</p>
      <ul class="plain">
        <li><strong>La forêt de Rambouillet</strong> — un très vaste ensemble au sud-ouest, avec des communes forestières, des hameaux, de grandes propriétés et des installations de plein air. L'habitat y est dispersé, souvent au cœur même du boisement : la notion de « lisière » y perd son sens, et chaque propriété est en contact direct avec la chênaie.</li>
        <li><strong>La forêt de Saint-Germain-en-Laye</strong> — enserrée par une urbanisation dense, avec une limite nette entre la forêt et la ville. Les communes riveraines présentent une configuration classique : les premières rangées de pavillons reçoivent la pression, les suivantes beaucoup moins.</li>
        <li><strong>La forêt de Marly</strong> — un massif de coteau, avec des dénivelés qui créent des expositions très contrastées. Les versants sud voient les cycles démarrer plus tôt que les fonds de vallon.</li>
      </ul>
      ${note(`<p>S'ajoutent les vallées — Chevreuse au sud-est, Seine au nord — et les parcs des domaines
      historiques, qui forment autant d'îlots arborés anciens au milieu du tissu urbain. Ce sont souvent ces
      parcs qui portent les arbres les plus hauts du département, avec les contraintes d'accès
      correspondantes.</p>`)}` },

    { h2: 'Les parcs historiques et le patrimoine arboré',
      tocLabel: 'Parcs et arbres remarquables',
      html: `
      <p>Le département compte un nombre inhabituel de parcs anciens : domaines, châteaux, propriétés du
      XVIIIe et du XIXe siècle, avec des alignements, des bosquets et des sujets remarquables. Beaucoup ont
      été plantés de cèdres, essence prisée au XIXe siècle — et hôte de la processionnaire du pin.</p>
      <p>Sur ce type de patrimoine, trois précautions s'imposent :</p>
      <ol>
        <li><strong>Ne jamais tailler pour atteindre un nid.</strong> Sur un arbre remarquable, la coupe d'une charpentière pour accéder à une colonie est une perte définitive. L'accès se règle par la nacelle ou le grimpeur.</li>
        <li><strong>Préférer le préventif.</strong> Un <a href="/traitement-preventif/">traitement biologique</a> bien calé évite des interventions répétées en hauteur sur des sujets fragiles.</li>
        <li><strong>Documenter arbre par arbre.</strong> Un inventaire numéroté permet de suivre l'évolution d'une saison à l'autre, ce que ne permet pas une intervention ponctuelle.</li>
      </ol>` },

    { h2: 'Ce que nous rencontrons le plus souvent',
      html: `
      ${table(
        ['Contexte', 'Situation typique'],
        [
          ['Pavillon en première ligne de lisière', "Un ou deux chênes en fond de jardin, nids découverts en mai, enfants ou chien sur la parcelle"],
          ['Grande propriété avec parc', "Plusieurs dizaines d'arbres, dont des cèdres : inventaire et campagne annuelle"],
          ['Copropriété résidentielle', "Chênes rouges plantés dans les années 1970, aires de jeux en pied d'immeuble"],
          ['École ou crèche communale', "Chêne de cour porteur de nids, découverte en pleine période scolaire"],
          ['Équipement sportif de plein air', "Terrains bordés de chênes, fréquentation élevée aux beaux jours"],
          ['Hameau forestier', "Habitat dispersé au cœur du massif, recolonisation annuelle certaine"]
        ],
        'Les configurations les plus fréquentes dans le département')}` },

    { h2: 'Communes et secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département, avec une concentration de demandes sur trois
      secteurs : le <strong>pourtour de la forêt de Saint-Germain-en-Laye</strong>, la
      <strong>boucle de Marly et les communes de coteau</strong>, et le <strong>sud rambolitain</strong>.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>Pour les communes du sud et de l'ouest, plus éloignées, nous groupons les interventions par
      journée. Dans les lotissements de lisière, une intervention coordonnée entre voisins est souvent
      possible : les chênes d'une même rangée sont généralement concernés ensemble.</p>` },

    { h2: 'Un calendrier dicté par le débourrement',
      html: `
      <p>Dans un département dominé par le chêne, tout se joue au printemps. L'éclosion de la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a> suit le débourrement des
      feuilles, avec des écarts de plusieurs jours entre un versant sud de coteau et un fond de vallée.</p>
      <p>Concrètement, la fenêtre de <a href="/traitement-preventif/">traitement biologique</a> s'ouvre
      généralement en avril et ne dure que quelques semaines. Passé ce délai, la réponse devient
      l'<a href="/traitement-processionnaire-du-chene/">aspiration des nids</a>, en pleine période urticante,
      avec balisage et contraintes d'usage.</p>
      <p>L'autre rendez-vous utile est l'hiver : c'est la bonne période pour retirer les anciens nids, encore
      chargés de poils, et pour inventorier les arbres avant la saison suivante.</p>` }
  ],
  faq: [
    { q: "J'habite en lisière de la forêt de Rambouillet : dois-je traiter chaque année ?",
      a: `<p>Probablement, au moins les premières années. Un massif de cette étendue réalimente les lisières
      chaque été. L'objectif est de garder vos arbres et vos zones d'usage sûrs, pas d'éliminer l'espèce du
      massif. Après deux ou trois saisons suivies, le périmètre à traiter se réduit souvent.</p>` },
    { q: "Peut-on traiter un cèdre remarquable sans l'abîmer ?",
      a: `<p>Oui. Le retrait d'un nid ne demande aucune coupe de charpentière : le rameau porteur est
      sectionné au plus près du nid. Sur un sujet remarquable, nous privilégions l'accès par nacelle ou
      grimpeur plutôt que toute taille d'accès.</p>` },
    { q: "Les chênes rouges des résidences sont-ils concernés ?",
      a: `<p>Oui, au même titre que les chênes indigènes. Ces plantations, très répandues dans les
      résidences yvelinoises des années 1960-1980, figurent régulièrement parmi les arbres porteurs.</p>` },
    { q: "Qui intervient sur les arbres de la forêt domaniale ?",
      a: `<p>Le gestionnaire du massif. La lutte n'y est pas généralisée : elle se concentre sur les zones
      d'accueil du public. Notre intervention porte sur les propriétés, les équipements et le patrimoine
      communal.</p>` },
    { q: "Le relief change-t-il quelque chose ?",
      a: `<p>Oui, à la marge mais de façon utile : un versant sud bien exposé voit le débourrement et donc
      l'éclosion avancer de quelques jours sur un fond de vallée. C'est un élément que nous prenons en
      compte pour caler un traitement de printemps.</p>` }
  ],
  cta: {
    title: "Un chêne de jardin ou un cèdre de parc à faire examiner",
    text: `Dans les Yvelines, l'inspection des troncs au printemps évite la plupart des découvertes tardives.
    Indiquez votre commune et envoyez une photo prise à distance.`,
    primary: 'Demander une inspection'
  },
  related: [
    { url: '/departements/92-hauts-de-seine/', label: 'Hauts-de-Seine (92)', hint: 'Parcs historiques limitrophes' },
    { url: '/departements/95-val-d-oise/', label: "Val-d'Oise (95)", hint: 'Autre rive de la Seine' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'espèce dominante ici" },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: 'Aspiration et campagnes' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Chênes de cour' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
