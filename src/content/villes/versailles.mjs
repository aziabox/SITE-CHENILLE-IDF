import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/78-yvelines/versailles/',
  villeName: 'Versailles',
  deptSlug: '78-yvelines',
  villeTeaser: "patrimoine arboré exceptionnel, alignements historiques et quartiers résidentiels boisés",
  title: 'Chenilles processionnaires à Versailles (78000)',
  description: "Versailles : un patrimoine arboré d'exception, des alignements historiques, des bois périphériques et des quartiers résidentiels plantés. Intervention sans atteinte aux arbres remarquables.",
  h1: 'Chenilles processionnaires à Versailles',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Yvelines (78)', url: '/departements/78-yvelines/' },
          { name: 'Versailles', url: '/departements/78-yvelines/versailles/' }],
  datePublished: '2026-05-10',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Versailles',
    type: 'Échenillage et aspiration de nids sur patrimoine arboré',
    description: "Traitement des chenilles processionnaires à Versailles : propriétés, copropriétés, établissements et patrimoine arboré, sans atteinte à la structure des arbres.",
    areaServed: ['Versailles', 'Yvelines (78)']
  },
  lead: `À Versailles, la contrainte qui prime n'est pas l'accès ni la hauteur : c'est la valeur des arbres.
  Sur un patrimoine arboré de cette qualité, une intervention se juge autant à ce qu'elle ne fait pas qu'à
  ce qu'elle fait.`,
  answer: `<p>À Versailles, la <strong>processionnaire du chêne</strong> est l'espèce principale, portée par
  les <strong>bois périphériques</strong> — Fausses-Reposes au nord-est, Satory au sud — et par les
  nombreux chênes du tissu urbain. La <strong>processionnaire du pin</strong> concerne les
  <strong>cèdres et pins d'ornement</strong> des parcs, des propriétés et des établissements. La règle
  locale : aucune coupe de charpentière pour accéder à un nid.</p>`,
  sections: [
    { h2: 'Une ville dessinée autour de ses arbres',
      html: `
      <p>Versailles présente une densité d'arbres remarquable pour une ville de cette taille : alignements
      d'avenues, bosquets, parcs, jardins de propriétés, cours d'établissements. Beaucoup de ces sujets sont
      anciens et ont une valeur qui dépasse largement le coût d'une intervention.</p>
      <p>Cela pose une règle de méthode que nous appliquons strictement ici :
      <strong>on n'ouvre jamais un accès en coupant</strong>. Un nid situé au milieu d'un houppier ne
      justifie pas la suppression d'une branche charpentière. Si l'accès est difficile, on recourt à la
      nacelle ou au grimpeur ; si le nid est réellement inatteignable, on protège le sol par
      <a href="/piegeage-chenilles-processionnaires/">piégeage</a> et on planifie un
      <a href="/traitement-preventif/">traitement préventif</a> pour la saison suivante.</p>
      ${note(`<p>Cette règle vaut aussi pour les haies et les alignements taillés : l'intervention se limite
      au rameau portant le nid. Un traitement qui laisse une trace visible sur la silhouette de l'arbre est
      un traitement raté.</p>`, 'Notre règle sur le patrimoine arboré')}` },

    { h2: 'Les bois périphériques et leur influence',
      html: `
      <p>La ville est bordée d'ensembles boisés qui constituent le réservoir de la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a> : le massif de
      Fausses-Reposes au nord-est, vers Ville-d'Avray et Chaville, et le plateau boisé de Satory au sud.</p>
      <p>Les quartiers situés à leur contact — franges nord-est et sud — reçoivent une pression plus forte
      que le centre-ville. C'est une distinction utile lorsqu'on établit un ordre de priorité sur un
      patrimoine : les arbres de frange méritent une inspection annuelle systématique, ceux du centre une
      inspection plus espacée.</p>` },

    { h2: 'Les contextes d\'intervention à Versailles',
      html: `
      ${table(
        ['Contexte', 'Espèce dominante', 'Point d\'attention'],
        [
          ['Propriété avec parc ancien', 'Les deux', "Inventaire numéroté, accès sans taille, campagne annuelle"],
          ['Copropriété avec cèdres d\'allée', 'Pin', "Nids diffus sur cèdre, souvent repérés tardivement"],
          ['Cour d\'établissement scolaire', 'Chêne', "Intervention hors présence des élèves. Voir <a href=\"/ecoles/\">écoles</a>"],
          ['Quartier en frange de bois', 'Chêne', "Inspection annuelle des troncs au printemps"],
          ['Jardin de ville, parcelle étroite', 'Les deux', "Accès matériel limité : travail à la perche ou au grimpeur"],
          ['Alignement de voirie', 'Chêne', "Signalement aux services de la commune"]
        ],
        'Ce que nous rencontrons à Versailles')}` },

    { h2: 'Contraintes de chantier en ville historique',
      html: `
      <p>Le tissu versaillais ajoute des contraintes logistiques qu'il vaut mieux anticiper.</p>
      <ul class="plain">
        <li><strong>Stationnement et autorisations</strong> — l'installation d'une nacelle sur voirie demande une autorisation, à prévoir plusieurs jours à l'avance.</li>
        <li><strong>Accès aux jardins de ville</strong> — nombreuses parcelles accessibles uniquement par un porche ou un passage étroit, ce qui limite le matériel.</li>
        <li><strong>Mitoyenneté</strong> — jardins imbriqués : l'information des voisins conditionne le bon déroulement du chantier, et permet souvent de constater que plusieurs arbres sont concernés.</li>
        <li><strong>Périmètres sensibles</strong> — abords d'établissements et de monuments, avec des contraintes d'horaires et de circulation.</li>
        <li><strong>Fréquentation touristique</strong> — sur les axes très passants, l'intervention se cale tôt le matin.</li>
      </ul>` },

    { h2: 'Le bon calendrier versaillais',
      html: `
      <p>Sur une ville dominée par le chêne, l'essentiel se joue au printemps. Trois rendez-vous
      structurent l'année :</p>
      <ol>
        <li><strong>Avril</strong> — fenêtre de <a href="/traitement-preventif/">traitement biologique</a> sur jeunes larves, calée sur le débourrement réel des chênes concernés.</li>
        <li><strong>Mai à juillet</strong> — inspection des troncs et <a href="/traitement-processionnaire-du-chene/">aspiration des nids</a>, en période urticante, avec balisage.</li>
        <li><strong>Novembre à février</strong> — retrait des anciens nids de chêne encore chargés de poils, et <a href="/echenillage/">échenillage des conifères</a> porteurs.</li>
      </ol>` }
  ],
  faq: [
    { q: "Faut-il une autorisation pour retirer un nid sur un arbre remarquable ?",
      a: `<p>Le retrait d'un nid ne constitue pas une atteinte à l'arbre et ne demande pas d'autorisation
      particulière, dès lors qu'aucune coupe de charpentière n'est réalisée. C'est précisément pour cela que
      nous n'en pratiquons jamais pour ouvrir un accès.</p>` },
    { q: "Comment accède-t-on à un nid situé haut dans un cèdre ?",
      a: `<p>Par nacelle si l'emprise au sol le permet, sinon par grimpeur. Sur un sujet remarquable, le
      grimpeur est souvent préférable : il n'exige aucun accès véhicule et permet un travail plus précis
      dans le houppier.</p>` },
    { q: "Les quartiers du centre sont-ils concernés ?",
      a: `<p>Moins que les franges bordant les bois, mais oui : les chênes et les conifères des jardins de
      ville et des cours d'établissements peuvent être porteurs. La pression y est simplement plus
      irrégulière.</p>` },
    { q: "Qui gère les arbres d'alignement des avenues ?",
      a: `<p>La collectivité gestionnaire de la voirie concernée. Un nid constaté sur un arbre de rue se
      signale aux services techniques, avec une photo et l'adresse précise.</p>` },
    { q: "Peut-on traiter pendant les vacances scolaires ?",
      a: `<p>C'est la fenêtre la plus simple pour les établissements, à condition qu'elle coïncide avec la
      période biologique utile. Les vacances de printemps tombent souvent bien pour le chêne.</p>` }
  ],
  cta: {
    title: "Un arbre de valeur porteur de nids",
    text: `Sur un patrimoine arboré, le choix du moyen d'accès compte autant que la méthode. Envoyez une
    photo de l'arbre entier : nous vous dirons ce qui est possible sans y toucher.`,
    primary: 'Demander un avis'
  },
  related: [
    { url: '/departements/78-yvelines/', label: 'Yvelines (78)', hint: 'Situation départementale' },
    { url: '/departements/78-yvelines/saint-germain-en-laye/', label: 'Saint-Germain-en-Laye', hint: 'Autre ville de lisière' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Moyens d\'accès en hauteur' },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: "L'espèce dominante ici" },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Établissements plantés de chênes' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Cèdres et allées plantées' }
  ]
});
