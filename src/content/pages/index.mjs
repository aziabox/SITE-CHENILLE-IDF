import { site, serviceArea } from '../../lib/site.mjs';
import { esc, cta, faqBlock, cards, table, figure, keyAnswer } from '../../lib/render.mjs';
import { posts } from '../blog/posts/_all.mjs';

const recents = posts.slice(0, 4);

const hero = `
<section class="hero">
  <div class="hero__inner">
    <div>
      <p class="hero__eyebrow">Spécialistes — processionnaires uniquement</p>
      <h1>Chenilles processionnaires : traitement et prévention</h1>
      <p class="hero__lead">Nous ne traitons que la chenille processionnaire du pin et la chenille
      processionnaire du chêne, en Île-de-France. Identification du nid, échenillage, piégeage,
      traitement biologique et suivi d'une saison à l'autre.</p>
      <p class="hero__actions">
        <a class="btn btn--accent" href="${site.phoneHref}" data-cta="tel" data-cta-zone="hero">Parler à un spécialiste — ${site.phoneDisplay}</a>
        <a class="btn btn--outline-light" href="/contact/" data-cta="form" data-cta-zone="hero">Faire identifier un nid</a>
      </p>
      <ul class="hero__points">
        <li>Intervention sur les huit départements franciliens</li>
        <li>Photo d'un nid ou d'un arbre douteux examinée avant déplacement</li>
        <li>Particuliers, copropriétés, entreprises, écoles et collectivités</li>
      </ul>
    </div>
    <div class="hero__media">
      <img src="/assets/img/hero-processionnaires-idf.svg" width="960" height="660" fetchpriority="high"
           alt="Un pin portant un nid soyeux en bout de branche et un chêne portant un nid plat sur le tronc, avec une procession de chenilles au sol devant une maison">
    </div>
  </div>
</section>

<section class="strip">
  <div class="strip__inner">
    <p><strong>Deux espèces</strong>Processionnaire du pin et processionnaire du chêne</p>
    <p><strong>Quatre méthodes</strong>Échenillage, piégeage, traitement biologique, surveillance</p>
    <p><strong>Toute l'année</strong>Chaque saison appelle une méthode différente</p>
    <p><strong>8 départements</strong>75, 77, 78, 91, 92, 93, 94, 95</p>
  </div>
</section>`;

