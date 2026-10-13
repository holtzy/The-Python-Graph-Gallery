import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import FunctionExploration from '@/components/FunctionExploration';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { Matplotlib } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { stackplot } from '@/lib/functions/stackplot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Streamgraph',
  seoDescription: 'A collection of streamgraph examples made with Python, coming with explanation and reproducible code',
  path: '/streamchart/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/streamgraph.html'>streamgraph</a> is a variation of the stacked area graph. It displays the evolution of a numeric value for several groups. Each group is displayed around a central axis and edges are rounded resulting in a flowing and organic shape.</p>";

export default function Streamchart() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Streamgraph" description={chartDescription} chartType="stream" />
      </div>

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Streamgraph with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> can build streamgraphs but there isn&apos;t any prebuilt function for it so be ready
          for quite a lot of code. &#127871;
        </p>
        <p>
          The process starts pretty much like for a <Link href="/stacked-area-plot">stacked area graph</Link>. The{' '}
          <code>baseline</code> parameter of the <code>stackplot()</code> function is used to place groups around the
          X axis. The tricky part is to interpolate points between each value of the X axis to get the smooth visual.
          This is done thanks to the <code>scipy.interpolate</code> library.
        </p>
        <Link href="/streamchart-basic-matplotlib" className={buttonVariants({ size: 'sm' })}>
          Read more
        </Link>
        <ChartGrid>
          <ChartImageContainer
            imgName="streamchart-basic-matplotlib1"
            caption="Everything starts with a stacked area chart with a custom baseline"
            linkTo="/streamchart-basic-matplotlib"
          />
          <ChartImageContainer
            imgName="streamchart-basic-matplotlib2"
            caption="Apply some smoothing to get a stream chart"
            linkTo="/streamchart-basic-matplotlib"
          />
          <ChartImageContainer
            imgName="streamchart-basic-matplotlib3"
            caption="Some more smoothing control using grids"
            linkTo="/streamchart-basic-matplotlib"
          />
          <ChartImageContainer
            imgName="streamchart-basic-matplotlib4"
            caption="Customize the color palette"
            linkTo="/streamchart-basic-matplotlib"
          />
          <ChartImageContainer
            imgName="570-custom-streamchart-2"
            caption="Custom colormap in a streamchart with a line chart"
            linkTo="/570-custom-streamchart"
          />
          <ChartImageContainer
            imgName="570-custom-streamchart-3"
            caption="Change order of the lines"
            linkTo="/570-custom-streamchart"
          />
          <ChartImageContainer
            imgName="570-custom-streamchart-4"
            caption="Smooth the chart"
            linkTo="/570-custom-streamchart"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="stream" />

      <Spacing />

      <div className="wrapper" id="stackplotWidget">
        <FunctionExploration funDetails={stackplot} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best python streamchart examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often using{' '}
          <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a> tries to display (or translate from
          R) some of the best creations and explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <Link href="/web-streamchart-with-matplotlib" className="my-6 block">
          <ChartImage
            imgName="web-streamchart-with-matplotlib"
            caption="A streamchart made with Python, Matplotlib and the scipy.stats package."
          />
        </Link>
      </div>

      <Spacing />

      <div className="wrapper" id="related">
        <ChartFamilySection chartFamily="evolution" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <TableOfContent />
    </>
  );
}
