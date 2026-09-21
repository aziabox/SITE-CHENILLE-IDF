import { standardPage } from '../../lib/layout.mjs';
import { esc, figure, table, note } from '../../lib/render.mjs';
import { serviceArea } from '../../lib/site.mjs';
import { villesOf } from '../villes/_villes.mjs';

const BLURBS = {
  '75': "Bois de Vincennes et de Boulogne, parcs et cimetières plantés : chêne en périphérie, cèdres et pins d'ornement en cœur de ville.",
  '77': "Le seul département francilien où les deux espèces cohabitent largement, entre les pins du massif de Fontainebleau et les chênaies de Brie.",
  '78': "Rambouillet, Saint-Germain-en-Laye, Marly : de grandes chênaies domaniales bordées de communes résidentielles.",
  '91': "Sols sableux du Hurepoix et du Gâtinais, forêt de Sénart : c'est ici que la processionnaire du pin est la mieux installée.",
  '92': "Parcs historiques et villas du XIXe siècle : une concentration inhabituelle de cèdres et de pins d'ornement en milieu dense.",
  '93': "Grands parcs départementaux récents et patrimoine arboré des ensembles collectifs, sur un territoire très minéral par ailleurs.",
  '94': "Entre bois de Vincennes et plateau briard, un tissu pavillonnaire dense au contact direct de massifs de chênes.",
  '95': "Coteaux de Montmorency, forêts de L'Isle-Adam et de Carnelle, Vexin : des lisières boisées très proches de l'habitat."
};

const zoneGrid = `
<ul class="zone-grid">
  ${serviceArea.map(d => {
    const v = villesOf(d.slug);
    return `<li class="zone">
      <p class="zone__code">${d.code}</p>
      <h3 class="zone__name"><a href="/departements/${d.slug}/">${esc(d.name)}</a></h3>
      <p class="zone__text">${esc(BLURBS[d.code])}</p>
      ${v.length ? `<p class="zone__cities">${v.map(x => `<a href="${x.url}">${esc(x.name)}</a>`).join(' · ')}</p>` : ''}
    </li>`;
  }).join('')}
</ul>`;