const body = `
${hero}

<section class="section prose" id="danger" aria-labelledby="danger-t">
  <h2 id="danger-t">Pourquoi une chenille processionnaire n'est pas une chenille comme une autre</h2>
  ${keyAnswer(`<p>Le danger ne vient pas d'une piqûre ni d'une morsure, mais des <strong>poils urticants
  microscopiques</strong> que la chenille libère dès son troisième stade larvaire. Ces poils se détachent
  par milliers, volent avec le vent, se fixent sur la peau, les yeux et les voies respiratoires, et restent
  actifs dans un nid abandonné ou au sol pendant des mois.</p>`)}
  <p>Concrètement, il n'est pas nécessaire de toucher une chenille pour réagir. Tondre sous un pin infesté,
  souffler des feuilles au pied d'un chêne porteur d'un nid, ou simplement rester assis sous l'arbre un jour
  de vent suffit à provoquer des démangeaisons, des plaques rouges, une irritation des yeux ou de la gorge.
  C'est ce qui rend ces chenilles particulièrement problématiques dans un jardin, une cour d'école, une
  résidence ou un parc public.</p>
  <p>Les deux espèces sont inscrites depuis 2022 sur la liste nationale des espèces animales nuisibles à la
  santé humaine (décret n° 2022-1124 du 5 août 2022), ce qui donne aux préfets et aux maires un cadre pour
  organiser la lutte à l'échelle d'une commune ou d'un quartier.</p>
  <ul class="plain">
    <li><strong>Humains</strong> — réactions cutanées, oculaires et respiratoires ; les enfants sont plus exposés parce qu'ils jouent au sol.</li>
    <li><strong>Chiens</strong> — le contact avec la truffe ou la langue est une urgence vétérinaire réelle.</li>
    <li><strong>Chats et chevaux</strong> — moins souvent touchés mais avec des atteintes buccales et oculaires possibles.</li>
    <li><strong>Arbres</strong> — défoliation répétée qui affaiblit le pin ou le chêne sans le tuer immédiatement.</li>
  </ul>
  <p><a href="/chenilles-processionnaires-danger/">Comprendre en détail les dangers des poils urticants</a></p>
</section>

<section class="section prose" id="interventions" aria-labelledby="interventions-t">
  <h2 id="interventions-t">Nos interventions</h2>
  <p>Une intervention utile commence par une identification correcte : l'espèce, le stade des chenilles et la
  saison déterminent entièrement la méthode. Un nid de pin en février ne se traite pas comme un nid de chêne
  en mai.</p>
  ${cards([
    { title: 'Identification', url: '/identifier-nid-chenilles-processionnaires/',
      text: "Confirmer qu'il s'agit bien d'un nid de processionnaires — et pas d'une toile d'hyponomeute, d'un gui ou d'un nid d'oiseau — avant toute opération." },
    { title: 'Échenillage', url: '/echenillage/',
      text: "Retrait mécanique du nid avec confinement immédiat, à la perche ou en nacelle selon la hauteur." },
    { title: 'Destruction de nid', url: '/destruction-nid-chenilles-processionnaires/',
      text: "Évacuation et destruction du nid et de son contenu : les poils restent urticants longtemps après." },
    { title: 'Piégeage', url: '/piegeage-chenilles-processionnaires/',
      text: "Collier sur le tronc pour intercepter la descente du pin, piège à phéromone pour suivre le vol estival." },
    { title: 'Traitement préventif', url: '/traitement-preventif/',
      text: "Traitement biologique sur jeunes larves, pose de nichoirs, plan de surveillance pluriannuel." },
    { title: 'Traitement curatif', url: '/traitement-curatif/',
      text: "Réponse à une infestation déjà installée, avec sécurisation immédiate de la zone fréquentée." }
  ], 'cards--3')}
  <p><a href="/traitement-chenilles-processionnaires/">Vue d'ensemble des traitements et de leur calendrier</a></p>
</section>

<section class="section prose" id="pin" aria-labelledby="pin-t">
  <h2 id="pin-t">La processionnaire du pin</h2>
  <p><em>Thaumetopoea pityocampa</em> s'attaque aux pins — sylvestre, noir, maritime — et aux cèdres.
  Son nid d'hiver est spectaculaire : une poche de soie blanche, dense et opaque, accrochée en bout de
  rameau, presque toujours du côté le plus ensoleillé de l'arbre. C'est le nid que l'on repère de loin
  en décembre, quand le pin a l'air de porter des flocons.</p>
  <p>Son cycle explique tout le reste. Les papillons volent en été, les chenilles éclosent à la fin de
  l'été, grossissent à l'automne, passent l'hiver groupées dans le nid, puis <strong>descendent au sol en
  file indienne à la fin de l'hiver</strong> pour s'enfouir et se transformer en chrysalides. C'est pendant
  cette descente que les accidents domestiques sont les plus fréquents : la procession traverse une pelouse,
  une terrasse, une allée, à portée d'un enfant ou d'un chien.</p>
  <p><a href="/chenille-processionnaire-du-pin/">Tout sur la processionnaire du pin</a> ·
     <a href="/traitement-processionnaire-du-pin/">son traitement</a></p>
</section>

<section class="section prose" id="chene" aria-labelledby="chene-t">
  <h2 id="chene-t">La processionnaire du chêne</h2>
  <p><em>Thaumetopoea processionea</em> est l'espèce historiquement la plus présente dans les massifs
  franciliens. Elle ne fabrique pas de boule de soie : son nid est un <strong>manchon plat, grisâtre,
  plaqué contre le tronc ou une grosse charpentière</strong>, souvent à hauteur d'homme. Beaucoup de
  personnes passent devant sans le voir — jusqu'à ce que les premiers symptômes apparaissent.</p>
  <p>Son calendrier est inversé par rapport à celui du pin : les œufs passent l'hiver sur les rameaux, les
  chenilles éclosent au printemps, et le risque urticant culmine de mai à juillet, au moment précis où les
  parcs, les cours d'école et les jardins sont le plus fréquentés. Elle ne descend pas au sol : elle se
  transforme en chrysalide à l'intérieur du nid, qui reste dangereux même vide.</p>
  <p><a href="/chenille-processionnaire-du-chene/">Tout sur la processionnaire du chêne</a> ·
     <a href="/traitement-processionnaire-du-chene/">son traitement</a></p>
</section>

<section class="section prose" id="reconnaitre" aria-labelledby="reconnaitre-t">
  <h2 id="reconnaitre-t">Comment reconnaître une infestation</h2>
  ${keyAnswer(`<p>Trois signaux suffisent le plus souvent : un <strong>amas de soie blanche ou grise</strong> sur
  l'arbre, des <strong>branches dégarnies</strong> alors que le reste du feuillage est intact, et une
  <strong>file de chenilles</strong> au sol ou sur le tronc. Un seul de ces signaux justifie déjà de ne plus
  laisser jouer d'enfants ni circuler de chien sous l'arbre.</p>`, 'Réponse courte')}
  ${table(
    ['Signe observé', 'Sur pin', 'Sur chêne'],
    [
      ['Nid de soie', "Boule blanche en bout de rameau, visible de loin l'hiver", 'Plaque grise aplatie contre le tronc, souvent au printemps'],
      ['Feuillage', 'Aiguilles rousses puis rameaux nus autour du nid', 'Feuilles grignotées, houppier clairsemé en mai-juin'],
      ['Sol', "File de chenilles, aiguilles et déjections au pied de l'arbre", 'Poils et mues accumulés au pied du tronc'],
      ['Période la plus parlante', 'Novembre à mars', 'Avril à juillet']
    ],
    "Repères d'identification selon l'arbre concerné")}
  <p><a href="/identifier-chenilles-processionnaires/">Identifier une chenille processionnaire</a> ·
     <a href="/identifier-nid-chenilles-processionnaires/">Identifier un nid</a></p>
</section>

<section class="section prose" id="methodes" aria-labelledby="methodes-t">
  <h2 id="methodes-t">Nos méthodes d'intervention</h2>
  <p>Aucune méthode n'est bonne en toutes saisons. Le choix se fait sur trois critères : l'espèce, le stade
  de développement des chenilles et l'usage réel du lieu — un arbre isolé en fond de jardin ne demande pas
  la même urgence qu'un chêne au-dessus d'un préau.</p>
  ${table(
    ['Méthode', 'Quand', "Ce qu'elle règle"],
    [
      ['Échenillage mécanique', "De l'automne à la fin de l'hiver (pin), au printemps (chêne)", "Supprime le nid et les chenilles qu'il contient, immédiatement"],
      ['Traitement biologique (Btk)', 'Sur jeunes larves, à l\'automne (pin) ou au printemps (chêne)', "Réduit fortement la population avant la formation des nids"],
      ['Piégeage par collier', "Avant la descente, en hiver", "Intercepte les processions sur pin et protège le sol"],
      ['Piège à phéromone', "Pendant le vol, en été", "Mesure la pression et limite les pontes de l'année suivante"],
      ['Nichoirs et biodiversité', 'Pose hors période de nidification', "Installe une pression naturelle durable, en complément"]
    ],
    "Chaque méthode répond à un moment précis du cycle")}
  ${figure({ src: '/assets/img/cycle-annuel-processionnaires.svg', width: 960, height: 400,
    alt: "Frise comparant sur douze mois les périodes d'activité de la processionnaire du pin et de la processionnaire du chêne",
    caption: "Les fenêtres d'intervention sont courtes : c'est la raison pour laquelle un diagnostic tardif coûte une saison entière." })}
</section>

<section class="section prose" id="particuliers" aria-labelledby="particuliers-t">
  <h2 id="particuliers-t">Pour les particuliers</h2>
  <p>La demande la plus fréquente : un ou deux arbres dans un jardin, un nid repéré depuis la terrasse, et
  un chien ou des enfants qui vivent dessous. Nous regardons d'abord une photo, ce qui évite un déplacement
  inutile quand il s'agit d'un nid d'oiseau ou d'une toile d'araignée. Si l'espèce est confirmée, nous
  convenons d'une date et d'un périmètre à tenir libre pendant l'opération.</p>
  <p><a href="/particuliers/">Intervention chez les particuliers</a></p>
</section>

<section class="section prose" id="coproprietes" aria-labelledby="coproprietes-t">
  <h2 id="coproprietes-t">Pour les copropriétés</h2>
  <p>En résidence, la difficulté n'est presque jamais technique : elle est organisationnelle. Il faut informer
  les résidents, neutraliser une aire de jeux ou un parking pendant quelques heures, et disposer d'un document
  exploitable en assemblée générale. Nous travaillons avec les syndics et les conseils syndicaux sur un plan
  pluriannuel plutôt que sur des interventions d'urgence répétées.</p>
  <p><a href="/coproprietes/">Intervention en copropriété</a></p>
</section>

<section class="section prose" id="pro" aria-labelledby="pro-t">
  <h2 id="pro-t">Pour les entreprises et les collectivités</h2>
  <p>Sur un parc d'activités, un camping, un site industriel ou un patrimoine communal, l'enjeu est la
  continuité d'usage et la traçabilité. Nous cartographions les arbres sensibles, hiérarchisons les priorités
  selon la fréquentation réelle et fournissons un rapport d'intervention par arbre traité.</p>
  <p><a href="/entreprises/">Entreprises</a> · <a href="/collectivites/">Collectivités</a> ·
     <a href="/ecoles/">Écoles et crèches</a> · <a href="/espaces-verts/">Espaces verts</a></p>
</section>

<section class="section prose" id="zones" aria-labelledby="zones-t">
  <h2 id="zones-t">Zones d'intervention en Île-de-France</h2>
  <p>La pression n'est pas la même partout dans la région. Les grands massifs de chênes — Fontainebleau,
  Rambouillet, Sénart, Saint-Germain-en-Laye, Montmorency — alimentent les lisières pavillonnaires qui les
  bordent. Les pins d'ornement et les cèdres des parcs urbains, eux, concentrent la processionnaire du pin
  jusqu'au cœur de l'agglomération.</p>
</section>

<ul class="zone-grid">
  ${serviceArea.map(d => `<li class="zone">
    <p class="zone__code">${d.code}</p>
    <h3 class="zone__name"><a href="/departements/${d.slug}/">${esc(d.name)}</a></h3>
  </li>`).join('')}
</ul>

<div class="prose">
  <p><a href="/departements/">Détail des huit départements et des communes couvertes</a></p>
</div>

<section class="section prose" id="specialiste" aria-labelledby="specialiste-t">
  <h2 id="specialiste-t">Pourquoi faire appel à un spécialiste</h2>
  <p>Ce n'est pas une question de difficulté technique : c'est une question de poils. Un nid décroché
  maladroitement, arrosé au jet ou brûlé libère d'un coup des centaines de milliers de poils urticants dans
  l'air ambiant — et dans le jardin du voisin. Les accidents les plus sérieux que l'on nous rapporte
  surviennent presque toujours après une tentative de retrait personnelle.</p>
  <ul class="plain">
    <li><strong>Équipement</strong> — combinaison intégrale, masque filtrant, lunettes fermées, gants ; le matériel est traité après chaque chantier.</li>
    <li><strong>Confinement</strong> — le nid est ensaché sur place, jamais laissé au sol ni jeté aux ordures vertes.</li>
    <li><strong>Choix de la méthode</strong> — une intervention au mauvais moment ne fait que déplacer le problème d'une saison.</li>
    <li><strong>Suite</strong> — un arbre infesté une année l'est presque toujours l'année suivante si rien n'est mis en place.</li>
  </ul>
  ${cards([
    { title: 'Ce que nous faisons', text: "Identifier l'espèce, choisir la méthode adaptée à la saison, sécuriser la zone, évacuer et détruire, puis proposer un suivi." },
    { title: 'Ce que nous ne faisons pas', text: "Nous ne traitons ni rats, ni cafards, ni punaises de lit. Une seule famille d'organismes, deux espèces, toute l'année." }
  ])}
</section>

${faqBlock([
  { q: "Quelle est la différence entre la processionnaire du pin et celle du chêne ?",
    a: `<p>L'arbre hôte et le calendrier. La processionnaire du pin vit sur pins et cèdres, construit une boule
    de soie blanche en bout de branche et descend au sol en procession à la fin de l'hiver. La processionnaire
    du chêne vit sur chênes, construit un nid plat contre le tronc, est active au printemps et ne descend pas :
    elle se transforme en chrysalide dans le nid. <a href="/chenilles-processionnaires/">Comparaison détaillée</a>.</p>` },
  { q: "Peut-on toucher une chenille processionnaire ?",
    a: `<p>Non. À partir du troisième stade larvaire, elle porte des milliers de poils urticants qui se détachent
    au moindre contact ou courant d'air. Il n'est même pas nécessaire de la toucher : passer la tondeuse sous un
    arbre infesté suffit à provoquer des réactions cutanées.</p>` },
  { q: "Mon chien a léché une chenille, que faire ?",
    a: `<p>Il s'agit d'une urgence vétérinaire. Rincez abondamment la gueule à l'eau claire, sans frotter, et
    contactez immédiatement un vétérinaire ou une clinique d'urgence. N'attendez pas l'apparition des symptômes.
    <a href="/chenilles-processionnaires-chien/">Détail de la conduite à tenir</a>.</p>` },
  { q: "Quand faut-il intervenir ?",
    a: `<p>Pour le pin, de l'automne à la fin de l'hiver, avant la descente des chenilles. Pour le chêne, au
    printemps, sur larves encore jeunes. Un nid repéré hors de ces fenêtres se traite quand même, mais la méthode
    change. <a href="/traitement-chenilles-processionnaires/">Voir le calendrier complet</a>.</p>` },
  { q: "Combien de temps dure une intervention ?",
    a: `<p>Pour un jardin de particulier avec un à trois arbres, comptez généralement une demi-journée sur place,
    accès et sécurisation compris. Un patrimoine arboré de copropriété ou de commune se traite par campagne, sur
    plusieurs passages.</p>` },
  { q: "Intervenez-vous en dehors de l'Île-de-France ?",
    a: `<p>Non. Nous couvrons uniquement les huit départements franciliens, ce qui nous permet de connaître les
    massifs, les essences plantées et les périodes d'activité locales.
    <a href="/departements/">Voir les zones</a>.</p>` }
], 'Questions fréquentes')}

<section class="section prose" id="articles" aria-labelledby="articles-t">
  <h2 id="articles-t">Articles récents</h2>
  <ul class="post-list">
    ${recents.map(p => `<li class="post">
      <a class="post__cat" href="/blog/${p.category}/">${esc(p.categoryName)}</a>
      <h3 class="post__title"><a href="/blog/${p.category}/${p.slug}/">${esc(p.h1)}</a></h3>
      <p class="post__excerpt">${esc(p.excerpt)}</p>
    </li>`).join('')}
  </ul>
  <p><a href="/blog/">Tous les articles du blog</a></p>
</section>

${cta({
  title: "Un nid repéré ? Faites-le identifier avant de faire quoi que ce soit",
  text: `Envoyez-nous une photo de l'arbre et du nid : dans la plupart des cas, nous vous disons dès l'échange
  s'il s'agit d'une processionnaire, de quelle espèce, et si la situation appelle une intervention rapide ou
  peut attendre la bonne fenêtre de traitement.`,
  primary: 'Appeler un spécialiste'
})}
`;

