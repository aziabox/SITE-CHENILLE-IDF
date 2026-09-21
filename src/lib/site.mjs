/**
 * Configuration globale du site.
 *
 * REGLE : aucune donnee commerciale n'est inventee ici.
 * Tout ce qui n'est pas connu est marque par un placeholder explicite
 * (chaine commencant par "[A COMPLETER").
 * Les placeholders non renseignes ne sont PAS publies dans le HTML :
 * le rendu les ignore (voir lib/render.mjs -> hasValue()).
 */

export const PLACEHOLDER = '[A COMPLETER';

export const site = {
  // --- Identite --------------------------------------------------------
  name: 'Chenilles Processionnaires Île-de-France',
  shortName: 'Processionnaires IDF',

  // --- Identification legale (source : registre du commerce) -----------
  // Depuis 2022, la denomination d'un entrepreneur individuel doit etre
  // precedee ou suivie de « EI » (art. R.123-237-1 du code de commerce).
  legalName: 'Bilal ASSOUL — Entrepreneur individuel (EI)',
  legalForm: 'Entreprise individuelle',
  siren: '901 133 041',
  siret: '901 133 041 00011',
  rcs: '901 133 041 R.C.S. Nanterre',
  rcsGreffe: 'Nanterre',
  rcsDate: '7 juillet 2021',
  rneDate: '6 juillet 2021',
  ape: '81.29A — Désinfection, désinsectisation, dératisation',
  publicationDirector: 'Bilal ASSOUL',

  // Le numero de TVA est signale inactif au registre : il n'est donc pas
  // publie. A renseigner si l'entreprise devient assujettie a la TVA.
  vat: '[A COMPLETER : numero de TVA intracommunautaire, si assujetti]',
  certibiocide: '[A COMPLETER : numero d agrement Certibiocide]',
  insurance: '[A COMPLETER : assureur + numero de police RC professionnelle]',
  mediateur: '[A COMPLETER : mediateur de la consommation — nom, adresse, site]',

  address: {
    street: '1 rue Albert Simonin',
    postalCode: '92400',
    city: 'Courbevoie',
    region: 'Île-de-France',
    country: 'FR'
  },

  // Diffusion des informations d'identification en dehors des pages legales.
  //
  //   false -> ni la denomination legale, ni l'adresse du siege n'apparaissent
  //            sur les pages courantes : ni dans le pied de page, ni dans les
  //            donnees structurees. Elles restent publiees sur les mentions
  //            legales et la politique de confidentialite, ou elles sont
  //            juridiquement obligatoires.
  //
  //   true  -> denomination et adresse diffusees partout. Meilleur pour le
  //            referencement local (NAP coherent, fiche LocalBusiness), mais
  //            expose l'adresse du siege sur chaque page.
  publishIdentity: false,

  // --- Hebergement du site ---------------------------------------------
  host: {
    name: 'Hostinger International Ltd',
    address: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
    url: 'https://www.hostinger.fr'
  },
  // URL canonique de production. A changer au moment de la mise en ligne.
  origin: 'https://www.chenilles-processionnaires-idf.fr',

  // --- Contact ---------------------------------------------------------
  phoneDisplay: '07 56 82 27 85',
  phoneHref: 'tel:+33756822785',
  phoneE164: '+33756822785',
  email: '[A COMPLETER : adresse e-mail de contact]',
  // Profil Google Business : ne rien publier tant que la fiche n'existe pas.
  googleBusinessUrl: '[A COMPLETER : URL de la fiche etablissement Google]',
  openingHours: 'Lu-Sa 08:00-19:00',
  // Point de reception du formulaire de contact. Tant qu'il n'est pas
  // renseigne, le formulaire est affiche mais desactive, avec un renvoi
  // explicite vers le telephone (voir content/pages/contact.mjs).
  formEndpoint: '[A COMPLETER : URL de traitement du formulaire]',
  openingHoursSchema: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], open: '08:00', close: '19:00' }
  ],

  // --- Analytics -------------------------------------------------------
  // Laisser vide tant que le conteneur n'est pas cree : aucun script n'est
  // alors injecte (voir render.mjs). Format attendu : 'GTM-XXXXXXX'.
  gtmId: '',

  lang: 'fr',
  locale: 'fr_FR',
  themeColor: '#1B3A2B',
  editorial: {
    // Signature affichee en tete des articles du blog. Volontairement vide :
    // les articles ont ete rediges pour le site, les signer d'un nom serait
    // une attribution inexacte. Renseigner ce champ fait apparaitre
    // « Par <nom>, <role> » et injecte l'auteur en donnees structurees.
    author: '[A COMPLETER : signataire des articles, si souhaite]',
    role: 'Responsable technique'
  }
};

