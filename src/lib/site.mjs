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
  // Raison sociale / SIREN / adresse : a renseigner par l'exploitant du site.
  legalName: '[A COMPLETER : raison sociale exacte]',
  siret: '[A COMPLETER : numero SIRET]',
  rcs: '[A COMPLETER : ville + numero RCS]',
  certibiocide: '[A COMPLETER : numero d agrement Certibiocide]',
  insurance: '[A COMPLETER : assureur + numero de police RC professionnelle]',
  address: {
    street: '[A COMPLETER : adresse postale]',
    postalCode: '[A COMPLETER]',
    city: '[A COMPLETER]',
    region: 'Île-de-France',
    country: 'FR'
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
    // Responsable editorial : a renseigner par l'exploitant.
    // Tant que ce champ est un placeholder, aucune signature d'auteur
    // n'est affichee ni injectee en donnees structurees.
    author: '[A COMPLETER : nom du responsable editorial]',
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
    title: 'Identifier une chenille ou un nid de processionnaires',
    description: "Reconnaître une chenille processionnaire, un nid, une procession ou un arbre infesté : nos guides d'identification." },
  { slug: 'danger', name: 'Dangers',
    title: 'Dangers des chenilles processionnaires',
    description: "Ce que provoquent les poils urticants, qui est exposé, et les réflexes à avoir en cas de contact." },
  { slug: 'traitement', name: 'Traitement',
    title: 'Traitement des chenilles processionnaires',
    description: "Échenillage, piégeage, destruction de nid, traitement biologique : comment fonctionne chaque méthode." },
  { slug: 'prevention', name: 'Prévention',
    title: 'Prévenir les chenilles processionnaires',
    description: "Anticiper une infestation, protéger un jardin, éviter le retour des processionnaires d'une année sur l'autre." },
  { slug: 'animaux', name: 'Animaux',
    title: 'Chenilles processionnaires et animaux',
    description: "Chiens, chats, chevaux : risques réels, signes d'alerte et conduite à tenir en cas de contact." },
  { slug: 'arbres', name: 'Arbres',
    title: 'Arbres et chenilles processionnaires',
    description: "Pins, chênes, impact sur la santé des arbres et surveillance du patrimoine arboré." },
  { slug: 'conseils', name: 'Conseils',
    title: 'Conseils pratiques',
    description: "Organiser une intervention, éviter les erreurs courantes, savoir quand appeler un professionnel." }
];
