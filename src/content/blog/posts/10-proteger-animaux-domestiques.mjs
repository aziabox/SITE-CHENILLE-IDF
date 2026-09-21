import { table, note, safety } from '../../../lib/render.mjs';

export default {
  slug: 'proteger-animaux-domestiques',
  category: 'animaux',
  title: 'Protéger ses animaux des chenilles processionnaires',
  description: "Chiens, chats, chevaux, NAC : niveaux d'exposition, mesures de protection selon l'animal et aménagements du terrain pour limiter le risque.",
  h1: 'Comment protéger ses animaux des chenilles processionnaires',
  excerpt: "Chaque espèce s'expose à sa manière : le chien par la gueule, le chat par les pattes et le toilettage, le cheval en pâturant. Les mesures diffèrent en conséquence.",
  datePublished: '2026-06-28',
  dateModified: '2026-09-19',
  lead: `On ne protège pas un chat comme un chien : l'un se gère par l'environnement, l'autre aussi par le
  comportement. Voici ce qui fonctionne réellement selon l'animal et selon le terrain.`,
  answer: `<p>La protection repose sur trois niveaux : <strong>supprimer la source</strong> (retrait des
  nids des pins et cèdres du terrain, avant la période de descente), <strong>protéger le sol</strong>
  (collier de piégeage, mise en défens du pied des arbres), et <strong>adapter les usages</strong> (laisse
  en promenade de janvier à mars, déplacement des gamelles et couchages, report de la tonte).</p>`,
  sections: [
    { h2: "Qui s'expose, et comment",
      html: `
      ${table(
        ['Animal', "Voie d'exposition principale", 'Niveau de risque'],
        [
          ['Chien', 'Truffe et gueule, au contact direct de la procession au sol', 'Élevé — urgence vétérinaire'],
          ['Chat', 'Coussinets puis toilettage ; yeux par frottement', 'Modéré, souvent diagnostiqué tardivement'],
          ['Cheval', 'Muqueuses buccales en pâturant sous un arbre infesté', 'Réel, atteintes buccales possibles'],
          ['Lapin, cochon d\'Inde en extérieur', 'Contact avec herbe ou litière contaminée', 'Faible mais possible'],
          ['Poules et volailles', 'Picorage au sol sous un arbre porteur', 'Peu documenté, prudence recommandée']
        ],
        'Le mode de vie détermine le risque plus que la sensibilité')}
      ${safety(`<p>Quelle que soit l'espèce, tout contact suspect justifie un appel rapide au vétérinaire.
      Ne donnez aucun médicament de votre propre initiative. Ces informations sont générales et ne
      remplacent pas l'examen d'un vétérinaire.</p>`)}` },

    { h2: 'Le chien : agir sur le sol et la laisse',
      html: `
      <p>C'est l'animal le plus exposé, parce qu'il rencontre la procession au niveau exact où elle circule.
      Deux leviers :</p>
      <ul class="plain">
        <li><strong>Sur le terrain</strong> — faire retirer les nids entre novembre et février, poser un <a href="/piegeage-chenilles-processionnaires/">collier de piégeage</a> si les nids sont inaccessibles, clôturer le pied des arbres à risque pendant la saison, et suspendre la tonte sous un pin infesté.</li>
        <li><strong>En promenade</strong> — laisse de janvier à mars sur les allées sableuses et ensoleillées, regard sur le sol, contournement des pieds de pins porteurs.</li>
      </ul>
      ${note(`<p>Un détail qui compte : le sac du collier de piégeage contient des chenilles vivantes et
      urticantes. Il doit être placé hors de portée du chien. C'est un point que nous vérifions
      systématiquement à la pose lorsqu'un animal a accès au pied de l'arbre.</p>`)}
      <p><a href="/chenilles-processionnaires-chien/">Voir la page dédiée aux chiens</a>.</p>` },

    { h2: 'Le chat : tout se joue sur l\'environnement',
      html: `
      <p>On ne tient pas un chat en laisse et on ne contrôle pas son parcours. La prévention porte donc
      entièrement sur le terrain.</p>
      <ul class="plain">
        <li><strong>Faire retirer les nids</strong> présents sur la parcelle avant la saison de descente.</li>
        <li><strong>Déplacer les zones de repos</strong> — coussins, paniers d'extérieur, gamelles — situées sous les arbres à risque.</li>
        <li><strong>Surveiller les endroits chauds et abrités</strong> au pied des pins, que les chats affectionnent et où les chenilles cherchent à s'enfouir.</li>
        <li><strong>Rentrer le chat</strong> pendant une intervention et jusqu'à la fin de la retombée des poils.</li>
      </ul>
      <p>Le diagnostic est souvent tardif chez le chat, parce que l'exposition passe par le toilettage :
      un chat qui bave, se frotte la face ou refuse de manger au printemps, avec des arbres infestés à
      proximité, mérite qu'on évoque cette piste. <a href="/chenilles-processionnaires-chat/">Voir la page
      dédiée aux chats</a>.</p>` },

    { h2: 'Chevaux et prés arborés',
      html: `
      <p>La question se pose surtout en grande couronne, dans les secteurs où les prés sont bordés ou
      ombragés de pins — le sud de la Seine-et-Marne et de l'Essonne notamment.</p>
      <p>Un cheval qui broute sous un pin infesté, ou qui traverse une zone où une procession est passée,
      peut présenter des atteintes buccales : lésions des lèvres et de la langue, salivation, difficultés à
      s'alimenter. La situation appelle un avis vétérinaire, et elle est d'autant plus pénalisante qu'un
      cheval immobilisé représente un coût réel.</p>
      <p>L'approche pratique consiste à protéger les <strong>zones de pâture</strong> plutôt que l'ensemble
      du boisement : colliers de piégeage sur les pins bordant les prés, retrait des nids accessibles, et
      mise en défens temporaire des parcelles concernées pendant la période de descente.</p>` },

    { h2: 'Aménager le terrain durablement',
      html: `
      <ol>
        <li><strong>Inventorier les arbres hôtes</strong> — pins, cèdres, chênes. Tout part de là.</li>
        <li><strong>Éloigner les usages animaux</strong> du pied de ces arbres : niche, chenil, gamelles, abreuvoirs, couchages.</li>
        <li><strong>Poser des nichoirs à mésanges</strong> — la prédation naturelle se construit sur plusieurs saisons et ne coûte presque rien.</li>
        <li><strong>Prévoir un contrôle annuel</strong> — novembre pour les conifères, mai pour les chênes.</li>
        <li><strong>Coordonner avec les voisins</strong> — la source est souvent de l'autre côté de la clôture.</li>
      </ol>
      <p><a href="/traitement-preventif/">Voir la page traitement préventif</a>.</p>` }
  ],
  faq: [
    { q: "Un chien vacciné ou en bonne santé est-il moins à risque ?",
      a: `<p>Non. Il ne s'agit ni d'une infection, ni d'une maladie : c'est une réaction mécanique et
      inflammatoire aux poils urticants. L'état de santé général ne protège pas.</p>` },
    { q: "Faut-il confiner ses animaux toute la saison ?",
      a: `<p>Rarement nécessaire si la source a été traitée. Le confinement temporaire se justifie pendant
      la période de descente lorsque des nids sont présents sur la parcelle et n'ont pas encore été
      retirés.</p>` },
    { q: "Les poils peuvent-ils être rapportés à la maison ?",
      a: `<p>Oui, dans le pelage d'un animal comme sur des vêtements. C'est un argument supplémentaire pour
      traiter la source plutôt que de gérer les conséquences.</p>` },
    { q: "Existe-t-il un produit répulsif pour protéger les animaux ?",
      a: `<p>Aucun produit appliqué sur un animal ne constitue une protection contre des poils urticants
      aéroportés. La seule prévention efficace porte sur l'environnement.</p>` }
  ],
  related: [
    { url: '/chenilles-processionnaires-chien/', label: 'Chiens', hint: "L'animal le plus exposé" },
    { url: '/chenilles-processionnaires-chat/', label: 'Chats', hint: 'Un profil différent' },
    { url: '/traitement-preventif/', label: 'Traitement préventif', hint: 'Aménager durablement' }
  ]
};
