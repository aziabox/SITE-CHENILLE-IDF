import { standardPage } from '../../lib/layout.mjs';
import { table, figure, note, safety, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/chenille-processionnaire-du-pin/',
  title: 'Chenille processionnaire du pin : reconnaître et traiter',
  description: "Processionnaire du pin (Thaumetopoea pityocampa) : aspect, nid de soie, cycle complet, descente en procession, risques et traitements adaptés à chaque saison.",
  h1: 'La chenille processionnaire du pin',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Chenilles processionnaires', url: '/chenilles-processionnaires/' },
          { name: 'Processionnaire du pin', url: '/chenille-processionnaire-du-pin/' }],
  datePublished: '2026-02-12',
  dateModified: '2026-09-10',
  priority: '0.9',
  lead: `C'est l'espèce que tout le monde a en tête : la boule blanche accrochée au pin, et la file de
  chenilles qui traverse une pelouse au mois de mars. Elle est aussi celle dont le calendrier laisse le
  plus de latitude — à condition de ne pas attendre la descente.`,
  answer: `<p>La chenille processionnaire du pin est la larve du papillon <em>Thaumetopoea pityocampa</em>.
  Elle vit en colonie sur les <strong>pins et les cèdres</strong>, construit un <strong>nid de soie blanche
  en bout de branche</strong> qu'elle occupe tout l'hiver, puis <strong>descend au sol en file indienne à la
  fin de l'hiver</strong> pour s'enfouir et se transformer en chrysalide. Ses poils urticants la rendent
  dangereuse pour l'homme et surtout pour les chiens.</p>`,
  sections: [
    { h2: 'À quoi ressemble-t-elle exactement',
      tocLabel: 'Aspect de la chenille',
      html: `
      <p>Une chenille mature mesure entre 3 et 4 centimètres. Le corps est brun sombre sur le dessus, avec
      des taches roussâtres sur le dos et des flancs plus clairs, tirant sur l'orangé. L'ensemble est couvert
      de longs poils blanchâtres qui lui donnent un aspect duveteux — trompeur, car ce duvet visible n'est
      pas la partie dangereuse.</p>
      <p>Les poils urticants sont ailleurs : ils sont microscopiques, logés dans huit replis dorsaux que l'on
      appelle des miroirs, et ils n'apparaissent qu'<strong>à partir du troisième stade larvaire</strong>.
      Une chenille jeune, de quelques millimètres, n'est pas encore urticante ; c'est précisément pourquoi
      l'automne est la meilleure période pour un traitement biologique.</p>
      <p>Le critère le plus sûr reste le comportement : ces chenilles se déplacent collées les unes aux autres,
      tête contre abdomen, en une file parfaitement continue. Aucune autre chenille de nos régions ne fait
      cela. <a href="/identifier-chenilles-processionnaires/">Voir les critères d'identification détaillés</a>.</p>` },

    { h2: 'Le nid : forme, emplacement, signification',
      tocLabel: 'Le nid de soie',
      html: `
      <p>Le nid définitif d'hiver est une poche de soie blanche, dense, opaque, de la taille d'un ballon de
      rugby pour les colonies importantes. Il est accroché <strong>en extrémité de rameau</strong>, presque
      toujours sur la face la plus ensoleillée de l'arbre — au sud, au sud-est. Ce n'est pas un hasard : la
      colonie a besoin de chaleur pour digérer la nuit.</p>
      <p>Autour du nid, les aiguilles sont consommées : le rameau apparaît roussi puis nu. C'est souvent ce
      contraste, plus que le nid lui-même, qui attire l'œil depuis le jardin.</p>
      ${note(`<p>Un nid situé en haut d'un pin de quinze mètres et un nid à trois mètres du sol au-dessus
      d'une terrasse ne posent pas le même problème. Le premier peut souvent attendre la bonne fenêtre
      d'intervention ; le second doit être traité avant la descente, car la procession passera exactement
      là où l'on marche.</p>`, 'Hauteur et usage du lieu')}
      ${figure({ src: '/assets/img/identifier-nid-processionnaire.svg', width: 960, height: 400,
        alt: "Trois formes comparées : nid de processionnaire opaque, toile translucide d'hyponomeute, boule de gui",
        caption: "La confusion la plus fréquente est la toile d'hyponomeute, translucide, à travers laquelle on distingue le rameau." })}` },

    { h2: 'Le cycle complet, mois par mois',
      tocLabel: 'Cycle annuel',
      html: `
      ${steps([
        { title: 'Juin à septembre — le vol', body: `<p>Les papillons, gris et discrets, volent la nuit. La femelle
          pond une à deux centaines d'œufs en manchon autour d'un rameau, qu'elle recouvre d'écailles. Cette
          période est celle du <a href="/piegeage-chenilles-processionnaires/">piégeage à phéromone</a>.</p>` },
        { title: "Août à octobre — l'éclosion", body: `<p>Les jeunes chenilles sortent et commencent à consommer
          les aiguilles. Elles tissent des abris légers et provisoires. Elles ne sont pas encore urticantes :
          c'est la fenêtre de traitement biologique la plus efficace.</p>` },
        { title: 'Octobre à décembre — le nid définitif', body: `<p>La colonie construit le nid d'hiver. Les chenilles
          deviennent urticantes. Le nid est désormais visible de loin : c'est le bon moment pour planifier un
          <a href="/echenillage/">échenillage</a>.</p>` },
        { title: 'Janvier à mars — la procession', body: `<p>Par une journée douce, la colonie quitte le nid et descend
          le long du tronc en file indienne pour trouver un sol meuble et ensoleillé. C'est la phase la plus
          risquée au niveau du sol, et la dernière occasion d'agir par
          <a href="/piegeage-chenilles-processionnaires/">piégeage sur tronc</a>.</p>` },
        { title: "Printemps à été — la chrysalide", body: `<p>Enfouies à quelques centimètres, les chenilles se
          transforment en chrysalides. Une partie peut rester en diapause plusieurs années : c'est ce qui
          explique qu'un jardin « propre » pendant deux ans reçoive soudain une nouvelle vague.</p>` }
      ])}
      <p>La conséquence pratique est simple : plus on agit tôt dans le cycle, plus la méthode est douce, et
      moins l'intervention est spectaculaire. Une colonie traitée en octobre disparaît sans que personne ne
      s'en aperçoive ; la même colonie traitée en mars demande un chantier sécurisé.</p>` },

    { h2: 'La procession : pourquoi elle change tout',
      html: `
      <p>C'est le moment où le problème quitte l'arbre pour rejoindre le sol. La file peut compter plusieurs
      dizaines de chenilles sur plusieurs mètres et met parfois des heures à traverser une pelouse. Elle
      s'arrête là où le sol lui convient — souvent une zone sableuse, un massif, un bac à sable, un talus
      bien exposé.</p>
      ${safety(`<p>Pendant cette phase, tenez les enfants et les animaux à distance du pied de l'arbre et
      des zones ensoleillées de la pelouse. Ne tentez pas d'écraser ou de balayer la procession : la
      pression libère les poils en grande quantité. Si des chenilles sont déjà descendues, évitez de tondre
      tant que la zone n'a pas été traitée.</p>`, 'Pendant une procession')}
      <p>Le piège à collier repose précisément sur ce comportement : les chenilles suivent le tronc vers le
      bas, rencontrent une gouttière étanche et sont dirigées vers un sac de collecte fermé. Correctement
      posé, il protège le sol même si le nid n'a pas pu être retiré.</p>` },

    { h2: 'Risques spécifiques au pin',
      html: `
      <p>Deux particularités rendent cette espèce plus dangereuse au quotidien que sa cousine du chêne :
      la procession amène les chenilles au niveau du sol, et les nids sont souvent sur des arbres
      d'ornement, donc dans des jardins fréquentés.</p>
      <ul class="plain">
        <li><strong>Chiens</strong> — c'est l'espèce la plus impliquée dans les accidents canins, parce que le chien rencontre la procession au sol et cherche à la flairer. <a href="/chenilles-processionnaires-chien/">Conduite à tenir</a>.</li>
        <li><strong>Enfants</strong> — bacs à sable, pelouses et abords de terrasses sont exactement les endroits où les chenilles cherchent à s'enfouir. <a href="/chenilles-processionnaires-enfant/">Protéger les enfants</a>.</li>
        <li><strong>Jardinage</strong> — tondre, souffler ou ratisser sous un pin infesté remet les poils en suspension pendant plusieurs mois après la saison.</li>
        <li><strong>Arbres</strong> — un pin défolié plusieurs hivers de suite ralentit nettement sa croissance et devient sensible aux ravageurs secondaires.</li>
      </ul>` },

    { h2: 'Traiter un pin selon la saison',
      html: `
      ${table(
        ['Période', 'Méthode adaptée', 'Remarque'],
        [
          ['Septembre — octobre', 'Traitement biologique sur jeunes larves', "Le plus discret et le plus efficace ; nécessite des températures douces et une fenêtre sans pluie"],
          ['Novembre — janvier', 'Échenillage mécanique', 'Le nid est bien visible et la colonie encore groupée'],
          ['Décembre — février', 'Pose de colliers de piégeage', 'À installer avant la première descente'],
          ['Février — mars', "Échenillage d'urgence + sécurisation du sol", 'Priorité aux zones fréquentées'],
          ['Juin — septembre', 'Piégeage à phéromone', "Suivi du vol et réduction des pontes pour l'année suivante"]
        ],
        "Fenêtres d'intervention sur pin")}
      <p>Dans les faits, la plupart des jardins combinent deux méthodes : un échenillage pour supprimer
      l'existant, puis un dispositif préventif pour éviter la recolonisation depuis les pins voisins.
      <a href="/traitement-processionnaire-du-pin/">Voir le détail du traitement de la processionnaire du
      pin</a>.</p>` },

    { h2: "Où on la rencontre en Île-de-France",
      html: `
      <p>Elle est présente dans toute la région, avec une pression plus marquée au sud — Essonne, sud de la
      Seine-et-Marne, secteurs sableux du massif de Fontainebleau où le pin sylvestre est abondant. En zone
      dense, elle se concentre sur les <strong>pins noirs et les cèdres d'ornement</strong> des parcs, des
      résidences et des cimetières : des arbres isolés, très exposés au soleil, et sans prédation naturelle
      significative.</p>
      <p>Cette répartition explique un motif d'appel typique : une résidence des Hauts-de-Seine ou du
      Val-de-Marne dont les deux cèdres de l'allée centrale portent des nids, alors qu'aucun pin ne pousse à
      un kilomètre à la ronde. <a href="/departements/">Voir la situation par département</a>.</p>` }
  ],
  faq: [
    { q: "À quel moment les chenilles descendent-elles du pin ?",
      a: `<p>Le plus souvent entre janvier et mars en Île-de-France, lors des premières journées douces et
      ensoleillées. Un hiver doux peut avancer la descente à la fin décembre ; un hiver froid la repousse en
      avril. C'est une fourchette, pas une date.</p>` },
    { q: "Le nid est vide, est-ce encore dangereux ?",
      a: `<p>Oui. Un nid abandonné contient les mues et les poils de toute la colonie. Il reste urticant
      pendant des mois, et le sol sous l'arbre également. Il doit être retiré avec les mêmes précautions
      qu'un nid occupé.</p>` },
    { q: "Peut-on couper la branche portant le nid soi-même ?",
      a: `<p>C'est le geste qui provoque le plus d'accidents domestiques. La coupe secoue le nid, qui libère
      ses poils, et la chute au sol les disperse. Si l'opération est faite malgré tout, elle suppose un
      équipement complet et un ensachage immédiat, sans quoi la zone reste contaminée.</p>` },
    { q: "Les cèdres sont-ils concernés ?",
      a: `<p>Oui, les cèdres de l'Atlas et du Liban sont régulièrement colonisés, y compris en pleine ville.
      Le nid y est parfois plus diffus que sur pin, ce qui retarde le diagnostic.</p>` },
    { q: "Pourquoi mon pin est-il touché et pas celui du voisin ?",
      a: `<p>L'exposition joue énormément. Un arbre isolé, bien ensoleillé, en lisière ou en bordure de
      pelouse est un site de ponte privilégié. Un pin à l'ombre, serré dans un bosquet, est moins attractif.
      La hauteur et l'essence entrent aussi en compte.</p>` },
    { q: "Une seule intervention suffit-elle ?",
      a: `<p>Elle règle la saison en cours. Si des pins infestés subsistent dans un rayon de quelques
      centaines de mètres, une recolonisation est probable l'année suivante : c'est pour cela que nous
      proposons systématiquement un dispositif de surveillance après un échenillage.</p>` }
  ],
  cta: {
    title: "Un nid blanc sur votre pin ? Le calendrier compte autant que la méthode",
    text: `Selon la période de l'année, la même situation se traite par échenillage, par piégeage ou par
    traitement biologique. Décrivez-nous l'arbre, sa hauteur et son environnement : nous vous dirons quelle
    fenêtre viser.`,
    primary: 'Demander un avis'
  },
  related: [
    { url: '/traitement-processionnaire-du-pin/', label: 'Traitement de la processionnaire du pin', hint: 'Méthodes et calendrier détaillés' },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: "L'autre espèce, au printemps" },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Collier sur tronc et piège à phéromone' },
    { url: '/echenillage/', label: 'Échenillage', hint: 'Retrait mécanique du nid' },
    { url: '/chenilles-processionnaires-chien/', label: 'Risques pour les chiens', hint: "L'espèce la plus impliquée" },
    { url: '/blog/identifier/reconnaitre-chenille-processionnaire/', label: 'Reconnaître une chenille', hint: 'Guide illustré pas à pas' }
  ]
});