export default {
  url: '/',
  title: 'Chenilles processionnaires : traitement et prévention en Île-de-France',
  description: "Spécialiste des chenilles processionnaires du pin et du chêne en Île-de-France : identification, échenillage, piégeage, destruction de nid et prévention. Conseil au 07 56 82 27 85.",
  h1: 'Chenilles processionnaires : traitement et prévention',
  trail: [{ name: 'Accueil', url: '/' }],
  primaryImage: '/assets/img/hero-processionnaires-idf.svg',
  priority: '1.0',
  changefreq: 'weekly',
  service: {
    name: 'Traitement des chenilles processionnaires',
    type: 'Lutte contre les chenilles processionnaires',
    description: "Identification, échenillage, piégeage, traitement biologique et prévention des chenilles processionnaires du pin et du chêne en Île-de-France."
  },
  faq: [
    { q: "Quelle est la différence entre la processionnaire du pin et celle du chêne ?",
      a: "La processionnaire du pin vit sur pins et cèdres, construit une boule de soie blanche en bout de branche et descend au sol en procession à la fin de l'hiver. La processionnaire du chêne vit sur chênes, construit un nid plat contre le tronc, est active au printemps et se transforme en chrysalide dans le nid sans descendre au sol." },
    { q: "Peut-on toucher une chenille processionnaire ?",
      a: "Non. À partir du troisième stade larvaire, elle porte des milliers de poils urticants qui se détachent au moindre contact ou courant d'air. Passer la tondeuse sous un arbre infesté suffit à provoquer des réactions cutanées." },
    { q: "Mon chien a léché une chenille, que faire ?",
      a: "Il s'agit d'une urgence vétérinaire. Rincez abondamment la gueule à l'eau claire, sans frotter, et contactez immédiatement un vétérinaire ou une clinique d'urgence, sans attendre l'apparition des symptômes." },
    { q: "Quand faut-il intervenir ?",
      a: "Pour le pin, de l'automne à la fin de l'hiver, avant la descente des chenilles. Pour le chêne, au printemps, sur larves encore jeunes. Un nid repéré hors de ces fenêtres se traite quand même, mais la méthode change." },
    { q: "Combien de temps dure une intervention ?",
      a: "Pour un jardin de particulier avec un à trois arbres, comptez généralement une demi-journée sur place, accès et sécurisation compris. Un patrimoine arboré de copropriété ou de commune se traite par campagne, sur plusieurs passages." },
    { q: "Intervenez-vous en dehors de l'Île-de-France ?",
      a: "Non. Nous couvrons uniquement les huit départements franciliens : Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et Val-d'Oise." }
  ],
  body
};
