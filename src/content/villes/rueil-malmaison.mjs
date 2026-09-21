import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/92-hauts-de-seine/rueil-malmaison/',
  villeName: 'Rueil-Malmaison',
  deptSlug: '92-hauts-de-seine',
  villeTeaser: "grands parcs, propriétés arborées et résidences plantées dans les années 1960",
  title: 'Chenilles processionnaires à Rueil-Malmaison (92500)',
  description: "Rueil-Malmaison : parcs historiques, propriétés arborées et résidences plantées, où les conifères matures concentrent la processionnaire du pin.",
  h1: 'Chenilles processionnaires à Rueil-Malmaison',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Hauts-de-Seine (92)', url: '/departements/92-hauts-de-seine/' },
          { name: 'Rueil-Malmaison', url: '/departements/92-hauts-de-seine/rueil-malmaison/' }],
  datePublished: '2026-05-18',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Rueil-Malmaison',
    type: 'Échenillage, piégeage et traitement biologique',
    description: "Traitement des chenilles processionnaires à Rueil-Malmaison : parcs, propriétés arborées, copropriétés et sites tertiaires.",
    areaServed: ['Rueil-Malmaison', 'Hauts-de-Seine (92)']
  },
  lead: `Rueil combine trois patrimoines arborés d'époques différentes — parcs historiques, jardins de
  villas et espaces verts de résidences — et les trois ont en commun d'avoir été plantés de conifères
  d'ornement. C'est ce qui explique la présence marquée de la processionnaire du pin.`,
  answer: `<p>À Rueil-Malmaison, la <strong>processionnaire du pin</strong> est l'espèce la plus souvent
  rencontrée, sur les <strong>cèdres et pins d'ornement</strong> des parcs, des propriétés anciennes et des
  résidences des années 1960-1970. La <strong>processionnaire du chêne</strong> concerne les secteurs
  proches des boisements de coteau. Les principaux donneurs d'ordre sont les syndics, les propriétaires de
  grandes parcelles et les gestionnaires de sites tertiaires.</p>`,
  sections: [
    { h2: 'Trois patrimoines arborés superposés',
      html: `
      <p>La commune a connu trois vagues de plantation qui se lisent encore dans son paysage.</p>
      <ol>
        <li><strong>Les parcs historiques</strong> — domaines et jardins du XIXe siècle, avec des sujets remarquables, dont de nombreux cèdres plantés à une époque où cette essence était très recherchée.</li>
        <li><strong>Les jardins de villas</strong> — première moitié du XXe siècle, parcelles de taille confortable, conifères isolés en pelouse.</li>
        <li><strong>Les espaces verts de résidences</strong> — construites entre 1955 et 1980, systématiquement plantées à la livraison, avec des pins noirs, des cèdres et des chênes rouges aujourd'hui matures.</li>
      </ol>
      ${note(`<p>Ces trois strates ont un point commun : elles produisent des <strong>conifères isolés en
      situation dégagée</strong>. C'est exactement le profil d'arbre que recherche la processionnaire du
      pin pour pondre — beaucoup de soleil, pas de concurrence, peu de prédation.</p>`, 'Pourquoi cette commune')}` },

    { h2: 'Les configurations locales',
      html: `
      ${table(
        ['Contexte', 'Situation rencontrée', 'Donneur d\'ordre'],
        [
          ['Parc de propriété ancienne', "Cèdres de grande hauteur, nids diffus repérés tardivement", 'Propriétaire'],
          ['Résidence avec allée plantée', "Procession traversant le cheminement principal en février-mars", 'Syndic'],
          ['Aire de jeux sous conifères', "Zone inutilisable tant que les nids sont en place", 'Syndic ou bailleur'],
          ['Jardin de villa', "Pin noir isolé en pelouse, chien ou enfants sur la parcelle", 'Propriétaire'],
          ['Site tertiaire arboré', "Parking paysager, terrasse de restauration d'entreprise", 'Gestionnaire du site'],
          ['Secteur proche des boisements', "Chênes porteurs de nids plats, découverts au printemps", 'Selon la propriété']
        ],
        'Ce que nous rencontrons à Rueil-Malmaison')}` },

    { h2: 'La procession, principal motif d\'appel',
      html: `
      <p>Dans une commune où les conifères dominent, l'essentiel des appels se concentre entre janvier et
      mars — au moment où la colonie quitte le nid et descend le long du tronc.</p>
      <p>C'est le moment où le problème devient visible pour tout le monde : une file de chenilles traverse
      une allée de résidence, une pelouse collective, un parking. Les enfants s'arrêtent pour regarder, les
      chiens s'approchent. C'est aussi le moment où il est trop tard pour agir dans de bonnes conditions.</p>
      <p>La réponse locale la plus efficace consiste à <strong>anticiper d'un trimestre</strong> :</p>
      <ul class="plain">
        <li><strong>Novembre — janvier</strong> : <a href="/echenillage/">échenillage</a> des nids constitués, bien visibles sur les pins.</li>
        <li><strong>Décembre — février</strong> : <a href="/piegeage-chenilles-processionnaires/">pose de colliers</a> sur les arbres dont les nids sont inaccessibles, pour protéger le sol.</li>
        <li><strong>Septembre — octobre</strong> : <a href="/traitement-preventif/">traitement biologique</a> sur les arbres à historique, la solution la moins perturbante pour les résidents.</li>
      </ul>` },

    { h2: 'Le cas des résidences et des sites tertiaires',
      html: `
      <p>La commune compte à la fois un parc résidentiel important et des implantations tertiaires dotées
      d'espaces extérieurs paysagers. Dans les deux cas, le sujet n'est pas technique mais organisationnel :
      il faut neutraliser une zone commune pendant quelques heures sans conflit.</p>
      <p>Pour une copropriété, cela suppose un affichage préalable, un balisage et, idéalement, la présence
      d'un représentant du conseil syndical. Voir <a href="/coproprietes/">copropriétés</a>.</p>
      <p>Pour un site d'entreprise, cela suppose de caler l'intervention sur les horaires d'exploitation —
      tôt le matin, en soirée ou le week-end — et de fournir un compte rendu écrit. Voir
      <a href="/entreprises/">entreprises</a>.</p>` }
  ],
  faq: [
    { q: "Pourquoi tant de cèdres dans cette commune ?",
      a: `<p>C'est un héritage des plantations de villégiature du XIXe siècle, prolongé par les choix
      paysagers des résidences construites après-guerre. Ces sujets, aujourd'hui matures, réunissent les
      conditions recherchées par la processionnaire du pin.</p>` },
    { q: "Les chenilles peuvent-elles passer d'une résidence à l'autre ?",
      a: `<p>Les chenilles elles-mêmes se déplacent peu, mais les papillons volent la nuit sur plusieurs
      centaines de mètres. Un foyer non traité dans une résidence voisine alimente donc la pression chez
      vous, et inversement.</p>` },
    { q: "Une procession traverse déjà l'allée, que faire dans l'immédiat ?",
      a: `<p>Baliser la zone, interdire le passage, éloigner enfants et animaux, et ne pas tenter de
      balayer ou d'écraser la file — cela libère massivement les poils. L'intervention porte alors sur le
      sol autant que sur le nid.</p>` },
    { q: "Peut-on traiter les arbres d'une résidence sans fermer les accès ?",
      a: `<p>Le périmètre de sécurité reste localisé autour de l'arbre et de sa zone de retombée. L'accès aux
      bâtiments reste organisable, à condition d'informer les occupants à l'avance.</p>` },
    { q: "Les parcs publics sont-ils concernés ?",
      a: `<p>Ils peuvent l'être. Les gestionnaires organisent leurs propres campagnes ; un nid constaté se
      signale au gestionnaire du site avec une photo et une localisation précise.</p>` }
  ],
  cta: {
    title: "Anticiper d'un trimestre plutôt que subir la descente",
    text: `Si des processions ont traversé votre résidence ou votre jardin l'hiver dernier, c'est à l'automne
    que se prépare la saison suivante — pas en mars.`,
    primary: 'Préparer la prochaine saison'
  },
  related: [
    { url: '/departements/92-hauts-de-seine/', label: 'Hauts-de-Seine (92)', hint: 'Situation départementale' },
    { url: '/departements/92-hauts-de-seine/meudon/', label: 'Meudon', hint: 'Coteaux et terrains en pente' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger allées et pelouses' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Organiser une intervention en résidence' },
    { url: '/entreprises/', label: 'Entreprises', hint: 'Sites tertiaires arborés' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce dominante ici" }
  ]
});
