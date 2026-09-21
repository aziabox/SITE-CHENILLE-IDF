import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/75-paris/',
  title: 'Chenilles processionnaires à Paris (75) : intervention',
  description: "Chenilles processionnaires à Paris : bois de Vincennes et de Boulogne, parcs, cimetières et cours d'immeubles. Contraintes d'intervention en ville dense et interlocuteurs concernés.",
  h1: 'Chenilles processionnaires à Paris (75)',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Paris (75)', url: '/departements/75-paris/' }],
  datePublished: '2026-04-18',
  dateModified: '2026-09-16',
  service: {
    name: 'Traitement des chenilles processionnaires à Paris',
    type: 'Échenillage et traitement en milieu urbain dense',
    description: "Identification, échenillage et traitement des chenilles processionnaires sur arbres de parcs, de cours d'immeubles et d'espaces publics à Paris.",
    areaServed: ['Paris (75)']
  },
  lead: `À Paris, la question ne se pose presque jamais dans un jardin privé — il y en a peu — mais dans un
  parc, un cimetière, une cour d'immeuble ou une cour d'école. Ce déplacement change tout : les
  interlocuteurs, les contraintes de chantier et les horaires possibles.`,
  answer: `<p>Paris est concerné par les deux espèces, mais selon une géographie très particulière. La
  <strong>processionnaire du chêne</strong> se rencontre principalement dans les <strong>bois de Vincennes
  et de Boulogne</strong> et dans les grands parcs plantés de chênes. La <strong>processionnaire du
  pin</strong> touche les <strong>cèdres et pins noirs d'ornement</strong> des parcs, des cimetières et de
  certaines cours d'immeubles. Les interventions se font presque toujours en horaires décalés, pour des
  raisons d'accès et de fréquentation.</p>`,
  sections: [
    { h2: 'Où se pose réellement le problème dans Paris',
      tocLabel: 'Secteurs concernés',
      html: `
      <p>Le patrimoine arboré parisien est considérable, mais il est concentré dans des typologies de lieux
      bien identifiées, et toutes ne sont pas également concernées.</p>
      <ul class="plain">
        <li><strong>Les bois de Vincennes et de Boulogne</strong> — ce sont les deux grands ensembles de chênes du territoire parisien, avec des zones de promenade, des aires de jeux, des équipements sportifs et des hippodromes. La processionnaire du chêne y trouve un habitat continu.</li>
        <li><strong>Les grands parcs</strong> — Buttes-Chaumont, Montsouris, Bercy, La Villette, parc floral : des sujets âgés, des conifères d'ornement et une fréquentation familiale intense aux beaux jours.</li>
        <li><strong>Les cimetières</strong> — Père-Lachaise, Montparnasse, Batignolles : des allées plantées de vieux arbres, dont beaucoup de conifères, et un entretien manuel exposant les agents.</li>
        <li><strong>Les cours et jardins d'immeubles</strong> — souvent un seul arbre remarquable, parfois un cèdre planté au XIXe siècle, au milieu d'une cour utilisée quotidiennement.</li>
        <li><strong>Les cours d'école et les crèches</strong> — le sujet devient prioritaire dès qu'un chêne est présent. Voir <a href="/ecoles/">notre page dédiée</a>.</li>
        <li><strong>Les alignements de voirie</strong> — moins concernés, les essences dominantes de l'alignement parisien n'étant pas les hôtes de ces insectes, mais des chênes existent sur certains axes et places.</li>
      </ul>
      ${note(`<p>Un motif d'appel typiquement parisien : une copropriété haussmannienne dont la cour
      abrite un cèdre centenaire. L'arbre est protégé, apprécié, photographié — et il porte des nids. La
      question n'est jamais l'abattage : c'est l'accès et l'organisation du chantier dans une cour fermée.</p>`,
      'Le cas du cèdre de cour')}` },

    { h2: 'Les contraintes propres à la ville dense',
      tocLabel: 'Contraintes de chantier',
      html: `
      <p>Techniquement, un nid parisien se retire comme ailleurs. C'est tout le reste qui diffère.</p>
      ${table(
        ['Contrainte', 'Conséquence sur l\'intervention'],
        [
          ['Accès véhicule et stationnement', "Autorisation de stationnement à anticiper pour une nacelle ; parfois travail exclusivement à la perche"],
          ['Cours fermées et porches bas', "Matériel limité par le gabarit du porche : le choix se fait lors de la visite préalable"],
          ['Fréquentation continue', "Balisage renforcé et intervention tôt le matin ou en dehors des heures d'ouverture"],
          ['Mitoyenneté', "Fenêtres et balcons à proximité immédiate : information des occupants indispensable"],
          ['Arbres de grande hauteur en parc', 'Nacelle ou grimpeur, avec fermeture temporaire du secteur'],
          ['Vent en milieu urbain', "Effets de couloir entre immeubles : report du chantier plus fréquent qu'en périphérie"]
        ],
        "Ce qui distingue un chantier parisien")}` },

    { h2: 'À qui s\'adresser selon le lieu',
      html: `
      <p>À Paris plus qu'ailleurs, la première question est celle du gestionnaire de l'arbre.</p>
      <ul class="plain">
        <li><strong>Arbre de voirie, de parc, de square ou de bois</strong> — il relève de la Ville. Le signalement passe par les services de la Ville de Paris ou l'application de signalement municipale, avec photo et localisation précise.</li>
        <li><strong>Arbre de cour d'immeuble</strong> — partie commune : c'est le syndic qui engage l'intervention. Voir <a href="/coproprietes/">copropriétés</a>.</li>
        <li><strong>Arbre d'un établissement scolaire public</strong> — la Ville est propriétaire des locaux ; le signalement remonte de la direction aux services.</li>
        <li><strong>Arbre d'un site privé</strong> — bureaux, clinique, établissement privé : le gestionnaire du site. Voir <a href="/entreprises/">entreprises</a>.</li>
        <li><strong>Arbre de cimetière</strong> — gestion municipale, avec des contraintes de circulation et de respect des lieux qui allongent la préparation.</li>
      </ul>` },

    { h2: 'Le calendrier parisien',
      html: `
      <p>Deux nuances méritent d'être connues.</p>
      <p>D'abord, l'<strong>îlot de chaleur urbain</strong>. Paris est systématiquement plus chaud que sa
      périphérie, et les processions de la processionnaire du pin peuvent y démarrer avec quelques jours
      d'avance sur les plateaux de grande couronne. L'écart reste faible, mais il compte quand on pose des
      colliers de piégeage.</p>
      <p>Ensuite, la <strong>saisonnalité d'usage</strong>. Les parcs parisiens sont fréquentés toute
      l'année, mais l'affluence explose aux beaux jours — c'est-à-dire exactement pendant la période
      urticante de la processionnaire du chêne, de mai à juillet. Une intervention programmée en avril, avant
      la formation des nids, est bien plus simple à organiser qu'une intervention en juin, en pleine
      fréquentation.</p>
      <p>Voir le <a href="/traitement-chenilles-processionnaires/">calendrier complet des traitements</a>.</p>` },

    { h2: 'Ce que nous faisons à Paris',
      html: `
      <ul class="plain">
        <li><strong>Identification à distance</strong> sur photos, particulièrement utile en cour d'immeuble où l'on ne peut pas s'approcher.</li>
        <li><strong><a href="/echenillage/">Échenillage</a> et <a href="/traitement-processionnaire-du-chene/">aspiration de nids</a></strong> sur arbres de cour, de parc et d'établissement.</li>
        <li><strong>Interventions en horaires décalés</strong>, tôt le matin ou en dehors des périodes d'ouverture.</li>
        <li><strong>Inventaire de patrimoine arboré</strong> pour les gestionnaires multi-sites et les bailleurs.</li>
        <li><strong>Compte rendu écrit</strong> pour les syndics, utile en assemblée générale et en cas de réclamation d'un occupant.</li>
      </ul>` }
  ],
  faq: [
    { q: "Y a-t-il vraiment des chenilles processionnaires dans Paris intra-muros ?",
      a: `<p>Oui. Les bois de Vincennes et de Boulogne, qui font partie du territoire parisien, sont
      largement plantés de chênes. En cœur de ville, ce sont surtout les cèdres et les pins d'ornement des
      parcs, des cimetières et des cours d'immeubles qui sont concernés.</p>` },
    { q: "Comment signaler un arbre de parc ou de rue ?",
      a: `<p>Par les canaux de signalement de la Ville de Paris, avec une photo et une localisation précise
      — nom du parc, allée, numéro de rue. Plus la localisation est exacte, plus le traitement du
      signalement est rapide.</p>` },
    { q: "Peut-on intervenir sur un arbre dans une cour fermée ?",
      a: `<p>Oui, à condition que le matériel passe. Le gabarit du porche détermine ce qui est possible :
      dans beaucoup de cours parisiennes, le travail se fait à la perche depuis le sol, ce qui limite la
      hauteur atteignable. La visite préalable tranche cette question.</p>` },
    { q: "Faut-il une autorisation pour intervenir ?",
      a: `<p>Pour un arbre privé, non — l'accord du gestionnaire suffit. Si l'intervention nécessite une
      nacelle sur voie publique, une autorisation de stationnement est à prévoir, ce qui allonge le délai de
      quelques jours.</p>` },
    { q: "Les arbres d'alignement parisiens sont-ils concernés ?",
      a: `<p>Beaucoup moins que les arbres de parc : les essences dominantes de l'alignement parisien ne
      sont pas les hôtes de ces insectes. Des chênes existent néanmoins sur certaines places et avenues, et
      ils peuvent l'être.</p>` }
  ],
  cta: {
    title: "Un arbre de cour ou de parc à faire vérifier",
    text: `Envoyez une photo de l'arbre et de la zone suspecte, en précisant l'arrondissement et s'il s'agit
    d'un arbre privé ou public. Cela détermine l'interlocuteur autant que la méthode.`,
    primary: 'Faire identifier un arbre'
  },
  related: [
    { url: '/departements/92-hauts-de-seine/', label: 'Hauts-de-Seine (92)', hint: 'Parcs historiques limitrophes' },
    { url: '/departements/94-val-de-marne/', label: 'Val-de-Marne (94)', hint: 'Bois de Vincennes, rive est' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Arbres de cour et parties communes' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Cours plantées de chênes' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'espèce des bois parisiens" },
    { url: '/departements/', label: 'Toutes les zones', hint: 'Les huit départements' }
  ]
});
