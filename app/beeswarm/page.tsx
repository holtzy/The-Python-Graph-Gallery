import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import CodeChunk from '@/components/CodeChunk';
import ChartFamilySection from '@/components/ChartFamilySection';
import FunctionExploration from '@/components/FunctionExploration';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { swarmplot } from '@/lib/functions/swarmplot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Beeswarm Gallery | Dozens of examples with code',
  seoDescription:
    'A collection of beeswarm chart examples made with Python, coming with explanation and reproducible code',
  path: '/beeswarm/',
});

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com">beeswarm plot</a> or <b>swarmplot</b> is a type of data visualization
      that displays individual data points in a way that they <b>don&apos;t overlap</b>, resulting in a
      &quot;swarming&quot; effect that resembles a <b>swarm of bees</b>.
    </p>
    <p>
      This chart type helps in revealing the <b>distribution</b> of the data along a numeric variable, highlighting
      the density and variation of the data more effectively than traditional{' '}
      <a href="https://python-graph-gallery.com/scatter-plot/">scatter plots</a> or{' '}
      <a href="https://python-graph-gallery.com/boxplot/">box plots</a>.
    </p>
    <p>
      This section provides many beeswarm chart examples made with Python, using{' '}
      <Link href="/seaborn/">seaborn</Link> or <Link href="/matplotlib/">matplotlib</Link>. Examples cover the most
      common use-cases, but also show how far in term of customization it is possible to go.
    </p>
  </>
);

const quickCode = `# Libraries
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Data
my_variable = np.random.normal(loc=10, scale=5, size=100)

# Plot
sns.swarmplot(y=my_variable)
plt.show() # Display the chart
`;

export default function Beeswarm() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Beeswarm" description={chartDescription} chartType="beeswarm" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              <a href="https://python-graph-gallery.com/seaborn/">Seaborn</a> comes with a <code>swarmplot()</code>{' '}
              function that is made for beeswarm charts.
            </p>
            <p>
              It expects a <code>x</code> or a <code>y</code> argument that provides a set of <b>numeric values</b>.
            </p>
            <p>
              Many options exist. You can check the{' '}
              <a href="https://seaborn.pydata.org/generated/seaborn.swarmplot.html">official documentation</a> or the
              examples below.
            </p>
          </div>
          <div>
            <Link href="/505-introduction-to-swarm-plot-in-seaborn">
              <ChartImage
                imgName="505-Introduction-to-swarm-plot-in-seaborn-1"
                caption="Most basic beeswarm plot built with Python and Seaborn"
              />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Warning">🤔 When to use a beeswarm chart?</h2>
        <p>
          The beeswarm chart is a very good alternative to the{' '}
          <a href="https://python-graph-gallery.com/boxplot/">boxplot</a> that{' '}
          <a href="https://www.data-to-viz.com/caveat/boxplot.html">hides the underlying dataset</a>.
        </p>
        <p>
          However, do not try to use it with a <b>very big</b> dataset. Indeed, avoiding circle overlap will be
          possible with a small amount of data points, but it will get impossible otherwise. In this case, take a look
          to the <a href="https://python-graph-gallery.com/violin-plot/">violin chart</a> instead.
        </p>
        <p>
          To read more about this, visit <a href="https://www.data-to-viz.com/caveat/boxplot.html">data-to-viz.com</a>{' '}
          that has a dedicated article.
        </p>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Beeswarm with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better charts easily. The{' '}
          <code>swarmplot()</code> function should get you started in minutes. The examples below aim at showcasing
          the various possibilities this function offers.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="505-Introduction-to-swarm-plot-in-seaborn-1"
            caption="Most basic beeswarm plot built with Python and Seaborn"
            linkTo="/505-introduction-to-swarm-plot-in-seaborn"
          />
          <ChartImageContainer
            imgName="505-Introduction-to-swarm-plot-in-seaborn-2"
            caption="Make your beeswarm plot horizontal by swapping axes"
            linkTo="/505-introduction-to-swarm-plot-in-seaborn"
          />
          <ChartImageContainer
            imgName="505-Introduction-to-swarm-plot-in-seaborn-3"
            caption="Build a beeswarm plot for several groups in the dataset"
            linkTo="/505-introduction-to-swarm-plot-in-seaborn"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <FunctionExploration funDetails={swarmplot} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Beeswarm with <code>Matplotlib</code>
        </h2>
        <p>
          Building a beeswarm plot with matplotlib requires more manual work since{' '}
          <b>no built-in function exists for the job</b>.
        </p>
        <p>
          The following blog-post explains how to build yours from scratch. The function divides the data into{' '}
          <b>bins</b>, calculates the <b>upper bounds</b> for each bin, and then arranges the data points in each bin
          to create the <b>horizontal spread</b> in the plot, ensuring they don&apos;t overlap.
        </p>
        <p>
          Once the dot position is available, it is possible to render it using <b>matplotlib</b>:
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="509-introduction-to-swarm-plot-in-matplotlib-1"
            caption="Most basic beeswarm plot built with Matplotlib"
            linkTo="/509-introduction-to-swarm-plot-in-matplotlib"
          />
          <ChartImageContainer
            imgName="509-introduction-to-swarm-plot-in-matplotlib-2"
            caption="Beeswarm chart with multiple groups"
            linkTo="/509-introduction-to-swarm-plot-in-matplotlib"
          />
          <ChartImageContainer
            imgName="509-introduction-to-swarm-plot-in-matplotlib-3"
            caption="Beeswarm and boxplot combination"
            linkTo="/509-introduction-to-swarm-plot-in-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best beeswarm examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often using{' '}
          <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a> tries to display (or translate from
          R) some of the best creations and explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <ChartGrid cols={2}>
          <Link href="/web-ggbetweenstats-with-matplotlib" className="block">
            <ChartImage
              imgName="web-ggbetweenstats-with-matplotlib-square"
              caption="A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top."
            />
          </Link>
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
