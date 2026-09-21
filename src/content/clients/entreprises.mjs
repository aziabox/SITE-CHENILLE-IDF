import { standardPage } from '../../lib/layout.mjs';
import { table, note, safety } from '../../lib/render.mjs';

export default standardPage({
  url: '/entreprises/',
  title: 'Chenilles processionnaires : intervention pour les entreprises',
  description: "Sites tertiaires, parcs d'activités, campings, hôtels : traiter les processionnaires sans interrompre l'activité, et documenter la démarche.",
  h1: 'Intervention pour les entreprises',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Entreprises', url: '/entreprises/' }],
  datePublished: '2026-04-06',
  dateModified: '2026-09-09',
  service: {
    name: 'Traitement pour les entreprises',
    type: 'Traitement des chenilles processionnaires sur sites professionnels',
    description: "Inventaire, traitement et suivi des chenilles processionnaires sur sites tertiaires, industriels, hôteliers et de plein air, en Île-de-France."
  },
  lead: `Sur un site professionnel, deux contraintes s'ajoutent à la technique : la continuité de l'activité
  et la traçabilité. Un parking arboré fermé une journée a un coût ; une exposition de salariés ou de
  clients en a un autre.`,
  answer: `<p>Pour une entreprise, l'intervention se cale sur l'<strong>activité du site</strong> : horaires
  décalés, week-end, périodes de fermeture. Elle commence par un <strong>inventaire des arbres et des zones
  d'usage</strong> (parkings, cheminements, terrasses, aires de pause) et se conclut par un
  <strong>compte rendu écrit</strong>, utile au titre de la prévention des risques pour les personnes
  présentes sur le site.</p>`,
  sections: [
    { h2: 'Les sites que nous rencontrons le plus souvent',
      html: `
      <ul class="plain">
        <li><strong>Sièges et immeubles de bureaux</strong> — parkings paysagers, allées d'accès, terrasses de restauration d'entreprise.</li>
        <li><strong>Parcs d'activités et zones logistiques</strong> — alignements de pins et de chênes en bordure de voirie interne, aires de stationnement poids lourds.</li>
        <li><strong>Hôtels, restaurants, établissements de loisirs</strong> — terrasses, parkings clients, espaces extérieurs de séjour.</li>
        <li><strong>Campings et hébergements de plein air</strong> — les plus exposés : les emplacements sont sous les arbres, les clients y séjournent et s'y allongent.</li>
        <li><strong>Résidences gérées, cliniques, établissements médico-sociaux</strong> — jardins fréquentés par des publics parfois fragiles.</li>
        <li><strong>Sites industriels et entrepôts</strong> — haies et boisements de ceinture, souvent peu surveillés.</li>
      </ul>
      ${note(`<p>Le camping et l'hôtellerie de plein air constituent le cas le plus sensible : la période de
      descente des processionnaires du pin précède de peu l'ouverture de saison, et les nids repérés en avril
      laissent un sol chargé de poils là où les clients installeront leurs tentes. Un passage en fin d'hiver
      évite ce scénario.</p>`, 'Un cas particulier')}` },

    { h2: 'Concilier traitement et continuité d\'activité',
      tocLabel: 'Continuité d\'activité',
      html: `
      <p>Le périmètre de sécurité est la contrainte réelle : pendant l'intervention et la retombée des
      poils, une zone n'est pas utilisable. Sur un site actif, cela demande une organisation.</p>
      ${table(
        ['Zone concernée', 'Organisation possible'],
        [
          ['Parking visiteurs', 'Intervention tôt le matin ou le samedi ; report du stationnement sur une autre zone'],
          ['Allée d\'accès principale', "Traitement par demi-largeur avec circulation alternée, ou en dehors des heures d'ouverture"],
          ['Terrasse et aire de pause', "Fermeture ponctuelle annoncée en interne quelques jours avant"],
          ['Zone logistique', 'Créneau entre deux rotations, coordonné avec le responsable d\'exploitation'],
          ['Site saisonnier (camping, loisirs)', 'Intervention hors saison, de préférence en fin d\'hiver']
        ],
        "Adapter le chantier à l'exploitation du site")}
      <p>Dans tous les cas, une visite préalable permet d'identifier les arbres et de caler les créneaux avec
      le responsable de site — c'est ce qui évite les mauvaises surprises le jour du chantier.</p>` },

    { h2: 'Salariés, prestataires et visiteurs',
      html: `
      <p>Plusieurs populations peuvent être exposées sur un site professionnel, et toutes ne relèvent pas de
      la même logique.</p>
      <ul class="plain">
        <li><strong>Les salariés qui travaillent à l'extérieur</strong> — jardiniers, agents de maintenance, logisticiens, gardiens. Ce sont les plus exposés, notamment lors des opérations de tonte et de soufflage.</li>
        <li><strong>Les prestataires d'espaces verts</strong> — l'élagage ou la taille d'un arbre infesté expose directement l'équipe. L'information doit circuler avant le chantier.</li>
        <li><strong>Les salariés en pause à l'extérieur</strong> — terrasses, bancs, fumoirs situés sous les arbres.</li>
        <li><strong>Les visiteurs et les clients</strong> — parkings, cheminements d'accès, espaces d'attente.</li>
      </ul>
      ${safety(`<p>L'employeur est tenu d'évaluer les risques auxquels sont exposés ses salariés et de
      prendre les mesures de prévention adaptées. Lorsque des arbres infestés sont présents sur un site où
      des personnes travaillent à l'extérieur, le sujet a sa place dans cette démarche d'évaluation. Notre
      compte rendu d'intervention fournit les éléments factuels — arbres concernés, zones, dates,
      méthode.</p>
      <p>Nous ne nous substituons pas à un conseil juridique : l'appréciation des obligations applicables
      relève de l'employeur et de ses conseils.</p>`, 'Prévention des risques professionnels')}` },

    { h2: 'Ce que contient notre compte rendu',
      html: `
      <p>Sur un site professionnel, l'écrit compte autant que l'intervention. Le document remis comprend :</p>
      <ul class="plain">
        <li>L'<strong>inventaire des arbres</strong> identifiés, avec essence, localisation et présence de nids.</li>
        <li>Les <strong>zones d'usage exposées</strong> et le niveau de priorité retenu pour chacune.</li>
        <li>La <strong>méthode employée</strong>, la date et la durée de l'intervention.</li>
        <li>Le <strong>nombre de nids retirés</strong> et le mode de confinement et d'élimination.</li>
        <li>Les <strong>consignes post-intervention</strong> : délai avant reprise de la tonte, zones à laisser au repos.</li>
        <li>Les <strong>recommandations pour la saison suivante</strong>, avec les fenêtres d'intervention utiles.</li>
      </ul>` },

    { h2: 'Contrat annuel ou intervention ponctuelle',
      html: `
      <p>Les deux formats existent, et le choix dépend de la taille du patrimoine arboré.</p>
      <p>Pour un site avec quelques arbres concernés, une <strong>intervention ponctuelle</strong> suivie
      d'un contrôle visuel l'année suivante suffit généralement.</p>
      <p>Pour un site étendu — parc d'activités, camping, campus — un <strong>suivi annuel</strong> est plus
      pertinent : inventaire actualisé, passages aux deux fenêtres utiles (automne pour le pin, printemps
      pour le chêne) et budget lissé. C'est aussi ce qui permet de réduire progressivement le périmètre
      traité, plutôt que de repartir de zéro chaque année.
      Voir <a href="/traitement-preventif/">traitement préventif</a>.</p>` }
  ],
  faq: [
    { q: "Pouvez-vous intervenir en dehors des heures d'ouverture ?",
      a: `<p>Oui, c'est même souvent préférable sur un site actif. Les créneaux tôt le matin, en soirée ou le
      week-end sont à caler lors de la visite préalable, sous réserve des conditions météo compatibles avec
      l'opération.</p>` },
    { q: "Faut-il informer les salariés ?",
      a: `<p>C'est indispensable, au minimum par affichage : périmètre, dates, consignes. Les équipes qui
      travaillent à l'extérieur doivent en outre savoir quels arbres sont concernés avant toute opération de
      tonte, de taille ou de soufflage.</p>` },
    { q: "Notre prestataire d'espaces verts peut-il s'en charger ?",
      a: `<p>Certains le font, d'autres non : le retrait de nids urticants demande un équipement de
      protection spécifique et une filière d'élimination adaptée. Nous travaillons régulièrement en
      complément d'un prestataire d'entretien, sur la seule partie processionnaires.</p>` },
    { q: "Comment gérer un arbre situé en limite de site ?",
      a: `<p>Si l'arbre appartient au voisin ou au domaine public, l'intervention suppose son accord ou
      celui du gestionnaire. Nous documentons la situation dans le rapport pour permettre à l'exploitant
      d'engager la démarche.</p>` },
    { q: "Une intervention peut-elle être programmée en urgence ?",
      a: `<p>Les situations d'exposition directe — procession sur un cheminement, nid au-dessus d'une aire
      de pause — sont traitées en priorité. Entre le signalement et l'intervention, le balisage de la zone
      supprime déjà l'essentiel du risque.</p>` }
  ],
  cta: {
    title: "Faire le point sur les arbres de votre site",
    text: `Une visite d'inventaire permet d'identifier les arbres concernés, les zones d'usage exposées et les
    créneaux d'intervention compatibles avec votre exploitation.`,
    primary: 'Demander une visite de site'
  },
  related: [
    { url: '/espaces-verts/', label: 'Espaces verts', hint: 'Protection des équipes de terrain' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Patrimoine arboré public' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Suivi annuel et budget lissé' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: 'Confinement et élimination' },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers', hint: 'Le risque à documenter' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Les huit départements franciliens' }
  ]
});
