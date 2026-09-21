import { safety, steps, note } from '../../../lib/render.mjs';

export default {
  slug: 'chien-touche-une-chenille-que-faire',
  category: 'animaux',
  title: "Que faire si son chien touche une chenille processionnaire ?",
  description: "Marche à suivre si un chien a léché ou reniflé une chenille : rinçage, gestes à éviter, appel au vétérinaire et protection de la zone.",
  h1: "Que faire si son chien touche une chenille processionnaire ?",
  excerpt: "Cinq gestes dans l'ordre, et deux choses à ne surtout pas faire. L'essentiel se joue dans les minutes qui suivent le contact.",
  datePublished: '2026-06-26',
  dateModified: '2026-09-19',
  lead: `Si vous lisez cette page dans l'urgence, allez directement à la marche à suivre ci-dessous. Le reste
  peut attendre le retour de chez le vétérinaire.`,
  answerLabel: 'À faire tout de suite',
  answer: `<p><strong>1.</strong> Éloignez le chien de la zone. <strong>2.</strong> Rincez abondamment sa
  gueule à l'eau claire, <strong>sans frotter</strong> et sans rien ajouter à l'eau. <strong>3.</strong> Ne
  lui donnez rien à avaler et ne le faites pas vomir. <strong>4.</strong> Appelez immédiatement un
  vétérinaire ou une clinique d'urgence en précisant qu'il s'agit d'une chenille processionnaire.
  <strong>5.</strong> Interdisez l'accès à la zone en attendant le traitement de la source.</p>`,
  sections: [
    { h2: 'La marche à suivre, dans l\'ordre',
      html: `
      ${steps([
        { title: 'Éloigner le chien', body: `<p>Attachez-le ou portez-le si nécessaire. L'objectif immédiat est
          qu'il cesse d'ingérer ou de ramasser d'autres poils. Mettez des gants si vous devez le manipuler
          au niveau de la tête.</p>` },
        { title: "Rincer à l'eau claire, abondamment", body: `<p>Eau tiède, en grande quantité, en laissant l'eau
          s'écouler. <strong>Ne frottez pas</strong> : le frottement casse les poils et les enfonce
          davantage. N'utilisez ni vinaigre, ni alcool, ni produit ménager, ni antiseptique.</p>` },
        { title: 'Ne rien administrer', body: `<p>Pas de médicament humain, pas d'huile, pas de lait. Ne tentez
          pas de faire vomir l'animal : cela ferait repasser les poils sur les muqueuses.</p>` },
        { title: 'Appeler et partir', body: `<p>Annoncez un contact avec une chenille processionnaire : c'est une
          information qui change la prise en charge. Si vous le pouvez sans perdre de temps, photographiez
          la chenille ou la zone à distance.</p>` },
        { title: 'Sécuriser la zone', body: `<p>Interdisez l'accès au jardin ou à la parcelle jusqu'au traitement
          de la source : le risque de récidive dans les jours qui suivent est élevé.</p>` }
      ])}
      ${safety(`<p><strong>Il s'agit d'une urgence vétérinaire, même si le chien semble aller bien.</strong>
      Les symptômes peuvent apparaître avec un léger décalage et l'évolution peut être rapide.</p>
      <p>Ces informations sont générales et ne remplacent pas l'examen d'un vétérinaire, seul habilité à
      poser un diagnostic et à prescrire un traitement.</p>`, 'Ne pas temporiser')}` },

    { h2: 'Les deux erreurs les plus fréquentes',
      html: `
      <p><strong>Frotter.</strong> C'est le réflexe naturel, et c'est le pire. Les poils urticants sont
      barbelés : les frotter les casse, les enfonce et étend la zone atteinte. Le rinçage doit être passif,
      par ruissellement.</p>
      <p><strong>Attendre de voir.</strong> Beaucoup de propriétaires observent une heure ou deux « pour
      voir si ça passe ». C'est précisément pendant ce délai que l'inflammation s'installe. Un appel au
      vétérinaire ne coûte rien et permet de décider.</p>
      ${note(`<p>Une troisième erreur, moins fréquente mais lourde de conséquences : tenter de retirer les
      poils à la pince ou avec un chiffon. Le chiffon étale, la pince casse. Seul le rinçage abondant est
      utile avant la prise en charge.</p>`)}` },

    { h2: 'Ce que le vétérinaire va regarder',
      html: `
      <p>Savoir à quoi s'attendre aide à répondre aux questions posées en consultation.</p>
      <ul class="plain">
        <li><strong>L'état de la cavité buccale</strong> — langue, babines, palais, gencives : c'est là que se concentrent les lésions.</li>
        <li><strong>L'étendue du gonflement</strong> et son évolution.</li>
        <li><strong>La respiration</strong>, en cas d'atteinte de la gorge.</li>
        <li><strong>Le délai</strong> entre le contact supposé et la consultation — préparez cette information.</li>
        <li><strong>Les circonstances</strong> — où, quand, quelle essence d'arbre à proximité.</li>
      </ul>
      <p>La prise en charge et le suivi relèvent entièrement de son appréciation. Notre rôle commence
      après : supprimer la source pour qu'il n'y ait pas de seconde fois.</p>` },

    { h2: 'Après : traiter la source',
      html: `
      <p>Un chien exposé une fois le sera de nouveau si rien ne change, parce que les conditions qui ont
      produit l'accident sont toujours là : un nid dans un arbre, et une procession qui traverse le
      terrain.</p>
      <ul class="plain">
        <li><strong>Faire retirer les nids</strong> des pins et cèdres du terrain — voir <a href="/echenillage/">échenillage</a>.</li>
        <li><strong>Poser un <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a></strong> si les nids sont hors d'atteinte : il protège le sol.</li>
        <li><strong>Traiter le sol concerné</strong> : les poils y restent actifs des mois, et la tonte les remet en suspension.</li>
        <li><strong>Vérifier les arbres voisins</strong> : la source est souvent de l'autre côté de la clôture.</li>
      </ul>
      <p><a href="/chenilles-processionnaires-chien/">Voir la page complète chiens et
      processionnaires</a>.</p>` }
  ],
  faq: [
    { q: "Mon chien n'a rien, dois-je quand même consulter ?",
      a: `<p>Oui. Les symptômes peuvent apparaître avec un décalage et l'évolution peut être rapide. Un avis
      vétérinaire immédiat est justifié même en l'absence de signe visible.</p>` },
    { q: "Peut-on rincer avec de l'eau vinaigrée ou du sérum physiologique ?",
      a: `<p>Utilisez de l'eau claire, en abondance. Les solutions acides ou alcoolisées peuvent aggraver
      l'irritation de muqueuses déjà lésées. Le sérum physiologique convient pour les yeux, en rinçage
      doux.</p>` },
    { q: "Faut-il garder la chenille pour la montrer ?",
      a: `<p>Non, ne la manipulez pas. Une photo prise à distance suffit largement, et l'information
      « chenille processionnaire » est ce qui compte pour le vétérinaire.</p>` },
    { q: "Combien de temps le jardin reste-t-il dangereux ?",
      a: `<p>Les poils tombés restent urticants plusieurs mois au sol. Tant que la source n'est pas traitée
      et la zone contrôlée, considérez que le risque persiste.</p>` }
  ],
  related: [
    { url: '/chenilles-processionnaires-chien/', label: 'Chiens et processionnaires', hint: 'Page de référence' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Supprimer la source' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger le sol du jardin' }
  ]
};
