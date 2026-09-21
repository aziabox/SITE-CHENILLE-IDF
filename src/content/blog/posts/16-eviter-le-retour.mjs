import { note, table, steps } from '../../../lib/render.mjs';

export default {
  slug: 'eviter-le-retour-des-processionnaires',
  category: 'prevention',
  title: 'Comment éviter le retour des chenilles processionnaires ?',
  description: "Pourquoi les processionnaires reviennent chaque année : chrysalides enfouies, diapause, voisinage. Et le plan sur trois ans qui fait baisser la pression.",
  h1: 'Comment éviter le retour des chenilles processionnaires ?',
  excerpt: "Trois causes expliquent presque tous les retours : le stock enfoui dans le sol, la diapause prolongée, et les arbres non traités du voisinage. Aucune ne se règle en une intervention.",
  datePublished: '2026-07-14',
  dateModified: '2026-09-19',
  lead: `« On a fait traiter l'an dernier, et ça revient. » C'est la phrase que nous entendons le plus
  souvent au téléphone. Elle n'indique presque jamais un échec du traitement — mais elle indique qu'il a
  manqué une suite.`,
  answer: `<p>Les processionnaires reviennent pour trois raisons : des <strong>chrysalides enfouies</strong>
  dans le sol du terrain, dont certaines restent en <strong>diapause plusieurs années</strong> ; des
  <strong>arbres hôtes non traités dans le voisinage</strong>, d'où les papillons volent la nuit sur
  plusieurs centaines de mètres ; et l'absence de <strong>mesure de suite</strong> après une intervention
  curative. Le retour se combat sur deux à trois saisons, pas en une visite.</p>`,
  sections: [
    { h2: 'Cause 1 : le stock enfoui dans votre sol',
      html: `
      <p>À la fin de l'hiver, les chenilles de la processionnaire du pin descendent et s'enfouissent à
      quelques centimètres dans un sol meuble et ensoleillé, où elles se transforment en chrysalides. Ce sol
      est souvent le vôtre : une pelouse plein sud, un massif, un talus, une allée sableuse.</p>
      <p>Retirer le nid ne supprime pas ce stock. Les papillons en sortiront l'été suivant, voleront dans le
      secteur et pondront — parfois sur le même arbre.</p>
      ${note(`<p>Ce mécanisme explique pourquoi un échenillage seul, même parfaitement réalisé, ne garantit
      rien pour l'année suivante. Il règle la saison en cours, ce qui est déjà l'essentiel du point de vue
      de la sécurité.</p>`)}` },

    { h2: 'Cause 2 : la diapause prolongée',
      html: `
      <p>Toutes les chrysalides n'émergent pas l'été suivant. Une partie reste en attente dans le sol —
      deux ans, parfois davantage — avant de donner un papillon. C'est une assurance biologique contre les
      mauvaises années.</p>
      <p>Pour un propriétaire, cela se traduit par une observation déroutante : deux saisons calmes, puis un
      retour soudain, alors que rien n'a changé dans l'environnement. Ce n'est ni une recolonisation venue
      d'ailleurs, ni un échec : c'est le stock enfoui qui se réveille.</p>
      <p>Conséquence pratique : la surveillance ne doit pas s'arrêter après une bonne année.</p>` },

    { h2: 'Cause 3 : la pression de voisinage',
      html: `
      <p>Les chenilles se déplacent peu. Les papillons, eux, volent la nuit sur plusieurs centaines de
      mètres. Un jardin traité entouré de pins infestés non traités sera réalimenté chaque été.</p>
      ${table(
        ['Situation du jardin', 'Perspective réaliste'],
        [
          ['Aucun arbre hôte à proximité', 'Une à deux saisons peuvent suffire'],
          ['Quelques pins chez les voisins', "Intervention groupée : la meilleure option"],
          ['Alignement de conifères dans la rue', 'Surveillance annuelle, pression modérée'],
          ['Lisière de massif forestier', "Gestion continue : protéger la parcelle, pas éradiquer l'espèce"],
          ['Parc ou bois communal mitoyen', 'Signalement au gestionnaire + protection de la parcelle']
        ],
        "Ce qu'on peut raisonnablement espérer selon le contexte")}
      <p>C'est pourquoi nous encourageons systématiquement les interventions groupées entre voisins : elles
      coûtent moins cher à chacun et, surtout, elles suppriment la source de proximité.</p>` },

    { h2: 'Le plan qui fonctionne, sur trois saisons',
      html: `
      ${steps([
        { title: 'Année 1 — supprimer l\'existant', body: `<p><a href="/echenillage/">Échenillage</a> des nids
          présents, contrôle du sol, pose des premiers nichoirs à mésanges, et installation d'un
          <a href="/piegeage-chenilles-processionnaires/">piège à phéromone</a> de référence si la pression
          est forte.</p>` },
        { title: 'Année 2 — traiter avant la formation des nids', body: `<p><a href="/traitement-preventif/">Traitement
          biologique</a> sur les arbres qui étaient infestés, à la bonne fenêtre. Relevé des captures.
          Contrôle visuel aux deux saisons utiles. Ajustement de la liste d'arbres.</p>` },
        { title: 'Année 3 — surveillance allégée', body: `<p>Si la pression a baissé, le traitement se limite aux
          arbres encore concernés. La surveillance devient une visite annuelle courte, à la bonne
          saison.</p>` }
      ])}
      <p>L'intérêt de ce format n'est pas seulement technique : il permet d'inscrire une dépense stable et
      prévisible, au lieu de subir des interventions d'urgence dont le coût et le calendrier sont
      imposés.</p>` },

    { h2: 'Les mesures de fond, à installer une fois',
      html: `
      <ul class="plain">
        <li><strong>Nichoirs à mésanges</strong> — un par arbre sensible, posés hors période de nidification. L'effet se construit sur plusieurs saisons.</li>
        <li><strong>Gîtes à chauves-souris</strong> — prédation sur les papillons adultes pendant le vol.</li>
        <li><strong>Diversité des essences</strong> — à réfléchir lors d'un renouvellement de plantation, pas en réaction à une infestation.</li>
        <li><strong>Sol moins favorable</strong> — un paillage épais ou un couvert végétal dense rend l'enfouissement plus difficile au pied des arbres concernés.</li>
        <li><strong>Éclairage nocturne limité</strong> — il attire les papillons et gêne les chauves-souris.</li>
      </ul>
      <p>Aucune de ces mesures n'est spectaculaire. Prises ensemble et maintenues dans la durée, elles font
      baisser la pression de façon nette.</p>` }
  ],
  faq: [
    { q: "Peut-on éradiquer définitivement les processionnaires d'un jardin ?",
      a: `<p>En lisière de massif, non : l'objectif réaliste est de protéger la parcelle chaque année. Loin
      de tout autre arbre hôte, une à deux saisons suivies peuvent suffire à ne plus rien voir pendant
      plusieurs années.</p>` },
    { q: "Faut-il traiter le sol pour détruire les chrysalides ?",
      a: `<p>Il n'existe pas de solution simple et proportionnée pour cela dans un jardin. Le travail
      porte plutôt sur l'interception à la descente — collier de piégeage — et sur la réduction des pontes
      de l'année suivante.</p>` },
    { q: "Un traitement annuel est-il indispensable ?",
      a: `<p>Non. Après une à deux saisons, la pression baisse souvent au point que la surveillance suffit.
      Nous préférons ajuster chaque année sur la base des observations plutôt que reconduire un traitement
      systématique.</p>` },
    { q: "Comment convaincre un voisin de traiter ?",
      a: `<p>Par l'argument du coût partagé, le plus souvent efficace : une intervention groupée le même
      jour revient nettement moins cher à chacun. Beaucoup de propriétaires ignorent simplement ce qu'est un
      nid de processionnaires.</p>` }
  ],
  related: [
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Le plan pluriannuel' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Interception et suivi' },
    { url: '/blog/identifier/tout-comprendre-processionnaire-du-pin/', label: 'Comprendre le cycle', hint: 'Diapause et émergence' }
  ]
};
