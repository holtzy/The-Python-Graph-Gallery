import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// A post is a folder in content/posts/<slug>/ containing an index.md file (+ its images, csv...)
export const POSTS_DIR = path.join(process.cwd(), 'content/posts');

export type PostFrontmatter = {
  title: string;
  description: string;
  seoDescription: string;
  keywords: string;
  family: string;
  chartType: string;
  slug: string;
  // false when the code of the post can not run in the browser (libraries not available in Pyodide...)
  interactive?: boolean;
};

export type Post = PostFrontmatter & {
  body: string;
  dir: string;
};

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((slug) => fs.existsSync(path.join(POSTS_DIR, slug, 'index.md')))
    .sort();
}

export function getPost(slug: string): Post {
  const dir = path.join(POSTS_DIR, slug);
  const file = fs.readFileSync(path.join(dir, 'index.md'), 'utf8');
  const { data, content } = matter(file);
  return { ...(data as PostFrontmatter), slug, body: content, dir };
}
