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

export default function Pie() {
  return (
    <Layout
      title="Waffle chart"
      isTocEnabled
      seoDescription="A collection of Waffle chart examples made with Python and the PyWaffle library, coming with explanation and reproducible code"
    >
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
              The input data you must provide is an array of numbers, where each
              numbers will be mapped to one of the pie item.🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/pie-plot-matplotlib-basic'}>
              <ChartImage
                imgName="503-waffle-chart-introduction-1"
                caption="Most basic donut chart with Python and Matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Mind the pie chart</h2>
          <p>
            Pie chart is probably the most criticized chart type. Humans are
            pretty bad at reading angles, making it hard to rank the groups
            accurately. Most of the time, it is better to display the
            information as a <Link to="/barplot">barchart</Link>, a{' '}
            <Link to="/treemap">treemap</Link> or a{' '}
            <Link to="/lollipop-plot">lollipop</Link> plot.
          </p>
          <p>
            Have a look to the 3 pie charts below, can you spot the pattern
            hidden in it?
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <a href="https://www.data-to-viz.com/caveat/pie.html">
              <ChartImage
                imgName={'pieChartIssue'}
                caption={
                  "Can you spot the pattern hidden behind those 3 pie charts? Click to see the same info visualized as barplots: much more insightful isn't it?"
                }
              />
            </a>
          </div>
          <a href="https://www.data-to-viz.com/caveat/pie.html">
            <Button size="sm">See it as a barplot</Button>
          </a>
          <p>
            Last but not least, please avoid the <code>explode</code> and{' '}
            <code>shadow</code> options of the pie() function, they are killing
            all the most basic dataviz principles.
          </p>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Pie chart with <code>Matplotlib</code>
        </h2>
        <p>
          The examples below should guide you through the <code>pie()</code>{' '}
          function usage. It starts basics and then show how to add labels,
          customize colors and more.
        </p>
        <Row>
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-add-labels"
            caption="Add and customize the labels"
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-add-padding"
            caption="Customize the pie section colors"
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-colors"
            caption="Add blank space between each pie section."
            linkTo="/pie-plot-matplotlib-basic"
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
