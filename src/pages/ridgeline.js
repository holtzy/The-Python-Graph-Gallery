import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Animation } from '../components/MiscellaneousLogos';
import { Button } from 'react-bootstrap';
import Spacing from '../components/Spacing';
import ChartImageContainer from '../components/ChartImageContainer';
import Row from 'react-bootstrap/Row';
import { Seaborn } from '../components/MiscellaneousLogos';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/ridgeline.html'>ridgeline</a> summarizes the distribution of a numeric variable for several groups. Each group is represented as a density chart, each density chart overlapping each other to use space more efficiently.</p>";

export const Head = () => (
  <SEO
    title="Python Ridgeline chart Gallery | Dozens of examples with code"
    seoDescription="A collection of ridgeline chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function RidgelinePlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Ridgeline chart"
        description={chartDescription}
        chartType="ridgeline"
      />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Ridgeline charts with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> does not have a dedicated section to build
          ridgeline charts. It is still possible to make one using some
          workarounds involving several call of the <code>kdeplot()</code>{' '}
          function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="ridgeline-graph-seaborn"
            caption="Ridgeline chart with python, matplotlib and seaborn."
            linkTo="/ridgeline-graph-seaborn"
          />
          <ChartImageContainer
            imgName="raincloud-plot-with-matplotlib-and-ptitprince"
            caption="Combining multiple density charts with boxplots and raincloud plots"
            linkTo="/raincloud-plot-with-matplotlib-and-ptitprince"
          />
          <ChartImageContainer
            imgName="web-ridgeline-by-text-square"
            caption="Combining density charts with quantiles and annotations"
            linkTo="/web-ridgeline-by-text"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          <Animation />
          Interactive ridgeline chart with <code>plotly</code>
        </h2>
        <p>
          Plotly is a python library that makes the link with Javascript to
          build interactive charts that you can display in a browser.
        </p>
        <p>The following example is a ridgeline chart made with this library</p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/ridgeline-graph-plotly.html"
            title="ridgeline chart with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <Link to="/ridgeline-graph-plotly">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2>Best ridgeline chart examples</h2>
        <p>
          Ridgeline charts can be used to create <b>stunning visualizations</b>.
          Here are some examples of the <b>best</b> ridgeline charts made with
          Python.
        </p>
        <Row>
          <ChartImageContainer
            imgName="web-ridgeline-by-text-square"
            caption="Ridgeline chart with annotations and quantiles"
            linkTo="/web-ridgeline-by-text"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="distribution" />
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
