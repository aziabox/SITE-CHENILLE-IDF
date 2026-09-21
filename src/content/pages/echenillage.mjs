import { standardPage } from '../../lib/layout.mjs';
import { figure, note, safety, steps, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/echenillage/',
  title: 'Échenillage professionnel : retrait des nids de processionnaires',
  description: "L'échenillage consiste à retirer physiquement les nids de chenilles processionnaires. Méthode, matériel, hauteurs d'intervention, sécurité et période idéale.",
  h1: 'Échenillage : retirer le nid, proprement',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Traitement', url: '/traitement-chenilles-processionnaires/' },
          { name: 'Échenillage', url: '/echenillage/' }],
  datePublished: '2026-03-02',
  dateModified: '2026-09-08',
  service: {
    name: 'Échenillage',
    type: 'Retrait mécanique de nids de chenilles processionnaires',
    description: "Échenillage professionnel des nids de chenilles processionnaires du pin et du chêne, avec confinement et élimination, en Île-de-France."
  },
  lead: `Le mot désigne une opération simple dans son principe et exigeante dans son exécution : décrocher
  le nid de l'arbre sans en disperser le contenu. Tout l'enjeu tient dans cette seconde partie.`,
  answer: `<p>L'échenillage est le <strong>retrait mécanique du nid</strong> et des chenilles qu'il contient.
  Sur pin, le rameau porteur est coupé à la perche télescopique et le nid immédiatement ensaché. Sur chêne,
  le nid plaqué au tronc est <strong>aspiré</strong> avec un appareil à filtration. Dans les deux cas, le nid
  n'est jamais laissé au sol : il est confiné, évacué et détruit.</p>`,
  sections: [
    { h2: "Le principe, et pourquoi il est plus délicat qu'il n'y paraît",
      tocLabel: 'Principe',
      html: `
      <p>Un nid de processionnaires est un sac de soie contenant, selon la colonie, plusieurs centaines de
      chenilles et l'accumulation de toutes leurs mues. Chaque mue a laissé derrière elle ses poils urticants.
      Un nid d'hiver bien développé contient donc plusieurs centaines de milliers de poils prêts à partir au
      premier choc.</p>
      <p>L'échenillage consiste à séparer ce sac de l'arbre <strong>sans le percer, sans le comprimer et sans
      le faire tomber</strong>. C'est la raison pour laquelle on ne coupe jamais la branche à la tronçonneuse,
      on ne pousse pas le nid à la perche, et on ne travaille pas par vent soutenu.</p>
      ${figure({ src: '/assets/img/echenillage-schema.svg', width: 960, height: 420,
        alt: "Un opérateur en combinaison coupe un nid de processionnaires à la perche télescopique et le recueille dans un sac fermé",
        caption: "Le nid coupé est récupéré et fermé immédiatement : c'est cette étape qui distingue un échenillage d'un simple décrochage." })}` },

    { h2: 'Le déroulé d\'un échenillage',
      tocLabel: 'Déroulé',
      html: `
      ${steps([
        { title: "Repérage et décision d'accès", body: `<p>On compte les nids, on mesure la hauteur, on regarde
          le dégagement autour de l'arbre. Le choix entre perche, nacelle et grimpeur se fait à ce moment.</p>` },
        { title: 'Périmètre de sécurité', body: `<p>La zone au vent du chantier est balisée. Les fenêtres proches
          sont fermées, le linge rentré, les animaux mis à l'abri. Dans un établissement recevant du public,
          l'intervention se cale en dehors des heures de fréquentation.</p>` },
        { title: 'Équipement de protection', body: `<p>Combinaison intégrale à capuche, masque filtrant, lunettes
          fermées, gants longs. L'équipement est traité après chaque chantier : les poils s'accrochent aux
          tissus et voyagent.</p>` },
        { title: 'Coupe ou aspiration', body: `<p>Sur pin, le rameau est sectionné net au sécateur de perche, au
          plus près du nid. Sur chêne, le nid est aspiré à la buse, sans racler l'écorce.</p>` },
        { title: 'Confinement immédiat', body: `<p>Le nid est reçu dans un sac résistant, fermé sur place. Rien ne
          touche le sol : c'est le point qui fait toute la différence pour la contamination résiduelle.</p>` },
        { title: 'Contrôle du pied et évacuation', body: `<p>On vérifie le sol, on retire les chenilles isolées,
          et les sacs partent vers une filière d'élimination adaptée. Un compte rendu récapitule les arbres
          traités.</p>` }
      ])}` },

    { h2: 'Quel matériel selon la hauteur',
      html: `
      ${table(
        ['Hauteur du nid', 'Moyen utilisé', 'Conditions'],
        [
          ["Jusqu'à 4 m", 'Perche courte depuis le sol', 'Accès dégagé au pied de l\'arbre'],
          ['4 à 12 m', 'Perche télescopique avec sécateur et sac', 'Sol stable, absence de vent fort'],
          ['Au-delà de 12 m', 'Nacelle élévatrice ou grimpeur-élagueur', 'Accès véhicule ou point d\'ancrage sur l\'arbre'],
          ['Nid sur tronc (chêne)', 'Aspirateur à filtration, sol ou nacelle', 'Alimentation électrique ou groupe autonome']
        ],
        "Le choix du moyen d'accès conditionne la durée et le coût de l'intervention")}
      <p>La hauteur n'est pas le seul critère : un nid situé à six mètres au-dessus d'une véranda vitrée est
      plus contraignant qu'un nid à dix mètres au milieu d'un pré.</p>` },

    { h2: 'Quand écheniller',
      html: `
      <p>Pour la <a href="/chenille-processionnaire-du-pin/">processionnaire du pin</a>, la période utile
      s'étend de <strong>novembre à février</strong> : le nid est constitué, la colonie est groupée à
      l'intérieur, et la descente n'a pas encore eu lieu. Un échenillage en mars reste possible mais arrive
      souvent après le départ d'une partie de la colonie.</p>
      <p>Pour la <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>, les nids ne sont
      visibles qu'à partir de <strong>mai</strong>. Le retrait se fait donc en pleine saison urticante, ce qui
      impose un balisage plus large et, en site public, un créneau hors fréquentation.</p>
      ${note(`<p>Un point contre-intuitif : sur chêne, il est utile de retirer aussi les <strong>anciens
      nids</strong>, même vides, y compris en hiver. Ils continuent à relarguer des poils à chaque coup de
      vent et sur chaque pluie ruisselante.</p>`)}` },

    { h2: "Ce que l'échenillage ne fait pas",
      html: `
      <p>Il supprime ce qui est présent. Il ne crée aucune protection pour l'avenir. Si l'arbre est situé
      près d'un foyer — une lisière de bois, un alignement de pins voisin — la recolonisation est probable
      dès la saison suivante.</p>
      <p>C'est pourquoi nous associons presque toujours l'échenillage à une mesure de suite :
      <a href="/piegeage-chenilles-processionnaires/">piégeage</a> pour intercepter, traitement biologique
      à la saison utile, ou simple <a href="/traitement-preventif/">surveillance annuelle</a> quand la
      pression est faible.</p>
      ${safety(`<p>Ne tentez pas un échenillage vous-même avec une échelle et un sécateur. Les deux risques
      se cumulent : chute et exposition massive aux poils. La grande majorité des réactions sévères que
      l'on nous décrit fait suite à une tentative personnelle de retrait.</p>`, 'Le faire soi-même')}` }
  ],
  faq: [
    { q: "Que devient le nid après l'échenillage ?",
      a: `<p>Il est ensaché sur place, transporté fermé et éliminé par une filière adaptée. Il ne part ni aux
      déchets verts, ni au compost, ni en déchetterie classique : les poils resteraient actifs.</p>` },
    { q: "Peut-on écheniller par mauvais temps ?",
      a: `<p>La pluie fine n'empêche pas l'opération et limite même l'envol des poils. Le vent, en revanche,
      est rédhibitoire : au-delà d'une brise modérée, le chantier est reporté, car les poils se disperseraient
      bien au-delà du périmètre balisé.</p>` },
    { q: "L'échenillage abîme-t-il l'arbre ?",
      a: `<p>Non, quand il est fait correctement. La coupe porte sur un rameau déjà défolié par la colonie.
      Sur chêne, l'aspiration ne touche pas le bois. Un arbre échenillé ne nécessite pas de soin particulier
      ensuite.</p>` },
    { q: "Combien de temps dure une intervention ?",
      a: `<p>Pour un à trois nids accessibles à la perche, comptez généralement une demi-journée sur place
      en incluant la sécurisation et le contrôle du sol. Une campagne sur un patrimoine arboré se planifie
      par journées entières.</p>` },
    { q: "Faut-il être présent pendant l'échenillage ?",
      a: `<p>Ce n'est pas obligatoire si l'accès est possible, mais c'est préférable pour le point de départ
      et le compte rendu. En copropriété, la présence d'un représentant du conseil syndical facilite la
      gestion du périmètre.</p>` }
  ],
  cta: {
    title: "Un nid accessible et identifié : l'échenillage règle le cas immédiatement",
    text: `Envoyez une photo de l'arbre entier et une du nid. Nous estimons la hauteur, le moyen d'accès
    nécessaire et la fenêtre d'intervention la plus pertinente.`,
    primary: 'Demander un échenillage'
  },
  related: [
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Confinement et élimination' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Toutes les méthodes', hint: 'Comparatif et calendrier' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Ce qui prend le relais après' },
    { url: '/blog/traitement/echenillage-comment-ca-marche/', label: "L'échenillage expliqué", hint: 'Article détaillé' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: "Organiser un échenillage en résidence" },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce la plus échenillée" }
  ]
});
