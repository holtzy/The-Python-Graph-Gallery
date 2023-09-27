import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Seaborn } from '../components/MiscellaneousLogos';
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      A{' '}
      <a href="https://en.wikipedia.org/wiki/Candlestick_chart">
        candlestick chart
      </a>{' '}
      is a style of <b>financial chart</b> used to describe price movements of a
      security, derivative, or currency.
    </p>
    <p>
      In python there are 2 main ways to build a candlestick chart. The{' '}
      <code>mplfinance</code> package is built on top of{' '}
      <Link href="/matplotlib">matplotlib</Link> and is great to create{' '}
      <b>static</b> versions. <Link href="/plotly">Plotly</Link> has a specific
      function to create <b>interactive</b> candlestick charts.
    </p>
    <p>
      This page provides <b>several examples</b> of candlestick charts using
      those 2 libraries. Linked tutorial should help you create your own
      candlestick in a short amount of time.
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

export const Head = () => (
  <SEO
    title="Candlestick"
    seoDescription="A collection of candlestick examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Boxplot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Candlestick" description={chartDescription} />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>mplfinance</code> is the best library to quickly build a
              static candlestick chart.
            </p>
            <p>
              It comes with a dedicated <code>plot()</code> function that has a{' '}
              <code>type</code> argument that can be set to <code>candle</code>:
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/548-intro-candle-stick-matplotlib'}>
              <ChartImage
                imgName="548-intro-candle-stick-matplotlib"
                caption="Basic candlestick chart made with Python and the mplfinance library."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Candlestick with <code>mplfinance</code>
        </h2>
        <p>
          <code>mplfinance</code> is a set of matplotlib utilities for the
          visualization, and visual analysis, of financial data. Its{' '}
          <a href="https://github.com/matplotlib/mplfinance">
            official documentation
          </a>{' '}
          is available on github.
        </p>
        <p>
          Building a candlestick chart with mplfinance is made easy thanks to
          its <code>mpf.plot()</code> function that has a <code>type</code>{' '}
          argument that can be set to <code>candle</code>.
        </p>
        <p>
          Check the example below to understand how to build it from your
          dataset:
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
