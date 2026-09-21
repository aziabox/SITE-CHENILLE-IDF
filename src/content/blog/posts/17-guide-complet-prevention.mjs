import { table, note, steps } from '../../../lib/render.mjs';

export default {
  slug: 'guide-complet-prevention',
  category: 'prevention',
  title: 'Guide complet de prévention contre les processionnaires',
  description: "Toutes les mesures de prévention contre les processionnaires, classées par efficacité réelle : biocontrôle, piégeage, biodiversité, surveillance.",
  h1: 'Guide complet de prévention contre les chenilles processionnaires',
  excerpt: "Neuf mesures, classées de la plus efficace à la plus marginale, avec ce que chacune règle réellement — et ce qu'elle ne règle pas.",
  datePublished: '2026-07-16',
  dateModified: '2026-09-19',
  lead: `Toutes les mesures de prévention ne se valent pas. Certaines changent la situation en une saison,
  d'autres agissent sur plusieurs années, quelques-unes n'apportent presque rien. Voici le classement, avec
  les raisons.`,
  answer: `<p>Par ordre d'efficacité : <strong>1.</strong> traitement biologique sur jeunes larves ;
  <strong>2.</strong> retrait des nids avant la descente ; <strong>3.</strong> collier de piégeage ;
  <strong>4.</strong> surveillance annuelle à deux dates ; <strong>5.</strong> nichoirs à mésanges ;
  <strong>6.</strong> piège à phéromone ; <strong>7.</strong> gîtes à chauves-souris ;
  <strong>8.</strong> aménagement du sol ; <strong>9.</strong> diversification des essences. Les mesures
  se combinent, elles ne se remplacent pas.</p>`,
  sections: [
    { h2: 'Le classement, avec les réserves',
      html: `
      ${table(
        ['Mesure', 'Effet', 'Délai', 'Limite principale'],
        [
          ['Traitement biologique (Btk)', 'Fort', 'Immédiat', 'Fenêtre courte ; dépend de la météo et de la hauteur'],
          ['Retrait des nids', 'Fort', 'Immédiat', 'Ne protège pas contre la recolonisation'],
          ['Collier de piégeage', 'Fort sur le sol', 'Saison en cours', 'Pin uniquement ; pose et suivi exigeants'],
          ['Surveillance annuelle', 'Indirect mais décisif', 'Permanent', 'Ne fait rien par elle-même : elle permet d\'agir à temps'],
          ['Nichoirs à mésanges', 'Modéré et durable', 'Plusieurs saisons', 'Effet progressif, non quantifiable à court terme'],
          ['Piège à phéromone', 'Modéré + mesure', 'Année suivante', 'Aucun effet sur les nids existants'],
          ['Gîtes à chauves-souris', 'Faible à modéré', 'Plusieurs saisons', 'Dépend fortement du contexte et de l\'éclairage'],
          ['Aménagement du sol', 'Faible', 'Progressif', 'Complique l\'enfouissement sans l\'empêcher'],
          ['Diversification des essences', 'Structurel', 'Décennies', 'Ne se décide qu\'au renouvellement des plantations']
        ],
        "Ce que chaque mesure fait réellement")}
      ${note(`<p>Ce classement vaut pour un jardin ou un patrimoine arboré ordinaire. En lisière de massif
      forestier, les deux premières mesures gardent leur rang, mais l'objectif change : on protège une
      parcelle, on n'élimine pas une espèce.</p>`)}` },

    { h2: 'Les deux mesures qui changent tout',
      html: `
      <p><strong>Le traitement biologique sur jeunes larves.</strong> C'est la seule mesure qui empêche le
      problème d'exister. Une colonie supprimée avant la formation du nid ne produit ni poils accumulés, ni
      procession, ni zone de jardin inutilisable. Sa contrainte est la fenêtre : septembre-octobre sur pin,
      avril sur chêne. <a href="/blog/traitement/traitement-biologique-btk/">Comment il fonctionne</a>.</p>
      <p><strong>Le retrait des nids avant la descente.</strong> C'est la mesure de rattrapage quand la
      première fenêtre est passée. Elle donne un résultat immédiat et vérifiable, et supprime la source de
      poils. <a href="/echenillage/">Comment se déroule un échenillage</a>.</p>
      <p>Tout le reste est du complément — utile, parfois déterminant dans un cas précis, mais complément
      tout de même.</p>` },

    { h2: 'La surveillance : la mesure la plus rentable',
      html: `
      <p>Elle ne fait rien par elle-même. Elle permet tout le reste, parce qu'elle donne le seul avantage
      qui compte réellement dans ce métier : <strong>le temps</strong>.</p>
      ${steps([
        { title: 'Novembre — contrôle des conifères', body: `<p>Pins et cèdres, sur toutes leurs faces. On cherche
          une boule de soie blanche en bout de rameau, ou des amas diffus sur cèdre. Cinq minutes par
          arbre.</p>` },
        { title: 'Mai — contrôle des chênes', body: `<p>Tour complet de chaque tronc, à deux mètres, jusqu'à cinq ou
          six mètres de hauteur. On cherche une plaque grise aplatie. Regard sur le pied de l'arbre.</p>` },
        { title: 'Noter ce qui est vu', body: `<p>Même sommairement : quel arbre, quelle date, combien de nids. Sur
          deux ou trois ans, cela devient la donnée qui permet de cibler les traitements.</p>` }
      ])}
      <p>Un arbre repéré en novembre se traite dans de bonnes conditions et à un coût maîtrisé. Le même
      arbre découvert en mars impose un chantier plus lourd, un sol contaminé et un jardin inutilisable plus
      longtemps.</p>` },

    { h2: 'Les mesures de biodiversité',
      html: `
      <p>Elles n'ont rien d'anecdotique, mais leur effet se construit lentement et ne se mesure pas d'une
      année sur l'autre.</p>
      <ul class="plain">
        <li><strong>Mésanges charbonnières et bleues</strong> — elles consomment les chenilles, y compris urticantes. Un nichoir par arbre sensible, posé en automne ou en hiver, à environ trois mètres du sol, entrée orientée à l'est ou au sud-est, hors de portée des chats.</li>
        <li><strong>Chauves-souris</strong> — elles chassent les papillons adultes pendant la période de vol. Gîtes en hauteur, à l'écart des éclairages.</li>
        <li><strong>Huppe fasciée</strong> — elle consomme les chrysalides enfouies. Sa présence dépend du milieu : prairies, sols ouverts peu travaillés. Rien ne se « décide » ici, mais un milieu favorable aide.</li>
        <li><strong>Parasitoïdes et prédateurs divers</strong> — favorisés par une diversité végétale et par l'absence de traitements généralistes.</li>
      </ul>
      <p>Pour une collectivité, un levier souvent négligé mérite d'être cité : la réduction de l'éclairage
      nocturne des parcs, qui gêne les chauves-souris et attire les papillons.</p>` },

    { h2: 'Ce qui ne marche pas, ou pas assez',
      html: `
      <ul class="plain">
        <li><strong>Les répulsifs appliqués sur le tronc</strong> — sans effet démontré sur une colonie installée.</li>
        <li><strong>Les ultrasons</strong> — aucun effet documenté sur ces espèces.</li>
        <li><strong>Attendre un hiver froid</strong> — le nid assure une protection thermique à la colonie.</li>
        <li><strong>Abattre l'arbre</strong> — radical, rarement justifié, et sans effet sur les arbres voisins.</li>
        <li><strong>Traiter une seule fois et considérer le sujet clos</strong> — c'est l'erreur la plus fréquente, et la plus coûteuse à moyen terme.</li>
      </ul>
      <p><a href="/traitement-preventif/">Voir la page traitement préventif</a> et
      <a href="/blog/prevention/eviter-le-retour-des-processionnaires/">comment éviter le retour</a>.</p>` }
  ],
  faq: [
    { q: "Par où commencer si je ne sais rien de mon jardin ?",
      a: `<p>Par l'inventaire des essences : avez-vous un pin, un cèdre ou un chêne ? Si la réponse est non,
      le sujet est clos. Si oui, programmez le contrôle correspondant — novembre pour les conifères, mai
      pour les chênes.</p>` },
    { q: "Combien coûte une prévention annuelle ?",
      a: `<p>Cela dépend du nombre d'arbres, de leur hauteur et de la méthode. La surveillance ne coûte rien
      si vous la faites vous-même. En règle générale, trois ans de préventif reviennent moins cher qu'une
      seule campagne d'urgence sur un site fréquenté.</p>` },
    { q: "Les mesures de biodiversité suffisent-elles seules ?",
      a: `<p>Sur un site où l'exposition humaine est forte — école, aire de jeux —, non. Elles réduisent la
      pression mais ne garantissent pas l'absence de nid. Elles se combinent aux mesures directes.</p>` },
    { q: "Faut-il prévenir chaque année indéfiniment ?",
      a: `<p>Non. Après une à deux saisons suivies, la pression baisse souvent au point que la surveillance
      seule suffit. L'ajustement annuel vaut mieux qu'un traitement systématique reconduit.</p>` }
  ],
  related: [
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Page de référence' },
    { url: '/blog/prevention/proteger-son-jardin/', label: 'Protéger son jardin', hint: 'Les quatre étapes' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Plan pluriannuel sur patrimoine' }
  ]
};
