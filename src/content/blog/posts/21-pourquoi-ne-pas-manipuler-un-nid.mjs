import { safety, table, note } from '../../../lib/render.mjs';

export default {
  slug: 'pourquoi-ne-pas-manipuler-un-nid',
  category: 'conseils',
  title: "Pourquoi ne faut-il pas manipuler un nid de processionnaires ?",
  description: "Ce que contient réellement un nid de processionnaires, pourquoi les poils se libèrent au moindre choc et combien de temps ils restent actifs.",
  h1: "Pourquoi ne faut-il pas manipuler un nid de processionnaires ?",
  excerpt: "Un nid n'est pas seulement un abri : c'est un réservoir de plusieurs centaines de milliers de poils urticants accumulés au fil des mues. Le manipuler, c'est le vider.",
  datePublished: '2026-07-28',
  dateModified: '2026-09-19',
  lead: `« Ce n'est qu'un peu de soie. » C'est ce que se dit la plupart des gens avant de tendre la main.
  Comprendre ce qu'il y a à l'intérieur suffit généralement à changer d'avis.`,
  answer: `<p>Un nid contient les <strong>mues successives de toute la colonie</strong>, et chaque mue a
  laissé ses poils urticants. On parle de <strong>plusieurs centaines de milliers de poils</strong>
  microscopiques, barbelés, qui se détachent au moindre choc ou courant d'air. Manipuler un nid revient à
  ouvrir ce réservoir à hauteur de visage. Et il reste actif <strong>des mois après le départ des
  chenilles</strong>.</p>`,
  sections: [
    { h2: 'Ce qu\'il y a réellement dans un nid',
      html: `
      <p>Une chenille processionnaire passe par cinq stades larvaires. À chaque mue, elle abandonne son
      ancienne peau — avec les poils urticants qu'elle portait. Ces mues ne sont pas évacuées : elles
      s'accumulent dans le nid.</p>
      ${table(
        ['Contenu', 'Rôle dans le risque'],
        [
          ['Chenilles vivantes', 'Portent chacune des centaines de milliers de poils sur leur dos'],
          ['Mues accumulées', "Réservoir principal : les poils de tous les stades précédents"],
          ['Chrysalides (sur chêne)', 'Enveloppes de nymphose, également chargées'],
          ['Déjections', 'Poils entraînés mécaniquement'],
          ['Soie', 'Retient et concentre l\'ensemble']
        ],
        "Un nid est un réservoir, pas seulement un abri")}
      <p>C'est pour cette raison qu'un nid <strong>vide</strong> reste dangereux : les chenilles sont
      parties, la réserve est restée.</p>` },

    { h2: 'Comment les poils se libèrent',
      html: `
      <p>Le poil urticant mesure quelques centièmes de millimètre. Il est creux, terminé par des barbillons
      orientés, et il n'est pas fixé solidement : il se détache au moindre frottement, à la moindre
      vibration, au moindre courant d'air.</p>
      <p>La chenille peut même les projeter activement lorsqu'elle se sent menacée — c'est une défense, et
      elle fonctionne.</p>
      <p>Concrètement, plusieurs gestes suffisent à déclencher une libération massive :</p>
      <ul class="plain">
        <li>Comprimer le nid, même légèrement, en le saisissant.</li>
        <li>Le percer avec une perche, un sécateur mal placé, une branche.</li>
        <li>Le faire tomber : l'impact au sol l'ouvre.</li>
        <li>Le mouiller au jet : la pression le désagrège.</li>
        <li>Le chauffer : les gaz chauds soulèvent son contenu.</li>
      </ul>
      ${safety(`<p>Une fois libérés, les poils sont <strong>aéroportés</strong>. Ils se déposent sur la
      peau, dans les yeux, sur les vêtements, dans les cheveux, et ils sont inhalés. C'est pourquoi une
      exposition peut concerner des personnes situées à plusieurs mètres de l'opérateur, y compris de
      l'autre côté d'une clôture.</p>`, 'Le problème ne reste pas localisé')}` },

    { h2: 'Combien de temps le risque persiste',
      html: `
      <p>C'est le point le plus contre-intuitif, et celui qui justifie le plus de précautions.</p>
      ${table(
        ['Support', 'Durée pendant laquelle les poils restent urticants'],
        [
          ['Nid abandonné sur l\'arbre', "Plusieurs mois, parfois plus d'un an"],
          ['Sol au pied de l\'arbre', 'Plusieurs mois, réactivé par la tonte ou le soufflage'],
          ['Écorce après retrait d\'un nid de chêne', "Plusieurs semaines si elle n'est pas traitée"],
          ['Textiles et mobilier d\'extérieur', "Jusqu'au lavage"],
          ['Équipement de chantier', "Jusqu'au nettoyage — d'où le traitement du matériel après chaque intervention"]
        ],
        'Les poils survivent largement à la colonie')}
      ${note(`<p>C'est aussi la raison pour laquelle un nid retiré ne clôt pas l'intervention : le sol et
      l'écorce font partie du traitement, et des consignes d'usage sont données à la fin du chantier.</p>`)}` },

    { h2: 'Ce qu\'un professionnel fait différemment',
      html: `
      <p>Il ne s'agit pas de force ni d'habileté particulière. La différence tient à trois choses.</p>
      <ol>
        <li><strong>L'équipement</strong> — combinaison intégrale à capuche, masque filtrant, lunettes fermées, gants longs. Des gants de jardinage et un vieux pull ne constituent pas une protection.</li>
        <li><strong>Le geste</strong> — on sépare le nid de l'arbre sans le comprimer ni le percer : coupe nette du rameau porteur sur pin, aspiration à la buse sur chêne.</li>
        <li><strong>Le confinement immédiat</strong> — le nid est reçu dans un sac fermé sur place. Il ne touche jamais le sol. C'est cette étape, invisible pour un spectateur, qui fait toute la différence en matière de contamination résiduelle.</li>
      </ol>
      <p>S'y ajoutent le périmètre de sécurité, le choix des conditions météo et le traitement du matériel
      après chantier. <a href="/echenillage/">Voir le déroulé complet d'un échenillage</a>.</p>` },

    { h2: 'Que faire à la place',
      html: `
      <ul class="plain">
        <li><strong>Baliser</strong> le pied de l'arbre et en interdire l'accès.</li>
        <li><strong>Photographier à distance</strong>, avec zoom, pour faire identifier l'espèce.</li>
        <li><strong>Suspendre la tonte et le soufflage</strong> dans le secteur.</li>
        <li><strong>Rentrer</strong> le linge, les jouets, les coussins et les gamelles.</li>
        <li><strong>Attendre l'intervention</strong> plutôt que d'improviser : rien, dans la situation, ne justifie d'agir dans l'heure.</li>
      </ul>
      <p>Ces mesures ne coûtent rien et suppriment l'essentiel de l'exposition. Voir
      <a href="/blog/conseils/erreurs-a-eviter-face-a-un-nid/">les erreurs à éviter</a>.</p>` }
  ],
  faq: [
    { q: "Un nid tombé tout seul est-il moins dangereux ?",
      a: `<p>Non, au contraire : sa chute l'a probablement ouvert. Ne le ramassez pas à mains nues ni au
      balai. Balisez la zone et signalez-le.</p>` },
    { q: "Peut-on manipuler un nid avec une pince à long manche ?",
      a: `<p>La distance réduit l'exposition directe mais ne l'empêche pas : les poils sont aéroportés et la
      compression du nid par la pince en libère. Sans équipement complet et sans sac de confinement, le
      geste reste à éviter.</p>` },
    { q: "Les poils traversent-ils les vêtements ?",
      a: `<p>Ils s'y accrochent et peuvent migrer à travers les mailles lâches, notamment au col et aux
      poignets. C'est pourquoi une protection professionnelle est une combinaison fermée, pas une simple
      tenue de travail.</p>` },
    { q: "Faut-il traiter le sol après le retrait ?",
      a: `<p>Le sol est contrôlé et des consignes sont données : délai avant reprise de la tonte, zones à
      laisser au repos, arrosage doux pour plaquer les poils. Sur un site public, le balisage est maintenu
      quelques jours.</p>` }
  ],
  related: [
    { url: '/blog/conseils/erreurs-a-eviter-face-a-un-nid/', label: 'Les erreurs à éviter', hint: 'Sept gestes en cause' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'La méthode professionnelle' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Mécanisme et durée du risque' }
  ]
};
