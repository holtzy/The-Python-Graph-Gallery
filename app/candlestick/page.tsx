import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import CodeChunk from '@/components/CodeChunk';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Plotly } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Candlestick',
  seoDescription:
    'A collection of candlestick examples made with Python, coming with explanation and reproducible code',
  path: '/candlestick/',
});

const chartDescription = (
  <>
    <p>
      A <a href="https://en.wikipedia.org/wiki/Candlestick_chart">candlestick chart</a> is a style of{' '}
      <b>financial chart</b> used to describe price movements of a security, derivative, or currency.
    </p>
    <p>
      In python there are 2 main ways to build a candlestick chart. The <code>mplfinance</code> package is built on top
      of <Link href="/matplotlib">matplotlib</Link> and is great to create <b>static</b> versions.{' '}
      <Link href="/plotly">Plotly</Link> has a specific function to create <b>interactive</b> candlestick charts.
    </p>
    <p>
      This page provides <b>several examples</b> of candlestick charts using those 2 libraries. Linked tutorial should
      help you create your own candlestick in a short amount of time.
    </p>
  </>
);

const quickCode = `#libraries
import mplfinance as mpf
import yfinance as yf #(for the dataset)

# Define the stock symbol and date range
stock_symbol = "AAPL"  # Example: Apple Inc.
start_date = "2022-01-01"
end_date = "2022-03-30"

# Load historical data
stock_data = yf.download(stock_symbol, start=start_date, end=end_date)

# plot
mpf.plot(stock_data, type='candle')
`;

export default function Candlestick() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Candlestick" description={chartDescription} chartType="candlestick" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              <code>mplfinance</code> is the best library to quickly build a static candlestick chart.
            </p>
            <p>
              It comes with a dedicated <code>plot()</code> function that has a <code>type</code> argument that can be
              set to <code>candle</code>:
            </p>
          </div>
          <div>
            <Link href={'/548-intro-candle-stick-matplotlib'}>
              <ChartImage
                imgName="548-intro-candle-stick-matplotlib"
                caption="Basic candlestick chart made with Python and the mplfinance library."
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
          Candlestick with <code>mplfinance</code>
        </h2>
        <p>
          <code>mplfinance</code> is a set of matplotlib utilities for the visualization, and visual analysis, of
          financial data. Its <a href="https://github.com/matplotlib/mplfinance">official documentation</a> is
          available on github.
        </p>
        <p>
          Building a candlestick chart with mplfinance is made easy thanks to its <code>mpf.plot()</code> function that
          has a <code>type</code> argument that can be set to <code>candle</code>.
        </p>
        <p>Check the example below to understand how to build it from your dataset:</p>
        <ChartGrid>
          <ChartImageContainer
            imgName="548-intro-candle-stick-matplotlib"
            caption="How to make a candlestick chart with Matplotlib and mplfinance"
            linkTo="/548-intro-candle-stick-matplotlib"
          />
          <ChartImageContainer
            imgName="549-candle-stick-with-moving-average"
            caption="How to add one or several moving averages to a candlestick chart"
            linkTo="/549-candle-stick-with-moving-average"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Plotly">
          <Plotly />
          Candlestick with <code>Plotly</code>
        </h2>
        <p>
          <Link href="/plotly">Plotly</Link> is a python library made to create <b>interactive</b> charts. It is
          particularly poweful when it comes to create interactive candlestick graphs.
        </p>
        <p>
          On the clandlestick example below, you can <b>zoom</b> by selecting a specific area on the chart or using the
          minimap. On top of that,{' '}
          <b>hovering</b> a specific timestamp will give you all its price details.{' '}
        </p>
        <Link href="/554-custom-candle-stick-plotly" className={buttonVariants({ size: 'sm' })}>
          See code
        </Link>
        <iframe
          src="/interactiveCharts/candlestick-plotly-custom-2.html"
          title="candlestick chart with Python and Plotly"
          loading="lazy"
          className="mx-auto mt-6 block h-[500px] w-full max-w-[900px] border-none"
        ></iframe>
        <p className="mt-6">
          Building a candlestick chart with Plotly is made easy thanks to its <code>go.Candlestick()</code> function. It
          takes as input a <code>fig</code> object that can be customized with a <code>layout</code> object.
        </p>
        <p>Check the example below to understand how to build it from your dataset:</p>
        <ChartGrid>
          <ChartImageContainer
            imgName="553-intro-candle-stick-plotly"
            caption="How to make a candlestick chart with Plotly"
            linkTo="/553-intro-candle-stick-plotly"
          />
          <ChartImageContainer
            imgName="554-custom-candle-stick-plotly"
            caption="How to customize a candlestick chart with Plotly"
            linkTo="/554-custom-candle-stick-plotly"
          />
          <ChartImageContainer
            imgName="555-candle-stick-with-moving-average-plotly"
            caption="How to add one or several moving averages to a candlestick chart"
            linkTo="/555-candle-stick-with-moving-average-plotly"
          />
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

      <Spacing />

      <TableOfContent />
    </>
  );
}
