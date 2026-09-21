import { steps, table, note } from '../../../lib/render.mjs';

export default {
  slug: 'organiser-une-intervention',
  category: 'conseils',
  title: 'Comment organiser une intervention professionnelle ?',
  description: "Ce qu'il faut préparer avant, pendant et après une intervention : photos utiles, accès, périmètre et questions à poser au prestataire.",
  h1: 'Comment organiser une intervention professionnelle ?',
  excerpt: "Trois photos, deux informations et un accès dégagé : l'essentiel de ce qui fait gagner du temps — et de l'argent — se prépare avant l'arrivée du technicien.",
  datePublished: '2026-08-02',
  dateModified: '2026-09-19',
  lead: `Une intervention bien préparée coûte moins cher, dure moins longtemps et évite les allers-retours.
  Voici ce qui est réellement utile, et les questions qui méritent d'être posées à un prestataire.`,
  answer: `<p>Préparez trois éléments : des <strong>photos</strong> (l'arbre entier, la zone suspecte au
  zoom, le chemin d'accès au pied de l'arbre), les <strong>informations de base</strong> (essence, hauteur
  approximative du nid, ce qui se trouve en dessous), et un <strong>accès dégagé</strong> le jour J. Le
  jour de l'intervention, rentrez linge, jouets et animaux, fermez les fenêtres proches et prévenez les
  voisins immédiats.</p>`,
  sections: [
    { h2: 'Avant l\'appel : ce qui fait gagner du temps',
      html: `
      ${table(
        ['Information', 'Pourquoi elle compte'],
        [
          ["L'essence de l'arbre", "Elle détermine l'espèce, donc la saison, la méthode et l'urgence"],
          ['La hauteur du nid', "Elle détermine le moyen d'accès : perche, nacelle ou grimpeur"],
          ["Ce qu'il y a en dessous", "Terrasse, aire de jeux, potager, chenil : c'est le critère de priorité"],
          ["L'accès au pied de l'arbre", "Largeur du portail, escalier, pente, sol portant : détermine le matériel"],
          ['Le nombre de nids', "Plusieurs nids sur un même déplacement réduisent le coût unitaire"],
          ['Depuis quand vous l\'observez', "Aide à situer la colonie dans son cycle"]
        ],
        'Six informations qui permettent de chiffrer sans se déplacer')}
      ${note(`<p>La photo la plus souvent oubliée est celle du <strong>chemin d'accès</strong>. C'est
      pourtant celle qui détermine s'il faut une nacelle, une perche ou un grimpeur — donc le devis. Une
      photo depuis le portail jusqu'au pied de l'arbre vaut dix minutes d'explication.</p>`,
      'La photo qui manque toujours')}` },

    { h2: 'Les questions à poser au prestataire',
      html: `
      <p>Elles permettent de distinguer une intervention sérieuse d'un simple décrochage.</p>
      <ol>
        <li><strong>« De quelle espèce s'agit-il, et pourquoi maintenant ? »</strong> — la réponse doit mentionner l'arbre, le stade des chenilles et la fenêtre biologique. Si l'urgence est affirmée sans justification saisonnière, demandez des précisions.</li>
        <li><strong>« Comment le nid est-il confiné ? »</strong> — la réponse attendue est : ensaché sur place, sans toucher le sol.</li>
        <li><strong>« Que deviennent les déchets ? »</strong> — ils ne partent ni aux déchets verts, ni au compost.</li>
        <li><strong>« Quel périmètre de sécurité, et pendant combien de temps ? »</strong> — pour organiser l'usage du lieu.</li>
        <li><strong>« Que me conseillez-vous ensuite ? »</strong> — une intervention qui ne s'accompagne d'aucune recommandation de suite ignore le risque de recolonisation.</li>
        <li><strong>« Le devis est-il détaillé ? »</strong> — accès, méthode, nombre d'arbres, élimination : chaque poste doit être identifiable.</li>
      </ol>
      ${note(`<p>Méfiez-vous d'une promesse d'éradication définitive en une intervention. Tant qu'il reste
      des arbres hôtes dans le voisinage, la recolonisation est une question de distance et de vent.</p>`,
      'Le signal d\'alerte')}` },

    { h2: 'La préparation du jour J',
      html: `
      ${steps([
        { title: "Dégager l'accès", body: `<p>Au pied de l'arbre et sur le chemin qui y mène : véhicules, mobilier
          de jardin, jeux, pots. Si une nacelle est prévue, l'emplacement doit être libre et le sol
          portant.</p>` },
        { title: 'Rentrer ce qui traîne', body: `<p>Linge, jouets, coussins d'extérieur, gamelles, bâches. Ce qui
          reste dehors devra être lavé.</p>` },
        { title: 'Mettre les animaux à l\'abri', body: `<p>À l'intérieur, pendant toute la durée du chantier et de la
          retombée. Cela vaut aussi pour les chats, qui reviennent se coucher au pied des arbres.</p>` },
        { title: 'Fermer les ouvertures proches', body: `<p>Fenêtres, velux, portes-fenêtres donnant sur la zone de
          travail.</p>` },
        { title: 'Prévenir les voisins immédiats', body: `<p>Deux à trois jours avant. Cela évite les tensions, permet
          à chacun de rentrer son linge, et révèle souvent que plusieurs arbres sont concernés.</p>` },
        { title: 'Être présent au début et à la fin', body: `<p>Pour l'accès et le point de départ, puis pour le compte
          rendu et les consignes. Entre les deux, votre présence n'est pas nécessaire.</p>` }
      ])}` },

    { h2: 'Le cas des sites collectifs',
      html: `
      <p>En copropriété, en entreprise ou en établissement recevant du public, la préparation porte surtout
      sur l'information et le créneau.</p>
      <ul class="plain">
        <li><strong>Affichage préalable</strong> — cinq à sept jours avant : date, horaires, zones concernées, consignes simples.</li>
        <li><strong>Créneau hors fréquentation</strong> — tôt le matin, week-end, vacances scolaires, selon le site.</li>
        <li><strong>Balisage physique</strong> — rubalise, panneaux, fermeture des accès au périmètre.</li>
        <li><strong>Interlocuteur sur place</strong> — un représentant du conseil syndical, un gardien ou un responsable de site facilite beaucoup la gestion du périmètre.</li>
        <li><strong>Information de fin de chantier</strong> — à partir de quand les zones redeviennent utilisables, et ce qu'il ne faut pas faire d'ici là.</li>
      </ul>
      <p>Voir <a href="/coproprietes/">copropriétés</a>, <a href="/entreprises/">entreprises</a> et
      <a href="/ecoles/">écoles</a>.</p>` },

    { h2: 'Après l\'intervention',
      html: `
      <p>Trois points reviennent systématiquement, et ils conditionnent le résultat réel.</p>
      <ol>
        <li><strong>Respecter le délai avant reprise de la tonte.</strong> Tondre trop tôt remet en suspension les poils déjà tombés et annule une partie du bénéfice.</li>
        <li><strong>Laver ce qui est resté dehors</strong> — mobilier, textiles — sans les secouer d'abord.</li>
        <li><strong>Décider de la suite.</strong> Un arbre infesté cette année le sera probablement l'an prochain si rien ne change : c'est le moment d'arrêter une mesure de suite, pas six mois plus tard.</li>
      </ol>
      <p>Conservez le compte rendu : il est utile en copropriété, en entreprise et lors d'une revente.</p>` }
  ],
  faq: [
    { q: "Faut-il un devis avant l'intervention ?",
      a: `<p>Oui, et il doit être détaillé par poste : accès, méthode, nombre d'arbres et de nids,
      élimination. Pour un cas simple et accessible, le chiffrage peut se faire sur photos.</p>` },
    { q: "Peut-on intervenir en l'absence du propriétaire ?",
      a: `<p>Si l'accès est possible et convenu à l'avance, oui. Votre présence au début et à la fin reste
      préférable, notamment pour les consignes post-intervention.</p>` },
    { q: "Combien de temps le jardin est-il inutilisable ?",
      a: `<p>Le temps de l'intervention et de la retombée des poils, puis le contrôle du sol. Le délai est
      indiqué sur place : il dépend de la hauteur du nid retiré, du vent et de la surface concernée.</p>` },
    { q: "Peut-on grouper l'intervention avec des voisins ?",
      a: `<p>Oui, et c'est souvent la meilleure idée. Les arbres d'une même rue sont fréquemment concernés
      ensemble ; une intervention le même jour réduit nettement le coût pour chacun et supprime la source de
      proximité.</p>` }
  ],
  related: [
    { url: '/contact/', label: 'Contact', hint: 'Envoyer photos et informations' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Méthodes et calendrier' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Déroulé pour un jardin' }
  ]
};
