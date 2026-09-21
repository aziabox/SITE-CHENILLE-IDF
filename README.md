# Site spécialisé — Chenilles processionnaires, Île-de-France

Site statique entièrement consacré à la **chenille processionnaire du pin**
(*Thaumetopoea pityocampa*) et à la **chenille processionnaire du chêne**
(*Thaumetopoea processionea*). Il ne traite aucun autre nuisible.

Zone d'intervention : les huit départements franciliens (75, 77, 78, 91, 92, 93, 94, 95).

---

## Démarrage

```bash
npm start         # build puis démarrage du serveur (PORT lu dans l'environnement)
npm run build     # génère ./dist uniquement
npm run serve     # sert ./dist sans rebuild
npm run audit     # audit SEO / contenu / duplication / liens / accessibilité
npm run check     # build + audit
```

**Aucune dépendance, ni de production ni de développement.** Node 20+ suffit :
le générateur, l'encodeur PNG et l'audit n'utilisent que des modules natifs.

`dist/` et `node_modules/` ne sont pas versionnés : `npm run build` régénère
l'intégralité du site en moins d'une seconde.

---

## Déploiement

Le site est **statique** : le dossier `dist/` généré par `npm run build` se suffit
à lui-même. Trois cas de figure, tous couverts par le dépôt.

### Plateforme qui lance `npm start` (Railway, Render, Clever Cloud, Heroku…)

Rien à configurer. `npm start` exécute d'abord `node build.mjs` (script `prestart`)
puis démarre un serveur HTTP natif qui écoute sur `process.env.PORT` et `0.0.0.0`.
Un `Procfile` (`web: npm start`) est fourni pour les plateformes qui le lisent.

### Hébergeur statique (Netlify, Vercel, Cloudflare Pages…)

* `netlify.toml` — commande `npm run build`, publication de `dist`, Node 20.
* `vercel.json` — même chose, avec `trailingSlash: true` pour correspondre aux
  URL canoniques du site (`/echenillage/` et non `/echenillage`).

Si la plateforme demande les réglages à la main : **commande de build**
`npm run build`, **répertoire de sortie** `dist`, **version de Node** 20 ou plus.

### Hébergement mutualisé qui déploie le dépôt tel quel (Hostinger, OVH, o2switch…)

Ces hébergeurs clonent le dépôt directement dans `public_html` **sans exécuter
de build**. Deux conséquences, traitées dans le dépôt :

* **`dist/` est versionné.** C'est volontaire : sans cela, la racine déployée ne
  contiendrait aucun `index.html`, et Apache répondrait `403 Forbidden`.
  Il faut donc lancer `npm run build` et committer `dist/` après chaque
  modification de contenu.
* **Un `.htaccess` à la racine** sert `dist/` de façon transparente, pour que
  les URL publiques restent `/echenillage/` et non `/dist/echenillage/`. Une
  requête vers `/dist/...` est redirigée en 301 vers l'URL canonique.

### Hébergement classique par FTP

Téléverser uniquement le **contenu** de `dist/` dans `public_html`. Le build y
place déjà son propre `.htaccess` (redirections 301, `ErrorDocument`, cache,
compression) et `_redirects` pour les hébergeurs qui lisent ce format. Dans ce
cas, le `.htaccess` de la racine du dépôt n'est pas utilisé.

> L'import échoue avec « dépôt ou branche introuvable » ? C'est que **le dépôt
> Git ne contient encore aucun commit**. Une plateforme ne peut pas importer un
> dépôt vide, indépendamment du contenu de `package.json`.

---

## À compléter avant la mise en ligne

Ces informations n'ont **pas** été inventées. Tant qu'elles ne sont pas renseignées,
le générateur ne les publie pas : les champs concernés apparaissent explicitement
comme « information à compléter » sur la page des mentions légales, et les données
structurées correspondantes ne sont pas émises.

