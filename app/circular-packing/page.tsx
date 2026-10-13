import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartGrid from '@/components/ChartGrid';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { Matplotlib } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Circular Packing',
  seoDescription:
    'A collection of circular packing examples made with Python, coming with explanation and reproducible code',
  path: '/circular-packing/',
});

// Note: the former site used the treemap description on this page. Kept as is.
const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Circular Packing" description={chartDescription} chartType="circularPacking" />
      </div>

      <div className="wrapper">
        <h2 id="Circlify">
          &#8505; &#65039; A note on the <code>Circlify</code> package
        </h2>
        <p>
          The <code>circlify</code> package is a pure Python implementation of a circle packing layout algorithm. It
          has been developped by <a href="https://github.com/elmotec">Jerome Lecomte</a> and lives on{' '}
          <a href="https://github.com/elmotec/circlify">github</a>. 🙏🙏{' '}
        </p>
        <p>
          You can install it with <code>pip install circlify</code>.
        </p>
        <a href="https://github.com/elmotec/circlify" className={buttonVariants({ size: 'sm' })}>
          Circlify documentation
        </a>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="circularPacking" />

      <Spacing />

      <div className="wrapper">
        <h2 id="One level of hierarchy">
          <Matplotlib />
          One level of hierarchy
        </h2>
        <p>
          <code>Circlify</code> can work without a hierarchical structure, i.e. with just a set of numeric varialbles
          that will be each displayed as a bubble. Note that the package just compute the position and size of each
          bubble. Once that&apos;s done, <code>matplotlib</code> is used to make the chart itself with usual functions.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy1"
            caption="Most basic circle packing"
            linkTo="/circular-packing-1-level-hierarchy"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy2"
            caption="Add colors and labels"
            linkTo="/circular-packing-1-level-hierarchy"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy3"
            caption="control space between bubbles"
            linkTo="/circular-packing-1-level-hierarchy"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Several levels">
          <Matplotlib />
          Several levels of hierarchy
        </h2>
        <p>
          <code>Circlify</code> also works from a hierarchical structure. Bubbles representing the bottom of the
          hierarchy are encapsulated into higher hierarchy bubbles and so on. Note that the process is a bit more
          tedious here, but still doable thanks to <code>matplotlib</code>.
        </p>
        <div className="mx-auto max-w-[800px] p-[30px]">
          <Link href="/circular-packing-several-levels-of-hierarchy" className="block">
            <ChartImage
              imgName="circular-packing-several-levels-of-hierarchy-large"
              caption="Circular packing with several levels of hierarchy with Python and the circlize library"
            />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <ChartFamilySection chartFamily="partOfAWhole" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <Spacing />

      <TableOfContent />
    </>
  );
}
