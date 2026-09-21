/**
 * Registre des articles : lit le dossier, importe chaque module et trie
 * par date de publication decroissante. Ajouter un fichier suffit a
 * publier l'article, sa page de categorie et son entree de sitemap.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { blogCategories } from '../../../lib/site.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const files = (await fs.readdir(here))
  .filter(f => f.endsWith('.mjs') && !f.startsWith('_'))
  .sort();

const loaded = [];
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(here, f)).href);
  const post = mod.default;
  const cat = blogCategories.find(c => c.slug === post.category);
  if (!cat) throw new Error(`blog/posts/${f} : categorie inconnue "${post.category}"`);
  loaded.push({
    ...post,
    categoryName: cat.name,
    url: `/blog/${post.category}/${post.slug}/`,
    file: f
  });
}

export const posts = loaded.sort((a, b) =>
  (b.datePublished || '').localeCompare(a.datePublished || ''));

export const postsByCategory = (slug) => posts.filter(p => p.category === slug);
