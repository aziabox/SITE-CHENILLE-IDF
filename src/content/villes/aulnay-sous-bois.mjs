import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/93-seine-saint-denis/aulnay-sous-bois/',
  villeName: 'Aulnay-sous-Bois',
  deptSlug: '93-seine-saint-denis',
  villeTeaser: "grands parcs, ensembles collectifs plantés et quartiers pavillonnaires anciens",
  title: 'Chenilles processionnaires à Aulnay-sous-Bois (93600)',
  description: "Aulnay-sous-Bois : grands parcs, ensembles collectifs plantés et pavillonnaire arboré. Qui signale, qui décide et qui intervient.",
  h1: 'Chenilles processionnaires à Aulnay-sous-Bois',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Seine-Saint-Denis (93)', url: '/departements/93-seine-saint-denis/' },
          { name: 'Aulnay-sous-Bois', url: '/departements/93-seine-saint-denis/aulnay-sous-bois/' }],
  datePublished: '2026-05-24',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Aulnay-sous-Bois',
    type: 'Échenillage et campagnes sur patrimoine arboré',
    description: "Traitement des chenilles processionnaires à Aulnay-sous-Bois : espaces verts de résidences, parcs, établissements et quartiers pavillonnaires.",
    areaServed: ['Aulnay-sous-Bois', 'Seine-Saint-Denis (93)']
  },
  lead: `Aulnay illustre bien la situation de la Seine-Saint-Denis : un patrimoine arboré concentré dans de
  grands espaces verts très fréquentés et dans les plantations des ensembles collectifs. Quand un arbre est
  porteur, il ne concerne jamais une seule famille.`,
  answer: `<p>À Aulnay-sous-Bois, les chenilles processionnaires concernent surtout les <strong>grands
  parcs de proximité</strong>, les <strong>espaces verts des ensembles collectifs</strong> plantés dans les
  décennies 1950-1970, et les <strong>jardins pavillonnaires anciens</strong>. La question déterminante
  pour le délai d'intervention est celle du gestionnaire de l'arbre : bailleur, syndic, commune ou
  propriétaire.</p>`,
  sections: [
    { h2: 'Trois types d\'espaces arborés',
      html: `
      <p>La commune juxtapose trois patrimoines très différents, qui n'appellent ni les mêmes interlocuteurs
      ni les mêmes modes d'intervention.</p>
      <ul class="plain">
        <li><strong>Les grands parcs</strong> — espaces aménagés et plantés, aujourd'hui matures, avec une fréquentation familiale importante : aires de jeux, pelouses, cheminements, plans d'eau.</li>
        <li><strong>Les ensembles collectifs</strong> — espaces verts plantés à la livraison, entre les années 1950 et 1970, souvent avec des conifères d'ornement et des chênes rouges. Ces arbres sont aujourd'hui au pied direct des bâtiments.</li>
        <li><strong>Les quartiers pavillonnaires</strong> — parcelles de taille modeste, jardins plantés par les propriétaires successifs, avec des conifères d'ornement fréquents.</li>
      </ul>
      ${note(`<p>La différence essentielle avec un département de grande couronne tient au
      <strong>nombre de personnes concernées par arbre</strong>. En pavillonnaire de lisière, un pin
      infesté concerne une famille. Ici, un pin infesté au milieu d'un espace vert collectif concerne des
      dizaines de foyers, et souvent une aire de jeux.</p>`, 'Ce qui change le degré d\'urgence')}` },

    { h2: 'Les situations les plus fréquentes',
      html: `
      ${table(
        ['Situation', 'Qui engage l\'intervention', 'Réponse'],
        [
          ['Conifère en pied d\'immeuble', 'Bailleur ou syndic', "Échenillage en horaires décalés, information des occupants"],
          ['Nid au-dessus d\'une aire de jeux', 'Gestionnaire de l\'espace', 'Balisage immédiat puis intervention prioritaire'],
          ['Arbre de parc public', 'Gestionnaire du parc', 'Signalement avec photo et localisation précise'],
          ['Chêne de cour d\'école', 'Commune', "Intervention hors présence des élèves"],
          ['Pin dans un jardin pavillonnaire', 'Propriétaire', "Échenillage en hiver, surveillance ensuite"],
          ['Alignement de parking résidentiel', 'Bailleur ou syndic', 'Traitement par tronçons, stationnement déplacé']
        ],
        "Qui fait quoi à Aulnay-sous-Bois")}` },

    { h2: 'Signaler efficacement',
      html: `
      <p>Dans un contexte où la plupart des arbres relèvent d'un gestionnaire, la qualité du signalement
      détermine le délai. Un signalement utile comporte trois éléments :</p>
      <ol>
        <li><strong>Une photo</strong> — prise à distance, avec zoom. Elle permet d'écarter immédiatement les fausses alertes, qui représentent une part importante des signalements.</li>
        <li><strong>Une localisation précise</strong> — nom de la résidence, numéro de bâtiment, allée, équipement le plus proche. « Un arbre près du terrain de sport » ne suffit pas.</li>
        <li><strong>L'usage du sol en dessous</strong> — aire de jeux, cheminement, parking, banc. C'est ce qui détermine la priorité.</li>
      </ol>
      <p>Pour un locataire, la voie la plus rapide passe par le gardien ou l'antenne de proximité du
      bailleur. Pour un copropriétaire, par le syndic. Voir <a href="/coproprietes/">copropriétés</a> et
      <a href="/collectivites/">collectivités</a>.</p>` },

    { h2: 'Protéger aussi les agents d\'entretien',
      html: `
      <p>Un aspect souvent oublié : dans les résidences et les espaces publics, ce sont les équipes
      d'entretien qui sont les plus exposées. La tonte et surtout le soufflage sous un arbre porteur
      remettent en suspension les poils tombés au sol, au niveau du visage, pendant toute la durée de
      l'opération — et cela des mois après le départ des chenilles.</p>
      <p>Le repérage des arbres porteurs et leur signalement aux équipes d'entretien font donc partie du
      traitement, au même titre que le retrait du nid. Voir
      <a href="/espaces-verts/">espaces verts : protéger les équipes</a>.</p>` }
  ],
  faq: [
    { q: "Je suis locataire, à qui dois-je signaler un nid ?",
      a: `<p>À votre bailleur, via le gardien ou l'antenne de proximité, avec une photo et l'emplacement
      exact de l'arbre. C'est le bailleur qui engage l'intervention sur les espaces extérieurs de la
      résidence.</p>` },
    { q: "Combien de temps une aire de jeux reste-t-elle fermée ?",
      a: `<p>Le temps de l'intervention et de la retombée des poils, puis le contrôle du sol. Le délai est
      indiqué à l'issue du chantier : il dépend de la hauteur du nid retiré, du vent le jour de
      l'intervention et de la surface concernée.</p>` },
    { q: "Les parcs de la ville sont-ils traités systématiquement ?",
      a: `<p>Les gestionnaires organisent leurs propres campagnes en priorisant les zones d'accueil du
      public. Un nid constaté se signale au gestionnaire du site.</p>` },
    { q: "Mon pavillon a un pin porteur : cela concerne-t-il mes voisins ?",
      a: `<p>Oui. Les parcelles étant petites, la procession traverse facilement une clôture et les poils se
      dispersent au-delà. Une intervention coordonnée entre voisins est plus efficace et moins coûteuse pour
      chacun.</p>` },
    { q: "Peut-on intervenir sans gêner les résidents ?",
      a: `<p>Le périmètre de sécurité reste localisé autour de l'arbre. L'accès aux bâtiments reste
      organisable, à condition d'informer les occupants quelques jours à l'avance par affichage.</p>` }
  ],
  cta: {
    title: "Signaler un arbre dans un espace collectif",
    text: `Une photo prise à distance, le nom de la résidence et l'usage du sol en dessous : ces trois
    éléments permettent de hiérarchiser correctement un signalement.`,
    primary: 'Signaler un arbre'
  },
  related: [
    { url: '/departements/93-seine-saint-denis/', label: 'Seine-Saint-Denis (93)', hint: 'Situation départementale' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Parties communes plantées' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Parcs et patrimoine communal' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Protection des agents' },
    { url: '/chenilles-processionnaires-enfant/', label: 'Protéger les enfants', hint: 'Aires de jeux' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Déroulé d\'une intervention' }
  ]
});
