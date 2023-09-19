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
    seoDescription="A collection of Waffle chart examples made with Python and the PyWaffle library, coming with explanation and reproducible code"
  />
);

export default function Waffle() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Waffle chart"
        description={chartDescription}
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
            <Link to={'/pie-plot-matplotlib-basic'}>
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
          Pie chart with <code>PyWaffle</code>
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
            caption="Waffle chart with additionnal grouping"
            linkTo="/541-waffle-chart-with-additionnal-grouping"
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
