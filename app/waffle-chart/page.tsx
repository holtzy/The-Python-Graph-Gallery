import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartGrid from '@/components/ChartGrid';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartFamilySection from '@/components/ChartFamilySection';
import CodeChunk from '@/components/CodeChunk';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Waffle chart',
  seoDescription:
    'A collection of waffle chart examples made with Python and the PyWaffle library, coming with explanation and reproducible code',
  path: '/waffle-chart/',
});

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com">Waffle Chart</a> represents categorical data using a <b>grid</b> of{' '}
      <b>equally sized squares</b> or rectangles, each colored or shaded to depict different categories or segments.
    </p>
    <p>
      Python enables the creation of waffle charts through the <code>PyWaffle</code>{' '}
      library. This page offers numerous examples of charts built using the PyWaffle library, ranging from{' '}
      <b>basic</b> implementations to more <b>advanced</b> customizations.
    </p>
  </>
);

const quickCode = `# useful libraries, including pyWaffle
import matplotlib.pyplot as plt
from pywaffle import Waffle

# create simple dummy data
data = {'Kevin': 10, 'Joseph': 7, 'Yan': 8}

# Basic waffle
plt.figure(
  FigureClass=Waffle,
  rows=5,
  columns=20,
  values=data,
  legend={'loc': 'upper left', 'bbox_to_anchor': (1.05, 1)},
)
plt.show()
`.trim();

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Waffle chart" description={chartDescription} chartType="waffle" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              The PyWaffle library allows to build a waffle chart easily thanks to its <code>Waffle</code> class.
            </p>
            <p>
              The input data is a <b>dictionary</b> with names as keys and associated integer values.
            </p>
            <p>
              The number of rows and columns can be set with the <code>rows</code> and <code>columns</code>{' '}
              arguments:
            </p>
          </div>
          <Link href="/503-waffle-chart-introduction" className="block">
            <ChartImage
              imgName="503-waffle-chart-introduction-1"
              caption="Most basic waffle chart with Python and the pyWaffle library."
            />
          </Link>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="waffle" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          Waffle chart with <code>PyWaffle</code>
        </h2>
        <p>
          The examples below should guide you through the <code>Waffle</code> class usage. It starts with a very basic
          example and then provides hints on how to apply usual customization like <b>using icons</b> or showing{' '}
          <b>percentages</b> in the legend.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="503-waffle-chart-introduction-1"
            caption="Basic waffle chart"
            linkTo="/503-waffle-chart-introduction"
          />
          <ChartImageContainer
            imgName="503-waffle-chart-introduction-2"
            caption="Waffle chart with Icons instead of squares"
            linkTo="/503-waffle-chart-introduction"
          />
          <ChartImageContainer
            imgName="503-waffle-chart-introduction-3"
            caption="Waffle chart with proportions in the legend."
            linkTo="/503-waffle-chart-introduction"
          />
          <ChartImageContainer
            imgName="541-waffle-chart-with-additionnal-grouping"
            caption="Waffle chart with additionnal grouping and title"
            linkTo="/541-waffle-chart-with-additionnal-grouping"
          />
          <ChartImageContainer
            imgName="558-waffle-bar-chart-1"
            caption="Simple stacked waffle bar chart"
            linkTo="/558-waffle-bar-chart"
          />
          <ChartImageContainer
            imgName="558-waffle-bar-chart-2"
            caption="Vertically stacked waffle bar chart"
            linkTo="/558-waffle-bar-chart"
          />
          <ChartImageContainer
            imgName="558-waffle-bar-chart-3"
            caption="Custom stacked waffle bar chart: legend, icons and colors"
            linkTo="/558-waffle-bar-chart"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best examples">Best examples</h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often using{' '}
          <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a> tries to display (or translate from R)
          some of the best creations and explain how their source code works. If you want to display your work here,
          please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="web-waffle-with-small-multiples-square"
            caption="Small multiples of waffle charts with nice annotations"
            linkTo="/web-waffle-with-small-multiples"
          />
          <ChartImageContainer
            imgName="web-waffle-chart-as-share-square"
            caption="Horizontal waffle charts with custom fonts and colors"
            linkTo="/web-waffle-chart-as-share"
          />
          <ChartImageContainer
            imgName="web-waffle-chart-for-time-series-square"
            caption="Waffle chart as a time series with nice style"
            linkTo="/web-waffle-chart-for-time-series"
          />
          <ChartImageContainer
            imgName="web-waffle-chart-with-groups-evolution-square"
            caption="Waffle chart as a time series with clean labels and annotations"
            linkTo="/web-waffle-chart-with-groups-evolution"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <ChartFamilySection chartFamily="partOfAWhole" />
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
