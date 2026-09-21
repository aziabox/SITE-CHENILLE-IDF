import { steps, table, safety } from '../../../lib/render.mjs';

export default {
  slug: 'echenillage-comment-ca-marche',
  category: 'traitement',
  title: 'Échenillage : comment fonctionne cette méthode ?',
  description: "Ce qu'est réellement un échenillage : couper ou aspirer sans ouvrir le nid, confiner, évacuer. Matériel, déroulé, conditions et limites.",
  h1: 'Échenillage : comment fonctionne cette méthode ?',
  excerpt: "Décrocher un nid est facile. Le décrocher sans en disperser le contenu sur tout le jardin est une autre affaire — et c'est là que se joue la qualité de l'intervention.",
  datePublished: '2026-07-04',
  dateModified: '2026-09-19',
  lead: `Le mot sonne technique, l'opération semble simple. En réalité, l'essentiel du savoir-faire ne porte
  pas sur le retrait du nid, mais sur ce qu'on fait dans les dix secondes qui suivent.`,
  answer: `<p>L'échenillage consiste à <strong>séparer le nid de l'arbre sans l'ouvrir</strong>, puis à le
  <strong>confiner immédiatement</strong> dans un sac fermé sur place, et enfin à l'<strong>éliminer</strong>
  par une filière adaptée. Sur pin, le rameau porteur est coupé au sécateur de perche ; sur chêne, le nid
  plaqué au tronc est aspiré. Le nid ne touche jamais le sol.</p>`,
  sections: [
    { h2: 'Pourquoi « ne pas ouvrir le nid » est toute la méthode',
      html: `
      <p>Un nid d'hiver bien développé contient plusieurs centaines de chenilles et l'accumulation de toutes
      leurs mues. Chaque mue a laissé derrière elle ses poils urticants. On parle de plusieurs centaines de
      milliers de poils prêts à partir au premier choc.</p>
      <p>Toute méthode qui perce, comprime ou fait tomber le nid vide ce stock dans l'air ambiant. C'est
      pourquoi on ne coupe pas la branche à la tronçonneuse, on ne pousse pas le nid à la perche, on ne tire
      pas dessus et on ne travaille pas par vent soutenu.</p>
      ${safety(`<p>Les trois méthodes à proscrire absolument : <strong>brûler</strong> le nid sur l'arbre
      (projection des poils par les gaz chauds, risque d'incendie sur résineux), le <strong>jet haute
      pression</strong> (dispersion sur toute la parcelle et chez le voisin), et le <strong>tir</strong>
      (le nid éclate et retombe en pluie).</p>`, 'Ce qui aggrave tout')}` },

    { h2: 'Le déroulé réel d\'un chantier',
      html: `
      ${steps([
        { title: 'Repérage', body: `<p>Comptage des nids, estimation de la hauteur, examen du dégagement autour de
          l'arbre. Un pin adulte cache souvent un second nid du côté opposé au point d'observation
          habituel.</p>` },
        { title: 'Périmètre de sécurité', body: `<p>La zone sous le vent est balisée. Fenêtres proches fermées,
          linge rentré, animaux à l'abri. En établissement recevant du public, l'intervention se cale hors
          fréquentation.</p>` },
        { title: 'Équipement', body: `<p>Combinaison intégrale à capuche, masque filtrant, lunettes fermées, gants
          longs. L'équipement est traité après chaque chantier : les poils s'accrochent aux tissus et
          voyagent d'un site à l'autre.</p>` },
        { title: 'Coupe ou aspiration', body: `<p>Sur pin, le rameau est sectionné net, au plus près du nid. Sur
          chêne, la buse d'aspiration décolle la soie sans racler l'écorce.</p>` },
        { title: 'Confinement immédiat', body: `<p>Le nid est reçu dans un sac résistant, fermé sur place. Rien ne
          touche le sol : c'est l'étape qui fait toute la différence pour la contamination résiduelle.</p>` },
        { title: 'Contrôle et évacuation', body: `<p>Vérification du pied de l'arbre, collecte des chenilles isolées,
          puis évacuation des sacs vers une filière adaptée. Compte rendu des arbres traités.</p>` }
      ])}` },

    { h2: 'Le matériel selon la hauteur',
      html: `
      ${table(
        ['Hauteur du nid', 'Moyen utilisé', 'Condition'],
        [
          ["Jusqu'à 4 m", 'Perche courte depuis le sol', "Accès dégagé au pied de l'arbre"],
          ['4 à 12 m', 'Perche télescopique avec sécateur et sac', 'Sol stable, vent faible'],
          ['Au-delà de 12 m', 'Nacelle élévatrice ou grimpeur-élagueur', "Accès véhicule ou point d'ancrage"],
          ['Nid sur tronc de chêne', 'Aspirateur à filtration', 'Alimentation électrique ou groupe autonome']
        ],
        "Le moyen d'accès conditionne la durée et le coût")}
      <p>La hauteur n'est pas le seul critère. Un nid à six mètres au-dessus d'une véranda vitrée est plus
      contraignant qu'un nid à dix mètres au milieu d'un pré.</p>` },

    { h2: 'Les conditions qui font reporter un chantier',
      html: `
      <ul class="plain">
        <li><strong>Le vent</strong> — au-delà d'une brise modérée, les poils se disperseraient bien au-delà du périmètre balisé. C'est la première cause de report.</li>
        <li><strong>L'accès impraticable</strong> — sol détrempé pour une nacelle, portail trop étroit, stationnement impossible.</li>
        <li><strong>La présence de public</strong> — un créneau doit être trouvé hors fréquentation sur un site collectif.</li>
        <li><strong>Le gel intense</strong> — la soie devient cassante et le nid se déchire plus facilement.</li>
      </ul>
      <p>La pluie fine, en revanche, n'empêche pas l'opération : elle limite même l'envol des poils.</p>` },

    { h2: 'Ce que l\'échenillage ne règle pas',
      html: `
      <p>Il supprime ce qui est présent. Il ne crée aucune protection pour l'avenir. Si l'arbre est proche
      d'un foyer — lisière de bois, alignement de pins voisin, arbre du voisin non traité —, la
      recolonisation est probable dès la saison suivante.</p>
      <p>Il ne nettoie pas non plus le sol : sous un pin qui a porté un nid tout l'hiver, les poils tombés
      restent urticants des mois. Un échenillage bien fait se termine donc toujours par des consignes sur le
      terrain, et souvent par une mesure de suite — <a href="/piegeage-chenilles-processionnaires/">collier
      de piégeage</a>, <a href="/traitement-preventif/">traitement d'automne</a> ou simple surveillance.</p>
      <p><a href="/echenillage/">Voir la page complète sur l'échenillage</a>.</p>` }
  ],
  faq: [
    { q: "L'échenillage abîme-t-il l'arbre ?",
      a: `<p>Non, quand il est fait correctement. La coupe porte sur un rameau déjà défolié par la colonie.
      Sur chêne, l'aspiration ne touche pas le bois. Aucun soin particulier n'est nécessaire ensuite.</p>` },
    { q: "Combien de temps dure une intervention ?",
      a: `<p>Pour un à trois nids accessibles à la perche, comptez généralement une demi-journée sur place,
      sécurisation et contrôle du sol compris.</p>` },
    { q: "Que devient le nid ?",
      a: `<p>Il est ensaché sur place, transporté fermé et éliminé par une filière adaptée. Il ne part ni
      aux déchets verts, ni au compost : les poils y resteraient actifs.</p>` },
    { q: "Peut-on écheniller soi-même avec une échelle ?",
      a: `<p>C'est fortement déconseillé : les deux risques se cumulent, chute et exposition massive. La
      majorité des réactions sévères que l'on nous décrit fait suite à une tentative personnelle de
      retrait.</p>` }
  ],
  related: [
    { url: '/echenillage/', label: 'Échenillage', hint: 'Page de référence' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Confinement et élimination' },
    { url: '/blog/conseils/pourquoi-ne-pas-manipuler-un-nid/', label: 'Pourquoi ne pas manipuler un nid', hint: 'Le mécanisme des poils' }
  ]
};