export default standardPage({
  url: '/departements/',
  title: "Chenilles processionnaires en Île-de-France : zones d'intervention",
  description: "Nos zones d'intervention contre les chenilles processionnaires : les huit départements franciliens, avec la situation propre à chacun.",
  h1: "Zones d'intervention en Île-de-France",
  trail: [{ name: 'Accueil', url: '/' }, { name: "Zones d'intervention", url: '/departements/' }],
  datePublished: '2026-04-16',
  dateModified: '2026-09-16',
  priority: '0.8',
  primaryImage: '/assets/img/carte-idf-departements.svg',
  itemList: {
    name: "Départements d'intervention",
    items: serviceArea.map(d => ({ name: d.name, url: `/departements/${d.slug}/` }))
  },
  lead: `Nous intervenons sur les huit départements franciliens, et uniquement sur eux. Ce choix n'est pas
  commercial : il tient au fait que la pression, les essences concernées et le calendrier diffèrent d'un
  secteur à l'autre de la région, et qu'on ne traite pas un cèdre de parc parisien comme un chêne de lisière
  en Seine-et-Marne.`,
  answer: `<p>Nous couvrons <strong>Paris (75), la Seine-et-Marne (77), les Yvelines (78), l'Essonne (91),
  les Hauts-de-Seine (92), la Seine-Saint-Denis (93), le Val-de-Marne (94) et le Val-d'Oise (95)</strong>.
  La <strong>processionnaire du chêne</strong> est présente partout, avec une pression maximale autour des
  grands massifs. La <strong>processionnaire du pin</strong> est surtout installée dans le sud sableux et
  sur les pins et cèdres d'ornement des parcs urbains.</p>`,
  sections: [
    { h2: "Deux géographies superposées",
      html: `
      <p>Pour comprendre où le problème se pose en Île-de-France, il faut superposer deux cartes qui ne se
      ressemblent pas.</p>
      <p>La première est celle des <strong>grands massifs de chênes</strong> : Fontainebleau, Rambouillet,
      Sénart, Saint-Germain-en-Laye, Montmorency, L'Isle-Adam, Notre-Dame, Armainvilliers. Ils constituent un
      réservoir permanent pour la <a href="/chenille-processionnaire-du-chene/">processionnaire du chêne</a>,
      et les communes qui les bordent voient le sujet revenir chaque printemps.</p>
      <p>La seconde est celle des <strong>pins et des cèdres plantés</strong>. La
      <a href="/chenille-processionnaire-du-pin/">processionnaire du pin</a>, longtemps méridionale, a
      progressé vers le nord au fil des décennies. Elle est aujourd'hui bien installée sur les sols sableux
      du sud francilien, et elle colonise en ville les pins noirs et les cèdres d'ornement des parcs, des
      résidences et des cimetières — des arbres isolés, très ensoleillés, sans prédateur significatif.</p>
      ${figure({ src: '/assets/img/carte-idf-departements.svg', width: 760, height: 620,
        alt: "Schéma des huit départements d'Île-de-France avec Paris au centre, la petite couronne et la grande couronne",
        caption: "Schéma indicatif de la zone couverte. Chaque département fait l'objet d'une page décrivant sa situation propre." })}` },

    { h2: "Choisir votre département",
      toc: false,
      html: zoneGrid + `
      <p style="margin-top:1.25rem">Chaque page départementale décrit les massifs et les essences
      concernés, les secteurs où nous intervenons le plus, et les particularités locales qui changent
      quelque chose à la méthode ou au calendrier.</p>` },

    { h2: "Ce qui change d'un département à l'autre",
      html: `
      ${table(
        ['Facteur local', 'Ce qu\'il change concrètement'],
        [
          ['Proximité d\'un massif', "Recolonisation annuelle probable : on raisonne en surveillance plutôt qu'en éradication"],
          ['Nature du sol', "Les sols sableux du sud favorisent l'enfouissement des chrysalides de processionnaire du pin"],
          ['Densité urbaine', "Accès nacelle, stationnement, horaires : le chantier se complique en zone dense"],
          ['Type d\'habitat', "Pavillonnaire, copropriété des années 60-70, grand ensemble ou village : le donneur d'ordre change"],
          ['Essences plantées', "Chênes rouges et pins noirs des lotissements d'après-guerre sont très concernés"],
          ['Altitude et exposition', "Les coteaux bien exposés avancent les dates de procession de plusieurs jours"]
        ],
        "Pourquoi une page par département, et pas un texte unique")}
      ${note(`<p>Nous ne créons pas de page pour chaque commune francilienne. Une page ville n'existe que
      lorsque nous avons quelque chose de réellement local à dire : un massif, une essence dominante, un
      contexte urbain particulier. Multiplier les pages sans contenu propre n'aide ni le lecteur, ni le
      site.</p>`, 'Sur nos pages locales')}` },

    { h2: "En dehors de l'Île-de-France",
      html: `
      <p>Nous n'intervenons pas au-delà de la région. Si vous êtes dans l'Oise, l'Eure-et-Loir, l'Aube, le
      Loiret ou l'Yonne, nous vous le dirons dès le premier échange plutôt que de vous faire perdre du
      temps.</p>
      <p>Nous pouvons en revanche vous donner par téléphone les éléments utiles : identification de
      l'espèce à partir de vos photos, fenêtre d'intervention à viser et questions à poser à l'entreprise
      que vous contacterez. Cela ne coûte rien et évite quelques erreurs courantes.</p>` }
  ],
  faq: [
    { q: "Les deux espèces sont-elles présentes partout en Île-de-France ?",
      a: `<p>La processionnaire du chêne est présente dans les huit départements, avec une intensité liée à
      la proximité des massifs. La processionnaire du pin est plus inégalement répartie : bien installée
      dans le sud sableux, plus ponctuelle ailleurs, où elle suit les plantations de pins et de cèdres.</p>` },
    { q: "Intervenez-vous à Paris intra-muros ?",
      a: `<p>Oui. Les contraintes y sont surtout logistiques — accès, stationnement, horaires, hauteur des
      arbres de parc. Voir <a href="/departements/75-paris/">la page consacrée à Paris</a>.</p>` },
    { q: "Pourquoi ne pas avoir une page par commune ?",
      a: `<p>Parce que la plupart des communes ne présentent pas de particularité justifiant un contenu
      distinct. Une page qui se contenterait de remplacer un nom de ville par un autre n'apporterait rien
      au lecteur. Nous n'en créons que lorsqu'il y a une réalité locale à décrire.</p>` },
    { q: "Le calendrier d'intervention est-il le même dans toute la région ?",
      a: `<p>À quelques jours près. Les coteaux bien exposés et les secteurs urbains, plus chauds, voient
      les processions démarrer un peu plus tôt que les plateaux. L'écart reste faible au regard de la
      variabilité d'une année à l'autre.</p>` },
    { q: "Pouvez-vous intervenir sur plusieurs sites d'un même gestionnaire ?",
      a: `<p>Oui, et c'est le format le plus efficace pour un bailleur, une commune ou un groupe :
      inventaire global, campagne coordonnée et compte rendu par site. Voir
      <a href="/collectivites/">collectivités</a> et <a href="/entreprises/">entreprises</a>.</p>` }
  ],
  cta: {
    title: "Indiquez votre commune, nous vous dirons ce qui s'y passe",
    text: `Selon le secteur, l'espèce probable, la saison utile et le degré d'urgence ne sont pas les mêmes.
    Donnez-nous la commune et ce que vous observez.`,
    primary: 'Demander une intervention'
  },
  related: [
    { url: '/chenilles-processionnaires/', label: 'Les deux espèces', hint: 'Comprendre ce qui est présent chez vous' },
    { url: '/traitement-chenilles-processionnaires/', label: 'Traitements', hint: 'Méthodes et calendrier' },
    { url: '/particuliers/', label: 'Particuliers', hint: 'Intervention dans un jardin' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Patrimoine arboré communal' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Parties communes plantées' },
    { url: '/contact/', label: 'Contact', hint: 'Envoyer des photos' }
  ]
});