/** Zone d'intervention reelle : Ile-de-France (8 departements). */
export const serviceArea = [
  { code: '75', slug: '75-paris', name: 'Paris' },
  { code: '77', slug: '77-seine-et-marne', name: 'Seine-et-Marne' },
  { code: '78', slug: '78-yvelines', name: 'Yvelines' },
  { code: '91', slug: '91-essonne', name: 'Essonne' },
  { code: '92', slug: '92-hauts-de-seine', name: 'Hauts-de-Seine' },
  { code: '93', slug: '93-seine-saint-denis', name: 'Seine-Saint-Denis' },
  { code: '94', slug: '94-val-de-marne', name: 'Val-de-Marne' },
  { code: '95', slug: '95-val-d-oise', name: "Val-d'Oise" }
];

/** Navigation principale (desktop + menu mobile). */
export const nav = [
  { label: 'Les espèces', url: '/chenilles-processionnaires/', children: [
    { label: 'Processionnaire du pin', url: '/chenille-processionnaire-du-pin/' },
    { label: 'Processionnaire du chêne', url: '/chenille-processionnaire-du-chene/' },
    { label: 'Identifier une chenille', url: '/identifier-chenilles-processionnaires/' },
    { label: 'Identifier un nid', url: '/identifier-nid-chenilles-processionnaires/' }
  ]},
  { label: 'Traitement', url: '/traitement-chenilles-processionnaires/', children: [
    { label: 'Destruction de nid', url: '/destruction-nid-chenilles-processionnaires/' },
    { label: 'Échenillage', url: '/echenillage/' },
    { label: 'Piégeage', url: '/piegeage-chenilles-processionnaires/' },
    { label: 'Traitement du pin', url: '/traitement-processionnaire-du-pin/' },
    { label: 'Traitement du chêne', url: '/traitement-processionnaire-du-chene/' }
  ]},
  { label: 'Prévention', url: '/traitement-preventif/', children: [
    { label: 'Traitement préventif', url: '/traitement-preventif/' },
    { label: 'Traitement curatif', url: '/traitement-curatif/' },
    { label: 'Dangers', url: '/chenilles-processionnaires-danger/' },
    { label: 'Chiens', url: '/chenilles-processionnaires-chien/' },
    { label: 'Chats', url: '/chenilles-processionnaires-chat/' },
    { label: 'Enfants', url: '/chenilles-processionnaires-enfant/' }
  ]},
  { label: 'Qui nous appelle', url: '/particuliers/', children: [
    { label: 'Particuliers', url: '/particuliers/' },
    { label: 'Copropriétés', url: '/coproprietes/' },
    { label: 'Entreprises', url: '/entreprises/' },
    { label: 'Collectivités', url: '/collectivites/' },
    { label: 'Écoles et crèches', url: '/ecoles/' },
    { label: 'Espaces verts', url: '/espaces-verts/' }
  ]},
  { label: "Zones d'intervention", url: '/departements/' },
  { label: 'Blog', url: '/blog/' }
];

