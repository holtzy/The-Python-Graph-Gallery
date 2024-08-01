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

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/correlogram.html'>correlogram</a> or <a href='https://www.data-to-viz.com/graph/correlogram.html'>correlation matrix</a> allows to analyse the relationship between each pair of numeric variables of a matrix. The correlation is visualised as a <a href='https://python-graph-gallery.com/scatter-plot'>scatterplot</a>. The diagonal represents the distribution of each variable with a <a href='https://python-graph-gallery.com/histogram'>histogram</a> or a <a href='https://python-graph-gallery.com/density-plot'>density plot</a>.</p > ";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')
import matplotlib.pyplot as plt

# Basic correlogram
sns.pairplot(df)
plt.show()
`;

export const Head = () => (
  <SEO
    title="Correlogram"
    seoDescription="A collection of correlogram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Correlogram() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Correlogram"
        description={chartDescription}
        chartType="correlogram"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Once more, the <code>Seaborn</code> library is here to build a
              high quality correlogram with a few lines of code only.🔥
            </p>
            <p>
              Note that all the stuff you learned in the{' '}
              <Link to="/scatter-plot">scatterplot</Link>
              and <Link to="/histogram">histogram</Link> sections can be used
              here.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/110-basic-correlation-matrix-with-seaborn'}>
              <ChartImage
                imgName="110_Basic_Correlogram"
                caption="Basic correlogram with Python and Seaborn."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Correlogram with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is definitely the best way to build a correlogram
          with <code>python</code>. It provides a <code>pairplot()</code>{' '}
          function that handles most of the work for you. The examples below
          give an overview of the customizations you can apply to it to suits
          your need.
        </p>
        <Row>
          <ChartImageContainer
            imgName="111_Correlogram_custom1"
            caption="Correlogram with linear trend displayed on each scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom4"
            caption="Apply colors to each group and customized the scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom7"
            caption="Customize the distributions displayed on the diagonal"
            linkTo="/111-custom-correlogram"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Correlogram with <code>Matplotlib</code>
        </h2>
        <p>
          As usual it is totally possible to build the chart with Matplotlib,
          but requires to write a bit more code. Basically, it is done using the
          subplots() function to create the grid, and next building a loop to
          add the charts one by one.
        </p>
        <Row>
          <ChartImageContainer
            imgName="how-to-remove-axis-in-matplotlib"
            caption="How to remove some unused entries in a chart grid."
            linkTo="/how-to-remove-axis-in-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Related">
            &#128161; Scatterplot and Histogram sections are related
          </h2>
          <p>
            Note that a correlogram is an aggregate of{' '}
            <Link to="/scatter-plot">scatterplots</Link> and{' '}
            <Link to="/histogram">histograms</Link>. Most of the customizations
            described in those related sections can be applied here.
          </p>
          <Link to="/scatter-plot">
            <Button size="sm">Scatterplot section</Button>
          </Link>
          <Link to="/histogram">
            <Button size="sm">Histogram section</Button>
          </Link>
        </Container>
      </div>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="correlation" />
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
