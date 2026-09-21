import { standardPage } from '../../lib/layout.mjs';
import { note, table, steps } from '../../lib/render.mjs';

export default standardPage({
  url: '/traitement-preventif/',
  title: 'Traitement préventif contre les chenilles processionnaires',
  description: "Empêcher l'installation d'une colonie : traitement biologique sur jeunes larves, nichoirs à mésanges, surveillance annuelle et plan pluriannuel pour un jardin ou un patrimoine arboré.",
  h1: 'Traitement préventif : agir avant que le nid n\'existe',
  trail: [{ name: 'Accueil', url: '/' }, { name: 'Prévention', url: '/traitement-preventif/' }],
  datePublished: '2026-03-10',
  dateModified: '2026-09-06',
  service: {
    name: 'Traitement préventif des chenilles processionnaires',
    type: 'Prévention et surveillance',
    description: "Traitement biologique sur jeunes larves, dispositifs de piégeage, aménagements favorables aux prédateurs et surveillance annuelle des arbres à risque, en Île-de-France."
  },
  lead: `La prévention n'a rien d'une précaution vague : c'est une série d'actions datées, sur des arbres
  identifiés, avec un objectif mesurable — qu'aucune colonie ne parvienne à constituer un nid.`,
  answer: `<p>Prévenir une infestation repose sur quatre leviers : un <strong>traitement biologique</strong>
  (<em>Bacillus thuringiensis</em>) appliqué sur les jeunes larves avant qu'elles ne deviennent urticantes,
  le <strong>piégeage</strong> pour réduire la pression, des <strong>aménagements favorables aux
  prédateurs naturels</strong> (mésanges, chauves-souris, huppe), et une <strong>surveillance annuelle</strong>
  des arbres à risque. Le préventif coûte moins cher et perturbe moins l'usage du lieu que le curatif.</p>`,
  sections: [
    { h2: 'Quels arbres relèvent du préventif',
      html: `
      <p>Le préventif ne s'applique pas à tout un jardin ni à tout un patrimoine : il vise des arbres
      identifiés comme à risque. Trois critères suffisent à établir la liste.</p>
      <ul class="plain">
        <li><strong>Historique</strong> — un arbre infesté l'an dernier est le premier candidat de l'année suivante.</li>
        <li><strong>Exposition</strong> — pin ou cèdre isolé, bien ensoleillé, en lisière ou en bordure de pelouse ; chêne en limite de massif.</li>
        <li><strong>Usage du sol en dessous</strong> — aire de jeux, terrasse, cheminement, parcours canin, préau : ce qui transformerait une petite infestation en problème immédiat.</li>
      </ul>
      ${note(`<p>Sur un patrimoine arboré — commune, résidence, site d'entreprise — cette liste prend la forme
      d'un inventaire cartographié. C'est le document qui permet ensuite de décider chaque année, sans
      repartir de zéro.</p>`, 'Pour les gestionnaires')}` },

    { h2: 'Le traitement biologique sur jeunes larves',
      tocLabel: 'Traitement biologique',
      html: `
      <p><em>Bacillus thuringiensis</em> var. <em>kurstaki</em>, ou Btk, est une bactérie qui produit des
      cristaux toxiques pour les larves de lépidoptères qui les ingèrent. C'est un produit de biocontrôle :
      il agit par ingestion, pas par contact, et n'a pas d'effet sur les mammifères, les oiseaux ni les
      abeilles adultes.</p>
      <p>Son efficacité dépend entièrement du moment d'application. Il faut que les chenilles soient
      <strong>jeunes</strong> — premiers stades — et qu'elles <strong>mangent activement</strong>.</p>
      ${table(
        ['Espèce', 'Fenêtre d\'application', 'Conditions requises'],
        [
          ['Processionnaire du pin', 'Septembre à octobre, après éclosion', 'Températures douces, absence de pluie et de vent dans les heures suivantes'],
          ['Processionnaire du chêne', 'Avril, au débourrement des feuilles', 'Feuillage déjà déployé, larves actives, fenêtre très courte']
        ],
        'Le bon moment fait toute la différence')}
      <p>Deux conséquences pratiques. D'abord, un traitement biologique décidé en décembre sur un nid formé
      n'a aucun intérêt : les chenilles sont grandes, protégées par la soie, et consomment peu. Ensuite, la
      date exacte se cale sur l'observation locale, pas sur le calendrier : c'est là que le
      <a href="/piegeage-chenilles-processionnaires/">piège à phéromone</a> de l'été précédent devient utile,
      puisqu'il indique quand le vol a eu lieu.</p>
      ${note(`<p>Le Btk n'est pas sélectif de la seule processionnaire : d'autres chenilles présentes sur
      l'arbre traité peuvent être affectées. Nous l'appliquons donc sur les arbres concernés, à la bonne
      période, et jamais en couverture générale d'un espace vert.</p>`, 'Honnêteté sur les limites')}` },

    { h2: 'Favoriser les prédateurs naturels',
      html: `
      <p>Aucune espèce ne fait disparaître une population de processionnaires à elle seule, mais l'ensemble
      des prédateurs exerce une pression réelle, et surtout durable. C'est la partie la moins coûteuse d'un
      plan de prévention.</p>
      <ul class="plain">
        <li><strong>Mésanges</strong> — les mésanges charbonnières et bleues consomment les chenilles, y compris urticantes. Un nichoir par arbre sensible, posé hors période de nidification, orienté à l'est ou au sud-est, hors de portée des chats.</li>
        <li><strong>Chauves-souris</strong> — elles chassent les papillons adultes la nuit, pendant la période de vol. Des gîtes posés en hauteur, à l'écart des éclairages.</li>
        <li><strong>Huppe fasciée</strong> — elle consomme les chrysalides enfouies dans le sol. Sa présence dépend du milieu : prairies, sols ouverts non travaillés.</li>
        <li><strong>Coucou, certains coléoptères, parasitoïdes</strong> — prédation et parasitisme naturels, favorisés par une diversité végétale et une réduction des traitements généralistes.</li>
      </ul>
      <p>Une remarque importante pour les collectivités : l'éclairage nocturne des parcs réduit l'efficacité
      des chauves-souris et attire les papillons. Une réflexion sur l'extinction partielle a un effet
      indirect mais réel.</p>` },

    { h2: 'Un plan préventif sur trois ans',
      tocLabel: 'Plan pluriannuel',
      html: `
      ${steps([
        { title: 'Année 1 — inventaire et traitement de l\'existant', body: `<p>Recensement des arbres à risque,
          <a href="/echenillage/">échenillage</a> des nids présents, pose des premiers nichoirs, installation
          d'un piège à phéromone de référence.</p>` },
        { title: 'Année 2 — traitement ciblé et mesure', body: `<p>Traitement biologique sur les arbres qui étaient
          infestés, relevé des captures, contrôle visuel en automne et au printemps selon l'espèce. Ajustement
          de la liste d'arbres.</p>` },
        { title: 'Année 3 — surveillance allégée', body: `<p>Si la pression a baissé, le traitement se limite aux
          arbres encore concernés. La surveillance devient une visite annuelle courte, à la bonne saison.</p>` }
      ])}
      <p>Ce format est celui que nous proposons aux <a href="/coproprietes/">copropriétés</a>, aux
      <a href="/collectivites/">collectivités</a> et aux gestionnaires d'<a href="/espaces-verts/">espaces
      verts</a>, parce qu'il permet d'inscrire une ligne budgétaire stable plutôt que de subir des
      interventions d'urgence imprévisibles.</p>` },

    { h2: 'Ce qu\'un particulier peut faire seul',
      html: `
      <p>Sans matériel professionnel, plusieurs actions sont à la fois simples et utiles.</p>
      <ol>
        <li><strong>Regarder ses arbres deux fois par an</strong> — en novembre pour les pins, en mai pour les chênes. Cinq minutes suffisent.</li>
        <li><strong>Poser un nichoir à mésanges</strong> — en automne ou en hiver, à trois mètres du sol, entrée à l'opposé des vents dominants.</li>
        <li><strong>Ne pas planter un pin d'ornement isolé en plein soleil</strong> si le secteur est déjà concerné ; privilégier la diversité d'essences.</li>
        <li><strong>Signaler tôt</strong> — un nid repéré en novembre se traite dans de bien meilleures conditions que le même nid en mars.</li>
      </ol>
      <p>Ce qu'un particulier ne devrait pas faire seul : retirer un nid, pulvériser un produit en hauteur,
      ou brûler quoi que ce soit. Voir <a href="/blog/conseils/erreurs-a-eviter-face-a-un-nid/">les erreurs
      à éviter</a>.</p>` }
  ],
  faq: [
    { q: "Le traitement préventif est-il moins cher que le curatif ?",
      a: `<p>En règle générale oui, parce qu'il ne mobilise ni nacelle ni périmètre de sécurité étendu, et
      qu'il traite plusieurs arbres en une passe. La différence se mesure surtout dans la durée : trois ans
      de préventif coûtent souvent moins qu'une seule campagne d'urgence sur un site public.</p>` },
    { q: "Peut-on prévenir une infestation sans aucun produit ?",
      a: `<p>Partiellement. Le piégeage, les nichoirs et la surveillance réduisent la pression sans
      pulvérisation. Sur un site où l'exposition humaine est forte — école, aire de jeux — ces mesures seules
      ne suffisent généralement pas à garantir l'absence de nid.</p>` },
    { q: "Les nichoirs à mésanges fonctionnent-ils vraiment ?",
      a: `<p>Ils ont un effet documenté sur la prédation des chenilles, à condition d'être en nombre suffisant,
      bien posés et occupés. Ce n'est pas une solution instantanée : l'effet se construit sur plusieurs
      saisons et complète les autres mesures plutôt qu'il ne les remplace.</p>` },
    { q: "Faut-il traiter préventivement chaque année ?",
      a: `<p>Non. Après une à deux saisons, la pression baisse souvent au point que la surveillance suffit.
      Nous préférons ajuster chaque année sur la base des observations plutôt que reconduire un traitement
      systématique.</p>` },
    { q: "Quand faut-il décider d'un traitement préventif ?",
      a: `<p>Pour le pin, la décision se prend en été, pour une application en septembre-octobre. Pour le
      chêne, elle se prend en hiver, pour une application en avril. Décider en pleine saison d'activité,
      c'est déjà du curatif.</p>` }
  ],
  cta: {
    title: "Anticiper la prochaine saison plutôt que subir la suivante",
    text: `Si vos arbres ont été infestés cette année, c'est maintenant que se prépare la campagne préventive.
    Nous établissons la liste des arbres concernés et les dates utiles.`,
    primary: 'Préparer une campagne préventive'
  },
  related: [
    { url: '/traitement-curatif/', label: 'Traitement curatif', hint: 'Quand la colonie est déjà là' },
    { url: '/piegeage-chenilles-processionnaires/', label: 'Piégeage', hint: 'Mesurer et réduire la pression' },
    { url: '/coproprietes/', label: 'Copropriétés', hint: 'Inscrire la prévention au budget' },
    { url: '/collectivites/', label: 'Collectivités', hint: 'Plan pluriannuel sur patrimoine arboré' },
    { url: '/blog/prevention/eviter-le-retour-des-processionnaires/', label: 'Éviter le retour', hint: 'Article détaillé' },
    { url: '/blog/prevention/guide-complet-prevention/', label: 'Guide complet de prévention', hint: 'Toutes les mesures, par ordre d\'efficacité' }
  ]
});
