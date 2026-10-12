import type { Metadata } from 'next';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartGrid from '@/components/ChartGrid';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import ArcDiagramD3 from '@/components/ArcDiagramD3';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Arc Diagram',
  seoDescription:
    'A collection of arc diagram examples made with Python, coming with explanation and reproducible code',
  path: '/arc-diagram/',
});

const chartDescription =
  "<p>An <a href='https://www.data-to-viz.com/graph/arc.html'>arc diagram</a> is a special kind of <a href='https://python-graph-gallery.com/network-chart/'>network graph</a>. It is consituted by <u>nodes</u> that represent entities and by <u>links</u> that show relationships between entities. In arc diagrams, nodes are displayed along a single axis and links are represented with arcs.";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Arc diagram" description={chartDescription} chartType="arc" />
      </div>

      <div className="wrapper">
        <h2 id="Python">
          Python library to build arc diagrams: <code>arcplot</code>
        </h2>
        <p>
          <a href="https://github.com/szkics/arcplot">Arcplot</a> is a Python library that offers a simple way to
          build arc diagrams. It allows to build <b>static arc diagrams</b> with just a few lines of code. It is a good
          choice if you are looking for a simple and quick solution.
        </p>
        <p>
          <b>Warning</b>: you need Python 3.10 to use this library.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="565-arc-diagram-with-arcplot-0"
            caption="Most basic arc diagram"
            linkTo="/565-arc-diagram-with-arcplot"
          />
          <ChartImageContainer
            imgName="565-arc-diagram-with-arcplot-1"
            caption="Custom colors of edges"
            linkTo="/565-arc-diagram-with-arcplot"
          />
          <ChartImageContainer
            imgName="565-arc-diagram-with-arcplot-2"
            caption="Custom theme and background color"
            linkTo="/565-arc-diagram-with-arcplot"
          />
          <ChartImageContainer
            imgName="565-arc-diagram-with-arcplot-3"
            caption="Custom the width of the arcs"
            linkTo="/565-arc-diagram-with-arcplot"
          />
          <ChartImageContainer
            imgName="565-arc-diagram-with-arcplot-4"
            caption="Custom the position of the arcs"
            linkTo="/565-arc-diagram-with-arcplot"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Other languages">
          Arc diagram with <code>R</code> or <code>Javascript</code>
        </h2>
        <p>
          <code>Python</code> has only one library to build arc diagrams: <code>arcplot</code>. For other kind of
          static version, <code>R</code> has built-in functions to make them. <code>Javascript</code> and the{' '}
          <code>d3.js</code> library offers <b>more customization</b> and <b>interactivity</b> options, but comes with
          a steeper learning curve and a lot of line of code. Pick your flavor!
        </p>
        <div className="my-6 flex flex-wrap gap-2">
          <a href="https://www.data-to-viz.com/graph/arc.html" className={buttonVariants({ size: 'sm' })}>
            R code
          </a>
          <a href="https://www.d3-graph-gallery.com/arc.html" className={buttonVariants({ size: 'sm' })}>
            Javascript code
          </a>
        </div>
      </div>

      <ArcDiagramD3 />

      <div className="wrapper">
        <p>
          Here is an arc diagram showing the relationships between researchers. One <u>node</u> is drawn for each
          researcher having published at least one paper with my previous supervisor,{' '}
          <a href="https://sites.google.com/site/ranwez/">Vincent Ranwez</a>. Two researchers are <u>linked</u> if
          they co-authored at least one paper together. Read more about this dataset{' '}
          <a href="https://www.data-to-viz.com/story/AdjacencyMatrix.html">here</a>.
        </p>
        <p>
          <i>Hover nodes for more info</i>
        </p>
        <a
          href="https://www.d3-graph-gallery.com/arc.html"
          className={buttonVariants({ variant: 'secondary', })}
        >
          See code
        </a>
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