/** Catégories du blog. */
export const blogCategories = [
  { slug: 'identifier', name: 'Identifier',
    title: "Identifier une chenille ou un nid de processionnaires",
    description: "Reconnaître une chenille processionnaire, un nid, une procession ou un arbre infesté : nos guides d'identification.",
    intro: `<p>Avant toute décision, il faut savoir de quoi il s'agit. Une part importante des signalements
      que nous recevons concerne en réalité des espèces inoffensives — toiles d'hyponomeutes, gui, nids
      d'oiseaux — qu'il serait dommage de détruire. Les articles de cette rubrique donnent les critères qui
      permettent de trancher depuis le sol, sans s'approcher ni rien manipuler.</p>
      <p>Trois questions reviennent : quelle chenille, quel nid, et laquelle des deux espèces. La réponse à
      la troisième détermine tout le reste, puisque le pin et le chêne suivent des calendriers opposés.</p>` },

  { slug: 'danger', name: 'Dangers',
    title: "Dangers : ce que provoquent les poils urticants",
    description: "Ce que provoquent les poils urticants, qui est exposé, et les réflexes à avoir en cas de contact.",
    intro: `<p>Le danger ne vient ni d'une piqûre ni d'une morsure, mais de poils urticants microscopiques
      qui se détachent par milliers et voyagent avec l'air. C'est ce qui explique qu'une exposition soit
      possible sans aucun contact avec l'insecte, et que le risque persiste des mois après le départ des
      chenilles.</p>
      <p>Les articles ci-dessous décrivent les mécanismes, les publics les plus exposés et la conduite à
      tenir. Ces informations sont générales : en cas d'exposition, un médecin ou un vétérinaire reste le
      seul interlocuteur compétent.</p>` },

  { slug: 'traitement', name: 'Traitement',
    title: "Méthodes de traitement expliquées, une par une",
    description: "Échenillage, piégeage, destruction de nid, traitement biologique : comment fonctionne chaque méthode.",
    intro: `<p>Quatre méthodes professionnelles existent, et aucune n'est bonne en toutes saisons. Le choix
      dépend de l'espèce, du stade des chenilles, de la hauteur de l'arbre et de l'usage réel du lieu. Les
      articles de cette rubrique expliquent le fonctionnement concret de chacune, avec ce qu'elle règle et
      ce qu'elle ne règle pas.</p>
      <p>Une idée revient dans tous ces textes : l'essentiel se joue sur la date. Une intervention bien
      calée coûte moins cher, dure moins longtemps et protège mieux que la même opération trois mois plus
      tard.</p>` },

  { slug: 'prevention', name: 'Prévention',
    title: "Prévenir une infestation de processionnaires",
    description: "Anticiper une infestation, protéger un jardin, éviter le retour des processionnaires d'une année sur l'autre.",
    intro: `<p>Prévenir coûte moins cher que traiter, et perturbe nettement moins l'usage d'un jardin ou
      d'un espace public. Encore faut-il savoir sur quoi agir : les mesures utiles sont peu nombreuses, et
      leur efficacité varie fortement.</p>
      <p>Ces articles détaillent ce qui fonctionne réellement — biocontrôle sur jeunes larves, piégeage,
      surveillance annuelle, aménagements favorables aux prédateurs — et ce qui relève surtout de l'idée
      reçue.</p>` },

  { slug: 'animaux', name: 'Animaux',
    title: "Chenilles processionnaires et animaux domestiques",
    description: "Chiens, chats, chevaux : risques réels, signes d'alerte et conduite à tenir en cas de contact.",
    intro: `<p>Le chien est de loin l'animal le plus touché, parce qu'il explore au ras du sol avec la
      truffe et la gueule, exactement là où passe la procession. Le chat s'expose autrement, par les
      coussinets et le toilettage ; le cheval en pâturant sous un arbre infesté.</p>
      <p>Les articles ci-dessous expliquent ces différences et la marche à suivre en cas de contact. Ils ne
      remplacent pas l'examen d'un vétérinaire, seul habilité à poser un diagnostic.</p>` },

  { slug: 'arbres', name: 'Arbres',
    title: "Arbres infestés : repérage et conséquences",
    description: "Pins, chênes, impact sur la santé des arbres et surveillance du patrimoine arboré.",
    intro: `<p>Deux questions reviennent dès qu'un arbre est concerné : comment savoir s'il est infesté, et
      qu'est-ce que cela lui fait. La première se règle par une inspection méthodique depuis le sol. La
      seconde appelle une réponse nuancée : la défoliation affaiblit sans tuer, sauf cumul avec d'autres
      facteurs.</p>
      <p>Ces articles s'adressent autant aux propriétaires qu'aux gestionnaires de patrimoine arboré.</p>` },

  { slug: 'conseils', name: 'Conseils',
    title: "Conseils pratiques face à un nid de processionnaires",
    description: "Organiser une intervention, éviter les erreurs courantes, savoir quand appeler un professionnel.",
    intro: `<p>Un nid découvert donne envie d'agir tout de suite. C'est précisément le moment où l'on commet
      les gestes qui transforment un problème localisé en contamination de toute la parcelle — et la
      majorité des expositions sérieuses que l'on nous rapporte fait suite à une tentative de retrait
      personnelle.</p>
      <p>Cette rubrique rassemble ce qu'il faut faire, ce qu'il ne faut surtout pas faire, et comment
      organiser une intervention pour qu'elle se passe bien.</p>` }
];
