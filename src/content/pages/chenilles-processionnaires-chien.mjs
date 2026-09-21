import { standardPage } from '../../lib/layout.mjs';
import { safety, note, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenilles-processionnaires-chien/',
  title: 'Chenilles processionnaires et chien : que faire en cas de contact',
  description: "Pourquoi les chenilles processionnaires sont dangereuses pour les chiens, les signes à repérer, les gestes immédiats et comment protéger un jardin où vit un chien.",
  h1: 'Chenilles processionnaires et chiens',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Prévention', url: '/traitement-preventif/' },
          { name: 'Chiens', url: '/chenilles-processionnaires-chien/' }],
  datePublished: '2026-02-22',
  dateModified: '2026-09-14',
  priority: '0.8',
  lead: `C'est la situation qui nous vaut le plus d'appels en urgence, entre février et avril. Le chien
  rencontre la procession au sol, s'approche, flaire, parfois lèche — et tout se joue dans les minutes qui
  suivent.`,
  answer: `<p>Le contact d'un chien avec une chenille processionnaire est une <strong>urgence
  vétérinaire</strong>. Les poils urticants provoquent une inflammation violente de la langue, des babines
  et de la gueule, pouvant aller jusqu'à la nécrose d'une partie de la langue. <strong>Rincez
  abondamment la gueule à l'eau claire, sans frotter, et contactez immédiatement un vétérinaire</strong>,
  sans attendre l'apparition des symptômes.</p>`,
  sections: [
    { h2: 'Pourquoi le chien est l\'animal le plus touché',
      tocLabel: 'Pourquoi le chien',
      html: `
      <p>Tout se joue sur le comportement. Un chien explore le monde avec sa truffe et sa gueule, au ras du
      sol, exactement à l'endroit et à la hauteur où passe la procession. Une file de chenilles en mouvement
      est, pour lui, un objet intéressant.</p>
      <p>La <a href="/chenille-processionnaire-du-pin/">processionnaire du pin</a> est très majoritairement
      en cause, parce que c'est la seule des deux espèces à descendre au sol. Le pic des accidents suit donc
      celui des processions : de la fin de l'hiver au début du printemps, avec des variations selon la
      douceur de la saison.</p>
      ${note(`<p>Le chien n'a pas besoin de mordre une chenille. Poser la truffe sur une file, renifler un
      nid tombé, ou simplement fouiller l'herbe là où une procession est passée suffit à ramasser une
      quantité importante de poils.</p>`, 'Le contact direct n\'est pas nécessaire')}` },

    { h2: 'Les signes qui doivent alerter',
      html: `
      <p>Les manifestations apparaissent généralement très vite, souvent en quelques minutes à quelques
      dizaines de minutes.</p>
      <ul class="plain">
        <li><strong>Salivation abondante</strong>, parfois mousseuse — c'est le signe le plus fréquemment décrit.</li>
        <li><strong>Le chien se frotte la gueule</strong> avec les pattes ou contre le sol.</li>
        <li><strong>Gonflement des babines, de la langue ou de la face.</strong></li>
        <li><strong>Langue anormalement colorée</strong> — rouge vif, violacée, ou zones blanchâtres.</li>
        <li><strong>Refus de s'alimenter ou de boire</strong>, gémissements.</li>
        <li><strong>Vomissements</strong>, abattement.</li>
        <li><strong>Difficultés respiratoires</strong> en cas d'atteinte de la gorge — signe de gravité.</li>
      </ul>
      ${safety(`<p><strong>Il s'agit d'une urgence : ne temporisez pas.</strong> Une atteinte de la langue
      peut évoluer rapidement, et les lésions les plus sévères peuvent entraîner la perte d'une partie de la
      langue. Contactez votre vétérinaire habituel ou une clinique d'urgence immédiatement, même si votre
      chien semble aller bien juste après le contact.</p>
      <p>Ces informations sont générales. Elles ne remplacent pas l'examen d'un vétérinaire, seul habilité
      à poser un diagnostic et à prescrire un traitement.</p>`, 'Urgence vétérinaire')}` },

    { h2: 'Les gestes immédiats',
      html: `
      ${steps([
        { title: 'Éloigner le chien de la zone', body: `<p>Attachez-le ou portez-le si nécessaire. L'objectif est
          qu'il cesse d'ingérer ou de ramasser d'autres poils.</p>` },
        { title: 'Rincer abondamment la gueule à l\'eau claire', body: `<p>Avec un gant de protection, à l'eau
          tiède, en abondance et en laissant l'eau s'écouler. <strong>Ne frottez pas</strong> : le frottement
          casse les poils et les enfonce davantage. N'utilisez ni vinaigre, ni alcool, ni produit ménager.</p>` },
        { title: 'Ne rien donner à avaler', body: `<p>Pas de médicament humain, pas d'huile, pas de lait. Certains
          produits peuvent aggraver la situation ou gêner la prise en charge.</p>` },
        { title: 'Appeler le vétérinaire et partir', body: `<p>Annoncez un contact avec une chenille
          processionnaire : c'est une information qui change la prise en charge. Si possible, photographiez la
          chenille ou la zone à distance, sans manipuler.</p>` },
        { title: 'Protéger la zone ensuite', body: `<p>Interdisez l'accès au jardin ou à la parcelle tant que la
          source n'a pas été traitée : le risque de récidive dans les jours qui suivent est élevé.</p>` }
      ])}` },

    { h2: 'Protéger un jardin où vit un chien',
      html: `
      <p>Quand un chien vit sur la parcelle, la stratégie change : on ne protège pas seulement l'arbre, on
      protège le sol.</p>
      <ul class="plain">
        <li><strong>Faire retirer les nids</strong> avant la période de descente, par <a href="/echenillage/">échenillage</a> — c'est la mesure la plus efficace.</li>
        <li><strong>Poser un <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a></strong> sur les pins concernés, en décembre-janvier, si les nids ne sont pas accessibles.</li>
        <li><strong>Clôturer le pied des arbres</strong> à risque pendant la saison des processions, même avec un dispositif léger.</li>
        <li><strong>Éviter la tonte</strong> sous un pin infesté : elle disperse les poils au niveau exact de la truffe.</li>
        <li><strong>Inspecter avant de lâcher le chien</strong>, au retour d'une absence, pendant les journées douces de février et mars.</li>
      </ul>
      ${note(`<p>Le sac du collier de piégeage contient des chenilles vivantes et urticantes. Il doit être
      placé hors de portée du chien : c'est un point que nous vérifions systématiquement à la pose lorsqu'un
      animal a accès au pied de l'arbre.</p>`, 'Un détail qui compte')}` },

    { h2: 'En promenade, en forêt, au parc',
      html: `
      <p>En Île-de-France, la question se pose autant en promenade qu'à la maison. Les lisières des massifs
      de pins et les allées forestières ensoleillées sont des lieux de procession fréquents en fin d'hiver.</p>
      <ul class="plain">
        <li><strong>Tenir le chien en laisse</strong> pendant la période des processions, en particulier sur les allées sableuses et ensoleillées.</li>
        <li><strong>Regarder le sol</strong> : une file de chenilles est visible de loin et facile à contourner.</li>
        <li><strong>Éviter les pieds de pins</strong> et les zones où des nids sont visibles dans les arbres.</li>
        <li><strong>Signaler</strong> un foyer important au gestionnaire du site — les collectivités disposent en général d'un circuit de signalement.</li>
      </ul>` }
  ],
  faq: [
    { q: "Mon chien a léché une chenille mais semble aller bien, dois-je consulter ?",
      a: `<p>Oui. Les symptômes peuvent apparaître avec un léger décalage, et l'évolution peut être rapide.
      Un avis vétérinaire immédiat est justifié même en l'absence de signe visible.</p>` },
    { q: "Peut-on rincer avec de l'eau vinaigrée ?",
      a: `<p>Non. Utilisez uniquement de l'eau claire, en abondance et sans frotter. Les solutions acides ou
      alcoolisées peuvent aggraver l'irritation des muqueuses déjà lésées.</p>` },
    { q: "Un chien peut-il être touché sans avoir vu de chenille ?",
      a: `<p>Oui. Les poils restent présents au sol là où une procession est passée, et dans l'herbe sous un
      arbre infesté, pendant des mois. Un chien qui fouille cette zone peut réagir sans qu'aucune chenille
      ne soit visible.</p>` },
    { q: "Les chiots et les petits chiens sont-ils plus à risque ?",
      a: `<p>Ils sont plus curieux, plus près du sol, et une même quantité de poils représente une exposition
      relativement plus importante. La vigilance doit être renforcée, sans que cela exonère les autres.</p>` },
    { q: "Que faire si mon chien a avalé une chenille ?",
      a: `<p>Direction le vétérinaire sans délai, en précisant qu'il s'agit d'une chenille processionnaire.
      Ne tentez pas de faire vomir l'animal : cela ferait repasser les poils sur les muqueuses.</p>` },
    { q: "Quelle est la période la plus à risque pour un chien ?",
      a: `<p>De la fin de l'hiver au début du printemps, pendant les processions de la processionnaire du
      pin — soit, en Île-de-France, le plus souvent de janvier à mars selon la douceur de la saison.</p>` }
  ],
  cta: {
    title: "Un chien au jardin et un pin porteur de nids : à traiter avant la descente",
    text: `Si vos pins portent des nids et que votre chien a accès au terrain, la fenêtre utile se situe avant
    les premières journées douces de l'hiver. Décrivez-nous la configuration du jardin.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/chenilles-processionnaires-chat/', label: 'Risques pour les chats', hint: 'Un profil d\'exposition différent' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers en général', hint: 'Mécanisme des poils urticants' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger le sol quand le nid est inaccessible' },
    { url: '/blog/animaux/chien-touche-une-chenille-que-faire/', label: 'Chien en contact : que faire', hint: 'Marche à suivre détaillée' },
    { url: '/blog/danger/pourquoi-dangereuses-pour-les-chiens/', label: 'Pourquoi un tel danger', hint: 'Le mécanisme expliqué' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Sécuriser un jardin' }
  ]
});
