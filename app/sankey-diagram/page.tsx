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
import { Matplotlib, Plotly } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sankey diagram',
  seoDescription:
    'A collection of sankey diagram examples made with Python, coming with explanation and reproducible code',
  path: '/sankey-diagram/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/sankey.html'>Sankey Diagram</a> is a visualisation technique that allows to display flows. Several entities (nodes) are represented by rectangles or text. Their links are represented with arrows or arcs that have a width proportional to the importance of the flow.";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Sankey diagram" description={chartDescription} chartType="sankey" />
      </div>

      <div className="wrapper">
        <h2 id="Plotly">
          <Plotly />
          Sankey diagram with <code>Plotly</code>
        </h2>
        <p>
          <code>Plotly</code> is an awesome <code>Python</code> library for interactive data visualization. It is most
          probably the best tool to create a Sankey Diagram. Its <code>Sankey()</code> function handles most of the
          business logic for you, allowing to get a figure in a couple of lines of code.
        </p>
        <p>
          The blogpost linked below should quickly get you started with some{' '}
          <Link href="/sankey-diagram-with-python-and-plotly">minimal starting example</Link>. It also describes the
          most common of type of customization you probably want to apply to your Sankey diagram to make it appealing,
          and ends up with the code for a real life Sankey diagram shown below.
        </p>
        <div className="mx-auto max-w-full overflow-x-auto">
          <iframe
            src="/interactiveCharts/sankey-diagram-plotly-real.html"
            title="Sankey diagram with plotly"
            loading="lazy"
            className="mx-auto block h-[700px] w-[800px] border-none"
          />
        </div>
        <Link href="/sankey-diagram-with-python-and-plotly" className={buttonVariants({ size: 'sm' })}>
          See code
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="pySankey">
          Sankey diagrams with <code>pySankey</code>
        </h2>
        <p>
          The{' '}
          <a target="_blank" href="https://github.com/anazalea/pySankey" rel="noreferrer">
            pySankey
          </a>{' '}
          python library by{' '}
          <a target="_blank" href="https://github.com/anazalea" rel="noreferrer">
            anazalea
          </a>{' '}
          is another option when it comes to build sankey diagrams. It is based on{' '}
          <Link href="/matplotlib">matplotlib</Link> and aims a building static outputs only. The blogpost showcased
          below should help you to get started quickly, describing the various accepted dataset and the customization
          offered by the library.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="basic-sankey-diagram-with-pysankey-1"
            caption="How to build a basic sankey diagram with the pySankey library"
            linkTo="/basic-sankey-diagram-with-pysankey"
          />
          <ChartImageContainer
            imgName="basic-sankey-diagram-with-pysankey-2"
            caption="Some explanation on the various data format that are accepted by the library."
            linkTo="/basic-sankey-diagram-with-pysankey"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Sankey diagram with <code>Matplotlib</code>
        </h2>
        <p>
          The <code>matplotlib</code> library offers a <code>Sankey()</code> function that also allows to build sankey
          diagrams. It is a bit limited in my opinion, since it only allows to visualize flows passing through one
          unique group as shown in the example below.
        </p>
        <p>
          The example below comes from the <a href="https://matplotlib.org/api/sankey_api.html">official doc</a>. Have
          a look to the <a href="https://python-graph-gallery.com/220-sankey-diagram-with-matplotlib/">code </a>.
        </p>
        <div className="mx-auto max-w-[600px] p-[30px]">
          <Link href="/220-sankey-diagram-with-matplotlib" className="block">
            <ChartImage imgName="220_Sankey_Matplotlib" caption="Basic Sankey diagram with Matplotlib" />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10">
        <ChartFamilySection chartFamily="flow" />
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
