import { standardPage } from '../../lib/layout.mjs';
import { note, safety, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/destruction-nid-chenilles-processionnaires/',
  title: 'Destruction de nid de chenilles processionnaires',
  description: "Comment un nid de processionnaires est retiré, confiné et détruit : méthode selon l'espèce, élimination des déchets, erreurs dangereuses et cas d'urgence.",
  h1: 'Destruction d\'un nid de chenilles processionnaires',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Traitement', url: '/traitement-chenilles-processionnaires/' },
          { name: 'Destruction de nid', url: '/destruction-nid-chenilles-processionnaires/' }],
  datePublished: '2026-03-04',
  dateModified: '2026-09-08',
  service: {
    name: 'Destruction de nid de chenilles processionnaires',
    type: 'Retrait, confinement et élimination de nids',
    description: "Destruction des nids de chenilles processionnaires du pin et du chêne avec confinement immédiat et élimination par filière adaptée, en Île-de-France."
  },
  lead: `Retirer le nid n'est que la première moitié du travail. La seconde — l'empêcher de contaminer le
  terrain, le véhicule, la benne, le voisinage — est celle qui distingue une intervention professionnelle
  d'un décrochage à la perche.`,
  answer: `<p>La destruction d'un nid se fait en trois temps : <strong>retirer</strong> le nid sans l'ouvrir
  (coupe du rameau sur pin, aspiration sur chêne), le <strong>confiner</strong> immédiatement dans un sac
  fermé sur place, puis l'<strong>éliminer</strong> par une filière adaptée. Un nid décroché et laissé au
  sol, brûlé ou jeté aux déchets verts continue de libérer des poils urticants.</p>`,
  sections: [
    { h2: "Pourquoi un nid ne se « détruit » pas sur l'arbre",
      tocLabel: 'Retrait plutôt que destruction sur place',
      html: `
      <p>Le mot « destruction » induit en erreur. On n'anéantit pas un nid là où il est : on l'enlève entier.
      Toutes les méthodes qui prétendent le détruire en place — le feu, le jet haute pression, l'insecticide
      pulvérisé dans la soie — ont le même défaut : elles <strong>ouvrent</strong> le nid et libèrent son
      contenu.</p>
      <p>Un nid contient les mues de toute la colonie. Chaque mue a laissé ses poils. Ouvrir le nid revient à
      vider un sac de poussière urticante au-dessus d'un jardin, avec un vent qui l'emporte plus loin qu'on
      ne le croit.</p>
      ${safety(`<p><strong>Ne brûlez jamais un nid.</strong> La combustion projette les poils avec les gaz
      chauds, expose directement l'opérateur, abîme l'arbre et présente un risque d'incendie réel sur un pin
      résineux. C'est l'erreur la plus fréquente et la plus dommageable.</p>`, 'Le feu : jamais')}` },

    { h2: 'La méthode selon l\'espèce',
      html: `
      ${table(
        ['', 'Nid sur pin', 'Nid sur chêne'],
        [
          ['Emplacement', 'Bout de rameau, en hauteur', 'Plaqué au tronc ou à une charpentière'],
          ['Technique', 'Coupe du rameau porteur au sécateur de perche', 'Aspiration à la buse, appareil à filtration'],
          ['Réception', 'Sac fixé sous le nid ou perche à sac intégré', 'Cuve filtrante, vidée en sac fermé'],
          ['Après retrait', "Contrôle du sol au pied de l'arbre", "Traitement de l'écorce pour les poils résiduels"],
          ['Période', 'Novembre à février', 'Mai à juillet, et retrait des anciens nids hors saison']
        ],
        'Deux nids, deux gestes différents')}
      <p>Le détail du geste et du matériel est décrit sur la page <a href="/echenillage/">échenillage</a>.</p>` },

    { h2: "L'élimination : ce qui se passe après",
      html: `
      <p>Les sacs ne partent pas avec les déchets verts. Les poils urticants ne sont pas dégradés par le
      compostage, et un broyage disperserait le problème à grande échelle. Les déchets d'échenillage suivent
      une filière d'élimination adaptée aux déchets présentant un risque sanitaire.</p>
      <p>Pour un gestionnaire public ou une copropriété, ce point mérite d'être tracé : c'est une question
      qui revient en assemblée générale et en commission de sécurité. Nous fournissons un compte rendu
      précisant les arbres traités, le nombre de nids et le mode d'élimination.</p>
      ${note(`<p>Le véhicule et l'équipement sont traités après chaque chantier. Les poils s'accrochent aux
      tissus, aux sangles et aux gants : un matériel non nettoyé transporte le problème d'un chantier à
      l'autre.</p>`)}` },

    { h2: "Les cas où l'on intervient en urgence",
      tocLabel: 'Urgences',
      html: `
      <p>Toutes les situations ne relèvent pas du même délai. Nous traitons en priorité les configurations
      où l'exposition est immédiate et inévitable.</p>
      <ul class="plain">
        <li><strong>Nid au-dessus d'une aire de jeux, d'un préau ou d'un bac à sable</strong> — la zone est condamnée tant que le nid est là.</li>
        <li><strong>Procession en cours sur un cheminement</strong> — passage d'enfants, de chiens, accès d'immeuble.</li>
        <li><strong>Nid à hauteur d'homme sur un chêne de cour ou de parc</strong> — contact direct possible.</li>
        <li><strong>Contact déjà survenu</strong> — un animal ou une personne a été exposé ; la source doit être supprimée avant toute reprise d'usage.</li>
      </ul>
      <p>Dans ces cas, la mesure conservatoire est simple et immédiate : <strong>baliser et interdire la
      zone</strong>, arrêter la tonte et le soufflage, rentrer les jouets et les gamelles. Cela ne règle rien
      mais supprime l'exposition en attendant l'intervention.</p>` },

    { h2: 'Et le sol sous l\'arbre ?',
      html: `
      <p>C'est la partie oubliée. Sous un pin qui a porté un nid tout l'hiver, le sol a reçu des poils en
      continu. Sous un chêne, les poils tombent des nids à chaque pluie et à chaque coup de vent. Retirer le
      nid ne nettoie pas ce qui est déjà tombé.</p>
      <p>Selon la configuration, nous recommandons de ne pas tondre ni souffler pendant une période donnée,
      d'arroser doucement pour plaquer les poils, et de reporter les travaux de sol. Sur un espace public,
      cela se traduit par un maintien du balisage quelques jours après l'intervention.</p>` }
  ],
  faq: [
    { q: "Peut-on décrocher un nid soi-même et le mettre à la poubelle ?",
      a: `<p>C'est fortement déconseillé. Sans équipement, l'exposition est quasi certaine au moment du
      décrochage, et le nid continue de libérer des poils dans le conteneur. Si l'opération a déjà été faite,
      ne rouvrez pas le sac et ne le laissez pas en plein vent.</p>` },
    { q: "Un insecticide en bombe peut-il détruire un nid ?",
      a: `<p>Non, et c'est une mauvaise idée. La soie du nid est très peu perméable : le produit atteint mal
      les chenilles, tandis que la pulvérisation fait tomber des poils. On retrouve alors les inconvénients
      sans les bénéfices.</p>` },
    { q: "Le nid est vide, faut-il quand même le retirer ?",
      a: `<p>Oui, particulièrement sur chêne. Un nid vide reste chargé de poils pendant des mois. Sur un
      arbre proche d'un lieu de passage, son retrait fait partie du traitement.</p>` },
    { q: "Combien de nids un arbre peut-il porter ?",
      a: `<p>Un pin peut porter d'un à plusieurs nids selon sa taille et l'ancienneté de l'infestation. Sur
      chêne, il n'est pas rare de trouver trois à cinq nids sur un sujet adulte, dont certains sur des
      branches hautes invisibles depuis le sol.</p>` },
    { q: "L'intervention laisse-t-elle des traces sur l'arbre ?",
      a: `<p>Sur pin, il reste l'amorce du rameau coupé, qui se referme naturellement. Sur chêne, l'aspiration
      ne laisse pas de marque. Aucun soin particulier n'est nécessaire ensuite.</p>` }
  ],
  cta: {
    title: "Nid au-dessus d'une zone fréquentée : à traiter en priorité",
    text: `Si le nid surplombe une terrasse, une aire de jeux, un cheminement ou une entrée d'immeuble,
    signalez-le en précisant la hauteur et l'usage du lieu : ces situations passent devant les autres.`,
    primary: 'Demander une intervention rapide'
  },
  related: [
    { url: '/echenillage/', label: 'Échenillage', hint: 'La technique de retrait en détail' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Avant de conclure à une infestation' },
    { url: '/traitement-curatif/', label: 'Traitement curatif', hint: 'Répondre à une infestation installée' },
    { url: '/blog/conseils/erreurs-a-eviter-face-a-un-nid/', label: 'Les erreurs à éviter', hint: 'Ce que font les gens, et pourquoi ça aggrave' },
    { url: '/blog/conseils/pourquoi-ne-pas-manipuler-un-nid/', label: 'Pourquoi ne pas manipuler un nid', hint: 'Le mécanisme des poils' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Traçabilité et élimination des déchets' }
  ]
});
