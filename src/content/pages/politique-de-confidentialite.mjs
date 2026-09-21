import { standardPage } from '../../lib/layout.mjs';
import { site } from '../../lib/site.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/politique-de-confidentialite/',
  title: 'Politique de confidentialité — données et cookies',
  description: "Traitement des données transmises via le formulaire de contact, durée de conservation, destinataires, droits des personnes et politique de cookies.",
  h1: 'Politique de confidentialité',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Politique de confidentialité', url: '/politique-de-confidentialite/' }],
  datePublished: '2026-06-06',
  dateModified: '2026-09-18',
  priority: '0.2',
  toc: false,
  lead: `Cette page décrit les données que nous collectons, pourquoi, combien de temps nous les conservons
  et comment exercer vos droits.`,
  sections: [
    { h2: "Données collectées",
      html: `
      <p>Le site ne collecte aucune donnée à votre insu. Les seules informations recueillies sont celles que
      vous transmettez volontairement via le formulaire de contact, ou lors d'un échange téléphonique.</p>
      ${table(
        ['Donnée', 'Finalité', 'Caractère'],
        [
          ['Nom', 'Identifier votre demande et vous répondre', 'Obligatoire'],
          ['Téléphone', 'Vous rappeler et organiser une intervention', 'Obligatoire'],
          ['Adresse e-mail', 'Vous adresser un devis ou un compte rendu', 'Facultatif'],
          ['Commune', "Vérifier que la demande relève de notre zone d'intervention", 'Obligatoire'],
          ['Description de la situation', 'Préparer le diagnostic', 'Facultatif'],
          ['Photographies', "Identifier l'espèce à distance et évaluer l'accès", 'Facultatif']
        ],
        'Données traitées via le formulaire de contact')}
      <p>Aucune donnée sensible au sens du RGPD n'est demandée. Merci de ne pas transmettre d'informations
      de santé dans le formulaire : en cas d'exposition, adressez-vous directement à un professionnel de
      santé ou à un vétérinaire.</p>` },

    { h2: "Base légale et finalité",
      html: `
      <p>Le traitement repose sur l'exécution de mesures précontractuelles prises à votre demande
      (article 6.1.b du RGPD) : répondre à une demande d'information, établir un devis, organiser une
      intervention.</p>
      <p>Les données ne sont utilisées à aucune autre fin. Elles ne font l'objet d'aucune prospection
      commerciale non sollicitée, d'aucun profilage et d'aucune décision automatisée.</p>` },

    { h2: "Destinataires",
      html: `
      <p>Les données sont destinées exclusivement aux personnes chargées du traitement des demandes et de
      la réalisation des interventions. Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des
      fins commerciales.</p>
      <p>Des prestataires techniques peuvent y avoir accès dans la stricte mesure nécessaire à leur mission
      — hébergement du site, acheminement des messages. Ils agissent sur instruction et sont soumis à une
      obligation de confidentialité.</p>` },

    { h2: "Durée de conservation",
      html: `
      <ul class="plain">
        <li><strong>Demande sans suite</strong> — conservation limitée au temps nécessaire au traitement de la demande, puis suppression.</li>
        <li><strong>Devis établi sans intervention</strong> — conservation le temps de la validité du devis et du suivi commercial raisonnable.</li>
        <li><strong>Intervention réalisée</strong> — conservation pendant la durée légale applicable aux documents contractuels et comptables.</li>
        <li><strong>Photographies transmises</strong> — supprimées après traitement de la demande, sauf accord explicite de votre part pour une conservation à des fins de suivi du site concerné.</li>
      </ul>` },

    { h2: "Vos droits",
      html: `
      <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de
      rectification, d'effacement, de limitation et d'opposition, ainsi que du droit à la portabilité de vos
      données.</p>
      <p>Pour les exercer, contactez-nous au <a href="${site.phoneHref}">${site.phoneDisplay}</a> ou via le
      <a href="/contact/">formulaire de contact</a>, en indiquant votre demande. Vous pouvez également
      introduire une réclamation auprès de la CNIL (<span>www.cnil.fr</span>).</p>
      ${note(`<p>L'adresse électronique dédiée à l'exercice de ces droits sera précisée dans les
      <a href="/mentions-legales/">mentions légales</a> lors de la mise en ligne définitive.</p>`)}` },

    { h2: "Cookies et mesure d'audience",
      html: `
      <p>Ce site est un site statique. Il ne dépose <strong>aucun cookie publicitaire</strong>, n'utilise
      aucun traceur tiers de réseau social et ne pratique aucun suivi entre sites.</p>
      <p>Aucun outil de mesure d'audience n'est actif en l'état actuel du site. Si un outil de mesure était
      ajouté par la suite, il le serait dans une configuration respectueuse de la vie privée, et cette page
      serait mise à jour en conséquence. Le cas échéant, un mécanisme de recueil du consentement serait mis
      en place préalablement au dépôt de tout traceur non strictement nécessaire.</p>
      <p>Les scripts d'interface du site — menu mobile, dépliage des questions — ne stockent aucune donnée
      et ne transmettent rien à l'extérieur.</p>` },

    { h2: "Sécurité",
      html: `
      <p>Le site est servi en HTTPS. Les données transmises via le formulaire circulent de manière
      chiffrée. Les mesures techniques et organisationnelles adaptées sont mises en œuvre pour limiter
      l'accès aux seules personnes habilitées.</p>` },

    { h2: "Modification de cette politique",
      html: `
      <p>Cette politique peut être mise à jour pour tenir compte d'évolutions techniques ou réglementaires.
      La date de dernière mise à jour figure en haut de cette page.</p>` }
  ],
  cta: null,
  related: [
    { url: '/mentions-legales/', label: 'Mentions légales', hint: 'Éditeur et hébergeur' },
    { url: '/contact/', label: 'Contact', hint: 'Exercer vos droits' }
  ]
});
