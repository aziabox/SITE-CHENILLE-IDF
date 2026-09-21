import { standardPage, zoneReminder } from '../../lib/layout.mjs';
import { table, note, figure } from '../../lib/render.mjs';

export default standardPage({
  url: '/traitement-chenilles-processionnaires/',
  title: 'Traitement des chenilles processionnaires : méthodes et calendrier',
  description: "Quelle méthode contre les chenilles processionnaires, et à quel moment : échenillage, biocontrôle, piégeage, surveillance. Comparatif honnête.",
  h1: 'Traitement des chenilles processionnaires',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Traitement', url: '/traitement-chenilles-processionnaires/' }],
  datePublished: '2026-02-18',
  dateModified: '2026-09-12',
  priority: '0.9',
  service: {
    name: 'Traitement des chenilles processionnaires',
    type: 'Échenillage, traitement biologique et piégeage',
    description: "Traitement professionnel des chenilles processionnaires du pin et du chêne : échenillage mécanique, traitement de biocontrôle, piégeage et surveillance, en Île-de-France."
  },
  lead: `Il n'existe pas un traitement des chenilles processionnaires, mais quatre approches qui répondent
  à des moments différents du cycle. Choisir la bonne, c'est d'abord répondre à deux questions : quelle
  espèce, et à quel stade.`,
  answer: `<p>Quatre méthodes professionnelles existent : l'<strong>échenillage mécanique</strong> (retrait
  du nid), le <strong>traitement biologique</strong> à base de <em>Bacillus thuringiensis</em> sur jeunes
  larves, le <strong>piégeage</strong> (collier sur tronc en hiver, phéromone en été) et la
  <strong>surveillance</strong> avec aménagements favorisant les prédateurs naturels. Le choix dépend de
  l'espèce, de la saison, de la hauteur de l'arbre et de la fréquentation du lieu.</p>`,
  sections: [
    { h2: 'Les quatre méthodes, sans survente',
      tocLabel: 'Les quatre méthodes',
      html: `
      ${table(
        ['Méthode', 'Ce qu\'elle fait bien', 'Ses limites'],
        [
          ['<a href="/echenillage/">Échenillage mécanique</a>',
           "Supprime immédiatement un nid identifié et la colonie qu'il contient",
           "Ne protège pas contre une recolonisation ; suppose un accès au nid"],
          ['<a href="/traitement-preventif/">Traitement biologique (Btk)</a>',
           "Réduit fortement la population avant la formation des nids, sans toucher au reste du jardin",
           "Fenêtre courte, sur jeunes larves uniquement ; dépend de la météo"],
          ['<a href="/piegeage-chenilles-processionnaires/">Piège à collier</a>',
           "Protège le sol pendant la descente, même si le nid est inaccessible",
           "Processionnaire du pin seulement ; demande une pose soignée et un suivi"],
          ['<a href="/piegeage-chenilles-processionnaires/">Piège à phéromone</a>',
           "Mesure la pression du vol et réduit les pontes de l'année suivante",
           "Effet différé, jamais suffisant seul sur une infestation installée"],
          ['Surveillance et biodiversité',
           "Installe une pression naturelle durable (mésanges, chauves-souris, huppe)",
           "Effet progressif, complémentaire et non substituable à une action curative"]
        ],
        "Ce que chaque méthode règle réellement")}
      ${note(`<p>Méfiez-vous des offres qui promettent une éradication définitive en une intervention. Tant
      qu'il reste des pins ou des chênes porteurs dans le voisinage, la recolonisation est une question de
      distance et de vent. Un traitement sérieux se raisonne sur deux à trois saisons.</p>`, 'Un mot sur les promesses')}` },

    { h2: 'Quel traitement, à quelle période',
      tocLabel: 'Calendrier de traitement',
      html: `
      <p>Le calendrier est la partie la plus utile de cette page. Les deux espèces étant décalées de six
      mois, une même date n'autorise pas les mêmes actions selon l'arbre concerné.</p>
      ${table(
        ['Période', 'Processionnaire du pin', 'Processionnaire du chêne'],
        [
          ['Septembre — octobre', '<strong>Traitement biologique</strong> sur jeunes larves', 'Rien à faire : espèce à l\'état d\'œuf'],
          ['Novembre — janvier', '<strong>Échenillage</strong> des nids d\'hiver', "Retrait des anciens nids encore urticants"],
          ['Décembre — février', '<strong>Pose de colliers</strong> avant la descente', '—'],
          ['Février — mars', 'Échenillage tardif, sécurisation du sol', 'Préparation de la campagne de printemps'],
          ['Avril', 'Fin de saison', '<strong>Traitement biologique</strong> sur jeunes larves'],
          ['Mai — juillet', '—', '<strong>Aspiration des nids</strong>, balisage des zones'],
          ['Juin — septembre', '<strong>Piégeage à phéromone</strong>', 'Suivi du vol, inventaire des arbres porteurs']
        ],
        "Fenêtres d'intervention par espèce")}
      ${figure({ src: '/assets/img/cycle-annuel-processionnaires.svg', width: 960, height: 400,
        alt: "Frise annuelle des périodes d'activité et d'intervention pour les deux espèces de processionnaires",
        caption: "Un nid signalé en avril sur un pin arrive après la descente : la question n'est plus le nid mais le sol." })}` },

    { h2: 'Comment nous choisissons la méthode',
      html: `
      <p>Sur le terrain, la décision se prend en quelques minutes, à partir de cinq éléments.</p>
      <ol>
        <li><strong>L'espèce.</strong> Elle détermine la saison utile et la technique de retrait — coupe pour le pin, aspiration pour le chêne.</li>
        <li><strong>Le stade des chenilles.</strong> Jeunes larves : biocontrôle. Chenilles urticantes : retrait mécanique et protection renforcée.</li>
        <li><strong>La hauteur et l'accès.</strong> Perche télescopique jusqu'à une douzaine de mètres, nacelle ou grimpeur au-delà, selon le dégagement autour de l'arbre.</li>
        <li><strong>L'usage du lieu.</strong> Une cour d'école, une aire de jeux ou une terrasse impose un traitement prioritaire, éventuellement hors fenêtre idéale.</li>
        <li><strong>L'environnement.</strong> Point d'eau, ruche, potager, voisinage immédiat : ces éléments conditionnent la possibilité d'une pulvérisation.</li>
      </ol>
      <p>C'est pour cela qu'un diagnostic à distance sur photo, puis une visite, précèdent toujours la
      proposition. Une intervention décidée au téléphone sans voir l'arbre a de bonnes chances d'être
      inadaptée.</p>` },

    { h2: 'Traitement préventif ou curatif ?',
      html: `
      <p>Les deux mots sont souvent employés de façon interchangeable, à tort.</p>
      <p>Le <a href="/traitement-curatif/"><strong>curatif</strong></a> s'adresse à une infestation présente
      et visible : il y a un nid, des chenilles, un risque immédiat. L'objectif est de supprimer la source et
      de sécuriser la zone, le plus vite compatible avec la sécurité de l'opération.</p>
      <p>Le <a href="/traitement-preventif/"><strong>préventif</strong></a> s'adresse à un arbre à risque :
      il a été infesté l'an dernier, ou il se trouve à proximité d'un foyer. L'objectif est d'empêcher
      l'installation d'une colonie, ce qui coûte nettement moins cher et se fait sans perturber l'usage du
      jardin.</p>
      <p>Dans la pratique, une première intervention est presque toujours curative, et le préventif prend le
      relais l'année suivante.</p>` },

    { h2: "Ce qui se passe lors d'une intervention",
      tocLabel: 'Déroulé type',
      html: `
      <ol>
        <li><strong>Échange préalable</strong> — description de la situation, photos de l'arbre et du nid, localisation.</li>
        <li><strong>Diagnostic sur place</strong> — espèce, nombre de nids, hauteur, état de l'arbre, contraintes d'accès.</li>
        <li><strong>Sécurisation</strong> — balisage du périmètre, mise à l'écart des personnes et des animaux, fermeture des ouvertures proches.</li>
        <li><strong>Intervention</strong> — retrait ou traitement selon la méthode retenue, avec équipement de protection intégral.</li>
        <li><strong>Confinement et évacuation</strong> — ensachage sur place, transport et élimination par une filière adaptée.</li>
        <li><strong>Compte rendu</strong> — arbres traités, méthode, recommandations et, si nécessaire, calendrier de suivi.</li>
      </ol>
      ${note(`<p>Nous ne communiquons pas de tarif forfaitaire en ligne, parce qu'il serait faux. Le prix
      dépend du nombre d'arbres, de la hauteur, du moyen d'accès nécessaire et de la méthode. Le devis est
      établi après diagnostic, et il est détaillé poste par poste.</p>`, 'Sur le prix')}
      ${zoneReminder}` }
  ],
  faq: [
    { q: "Peut-on traiter les chenilles processionnaires soi-même ?",
      a: `<p>Des dispositifs grand public existent, notamment des colliers de piégeage. Ils peuvent aider sur
      un petit pin accessible, à condition d'être posés correctement et avant la descente. En revanche, le
      retrait d'un nid urticant sans équipement de protection expose sérieusement : c'est l'opération à
      confier à un professionnel.</p>` },
    { q: "Le traitement biologique est-il dangereux pour les autres insectes ?",
      a: `<p><em>Bacillus thuringiensis</em> var. <em>kurstaki</em> agit sur les larves de lépidoptères qui
      ingèrent le produit. Il n'est pas sélectif de la seule processionnaire : d'autres chenilles présentes
      sur l'arbre traité peuvent être touchées. C'est pourquoi le traitement est ciblé sur les arbres
      concernés, à la bonne période, et jamais appliqué en couverture générale d'un jardin.</p>` },
    { q: "Combien de temps après le traitement peut-on réutiliser le jardin ?",
      a: `<p>Après un échenillage, la zone est réutilisable une fois la retombée des poils terminée et le sol
      contrôlé — nous l'indiquons à la fin de l'intervention. Après une pulvérisation, le délai de rentrée
      applicable au produit utilisé vous est communiqué avant l'opération.</p>` },
    { q: "Faut-il traiter tous les arbres du terrain ?",
      a: `<p>Non. On traite les arbres porteurs et, le cas échéant, les arbres immédiatement voisins de même
      essence lorsqu'ils présentent un risque de colonisation. Traiter un jardin entier serait inutile et
      coûteux.</p>` },
    { q: "Que faire si l'arbre infesté appartient à la commune ?",
      a: `<p>Signalez-le au service des espaces verts ou à la mairie, avec une photo et la localisation
      précise. Les collectivités disposent en général d'un circuit de signalement. Nous intervenons
      également pour des communes dans le cadre de campagnes groupées.</p>` }
  ],
  cta: {
    title: "Savoir quelle méthode s'applique à votre situation",
    text: `Décrivez-nous l'arbre, ce que vous voyez et depuis quand. En quelques questions, nous identifions
    l'espèce, la fenêtre d'intervention utile et le degré d'urgence réel.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/echenillage/', label: 'Échenillage', hint: 'Retrait mécanique, matériel, sécurité' },
    { url: '/destruction-nid-chenilles-processionnaires/', label: 'Destruction de nid', hint: "Ce qu'il advient du nid retiré" },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Collier sur tronc et phéromone' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Empêcher une nouvelle installation' },
    { url: '/traitement-curatif/', label: 'Traitement curatif', hint: 'Répondre à une infestation en cours' },
    { url: '/blog/traitement/quand-traiter-chenilles-processionnaires/', label: 'Quand traiter ?', hint: 'Le calendrier expliqué' }
  ]
});
