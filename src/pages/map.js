import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>This section is dedicated to background maps. It explains what are the main ways to build them with Python. It is the foundation of the next sections that will add some data on top of it.</p>";

const quickCode = `# library
import numpy as np
import matplotlib.pyplot as plt

# Create data
x=range(1,6)
y=[1,4,6,8,4]

# Area plot
plt.fill_between(x, y)
plot.show()
`

export default function BackgroundMap() {

  return (

    <Layout title="Background Map" isTocEnabled>

      <TitleAndDescription
        title="Background Map"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors of values as input.</p>
            <ul>
              <li>The <code>fill_between()</code> function</li>
              <li>The <code>stackplot()</code> function that is more useful for <Link to='/stacked-area-plot'>stacked area</Link> charts</li>
            </ul>
          </Col>
          <Col md={6}>
            <Link to={"/240-basic-area-chart"}>
              <ChartImage imgName="240_basic_area_chart"
                caption="The most basic area chart one can make with python and matplotlib" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Folium">Area chart with <code>Folium</code></h2>
        <p>
          <code>Folium</code> is a Python library wrapping the <code>Leaflet.js</code> library. It allows to easily manage your data with <code>python</code> and make interactive map using the power of <code>Javascript</code>. Click <Link to='/288-map-background-with-folium'>here</Link> to see the code of these 4 maps.
        </p>
        <Row>
          <ChartImageContainer
            imgName="240_basic_area_chart"
            caption="The most basic area chart one can make with python and matplotlib"
            linkTo="/240-basic-area-chart"
          />
          <ChartImageContainer
            imgName="241_custom_area_chart1"
            caption="Control chart color (Matplotlib)"
            linkTo="/241-improve-area-chart"
          />
          <ChartImageContainer
            imgName="241_custom_area_chart2"
            caption="Control line color"
            linkTo="/241-improve-area-chart"
          />
        </Row>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/243-area-chart-with-white-grid'>
            <ChartImage imgName={'243_another_area_chart'} caption={'Area chart with custom grid'} />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Basemap">Background map with <code>Basemap</code></h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below examples
          show how to start basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/242-area-chart-and-faceting'>
            <ChartImage imgName={'242_area_chart_and_faceting'} caption={'Area chart with small multiple, seaborn'} />
          </Link>
        </div>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="map" />
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
