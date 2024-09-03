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
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

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

export const Head = () => (
  <SEO
    title="Python Area Chart Examples with Code"
    seoDescription="A collection of area chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function AreaPlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Area Chart"
        description={chartDescription}
        chartType="area"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              There are 2 main ways to build an area chart with Matplotlib. In
              both case it requires 2 numeric vectors of values as input.
            </p>
            <ul>
              <li>
                The <code>fill_between()</code> function
              </li>
              <li>
                The <code>stackplot()</code> function that is more useful for{' '}
                <Link to="/stacked-area-plot">stacked area</Link> charts
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Link to={'/240-basic-area-chart'}>
              <ChartImage
                imgName="240_basic_area_chart"
                caption="The most basic area chart one can make with python and matplotlib"
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
          Area chart with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is a great fit to build an area chart thanks
          to its <code>fill_between()</code> function. Here are a few examples
          explaining its basics and how to apply some common customization.
        </p>
        <Row>
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
        </Row>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/243-area-chart-with-white-grid">
            <ChartImage
              imgName={'243_another_area_chart'}
              caption={'Area chart with custom grid'}
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Area chart with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area
          chart with <code>python</code>. The below examples show how to start
          basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/242-area-chart-and-faceting">
            <ChartImage
              imgName={'242_area_chart_and_faceting'}
              caption={'Area chart with small multiple, seaborn'}
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best area chart examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a>{' '}
          tries to display (or translate from R) some of the best creations and
          explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
            Pull Request
          </a>
          !
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Link to={'/web-time-series-and-facetting-with-matplotlib'}>
              <ChartImage
                imgName={'web-time-series-and-facetting-with-matplotlib-square'}
                caption={
                  'Display 2 line charts and fill the area between both. Also uses faceting to split by groups.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-stacked-line-chart-with-labels'}>
              <ChartImage
                imgName={'web-stacked-line-chart-with-labels-square'}
                caption={
                  'A clean stacked area chart with smoothing, inline labels, caption, color palette and more'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/524-area-chart-over-flexible-baseline'}>
              <ChartImage
                imgName={'524-area-over-flexible-baseline_square'}
                caption={'Plotly line chart with many customization'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link
              to={
                '/web-area-chart-with-different-colors-for-positive-and-negative-values'
              }
            >
              <ChartImage
                imgName={
                  'web-area-chart-with-different-colors-for-positive-and-negative-values-square'
                }
                caption={
                  'A minimalist area chart with clean annotations and style'
                }
              />
            </Link>
          </Col>
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
