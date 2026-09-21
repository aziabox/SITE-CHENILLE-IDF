import { standardPage } from '../../lib/layout.mjs';
import { safety, note } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenilles-processionnaires-chat/',
  title: 'Chenilles processionnaires et chat : risques et réflexes',
  description: "Le chat est moins touché que le chien, mais pas à l'abri : voies d'exposition, signes à repérer et précautions pour un chat qui sort.",
  h1: 'Chenilles processionnaires et chats',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Prévention', url: '/traitement-preventif/' },
          { name: 'Chats', url: '/chenilles-processionnaires-chat/' }],
  datePublished: '2026-02-24',
  dateModified: '2026-09-14',
  lead: `Le chat est nettement moins concerné que le chien, et la raison tient à son comportement plus qu'à
  sa physiologie. Cela ne signifie pas qu'il soit à l'abri — simplement que les voies d'exposition ne sont
  pas les mêmes.`,
  answer: `<p>Les chats sont <strong>moins fréquemment touchés</strong> que les chiens : ils flairent moins
  au ras du sol et manipulent leurs proies avec la patte plutôt qu'avec la gueule. Les atteintes possibles
  concernent surtout la <strong>bouche, les coussinets et les yeux</strong>, ainsi que la peau lors du
  toilettage. Tout contact suspect justifie un appel au vétérinaire, sans automédication ni rinçage forcé
  qui stresserait l'animal.</p>`,
  sections: [
    { h2: 'Pourquoi le chat est moins exposé',
      html: `
      <p>Trois différences de comportement expliquent l'écart avec le chien. Le chat chasse à vue plutôt
      qu'au flair, il garde le museau plus haut, et il teste un objet inconnu avec la patte avant d'y mettre
      la gueule. Une file de chenilles en mouvement l'intéresse rarement assez pour qu'il y plonge le nez.</p>
      <p>Ajoutons qu'un chat évite spontanément ce qui pique : une première touche de patte suffit souvent à
      le faire renoncer. C'est précisément cette prudence qui le protège — et qui déplace le risque vers les
      coussinets et, par le toilettage, vers la bouche.</p>` },

    { h2: 'Les voies d\'exposition réelles',
      tocLabel: 'Comment il peut être touché',
      html: `
      <ul class="plain">
        <li><strong>Les coussinets</strong> — en marchant sur une zone où une procession est passée, ou en tapotant une chenille.</li>
        <li><strong>Le toilettage</strong> — le chat lèche ses pattes et transfère les poils vers la langue et les babines. C'est la voie la plus insidieuse, car différée de plusieurs minutes.</li>
        <li><strong>Les yeux</strong> — en se frottant la face avec une patte contaminée.</li>
        <li><strong>La peau</strong> — en se couchant au pied d'un arbre infesté ou sur un sol chargé de poils.</li>
        <li><strong>Les voies respiratoires</strong> — plus rarement, en environnement très chargé.</li>
      </ul>
      ${note(`<p>Le décalage entre le contact et les symptômes rend le diagnostic plus difficile : le
      propriétaire n'a souvent rien vu. Un chat qui bave, se frotte la face avec insistance ou refuse de
      manger au printemps, alors que des pins ou des chênes infestés sont présents à proximité, mérite qu'on
      évoque cette piste auprès du vétérinaire.</p>`, 'Un diagnostic souvent tardif')}` },

    { h2: 'Les signes à repérer',
      html: `
      <ul class="plain">
        <li>Salivation excessive, bave, déglutitions répétées.</li>
        <li>Frottements de la face contre le sol ou les meubles.</li>
        <li>Léchage insistant d'une patte, boiterie, refus de poser un membre.</li>
        <li>Gonflement des babines ou de la langue, rougeur de la muqueuse buccale.</li>
        <li>Œil fermé, larmoiement, clignements répétés.</li>
        <li>Refus de s'alimenter, abattement, isolement inhabituel.</li>
      </ul>
      ${safety(`<p>Contactez un vétérinaire dès qu'un de ces signes apparaît chez un chat ayant accès à
      l'extérieur, en particulier en période de processions ou à proximité d'arbres infestés. N'administrez
      aucun médicament humain et ne tentez pas de rincer de force la gueule d'un chat qui se débat : le
      stress et le risque de morsure compliquent la situation sans bénéfice.</p>
      <p>Ces informations sont générales et ne remplacent pas l'examen d'un vétérinaire.</p>`,
      'Quand appeler le vétérinaire')}` },

    { h2: 'Ce qu\'il est utile de faire',
      html: `
      <ol>
        <li><strong>Empêcher l'accès à la zone</strong> — rentrer le chat si c'est possible, au moins pendant la période à risque.</li>
        <li><strong>Ne pas frotter</strong> la zone touchée, que ce soit la patte, la face ou le pelage.</li>
        <li><strong>Rincer à l'eau claire</strong> uniquement si l'animal se laisse faire sans contrainte.</li>
        <li><strong>Noter l'heure et le lieu du contact supposé</strong> — cette information oriente le vétérinaire.</li>
        <li><strong>Traiter la source</strong> — tant que le nid est en place, le risque de récidive reste entier.</li>
      </ol>` },

    { h2: 'Prévenir pour un chat qui sort',
      html: `
      <p>Un chat qui a accès à l'extérieur ne se gère pas comme un chien : on ne peut ni le tenir en laisse,
      ni contrôler son parcours. La prévention porte donc entièrement sur l'environnement.</p>
      <ul class="plain">
        <li><strong>Faire retirer les nids</strong> présents sur la parcelle avant la saison de descente — voir <a href="/echenillage/">échenillage</a>.</li>
        <li><strong>Limiter les zones de repos sous les arbres à risque</strong> : déplacer coussins, paniers d'extérieur et gamelles.</li>
        <li><strong>Surveiller les endroits chauds et abrités</strong> au pied des pins, que les chats affectionnent et où les chenilles cherchent à s'enfouir.</li>
        <li><strong>Rentrer le chat pendant une intervention</strong> et jusqu'à la fin de la retombée des poils.</li>
      </ul>
      <p>Si vous avez aussi un chien, c'est lui qui déterminera le niveau d'urgence : voir
      <a href="/chenilles-processionnaires-chien/">chenilles processionnaires et chiens</a>.</p>` }
  ],
  faq: [
    { q: "Un chat peut-il mourir d'un contact avec une chenille processionnaire ?",
      a: `<p>Les cas graves sont rares chez le chat, bien plus rares que chez le chien. Des atteintes
      buccales ou oculaires sérieuses restent possibles, ce qui justifie un avis vétérinaire rapide plutôt
      qu'une surveillance à domicile.</p>` },
    { q: "Mon chat a marché sous un pin infesté, faut-il le laver ?",
      a: `<p>S'il est calme et accepte l'eau, un rinçage doux des pattes à l'eau claire est utile. S'il se
      débat, mieux vaut ne pas insister et surveiller l'apparition de signes, en appelant le vétérinaire en
      cas de doute.</p>` },
    { q: "Les poils urticants restent-ils dans le pelage ?",
      a: `<p>Ils peuvent s'y accrocher, puis passer à la bouche lors du toilettage. C'est pourquoi un chat
      exposé doit être empêché de se toiletter dans l'immédiat si c'est possible, et présenté au
      vétérinaire.</p>` },
    { q: "Faut-il confiner son chat pendant les processions ?",
      a: `<p>C'est la mesure la plus simple si des nids sont présents sur la parcelle et que la descente a
      commencé. Ce n'est en général nécessaire que quelques semaines, et cela évite l'essentiel du risque.</p>` },
    { q: "Le chat peut-il rapporter des poils à la maison ?",
      a: `<p>Oui, dans son pelage, tout comme des vêtements rapportent des poils de l'extérieur. C'est un
      argument de plus pour traiter la source plutôt que de gérer les conséquences.</p>` }
  ],
  cta: {
    title: "Des arbres infestés et un chat qui sort : traiter la source",
    text: `On ne peut pas encadrer les déplacements d'un chat. La seule prévention efficace consiste à
    supprimer les nids présents sur la parcelle avant la période à risque.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: "L'animal le plus exposé" },
    { url: '/chenilles-processionnaires-danger/', label: 'Dangers en général', hint: 'Le mécanisme des poils' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Supprimer les nids de la parcelle' },
    { url: '/blog/animaux/proteger-animaux-domestiques/', label: 'Protéger ses animaux', hint: 'Chiens, chats, chevaux' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Sécuriser un jardin' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Empêcher une nouvelle installation' }
  ]
});
