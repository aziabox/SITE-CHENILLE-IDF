/**
 * Registre des pages ville.
 *
 * Regle editoriale : une commune n'a de page que si nous avons quelque
 * chose de reellement local a en dire — massif, essences, contexte urbain,
 * problematique specifique. Il ne s'agit pas de multiplier les URLs.
 * Chaque page est redigee separement : aucun gabarit n'est decline.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const files = (await fs.readdir(here))
  .filter(f => f.endsWith('.mjs') && !f.startsWith('_'))
  .sort();

const loaded = [];
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(here, f)).href);
  const p = mod.default;
  loaded.push({
    url: p.url,
    name: p.villeName,
    dept: p.deptSlug,
    teaser: p.villeTeaser
  });
}

export const villes = loaded;
export const villesOf = (deptSlug) => villes.filter(v => v.dept === deptSlug);
