import { standardPage } from '../../lib/layout.mjs';
import { table, note, safety, figure } from '../../lib/render.mjs';

export default standardPage({
  url: '/identifier-chenilles-processionnaires/',
  title: 'Identifier une chenille processionnaire : critères sûrs',
  description: "Reconnaître une chenille processionnaire du pin ou du chêne : taille, couleur, poils, comportement en file, confusions fréquentes avec d'autres chenilles inoffensives.",
  h1: 'Identifier une chenille processionnaire',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Chenilles processionnaires', url: '/chenilles-processionnaires/' },
          { name: 'Identifier une chenille', url: '/identifier-chenilles-processionnaires/' }],
  datePublished: '2026-03-20',
  dateModified: '2026-09-11',
  lead: `Toutes les chenilles velues ne sont pas des processionnaires, et beaucoup de chenilles inoffensives
  se font détruire par excès de prudence. Quelques critères simples permettent de trancher sans
  s'approcher.`,
  answer: `<p>Trois critères identifient une chenille processionnaire :
  <strong>elle se déplace en file indienne continue</strong>, chaque chenille touchant celle qui la précède ;
  <strong>elle vit en colonie</strong> et n'est jamais seule ; et <strong>elle est associée à un pin, un
  cèdre ou un chêne</strong>. Une chenille velue isolée sur un rosier, un buis ou un tilleul n'est pas une
  processionnaire.</p>`,
  sections: [
    { h2: 'Le critère décisif : le comportement',
      html: `
      <p>Avant la couleur et la taille, regardez le déplacement. Les processionnaires avancent en
      <strong>file continue, tête contre abdomen</strong>, parfois sur plusieurs mètres. Ce comportement est
      si caractéristique qu'il a donné son nom à l'insecte, et aucune autre chenille de nos régions ne le
      reproduit.</p>
      <p>Second signe comportemental : elles ne sont jamais seules. Une chenille isolée peut être une
      traînarde, mais s'il n'y a ni file, ni groupe, ni nid à proximité, l'hypothèse processionnaire
      s'affaiblit nettement.</p>
      ${safety(`<p>Observez à distance, sans vous pencher au-dessus de la file et sans la photographier de
      près. Un simple courant d'air suffit à décrocher des poils. Une photo prise à un mètre cinquante, avec
      zoom, est parfaitement exploitable pour une identification.</p>`, 'Observer sans s\'exposer')}` },

    { h2: 'Aspect des deux espèces',
      html: `
      ${table(
        ['Critère', 'Processionnaire du pin', 'Processionnaire du chêne'],
        [
          ['Taille adulte', '3 à 4 cm', 'Environ 3 cm'],
          ['Couleur générale', 'Brun sombre, flancs orangés, taches rousses sur le dos', 'Gris à gris-brun, plus terne'],
          ['Marque distinctive', 'Aspect duveteux clair, tête noire', 'Bande dorsale sombre bien marquée'],
          ['Où la voir', "Sur le tronc et au sol, en file, de janvier à mars", "Sur le tronc et les branches, d'avril à juillet"],
          ['Arbre associé', 'Pin, cèdre', 'Chêne']
        ],
        'Distinguer les deux espèces à vue')}
      <p>Dans la pratique, l'arbre et la saison suffisent presque toujours à conclure : une file de
      chenilles sur un pin en février est une processionnaire du pin ; une colonie grise sur un tronc de
      chêne en juin est une processionnaire du chêne.</p>` },

    { h2: 'Les confusions les plus fréquentes',
      tocLabel: 'Ne pas confondre',
      html: `
      <p>Plusieurs chenilles velues ou grégaires déclenchent des inquiétudes injustifiées.</p>
      <ul class="plain">
        <li><strong>Le bombyx cul-brun</strong> — chenille velue, grégaire, qui vit sur les feuillus. Elle est effectivement urticante, mais ne forme pas de processions linéaires et ne fréquente ni les pins ni les grands chênes de la même façon.</li>
        <li><strong>Les hyponomeutes</strong> — chenilles jaunâtres qui tissent de vastes toiles translucides sur les fusains, les pruniers, les aubépines. Spectaculaires, totalement inoffensives.</li>
        <li><strong>La chenille de la pyrale du buis</strong> — verte à tête noire, sur buis uniquement. Aucun rapport, aucun risque urticant.</li>
        <li><strong>Les chenilles de sphinx ou de paon-du-jour</strong> — grandes, parfois épineuses d'aspect, isolées, sur des plantes basses. Inoffensives.</li>
        <li><strong>Les larves de tenthrèdes</strong> — regroupées sur une feuille, elles se cabrent ensemble quand on les dérange. Impressionnant, sans danger.</li>
      </ul>
      ${note(`<p>La règle simple : <strong>pas de pin, pas de cèdre, pas de chêne → très probablement pas une
      processionnaire</strong>. Ces insectes sont strictement liés à leurs arbres hôtes.</p>`, 'Le raccourci utile')}` },

    { h2: 'Identifier sans les voir : les indices indirects',
      tocLabel: 'Indices indirects',
      html: `
      <p>La plupart du temps, on ne voit pas les chenilles — on voit ce qu'elles laissent. Ces indices sont
      souvent plus parlants que l'insecte lui-même.</p>
      <ul class="plain">
        <li><strong>Un nid de soie</strong> — blanc et volumineux en bout de rameau de pin, gris et plat sur un tronc de chêne. <a href="/identifier-nid-chenilles-processionnaires/">Voir comment identifier un nid</a>.</li>
        <li><strong>Des rameaux dégarnis</strong> près du nid, alors que le reste de l'arbre est fourni.</li>
        <li><strong>Des déjections</strong> — petits grains sombres et réguliers accumulés au pied de l'arbre ou sur le mobilier.</li>
        <li><strong>Des mues</strong> — peaux abandonnées, blanchâtres, accrochées à l'écorce ou au sol.</li>
        <li><strong>Une trace soyeuse</strong> sur l'écorce, chemin emprunté par les processions.</li>
      </ul>
      ${figure({ src: '/assets/img/identifier-nid-processionnaire.svg', width: 960, height: 400,
        alt: "Comparaison d'un nid de processionnaire opaque, d'une toile translucide d'hyponomeute et d'une boule de gui",
        caption: "Un nid de processionnaire est opaque : on ne voit pas le rameau au travers. C'est le critère le plus rapide." })}` },

    { h2: 'Faire confirmer une identification',
      html: `
      <p>En cas de doute, l'envoi de photos règle la question dans la grande majorité des cas. Trois vues
      suffisent :</p>
      <ol>
        <li><strong>L'arbre entier</strong>, pour l'essence et la hauteur.</li>
        <li><strong>La zone suspecte</strong>, prise à distance avec zoom — nid, tronc ou file au sol.</li>
        <li><strong>Le pied de l'arbre</strong>, pour les indices de sol.</li>
      </ol>
      <p>Ajoutez la commune et la date d'observation : la saison est un élément de diagnostic à part
      entière. <a href="/contact/">Envoyer des photos</a>.</p>
      ${note(`<p>Nous ne présentons jamais une identification à distance comme une certitude. Une photo
      permet d'écarter les confusions évidentes et d'orienter la décision ; la confirmation définitive se
      fait sur place.</p>`, 'Honnêteté sur les limites')}` }
  ],
  faq: [
    { q: "Toutes les chenilles velues sont-elles urticantes ?",
      a: `<p>Non. La majorité des chenilles velues de nos jardins sont totalement inoffensives. Quelques
      espèces, dont les processionnaires et le bombyx cul-brun, portent de véritables poils urticants.</p>` },
    { q: "Une chenille seule peut-elle être une processionnaire ?",
      a: `<p>C'est possible — une traînarde séparée de sa colonie. Mais l'absence de file, de groupe et de
      nid à proximité rend l'hypothèse peu probable. L'arbre présent reste le meilleur indice.</p>` },
    { q: "À quelle distance peut-on observer sans risque ?",
      a: `<p>Restez à un mètre cinquante à deux mètres, ne vous placez pas sous le nid et ne restez pas au
      vent des chenilles. Le zoom d'un téléphone permet largement une photo exploitable à cette distance.</p>` },
    { q: "Peut-on identifier une processionnaire à partir d'un nid vide ?",
      a: `<p>Oui, la forme et l'emplacement du nid sont caractéristiques et persistent après le départ de la
      colonie. Le nid vide reste urticant : il ne doit pas être manipulé pour être examiné.</p>` },
    { q: "Les processionnaires sortent-elles la nuit ?",
      a: `<p>Elles s'alimentent principalement la nuit, ce qui explique qu'on voie souvent les dégâts sans
      jamais voir les chenilles. Les processions de descente, elles, ont lieu de jour, par temps doux.</p>` }
  ],
  cta: {
    title: "Un doute sur une chenille ou un nid ?",
    text: `Envoyez trois photos — l'arbre, la zone suspecte, le pied de l'arbre — avec la commune et la date.
    Dans la plupart des cas, cela suffit à écarter une fausse alerte ou à confirmer l'espèce.`,
    primary: 'Faire identifier'
  },
  related: [
    { url: '/identifier-nid-chenilles-processionnaires/', label: 'Identifier un nid', hint: "L'indice le plus visible" },
    { url: '/chenille-processionnaire-du-pin/', label: 'Processionnaire du pin', hint: "Aspect et comportement" },
    { url: '/chenille-processionnaire-du-chene/', label: 'Processionnaire du chêne', hint: 'Une espèce plus discrète' },
    { url: '/blog/identifier/reconnaitre-chenille-processionnaire/', label: 'Guide de reconnaissance', hint: 'Article détaillé' },
    { url: '/blog/identifier/pin-ou-chene-differences/', label: 'Pin ou chêne : différences', hint: 'Comparatif complet' },
    { url: '/contact/', label: 'Envoyer une photo', hint: 'Identification à distance' }
  ]
});
