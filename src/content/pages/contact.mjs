import { standardPage } from '../../lib/layout.mjs';
import { site } from '../../lib/site.mjs';
import { note, safety, hasValue } from '../../lib/render.mjs';

const endpointReady = hasValue(site.formEndpoint);

const form = `
<form class="form" ${endpointReady ? `action="${site.formEndpoint}" method="post" enctype="multipart/form-data"`
  : 'action="#" method="post" aria-describedby="form-status"'} novalidate>
  <div class="field">
    <label for="nom">Nom <span aria-hidden="true">*</span></label>
    <input type="text" id="nom" name="nom" autocomplete="name" required>
  </div>
  <div class="field">
    <label for="tel">Téléphone <span aria-hidden="true">*</span></label>
    <input type="tel" id="tel" name="telephone" autocomplete="tel" inputmode="tel" required>
    <span class="hint">C'est le moyen le plus rapide pour revenir vers vous.</span>
  </div>
  <div class="field">
    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" autocomplete="email">
  </div>
  <div class="field">
    <label for="ville">Commune <span aria-hidden="true">*</span></label>
    <input type="text" id="ville" name="ville" autocomplete="address-level2" required>
    <span class="hint">Nous intervenons uniquement en Île-de-France.</span>
  </div>
  <div class="field">
    <label for="type">Type de situation</label>
    <select id="type" name="type">
      <option value="">— Choisir —</option>
      <option>Nid repéré sur un pin ou un cèdre</option>
      <option>Nid repéré sur un chêne</option>
      <option>Chenilles au sol / procession en cours</option>
      <option>Doute sur l'identification</option>
      <option>Contact avec une personne ou un animal</option>
      <option>Demande pour une copropriété</option>
      <option>Demande pour une entreprise ou une collectivité</option>
      <option>Traitement préventif / devis annuel</option>
    </select>
  </div>
  <div class="field">
    <label for="message">Décrivez la situation</label>
    <textarea id="message" name="message"
      placeholder="Essence de l'arbre si vous la connaissez, hauteur approximative du nid, ce qui se trouve en dessous (terrasse, pelouse, aire de jeux), depuis quand vous l'observez."></textarea>
  </div>
  <div class="field">
    <label for="photo">Photos (facultatif)</label>
    <input type="file" id="photo" name="photos" accept="image/*" multiple>
    <span class="hint">Idéalement trois vues : l'arbre entier, la zone suspecte au zoom, le pied de l'arbre.
    Photographiez toujours à distance, sans vous approcher du nid.</span>
  </div>
  <div class="field field--check">
    <input type="checkbox" id="consent" name="consentement" required>
    <label for="consent">J'accepte que ces informations soient utilisées pour traiter ma demande,
    conformément à la <a href="/politique-de-confidentialite/">politique de confidentialité</a>.</label>
  </div>
  <p>
    ${endpointReady
      ? `<button class="btn btn--accent" type="submit" data-cta="form-submit" data-cta-zone="contact">Envoyer ma demande</button>`
      : `<a class="btn btn--accent" href="${site.phoneHref}" data-cta="tel" data-cta-zone="contact">Appeler le ${site.phoneDisplay}</a>`}
  </p>
  ${endpointReady ? '' : `<p class="form__note" id="form-status"><strong>Envoi en ligne en cours de mise en
  service.</strong> Pour une demande immédiate, appelez le
  <a href="${site.phoneHref}" data-cta="tel" data-cta-zone="contact">${site.phoneDisplay}</a> — c'est de toute
  façon le canal le plus rapide, et il permet de décrire la situation en direct.</p>`}
</form>`;

