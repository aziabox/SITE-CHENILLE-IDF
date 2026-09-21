import { standardPage } from '../../lib/layout.mjs';
import { note, table, esc } from '../../lib/render.mjs';
import { villesOf } from '../villes/_villes.mjs';

const villes = villesOf('93-seine-saint-denis');

export default standardPage({
  url: '/departements/93-seine-saint-denis/',
  title: 'Chenilles processionnaires en Seine-Saint-Denis (93)',
  description: "Seine-Saint-Denis : grands parcs départementaux et patrimoine arboré des ensembles collectifs. Où le sujet se pose et qui en a la charge.",
  h1: 'Chenilles processionnaires en Seine-Saint-Denis (93)',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Seine-Saint-Denis (93)', url: '/departements/93-seine-saint-denis/' }],
  carteActive: '93',
  datePublished: '2026-04-28',
  dateModified: '2026-09-16',
  service: {
    name: 'Traitement des chenilles processionnaires en Seine-Saint-Denis',
    type: 'Échenillage et campagnes sur patrimoine arboré',
    description: "Traitement des chenilles processionnaires dans les parcs, résidences et espaces collectifs de Seine-Saint-Denis.",
    areaServed: ['Seine-Saint-Denis (93)']
  },
  lead: `La Seine-Saint-Denis a la réputation d'un département minéral. C'est en partie vrai, et c'est
  précisément ce qui rend la question intéressante : le patrimoine arboré y est concentré dans un petit
  nombre de grands ensembles verts, très fréquentés, où la moindre infestation concerne beaucoup de monde
  à la fois.`,
  answer: `<p>En Seine-Saint-Denis, les chenilles processionnaires se concentrent dans les
  <strong>grands parcs départementaux</strong> et les <strong>boisements de l'est du département</strong>,
  ainsi que sur le <strong>patrimoine arboré des ensembles collectifs</strong>. La processionnaire du chêne
  domine dans les boisements ; la processionnaire du pin touche les conifères d'ornement plantés dans les
  résidences et les parcs. Les donneurs d'ordre sont majoritairement des bailleurs, des collectivités et
  des syndics.</p>`,
  sections: [
    { h2: 'Un patrimoine vert concentré',
      tocLabel: 'Où se trouvent les arbres',
      html: `
      <p>Contrairement aux départements de grande couronne, où les arbres sont partout, la Seine-Saint-Denis
      concentre son patrimoine arboré dans quelques ensembles identifiables.</p>
      <ul class="plain">
        <li><strong>Les grands parcs départementaux</strong> — de vastes espaces aménagés au cours des dernières décennies, souvent sur d'anciennes emprises industrielles ou agricoles, avec des plantations aujourd'hui arrivées à maturité et une fréquentation familiale très élevée.</li>
        <li><strong>Les boisements de l'est</strong> — dont le secteur de l'ancienne forêt de Bondy, où subsistent des ensembles de chênes en contact avec l'urbanisation.</li>
        <li><strong>Le parc forestier de la Poudrerie</strong>, à Sevran et alentour — un boisement ancien ouvert au public, à proximité immédiate de zones résidentielles.</li>
        <li><strong>Les espaces verts des ensembles collectifs</strong> — plantés lors de la construction des grands ensembles, entre les années 1950 et 1970, souvent avec des conifères d'ornement.</li>
        <li><strong>Les cimetières et les abords d'équipements</strong> — stades, gymnases, écoles, avec des alignements plantés.</li>
      </ul>
      ${note(`<p>Cette concentration a une conséquence directe : ici, un arbre porteur de nids n'est presque
      jamais un arbre isolé dans un jardin privé. Il est au milieu d'un espace public ou collectif, avec des
      centaines de personnes qui passent dessous chaque jour. Le degré d'urgence est donc structurellement
      plus élevé qu'ailleurs.</p>`, 'Ce que cela change')}` },

    { h2: 'Les plantations des grands ensembles',
      html: `
      <p>Les ensembles collectifs construits entre 1950 et 1975 ont été systématiquement accompagnés
      d'espaces verts. Les essences retenues privilégiaient la croissance rapide et la persistance du
      feuillage : <strong>pins noirs, cèdres, sapins d'ornement</strong> ont été largement plantés, aux côtés
      de chênes rouges et de platanes.</p>
      <p>Soixante ans plus tard, ces arbres sont matures, hauts, et souvent situés au pied direct des
      bâtiments — le long des cheminements, autour des aires de jeux, sur les parkings. Quand un pin de
      quinze mètres porte des nids au-dessus d'une aire de jeux, la question n'est plus technique : elle est
      immédiate.</p>
      ${table(
        ['Situation rencontrée', 'Réponse apportée'],
        [
          ['Nid au-dessus d\'une aire de jeux', "Balisage immédiat, intervention prioritaire, retrait et contrôle du sol"],
          ['Conifère en pied d\'immeuble', "Intervention en horaires décalés, information des occupants par le bailleur"],
          ['Alignement de parking', "Traitement par tronçons, avec déplacement temporaire du stationnement"],
          ['Espace vert d\'une résidence', "Inventaire complet puis campagne annuelle plutôt qu'interventions ponctuelles"],
          ['Abords d\'un équipement scolaire', "Programmation sur les périodes de fermeture. Voir <a href=\"/ecoles/\">écoles</a>"]
        ],
        "Ce que nous traitons le plus souvent dans le département")}` },

    { h2: 'Qui décide, et comment le signalement circule',
      tocLabel: 'Interlocuteurs',
      html: `
      <p>C'est la question la plus déterminante pour le délai d'intervention. En Seine-Saint-Denis,
      l'arbre appartient rarement à celui qui le voit.</p>
      <ul class="plain">
        <li><strong>Parc départemental</strong> — le gestionnaire du parc. Signalement avec photo et localisation précise (allée, aire, équipement le plus proche).</li>
        <li><strong>Parc ou square communal, école publique</strong> — les services techniques de la commune.</li>
        <li><strong>Résidence gérée par un bailleur social</strong> — le bailleur, via l'antenne de proximité ou le gardien. C'est la voie la plus rapide.</li>
        <li><strong>Copropriété</strong> — le syndic. Voir <a href="/coproprietes/">copropriétés</a>.</li>
        <li><strong>Jardin privé</strong> — le propriétaire, directement.</li>
      </ul>
      <p>Un signalement accompagné d'une photo et d'une localisation exacte est traité nettement plus vite
      qu'un appel décrivant « un nid dans un arbre près du terrain de foot ».</p>` },

    { h2: 'Communes et secteurs couverts',
      html: `
      <p>Nous intervenons sur l'ensemble du département. Les demandes proviennent principalement des
      <strong>communes de l'est et du nord-est</strong>, plus proches des boisements, et des
      <strong>grands ensembles résidentiels arborés</strong> de la première couronne.</p>
      ${villes.length ? `<p>Pages consacrées à certaines communes du département :</p>
      <ul class="plain">${villes.map(v => `<li><a href="${v.url}">${esc(v.name)}</a> — ${esc(v.teaser)}</li>`).join('')}</ul>` : ''}
      <p>Pour les bailleurs et les collectivités gérant plusieurs sites, l'inventaire global est nettement
      plus efficace qu'une succession d'interventions déclenchées par les signalements : il permet de
      traiter avant que la situation ne devienne urgente. Voir <a href="/collectivites/">collectivités</a>.</p>` },

    { h2: 'Protéger les agents de terrain',
      html: `
      <p>Un point spécifique mérite d'être souligné dans un département où beaucoup d'espaces verts sont
      entretenus par des équipes municipales, départementales ou de bailleurs : ce sont ces agents qui sont
      les plus exposés.</p>
      <p>La tonte et surtout le soufflage sous un arbre infesté remettent en suspension les poils tombés au
      sol, au niveau du visage, pendant toute la durée de l'opération — et cela, plusieurs mois après le
      départ des chenilles. Le repérage des arbres porteurs et leur signalement aux équipes d'entretien font
      donc partie intégrante du traitement.
      Voir <a href="/espaces-verts/">espaces verts : protéger les équipes</a>.</p>` }
  ],
  faq: [
    { q: "Y a-t-il beaucoup de chenilles processionnaires en Seine-Saint-Denis ?",
      a: `<p>Moins que dans les départements de grande couronne bordés de massifs forestiers, mais les
      situations rencontrées concernent davantage de personnes à la fois, parce que les arbres sont dans des
      espaces publics ou collectifs très fréquentés.</p>` },
    { q: "Je suis locataire, à qui dois-je signaler un nid ?",
      a: `<p>À votre bailleur, via le gardien ou l'antenne de proximité, avec une photo et l'emplacement
      exact de l'arbre. C'est le bailleur qui engage l'intervention sur les espaces extérieurs de la
      résidence.</p>` },
    { q: "Les parcs départementaux sont-ils traités systématiquement ?",
      a: `<p>Les gestionnaires organisent leurs propres campagnes, en priorisant les zones d'accueil du
      public. Un nid constaté se signale au gestionnaire du parc.</p>` },
    { q: "Peut-on intervenir dans une résidence sans fermer les accès ?",
      a: `<p>Un périmètre de sécurité est indispensable pendant l'opération, mais il est généralement
      localisé autour de l'arbre et de sa zone de retombée. L'accès aux bâtiments reste organisable, à
      condition d'informer les occupants à l'avance.</p>` },
    { q: "Les arbres plantés récemment sont-ils concernés ?",
      a: `<p>Rarement dans leurs premières années : un jeune sujet offre peu de prise à une colonie.
      Le sujet se pose surtout lorsque l'arbre atteint une taille et une exposition qui en font un site de
      ponte attractif.</p>` }
  ],
  cta: {
    title: "Signaler un arbre dans un espace collectif",
    text: `Une photo et une localisation précise — nom de la résidence, allée, équipement le plus proche —
    accélèrent considérablement le traitement d'un signalement.`,
    primary: 'Signaler un arbre'
  },
  related: [
    { url: '/collectivites/', label: 'Collectivités', hint: 'Inventaire et campagnes' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Parties communes plantées' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Protection des agents d\'entretien' },
    { url: '/departements/94-val-de-marne/', label: 'Val-de-Marne (94)', hint: 'Département voisin, autre profil' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Cours et abords scolaires' },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
