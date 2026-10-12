import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import PostRuntime from '@/components/post/PostRuntime';
import { getAllPostSlugs, getPost } from '@/lib/posts';
import { renderPost } from '@/lib/render-post';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

// One page per post of content/posts/. Fully static.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  // Social media preview: the first chart of the post when there is one
  const hasImage = fs.existsSync(path.join(post.dir, 'output-1.png'));
  return buildMetadata({
    title: post.title,
    seoDescription: post.seoDescription,
    keywords: post.keywords,
    path: `/${slug}/`,
    image: hasImage ? `${SITE_URL}/posts/${slug}/output-1.png` : undefined,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const { content, cells } = await renderPost(post.body, {
    slug,
    dir: post.dir,
    title: post.title,
    interactive: post.interactive !== false,
  });

  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title={post.title} description={'<p>' + post.description + '</p>'} chartType={post.chartType} />
      </div>

      <article className="wrapper post-content">
        <PostRuntime cells={cells}>{content}</PostRuntime>
      </article>

      <Spacing />

      <div className="wrapper bg-muted py-10">
        <ChartFamilySection chartFamily={post.family} />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <TableOfContent />
    </>
  );
}
