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
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/line.html'>line chart</a> displays the evolution of one or several numeric variables. It is one of the most common chart type, so it can be build using any python viz library, like <code>matplotlib</code>, <code>seaborn</code> or <code>plotly</code>. This kind of basic chart type can also be learned in this <a target='_blank' href='https://datacamp.pxf.io/YgNDbR'>online course</a>.</p>";

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

    <Layout title="Line chart" isTocEnabled seoDescription="A collection of line chart examples made with Python, coming with explanation and reproducible code">

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
                caption="A basic line chart made with python and seaborn" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib"><Matplotlib />Line chart with <code>Matplotlib</code></h2>
        <p>
          <code>Matplotlib</code> is a great fit to build line charts thanks to its <code>plot()</code> function. The <Link to='/120-line-chart-with-matplotlib'>first chart</Link> of
          this section explains how to use <code>plot()</code> from any kind of data input format. The <Link to='/121-line-chart-customization'>next one</Link> goes deep
          into chart customization (line width, color aspect and more). A common need is to build a <Link to="/line-chart-dual-y-axis-with-matplotlib">dual Y axis line chart</Link>, but be mindful of the <a href="https://www.data-to-viz.com/caveat/dual_axis.html">caveats</a> that go with it.
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
          <ChartImageContainer
            imgName="basic-time-series-with-matplotlib"
            caption="How to deal with the date format. How to represent those dates properly on the X axis."
            linkTo="/basic-time-series-with-matplotlib"
          />
          <ChartImageContainer
            imgName="line-chart-dual-y-axis-with-matplotlib1"
            caption="How to build a dual Y axis line chart to display 2 series with different units."
            linkTo="/line-chart-dual-y-axis-with-matplotlib"
          />
          <ChartImageContainer
            imgName="area-fill-between-two-lines-in-matplotlib"
            caption="Fill the gap between 2 line charts"
            linkTo="/area-fill-between-two-lines-in-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Multiple groups"><Matplotlib />Line chart with several groups (<code>Matplotlib</code>)</h2>
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
            linkTo="/124-spaghetti-plot"
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

      <Spacing />

      <Container>
        <h2 id="From the web"><Matplotlib />From the web</h2>
        <p>The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>).
          The <a href="https://www.python-graph-gallery.com">Python graph gallery</a> tries to
          display (or translate from R) some of the best creations and explain how their source
          code works. If you want to display your work here, please drop me a word or
          even better, submit a <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Link to={"/web-line-chart-with-labels-at-line-end"}>
              <ChartImage imgName={"web-line-chart-with-labels-at-line-end"} caption={"How to add labels at the end of each line with matplotlib. Definitely better than using a legend!"} />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={"/web-time-series-and-facetting-with-matplotlib"}>
              <ChartImage imgName={"web-time-series-and-facetting-with-matplotlib-square"} caption={"Display 2 line charts and fill the area between both. Also uses faceting to split by groups."} />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={"/web-highlighted-lineplot-with-faceting"}>
              <ChartImage imgName={"web-highlighted-lineplot-with-faceting"} caption={"A multipanel connected scatterplot, with several groups displayed and one highlighted per panel."} />
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

    </Layout >
  );
}
