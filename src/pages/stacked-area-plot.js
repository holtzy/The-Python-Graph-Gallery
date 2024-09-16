import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Pandas } from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { stackplot } from '../functions/stackplot';
import FunctionExploration from '../components/FunctionExploration';

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

export const Head = () => (
  <SEO
    title="Stacked area chart"
    seoDesciption="A collection of stacked area chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function StackedAreaPlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Stacked area Chart"
        description={chartDescription}
        chartType="stackedArea"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Here is a quick start code snippet to demo how the{' '}
              <code>stackplot()</code> function of <code>matplotlib</code>{' '}
              works.
            </p>
            <p>
              Note that here each groups are provided in its own vector of
              values. The{' '}
              <Link to="/250-basic-stacked-area-chart">basic stacked area</Link>{' '}
              blog post explains how to use the function from any type of data
              format.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/250-basic-stacked-area-chart'}>
              <ChartImage
                imgName="250_basic_stacked_area_chart"
                caption="The most basic stacked area chart one can make with python and matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection" id="warning">
        <Container>
          <h2 id="Warning">&#9888;&#65039; The issue with stacking</h2>
          <p>
            Stacked area charts must be used with care since they suffer a
            number of caveats. They are appropriate to study the evolution of
            the whole and the relative proportions of each group, but not to
            study the evolution of each individual group.
          </p>
          <p>
            For instance, it is pretty hard to understand how the green group
            evolves on the chart below. Can you spot if its value is increasing,
            decreasing or stable?
          </p>
          <a href="https://www.data-to-viz.com/caveat/stacking.html">
            <Button size="sm">Read more</Button>
          </a>
          <div style={{ maxWidth: '400px', margin: '0 auto', padding: 30 }}>
            <a href="https://www.data-to-viz.com/caveat/stacking.html">
              <ChartImage
                imgName={'issue-with-stacking'}
                caption={'It is hard to see how the green group evolves.'}
              />
            </a>
          </div>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Stacked Area chart with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is the most common way to build a stacked area
          chart with Python. The examples below start by explaining to basics of
          the <code>stackplot()</code> function. The also describe the most
          common type of customization like changing colors, controling group
          order and more.
        </p>
        <Row>
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
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="stackplotWidget">
        <Container>
          <FunctionExploration funDetails={stackplot} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Percent stacked">
          <Matplotlib />
          Percent Stacked Area chart with <code>Matplotlib</code>
        </h2>
        <p>
          A variation of the stacked area graph is the percent stacked area
          graph where the value of every groups are normalized at each time
          stamp. It allows to study the percentage of each group in the whole
          more efficiently.
        </p>
        <p>
          Fortunately, the <code>pandas</code> library has a{' '}
          <code>divide()</code> function that allows to apply this normalization
          easily.
        </p>
        <Row>
          <ChartImageContainer
            imgName="255_percent_stacked_area_chart"
            caption="Basic percent stacked area chart"
            linkTo="/255-percentage-stacked-area-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          <Pandas />
          Stacked Area chart with <code>Pandas</code>
        </h2>
        <p>
          <code>Pandas</code> is mainly useful to normalize your dataset and
          build a stacked area chart. Surprisingly, it also provides a{' '}
          <code>plot.area()</code>
          that can be handy to build a stacked area chart.
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/254-pandas-stacked-area-chart">
            <ChartImage
              imgName={'254_pandas_stacked_area_chart2'}
              caption={'Stacked area chart with Pandas'}
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python stacked area chart examples
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
            <Link to={'/web-lineplots-and-area-chart-the-economist'}>
              <ChartImage
                imgName={'web-lineplots-and-area-chart-the-economist-square2'}
                caption={
                  "Learn how to mimick The Economist's style with a figure combining both a line and an area chart"
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-line-chart-with-labels-at-line-end'}>
              <ChartImage
                imgName={'web-line-chart-with-labels-at-line-end'}
                caption={
                  'Not a stacked area but a line chart. But shows how to add labels at the end of each group with matplotlib. Definitely better than using a legend!'
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
          <Col xs={12} md={12}>
            <Link to={'/web-stacked-area-with-inflexion-arrows'}>
              <ChartImage
                imgName={'web-stacked-area-with-inflexion-arrows'}
                caption={'Stacked area chart with inline labels and arrows'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-stacked-area-charts-on-a-map'}>
              <ChartImage
                imgName={'web-stacked-area-charts-on-a-map'}
                caption={'Multiple stacked area charts on a map'}
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
