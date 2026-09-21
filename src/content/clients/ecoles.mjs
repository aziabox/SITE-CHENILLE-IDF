import { standardPage } from '../../lib/layout.mjs';
import { safety, note, steps, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/ecoles/',
  title: 'Chenilles processionnaires autour des écoles et des crèches',
  description: "Chêne de cour, abords, aire de jeux : repérer, baliser et faire traiter les processionnaires dans un établissement accueillant des enfants.",
  h1: 'Écoles, crèches et centres de loisirs',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Écoles et crèches', url: '/ecoles/' }],
  datePublished: '2026-04-10',
  dateModified: '2026-09-09',
  service: {
    name: 'Intervention en établissement accueillant des enfants',
    type: 'Traitement des chenilles processionnaires en école, crèche et centre de loisirs',
    description: "Inspection, balisage, retrait des nids et traitement préventif des chenilles processionnaires dans les écoles, crèches et centres de loisirs d'Île-de-France."
  },
  lead: `C'est le contexte où le calendrier joue contre nous : la processionnaire du chêne atteint son pic
  d'activité en mai-juin, exactement quand les cours de récréation sont occupées du matin au soir.`,
  answer: `<p>Dans un établissement accueillant des enfants, la démarche tient en quatre points :
  <strong>inspecter les troncs de chênes au printemps</strong> — le nid plat est très discret —,
  <strong>baliser immédiatement</strong> toute zone suspecte, <strong>programmer l'intervention hors
  présence des enfants</strong> (mercredi, week-end, vacances), et <strong>informer les familles</strong>
  avant et après. La mesure la plus rapide reste la mise à distance, qui ne coûte rien.</p>`,
  sections: [
    { h2: 'Pourquoi les écoles sont particulièrement concernées',
      html: `
      <p>Trois facteurs se combinent, et aucun n'est le fruit du hasard.</p>
      <p>D'abord, <strong>les arbres</strong>. Beaucoup de cours d'école franciliennes ont été plantées de
      chênes et de marronniers dans les décennies d'après-guerre, pour l'ombre. Les chênes, y compris les
      chênes rouges, sont exactement l'hôte de la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>.</p>
      <p>Ensuite, <strong>le calendrier</strong>. Le pic urticant de cette espèce tombe de mai à juillet,
      c'est-à-dire en pleine année scolaire, aux beaux jours, quand les enfants passent le plus de temps
      dehors.</p>
      <p>Enfin, <strong>le public</strong>. Les jeunes enfants jouent au sol, touchent, ramassent et portent
      les mains au visage. Voir <a href="/chenilles-processionnaires-enfant/">chenilles processionnaires et
      enfants</a>.</p>
      ${note(`<p>La processionnaire du pin concerne aussi les établissements, mais différemment : quand un
      cèdre ou un pin d'ornement est présent dans la cour ou aux abords, le risque se concentre au moment
      des processions, de janvier à mars, au niveau du sol.</p>`)}` },

    { h2: 'Le contrôle de printemps, en dix minutes',
      tocLabel: 'Contrôle de printemps',
      html: `
      <p>Un agent ou un membre de l'équipe peut réaliser ce contrôle sans matériel. Il suffit d'en connaître
      le principe.</p>
      ${steps([
        { title: 'Lister les chênes', body: `<p>Dans la cour, le long des clôtures, sur le parvis, dans le square
          mitoyen et sur le trajet d'entrée. Feuilles lobées, glands au sol.</p>` },
        { title: 'Faire le tour de chaque tronc', body: `<p>À deux mètres de distance, en regardant jusqu'à cinq à
          six mètres de hauteur. On cherche une plaque grise, mate, aplatie contre l'écorce.</p>` },
        { title: 'Regarder le pied de l\'arbre', body: `<p>Accumulation inhabituelle de débris clairs, de mues, de
          petits grains sombres réguliers.</p>` },
        { title: 'Observer le houppier', body: `<p>Un chêne nettement plus clairsemé que ses voisins en mai est un
          signal, même sans nid visible depuis le sol.</p>` },
        { title: 'En cas de doute : baliser et photographier', body: `<p>Sans s'approcher, sans gratter, sans
          secouer. Une photo prise à distance avec zoom suffit à une identification.</p>` }
      ])}
      ${safety(`<p>Ne demandez jamais à un agent d'établissement de retirer un nid, même « juste pour
      essayer ». Un nid de chêne à hauteur d'homme est extrêmement chargé en poils urticants, et le
      décrochage expose directement le visage. Le balisage, lui, est à la fois sûr et immédiatement
      efficace.</p>`, 'Ce que les agents ne doivent pas faire')}` },

    { h2: 'Baliser avant de traiter',
      html: `
      <p>Entre la découverte et l'intervention, il s'écoule au mieux quelques jours. C'est pendant ce délai
      que se produisent les expositions, parce que la récréation continue.</p>
      ${table(
        ['Mesure', 'Effet immédiat'],
        [
          ['Périmètre balisé autour du tronc', "Supprime le contact direct et la station prolongée sous l'arbre"],
          ['Déplacement des jeux et des bancs', "Retire les points de regroupement de la zone de retombée"],
          ['Arrêt de la tonte et du soufflage', 'Évite la remise en suspension des poils déjà tombés'],
          ['Consigne simple aux enfants', '« On ne touche pas les chenilles, on prévient un adulte »'],
          ['Information aux familles', "Évite l'inquiétude, et permet aux parents de signaler une réaction"]
        ],
        'Des mesures gratuites, applicables le jour même')}` },

    { h2: 'Organiser l\'intervention',
      html: `
      <p>Deux contraintes structurent la planification : l'intervention ne peut pas avoir lieu en présence
      des enfants, et la fenêtre biologique de l'espèce est courte.</p>
      <ul class="plain">
        <li><strong>Créneaux privilégiés</strong> — mercredi après-midi selon l'organisation de l'établissement, week-end, vacances scolaires, ou tôt le matin avant l'ouverture.</li>
        <li><strong>Périmètre</strong> — balisage étendu pendant l'opération et maintenu le temps de la retombée des poils.</li>
        <li><strong>Méthode</strong> — <a href="/traitement-processionnaire-du-chene/">aspiration des nids</a> sur chêne, <a href="/echenillage/">échenillage</a> sur pin ou cèdre.</li>
        <li><strong>Traitement biologique</strong> — s'il est retenu, il s'applique en avril, avec respect du délai de rentrée du produit et en dehors de la présence du public.</li>
        <li><strong>Compte rendu</strong> — remis à la direction et au gestionnaire (commune, association, groupe), utile pour la communication aux familles et pour le suivi.</li>
      </ul>
      ${note(`<p>Pour une école publique, le donneur d'ordre est la commune, qui est propriétaire des
      locaux. Le signalement remonte donc de la direction de l'école au service des espaces verts ou au
      service bâtiments. Les <a href="/collectivites/">collectivités</a> intégrant les écoles dans leur
      inventaire annuel gagnent un temps considérable.</p>`, 'Qui décide')}` },

    { h2: 'Informer les familles sans inquiéter',
      html: `
      <p>Un message court et factuel vaut mieux qu'un silence, qui alimente les rumeurs, ou qu'une note
      alarmante, qui génère des appels. Trois éléments suffisent :</p>
      <ol>
        <li><strong>Ce qui a été constaté</strong> — un nid de chenilles processionnaires sur tel arbre de la cour.</li>
        <li><strong>Ce qui a été fait immédiatement</strong> — la zone est balisée et inaccessible aux enfants.</li>
        <li><strong>Ce qui est prévu</strong> — une intervention professionnelle à telle date, hors présence des enfants.</li>
      </ol>
      <p>Il est utile d'ajouter une ligne invitant les familles à signaler toute réaction cutanée ou
      oculaire à l'enseignant, et à consulter un médecin en cas de gêne respiratoire, de gonflement du
      visage ou d'atteinte des yeux.</p>` }
  ],
  faq: [
    { q: "Faut-il fermer l'école si un nid est découvert ?",
      a: `<p>Ce n'est généralement pas nécessaire. Le balisage de la zone concernée et le report des jeux
      suffisent à supprimer l'exposition, en attendant l'intervention. La décision appartient bien entendu
      à la direction et au gestionnaire.</p>` },
    { q: "Qui prend en charge l'intervention dans une école publique ?",
      a: `<p>La commune, propriétaire des locaux. Le signalement remonte de la direction de l'école aux
      services techniques. Pour une école privée ou une crèche associative, le gestionnaire est le donneur
      d'ordre.</p>` },
    { q: "Le traitement biologique est-il compatible avec une cour d'école ?",
      a: `<p>Les produits de biocontrôle s'appliquent conformément à leur autorisation, avec respect du
      délai de rentrée et hors présence du public. Dans un établissement scolaire, cela impose de caler
      l'application sur une période de fermeture.</p>` },
    { q: "Un contrôle annuel est-il nécessaire ?",
      a: `<p>Oui, et il est peu coûteux : une inspection au printemps pour les chênes, et à l'automne si des
      pins ou des cèdres sont présents. Dans les communes bordant un massif forestier, c'est le seul moyen
      de ne pas découvrir la situation en pleine récréation.</p>` },
    { q: "Que faire si un enfant a été en contact ?",
      a: `<p>Ne pas frotter, retirer les vêtements avec précaution, rincer abondamment à l'eau, laver les
      cheveux. Consulter un médecin en cas d'atteinte des yeux, de gêne respiratoire, de gonflement du
      visage ou de réaction étendue. Voir <a href="/chenilles-processionnaires-enfant/">la conduite à
      tenir détaillée</a>.</p>` }
  ],
  cta: {
    title: "Un doute sur un arbre de cour : faites-le vérifier",
    text: `Une photo du tronc prise à distance et la localisation de l'établissement suffisent pour un premier
    avis. Les situations où des enfants jouent sous un arbre porteur passent en priorité.`,
    primary: 'Signaler un arbre'
  },
  related: [
    { url: '/chenilles-processionnaires-enfant/', label: 'Enfants', hint: 'Risques et conduite à tenir' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'espèce concernée au printemps" },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Le donneur d\'ordre pour une école publique' },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: 'Aspiration et campagnes' },
    { url: '/blog/danger/que-faire-autour-d-une-ecole/', label: 'Autour d\'une école', hint: 'Article détaillé' },
    { url: '/blog/danger/proteger-les-enfants/', label: 'Protéger les enfants', hint: 'Mesures concrètes' }
  ]
});
