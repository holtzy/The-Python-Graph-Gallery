import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { Animation, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Ridgeline chart Gallery | Dozens of examples with code',
  seoDescription:
    'A collection of ridgeline chart examples made with Python, coming with explanation and reproducible code',
  path: '/ridgeline/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/ridgeline.html'>ridgeline</a> summarizes the distribution of a numeric variable for several groups. Each group is represented as a density chart, each density chart overlapping each other to use space more efficiently.</p>";

export default function RidgelinePlot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Ridgeline chart" description={chartDescription} chartType="ridgeline" />
      </div>

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Ridgeline charts with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> does not have a dedicated section to build ridgeline charts. It is still possible to
          make one using some workarounds involving several call of the <code>kdeplot()</code> function.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="ridgeline-graph-seaborn"
            caption="Ridgeline chart with python, matplotlib and seaborn."
            linkTo="/ridgeline-graph-seaborn"
          />
          <ChartImageContainer
            imgName="raincloud-plot-with-matplotlib-and-ptitprince"
            caption="Combining multiple density charts with boxplots and raincloud plots"
            linkTo="/raincloud-plot-with-matplotlib-and-ptitprince"
          />
          <ChartImageContainer
            imgName="web-ridgeline-by-text-square"
            caption="Combining density charts with quantiles and annotations"
            linkTo="/web-ridgeline-by-text"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="ridgeline" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Plotly">
          <Animation />
          Interactive ridgeline chart with <code>plotly</code>
        </h2>
        <p>
          Plotly is a python library that makes the link with Javascript to build interactive charts that you can
          display in a browser.
        </p>
        <p>The following example is a ridgeline chart made with this library</p>
        <div className="mx-auto my-6 max-w-[800px]">
          <iframe
            src="/interactiveCharts/ridgeline-graph-plotly.html"
            title="ridgeline chart with plotly"
            loading="lazy"
            className="h-[500px] w-full border-0"
          ></iframe>
        </div>
        <Link href="/ridgeline-graph-plotly" className={buttonVariants({ size: 'sm' })}>
          See code
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Best ridgeline chart examples</h2>
        <p>
          Ridgeline charts can be used to create <b>stunning visualizations</b>. Here are some examples of the{' '}
          <b>best</b> ridgeline charts made with Python.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="web-ridgeline-by-text-square"
            caption="Ridgeline chart with annotations and quantiles"
            linkTo="/web-ridgeline-by-text"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper" id="related">
        <ChartFamilySection chartFamily="distribution" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <TableOfContent />
    </>
  );
}
