import { steps, table, note, safety } from '../../../lib/render.mjs';

export default {
  slug: 'chenilles-processionnaires-copropriete',
  category: 'conseils',
  title: 'Nid de processionnaires en résidence : le guide du copropriétaire',
  description: "Vous êtes résident ou copropriétaire et un arbre commun porte un nid : à qui écrire, ce que vous pouvez faire vous-même, et comment faire avancer le dossier.",
  h1: 'Un nid dans ma résidence : que puis-je faire en tant que résident ?',
  excerpt: "Vous n'êtes ni le propriétaire de l'arbre ni le décideur. Vous disposez pourtant de trois leviers réels, et le premier est utilisable dans l'heure.",
  datePublished: '2026-08-06',
  dateModified: '2026-09-20',
  lead: `Cet article s'adresse à ceux qui constatent le problème sans avoir le pouvoir d'y remédier :
  locataires, copropriétaires, parents d'enfants qui jouent dans la résidence. Le rôle du syndic est traité
  sur une autre page ; ici, on parle de ce que vous, vous pouvez faire.`,
  answerLabel: 'En trois points',
  answer: `<p><strong>1.</strong> Vous pouvez agir immédiatement sur l'exposition : baliser, signaler aux
  voisins, éloigner les enfants et les animaux. <strong>2.</strong> Vous ne pouvez pas faire intervenir
  vous-même sur un arbre de partie commune : le donneur d'ordre est le <strong>syndic</strong>.
  <strong>3.</strong> Un signalement <strong>écrit, daté et documenté</strong> est ce qui fait avancer le
  dossier le plus vite — bien plus qu'un appel.</p>`,
  sections: [
    { h2: "Ce que vous pouvez faire dans l'heure",
      html: `
      <p>Aucune de ces mesures ne demande d'autorisation, aucune ne coûte quoi que ce soit, et ensemble
      elles suppriment l'essentiel du risque en attendant la décision.</p>
      <ul class="plain">
        <li><strong>Baliser le pied de l'arbre.</strong> Un ruban, deux chaises de jardin, un carton : n'importe quel obstacle visible vaut mieux que rien.</li>
        <li><strong>Prévenir les voisins immédiats</strong>, en particulier ceux qui ont des enfants ou un chien.</li>
        <li><strong>Déplacer ce qui se trouve dessous</strong> si c'est à votre portée : vélo d'enfant, table, bac à sable, gamelle.</li>
        <li><strong>Prévenir le gardien</strong> s'il y en a un : c'est souvent lui qui déclenche le plus vite la chaîne.</li>
        <li><strong>Alerter l'entreprise d'entretien</strong> si vous la croisez : la tonte et le soufflage sous un arbre porteur exposent directement ses agents.</li>
      </ul>
      ${safety(`<p>Ne tentez pas de retirer le nid, même s'il est à portée de main — surtout s'il est à
      portée de main. Un nid de chêne à hauteur d'homme est extrêmement chargé en poils urticants, et le
      décrochage expose directement le visage. Vous engageriez par ailleurs votre responsabilité sur une
      partie commune.</p>`, 'Ce que vous ne devez pas faire')}` },

    { h2: "À qui écrire, et quoi écrire",
      html: `
      <p>Le signalement oral se perd. L'écrit date la connaissance du problème, ce qui change tout si la
      situation traîne ou si quelqu'un est exposé ensuite.</p>
      ${table(
        ['Destinataire', 'Quand', 'Pourquoi'],
        [
          ['Gardien ou employé d\'immeuble', 'Immédiatement', 'Voie la plus rapide, connaissance du terrain'],
          ['Syndic, par courriel', 'Le jour même', "Il est le donneur d'ordre sur les parties communes"],
          ['Conseil syndical', 'En copie', 'Relais interne le plus efficace pour faire avancer un dossier'],
          ['Bailleur (si vous êtes locataire)', 'Le jour même', "C'est lui qui engage l'intervention sur les extérieurs"],
          ['Syndic, en recommandé', 'Si rien ne bouge sous 15 jours', 'Trace formelle en cas de litige ultérieur']
        ],
        'Dans cet ordre, et par écrit')}
      <p>Un courriel utile tient en six lignes : ce que vous avez constaté, <strong>où exactement</strong>
      (bâtiment, allée, arbre), <strong>depuis quand</strong>, ce qui se trouve en dessous (aire de jeux,
      cheminement, parking), la mesure conservatoire que vous avez prise, et une demande explicite de
      traitement. Joignez une photo prise à distance.</p>
      ${note(`<p>Précisez toujours <strong>l'essence de l'arbre</strong> si vous la connaissez, ou joignez
      une photo d'une branche. Pin, cèdre ou chêne : c'est ce qui détermine la saison d'intervention, et un
      syndic qui transmet cette information obtient un devis plus vite.</p>`, 'Le détail qui accélère')}` },

    { h2: "Ce qui se passe ensuite, et en combien de temps",
      html: `
      ${steps([
        { title: 'Jour 0 — signalement', body: `<p>Votre courriel arrive. Le syndic ou le bailleur demande en
          général une photo et la localisation précise avant toute démarche.</p>` },
        { title: 'Jours 1 à 10 — devis', body: `<p>Une ou plusieurs entreprises sont consultées. Sur un cas simple
          et bien documenté, le chiffrage peut se faire sur photos, sans visite préalable.</p>` },
        { title: 'Décision', body: `<p>Sur le budget d'entretien courant, elle peut être prise rapidement. Pour un
          montant significatif ou un plan pluriannuel, une résolution d'assemblée générale est la voie
          normale — et là, le délai se compte en mois.</p>` },
        { title: 'Intervention', body: `<p>Affichage préalable dans les halls, balisage, chantier de quelques heures
          à une journée selon le nombre d'arbres.</p>` },
        { title: 'Après', body: `<p>Un second affichage indique à partir de quand les zones redeviennent
          utilisables. Ne tondez pas et ne faites pas jouer les enfants sous l'arbre avant ce délai.</p>` }
      ])}
      <p>Le point de blocage le plus fréquent n'est pas le coût : c'est le décalage entre le moment où le
      problème devient visible — souvent en pleine saison — et le calendrier des assemblées générales.</p>` },

    { h2: "Quand l'urgence change la donne",
      html: `
      <p>Toutes les situations ne relèvent pas du même délai, et il est utile de le dire clairement dans
      votre signalement.</p>
      <ul class="plain">
        <li><strong>Nid au-dessus d'une aire de jeux</strong> — la zone est inutilisable tant qu'il est là. C'est une question de sécurité des occupants, pas de confort.</li>
        <li><strong>Procession en cours sur un cheminement</strong> — exposition directe possible dans l'heure, en particulier pour les chiens.</li>
        <li><strong>Contact déjà survenu</strong> — une personne ou un animal a réagi : mentionnez-le, cela change la qualification de la situation.</li>
        <li><strong>Nid à hauteur d'homme sur un tronc</strong> — à portée de n'importe quelle main curieuse.</li>
      </ul>
      <p>Dans ces cas, un syndic peut généralement engager l'intervention sans attendre l'assemblée
      suivante, au titre de la conservation de l'immeuble et de la sécurité. L'appréciation lui revient,
      mais un signalement qui documente précisément l'exposition lui facilite la décision.</p>` },

    { h2: "Si rien ne bouge",
      html: `
      <p>Cela arrive, généralement par méconnaissance du sujet plutôt que par mauvaise volonté. Trois
      leviers, dans l'ordre.</p>
      <ol>
        <li><strong>Passer par le conseil syndical.</strong> C'est le relais le plus efficace : ses membres sont résidents, ils voient l'arbre tous les jours, et ils ont l'oreille du syndic.</li>
        <li><strong>Faire nombre.</strong> Trois courriels de trois foyers différents pèsent bien plus qu'un seul, surtout s'ils mentionnent des enfants ou des animaux.</li>
        <li><strong>Demander l'inscription à l'ordre du jour</strong> de la prochaine assemblée générale — c'est un droit du copropriétaire, et cela permet de poser la question du plan pluriannuel plutôt que du seul arbre.</li>
      </ol>
      <p>En dernier ressort, un courrier recommandé au syndic établit une date de connaissance du problème.
      C'est une précaution, pas une menace : dans l'immense majorité des cas, le dossier avance bien avant
      d'en arriver là.</p>
      <p>Pour la vue d'ensemble côté gestionnaire — décision, budget, inventaire, plan pluriannuel — voir
      <a href="/coproprietes/">notre page consacrée aux copropriétés</a>.</p>` }
  ],
  faq: [
    { q: "Puis-je faire intervenir une entreprise à mes frais ?",
      a: `<p>Sur une partie commune, non : la décision revient au syndic, et une intervention non autorisée
      poserait un problème de responsabilité. Vous pouvez en revanche proposer un devis, ce qui accélère
      souvent la décision.</p>` },
    { q: "Et si l'arbre se trouve dans un jardin à jouissance privative ?",
      a: `<p>La jouissance privative ne transfère pas nécessairement l'entretien : cela dépend du règlement
      de copropriété. C'est une question à poser au syndic avant toute initiative.</p>` },
    { q: "Je suis locataire, à qui dois-je m'adresser ?",
      a: `<p>À votre bailleur, via le gardien ou l'antenne de proximité, avec photo et localisation. Dans
      une copropriété, informez aussi votre propriétaire, qui peut relayer auprès du syndic.</p>` },
    { q: "Puis-je refuser de payer si je n'ai pas d'arbre devant chez moi ?",
      a: `<p>Non : l'entretien des parties communes est réparti selon les tantièmes, indépendamment de la
      proximité. C'est aussi ce qui permet de traiter l'ensemble du patrimoine plutôt qu'au cas par cas.</p>` },
    { q: "Combien de temps l'aire de jeux restera-t-elle fermée ?",
      a: `<p>Le temps de l'intervention et de la retombée des poils, puis du contrôle du sol. Le délai est
      communiqué à l'issue du chantier ; il dépend de la hauteur du nid retiré, du vent et de la surface
      concernée.</p>` }
  ],
  related: [
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'La vue côté syndic et budget' },
    { url: '/chenilles-processionnaires-enfant/', label: 'Protéger les enfants', hint: 'Aires de jeux et espaces communs' },
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: 'Avant d\'écrire au syndic' }
  ]
};
