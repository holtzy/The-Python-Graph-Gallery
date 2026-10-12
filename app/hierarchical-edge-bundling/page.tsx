import type { Metadata } from 'next';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Hierarchical Edge Bundling',
  seoDescription:
    'A collection of hierarchical edge bundling examples made with Python, coming with explanation and reproducible code',
  path: '/hierarchical-edge-bundling/',
});

const chartDescription =
  "<p><a href='https://www.data-to-viz.com/graph/edge_bundling.html'>Hierarchical edge bundling</a> allows to visualize adjacency relations between entities organized in a hierarchy. The idea is to bundle the adjacency edges together to decrease the clutter usually observed in complex networks.";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription
          title="Hierarchical Edge Bundling"
          description={chartDescription}
          chartType="edgeBundling"
        />
      </div>

      <div className="wrapper">
        <h2 id="Python">
          😞 Sadness and Despair for Hierarchical Edge Bundling with <code>Python</code>.
        </h2>
        <p>
          As far as I know, there isn&apos;t any proper way to build a hierarchical edged bundling plot with python 😞.
          If you&apos;re aware of any tip to build it, please let me knwo! My contact is provided below 🙏🏽.
        </p>
        <p>You now have 3 options!</p>
        <ul>
          <li>
            Use an alternative chart type. See the <code>related chart</code> section below.
          </li>
          <li>
            Use <code>R</code> or <code>D3.js</code> instead of <code>python</code>, links are provided below as well.
          </li>
          <li>Build a Python library allowing to build them! I would love to share it here! 😊</li>
        </ul>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Other languages">
          Hierarchical Edge Bundling with <code>R</code> or <code>Javascript</code>
        </h2>
        <p>
          Contrary to <code>python</code> that is not of much help to build a hierarchical edge bundling,{' '}
          <code>R</code> and <code>Javascript</code> both offer built-in functions to make them. <code>R</code> will
          be more adapted if you&apos;re a data analyst and are happy with a static version. <code>Javascript</code>{' '}
          and the <code>d3.js</code> library offers more customization and interactivity options, but comes with a
          steeper learning curve and a lot of line of code. Pick your flavor!
        </p>
        <div className="my-6 flex flex-wrap gap-2">
          <a
            href="https://www.r-graph-gallery.com/hierarchical-edge-bundling"
            className={buttonVariants({ size: 'sm' })}
          >
            R code
          </a>
          <a href="https://www.d3-graph-gallery.com/bundle" className={buttonVariants({ size: 'sm' })}>
            Javascript code
          </a>
        </div>
        <div className="mx-auto max-w-[600px] p-[30px]">
          <a href="https://r-graph-gallery.com/310-custom-hierarchical-edge-bundling.html" className="block">
            <ChartImage imgName="hierarchical-edge-bundling-R" caption="Hierarchical edge bundling with R" />
          </a>
        </div>
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
