import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/line.html'>line chart</a> displays the evolution of one or several numeric variables. It is one of the most common chart type, so it can be build using any python viz library, like <code>matplotlib</code>, <code>seaborn</code> or <code>plotly</code>.</p>";

const quickCode = `# libraries
import matplotlib.pyplot as plt
import numpy as np

# create data
values=np.cumsum(np.random.randn(1000,1))

# use the plot function
plt.plot(values)
`

export default function LinePlot() {

  return (

    <Layout title="Line chart">
      <TitleAndDescription
        title="Line Chart"
        description={chartDescription}
      />
      <Container>

        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>Making a simple line chart with <code>matplotlib</code> is pretty straightforward thanks to the <code>plot()</code> function.</p>
            <p>If you provide only a series of values, it will consider that these values are ordered and will use values from 1 to n to create the X axis.🔥</p>
            <p>For more control on the chart, see the dedicated section below.</p>
          </Col>
          <Col md={6}>
            <Link to={"/120-line-chart-with-matplotlib"}>
              <ChartImage imgName="120_Basic_lineplot2"
                caption="The most basic histogram one can make with python and seaborn" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />

        <h2 id="Matplotlib"><Matplotlib />Line chart with <code>Matplotlib</code></h2>
        <p>
          <code>Matplotlib</code> is a great fit to build line charts thanks to its <code>plot()</code> function. The <Link to='/120-line-chart-with-matplotlib'>first chart</Link> of
          this section explains how to use <code>plot()</code> from any kind of data input format. The <Link to='/121-line-chart-customization'>next one</Link> goes deep
          into chart customization (line width, color aspect and more).
        </p>
        <Row>
          <ChartImageContainer
            imgName="120_Basic_lineplot1"
            caption="How to build a basic line chart with python from any kind of input format"
            linkTo="/120-line-chart-with-matplotlib"
          />
          <ChartImageContainer
            imgName="121_Custom_line_plot3"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/121-line-chart-customization"
          />
        </Row>

        <h2 id="Multiple"><Matplotlib />Line chart with several groups (<code>Matplotlib</code>)</h2>
        <p>
          A line chart with multiple groups allows to show the evolution of several items on the same figure. It
          is powerful but can quickly turn into a <a href='https://www.data-to-viz.com/caveat/spaghetti.html'>spaghetti chart</a>: when too many lines are displayed they get hard to
          read. The examples below explain how to build one, and what are the alternative to show your data a better way.
        </p>
        <Row>
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="Line chart with multiple groups"
            linkTo="/122-multiple-lines-chart"
          />
          <ChartImageContainer
            imgName="123_Highlight_a_line"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/123-highlight-a-line-in-line-plot"
          />
          <ChartImageContainer
            imgName="124_Spaghetti_plot"
            caption="Line chart with multiple groups"
            linkTo="/124-spaghetti-plot.ipynb"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple_v2"
            caption="Line chart and small multiple"
            linkTo="/125-small-multiples-for-line-chart"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple"
            caption="Line chart and small multiple (variation)"
            linkTo="/125-small-multiples-for-line-chart"
          />
        </Row>

      </Container>

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="evolution" />
        </Container>
      </div>
      <Container>
        <Contact />
      </Container>

    </Layout >
  );
}
