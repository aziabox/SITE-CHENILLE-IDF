# Site spécialisé — Chenilles processionnaires, Île-de-France

Site statique entièrement consacré à la **chenille processionnaire du pin**
(*Thaumetopoea pityocampa*) et à la **chenille processionnaire du chêne**
(*Thaumetopoea processionea*). Il ne traite aucun autre nuisible.

Zone d'intervention : les huit départements franciliens (75, 77, 78, 91, 92, 93, 94, 95).

---

## Démarrage

```bash
npm run build     # génère ./dist
npm run serve     # prévisualisation sur http://localhost:4173
npm run audit     # audit SEO / contenu / duplication / liens / accessibilité
npm run check     # build + audit
```

Aucune dépendance de production. Node 20+ suffit.
`playwright-core` n'est utilisé que pour les captures de contrôle en développement.

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