export default standardPage({
  url: '/contact/',
  title: 'Contact et demande d\'intervention — chenilles processionnaires',
  description: "Faire identifier un nid, demander une intervention ou obtenir un devis contre les chenilles processionnaires en Île-de-France. Téléphone : 07 56 82 27 85.",
  h1: 'Nous contacter',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Contact', url: '/contact/' }],
  datePublished: '2026-06-02',
  dateModified: '2026-09-18',
  priority: '0.7',
  toc: false,
  lead: `Le téléphone reste le moyen le plus efficace : en quelques questions, nous identifions l'espèce
  probable, la fenêtre d'intervention utile et le degré d'urgence réel. Le formulaire est utile si vous
  préférez envoyer des photos et être rappelé.`,
  answer: `<p>Pour une demande immédiate, appelez le <strong>${site.phoneDisplay}</strong>
  (<a href="${site.phoneHref}" data-cta="tel" data-cta-zone="reponse">appel direct</a>), du lundi au samedi.
  Pour une identification à distance, envoyez trois photos : l'arbre entier, la zone suspecte au zoom et le
  pied de l'arbre, en précisant votre commune. Nous intervenons uniquement en
  <strong>Île-de-France</strong>.</p>`,
  sections: [
    { h2: 'Par téléphone',
      html: `
      <p style="font-family:Georgia,serif;font-size:1.6rem;margin:.5rem 0">
        <a href="${site.phoneHref}" data-cta="tel" data-cta-zone="contact-principal">${site.phoneDisplay}</a>
      </p>
      <p>${site.openingHours}. Si nous sommes sur un chantier, laissez un message avec votre commune et une
      description rapide : nous rappelons.</p>
      <p>Pour aller vite, préparez trois informations : <strong>l'essence de l'arbre</strong> (pin, cèdre,
      chêne, ou « je ne sais pas »), <strong>la hauteur approximative du nid</strong>, et
      <strong>ce qui se trouve en dessous</strong>.</p>` },

    { h2: 'Par formulaire, avec photos',
      html: `
      <p>Utile si vous préférez l'écrit, ou si l'identification est incertaine. Une photo règle la question
      dans la grande majorité des cas — y compris pour écarter une fausse alerte, ce qui vous évite une
      intervention inutile.</p>
      ${form}
      ${note(`<p><strong>Une identification à partir de photos n'est jamais présentée comme une
      certitude.</strong> Elle permet d'écarter les confusions évidentes — toile d'hyponomeute, gui, nid
      d'oiseau — et d'orienter la décision. La confirmation définitive se fait sur place.</p>`)}` },

    { h2: 'Si un contact a déjà eu lieu',
      html: `
      ${safety(`<p>Si une personne ou un animal a été en contact avec des chenilles ou des poils
      urticants, ne commencez pas par nous appeler.</p>
      <ul>
        <li><strong>Personne</strong> — ne pas frotter, retirer les vêtements avec précaution, rincer abondamment à l'eau, doucher. Consulter un médecin en cas d'atteinte des yeux, de gêne respiratoire, de gonflement du visage ou de réaction étendue. En cas de difficulté à respirer : 15 ou 112.</li>
        <li><strong>Animal</strong> — rincer la gueule à l'eau claire sans frotter et contacter immédiatement un vétérinaire ou une clinique d'urgence, sans attendre les symptômes.</li>
      </ul>
      <p>Notre intervention porte sur la suppression de la source. Elle vient après la prise en charge.</p>`,
      'Priorité à la prise en charge')}
      <p>Voir <a href="/chenilles-processionnaires-danger/">les dangers</a>,
      <a href="/chenilles-processionnaires-chien/">la conduite à tenir pour un chien</a> et
      <a href="/chenilles-processionnaires-enfant/">pour un enfant</a>.</p>` },

    { h2: 'Zone couverte',
      html: `
      <p>Nous intervenons sur les huit départements franciliens : Paris (75), Seine-et-Marne (77),
      Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et
      Val-d'Oise (95). <a href="/departements/">Voir le détail par département</a>.</p>
      <p>En dehors de cette zone, nous vous le dirons dès le premier échange. Nous pouvons néanmoins vous
      aider à identifier l'espèce et à savoir quelle fenêtre viser : cela ne coûte rien et évite quelques
      erreurs courantes.</p>` },

    { h2: 'Coordonnées',
      html: `
      <ul class="plain">
        <li><strong>Téléphone</strong> — <a href="${site.phoneHref}" data-cta="tel" data-cta-zone="coordonnees">${site.phoneDisplay}</a></li>
        <li><strong>Horaires</strong> — ${site.openingHours}</li>
        <li><strong>Zone d'intervention</strong> — Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)</li>
      </ul>
      ${note(`<p>Les mentions légales complètes — raison sociale, immatriculation, assurance — figurent sur
      la page <a href="/mentions-legales/">mentions légales</a>.</p>`)}` }
  ],
  cta: {
    title: "Une question rapide vaut mieux qu'un doute qui dure",
    text: `Identifier une espèce, savoir si une situation est urgente ou peut attendre la bonne saison :
    cela prend quelques minutes au téléphone et n'engage à rien.`,
    primary: 'Appeler un spécialiste',
    secondary: false
  },
  related: [
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Avant d\'appeler' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Méthodes et calendrier' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Vérifier que vous êtes couvert' },
    { url: '/faq/', label: 'FAQ complète', hint: 'Les questions les plus posées' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Déroulé pour un jardin' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Demande pour une résidence' }
  ]
});
