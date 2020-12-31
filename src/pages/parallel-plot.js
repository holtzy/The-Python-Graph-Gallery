import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Animation } from "../components/MiscellaneousLogos"
import { Button, Col } from "react-bootstrap";
import ChartImage from "../components/ChartImage";
import CodeChunk from "../components/CodeChunk";
import Spacing from "../components/Spacing";

const quickCode = `# libraries
import pandas
import matplotlib.pyplot as plt
from pandas.tools.plotting import parallel_coordinates

# Take the iris dataset
import seaborn as sns
data = sns.load_dataset('iris')

# Make the plot
parallel_coordinates(data, 'species', colormap=plt.get_cmap("Set2"))
plt.show()
`

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/parallel.html'>parallel plot</a> plot allows to compare the feature of several individual observations (series) on a set of numeric variables. Interestingly, <code>Pandas</code> is probably the best way to plot a parallel coordinate plot with python. <code>Plotly</code> is a good alternative to plot interactive versions though.</p>";

export default function Parallel() {

  return (

    <Layout title="Parallel coordinate plot" isTocEnabled>
      <TitleAndDescription
        title="Parallel coordinate plot"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>Pandas</code> is probably the best way to make a parallel coordinate plot. This library is most often used for data wrangling, but it offers a <code>parallel_coordinates()</code> function dedicated to it.🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/150-parallel-plot-with-pandas"}>
              <ChartImage imgName="150_Parrallele_plot_with_pandas"
                caption="Most basic parallel plot with Python and Pandas."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">Parallel coordinate chart with <code>Python</code> and <code>Pandas</code></h2>
        <p>
          The following examples are dedicated to the <code>parallel_coordinates()</code> function
          of <code>Pandas</code>. It shows how to apply the most common types of customization.
        </p>
        <p>If you need to go further, here is the complete <a href='https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.plotting.parallel_coordinates.html'>pandas documentation</a></p>
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
        <h2 id="Plotly"><Animation />Interactive parallel coordinate with <code>plotly</code></h2>
        <p><code>Plotly</code> is a python library that makes the link with Javascript to build interactive charts that you can display in a browser.</p>
        <p>The following example is a parallel chart made with this library and the <code>parallel_coordinates()</code> function.</p>
        <div className="mx-auto">
          <iframe src="/interactiveCharts/parallel-coordinate-plot-plotly.html" title="parallel coordinate chart with plotly" style={{ border: "none", width: '800px', height: '500px' }}></iframe>
        </div>
        <Link to="/parallel-coordinate-plot-plotly">
          <Button size="sm">
            See code
          </Button>
        </Link>
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

    </Layout >
  );
}