| Où | Quoi |
|---|---|
| `src/lib/site.mjs` → `site.origin` | URL canonique de production (actuellement un domaine provisoire) |
| `src/lib/site.mjs` → `site.legalName`, `siret`, `rcs` | Raison sociale et immatriculation |
| `src/lib/site.mjs` → `site.address` | Adresse d'établissement. **Tant qu'elle est vide, aucun `LocalBusiness` n'est déclaré** : le site s'en tient à `Organization`, pour ne pas créer de faux établissement |
| `src/lib/site.mjs` → `site.email` | Adresse de contact |
| `src/lib/site.mjs` → `site.certibiocide`, `insurance` | Agrément et assurance RC professionnelle |
| `src/lib/site.mjs` → `site.googleBusinessUrl` | URL de la fiche établissement, **si elle existe réellement** |
| `src/lib/site.mjs` → `site.editorial.author` | Responsable éditorial. Tant qu'il est vide, aucune signature d'auteur n'est affichée ni injectée en JSON-LD |
| `src/lib/site.mjs` → `site.formEndpoint` | Point de réception du formulaire. Tant qu'il est vide, le formulaire renvoie explicitement vers le téléphone |
| `src/lib/site.mjs` → `site.gtmId` | Conteneur GTM. Vide = **aucun script tiers injecté** |
| `src/content/pages/mentions-legales.mjs` | Hébergeur (nom, adresse, contact) |

Le numéro de téléphone **07 56 82 27 85** est déjà en place partout
(en-tête, menu mobile, sections, pied de page, page contact), en lien
`tel:+33756822785`.

---

## Architecture du contenu

```
/                                         accueil
/chenilles-processionnaires/              page pilier — les deux espèces
/chenille-processionnaire-du-pin/         espèce
/chenille-processionnaire-du-chene/       espèce
/identifier-chenilles-processionnaires/   identification (chenille)
/identifier-nid-chenilles-processionnaires/ identification (nid)
/traitement-chenilles-processionnaires/   pilier traitement
/destruction-nid-chenilles-processionnaires/
/echenillage/
/piegeage-chenilles-processionnaires/
/traitement-processionnaire-du-pin/
/traitement-processionnaire-du-chene/
/traitement-preventif/  /traitement-curatif/
/chenilles-processionnaires-danger/
/chenilles-processionnaires-chien/  /-chat/  /-enfant/

/particuliers/  /coproprietes/  /entreprises/
/collectivites/ /ecoles/        /espaces-verts/

/departements/                            zones d'intervention
/departements/<dept>/                     8 pages départementales
/departements/<dept>/<ville>/             13 pages ville

/blog/                                    sommaire
/blog/<categorie>/                        7 catégories
/blog/<categorie>/<article>/              23 articles

/faq/  /contact/  /mentions-legales/  /politique-de-confidentialite/
/merci/ (noindex)  /404/ (noindex)
```

### Règle éditoriale sur les pages locales

Une page départementale ou ville n'existe que s'il y a **une réalité locale à
décrire** : massif, essences dominantes, nature du sol, type d'habitat,
contraintes de chantier, interlocuteurs. Chaque page est rédigée séparément —
sections, tableaux, FAQ et maillage diffèrent.

L'audit vérifie ce point : il calcule la similarité (Jaccard sur 6-grammes) entre
toutes les paires de pages et **échoue au-delà de 40 %**, avertit au-delà de 25 %.
État actuel : aucune paire au-dessus de 25 %.

