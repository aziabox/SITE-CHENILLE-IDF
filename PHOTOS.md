# Photographies : ce qui est en place et ce qui reste à faire

## État actuel

Le site n'utilise **aucune photographie**. Les visuels sont des **illustrations
et schémas documentaires en SVG**, réalisés spécifiquement pour ce site :

| Fichier | Contenu |
|---|---|
| `hero-processionnaires-idf.svg` | Scène : pin avec nid en bout de branche, chêne avec nid plaqué au tronc, procession au sol |
| `comparaison-pin-chene.svg` | Comparatif des deux espèces : nid, arbre, calendrier, aspect |
| `cycle-annuel-processionnaires.svg` | Frise annuelle des périodes d'activité des deux espèces |
| `identifier-nid-processionnaire.svg` | Nid de processionnaire / toile d'hyponomeute / gui |
| `echenillage-schema.svg` | Coupe à la perche, confinement, équipement de protection |
| `piegeage-collier-schema.svg` | Collier étanche, gouttière, sac de collecte |
| `piege-pheromone-schema.svg` | Piège à entonnoir et capsule de phéromone |
| *(carte interactive)* | Contours réels des huit départements, générés dans `src/lib/carte-idf-data.mjs` à partir des données IGN Admin Express, et rendus en SVG inline cliquable — voir `src/lib/carte.mjs` |

Ce choix est assumé : un schéma légendé explique mieux la différence entre un nid
de pin et un nid de chêne qu'une photographie de banque d'images, et il n'expose
pas au risque d'illustrer une page avec une espèce qui n'est pas la bonne.

Les images bitmap (Open Graph 1200×630, icônes 180/192/512) sont **générées au
build** par `scripts/make-images.mjs`, écrit en Node pur.

## Photographies à produire

De vraies photos d'intervention apporteraient une preuve que les schémas ne
donnent pas. Par ordre d'utilité :

1. **Nid de processionnaire du pin** sur l'arbre, en hiver — page `/chenille-processionnaire-du-pin/`
2. **Nid de processionnaire du chêne** plaqué sur un tronc — page `/chenille-processionnaire-du-chene/`
3. **Procession au sol**, file visible — pages dangers et chiens
4. **Échenillage en cours** : opérateur en combinaison, perche télescopique — page `/echenillage/`
5. **Aspiration d'un nid sur tronc** — page `/traitement-processionnaire-du-chene/`
6. **Collier de piégeage posé**, avec sac de collecte — page `/piegeage-chenilles-processionnaires/`
7. **Piège à phéromone installé** — même page
8. **Arbre défolié** : rameaux nus autour d'un nid — page `/blog/arbres/savoir-si-un-arbre-est-infeste/`
9. **Équipement de protection** complet — page `/echenillage/`
10. **Contexte francilien** : lisière pavillonnaire, cèdre de résidence, chêne de parc — pages locales

### Règles

* **Jamais** de photo d'un autre nuisible (rat, cafard, punaise, guêpe) sur ce
  site : il est consacré à une seule famille d'organismes.
* **Jamais** de photo de banque d'images visiblement générique ou artificielle.
* Vérifier l'espèce avant publication : un nid de pin et un nid de chêne ne se
  ressemblent pas, et publier l'un pour l'autre décrédibilise immédiatement.
* Photographier à distance, avec zoom. Ne jamais s'approcher d'un nid pour la
  photo.
* Ne jamais publier de photo montrant une personne sans équipement de protection
  à proximité d'un nid.
* Flouter plaques d'immatriculation, visages de tiers et numéros de rue.
* Obtenir l'accord du client avant toute publication d'un chantier identifiable.

### Nommage et intégration

Nom de fichier descriptif, en minuscules, sans accent :

```
nid-processionnaire-pin-fevrier.jpg
echenillage-perche-telescopique.jpg
collier-piegeage-tronc-pin.jpg
```

Placer les fichiers dans `src/assets/img/`. Ils sont copiés tels quels dans
`dist/assets/img/`. Fournir de préférence une version WebP ou AVIF à côté du JPEG
et utiliser un `<picture>` si le poids le justifie.

Insertion dans une page :

```js
import { figure } from '../../lib/render.mjs';

figure({
  src: '/assets/img/nid-processionnaire-pin-fevrier.jpg',
  width: 1200, height: 800,
  alt: "Nid de soie blanche accroché en bout de branche d'un pin, entouré d'aiguilles rousses",
  caption: "Nid d'hiver photographié en février sur un pin noir, à environ six mètres du sol."
})
```

### Texte alternatif

L'`alt` décrit ce que l'on voit, en une phrase naturelle. Il ne répète pas les
mots-clés de la page. L'audit avertit si un `alt` dépasse 180 caractères ou
contient plus de deux fois le mot « processionnaire ».

À faire : `alt="Nid de soie blanche accroché en bout de branche d'un pin"`
À éviter : `alt="chenille processionnaire nid processionnaire traitement processionnaire Île-de-France"`

La légende (`caption`) apporte le contexte — lieu, saison, hauteur — que l'`alt`
n'a pas à porter.
