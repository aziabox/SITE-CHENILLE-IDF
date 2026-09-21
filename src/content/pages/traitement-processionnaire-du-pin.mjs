import { standardPage } from '../../lib/layout.mjs';
import { table, note, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/traitement-processionnaire-du-pin/',
  title: 'Traitement de la processionnaire du pin : protocole par saison',
  description: "Protocole complet de traitement de la processionnaire du pin : traitement biologique d'automne, échenillage d'hiver, collier avant la descente, piégeage estival. Conditions et limites de chaque étape.",
  h1: 'Traiter la processionnaire du pin',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Traitement', url: '/traitement-chenilles-processionnaires/' },
          { name: 'Traitement du pin', url: '/traitement-processionnaire-du-pin/' }],
  datePublished: '2026-03-16',
  dateModified: '2026-09-04',
  service: {
    name: 'Traitement de la processionnaire du pin',
    type: 'Lutte contre Thaumetopoea pityocampa',
    description: "Traitement biologique, échenillage, pose de colliers et piégeage à phéromone contre la processionnaire du pin sur pins et cèdres, en Île-de-France."
  },
  lead: `Sur pin, le traitement se raisonne comme une année complète, pas comme une visite. Chaque trimestre
  offre une prise différente sur l'insecte — et rater une fenêtre revient à attendre douze mois pour
  retrouver la même.`,
  answer: `<p>Le traitement de la processionnaire du pin suit le cycle de l'insecte :
  <strong>traitement biologique en septembre-octobre</strong> sur les jeunes larves,
  <strong>échenillage de novembre à février</strong> sur les nids constitués,
  <strong>pose de colliers de piégeage avant la descente</strong> en hiver, et
  <strong>piégeage à phéromone en été</strong> pour réduire les pontes. La combinaison de deux de ces
  actions donne un résultat durable ; une action isolée règle rarement la situation au-delà d'une saison.</p>`,
  sections: [
    { h2: 'Septembre — octobre : la meilleure fenêtre',
      tocLabel: 'Automne : biocontrôle',
      html: `
      <p>À cette période, les chenilles viennent d'éclore. Elles sont minuscules, elles mangent beaucoup, et
      elles ne sont <strong>pas encore urticantes</strong>. Un traitement de biocontrôle au Btk pulvérisé sur
      le feuillage est ingéré avec les aiguilles et supprime l'essentiel de la colonie avant qu'un nid
      n'existe.</p>
      <p>C'est la seule fenêtre où l'on peut agir sans balisage lourd, sans nacelle dans la plupart des cas,
      et sans perturber l'usage du jardin. C'est aussi celle que l'on rate le plus souvent, parce qu'à ce
      stade rien n'est visible depuis le sol.</p>
      ${note(`<p>Conditions requises : température douce, feuillage sec, absence de pluie dans les heures qui
      suivent et vent faible. Ces contraintes expliquent qu'un traitement d'automne se planifie avec une
      fourchette de dates plutôt qu'avec une date ferme.</p>`, 'Pourquoi la météo commande')}
      <p>La date précise se cale sur l'observation du vol de l'été — d'où l'intérêt d'un
      <a href="/piegeage-chenilles-processionnaires/">piège à phéromone</a> posé en juin sur les sites à
      pression récurrente.</p>` },

    { h2: 'Novembre — février : échenillage',
      tocLabel: 'Hiver : échenillage',
      html: `
      <p>Le nid est désormais formé, visible, et la colonie y passe ses journées. C'est le moment le plus
      favorable au retrait mécanique : on enlève tout d'un coup, et le résultat est immédiatement
      vérifiable.</p>
      ${steps([
        { title: 'Inventaire des nids', body: `<p>Tour complet de l'arbre : un pin adulte cache souvent un
          deuxième nid du côté opposé au point d'observation habituel.</p>` },
        { title: 'Choix du moyen d\'accès', body: `<p>Perche jusqu'à une douzaine de mètres, nacelle ou grimpeur
          au-delà. Le dégagement au sol conditionne ce choix autant que la hauteur.</p>` },
        { title: 'Coupe et confinement', body: `<p>Le rameau est sectionné au plus près du nid, qui est reçu et
          fermé sans toucher le sol. Voir <a href="/echenillage/">le détail de l'opération</a>.</p>` },
        { title: 'Contrôle du sol', body: `<p>On vérifie qu'aucune chenille n'est déjà descendue, ce qui arrive
          dès janvier lors d'un hiver doux.</p>` }
      ])}
      <p>Un échenillage réalisé en février reste utile mais arrive parfois après le départ d'une partie de la
      colonie : dans ce cas, il se complète d'une pose de collier et d'une collecte au sol.</p>` },

    { h2: 'Décembre — mars : protéger le sol',
      tocLabel: 'Avant la descente',
      html: `
      <p>Si les nids sont hors d'atteinte — pin de vingt mètres, arbre en limite de propriété, accès
      impossible — la stratégie change d'objectif : on ne protège plus l'arbre, on protège le sol.</p>
      <p>Le <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a> ceinture le tronc et
      capture les chenilles pendant leur descente. Posé avant la première procession et suivi jusqu'à la
      fin de la saison, il évite que la file traverse une pelouse, un parcours canin ou une aire de jeux.</p>
      ${table(
        ['Configuration', 'Réponse recommandée'],
        [
          ['Nid accessible, zone fréquentée dessous', 'Échenillage, puis collier si la descente a commencé'],
          ['Nid inaccessible, chien ou enfants au jardin', 'Collier en priorité, échenillage reporté à la saison suivante'],
          ['Plusieurs pins voisins infestés', 'Colliers sur les arbres concernés + traitement biologique à l\'automne suivant'],
          ['Arbre isolé, aucun usage du sol', 'Échenillage à la fenêtre confortable, sans urgence']
        ],
        'Quelle réponse selon la configuration réelle')}` },

    { h2: 'Juin — septembre : préparer l\'année suivante',
      tocLabel: 'Été : piégeage du vol',
      html: `
      <p>L'été est la saison la plus calme en apparence et la plus utile en réalité. Le piège à phéromone
      capture les papillons mâles, réduit les accouplements et fournit la donnée qui manque le plus souvent :
      quand le vol a-t-il eu lieu, et avec quelle intensité.</p>
      <p>Sur un site suivi, cette courbe de capture détermine directement la date du traitement biologique
      d'automne. C'est ce qui transforme une intervention approximative en intervention calée.</p>` },

    { h2: 'Ce qui ne fonctionne pas sur pin',
      tocLabel: 'Méthodes inefficaces',
      html: `
      <ul class="plain">
        <li><strong>Brûler le nid</strong> — projection de poils, risque d'incendie sur résineux, blessure de l'arbre. À proscrire.</li>
        <li><strong>Le jet haute pression</strong> — disperse la colonie et les poils sur toute la parcelle.</li>
        <li><strong>L'insecticide en aérosol</strong> — la soie du nid est peu perméable ; le produit atteint mal les chenilles.</li>
        <li><strong>Le collier posé en mars</strong> — les processions ont généralement commencé ; le dispositif arrive après.</li>
        <li><strong>Abattre le pin</strong> — solution radicale rarement justifiée, qui ne protège pas des arbres voisins.</li>
      </ul>
      ${note(`<p>Une question revient souvent : faut-il traiter les cèdres comme les pins ? Oui. Les cèdres
      de l'Atlas et du Liban sont colonisés, avec des nids parfois plus diffus et donc repérés plus tard.
      Le protocole est identique.</p>`)}` }
  ],
  faq: [
    { q: "Peut-on traiter un pin en pleine descente des chenilles ?",
      a: `<p>Oui, mais l'intervention change de nature : elle porte autant sur le sol et sur le tronc que sur
      le nid. On combine généralement collecte au sol, pose de collier et retrait des nids restants.</p>` },
    { q: "Le traitement biologique tue-t-il les chenilles instantanément ?",
      a: `<p>Non. Le Btk agit par ingestion : les larves cessent de s'alimenter puis meurent en quelques
      jours. Un contrôle visuel quelques jours après l'application permet de vérifier l'effet.</p>` },
    { q: "Faut-il traiter tous les pins du terrain ?",
      a: `<p>On traite les pins porteurs et, en préventif, ceux qui présentent le même profil d'exposition.
      Un pin à l'ombre, serré dans un bosquet, est rarement prioritaire.</p>` },
    { q: "Combien d'années faut-il pour venir à bout d'une infestation de pin ?",
      a: `<p>Sur un jardin isolé, une à deux saisons suffisent souvent. Si des pins infestés subsistent dans
      le voisinage immédiat, il s'agit d'une gestion continue plutôt que d'une élimination : la surveillance
      annuelle devient la norme.</p>` },
    { q: "Un pin très défolié va-t-il mourir ?",
      a: `<p>Rarement du seul fait des processionnaires. Il repart généralement au printemps. Un pin déjà
      affaibli par la sécheresse ou un ravageur secondaire et défolié plusieurs années de suite peut en
      revanche dépérir : c'est alors un sujet à faire examiner.</p>` }
  ],
  cta: {
    title: "Caler l'intervention sur la bonne fenêtre",
    text: `Selon le mois où vous nous appelez, la réponse n'est pas la même. Dites-nous ce que vous observez
    et depuis quand : nous vous indiquons l'action utile maintenant, et celle à prévoir ensuite.`,
    primary: 'Parler à un spécialiste'
  },
  related: [
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "Biologie et cycle de l'espèce" },
    { url: '/echenillage/', label: 'Échenillage', hint: 'La technique de retrait' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Collier et phéromone' },
    { url: '/traitement-processionnaire-du-chene/', label: 'Traitement du chêne', hint: "L'autre protocole" },
    { url: '/blog/traitement/quand-traiter-chenilles-processionnaires/', label: 'Quand traiter ?', hint: 'Le calendrier détaillé' },
    { url: '/departements/', label: "Zones d'intervention", hint: 'Où nous intervenons' }
  ]
});
