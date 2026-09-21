import { standardPage, zoneReminder } from '../../lib/layout.mjs';
import { steps, note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/particuliers/',
  title: 'Chenilles processionnaires : intervention chez les particuliers',
  description: "Un nid dans votre jardin : déroulé d'une intervention chez un particulier, ce qui détermine le prix et les précautions à prendre avant notre venue.",
  h1: 'Intervention chez les particuliers',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Particuliers', url: '/particuliers/' }],
  datePublished: '2026-04-02',
  dateModified: '2026-09-09',
  service: {
    name: 'Intervention chez les particuliers',
    type: 'Traitement des chenilles processionnaires pour les particuliers',
    description: "Identification, échenillage, piégeage et prévention des chenilles processionnaires dans les jardins de particuliers, en Île-de-France."
  },
  lead: `Un pin au fond du jardin, un nid blanc repéré depuis la cuisine, un chien qui traîne sous l'arbre :
  c'est la configuration la plus fréquente, et la plus simple à traiter — à condition de ne pas attendre
  le mois de mars.`,
  answer: `<p>Chez un particulier, l'intervention se déroule en trois temps : <strong>identification à
  distance sur photo</strong> pour éviter un déplacement inutile, <strong>visite et retrait des nids</strong>
  avec un périmètre de sécurité, puis <strong>consignes sur le sol</strong> et, si nécessaire, mise en place
  d'un dispositif pour la saison suivante. Comptez généralement une demi-journée sur place pour un à trois
  arbres.</p>`,
  sections: [
    { h2: 'Avant de nous appeler : trois informations utiles',
      tocLabel: 'Ce qu\'il faut préparer',
      html: `
      <p>Quelques éléments accélèrent considérablement le diagnostic et évitent des allers-retours.</p>
      <ul class="plain">
        <li><strong>L'essence de l'arbre</strong> — pin, cèdre, chêne, ou « je ne sais pas » avec une photo du feuillage.</li>
        <li><strong>La hauteur estimée du nid</strong> — par rapport à une fenêtre, à une gouttière, à un étage.</li>
        <li><strong>Ce qui se trouve en dessous</strong> — terrasse, pelouse, potager, aire de jeux, chenil, piscine.</li>
      </ul>
      <p>Ajoutez trois photos : l'arbre entier, le nid au zoom, le pied de l'arbre. C'est souvent suffisant
      pour confirmer l'espèce et fixer le degré d'urgence. <a href="/contact/">Envoyer des photos</a>.</p>
      ${note(`<p>Si vous avez un doute sur l'arbre, photographiez une branche : des aiguilles groupées par
      deux ou trois indiquent un pin, des feuilles lobées un chêne. Cela suffit à orienter tout le reste.</p>`)}` },

    { h2: 'Le déroulé d\'une intervention',
      html: `
      ${steps([
        { title: 'Échange et identification', body: `<p>Par téléphone ou par le formulaire, avec vos photos. Nous
          écartons les fausses alertes — toile d'hyponomeute, gui, nid d'oiseau — et confirmons l'espèce.</p>` },
        { title: 'Proposition et date', body: `<p>Nous indiquons la méthode adaptée à la saison, la durée prévue et
          le devis. Pour un cas simple et accessible, le chiffrage se fait souvent sur photos.</p>` },
        { title: 'Préparation de votre côté', body: `<p>Dégager l'accès au pied de l'arbre, rentrer le linge, les
          jouets et les coussins d'extérieur, prévoir de garder les animaux à l'intérieur, fermer les
          fenêtres proches.</p>` },
        { title: 'Intervention', body: `<p>Balisage, équipement complet, retrait des nids avec confinement immédiat,
          contrôle du sol. Vous n'avez pas à être présent en permanence, mais votre présence au début et à la
          fin est utile.</p>` },
        { title: 'Consignes et suites', body: `<p>Délai avant reprise de la tonte, zones à éviter quelques jours,
          et discussion sur la saison suivante si l'arbre risque d'être recolonisé.</p>` }
      ])}` },

    { h2: 'Ce qui fait varier le prix',
      html: `
      <p>Nous ne publions pas de tarif forfaitaire, parce qu'il serait trompeur : deux nids identiques sur
      deux arbres différents ne demandent pas le même travail. Voici ce qui compte réellement.</p>
      ${table(
        ['Facteur', 'Effet sur le coût'],
        [
          ['Hauteur du nid', "Perche depuis le sol, nacelle ou grimpeur : c'est le premier poste"],
          ['Accès au pied de l\'arbre', "Un jardin accessible en véhicule coûte moins qu'un fond de parcelle à pied"],
          ['Nombre de nids et d\'arbres', "Plusieurs nids sur le même déplacement reviennent moins cher par nid"],
          ['Espèce et méthode', "Aspiration sur chêne, coupe sur pin, pulvérisation : matériels différents"],
          ['Période', "En pleine saison, les délais s'allongent ; hors saison, l'organisation est plus souple"],
          ['Zone au sol à sécuriser', "Terrasse, piscine, aire de jeux : temps de balisage et de contrôle"]
        ],
        "Les postes qui pèsent réellement dans un devis")}
      ${note(`<p>Un conseil qui fait souvent économiser : si des voisins ont le même problème — c'est très
      fréquent, les pins d'un lotissement sont contaminés ensemble — une intervention groupée sur plusieurs
      jardins le même jour réduit nettement le coût pour chacun.</p>`, 'Intervention groupée entre voisins')}` },

    { h2: 'Les situations particulières',
      html: `
      <ul class="plain">
        <li><strong>Arbre en limite de propriété</strong> — c'est le propriétaire de l'arbre qui décide. Avec un accord écrit des deux parties, nous intervenons depuis le terrain le plus praticable.</li>
        <li><strong>Arbre du voisin, nid côté chez vous</strong> — la discussion amiable fonctionne mieux qu'un courrier. Si elle échoue, la mairie est l'interlocuteur à solliciter.</li>
        <li><strong>Chien ou chat au jardin</strong> — la protection du sol devient prioritaire. Voir <a href="/chenilles-processionnaires-chien/">chiens</a> et <a href="/chenilles-processionnaires-chat/">chats</a>.</li>
        <li><strong>Potager ou ruche à proximité</strong> — signalez-le : cela exclut certaines méthodes et oriente vers le retrait mécanique.</li>
        <li><strong>Piscine sous l'arbre</strong> — la filtration retient les poils ; un contrôle du bassin est à prévoir après l'intervention.</li>
      </ul>` },

    { h2: 'Et après ?',
      html: `
      <p>Un arbre infesté une année a de bonnes chances de l'être la suivante, surtout si d'autres pins ou
      chênes porteurs se trouvent dans le voisinage. Trois suites possibles, par ordre de simplicité :</p>
      <ol>
        <li><strong>Surveillance</strong> — vous regardez l'arbre en novembre (pin) ou en mai (chêne) et vous nous signalez tout nouveau nid. C'est gratuit et souvent suffisant.</li>
        <li><strong>Piégeage</strong> — un <a href="/piegeage-chenilles-processionnaires/">collier</a> posé avant la descente protège le sol l'hiver suivant.</li>
        <li><strong>Traitement préventif</strong> — une <a href="/traitement-preventif/">application biologique</a> à la bonne saison empêche la formation des nids.</li>
      </ol>
      ${zoneReminder}` }
  ],
  faq: [
    { q: "Dois-je être présent pendant l'intervention ?",
      a: `<p>Pas en permanence, mais votre présence au début — pour l'accès et le point de départ — et à la
      fin — pour les consignes — est utile. Si vous ne pouvez pas être là, nous convenons à l'avance des
      modalités d'accès.</p>` },
    { q: "Combien de temps faut-il attendre avant de réutiliser le jardin ?",
      a: `<p>Le temps que la retombée des poils se termine et que le sol soit contrôlé. Le délai vous est
      indiqué sur place : il dépend de la hauteur du nid retiré, du vent le jour de l'intervention et de la
      surface concernée.</p>` },
    { q: "Puis-je faire l'intervention moi-même pour économiser ?",
      a: `<p>La pose d'un collier de piégeage sur un petit pin accessible est à votre portée, si elle est
      faite tôt et soigneusement. Le retrait d'un nid urticant en hauteur ne l'est pas : c'est l'opération
      qui provoque le plus d'accidents domestiques.</p>` },
    { q: "Faut-il prévenir les voisins ?",
      a: `<p>C'est recommandé : ils peuvent rentrer leur linge et leurs animaux, et ils ont souvent le même
      problème sans le savoir. Cela ouvre parfois la porte à une intervention groupée moins coûteuse.</p>` },
    { q: "Intervenez-vous le week-end ?",
      a: `<p>Selon les périodes et la charge de la saison. En cas de situation exposée — enfants, chien,
      procession en cours — précisez-le : cela entre dans la hiérarchisation des priorités.</p>` },
    { q: "Que faire si je découvre un nid en plein été ?",
      a: `<p>Sur pin, il s'agit presque toujours d'un ancien nid vide, qu'il est utile de retirer sans
      urgence. Sur chêne, un nid en juillet est encore actif ou vient de l'être : il doit être traité,
      d'autant qu'il restera urticant.</p>` }
  ],
  cta: {
    title: "Décrire votre jardin en quelques lignes",
    text: `L'essence de l'arbre, la hauteur approximative du nid et ce qui se trouve en dessous : ces trois
    éléments suffisent pour vous dire ce qu'il faut faire, et quand.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/echenillage/', label: 'Échenillage', hint: 'Comment se passe le retrait' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger le sol du jardin' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: 'Si un chien a accès au terrain' },
    { url: '/chenilles-processionnaires-enfant/', label: 'Protéger les enfants', hint: 'Bac à sable, pelouse, aire de jeux' },
    { url: '/contact/', label: 'Envoyer des photos', hint: 'Identification à distance' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Votre département' }
  ]
});
