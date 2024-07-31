import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Animation, Matplotlib } from '../components/MiscellaneousLogos';
import { Button, Col } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const quickCode = `# libraries
import pandas
import matplotlib.pyplot as plt
from pandas.plotting import parallel_coordinates

# Take the iris dataset
import seaborn as sns
data = sns.load_dataset('iris')

# Make the plot
parallel_coordinates(data, 'species', colormap=plt.get_cmap("Set2"))
plt.show()
`;

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/parallel.html'>parallel plot</a> plot allows to compare the feature of several individual observations (series) on a set of numeric variables. Interestingly, <code>Pandas</code> is probably the best way to plot a parallel coordinate plot with python. <code>Plotly</code> is a good alternative to plot interactive versions though.</p>";

export const Head = () => (
  <SEO
    title="Parallel coordinate plot"
    seoDescription="A collection of parallel coordinate chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Parallel() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Parallel coordinate plot"
        description={chartDescription}
        chartType="parallel"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>Pandas</code> is probably the best way to make a parallel
              coordinate plot. This library is most often used for data
              wrangling, but it offers a <code>parallel_coordinates()</code>{' '}
              function dedicated to it.🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/150-parallel-plot-with-pandas'}>
              <ChartImage
                imgName="150_Parrallele_plot_with_pandas"
                caption="Most basic parallel plot with Python and Pandas."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          Parallel coordinate chart with <code>Python</code> and{' '}
          <code>Pandas</code>
        </h2>
        <p>
          The following examples are dedicated to the{' '}
          <code>parallel_coordinates()</code> function of <code>Pandas</code>.
          It shows how to apply the most common types of customization.
        </p>
        <p>
          If you need to go further, here is the complete{' '}
          <a href="https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.plotting.parallel_coordinates.html">
            pandas documentation
          </a>
        </p>
        <Row>
          <ChartImageContainer
            imgName="150_Parrallele_plot_with_pandas"
            caption="Basic parallel coordinate char"
            linkTo="/150-parallel-plot-with-pandas"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          Parallel coordinate chart with <code>Seaborn</code>
        </h2>
        <p>
          <Link href="/seaborn">Seaborn</Link> and its <code>lineplot()</code>{' '}
          function is another very good alternative when it comes to create
          parallel coordinate charts with Python.{' '}
        </p>
        <p>
          Used in conjunction with <Link href="/matplotlib">matplotlib</Link>,
          it allows to reach a great level of customization as shown in the
          example below
        </p>
        <Row>
          <ChartImageContainer
            imgName="501-parallel-plot-seaborn"
            caption="Basic parallel coordinate chart with Seaborn"
            linkTo="/501-parallel-plot-seaborn"
          />
          <ChartImageContainer
            imgName="web-slope-chart-matplotlib-square"
            caption="A polished slope chart made with Python, Seaborn and Matplotlib"
            linkTo="/web-slope-chart-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          <Animation />
          Interactive parallel coordinate with <code>plotly</code>
        </h2>
        <p>
          <code>Plotly</code> is a python library that makes the link with
          Javascript to build interactive charts that you can display in a
          browser.
        </p>
        <p>
          The following example is a parallel chart made with this library and
          the <code>parallel_coordinates()</code> function.
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/parallel-coordinate-plot-plotly.html"
            title="parallel coordinate chart with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <Link to="/parallel-coordinate-plot-plotly">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python parallel plot examples
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
          <Col xs={12} md={4}>
            <Link to={'/web-radar-chart-with-matplotlib'}>
              <ChartImage
                imgName={'web-radar-chart-with-matplotlib-square'}
                caption={
                  'A radar chart can be an alternative to a parallel coordinate plot.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-lemurs-parallel-chart'}>
              <ChartImage
                imgName={'web-lemurs-parallel-chart-square'}
                caption={
                  'A parallel plot or slope chart with groups, legend, title and annotation.'
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="ranking" />
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
