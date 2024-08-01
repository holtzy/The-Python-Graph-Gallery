import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib } from '../components/MiscellaneousLogos';
import ChartImage from '../components/ChartImage';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>Timeseries charts refer to all charts representing the evolution of a numeric value. <a href='https://python-graph-gallery.com/line-chart/'>Line chart</a>, <a href='https://python-graph-gallery.com/streamchart/'>streamgraph</a>, <a href='https://python-graph-gallery.com/barplot/'>barplot</a>, <a href='https://python-graph-gallery.com/area-plot/'>area chart</a>: they all can be used for timeseries visualization. This section displays many timeseries examples made with Python, Matplotlib and other libraries.</p>";

const quickCode = `# libraries
  import matplotlib.pyplot as plt
  import numpy as np

  # create data
  values=np.cumsum(np.random.randn(1000,1))

  # use the plot function
  plt.plot(values)
  `;

export const Head = () => (
  <SEO
    title="Timeseries"
    seoDescription="A collection of timeseries examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Pie() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Timeseries"
        description={chartDescription}
        chartType="timeseries"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Making a simple line chart with <code>matplotlib</code> is pretty
              straightforward thanks to the <code>plot()</code> function.
            </p>
            <p>
              If you provide only a series of values, it will consider that
              these values are ordered and will use values from 1 to n to create
              the X axis.🔥
            </p>
            <p>
              For more control on the chart, see the dedicated section below.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/120-line-chart-with-matplotlib'}>
              <ChartImage
                imgName="120_Basic_lineplot2"
                caption="The most basic histogram one can make with python and seaborn"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Area">Area charts for timeseries</h2>
        <p>
          <Link to="/area-plot">Area charts</Link> are very often used for
          timeseries visualization. They are particularly adapted when there is
          only 1 series to display. When several groups must be displayed, they
          can still be used using faceting.
        </p>
        <Row>
          <ChartImageContainer
            imgName="240_basic_area_chart"
            caption="The most basic area chart one can make with python and matplotlib"
            linkTo="/240-basic-area-chart"
          />
          <ChartImageContainer
            imgName="242_area_chart_and_faceting"
            caption="Area chart for timeseries with facting to display many groups"
            linkTo="/242-area-chart-and-faceting"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Line">Line charts for timeseries</h2>
        <p>
          <Link to="/line-chart">Line charts</Link> are probably the most common
          type of viz for timeseries. They are particularly adapted when several
          groups must be displayed to compare their evolution. But mind the{' '}
          <a href="https://www.data-to-viz.com/caveat/spaghetti.html">
            spaghetti plot
          </a>
          : too many groups make the figure unreadable.
        </p>
        <Row>
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="Line chart with multiple groups"
            linkTo="/122-multiple-lines-chart"
          />
          <ChartImageContainer
            imgName="123_Highlight_a_line"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/123-highlight-a-line-in-line-plot"
          />
          <ChartImageContainer
            imgName="124_Spaghetti_plot"
            caption="Line chart with multiple groups"
            linkTo="/124-spaghetti-plot"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple"
            caption="Line chart and small multiple (variation)"
            linkTo="/125-small-multiples-for-line-chart"
          />
          <ChartImageContainer
            imgName="basic-time-series-with-matplotlib"
            caption="How to deal with the date format. How to represent those dates properly on the X axis."
            linkTo="/basic-time-series-with-matplotlib"
          />
          <ChartImageContainer
            imgName="line-chart-dual-y-axis-with-matplotlib1"
            caption="How to build a dual Y axis line chart to display 2 series with different units."
            linkTo="/line-chart-dual-y-axis-with-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Timeseries">Heatmap for timeseries</h2>
        <p>
          A heatmap can be used to display some temporal data. Here is an
          example using <Link to="/matplotlib">matplotlib</Link> where the
          evolution of a temperature is displayed over the hour of the day (Y
          axis) and the day of the year (X axis) organized by month.
        </p>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: 30 }}>
          <Link to="/heatmap-for-timeseries-matplotlib">
            <ChartImage
              imgName={'heatmap-for-timeseries-matplotlib'}
              caption={'A heatmap for temporal data with Python and Matplotlib'}
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Line">Candlesticks</h2>
        <p>
          A <code>candlestick chart</code> is a style of financial chart used to
          describe price movements. Each "candlestick" typically shows one day,
          with the <b>Open, High, Low, and Close (OHLC)</b> values for each day.
        </p>
        <p>
          Here are examples using{' '}
          <Link to="/matplotlib">mplfinance from matplotlib</Link> to display
          the evolution of different prices.
        </p>
        <Row>
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
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python timeseries examples
        </h2>
        <p>
          A set of publication ready charts for timeseries. They are made with
          Python and libraries like <Link href="/matplotlib">Matplotlib</Link>{' '}
          or
          <Link href="/plotly">Plotly</Link> and use a high level of
          customization.
        </p>
        <p>
          The{' '}
          <Link to="/web-line-chart-with-labels-at-line-end">
            first example
          </Link>{' '}
          is a line chart showing how to add labels at the end of each series
          for better readability. The{' '}
          <Link to="/web-lollipop-plot-with-python-the-office">second</Link>{' '}
          shows how to use lollipop to display the evolution of a deviation
          around a trend. The{' '}
          <Link to="/524-area-chart-over-flexible-baseline">last one</Link>{' '}
          shows how to use an area over a flexible baseline to display the
          deviation around a historical reference period.
        </p>
        <Row>
          <ChartImageContainer
            imgName="web-line-chart-with-labels-at-line-end"
            caption="How to add labels at the end of each line with matplotlib. Definitely better than using a legend!"
            linkTo="/web-line-chart-with-labels-at-line-end"
          />
          <ChartImageContainer
            imgName="web-lollipop-plot-with-python-the-office-square"
            caption="A highly customized lollipop chart made with Python and Matplotlib to display a timeseries."
            linkTo="/web-lollipop-plot-with-python-the-office"
          />
          <ChartImageContainer
            imgName="web-highlighted-lineplot-with-faceting-square"
            caption="A multipanel connected scatterplot, with several groups displayed and one highlighted per panel."
            linkTo="/web-highlighted-lineplot-with-faceting"
          />
          <ChartImageContainer
            imgName="web-lineplots-and-area-chart-the-economist-square1"
            caption="Learn how to mimick The Economist's style with a figure combining both a line and an area chart."
            linkTo="/web-lineplots-and-area-chart-the-economist"
          />
          <ChartImageContainer
            imgName="524-area-over-flexible-baseline_square"
            caption="Learn how to how to build an area over flexible baseline chart to show deviations from a reference or baseline."
            linkTo="/524-area-chart-over-flexible-baseline"
          />
          <ChartImageContainer
            imgName="web-stacked-charts-square"
            caption="How to build a line chart on top of a wordcloud with Python and Matplotlib."
            linkTo="/web-stacked-charts"
          />
          <ChartImageContainer
            imgName={'web-small-multiple-with-highlights-square'}
            caption={'Multiple line charts with highlights'}
            linkTo="/web-small-multiple-with-highlights"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="evolution" />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
