import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { Matplotlib } from '@/components/MiscellaneousLogos';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Circular Barplot',
  seoDescription:
    'A collection of circular barplot examples made with Python, coming with explanation and reproducible code',
  path: '/circular-barplot/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>";

export default function CircularBarplot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Circular Barplot" description={chartDescription} chartType="circularBarplot" />
      </div>

      <div className="wrapper">
        <h2 id="Circular barplot">
          <Matplotlib />
          Circular barplot with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> allows to build circular barplots thanks to the <code>polar</code> Layout option of
          the <code>subplot()</code> function. Examples below should guide you from the most simple version to some
          more customization.
        </p>
        <p>
          It starts by explaining how the polar coordinates of <code>matplotlib</code> works, show how to use it to draw
          bars and finally goes into the trickiness of adding labels.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="circular-barplot-basic1"
            caption="Explanation of the polar coordinates with Matplotlib."
            linkTo="/circular-barplot-basic"
          />
          <ChartImageContainer
            imgName="circular-barplot-basic2"
            caption="Most basic circular barplot with Python and Matplotlib."
            linkTo="/circular-barplot-basic"
          />
          <ChartImageContainer imgName="circular-barplot-basic4" caption="Reorder items." linkTo="/circular-barplot-basic" />
        </ChartGrid>
        <div className="mx-auto max-w-[800px] p-8">
          <Link href="/circular-barplot-basic">
            <ChartImage imgName={'circular-barplot-basic3'} caption={'Circular barplot with labels'} />
          </Link>
        </div>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="circularBarplot" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Grouped & circular">
          <Matplotlib />
          Grouped Circular barplot
        </h2>
        <p>
          This section extends the previous one by adding a grouping level to the circular barplot. It allows to check
          for the values of several items split by groups, each item being sorted by value inside its group. It
          requires quite a bit of matplotlib code but the step-by-step tutorial highlighted below should help go through
          it.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="circular-barplot-with-groups1"
            caption="How to add a gap in a circular barplot"
            linkTo="/circular-barplot-with-groups"
          />
          <ChartImageContainer
            imgName="circular-barplot-with-groups2"
            caption="Group the circular barplot and add gaps between each group."
            linkTo="/circular-barplot-with-groups"
          />
          <ChartImageContainer
            imgName="circular-barplot-with-groups3"
            caption="Reorder items inside each group."
            linkTo="/circular-barplot-with-groups"
          />
        </ChartGrid>
        <div className="mx-auto max-w-[800px] p-8">
          <Link href="/circular-barplot-basic">
            <ChartImage
              imgName={'circular-barplot-with-groups4big'}
              caption={'Final grouped circular barplot with labels, grid'}
            />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best python circular barplot examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often using{' '}
          <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a> tries to display (or translate from R)
          some of the best creations and explain how their source code works. If you want to display your work here,
          please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <ChartGrid cols={2}>
          <ChartImageContainer
            imgName={'web-circular-barplot-with-matplotlib-square'}
            caption={'A circular barchart with several features per group made with Python and Matplotlib.'}
            linkTo={'/web-circular-barplot-with-matplotlib'}
          />
          <ChartImageContainer
            imgName={'web-circular-lollipop-plot-with-matplotlib-square'}
            caption={'A circular lollipop plot with customized layout, great color palette and in circle legend.'}
            linkTo={'/web-circular-lollipop-plot-with-matplotlib'}
          />
          <ChartImageContainer
            imgName={'web-polar-chart'}
            caption={
              'Nice circular barplot with Matplotlib, showing data about Spanish learners in different countries'
            }
            linkTo={'/web-polar-chart'}
          />
          <ChartImageContainer
            imgName={'532-episode1-each-line-anakin-square'}
            caption={'A highly customized circular barplot visualizing Star Wars data using Python and Matplotlib'}
            linkTo={'/532-customizing-circular-barplot-in-matplotlib'}
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper" id="related">
        <ChartFamilySection chartFamily="ranking" />
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
