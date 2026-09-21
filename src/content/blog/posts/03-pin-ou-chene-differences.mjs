import { table, note } from '../../../lib/render.mjs';

export default {
  slug: 'pin-ou-chene-differences',
  category: 'identifier',
  title: 'Processionnaire du pin ou du chêne : quelles différences ?',
  description: "Arbre hôte, forme du nid, calendrier, descente au sol : toutes les différences entre la processionnaire du pin et celle du chêne.",
  h1: 'Processionnaire du pin ou du chêne : quelles différences ?',
  excerpt: "Deux espèces, deux calendriers opposés, deux techniques de retrait. Se tromper d'espèce, c'est intervenir six mois trop tôt ou six mois trop tard.",
  datePublished: '2026-06-14',
  dateModified: '2026-09-19',
  lead: `On emploie le même mot pour deux insectes qui n'ont en commun que leur défense — les poils
  urticants — et leur comportement grégaire. Tout le reste diffère, et c'est ce « tout le reste » qui
  détermine l'intervention.`,
  answer: `<p>La <strong>processionnaire du pin</strong> vit sur pins et cèdres, construit une boule de soie
  blanche en bout de branche, est active de l'automne à la fin de l'hiver et <strong>descend au sol en
  procession</strong> pour se nymphoser. La <strong>processionnaire du chêne</strong> vit sur chênes,
  construit un nid plat contre le tronc, est active au printemps et <strong>ne descend pas</strong> : elle
  se transforme en chrysalide dans le nid.</p>`,
  sections: [
    { h2: 'Le tableau complet',
      html: `
      ${table(
        ['', 'Processionnaire du pin', 'Processionnaire du chêne'],
        [
          ['Nom scientifique', '<em>Thaumetopoea pityocampa</em>', '<em>Thaumetopoea processionea</em>'],
          ['Arbres hôtes', 'Pins, cèdres', 'Chênes'],
          ['Forme du nid', 'Boule de soie blanche, opaque', 'Manchon plat gris'],
          ['Position du nid', 'Extrémité de rameau, en hauteur', 'Contre le tronc ou une charpentière'],
          ['Hauteur habituelle', 'Variable, souvent haut', 'Souvent 1,5 à 5 m'],
          ['Hivernage', 'Chenilles dans le nid', 'Œufs sur les rameaux'],
          ['Chenilles visibles', 'Octobre à mars', 'Avril à juillet'],
          ['Descente au sol', 'Oui, en procession', 'Non'],
          ['Lieu de nymphose', 'Enfouie dans le sol', 'Dans le nid'],
          ['Pic de risque', 'Février-mars', 'Mai-juillet'],
          ['Vol des papillons', 'Juin à septembre', 'Juillet à septembre'],
          ['Technique de retrait', 'Coupe du rameau', 'Aspiration du nid'],
          ['Piégeage possible', 'Oui (collier, phéromone)', 'Non en pratique']
        ],
        'Deux espèces que tout sépare, sauf les poils urticants')}` },

    { h2: 'Pourquoi le calendrier change tout',
      html: `
      <p>Les deux espèces sont décalées d'environ six mois. La conséquence est brutale : une méthode
      efficace sur l'une au mois de janvier est totalement inopérante sur l'autre à la même date.</p>
      <p><strong>En janvier</strong>, sur un pin, les chenilles sont dans leur nid d'hiver : c'est le bon
      moment pour un échenillage. Sur un chêne, à la même date, l'espèce n'existe qu'à l'état d'œuf, sur des
      rameaux fins et en hauteur : aucune action n'est possible.</p>
      <p><strong>En mai</strong>, c'est l'inverse. Sur un chêne, les nids se forment et les chenilles
      deviennent urticantes : c'est le moment d'intervenir. Sur un pin, la descente a déjà eu lieu, le nid
      est vide et le problème est passé dans le sol.</p>
      ${note(`<p>C'est pourquoi la toute première question que nous posons au téléphone n'est pas « où est le
      nid ? » mais « quel est l'arbre ? ». La réponse détermine la saison, la méthode, le matériel et
      l'urgence.</p>`, 'La première question')}` },

    { h2: 'Laquelle est la plus dangereuse ?',
      html: `
      <p>Les deux portent des poils urticants comparables. La différence de risque tient à l'exposition,
      pas à la toxicité.</p>
      <p>La <strong>processionnaire du pin</strong> est plus dangereuse pour les <strong>animaux</strong>,
      parce qu'elle descend au sol. Le chien rencontre la file, s'approche, flaire, parfois lèche. C'est
      l'espèce largement majoritaire dans les accidents canins.</p>
      <p>La <strong>processionnaire du chêne</strong> est plus problématique en <strong>espace
      collectif</strong>. Son nid est à hauteur d'homme, discret, et son pic d'activité tombe en mai-juin —
      exactement quand les cours d'école, les parcs et les jardins sont le plus fréquentés. Les cas
      d'exposition collective la concernent presque toujours.</p>` },

    { h2: 'Peut-on avoir les deux ?',
      html: `
      <p>Oui, et c'est plus fréquent qu'on ne le croit en Île-de-France, en particulier dans les secteurs
      qui associent pins sylvestres et chênaies — le sud de la Seine-et-Marne et de l'Essonne notamment.</p>
      <p>Une même propriété peut donc être concernée deux fois dans l'année : un échenillage sur le pin en
      décembre, une aspiration de nid sur le chêne en juin. Ce sont deux interventions distinctes, et il
      n'existe aucun traitement qui règle les deux en une passe.</p>
      <p>C'est la raison pour laquelle nous commençons toujours par un inventaire des essences présentes
      plutôt que par le seul arbre signalé.</p>` },

    { h2: 'Comment trancher en cas de doute sur l\'arbre',
      html: `
      <ul class="plain">
        <li><strong>Aiguilles groupées par deux ou trois, cônes ligneux</strong> → pin.</li>
        <li><strong>Aiguilles courtes en rosettes, port étalé en plateaux</strong> → cèdre.</li>
        <li><strong>Feuilles lobées, glands</strong> → chêne. En hiver, le chêne est nu et garde souvent ses feuilles sèches sur les jeunes rameaux.</li>
        <li><strong>Écailles plates, feuillage en écailles serrées</strong> → thuya ou cyprès : non concerné.</li>
      </ul>
      <p>Une photo d'une branche suffit à trancher, et c'est l'information la plus utile que vous puissiez
      nous transmettre. <a href="/chenilles-processionnaires/">Voir la page de comparaison complète</a>.</p>` }
  ],
  faq: [
    { q: "Les deux espèces peuvent-elles cohabiter sur le même arbre ?",
      a: `<p>Non : chacune est strictement liée à ses arbres hôtes. Elles peuvent en revanche cohabiter sur
      une même propriété, sur des arbres différents.</p>` },
    { q: "Un traitement peut-il agir sur les deux espèces ?",
      a: `<p>Le principe actif utilisé en biocontrôle agit sur les larves des deux espèces, mais les
      fenêtres d'application sont décalées de six mois. En pratique, ce sont donc deux interventions
      séparées.</p>` },
    { q: "Laquelle est la plus fréquente en Île-de-France ?",
      a: `<p>La processionnaire du chêne, parce que le chêne domine les grands massifs franciliens. La
      processionnaire du pin est plus localisée, surtout présente sur les sols sableux du sud et sur les
      conifères d'ornement des zones urbanisées.</p>` },
    { q: "Le collier de piégeage fonctionne-t-il sur chêne ?",
      a: `<p>Non. Les chenilles du chêne ne descendent pas au sol pour se nymphoser : un collier posé sur un
      chêne ne capturera pratiquement rien.</p>` }
  ],
  related: [
    { url: '/chenilles-processionnaires/', label: 'Les deux espèces', hint: 'La page de référence' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: 'Fiche détaillée' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Fiche détaillée' }
  ]
};
