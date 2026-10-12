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
import { Matplotlib, Pandas } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { stackplot } from '@/lib/functions/stackplot';
import { buildMetadata } from '@/lib/seo';

// The former page had a typo in the seoDescription prop name, so no description was ever set.
export const metadata: Metadata = buildMetadata({
  title: 'Stacked area chart',
  path: '/stacked-area-plot/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/stackedarea.html'>stacked area chart</a> displays the evolution of a numeric variable for several groups of a dataset. Each group is displayed on top of each other, making it easy to read the evolution of the total, but hard to read each group value accurately. In python, stacked area charts are mainly done thanks to the <code>stackplot()</code> function</p>";

const quickCode = `# library
import numpy as np
import matplotlib.pyplot as plt

# Create data
x=range(1,6)
y1=[1,4,6,8,9]
y2=[2,2,7,10,12]
y3=[2,8,5,10,6]

# Basic stacked area chart.
plt.stackplot(x,y1, y2, y3, labels=['A','B','C'])
plt.legend(loc='upper left')
`;

export default function StackedAreaPlot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Stacked area Chart" description={chartDescription} chartType="stackedArea" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              Here is a quick start code snippet to demo how the <code>stackplot()</code> function of{' '}
              <code>matplotlib</code> works.
            </p>
            <p>
              Note that here each groups are provided in its own vector of values. The{' '}
              <Link href="/250-basic-stacked-area-chart">basic stacked area</Link> blog post explains how to use the
              function from any type of data format.
            </p>
          </div>
          <div>
            <Link href="/250-basic-stacked-area-chart">
              <ChartImage
                imgName="250_basic_stacked_area_chart"
                caption="The most basic stacked area chart one can make with python and matplotlib"
              />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper" id="warning">
        <h2 id="Warning">&#9888;&#65039; The issue with stacking</h2>
        <p>
          Stacked area charts must be used with care since they suffer a number of caveats. They are appropriate to
          study the evolution of the whole and the relative proportions of each group, but not to study the evolution
          of each individual group.
        </p>
        <p>
          For instance, it is pretty hard to understand how the green group evolves on the chart below. Can you spot
          if its value is increasing, decreasing or stable?
        </p>
        <a href="https://www.data-to-viz.com/caveat/stacking.html" className={buttonVariants({ size: 'sm' })}>
          Read more
        </a>
        <div className="mx-auto max-w-[400px] p-8">
          <a href="https://www.data-to-viz.com/caveat/stacking.html" className="block">
            <ChartImage imgName="issue-with-stacking" caption="It is hard to see how the green group evolves." />
          </a>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Stacked Area chart with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is the most common way to build a stacked area chart with Python. The examples
          below start by explaining to basics of the <code>stackplot()</code> function. The also describe the most
          common type of customization like changing colors, controling group order and more.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="250_basic_stacked_area_chart"
            caption="Most basic stacked area chart"
            linkTo="/250-basic-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="251_seaborn_style_on_stacked_area_chart"
            caption="Apply seaborn style on the matplotlib stacked area chart"
            linkTo="/251-stacked-area-chart-with-seaborn-style"
          />
          <ChartImageContainer
            imgName="253-control-the-color-in-stacked-area-chart-1"
            caption="Control area colors"
            linkTo="/253-control-the-color-in-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="253-control-the-color-in-stacked-area-chart-2"
            caption="Add a border between areas"
            linkTo="/253-control-the-color-in-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="253-control-the-color-in-stacked-area-chart-3"
            caption="Reduce opacity of the areas"
            linkTo="/253-control-the-color-in-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="253-control-the-color-in-stacked-area-chart-5"
            caption="Customize pattern inside the areas"
            linkTo="/253-control-the-color-in-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="242_area_chart_and_faceting"
            caption="Area chart and small multiple"
            linkTo="/242-area-chart-and-faceting"
          />
          <ChartImageContainer
            imgName="570-custom-streamchart-2"
            caption="Custom colormap in a stacked area chart"
            linkTo="/570-custom-streamchart"
          />
          <ChartImageContainer
            imgName="570-custom-streamchart-3"
            caption="Change order of the lines"
            linkTo="/570-custom-streamchart"
          />
          <ChartImageContainer
            imgName="570-custom-streamchart-4"
            caption="Smooth the chart to create a streamchart"
            linkTo="/570-custom-streamchart"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper" id="stackplotWidget">
        <FunctionExploration funDetails={stackplot} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Percent stacked">
          <Matplotlib />
          Percent Stacked Area chart with <code>Matplotlib</code>
        </h2>
        <p>
          A variation of the stacked area graph is the percent stacked area graph where the value of every groups are
          normalized at each time stamp. It allows to study the percentage of each group in the whole more
          efficiently.
        </p>
        <p>
          Fortunately, the <code>pandas</code> library has a <code>divide()</code> function that allows to apply this
          normalization easily.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="255_percent_stacked_area_chart"
            caption="Basic percent stacked area chart"
            linkTo="/255-percentage-stacked-area-chart"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Pandas">
          <Pandas />
          Stacked Area chart with <code>Pandas</code>
        </h2>
        <p>
          <code>Pandas</code> is mainly useful to normalize your dataset and build a stacked area chart. Surprisingly,
          it also provides a <code>plot.area()</code>that can be handy to build a stacked area chart.
        </p>
        <div className="mx-auto max-w-[600px] p-8">
          <Link href="/254-pandas-stacked-area-chart" className="block">
            <ChartImage imgName="254_pandas_stacked_area_chart2" caption="Stacked area chart with Pandas" />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best python stacked area chart examples
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
          <Link href="/web-stacked-line-chart-with-labels" className="block">
            <ChartImage
              imgName="web-stacked-line-chart-with-labels-square"
              caption="A clean stacked area chart with smoothing, inline labels, caption, color palette and more"
            />
          </Link>
          <Link href="/web-lineplots-and-area-chart-the-economist" className="block">
            <ChartImage
              imgName="web-lineplots-and-area-chart-the-economist-square2"
              caption="Learn how to mimick The Economist's style with a figure combining both a line and an area chart"
            />
          </Link>
          <Link href="/web-line-chart-with-labels-at-line-end" className="block">
            <ChartImage
              imgName="web-line-chart-with-labels-at-line-end"
              caption="Not a stacked area but a line chart. But shows how to add labels at the end of each group with matplotlib. Definitely better than using a legend!"
            />
          </Link>
          <Link href="/524-area-chart-over-flexible-baseline" className="block">
            <ChartImage
              imgName="524-area-over-flexible-baseline_square"
              caption="Plotly line chart with many customization"
            />
          </Link>
          <Link href="/web-stacked-area-with-inflexion-arrows" className="block sm:col-span-2">
            <ChartImage
              imgName="web-stacked-area-with-inflexion-arrows"
              caption="Stacked area chart with inline labels and arrows"
            />
          </Link>
          <Link href="/web-stacked-area-charts-on-a-map" className="block">
            <ChartImage
              imgName="web-stacked-area-charts-on-a-map"
              caption="Multiple stacked area charts on a map"
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
