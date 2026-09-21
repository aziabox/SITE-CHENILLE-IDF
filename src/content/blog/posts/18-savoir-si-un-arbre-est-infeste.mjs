import { table, steps, note } from '../../../lib/render.mjs';

export default {
  slug: 'savoir-si-un-arbre-est-infeste',
  category: 'arbres',
  title: 'Comment savoir si un arbre est infesté par les processionnaires ?',
  description: "Sept signes à examiner sur un pin, un cèdre ou un chêne pour déterminer s'il abrite des chenilles processionnaires, et la méthode d'inspection depuis le sol.",
  h1: 'Comment savoir si un arbre est infesté par les processionnaires ?',
  excerpt: "Le nid n'est pas toujours le premier signe visible — et sur chêne, il est souvent le dernier. Sept indices, à examiner dans l'ordre.",
  datePublished: '2026-07-20',
  dateModified: '2026-09-19',
  lead: `On cherche souvent le nid en premier, alors que d'autres signes apparaissent plus tôt et se voient
  mieux. Voici l'ordre dans lequel examiner un arbre, depuis le sol et sans risque.`,
  answer: `<p>Sept signes, par ordre d'apparition : <strong>défoliation localisée</strong>,
  <strong>aiguilles ou feuilles roussies</strong>, <strong>déjections au pied de l'arbre</strong>,
  <strong>mues blanchâtres sur l'écorce</strong>, <strong>traces soyeuses sur le tronc</strong>,
  <strong>nid visible</strong> et <strong>chenilles ou procession</strong>. Sur chêne, la défoliation
  précède souvent la découverte du nid.</p>`,
  sections: [
    { h2: 'La méthode d\'inspection, en cinq minutes',
      html: `
      ${steps([
        { title: "Prendre du recul", body: `<p>Reculez de dix à quinze mètres et regardez la silhouette générale de
          l'arbre. Une zone clairsemée, un houppier dissymétrique, une branche nue au milieu d'un feuillage
          dense : c'est ce qu'on voit le mieux de loin.</p>` },
        { title: 'Faire le tour complet', body: `<p>Un nid est souvent du côté opposé à celui depuis lequel on
          observe habituellement — c'est-à-dire pas depuis la maison. Sur pin, cherchez plutôt la face la
          plus ensoleillée.</p>` },
        { title: 'Examiner le tronc', body: `<p>De bas en haut, jusqu'à cinq ou six mètres, à deux mètres de
          distance. Indispensable sur chêne, où le nid est plaqué contre l'écorce.</p>` },
        { title: 'Regarder le sol', body: `<p>Au pied de l'arbre : déjections, mues, aiguilles tombées, chenilles
          mortes, débris clairs inhabituels.</p>` },
        { title: 'Utiliser des jumelles', body: `<p>Pour un arbre de plus de dix mètres, c'est le seul moyen fiable
          d'examiner le houppier. Le zoom d'un téléphone fait aussi l'affaire pour une photo.</p>` }
      ])}
      ${note(`<p>Ne secouez jamais une branche « pour voir ». C'est exactement le geste qui libère les
      poils, et il n'apporte aucune information que l'observation ne donnerait pas.</p>`)}` },

    { h2: 'Les sept signes, détaillés',
      html: `
      ${table(
        ['Signe', 'Sur pin et cèdre', 'Sur chêne'],
        [
          ['Défoliation localisée', 'Rameaux nus autour du nid', 'Houppier clairsemé en mai-juin, plus que les arbres voisins'],
          ['Feuillage altéré', 'Aiguilles roussies puis tombées', 'Feuilles grignotées, nervures laissées'],
          ['Déjections au sol', 'Petits grains sombres réguliers', 'Idem, souvent plus abondants'],
          ['Mues', 'Peaux blanchâtres près du nid', 'Accumulation au pied du tronc'],
          ['Traces soyeuses', 'Fils sur le tronc, chemin de procession', 'Traînées sur l\'écorce entre nid et houppier'],
          ['Nid', 'Boule blanche en bout de rameau', 'Plaque grise plaquée au tronc'],
          ['Chenilles', 'File au sol en fin d\'hiver', 'Groupes sur le tronc, surtout la nuit']
        ],
        'Les mêmes signes ne se présentent pas de la même façon selon l\'arbre')}` },

    { h2: 'Le piège de la défoliation',
      html: `
      <p>Une défoliation n'est pas nécessairement due aux processionnaires. Plusieurs causes produisent un
      feuillage clairsemé, et les confondre conduit à traiter pour rien.</p>
      <ul class="plain">
        <li><strong>Sécheresse</strong> — feuillage jauni de façon homogène, souvent sur tout l'arbre, avec chute anticipée.</li>
        <li><strong>Oïdium du chêne</strong> — feutrage blanchâtre sur les jeunes feuilles, sans consommation du limbe.</li>
        <li><strong>Autres défoliateurs</strong> — tordeuse verte du chêne, bombyx disparate : feuillage consommé, mais sans nid de soie sur le tronc.</li>
        <li><strong>Scolytes et ravageurs de l'écorce</strong> — dépérissement de branches entières, trous d'émergence, écoulements.</li>
        <li><strong>Vieillissement ou stress racinaire</strong> — déclin progressif sur plusieurs saisons.</li>
      </ul>
      <p>Le critère qui tranche est la <strong>présence de soie</strong> : nid, traces, amas. Sans soie, la
      piste processionnaire s'affaiblit nettement.</p>` },

    { h2: 'Quel impact réel sur l\'arbre ?',
      html: `
      <p>C'est la question que posent la plupart des propriétaires après l'identification, et la réponse est
      plutôt rassurante.</p>
      <p>Une défoliation, même marquée, n'entraîne pas la mort d'un pin ou d'un chêne en bonne santé.
      L'arbre puise dans ses réserves et refeuille. L'effet se mesure en <strong>ralentissement de
      croissance</strong> et en <strong>vulnérabilité accrue</strong> : un arbre défolié résiste moins bien à
      la sécheresse et aux ravageurs secondaires.</p>
      <p>Le risque devient réel lorsque les défoliations se répètent plusieurs années de suite sur un sujet
      déjà stressé. Dans ce cas, le traitement des processionnaires s'accompagne utilement d'un diagnostic
      sanitaire de l'arbre.</p>
      <p>En revanche, l'abattage n'est presque jamais la réponse : il ne protège pas les arbres voisins et
      supprime un patrimoine pour un problème saisonnier.</p>` },

    { h2: 'Quand faire appel à quelqu\'un',
      html: `
      <ul class="plain">
        <li><strong>Vous avez trouvé de la soie</strong> — nid, amas, traces sur le tronc : faites confirmer avant d'agir.</li>
        <li><strong>L'arbre dépasse dix mètres</strong> — l'inspection depuis le sol devient peu fiable ; un examen aux jumelles ou en hauteur s'impose.</li>
        <li><strong>La zone en dessous est fréquentée</strong> — terrasse, aire de jeux, cheminement : le doute suffit à justifier un avis.</li>
        <li><strong>Vous avez un doute sur l'essence</strong> — une photo d'une branche règle la question en quelques secondes.</li>
      </ul>
      <p><a href="/identifier-nid-chenilles-processionnaires/">Voir les critères d'identification d'un
      nid</a>.</p>` }
  ],
  faq: [
    { q: "Un arbre peut-il être infesté sans nid visible ?",
      a: `<p>Oui, en début de saison — les jeunes colonies n'ont pas encore construit leur nid définitif —
      et sur les grands sujets, où les nids des branches hautes sont invisibles depuis le sol.</p>` },
    { q: "Les processionnaires tuent-elles les arbres ?",
      a: `<p>Rarement à elles seules. Elles affaiblissent l'arbre et ralentissent sa croissance. Un sujet
      déjà stressé et défolié plusieurs années de suite peut en revanche dépérir.</p>` },
    { q: "Faut-il traiter un arbre pour le sauver ?",
      a: `<p>Le traitement se justifie d'abord pour des raisons sanitaires — les poils urticants — plus que
      pour la survie de l'arbre. Sur un sujet déjà affaibli, il contribue néanmoins à limiter le stress
      cumulé.</p>` },
    { q: "Comment inspecter un arbre de vingt mètres ?",
      a: `<p>Aux jumelles depuis plusieurs points, ou par un examen en hauteur. Au-delà d'une dizaine de
      mètres, une inspection depuis le sol donne surtout des indices indirects : défoliation, déjections,
      mues.</p>` }
  ],
  related: [
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Les critères visuels' },
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Repérage avant chantier' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Que faire après identification' }
  ]
};
