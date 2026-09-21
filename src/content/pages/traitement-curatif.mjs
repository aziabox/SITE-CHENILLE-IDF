import { standardPage } from '../../lib/layout.mjs';
import { safety, note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/traitement-curatif/',
  title: 'Traitement curatif des chenilles processionnaires',
  description: "Infestation déjà installée : diagnostic, sécurisation immédiate de la zone, retrait des nids et traitement du sol. Ce qui relève de l'urgence et ce qui peut attendre la bonne fenêtre.",
  h1: 'Traitement curatif : une infestation déjà installée',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Prévention', url: '/traitement-preventif/' },
          { name: 'Traitement curatif', url: '/traitement-curatif/' }],
  datePublished: '2026-03-12',
  dateModified: '2026-09-06',
  service: {
    name: 'Traitement curatif des chenilles processionnaires',
    type: 'Intervention sur infestation déclarée',
    description: "Diagnostic, sécurisation, retrait des nids et traitement des zones contaminées en cas d'infestation avérée de chenilles processionnaires, en Île-de-France."
  },
  lead: `Il y a un nid, il y a des chenilles, et il y a des gens ou des animaux qui vivent dessous.
  La question n'est plus de savoir s'il faut agir, mais dans quel ordre — et la première action n'est pas
  toujours celle qu'on imagine.`,
  answer: `<p>Le traitement curatif intervient sur une infestation visible. Il combine quatre actions :
  <strong>sécuriser la zone immédiatement</strong> (balisage, arrêt de la tonte, mise à l'abri des animaux),
  <strong>retirer les nids</strong> par échenillage ou aspiration, <strong>traiter les zones contaminées</strong>
  au sol ou sur l'écorce, et <strong>enchaîner sur un dispositif préventif</strong> pour la saison suivante.</p>`,
  sections: [
    { h2: 'La première action est gratuite : mettre la zone hors d\'usage',
      tocLabel: 'Sécuriser immédiatement',
      html: `
      <p>Entre le moment où l'on découvre un nid et celui où un professionnel intervient, il s'écoule au
      mieux quelques jours. C'est pendant ce délai que se produisent la plupart des expositions, parce que
      la vie continue autour de l'arbre.</p>
      ${safety(`<p><strong>À faire dès la découverte :</strong></p>
      <ul>
        <li>Délimiter une zone autour du pied de l'arbre et ne plus y circuler.</li>
        <li>Empêcher l'accès des chiens et des enfants, y compris par un simple ruban ou un obstacle.</li>
        <li>Arrêter la tonte, le soufflage et le ratissage sous l'arbre et à proximité.</li>
        <li>Rentrer les jouets, les gamelles, le linge et les coussins d'extérieur ; les laver avant réutilisation.</li>
        <li>Ne pas s'approcher du nid, ne pas le photographier de près, ne rien secouer.</li>
      </ul>
      <p>Ces mesures ne coûtent rien et suppriment l'essentiel de l'exposition en attendant l'intervention.</p>`,
      'Mesures conservatoires')}` },

    { h2: 'Ce qui relève vraiment de l\'urgence',
      html: `
      <p>Toutes les infestations ne se valent pas. Trois éléments déterminent la priorité : la proximité de
      l'usage, la hauteur du nid et la période du cycle.</p>
      ${table(
        ['Situation', 'Degré d\'urgence', 'Raison'],
        [
          ['Chenilles en procession sur un cheminement', 'Immédiat', "Contact direct possible dans l'heure"],
          ['Nid de chêne à hauteur d\'homme en cour d\'école', 'Immédiat', 'Exposition inévitable des enfants'],
          ['Nid de pin au-dessus d\'une terrasse, en février', 'Élevé', "La descente est proche : le sol sera concerné"],
          ['Nid de pin en haut d\'un arbre isolé, en novembre', 'Modéré', "Fenêtre d'intervention confortable jusqu'en janvier"],
          ['Ancien nid vide sur chêne, hors saison', 'Faible mais réel', 'Relargage continu de poils, à programmer']
        ],
        "Hiérarchiser sans dramatiser")}
      <p>Nous préférons le dire clairement : une bonne partie des situations n'exige pas une intervention
      sous 24 heures, et un prestataire qui présente chaque cas comme une urgence absolue mérite un second
      avis.</p>` },

    { h2: 'Le diagnostic curatif',
      html: `
      <p>Sur place, quatre points sont relevés avant toute opération.</p>
      <ol>
        <li><strong>L'espèce et le stade</strong> — ils déterminent la technique et le niveau de protection.</li>
        <li><strong>Le nombre et la position des nids</strong> — y compris ceux qui ne sont pas visibles depuis le point d'observation habituel. Sur chêne, un tour complet du tronc est indispensable.</li>
        <li><strong>L'état du sol</strong> — présence de chenilles descendues, de mues, de déjections ; c'est ce qui détermine les consignes après intervention.</li>
        <li><strong>Les contraintes du site</strong> — accès, réseaux, point d'eau, ruche, potager, voisinage, horaires d'usage.</li>
      </ol>
      <p>Ce diagnostic conditionne aussi ce que nous vous dirons de ne pas faire pendant quelques jours après
      l'intervention.</p>` },

    { h2: 'Les opérations curatives',
      html: `
      <p>Selon le cas, l'intervention combine plusieurs gestes.</p>
      <ul class="plain">
        <li><strong><a href="/echenillage/">Échenillage ou aspiration</a></strong> — retrait des nids, avec confinement immédiat. C'est le cœur de l'intervention.</li>
        <li><strong>Collecte des chenilles descendues</strong> — au sol, dans les massifs, le long des murs, là où la procession s'est arrêtée.</li>
        <li><strong>Traitement de l'écorce</strong> — sur chêne, après aspiration, pour les poils restés sur le tronc.</li>
        <li><strong><a href="/piegeage-chenilles-processionnaires/">Pose d'un collier</a></strong> — si la descente est déjà entamée et que tous les nids ne peuvent être atteints.</li>
        <li><strong>Consignes de sol</strong> — délai avant reprise de la tonte, arrosage, zones à éviter.</li>
      </ul>
      ${note(`<p>Une intervention curative se termine toujours par une conversation sur la suite. Un arbre
      infesté cette année le sera probablement l'an prochain si rien ne change : c'est le moment de décider
      d'un <a href="/traitement-preventif/">dispositif préventif</a>, pas six mois plus tard.</p>`)}` },

    { h2: 'Après l\'intervention',
      html: `
      <p>Le jardin ou l'espace redevient utilisable une fois la retombée des poils terminée et le sol
      contrôlé. Le délai dépend de la hauteur du nid retiré, du vent le jour de l'intervention et de la
      surface concernée ; il vous est indiqué sur place plutôt que promis à l'avance.</p>
      <p>Trois recommandations reviennent presque toujours :</p>
      <ul class="plain">
        <li><strong>Laver le mobilier d'extérieur</strong> et les textiles restés dehors, à l'eau, sans les secouer d'abord.</li>
        <li><strong>Attendre avant de tondre</strong> — la tonte remet en suspension les poils déjà tombés.</li>
        <li><strong>Observer l'arbre à la saison suivante</strong> — et signaler le moindre nouveau nid, qui se traitera alors dans de bien meilleures conditions.</li>
      </ul>` }
  ],
  faq: [
    { q: "Combien de temps faut-il pour intervenir après un signalement ?",
      a: `<p>Cela dépend de la période : en pleine saison, les demandes se concentrent sur quelques semaines.
      Les situations à exposition directe — école, aire de jeux, procession en cours — sont traitées en
      priorité. Dans tous les cas, les mesures conservatoires décrites plus haut s'appliquent dès le
      signalement.</p>` },
    { q: "Une intervention curative garantit-elle la fin du problème ?",
      a: `<p>Elle supprime ce qui est présent. Elle ne protège pas contre une recolonisation depuis les
      arbres voisins. Toute promesse d'éradication définitive en une seule visite est à considérer avec
      méfiance.</p>` },
    { q: "Peut-on intervenir en curatif hors saison ?",
      a: `<p>Oui pour retirer des nids anciens, ce qui a un vrai intérêt sur chêne. Non pour agir sur des
      chenilles qui, à cette période, n'existent qu'à l'état d'œuf ou de chrysalide.</p>` },
    { q: "Faut-il prévenir ses voisins ?",
      a: `<p>C'est utile, pour deux raisons : ils peuvent rentrer leur linge et leurs animaux le jour de
      l'intervention, et ils ont souvent le même problème sans le savoir. Une intervention coordonnée sur
      plusieurs jardins voisins est plus efficace et revient moins cher à chacun.</p>` },
    { q: "Mon assurance ou ma commune peut-elle prendre en charge l'intervention ?",
      a: `<p>Cela dépend entièrement du contrat et de la commune : certaines collectivités organisent des
      campagnes groupées ou subventionnent la pose de pièges. Renseignez-vous en mairie — nous ne pouvons
      pas nous prononcer à votre place sur ces dispositifs.</p>` }
  ],
  cta: {
    title: "Nid identifié, zone fréquentée : décrivez la situation",
    text: `Hauteur du nid, essence de l'arbre, ce qui se trouve en dessous et depuis quand vous l'observez :
    ces quatre éléments suffisent à évaluer l'urgence réelle et à vous donner les consignes immédiates.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'La suite logique du curatif' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Retrait, confinement, élimination' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Comprendre le risque que l\'on traite' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Si un animal a été exposé' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Déroulé pour un jardin privé' },
    { url: '/blog/conseils/organiser-une-intervention/', label: 'Organiser une intervention', hint: 'Ce qu\'il faut préparer' }
  ]
});
