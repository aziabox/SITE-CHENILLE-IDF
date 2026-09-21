import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/95-val-d-oise/cergy/',
  villeName: 'Cergy',
  deptSlug: '95-val-d-oise',
  villeTeaser: "patrimoine arboré planifié des années 1970-1990, aujourd'hui arrivé à maturité",
  title: 'Chenilles processionnaires à Cergy (95000)',
  description: "Cergy : un patrimoine arboré planifié, planté dans les années 1970-1990 et aujourd'hui mature. Coulées vertes, espaces publics, résidences et bord d'Oise.",
  h1: 'Chenilles processionnaires à Cergy',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: "Val-d'Oise (95)", url: '/departements/95-val-d-oise/' },
          { name: 'Cergy', url: '/departements/95-val-d-oise/cergy/' }],
  datePublished: '2026-05-30',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Cergy',
    type: 'Inventaire, échenillage et campagnes de traitement',
    description: "Traitement des chenilles processionnaires à Cergy et dans l'agglomération : espaces publics plantés, résidences, établissements et abords de la base de loisirs.",
    areaServed: ['Cergy', "Val-d'Oise (95)"]
  },
  lead: `Cergy a la particularité d'avoir été plantée avant d'être habitée. Ce patrimoine arboré conçu d'un
  seul tenant arrive aujourd'hui à maturité — et avec lui, les questions que pose tout ensemble d'arbres
  homogène en âge et en essence.`,
  answer: `<p>À Cergy, le patrimoine arboré est issu des <strong>plantations de la ville nouvelle</strong>,
  réalisées à partir des années 1970 et aujourd'hui matures : coulées vertes, parcs, alignements, espaces
  verts de résidences. Les <strong>conifères d'ornement</strong> sont concernés par la processionnaire du
  pin, les <strong>chênes</strong> par la processionnaire du chêne. L'homogénéité du patrimoine rend la
  gestion par inventaire et par campagne particulièrement efficace.</p>`,
  sections: [
    { h2: 'Un patrimoine conçu, et ce que cela implique',
      html: `
      <p>Les villes nouvelles ont été accompagnées d'un effort de plantation considérable : parcs urbains,
      coulées vertes reliant les quartiers, alignements le long des axes, espaces verts livrés avec chaque
      programme immobilier.</p>
      <p>Cinquante ans plus tard, ces arbres forment un patrimoine <strong>homogène en âge, en essence et en
      exposition</strong>. C'est un avantage pour la gestion : les inventaires sont plus simples, les
      essences hôtes identifiables par secteur, et l'on peut raisonner par ensembles plutôt qu'arbre par
      arbre.</p>
      ${note(`<p>Mais l'homogénéité joue dans les deux sens. Quand une pression s'installe sur un alignement
      de conifères plantés la même année, elle ne concerne pas un arbre : elle concerne l'alignement.
      Repérer un nid sur un sujet justifie toujours d'inspecter l'ensemble de la série.</p>`,
      'Raisonner par ensembles')}` },

    { h2: 'Les espaces concernés à Cergy',
      html: `
      ${table(
        ['Espace', 'Essences concernées', 'Enjeu'],
        [
          ['Coulées vertes et cheminements', 'Conifères, chênes', 'Passage quotidien piéton et cycliste'],
          ['Parcs urbains', 'Chênes, conifères', 'Fréquentation familiale, aires de jeux'],
          ['Espaces verts de résidences', "Conifères d'ornement, chênes rouges", "Pieds d'immeubles et aires de jeux"],
          ['Abords de la base de loisirs', 'Variables', "Forte fréquentation saisonnière en extérieur"],
          ['Campus et équipements publics', 'Variables', 'Espaces extérieurs de pause et de circulation'],
          ['Berges de l\'Oise et boisements riverains', 'Chênes', 'Promenade, pêche, activités de plein air']
        ],
        'Les espaces arborés cergyssois et leurs enjeux')}` },

    { h2: 'La saison de plein air, contrainte spécifique',
      html: `
      <p>Cergy dispose d'espaces de loisirs de plein air très fréquentés à la belle saison. Cette
      fréquentation coïncide exactement avec la période urticante de la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>, de mai à juillet : des
      personnes assises au sol, allongées sur l'herbe, avec des enfants.</p>
      <p>Pour un gestionnaire de site de loisirs, la conséquence est claire : l'inspection des arbres doit
      être faite <strong>avant l'ouverture de saison</strong>, pas pendant. Une inspection des troncs en
      avril, suivie si nécessaire d'une intervention, évite d'avoir à baliser une zone d'accueil en plein
      mois de juin. Voir <a href="/entreprises/">intervention pour les entreprises</a> et
      <a href="/collectivites/">collectivités</a>.</p>` },

    { h2: 'Qui gère quoi',
      html: `
      <p>Dans une agglomération planifiée, les compétences sont réparties entre plusieurs gestionnaires. La
      première étape d'un signalement consiste donc à identifier le bon interlocuteur.</p>
      <ul class="plain">
        <li><strong>Parcs, squares, alignements et coulées vertes</strong> — la collectivité gestionnaire de l'espace concerné.</li>
        <li><strong>Espaces verts de résidences</strong> — le bailleur ou le syndic. Voir <a href="/coproprietes/">copropriétés</a>.</li>
        <li><strong>Établissements scolaires</strong> — le gestionnaire des locaux. Voir <a href="/ecoles/">écoles et crèches</a>.</li>
        <li><strong>Site de loisirs</strong> — son exploitant.</li>
        <li><strong>Jardin privé</strong> — le propriétaire. Voir <a href="/particuliers/">particuliers</a>.</li>
      </ul>
      <p>Comme partout, un signalement accompagné d'une photo et d'une localisation précise est traité
      nettement plus vite.</p>` }
  ],
  faq: [
    { q: "Des arbres plantés dans les années 1980 sont-ils déjà concernés ?",
      a: `<p>Oui, dès lors qu'ils ont atteint une taille et une exposition qui en font un site de ponte
      attractif. Les plantations des années 1970 à 1990 sont aujourd'hui pleinement matures et concernées
      au même titre que des arbres plus anciens.</p>` },
    { q: "Faut-il inspecter tout un alignement ?",
      a: `<p>Oui, dès qu'un sujet est trouvé porteur. Des arbres de même essence, de même âge et de même
      exposition sont colonisés dans des conditions comparables : l'inspection de la série entière est le
      réflexe utile.</p>` },
    { q: "Quand faire l'inspection sur un site de loisirs ?",
      a: `<p>En avril, avant l'ouverture de saison, pour les chênes ; en novembre pour les conifères.
      Inspecter en juin revient à découvrir le problème au pire moment.</p>` },
    { q: "Je suis locataire, à qui signaler un arbre ?",
      a: `<p>À votre bailleur, via le gardien ou l'antenne de proximité, avec une photo et l'emplacement
      exact. C'est le bailleur qui engage l'intervention sur les espaces extérieurs.</p>` },
    { q: "Intervenez-vous dans les communes voisines de l'agglomération ?",
      a: `<p>Oui, sur l'ensemble du Val-d'Oise. Pour les gestionnaires multi-sites, l'inventaire global est
      plus efficace qu'une succession d'interventions déclenchées par les signalements.</p>` }
  ],
  cta: {
    title: "Inventorier avant la saison, plutôt que baliser pendant",
    text: `Sur un patrimoine planté et homogène, un inventaire établi hors saison sert plusieurs années et
    permet de traiter avant que la situation ne devienne visible.`,
    primary: 'Demander un inventaire'
  },
  related: [
    { url: '/departements/95-val-d-oise/', label: "Val-d'Oise (95)", hint: 'Situation départementale' },
    { url: '/departements/95-val-d-oise/montmorency/', label: 'Montmorency', hint: 'Le coteau boisé, à l\'opposé' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Inventaire et campagnes' },
    { url: '/entreprises/', label: 'Entreprises', hint: 'Sites de loisirs et accueil de public' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Espaces verts de résidences' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Plan pluriannuel' }
  ]
});
