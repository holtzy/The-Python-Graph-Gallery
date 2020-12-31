import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Seaborn, Matplotlib } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/barplot.html'>barplot</a> shows the relationship between a numeric and a categoric variable. Each entity of the categoric variable is represented as a bar. The size of the bar represents its numeric value. This section shows how to build a barplot with <code>Python</code>, using <code>Matplotlib</code> and <code>Seaborn</code>.";

const quickCode = `# Libraries
import numpy as np
import matplotlib.pyplot as plt

# Make a random dataset:
height = [3, 12, 5, 18, 45]
bars = ('A', 'B', 'C', 'D', 'E')
y_pos = np.arange(len(bars))

# Create bars
plt.bar(y_pos, height)

# Create names on the x-axis
plt.xticks(y_pos, bars)

# Show graphic
plt.show()
`

export default function Heatmap() {

  return (

    <Layout title="Barplot" isTocEnabled>
      <TitleAndDescription
        title="Barplot"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>Matplotlib</code> is pretty convenient to build a barplot thanks to its <code>bar()</code> function. Seaborn works perfectly as well, see its dedicated section.🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/1-basic-barplot"}>
              <ChartImage imgName="1_basic_barplot"
                caption="Most basic barplot with Python & Matplotlib." />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib"><Matplotlib />Barplot with <code>Matplotlib</code></h2>
        <p>
          <code>Matplotlib</code> is probably the most famous and flexible python library for data visualization.
          It is appropriate to build any kind of chart, including the
          barchart thanks to its <code>bar()</code> function.
        </p>
        <p>The examples below should get you started. They go from <Link to="/1-basic-barplot">basic examples</Link> to the details on
        how to <Link to='/3-control-color-of-barplots'>customize</Link> a barplot appropriately.
        </p>
        <Row>
          <ChartImageContainer
            imgName="2_horizontal_barplot"
            caption="Horizontal barplot, handy to make labels more readable."
            linkTo="/2-horizontal-barplot"
          />
          <ChartImageContainer
            imgName="3_control_color_barplot2"
            caption="Barplot and color customization."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="3_control_color_barplot4"
            caption="Change the bar stroke colors."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="4_add_title_and_axe_labels"
            caption="Title and axis labels with Matplotlib."
            linkTo="/4-add-title-and-axis-label"
          />
          <ChartImageContainer
            imgName="5_custom_space_between_bars"
            caption="Custom bar width. Can be handy to illustrate the sample size."
            linkTo="/5-control-width-and-space-in-barplots"
          />
          <ChartImageContainer
            imgName="5_custom_width_of_bars"
            caption="Custom space between bars."
            linkTo="/5-control-width-and-space-in-barplots"
          />
          <ChartImageContainer
            imgName="6_change_texture"
            caption="Change bar texture."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="7_increase_margin"
            caption="More space under X axis to fit long labels."
            linkTo="/7-custom-barplot-layout"
          />
          <ChartImageContainer
            imgName="7_custom_label"
            caption="Customize the bar labels."
            linkTo="/7-custom-barplot-layout"
          />
          <ChartImageContainer
            imgName="8_confidence_interval"
            caption="Barplot with confidence interval."
            linkTo="/8-add-confidence-interval-on-barplot"
          />
          <ChartImageContainer
            imgName="10_barplot_with_number_of_observations"
            caption="Highly customized barplot with colors, legend, labels and more."
            linkTo="/10-barplot-with-number-of-observation"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn"><Seaborn />Barplot with <code>Seaborn</code></h2>
        <p>
          <code>Seaborn</code> is definitely a good alternative to <code>Matplotlib</code> to
          build a barplot. It comes with a <code>barplot()</code> function that will get you started in minutes.
        </p>
        <p>As often, note that the <code>Seaborn</code> alternative allows to write less code
        to build the chart, but is slighlty more limited in term of customization</p>
        <Row>
          <ChartImageContainer
            imgName="90_Input_format_for_heatmap1"
            caption="The heatmap() function and how to apply it to any kind of data input"
            linkTo="/90-heatmaps-with-various-input-format"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Stacked & Grouped"><Matplotlib />Stacked and Grouped barplot with <code>Matplotlib</code></h2>
        <p>
          <u>Stacked</u> and <u>Grouped</u> barplots are a variation of the more simple barplot. They display
          the value of a numeric variable for each group and subgroups of a dataset. Subgroups
          can be stacked (stacked barplot) or set one beside the other (grouped barplot).
        </p>
        <p>The three examples below are in-depth tutorial explaining how to build them with Python.
        </p>
        <Row>
          <ChartImageContainer
            imgName="12_stacked_barplot"
            caption="How to build a stacked barplot with Python."
            linkTo="/11-grouped-barplot"
          />
          <ChartImageContainer
            imgName="12_grouped_barplot"
            caption="How to build a grouped barplot with Python."
            linkTo="/12-stacked-barplot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="12_stacked_barplot"
            caption="How to build a percent stacked barplot with Python.."
            linkTo="/13-percent-stacked-barplot"
          />
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

    </Layout >
  );
}
