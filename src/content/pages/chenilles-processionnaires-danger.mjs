import { standardPage } from '../../lib/layout.mjs';
import { safety, note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenilles-processionnaires-danger/',
  title: 'Chenilles processionnaires : quels dangers réels ?',
  description: "Poils urticants, réactions cutanées, oculaires et respiratoires, durée du risque, publics exposés : ce que provoquent vraiment ces chenilles.",
  h1: 'Les dangers des chenilles processionnaires',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Prévention', url: '/traitement-preventif/' },
          { name: 'Dangers', url: '/chenilles-processionnaires-danger/' }],
  datePublished: '2026-02-20',
  dateModified: '2026-09-14',
  priority: '0.8',
  lead: `Le risque est réel mais souvent mal décrit : il ne s'agit ni d'une piqûre, ni d'un venin injecté,
  et il ne suppose aucun contact direct avec l'insecte. Comprendre le mécanisme permet d'adopter les bons
  réflexes sans céder à la panique.`,
  answer: `<p>Le danger vient des <strong>poils urticants microscopiques</strong> portés par les chenilles à
  partir du troisième stade larvaire. Ces poils se détachent par milliers, se dispersent dans l'air et
  provoquent des <strong>réactions cutanées</strong> (plaques rouges très démangeantes),
  <strong>oculaires</strong> (conjonctivite) et <strong>respiratoires</strong> (toux, gêne). Ils restent
  actifs dans les nids abandonnés et au sol pendant plusieurs mois. Les chiens sont les plus exposés au
  risque grave.</p>`,
  sections: [
    { h2: 'Comment agissent les poils urticants',
      html: `
      <p>Chaque chenille mature en porte plusieurs centaines de milliers, logés dans des replis dorsaux.
      Chaque poil est creux, barbelé, et mesure quelques centièmes de millimètre. Il se détache au moindre
      frottement ou courant d'air — la chenille peut même les projeter activement quand elle se sent
      menacée.</p>
      <p>L'effet combine deux mécanismes. Le premier est <strong>mécanique</strong> : les barbillons
      s'accrochent à la peau et aux muqueuses et y restent fichés. Le second est <strong>chimique et
      allergique</strong> : les poils libèrent une protéine urticante, la thaumétopoéine, qui déclenche une
      réaction inflammatoire.</p>
      ${note(`<p>Conséquence directe : <strong>frotter aggrave tout</strong>. Le frottement casse les poils,
      les enfonce plus profondément et étend la zone touchée. C'est le geste réflexe le plus contre-productif.</p>`,
      'Le réflexe à corriger')}` },

    { h2: 'Les réactions possibles chez l\'homme',
      tocLabel: 'Réactions chez l\'homme',
      html: `
      <p>Les manifestations les plus fréquentes sont bénignes et régressent en quelques jours. Elles
      restent très inconfortables, notamment chez l'enfant.</p>
      ${table(
        ['Zone atteinte', 'Manifestations habituellement décrites'],
        [
          ['Peau', "Plaques rouges en placards, démangeaisons intenses, parfois papules ; souvent sur les zones découvertes (cou, avant-bras, chevilles)"],
          ['Yeux', 'Rougeur, larmoiement, sensation de corps étranger, gonflement des paupières'],
          ['Voies respiratoires', 'Éternuements, toux, irritation de la gorge, gêne respiratoire chez les personnes sensibles'],
          ['Bouche et digestif', "Rare chez l'homme, en cas de contact main-bouche : irritation, douleur"]
        ],
        'Ce que rapportent le plus souvent les personnes exposées')}
      ${safety(`<p>Consultez un médecin sans attendre en cas de <strong>gêne respiratoire</strong>, de
      <strong>gonflement du visage ou de la gorge</strong>, d'<strong>atteinte oculaire</strong>, de réaction
      étendue, de fièvre, ou si la personne exposée est un <strong>nourrisson</strong> ou présente un terrain
      allergique connu. En cas de difficulté à respirer, appelez le 15 ou le 112.</p>
      <p>Ces informations sont générales et ne remplacent pas un avis médical. Nous ne posons aucun
      diagnostic et ne recommandons aucun traitement.</p>`, 'Quand consulter')}
      <p>Une particularité mérite d'être connue : une <strong>sensibilisation</strong> peut s'installer. Une
      personne déjà exposée réagit parfois plus fortement lors d'un contact ultérieur. C'est un argument
      supplémentaire pour traiter un arbre plutôt que de « faire avec » d'une année sur l'autre.</p>` },

    { h2: 'Les gestes immédiats après une exposition',
      tocLabel: 'Que faire après un contact',
      html: `
      <ol>
        <li><strong>Ne pas frotter, ne pas gratter.</strong> C'est ce qui aggrave le plus la réaction.</li>
        <li><strong>Quitter la zone</strong> et s'éloigner de l'arbre, en évitant de secouer ses vêtements sur place.</li>
        <li><strong>Retirer les vêtements avec précaution</strong> et les laver séparément, à température élevée si le textile le permet.</li>
        <li><strong>Rincer abondamment à l'eau</strong> la peau et, le cas échéant, les yeux ouverts, sans frotter.</li>
        <li><strong>Prendre une douche</strong> en se savonnant doucement et en se lavant les cheveux.</li>
        <li><strong>Consulter</strong> si les critères ci-dessus sont réunis ou si les symptômes persistent.</li>
      </ol>
      <p>Pour les animaux, la conduite à tenir est différente et plus urgente :
      <a href="/chenilles-processionnaires-chien/">chiens</a>,
      <a href="/chenilles-processionnaires-chat/">chats</a>.</p>` },

    { h2: 'Qui est le plus exposé',
      html: `
      <ul class="plain">
        <li><strong>Les chiens</strong> — ils flairent et lèchent la procession au sol. C'est la population la plus touchée par des atteintes graves, avec un risque de lésions de la langue. <a href="/chenilles-processionnaires-chien/">Détail et conduite à tenir</a>.</li>
        <li><strong>Les jeunes enfants</strong> — ils jouent au sol, portent les mains à la bouche et ne se méfient pas d'une chenille. <a href="/chenilles-processionnaires-enfant/">Protéger les enfants</a>.</li>
        <li><strong>Les jardiniers et agents d'espaces verts</strong> — la tonte, le soufflage, la taille et l'élagage remettent massivement les poils en suspension. <a href="/espaces-verts/">Voir les précautions métier</a>.</li>
        <li><strong>Les chevaux</strong> — atteintes buccales possibles lors du pâturage sous des arbres infestés ; le sujet concerne surtout les centres équestres de grande couronne.</li>
        <li><strong>Les personnes allergiques ou asthmatiques</strong> — réactions potentiellement plus marquées.</li>
      </ul>` },

    { h2: 'Combien de temps le risque persiste',
      tocLabel: 'Durée du risque',
      html: `
      <p>C'est le point le plus sous-estimé. La disparition des chenilles ne met pas fin au danger.</p>
      ${table(
        ['Support', 'Durée pendant laquelle les poils restent urticants'],
        [
          ['Nid abandonné sur l\'arbre', 'Plusieurs mois, parfois plus d\'un an'],
          ['Sol au pied de l\'arbre', 'Plusieurs mois, réactivé par la tonte ou le soufflage'],
          ['Textiles et mobilier d\'extérieur', "Jusqu'au lavage"],
          ['Poils sur l\'écorce après retrait d\'un nid de chêne', 'Plusieurs semaines si l\'écorce n\'est pas traitée']
        ],
        'Le risque survit largement à la colonie')}
      <p>C'est la raison pour laquelle un nid retiré n'est pas la fin de l'intervention : le sol et l'écorce
      font partie du traitement. Voir <a href="/traitement-curatif/">traitement curatif</a>.</p>` },

    { h2: 'Le danger pour les arbres',
      html: `
      <p>Il est réel mais d'une autre nature. La défoliation réduit la capacité de l'arbre à produire des
      réserves, ralentit sa croissance et le rend plus sensible à la sécheresse et aux ravageurs
      secondaires.</p>
      <p>Un pin ou un chêne en bonne santé supporte une défoliation isolée et repart au printemps. Un arbre
      déjà stressé et défolié plusieurs années consécutives peut dépérir. Dans les deux cas, l'abattage n'est
      pas la réponse : c'est le traitement, éventuellement associé à un diagnostic sanitaire de l'arbre.</p>` }
  ],
  faq: [
    { q: "Peut-on attraper quelque chose sans toucher une chenille ?",
      a: `<p>Oui, et c'est le cas le plus fréquent. Les poils se dispersent dans l'air. Rester sous un arbre
      infesté un jour de vent, tondre la pelouse ou manipuler du linge séché à proximité suffit à provoquer
      une réaction.</p>` },
    { q: "Les réactions sont-elles dangereuses ?",
      a: `<p>Dans la grande majorité des cas, elles sont bénignes et régressent en quelques jours. Des
      réactions sévères, notamment allergiques ou respiratoires, restent possibles : c'est pourquoi une gêne
      respiratoire ou un gonflement du visage impose un avis médical immédiat.</p>` },
    { q: "Une chenille morte est-elle encore dangereuse ?",
      a: `<p>Oui. Les poils restent urticants après la mort de l'insecte. Une chenille écrasée est même plus
      problématique, puisque l'écrasement libère ses poils d'un coup.</p>` },
    { q: "Peut-on ramasser les chenilles à la pelle ?",
      a: `<p>Ce n'est pas recommandé sans équipement. Le ramassage remet des poils en suspension et laisse la
      zone contaminée. Si l'opération est faite, elle suppose gants longs, manches fermées, lunettes, masque,
      et un sac fermé — pas un seau ouvert.</p>` },
    { q: "Le lavage suffit-il pour les vêtements exposés ?",
      a: `<p>Un lavage en machine à température élevée, séparément du reste du linge, retire l'essentiel.
      Évitez de secouer les vêtements avant, ce qui disperserait les poils dans la pièce.</p>` },
    { q: "Les poils traversent-ils les vêtements ?",
      a: `<p>Ils s'y accrochent et peuvent migrer à travers les mailles lâches, notamment au niveau du col et
      des poignets. C'est la raison pour laquelle un équipement professionnel est une combinaison fermée et
      non une simple tenue de travail.</p>` }
  ],
  cta: {
    title: "Supprimer la source plutôt que gérer les symptômes",
    text: `Tant que le nid est là, le sol et l'air autour de l'arbre restent chargés. Une identification
    rapide permet de savoir si la situation appelle une intervention immédiate ou une intervention
    programmée.`,
    primary: 'Faire identifier un nid'
  },
  related: [
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Urgence vétérinaire' },
    { url: '/chenilles-processionnaires-chat/', label: 'Risques pour les chats', hint: 'Moins fréquent, pas anodin' },
    { url: '/chenilles-processionnaires-enfant/', label: 'Protéger les enfants', hint: 'Jardin, école, aire de jeux' },
    { url: '/identifier-chenilles-processionnaires/', label: 'Identifier une chenille', hint: 'Avant de conclure au pire' },
    { url: '/traitement-curatif/', label: 'Traitement curatif', hint: 'Sécuriser puis traiter' },
    { url: '/blog/danger/pourquoi-dangereuses-pour-les-chiens/', label: 'Pourquoi si dangereuses pour les chiens ?', hint: 'Article détaillé' }
  ]
});
