import Link from 'next/link';
import type { PostSummary } from '@/lib/posts';

// Cards linking to other posts about the same chart type, at the bottom of a post
export default function RelatedPosts({ posts }: { posts: PostSummary[] }) {
  if (!posts.length) return null;
  return (
    <section>
      <h2 id="Related posts">Related posts</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}/`} className="group block">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border bg-white p-2">
              <img
                src={post.thumb}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <p className="!mt-2 line-clamp-2 text-sm leading-5 font-medium group-hover:underline group-hover:underline-offset-4">
              {post.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
