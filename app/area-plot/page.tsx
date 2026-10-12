import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import CodeChunk from '@/components/CodeChunk';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Area Chart Examples with Code',
  seoDescription: 'A collection of area chart examples made with Python, coming with explanation and reproducible code',
  path: '/area-plot/',
});

const chartDescription =
  "<p>An <a href='https://www.data-to-viz.com/graph/area.html'>area chart</a> is really similar to a <a href='http://python-graph-gallery.com/line-chart/'>line chart</a>, except that the area between the x axis and the line is filled in with color or shading. It represents the evolution of a numeric variable. This section starts by considering <code>matplotlib</code> and <code>seaborn</code> as tools to build area charts. It then shows a few other options for timeseries.</p>";

const quickCode = `# library
import numpy as np
import matplotlib.pyplot as plt

# Create data
x=range(1,6)
y=[1,4,6,8,4]

# Area plot
plt.fill_between(x, y)
plot.show()
`;

export default function AreaPlot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Area Chart" description={chartDescription} chartType="area" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors
              of values as input.
            </p>
            <ul>
              <li>
                The <code>fill_between()</code> function
              </li>
              <li>
                The <code>stackplot()</code> function that is more useful for{' '}
                <Link href="/stacked-area-plot">stacked area</Link> charts
              </li>
            </ul>
          </div>
          <div>
            <Link href="/240-basic-area-chart">
              <ChartImage
                imgName="240_basic_area_chart"
                caption="The most basic area chart one can make with python and matplotlib"
              />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Area chart with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is a great fit to build an area chart thanks to its <code>fill_between()</code>{' '}
          function. Here are a few examples explaining its basics and how to apply some common customization.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="240_basic_area_chart"
            caption="The most basic area chart one can make with python and matplotlib"
            linkTo="/240-basic-area-chart"
          />
          <ChartImageContainer
            imgName="241_custom_area_chart1"
            caption="Control chart color (Matplotlib)"
            linkTo="/241-improve-area-chart"
          />
          <ChartImageContainer
            imgName="241_custom_area_chart2"
            caption="Control line color"
            linkTo="/241-improve-area-chart"
          />
          <ChartImageContainer
            imgName="584-introduction-hatch-matplotlib-2"
            caption="Add patterns to your area chart"
            linkTo="/584-introduction-hatch-matplotlib"
          />
          <ChartImageContainer
            imgName="area-fill-between-two-lines-in-matplotlib"
            caption="Fill the gap between 2 line charts"
            linkTo="/area-fill-between-two-lines-in-matplotlib"
          />
        </ChartGrid>
        <div className="mx-auto max-w-[600px] p-8">
          <Link href="/243-area-chart-with-white-grid" className="block">
            <ChartImage imgName="243_another_area_chart" caption="Area chart with custom grid" />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Area chart with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The
          below examples show how to start basic, apply usual customization, and use the small multiple technique for
          when you have several groups to compare.
        </p>
        <div className="mx-auto max-w-[600px] p-8">
          <Link href="/242-area-chart-and-faceting" className="block">
            <ChartImage imgName="242_area_chart_and_faceting" caption="Area chart with small multiple, seaborn" />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best area chart examples
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
          <Link href="/web-time-series-and-facetting-with-matplotlib" className="block">
            <ChartImage
              imgName="web-time-series-and-facetting-with-matplotlib-square"
              caption="Display 2 line charts and fill the area between both. Also uses faceting to split by groups."
            />
          </Link>
          <Link href="/web-stacked-line-chart-with-labels" className="block">
            <ChartImage
              imgName="web-stacked-line-chart-with-labels-square"
              caption="A clean stacked area chart with smoothing, inline labels, caption, color palette and more"
            />
          </Link>
          <Link href="/524-area-chart-over-flexible-baseline" className="block">
            <ChartImage
              imgName="524-area-over-flexible-baseline_square"
              caption="Plotly line chart with many customization"
            />
          </Link>
          <Link href="/web-area-chart-with-different-colors-for-positive-and-negative-values" className="block">
            <ChartImage
              imgName="web-area-chart-with-different-colors-for-positive-and-negative-values-square"
              caption="A minimalist area chart with clean annotations and style"
            />
          </Link>
        </ChartGrid>
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
