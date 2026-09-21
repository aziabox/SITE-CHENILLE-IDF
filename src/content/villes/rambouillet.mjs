import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/78-yvelines/rambouillet/',
  villeName: 'Rambouillet',
  deptSlug: '78-yvelines',
  villeTeaser: "habitat dispersé dans un très vaste massif, sans véritable lisière",
  title: 'Chenilles processionnaires à Rambouillet (78120)',
  description: "Rambouillet : un habitat dispersé au cœur d'un très vaste massif de chênes, où la notion de lisière disparaît. Stratégie de protection pour une propriété en forêt.",
  h1: 'Chenilles processionnaires à Rambouillet',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Yvelines (78)', url: '/departements/78-yvelines/' },
          { name: 'Rambouillet', url: '/departements/78-yvelines/rambouillet/' }],
  datePublished: '2026-05-14',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Rambouillet',
    type: 'Aspiration de nids, échenillage et traitement biologique',
    description: "Traitement des chenilles processionnaires dans le secteur de Rambouillet : propriétés forestières, hameaux, équipements et patrimoine communal.",
    areaServed: ['Rambouillet', 'Yvelines (78)']
  },
  lead: `À Rambouillet, la question de la lisière ne se pose pas — parce qu'il n'y en a pas vraiment. Le
  massif est si étendu et l'habitat si dispersé que beaucoup de propriétés sont, de fait, des clairières
  dans la forêt.`,
  answer: `<p>Dans le secteur de Rambouillet, la <strong>processionnaire du chêne</strong> est l'espèce
  dominante, portée par un massif de chênes d'une étendue exceptionnelle. La particularité locale est
  l'<strong>habitat dispersé</strong> : hameaux, propriétés isolées et lotissements enclavés dans le
  boisement. La stratégie utile consiste à protéger une <strong>zone d'usage</strong> — maison, terrasse,
  aire de jeux — plutôt qu'une parcelle entière.</p>`,
  sections: [
    { h2: 'Quand la propriété est dans la forêt',
      html: `
      <p>Dans la plupart des communes, on distingue la ville, la lisière, puis le massif. Autour de
      Rambouillet, cette gradation n'existe pas : le bâti s'insère dans le couvert forestier, et une
      propriété peut compter plusieurs dizaines de chênes, dont certains sont indissociables du massif.</p>
      <p>Cette configuration impose de redéfinir l'objectif. Traiter « tous les chênes du terrain » n'a
      aucun sens sur une parcelle boisée d'un hectare. Ce qui a du sens, c'est de définir une
      <strong>zone d'usage</strong> — l'emprise autour de la maison, la terrasse, l'aire de jeux, le
      parcours du chien, l'allée d'accès — et de la tenir sûre.</p>
      ${note(`<p>Concrètement, cela se traduit par un périmètre de quelques dizaines de mètres autour des
      lieux de vie, dans lequel les chênes sont inspectés chaque printemps et traités si nécessaire. Au-delà,
      on laisse la forêt être la forêt.</p>`, 'Définir une zone d\'usage')}` },

    { h2: 'Ce que cela change dans le devis',
      html: `
      <p>Le raisonnement par zone d'usage a un effet direct et favorable sur le coût. Plutôt qu'un
      traitement généralisé impossible à financer, on obtient un périmètre restreint, des arbres identifiés
      et un budget stable d'une année sur l'autre.</p>
      ${table(
        ['Approche', 'Réalisme', 'Coût'],
        [
          ['Traiter tous les arbres de la parcelle', 'Illusoire sur un terrain boisé', 'Prohibitif et sans fin'],
          ['Traiter les arbres de la zone d\'usage', 'Réaliste et vérifiable', 'Maîtrisé et reconductible'],
          ['Ne rien faire et surveiller', 'Acceptable sans enfants ni animaux', 'Nul, mais exposition non traitée'],
          ['Traiter uniquement après découverte', 'Tardif, en pleine période urticante', 'Plus élevé, avec balisage prolongé']
        ],
        'Quatre stratégies possibles, et leur réalisme en milieu forestier')}` },

    { h2: 'Les publics et activités concernés localement',
      html: `
      <ul class="plain">
        <li><strong>Familles avec jeunes enfants</strong> — jeu au sol, abords de la maison, allées. Voir <a href="/chenilles-processionnaires-enfant/">protéger les enfants</a>.</li>
        <li><strong>Propriétaires de chiens</strong> — parcours quotidien sur la parcelle et en forêt. Voir <a href="/chenilles-processionnaires-chien/">risques pour les chiens</a>.</li>
        <li><strong>Activités équestres</strong> — prés arborés et parcours, avec des chênes en bordure de pâture.</li>
        <li><strong>Hébergements et gîtes</strong> — accueil de public en extérieur, avec une saison qui recoupe la période urticante.</li>
        <li><strong>Équipements communaux et hameaux</strong> — abris de bus, aires de jeux, terrains de sport enclavés dans le boisement.</li>
        <li><strong>Entreprises du paysage et bûcheronnage</strong> — exposition directe lors des travaux. Voir <a href="/espaces-verts/">espaces verts</a>.</li>
      </ul>` },

    { h2: 'Le calendrier, et la logistique',
      html: `
      <p>Sur chêne, deux rendez-vous : le <strong>traitement biologique d'avril</strong> sur les sujets à
      historique, et l'<strong>inspection de mai</strong> suivie, si nécessaire, de l'aspiration des nids.
      L'hiver sert au retrait des anciens nids, encore chargés de poils, et à l'inventaire.</p>
      <p>Une remarque logistique propre au secteur : les distances sont réelles et les propriétés
      dispersées. Nous groupons les interventions par journée et par secteur. Si plusieurs propriétés d'un
      même hameau ou d'un même lotissement sont concernées — ce qui est courant —, une intervention
      coordonnée réduit sensiblement la part de déplacement dans le devis de chacun.</p>` }
  ],
  faq: [
    { q: "Ma propriété compte cinquante chênes : faut-il tous les traiter ?",
      a: `<p>Non, et ce serait déraisonnable. On définit une zone d'usage autour des lieux de vie et on
      traite les arbres qui s'y trouvent. Le reste de la parcelle relève de la surveillance, pas du
      traitement.</p>` },
    { q: "Est-il possible de ne plus avoir de processionnaires du tout ?",
      a: `<p>Dans ce contexte forestier, non. L'objectif est que vos arbres proches de la maison ne portent
      pas de nids et que votre sol ne soit pas chargé de poils. C'est atteignable et vérifiable ; l'absence
      totale à l'échelle du massif ne l'est pas.</p>` },
    { q: "Les chênes de la forêt domaniale sont-ils traités ?",
      a: `<p>Pas de manière généralisée. Le gestionnaire concentre ses actions sur les zones d'accueil du
      public. Votre parcelle reste votre responsabilité, même si elle paraît faire partie du massif.</p>` },
    { q: "Peut-on promener son chien en forêt au printemps ?",
      a: `<p>Oui, en restant attentif. Sur chêne, les chenilles restent sur l'arbre : le risque au sol vient
      des poils tombés au pied des sujets porteurs. Évitez de laisser le chien fouiller longuement au pied
      des troncs et repérez les nids visibles.</p>` },
    { q: "Comment réduire durablement la pression sur ma parcelle ?",
      a: `<p>En combinant le traitement biologique d'avril sur les arbres de la zone d'usage, le retrait des
      anciens nids et la pose de nichoirs à mésanges. Dans un contexte forestier, la prédation naturelle a
      un effet réel, qui se construit sur plusieurs saisons.</p>` }
  ],
  cta: {
    title: "Définir la zone d'usage à protéger",
    text: `Sur une propriété boisée, la première étape est de délimiter ce qui doit être tenu sûr : maison,
    terrasse, aire de jeux, allée. C'est ce périmètre qui détermine le devis.`,
    primary: 'Demander une visite'
  },
  related: [
    { url: '/departements/78-yvelines/', label: 'Yvelines (78)', hint: 'Situation départementale' },
    { url: '/departements/78-yvelines/saint-germain-en-laye/', label: 'Saint-Germain-en-Laye', hint: 'Une lisière franche, à l\'inverse' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'La fenêtre d\'avril sur chêne' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Parcours en forêt' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Travaux sur parcelle boisée' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Propriétés et grands jardins' }
  ]
});
