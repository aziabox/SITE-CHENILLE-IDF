import { safety, note, steps } from '../../../lib/render.mjs';

export default {
  slug: 'que-faire-autour-d-une-ecole',
  category: 'danger',
  title: 'Chenilles processionnaires : que faire autour d\'une école ?',
  description: "Chêne de cour, abords, trajet scolaire : la marche à suivre pour une école ou une crèche, du contrôle de printemps à l'information des familles.",
  h1: "Chenilles processionnaires : que faire autour d'une école ?",
  excerpt: "Le balisage immédiat ne coûte rien et supprime l'essentiel du risque. C'est la première action, avant même d'appeler qui que ce soit.",
  datePublished: '2026-06-24',
  dateModified: '2026-09-19',
  lead: `Un chêne de cour porteur de nids met un établissement dans une situation délicate : le risque est
  réel, le calendrier scolaire ne s'interrompt pas, et les familles attendent une réponse. Voici l'ordre
  dans lequel procéder.`,
  answer: `<p>Dans l'ordre : <strong>baliser immédiatement</strong> la zone autour de l'arbre et interdire
  l'accès ; <strong>signaler au gestionnaire des locaux</strong> — la commune pour une école publique —
  avec une photo et la localisation ; <strong>programmer l'intervention hors présence des enfants</strong> ;
  et <strong>informer les familles</strong> de façon factuelle. Le balisage est gratuit et immédiat : c'est
  la première action.</p>`,
  sections: [
    { h2: 'Pourquoi les établissements scolaires sont concernés',
      html: `
      <p>Trois facteurs se combinent, et aucun n'est accidentel.</p>
      <p><strong>Les arbres.</strong> Beaucoup de cours franciliennes ont été plantées de chênes et de
      marronniers dans les décennies d'après-guerre, pour l'ombre. Le chêne est l'hôte de la
      <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>.</p>
      <p><strong>Le calendrier.</strong> Le pic urticant de cette espèce tombe de mai à juillet, en pleine
      année scolaire, aux beaux jours, quand les enfants passent le plus de temps dehors.</p>
      <p><strong>Le public.</strong> Les jeunes enfants jouent au sol, touchent, ramassent et portent les
      mains au visage.</p>` },

    { h2: 'Le contrôle de printemps, en dix minutes',
      html: `
      <p>Un membre de l'équipe peut le réaliser sans matériel ni formation particulière.</p>
      ${steps([
        { title: 'Lister les chênes', body: `<p>Dans la cour, le long des clôtures, sur le parvis, dans le square
          mitoyen et sur le trajet d'entrée. Feuilles lobées, glands au sol.</p>` },
        { title: 'Faire le tour de chaque tronc', body: `<p>À deux mètres de distance, en regardant jusqu'à cinq ou
          six mètres de hauteur. On cherche une plaque grise, mate, aplatie contre l'écorce.</p>` },
        { title: 'Regarder le pied de l\'arbre', body: `<p>Accumulation inhabituelle de débris clairs, de mues, de
          petits grains sombres réguliers.</p>` },
        { title: 'Comparer les houppiers', body: `<p>Un chêne nettement plus clairsemé que ses voisins en mai est un
          signal, même sans nid visible.</p>` },
        { title: 'Baliser et photographier', body: `<p>Sans s'approcher, sans gratter, sans secouer. Une photo prise
          à distance avec zoom suffit à une identification.</p>` }
      ])}
      ${safety(`<p>Ne demandez jamais à un agent d'établissement de retirer un nid, même « juste pour
      essayer ». Un nid de chêne à hauteur d'homme est extrêmement chargé en poils urticants, et le
      décrochage expose directement le visage.</p>`, 'Ce que les agents ne doivent pas faire')}` },

    { h2: 'Les mesures immédiates, gratuites',
      html: `
      <p>Entre la découverte et l'intervention, il s'écoule au mieux quelques jours. Ces mesures suppriment
      l'essentiel de l'exposition pendant ce délai.</p>
      <ul class="plain">
        <li><strong>Baliser un périmètre</strong> autour du tronc et le rendre inaccessible.</li>
        <li><strong>Déplacer les bancs, les tables et les modules de jeu</strong> situés sous l'arbre.</li>
        <li><strong>Suspendre la tonte et le soufflage</strong> dans la zone.</li>
        <li><strong>Donner une consigne simple aux enfants</strong> : on ne touche pas, on prévient un adulte.</li>
        <li><strong>Informer les familles</strong>, ce qui permet aussi aux parents de signaler une réaction.</li>
      </ul>` },

    { h2: 'Qui décide, et qui paie',
      html: `
      <p>C'est la question qui conditionne le délai.</p>
      <ul class="plain">
        <li><strong>École publique</strong> — la commune est propriétaire des locaux. Le signalement remonte de la direction aux services techniques ou aux espaces verts.</li>
        <li><strong>Collège</strong> — le département. <strong>Lycée</strong> — la région.</li>
        <li><strong>École privée, crèche associative ou d'entreprise</strong> — le gestionnaire de l'établissement.</li>
        <li><strong>Arbre situé hors emprise</strong> — square mitoyen, alignement de rue, parcelle voisine : le propriétaire de l'arbre, à identifier avant toute démarche.</li>
      </ul>
      ${note(`<p>Les collectivités qui intègrent les établissements scolaires dans un
      <a href="/collectivites/">inventaire annuel du patrimoine arboré</a> gagnent un temps considérable :
      les chênes de cour sont alors traités en avril, avant la formation des nids, plutôt qu'en urgence en
      juin.</p>`, 'Le gain de l\'anticipation')}` },

    { h2: 'Informer les familles sans inquiéter',
      html: `
      <p>Un message court et factuel vaut mieux qu'un silence, qui alimente les rumeurs, ou qu'une note
      alarmante, qui génère des appels. Trois éléments suffisent :</p>
      <ol>
        <li><strong>Ce qui a été constaté</strong> — un nid de chenilles processionnaires sur tel arbre.</li>
        <li><strong>Ce qui a été fait immédiatement</strong> — la zone est balisée et inaccessible.</li>
        <li><strong>Ce qui est prévu</strong> — une intervention professionnelle à telle date, hors présence des enfants.</li>
      </ol>
      <p>Ajoutez une ligne invitant à signaler toute réaction cutanée ou oculaire à l'enseignant, et à
      consulter un médecin en cas de gêne respiratoire, de gonflement du visage ou d'atteinte des yeux.</p>
      <p><a href="/ecoles/">Voir la page dédiée aux écoles, crèches et centres de loisirs</a>.</p>` }
  ],
  faq: [
    { q: "Faut-il fermer l'école ?",
      a: `<p>Ce n'est généralement pas nécessaire. Le balisage de la zone concernée et le report des jeux
      suffisent à supprimer l'exposition en attendant l'intervention. La décision appartient à la direction
      et au gestionnaire.</p>` },
    { q: "Peut-on intervenir pendant les vacances scolaires ?",
      a: `<p>C'est la fenêtre la plus simple, à condition qu'elle coïncide avec la période biologique utile.
      Les vacances de printemps tombent souvent bien pour le chêne.</p>` },
    { q: "Le traitement biologique est-il compatible avec une cour d'école ?",
      a: `<p>Les produits de biocontrôle s'appliquent conformément à leur autorisation, avec respect du
      délai de rentrée et hors présence du public. Dans un établissement, cela impose de caler l'application
      sur une période de fermeture.</p>` },
    { q: "Un contrôle annuel est-il nécessaire ?",
      a: `<p>Oui, et il est peu coûteux : une inspection au printemps pour les chênes, à l'automne si des
      pins ou des cèdres sont présents. Dans les communes bordant un massif, c'est le seul moyen de ne pas
      découvrir la situation en pleine récréation.</p>` }
  ],
  related: [
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Page de référence' },
    { url: '/chenilles-processionnaires-enfant/', label: 'Enfants', hint: 'Risques et conduite à tenir' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Le donneur d\'ordre habituel' }
  ]
};
