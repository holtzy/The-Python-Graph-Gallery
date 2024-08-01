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
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com">Waffle Chart</a> represents
      categorical data using a <b>grid</b> of <b>equally sized squares</b> or
      rectangles, each colored or shaded to depict different categories or
      segments.
    </p>
    <p>
      Python enables the creation of waffle charts through the{' '}
      <code>PyWaffle</code>
      library. This page offers numerous examples of charts built using the
      PyWaffle library, ranging from <b>basic</b> implementations to more{' '}
      <b>advanced</b> customizations.
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

export const Head = () => (
  <SEO
    title="Waffle chart"
    seoDescription="A collection of waffle chart examples made with Python and the PyWaffle library, coming with explanation and reproducible code"
  />
);

export default function Waffle() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Waffle chart"
        description={chartDescription}
        chartType="waffle"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              The PyWaffle library allows to build a waffle chart easily thanks
              to its <code>Waffle</code> class.
            </p>
            <p>
              The input data is a <b>dictionary</b> with names as keys and
              associated integer values.
            </p>
            <p>
              The number of rows and columns can be set with the{' '}
              <code>rows</code> and <code>columns</code> arguments:
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/503-waffle-chart-introduction'}>
              <ChartImage
                imgName="503-waffle-chart-introduction-1"
                caption="Most basic waffle chart with Python and the pyWaffle library."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          Waffle chart with <code>PyWaffle</code>
        </h2>
        <p>
          The examples below should guide you through the <code>Waffle</code>{' '}
          class usage. It starts with a very basic example and then provides
          hints on how to apply usual customization like <b>using icons</b> or
          showing <b>percentages</b> in the legend.
        </p>
        <Row>
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
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best examples">Best examples</h2>
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
            imgName="web-waffle-chart-for-time-series"
            caption="Waffle chart as a time series with nice style"
            linkTo="/web-waffle-chart-for-time-series-square"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="partOfAWhole" />
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