Les communes ont été retenues pour leur intérêt réel (massif attenant, géologie,
type de patrimoine arboré, contrainte d'accès), et non pour multiplier les URLs.
Pour en ajouter une : créer `src/content/villes/<slug>.mjs` en exportant
`villeName`, `deptSlug`, `villeTeaser` — elle est automatiquement rattachée à sa
page départementale et au fil d'Ariane.

---

## Carte interactive

La page d'accueil, la page des zones d'intervention et chaque page
départementale affichent une carte de l'Île-de-France aux **contours réels**.

* **SVG inline**, donc chaque département est un vrai lien : survol, focus
  clavier, infobulle native, et mise en évidence du département courant.
* **Aucune librairie, aucune tuile distante, aucune requête réseau.** Pas de
  Leaflet, pas de Google Maps, pas de cookie tiers.
* Environ 16 Ko de tracés inline, soit moins qu'une seule tuile raster.

Données et régénération :

```bash
node scripts/make-carte-idf.mjs   # src/data/*.geojson -> src/lib/carte-idf-data.mjs
```

Le GeoJSON source est versionné dans `src/data/`, la régénération fonctionne
donc hors ligne. La projection (équirectangulaire corrigée en longitude) et la
simplification (Douglas-Peucker, tolérance réglable) sont écrites dans le
script, sans dépendance.

Contours : IGN — Admin Express COG. Noms et codes : INSEE.

## SEO technique

* `title`, `meta description`, `H1` **uniques** sur chaque page (vérifié par l'audit).
* `canonical` absolu sur chaque page.
* Fil d'Ariane visible + `BreadcrumbList`.
* Graphe JSON-LD : `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`,
  `Service` (pages de prestation), `Article` (blog), `FAQPage`, `ItemList`.
  `PestControlService` n'est émis **que si une adresse réelle est configurée**.
* `FAQPage` strictement aligné sur les questions **visibles** (l'audit compare les
  deux et échoue en cas d'écart).
* Aucune donnée fabriquée : l'audit rejette `aggregateRating`, `review`,
  `priceRange` et `offers` dans le JSON-LD.
* Open Graph + Twitter cards, image PNG 1200×630 générée par le build.
* `sitemap.xml` (les pages `noindex` en sont exclues, vérifié), `robots.txt`,
  `site.webmanifest`, `favicon.svg`, icônes PNG.
* Redirections 301 prévues dans `build.mjs` → `_redirects` (Netlify/Vercel) et
  `.htaccess` (Apache), avec `ErrorDocument`, cache long sur les ressources
  versionnées et compression.
* Page 404 utile, servie à la racine (`404.html`).

## GEO / moteurs génératifs

Chaque page porte un bloc **« réponse courte »** juste après le H1 : une réponse
directement citable, suivie du développement. S'y ajoutent des tableaux
comparatifs, des listes d'étapes, des définitions et des FAQ. `robots.txt`
autorise explicitement GPTBot, PerplexityBot et Google-Extended.

## Performance

* Une seule feuille de style, minifiée et versionnée par empreinte (~20 Ko).
* **Aucun script externe.** ~1 Ko de JavaScript inline (menu mobile + `dataLayer`).
* Aucune police web : pile système (serif pour les titres, sans-serif pour le texte).
* Illustrations en SVG, `width`/`height` sur chaque image, `loading="lazy"` sauf
  visuel du hero (`fetchpriority="high"`).
* HTML moyen ~31 Ko avant compression.
* Aucun débordement horizontal de 320 px à 1280 px (vérifié au navigateur).

## Analytics

Le site pousse déjà les événements dans `window.dataLayer` :

```js
{ event: 'cta_click', cta_type: 'tel' | 'form' | 'form-submit',
  cta_zone: 'header' | 'hero' | 'section' | 'menu' | 'footer' | 'contact' | ...,
  page_path: '/...' }
```

Renseigner `site.gtmId` suffit à activer GTM. Tant qu'il est vide, **aucun script
tiers n'est chargé** et aucun cookie n'est déposé.

## Contenu santé

Les pages traitant des réactions humaines ou animales restent factuelles :
aucun diagnostic, aucune prescription, orientation explicite vers un médecin ou un
vétérinaire selon la situation, et mention que ces informations ne s'y substituent
pas. Le pied de page le rappelle sur toutes les pages.

## Audit

`npm run audit` contrôle : balises et metas, unicité, longueurs, H1 unique,
présence de H2, liens internes (3 800+ vérifiés), pages orphelines, images
(`alt`, dimensions, lazy-loading, sur-optimisation), JSON-LD, placeholders non
remplacés, duplication de contenu, sitemap/robots/404, cohérence NAP,
maillage interne et accessibilité de base.

Il retourne un code de sortie non nul en cas d'erreur bloquante : il peut être
branché en CI.
