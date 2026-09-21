import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/91-essonne/evry-courcouronnes/',
  villeName: 'Évry-Courcouronnes',
  deptSlug: '91-essonne',
  villeTeaser: "ville nouvelle aux plantations arrivées à maturité, avec un patrimoine arboré homogène",
  title: 'Chenilles processionnaires à Évry-Courcouronnes (91000)',
  description: "Évry-Courcouronnes : les plantations de la ville nouvelle arrivent à maturité. Patrimoine arboré homogène et gestion par inventaire.",
  h1: 'Chenilles processionnaires à Évry-Courcouronnes',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Essonne (91)', url: '/departements/91-essonne/' },
          { name: 'Évry-Courcouronnes', url: '/departements/91-essonne/evry-courcouronnes/' }],
  datePublished: '2026-05-20',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Évry-Courcouronnes',
    type: 'Inventaire, échenillage et campagnes de traitement',
    description: "Traitement des chenilles processionnaires à Évry-Courcouronnes : espaces verts de résidences, parcs urbains, établissements et patrimoine planté.",
    areaServed: ['Évry-Courcouronnes', 'Essonne (91)']
  },
  lead: `Une ville nouvelle a une particularité qu'on n'apprécie qu'après coup : son patrimoine arboré a été
  planté d'un coup, avec un nombre limité d'essences. Cinquante ans plus tard, cela facilite énormément
  l'inventaire — et cela signifie aussi que ce qui concerne un arbre concerne souvent toute une série.`,
  answer: `<p>À Évry-Courcouronnes, le patrimoine arboré est issu des <strong>plantations de la ville
  nouvelle</strong>, réalisées à partir des années 1970 et aujourd'hui matures. Les <strong>conifères
  d'ornement</strong> installés à cette époque sont concernés par la processionnaire du pin, les
  <strong>chênes des parcs et du bois de Saint-Eutrope</strong> par la processionnaire du chêne.
  L'homogénéité du patrimoine rend la gestion par inventaire particulièrement efficace.</p>`,
  sections: [
    { h2: 'Un patrimoine planté, donc connaissable',
      html: `
      <p>Contrairement à une commune ancienne, où les arbres se sont accumulés par strates au fil des
      siècles, une ville nouvelle possède un patrimoine <strong>conçu</strong> : des essences choisies, des
      implantations dessinées, des dates de plantation connues.</p>
      <p>C'est un avantage opérationnel considérable. Un inventaire y est plus rapide à établir, les
      essences hôtes sont identifiables par secteur, et l'on peut anticiper : si un alignement de conifères
      planté en même temps commence à être colonisé, l'ensemble de l'alignement est à surveiller.</p>
      ${note(`<p>Le revers est symétrique. Une plantation homogène est un ensemble d'arbres de même
      essence, de même âge et de même exposition — donc un terrain uniformément favorable. Quand la pression
      s'installe, elle concerne rarement un seul sujet.</p>`, 'L\'envers de l\'homogénéité')}` },

    { h2: 'Les espaces concernés',
      html: `
      ${table(
        ['Type d\'espace', 'Essences concernées', 'Enjeu principal'],
        [
          ['Espaces verts de résidences', "Conifères d'ornement, chênes rouges", "Aires de jeux et cheminements en dessous"],
          ['Parcs et coulées vertes', 'Chênes, conifères', 'Forte fréquentation familiale aux beaux jours'],
          ['Bois de Saint-Eutrope', 'Chênes', "Réservoir local pour la processionnaire du chêne"],
          ['Abords d\'équipements publics', 'Variables', "Écoles, gymnases, équipements sportifs"],
          ['Alignements de voirie', 'Variables', 'Signalement aux services gestionnaires'],
          ['Parkings paysagers', "Conifères d'ornement", 'Retombée sur les véhicules']
        ],
        "Les espaces arborés d'Évry-Courcouronnes et leurs enjeux")}` },

    { h2: 'Pourquoi l\'approche par campagne est plus efficace ici',
      tocLabel: 'Gestion par campagne',
      html: `
      <p>Sur un patrimoine homogène et étendu, l'intervention déclenchée par signalement est le pire des
      modes de gestion : on traite ce qui a été vu, donc ce qui est déjà avancé, souvent en pleine période
      urticante, avec balisage et perturbation d'usage.</p>
      <p>L'alternative consiste à raisonner par campagne annuelle :</p>
      <ol>
        <li><strong>Inventaire</strong> — recensement des pins, cèdres et chênes par secteur, avec relevé de l'usage du sol en dessous.</li>
        <li><strong>Hiérarchisation</strong> — priorité aux arbres surplombant une aire de jeux, un cheminement scolaire ou un équipement fréquenté.</li>
        <li><strong>Traitement aux fenêtres utiles</strong> — automne pour les conifères, printemps pour les chênes.</li>
        <li><strong>Suivi</strong> — mise à jour de l'inventaire chaque année, ce qui réduit progressivement le périmètre traité.</li>
      </ol>
      <p>Voir <a href="/collectivites/">intervention pour les collectivités</a> et
      <a href="/traitement-preventif/">traitement préventif</a>.</p>` },

    { h2: 'Bailleurs, syndics et signalements habitants',
      html: `
      <p>Une part importante du patrimoine arboré relève d'espaces gérés : résidences, copropriétés,
      ensembles locatifs. La question « à qui appartient l'arbre » est donc la première à trancher, et elle
      détermine le délai.</p>
      <ul class="plain">
        <li><strong>Résidence locative</strong> — le bailleur, via l'antenne de proximité ou le gardien. C'est la voie la plus rapide pour un locataire.</li>
        <li><strong>Copropriété</strong> — le syndic. Voir <a href="/coproprietes/">copropriétés</a>.</li>
        <li><strong>Parc, square, école, voirie</strong> — les services de la collectivité gestionnaire.</li>
        <li><strong>Bois de Saint-Eutrope</strong> — le gestionnaire du site.</li>
        <li><strong>Jardin privé</strong> — le propriétaire. Voir <a href="/particuliers/">particuliers</a>.</li>
      </ul>
      <p>Dans tous les cas, un signalement avec photo et localisation précise — nom de la résidence, allée,
      équipement le plus proche — est traité bien plus vite qu'une description approximative.</p>` }
  ],
  faq: [
    { q: "Les arbres des années 1970 sont-ils tous concernés ?",
      a: `<p>Non : seuls les pins, les cèdres et les chênes sont des essences hôtes. Les autres essences
      plantées à l'époque ne sont pas concernées. L'intérêt de l'inventaire est précisément de faire ce
      tri.</p>` },
    { q: "Je suis locataire, que dois-je faire ?",
      a: `<p>Signalez l'arbre à votre bailleur, avec une photo et l'emplacement exact. C'est le bailleur qui
      engage l'intervention sur les espaces extérieurs de la résidence. En attendant, évitez de laisser
      jouer des enfants au pied de l'arbre.</p>` },
    { q: "Le bois de Saint-Eutrope est-il traité ?",
      a: `<p>Un boisement ouvert au public est géré par son gestionnaire, qui priorise les zones d'accueil.
      La lutte n'y est pas généralisée. Pour une résidence riveraine, c'est le patrimoine de la résidence
      qui doit être surveillé.</p>` },
    { q: "Faut-il traiter tout un alignement de conifères ?",
      a: `<p>Pas nécessairement, mais il faut l'inspecter en entier. Des arbres de même essence, de même âge
      et de même exposition sont colonisés dans des conditions comparables : trouver un nid sur l'un
      justifie de vérifier les autres.</p>` },
    { q: "Quel est le meilleur moment pour lancer une campagne ?",
      a: `<p>L'inventaire peut se faire à n'importe quelle saison. Les traitements, eux, se calent sur les
      fenêtres biologiques : automne pour les conifères, avril pour les chênes. Une campagne se prépare donc
      un à deux trimestres à l'avance.</p>` }
  ],
  cta: {
    title: "Faire inventorier le patrimoine arboré d'un secteur",
    text: `Sur un patrimoine planté et homogène, l'inventaire est rapide à établir et sert plusieurs années.
    C'est le document qui permet de hiérarchiser et de budgéter.`,
    primary: 'Demander un inventaire'
  },
  related: [
    { url: '/departements/91-essonne/', label: 'Essonne (91)', hint: 'Situation départementale' },
    { url: '/departements/91-essonne/etampes/', label: 'Étampes', hint: 'Le sud rural du département' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Inventaire et campagnes' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Espaces verts de résidences' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Plan pluriannuel' },
    { url: '/ecoles/', label: 'Écoles et crèches', hint: 'Abords scolaires plantés' }
  ]
});
