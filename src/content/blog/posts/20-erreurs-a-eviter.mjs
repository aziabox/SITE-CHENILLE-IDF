import { safety, table, note } from '../../../lib/render.mjs';

export default {
  slug: 'erreurs-a-eviter-face-a-un-nid',
  category: 'conseils',
  title: 'Les erreurs à éviter face à un nid de processionnaires',
  description: "Brûler, arroser au jet, décrocher à la perche, balayer une procession : les sept gestes les plus courants, et pourquoi chacun aggrave la situation.",
  h1: 'Les erreurs à éviter face à un nid de processionnaires',
  excerpt: "Presque toutes les expositions sévères que l'on nous rapporte font suite à une tentative de retrait personnelle. Voici les sept gestes en cause.",
  datePublished: '2026-07-26',
  dateModified: '2026-09-19',
  lead: `Un nid dans un arbre donne envie d'agir tout de suite. C'est précisément le moment où l'on commet
  les gestes qui transforment un problème localisé en contamination de toute la parcelle.`,
  answer: `<p>Sept erreurs reviennent systématiquement : <strong>brûler le nid</strong>,
  <strong>l'arroser au jet</strong>, <strong>le décrocher à la perche sans protection</strong>,
  <strong>tirer dessus</strong>, <strong>balayer ou écraser une procession</strong>, <strong>tondre sous
  un arbre infesté</strong>, et <strong>jeter le nid aux déchets verts</strong>. Toutes ont le même effet :
  disperser les poils urticants au lieu de les confiner.</p>`,
  sections: [
    { h2: 'Le tableau des sept erreurs',
      html: `
      ${table(
        ['Geste', 'Ce qui se passe réellement'],
        [
          ['Brûler le nid sur l\'arbre', "Les gaz chauds projettent les poils en altitude et l'opérateur est en dessous ; risque d'incendie élevé sur résineux ; l'arbre est blessé"],
          ['Arroser au jet haute pression', "Le nid s'ouvre et les poils sont dispersés sur toute la parcelle, y compris chez le voisin"],
          ['Décrocher à la perche sans protection', "Le nid tombe, éclate au sol et libère son contenu au niveau de la respiration"],
          ['Tirer sur le nid', "Le nid éclate en hauteur et retombe en pluie de poils sur une large surface"],
          ['Balayer ou écraser une procession', "L'écrasement libère les poils de chaque chenille d'un coup, au niveau du sol"],
          ['Tondre sous un arbre infesté', "La lame projette en aérosol les poils déjà tombés, à hauteur de visage"],
          ['Jeter le nid aux déchets verts', "Les poils ne sont pas dégradés par le compostage ; le broyage disperse le problème à grande échelle"]
        ],
        'Sept gestes, un seul effet : la dispersion')}` },

    { h2: 'Pourquoi le feu est la pire des idées',
      html: `
      <p>C'est le geste le plus fréquemment envisagé, et il cumule tous les inconvénients.</p>
      <p>Les poils urticants ne sont pas détruits instantanément par la flamme : ils sont d'abord
      <strong>soulevés par les gaz chauds</strong>, qui montent — et l'opérateur, lui, est dessous, tête
      levée, bouche ouverte. C'est la configuration d'exposition maximale.</p>
      <p>S'ajoute le risque d'incendie. Un pin est un résineux : la résine est inflammable, le nid est en
      hauteur, et le feu n'est pas contrôlable à l'extrémité d'une perche. Chaque année, des départs de feu
      sont attribués à cette tentative.</p>
      ${safety(`<p>Il n'existe aucune situation dans laquelle brûler un nid de processionnaires soit la
      bonne réponse. Aucune.</p>`, 'Sans exception')}` },

    { h2: 'Les erreurs de « nettoyage »',
      html: `
      <p>Elles surviennent après, quand on croit le problème réglé, et elles causent une part importante
      des réactions rapportées.</p>
      <ul class="plain">
        <li><strong>Tondre.</strong> Sous un arbre qui a porté un nid, les poils tombés sont dans l'herbe. La tonte les projette au niveau du visage, pendant toute la durée de l'opération. Le risque persiste des mois après la saison.</li>
        <li><strong>Souffler les feuilles.</strong> Pire encore que la tonte : c'est l'opération qui génère la plus forte concentration de poils en suspension.</li>
        <li><strong>Balayer à sec.</strong> Même mécanisme, à plus petite échelle. Un ramassage humide, après arrosage léger pour plaquer les poils, est préférable.</li>
        <li><strong>Secouer le linge séché à proximité.</strong> Les poils s'accrochent aux textiles. Lavez sans secouer, séparément, à température élevée.</li>
        <li><strong>Passer l'aspirateur domestique</strong> sur un textile contaminé — un aspirateur ordinaire rejette les particules les plus fines dans la pièce.</li>
      </ul>` },

    { h2: 'Ce qu\'il faut faire à la place',
      html: `
      <ol>
        <li><strong>Ne pas s'approcher</strong> et ne rien secouer.</li>
        <li><strong>Baliser la zone</strong> au pied de l'arbre — un ruban suffit — et en interdire l'accès aux enfants et aux animaux.</li>
        <li><strong>Suspendre la tonte et le soufflage</strong> dans le secteur.</li>
        <li><strong>Rentrer</strong> linge, jouets, coussins et gamelles.</li>
        <li><strong>Photographier à distance</strong>, avec zoom, pour faire identifier.</li>
        <li><strong>Faire intervenir</strong> à la fenêtre adaptée à l'espèce et à la saison.</li>
      </ol>
      ${note(`<p>Ces cinq premières mesures ne coûtent rien et suppriment l'essentiel de l'exposition en
      attendant l'intervention. C'est la meilleure chose à faire dans les jours qui suivent une
      découverte.</p>`)}` },

    { h2: 'Et si l\'erreur a déjà été commise ?',
      html: `
      <p>Cela arrive, souvent avant même qu'on ait identifié l'insecte. Quelques repères :</p>
      <ul class="plain">
        <li><strong>Un nid a été décroché et est au sol</strong> — ne le manipulez pas davantage, ne le rouvrez pas, ne le laissez pas en plein vent. Balisez et signalez-le lors de l'intervention.</li>
        <li><strong>Un nid a été jeté dans un conteneur</strong> — ne le rouvrez pas. Signalez-le : il ne doit pas partir dans un circuit de broyage.</li>
        <li><strong>Une personne a été exposée</strong> — ne pas frotter, retirer les vêtements avec précaution, rincer abondamment, doucher. <a href="/chenilles-processionnaires-danger/">Voir la conduite à tenir</a>.</li>
        <li><strong>Un animal a été exposé</strong> — rinçage à l'eau claire sans frotter et appel immédiat au vétérinaire. <a href="/chenilles-processionnaires-chien/">Voir la marche à suivre</a>.</li>
        <li><strong>La zone a été contaminée</strong> — évitez-la, ne tondez pas, et signalez-le : l'intervention portera aussi sur le sol.</li>
      </ul>` }
  ],
  faq: [
    { q: "Peut-on décrocher un nid avec des gants épais ?",
      a: `<p>Les gants ne suffisent pas. Les poils volent, s'accrochent aux vêtements et atteignent le
      visage et les voies respiratoires. Une protection efficace est une combinaison fermée avec masque et
      lunettes.</p>` },
    { q: "Un insecticide en bombe peut-il fonctionner ?",
      a: `<p>Non. La soie du nid est très peu perméable : le produit atteint mal les chenilles, tandis que
      la pulvérisation fait tomber des poils. On cumule les inconvénients sans le bénéfice.</p>` },
    { q: "Que faire d'un nid déjà mis dans un sac poubelle ?",
      a: `<p>Ne le rouvrez pas et ne le laissez pas en plein vent. Signalez-le lors de l'intervention : il
      sera évacué par la filière adaptée plutôt que par le circuit des ordures ordinaires.</p>` },
    { q: "Peut-on tondre après le retrait du nid ?",
      a: `<p>Après la fin de la retombée des poils et le contrôle du sol. Le délai est indiqué à l'issue de
      l'intervention : il dépend de la hauteur du nid retiré, du vent et de la surface concernée.</p>` }
  ],
  related: [
    { url: '/blog/conseils/pourquoi-ne-pas-manipuler-un-nid/', label: 'Pourquoi ne pas manipuler un nid', hint: 'Le mécanisme expliqué' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'La méthode professionnelle' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Conduite à tenir après exposition' }
  ]
};
