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
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Chord diagram',
  seoDescription:
    'A collection of chord diagram examples made with Python, coming with explanation and reproducible code',
  path: '/chord-diagram/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/chord.html'>chord diagram</a> represents flows or connections between several entities (called nodes). Each entity is represented by a fragment on the outer part of the circular layout. Then, arcs are drawn between each entities. The size of the arc is proportional to the importance of the flow.";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Chord diagram" description={chartDescription} chartType="chordDiagram" />
      </div>

      <div className="wrapper">
        <h2 id="Chord library">
          Chord diagram with the <code>Chord</code> library
        </h2>
        <p>
          Chord diagram is not a very usual type of chart. The most common library like <code>Matplotlib</code> and{' '}
          <code>Seaborn</code> will not be of any help to build one. Fortunately, the <code>chord</code> library wraps
          some functions coming from javascript and the <a href="https://www.d3-graph-gallery.com">d3.js library</a>.
        </p>
        <p>
          The examples below will guide you through a migration dataset already discussed in{' '}
          <a href="https://www.data-to-viz.com/graph/chord.html">data-to-viz.com</a>. It starts by describing the
          input dataset and the basic usage of the <code>Chord()</code> function.
        </p>
        <Link href="/chord-diagram-python-chord" className={buttonVariants({ size: 'sm' })}>
          Show me the code
        </Link>
        <ChartGrid>
          <ChartImageContainer
            imgName="chord-diagram-chord-library"
            caption="Most basic chord diagram example from a random matrix."
            linkTo="/chord-diagram-python-chord"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Bokeh">
          Chord diagram with <code>Bokeh</code>
        </h2>
        <p>
          <a href="https://bokeh.org">Bokeh</a> is a pretty neat python library for data visualization. It provides a{' '}
          <code>chord_from_df()</code> function dedicated to chord diagram.
        </p>
        <p>
          The example below comes straight from their{' '}
          <a href="https://docs.bokeh.org/en/0.12.5/docs/gallery/chord_chart.html">documentation</a>. It represents
          the relationship between each character of the book <i>Les misérables</i>.
        </p>
        <div className="mx-auto max-w-[600px] p-[30px]">
          <Link href="/231-chord-diagram-with-bokeh" className="block">
            <ChartImage imgName="231_Chord_Bokeh" caption="Simple chord diagram with the Bokeh python library" />
          </Link>
        </div>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="chordDiagram" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Plotly">
          Chord diagram with <code>Plotly</code>
        </h2>
        <p>
          <code>plotly</code> is a powerful python library for data visualization and also allows to build chord
          diagrams. The good part is that it builds interactive charts. However if comes with a lot of code complexity
          so be ready to spend several hours before getting your first figure. &#128542;
        </p>
        <p>
          The example below shows the relationship between several people on facebook. Have a look to the{' '}
          <a href="https://plotly.com/python/v3/filled-chord-diagram/">plotly doc</a> for explanation and code. Hover
          over a connection to get names and flow value.
        </p>
        <div className="mx-auto max-w-full overflow-x-auto">
          <iframe
            src="/interactiveCharts/plotly_chord_diagram.html"
            title="chord diagram with plotly"
            loading="lazy"
            className="mx-auto block h-[500px] w-[800px] border-none"
          />
        </div>
        <a href="https://plotly.com/python/v3/filled-chord-diagram/" className={buttonVariants({ size: 'sm' })}>
          See code
        </a>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Chord library">
          Chord diagram with the <code>Mne</code> library
        </h2>
        <p>
          The <code>mne</code> library has been written for neuroscience purposes, but it comes with some handy
          functions when it comes to build chord diagrams. Visit the examples below to learn the basics and more!
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="406-chord-diagram_mne1"
            caption="Most basic chord diagram with the mne library."
            linkTo="/406-chord-diagram-mne"
          />
          <ChartImageContainer
            imgName="406-chord-diagram_mne2"
            caption="Learn how to customize node, links, labels and more."
            linkTo="/406-chord-diagram-mne"
          />
          <ChartImageContainer
            imgName="406-chord-diagram_mne3"
            caption="How to split nodes in groups."
            linkTo="/406-chord-diagram-mne"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
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
