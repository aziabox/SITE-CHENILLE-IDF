import { site } from '../../lib/site.mjs';
import { esc } from '../../lib/render.mjs';

const body = `
<div class="error-page prose">
  <p class="error-page__code">404</p>
  <h1>Cette page n'existe pas</h1>
  <p class="lead">Le lien est peut-être ancien, ou l'adresse comporte une erreur. Voici les points d'entrée
  les plus utiles.</p>
  <p>
    <a class="btn btn--accent" href="${site.phoneHref}" data-cta="tel" data-cta-zone="404">Appeler un spécialiste — ${site.phoneDisplay}</a>
  </p>
</div>

<div class="prose">
  <ul class="cards cards--3" style="text-align:left">
    <li class="card">
      <h2 class="card__title"><a href="/chenilles-processionnaires/">Les deux espèces</a></h2>
      <p class="card__text">Processionnaire du pin et processionnaire du chêne : cycles, nids, différences.</p>
    </li>
    <li class="card">
      <h2 class="card__title"><a href="/identifier-nid-chenilles-processionnaires/">Identifier un nid</a></h2>
      <p class="card__text">Savoir s'il s'agit réellement d'un nid de processionnaires avant d'agir.</p>
    </li>
    <li class="card">
      <h2 class="card__title"><a href="/traitement-chenilles-processionnaires/">Traitements</a></h2>
      <p class="card__text">Échenillage, piégeage, traitement biologique : quelle méthode à quelle saison.</p>
    </li>
    <li class="card">
      <h2 class="card__title"><a href="/chenilles-processionnaires-danger/">Dangers</a></h2>
      <p class="card__text">Poils urticants, publics exposés, conduite à tenir après un contact.</p>
    </li>
    <li class="card">
      <h2 class="card__title"><a href="/departements/">Zones d'intervention</a></h2>
      <p class="card__text">Les huit départements franciliens et les communes couvertes.</p>
    </li>
    <li class="card">
      <h2 class="card__title"><a href="/blog/">Blog</a></h2>
      <p class="card__text">Guides d'identification, prévention, traitements et conseils pratiques.</p>
    </li>
  </ul>
  <p>Vous pouvez aussi consulter la <a href="/faq/">FAQ complète</a> ou nous
  <a href="/contact/">contacter directement</a>.</p>
</div>`;

export default {
  url: '/404/',
  title: 'Page introuvable (404)',
  description: "La page demandée n'existe pas. Retrouvez les informations sur les chenilles processionnaires : identification, traitement, prévention et zones d'intervention.",
  h1: "Cette page n'existe pas",
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Page introuvable', url: '/404/' }],
  noindex: true,
  excludeFromSitemap: true,
  body
};
