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
import ChartImage from "../components/ChartImage";
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk";
import Spacing from "../components/Spacing";


const chartDescription =
  "<p>Timeseries charts refer to all charts representing the evolution of a numeric value. <a href='https://www.python-graph-gallery.com/line-chart/'>Line chart</a>, <a href='https://www.python-graph-gallery.com/streamchart/'>streamgraph</a>, <a href='https://www.python-graph-gallery.com/barplot/'>barplot</a>, <a href='https://www.python-graph-gallery.com/area-plot/'>area chart</a>: they all can be used for timeseries visualization. This section displays many timeseries examples made with Python, Matplotlib and other libraries.</p>";


  const quickCode = `# libraries
  import matplotlib.pyplot as plt
  import numpy as np

  # create data
  values=np.cumsum(np.random.randn(1000,1))

  # use the plot function
  plt.plot(values)
  `

export default function Pie() {

  return (

    <Layout title="Timeseries" isTocEnabled seoDescription="A collection of timeseries examples made with Python, coming with explanation and reproducible code">
      <TitleAndDescription
        title="Timeseries"
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
      </Container>

      <Spacing />

      <Container>
        <h2 id="Area">Area charts for timeseries</h2>
        <p>
          <Link to='/area-plot'>Area charts</Link> are very often used for timeseries visualization. They are
          particularly adapted when there is only 1 series to display. When several
          groups must be displayed, they can still be used using faceting.
        </p>
        <Row>
          <ChartImageContainer
            imgName="240_basic_area_chart"
            caption="The most basic area chart one can make with python and matplotlib"
            linkTo="/240-basic-area-chart"
          />
          <ChartImageContainer
            imgName="242_area_chart_and_faceting"
            caption="Area chart for timeseries with facting to display many groups"
            linkTo="/242-area-chart-and-faceting"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Line">Line charts for timeseries</h2>
        <p>
          <Link to='/line-chart'>Line charts</Link> are probably the most common type of viz for timeseries. They are
          particularly adapted when several groups must be displayed to compare their evolution. But mind
          the <a href='data to viz spaghetti'>spaghetti plot</a>: too many groups make the figure unreadable.
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
            imgName="125_Lineplot_small_multiple"
            caption="Line chart and small multiple (variation)"
            linkTo="/125-small-multiples-for-line-chart"
          />
          <ChartImageContainer
            imgName="basic-time-series-with-matplotlib"
            caption="How to deal with the date format. How to represent those dates properly on the X axis."
            linkTo="/basic-time-series-with-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="From the web"><Matplotlib />From the web</h2>
        <p>
          A set of publication ready charts for timeseries. They are made with python
          and <a href='A highly customized lollipop chart made with Python and Matplotlib to display a timeseries.'>matplotlib</a> and
          use a high level of customization.</p>
        <p>
          The <Link to='/web-line-chart-with-labels-at-line-end'>first example</Link> is a line chart showing how to add labels at the end of each series
          for better readability. The <Link to='/web-lollipop-plot-with-python-the-office'>second</Link> shows how to use lollipop to display the evolution of a deviation around a trend.
        </p>
        <Row>
          <ChartImageContainer
            imgName="web-line-chart-with-labels-at-line-end"
            caption="How to add labels at the end of each line with matplotlib. Definitely better than using a legend!"
            linkTo="/web-line-chart-with-labels-at-line-end"
          />
          <ChartImageContainer
            imgName="web-lollipop-plot-with-python-the-office-square"
            caption="A highly customized lollipop chart made with Python and Matplotlib to display a timeseries."
            linkTo="/web-lollipop-plot-with-python-the-office"
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

    </Layout >
  );
}
