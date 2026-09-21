import { site } from '../../lib/site.mjs';

const body = `
<div class="page-head prose">
  <h1>Votre demande a bien été envoyée</h1>
  <p class="lead">Nous revenons vers vous rapidement. Si la situation est urgente — procession en cours,
  nid au-dessus d'une zone fréquentée, contact déjà survenu — appelez directement.</p>
  <p><a class="btn btn--accent" href="${site.phoneHref}" data-cta="tel" data-cta-zone="merci">Appeler le ${site.phoneDisplay}</a></p>
</div>

<div class="section prose">
  <h2>En attendant notre retour</h2>
  <ul class="plain">
    <li><strong>Ne vous approchez pas du nid</strong> et ne tentez pas de le retirer.</li>
    <li><strong>Balisez la zone</strong> au pied de l'arbre et empêchez-en l'accès aux enfants et aux animaux.</li>
    <li><strong>Suspendez la tonte et le soufflage</strong> sous l'arbre et à proximité.</li>
    <li><strong>Rentrez</strong> le linge, les jouets et les coussins d'extérieur.</li>
  </ul>
  <p>Si une personne ou un animal a été en contact, consultez sans attendre un médecin ou un vétérinaire
  selon la situation : voir <a href="/chenilles-processionnaires-danger/">les dangers et la conduite à
  tenir</a>.</p>
  <p><a href="/">Retour à l'accueil</a></p>
</div>`;

export default {
  url: '/merci/',
  title: 'Demande envoyée — chenilles processionnaires Île-de-France',
  description: "Votre demande concernant les chenilles processionnaires a bien été envoyée.",
  h1: 'Votre demande a bien été envoyée',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Demande envoyée', url: '/merci/' }],
  noindex: true,
  excludeFromSitemap: true,
  body
};
