import type { Metadata } from 'next';
import TitleAndDescription from '@/components/TitleAndDescription';
import Spacing from '@/components/Spacing';
import Contact from '@/components/Contact';
import { buildMetadata } from '@/lib/seo';
import { CAVEATS_IMG_DIR, DATAVIZ_CAVEATS } from '@/lib/lead-magnets/dataviz-caveats';

// The page sent to the people subscribing to the "dataviz caveats" lead magnet.
// Not indexed by search engines and not in the sitemap (scripts/postbuild.ts).
export const metadata: Metadata = buildMetadata({
  title: '25 Dataviz Caveats',
  seoDescription: 'A collection of 25 dataviz caveats: common mistakes, and what to do instead.',
  path: '/dataviz-caveats/',
  noindex: true,
});

const description = (
  <p>
    Thanks for subscribing! Here are the 25 dataviz caveats: for each of them, a chart that is not ideal, and a
    better alternative. Feel free to share them with your colleagues.
  </p>
);

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="25 Dataviz Caveats" description={description} chartType="caveats" />
      </div>

      <div className="wrapper">
        <div className="mt-8 space-y-10">
          {DATAVIZ_CAVEATS.map((caveat) => {
            const src = `${CAVEATS_IMG_DIR}/${caveat.file}`;
            return (
              <figure key={caveat.id} id={caveat.file} className="!m-0">
                <picture>
                  {/* Portrait version on phones */}
                  <source media="(max-width: 640px)" srcSet={`${src}-vert.webp`} />
                  <img
                    src={`${src}-horiz-800.webp`}
                    srcSet={`${src}-horiz-800.webp 800w, ${src}-horiz.webp 1600w`}
                    sizes="(min-width: 820px) 780px, 100vw"
                    width={1600}
                    height={1000}
                    loading={caveat.id === '01' ? 'eager' : 'lazy'}
                    alt={`Dataviz caveat ${caveat.id}: ${caveat.title}`}
                    className="h-auto w-full rounded-lg border"
                  />
                </picture>
              </figure>
            );
          })}
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>
    </>
  );
}
