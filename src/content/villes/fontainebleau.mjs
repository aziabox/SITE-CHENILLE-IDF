import { standardPage } from '../../lib/layout.mjs';
import { note, table } from '../../lib/render.mjs';

export default standardPage({
  url: '/departements/77-seine-et-marne/fontainebleau/',
  villeName: 'Fontainebleau',
  deptSlug: '77-seine-et-marne',
  villeTeaser: "ville enclavée dans un massif où pins sylvestres et chênes se côtoient",
  title: 'Chenilles processionnaires à Fontainebleau (77300)',
  description: "Fontainebleau : une ville enclavée dans un massif où pin sylvestre et chêne se côtoient. Les deux espèces de processionnaires y sont présentes, avec deux calendriers distincts.",
  h1: 'Chenilles processionnaires à Fontainebleau',
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' },
          { name: 'Seine-et-Marne (77)', url: '/departements/77-seine-et-marne/' },
          { name: 'Fontainebleau', url: '/departements/77-seine-et-marne/fontainebleau/' }],
  datePublished: '2026-05-06',
  dateModified: '2026-09-17',
  service: {
    name: 'Traitement des chenilles processionnaires à Fontainebleau',
    type: 'Échenillage, piégeage et traitement biologique',
    description: "Traitement des chenilles processionnaires du pin et du chêne à Fontainebleau et dans les communes du massif.",
    areaServed: ['Fontainebleau', 'Seine-et-Marne (77)']
  },
  lead: `Peu de villes françaises sont à ce point imbriquées dans une forêt. À Fontainebleau, la question
  n'est pas de savoir si les processionnaires sont présentes — elles le sont, et les deux espèces — mais de
  savoir laquelle concerne votre arbre, et donc à quelle saison agir.`,
  answer: `<p>Fontainebleau est l'une des rares communes franciliennes où les <strong>deux espèces</strong>
  sont couramment rencontrées. Le massif associe <strong>pins sylvestres sur sols sableux</strong> — habitat
  de la processionnaire du pin — et <strong>chênaies sur les parties plus fraîches</strong> — habitat de la
  processionnaire du chêne. Une même propriété peut donc être concernée deux fois par an, à six mois
  d'écart.</p>`,
  sections: [
    { h2: 'Une ville dans un massif, pas à côté',
      html: `
      <p>La particularité de Fontainebleau tient à sa configuration : la forêt ne borde pas la ville, elle
      l'enveloppe. Les quartiers résidentiels s'y insèrent, les jardins prolongent le couvert forestier, et
      certaines rues n'ont de limite avec le massif qu'une clôture.</p>
      <p>Pour un insecte dont la dispersion se fait par le vol nocturne des papillons en été, cette
      continuité signifie une chose simple : <strong>il n'y a pas de barrière</strong>. Un jardin traité
      cette année sera exposé de nouveau l'an prochain, non par échec du traitement, mais par la présence
      permanente du réservoir.</p>
      ${note(`<p>Nous le disons systématiquement aux propriétaires bellifontains, et c'est important pour
      ne pas créer d'attente fausse : à Fontainebleau, on ne raisonne pas en éradication mais en
      <strong>protection annuelle de la parcelle</strong>. C'est un suivi, pas une opération unique.</p>`,
      'Une attente à cadrer dès le départ')}` },

    { h2: 'Le sable, et ce qu\'il implique',
      html: `
      <p>Le massif doit une grande part de son paysage à ses formations sableuses. Ces sables ont deux
      conséquences directes sur la processionnaire du pin.</p>
      <p>D'abord, ils portent le <strong>pin sylvestre</strong>, essence hôte par excellence, présente en
      peuplements étendus sur les plateaux et les platières.</p>
      <p>Ensuite — et c'est le point que l'on oublie — ils offrent un <strong>sol d'enfouissement
      idéal</strong>. À la fin de l'hiver, les chenilles descendues doivent s'enterrer pour se nymphoser. Un
      sol sableux, meuble, drainant et bien exposé est exactement ce qu'elles recherchent. Sur une parcelle
      bellifontaine, les chrysalides sont donc dans votre terrain, parfois pour plusieurs années en cas de
      diapause prolongée.</p>
      <p>C'est la raison pour laquelle, ici plus qu'ailleurs, nous associons le retrait des nids à une
      <a href="/piegeage-chenilles-processionnaires/">protection du sol</a> et à une surveillance sur
      plusieurs saisons.</p>` },

    { h2: 'Les situations locales les plus fréquentes',
      html: `
      ${table(
        ['Contexte bellifontain', 'Espèce', 'Ce qui est fait'],
        [
          ['Jardin en lisière directe du massif', 'Les deux', "Inventaire des pins et des chênes, deux passages dans l'année"],
          ['Propriété ancienne avec grands sujets', 'Pin', "Échenillage au grimpeur ou en nacelle, hauteur souvent importante"],
          ['Pré ou paddock arboré', 'Pin', "Colliers sur les pins bordant la pâture, mise en défens pendant la descente"],
          ['Hébergement touristique, gîte, camping', 'Pin', "Passage en fin d'hiver, avant l'ouverture de saison"],
          ['Espace public et abords d\'équipement', 'Les deux', "Inventaire et hiérarchisation par fréquentation"],
          ['Site d\'escalade et parcours de promenade', 'Pin', "Signalement au gestionnaire du site plutôt qu'intervention privée"]
        ],
        'Ce que nous rencontrons à Fontainebleau et alentour')}` },

    { h2: 'Activités de plein air et fréquentation',
      html: `
      <p>Fontainebleau vit en grande partie de sa forêt : randonnée, escalade, équitation, cyclisme,
      tourisme. Cette fréquentation crée une exposition d'un type particulier — des personnes qui
      s'assoient au pied des arbres, posent leurs affaires au sol, s'allongent sur le sable.</p>
      <p>Deux périodes demandent une vigilance accrue. <strong>De janvier à mars</strong>, les processions de
      la processionnaire du pin traversent les sentiers et les zones sableuses ensoleillées — précisément
      celles que recherchent les grimpeurs et les promeneurs. <strong>De mai à juillet</strong>, les nids de
      processionnaire du chêne sont actifs sur les troncs, à hauteur d'homme.</p>
      <p>Pour les hébergements, les centres équestres et les sites d'accueil, la réponse pratique consiste à
      traiter avant la saison d'affluence plutôt que pendant.
      Voir <a href="/entreprises/">intervention pour les entreprises</a>.</p>` },

    { h2: 'Qui contacter selon l\'arbre',
      html: `
      <ul class="plain">
        <li><strong>Arbre dans votre jardin</strong> — vous êtes le donneur d'ordre. Voir <a href="/particuliers/">particuliers</a>.</li>
        <li><strong>Arbre de voirie, de square ou d'équipement communal</strong> — les services techniques de la commune.</li>
        <li><strong>Arbre en forêt domaniale</strong> — le gestionnaire du massif. La lutte n'y est pas généralisée : elle se concentre sur les zones d'accueil du public.</li>
        <li><strong>Arbre dans une copropriété</strong> — le syndic. Voir <a href="/coproprietes/">copropriétés</a>.</li>
        <li><strong>Arbre en limite avec la forêt</strong> — si l'arbre est sur votre parcelle, il vous appartient, même s'il paraît faire partie du massif.</li>
      </ul>` }
  ],
  faq: [
    { q: "Les deux espèces peuvent-elles être présentes sur la même propriété ?",
      a: `<p>Oui, et c'est assez fréquent à Fontainebleau. Un pin sylvestre et un chêne dans le même jardin
      peuvent porter chacun leur espèce, avec des interventions à six mois d'écart. C'est pourquoi nous
      commençons toujours par un inventaire des essences.</p>` },
    { q: "Traiter mon jardin sert-il à quelque chose si la forêt est juste derrière ?",
      a: `<p>Oui, pour votre parcelle. Vous ne changerez pas la situation du massif, mais vous supprimez les
      nids de vos arbres, les poils de votre sol et l'exposition de votre famille. La recolonisation reste
      possible, d'où l'intérêt d'une surveillance annuelle.</p>` },
    { q: "Pourquoi les chenilles s'enfouissent-elles dans mon terrain ?",
      a: `<p>Parce que le sable de Fontainebleau est un substrat idéal pour la nymphose : meuble, drainant,
      bien réchauffé au soleil. Les zones dégagées et ensoleillées d'un jardin sont donc des sites
      privilégiés.</p>` },
    { q: "Faut-il prévenir avant de faire du VTT ou de grimper en février ?",
      a: `<p>Il suffit de regarder le sol sur les zones sableuses ensoleillées : une procession est visible
      de loin et facile à contourner. Évitez de poser les affaires au pied des pins et de vous asseoir dans
      les zones où des chenilles sont passées.</p>` },
    { q: "Intervenez-vous dans les communes voisines du massif ?",
      a: `<p>Oui, sur l'ensemble du secteur et plus largement en Seine-et-Marne. Les interventions sont
      groupées par journée sur les communes du massif, ce qui réduit la part de déplacement.</p>` }
  ],
  cta: {
    title: "Faire l'inventaire des arbres de votre parcelle",
    text: `À Fontainebleau, la première étape utile est de savoir ce que vous avez : pins, chênes, ou les
    deux. C'est ce qui détermine le nombre de passages et les saisons à viser.`,
    primary: 'Demander un inventaire'
  },
  related: [
    { url: '/departements/77-seine-et-marne/', label: 'Seine-et-Marne (77)', hint: 'Situation départementale' },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "L'espèce des sables" },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Les chênaies du massif' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Protéger le sol de la parcelle' },
    { url: '/entreprises/', label: 'Entreprises', hint: 'Hébergements et sites de plein air' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Gérer une lisière dans la durée' }
  ]
});
