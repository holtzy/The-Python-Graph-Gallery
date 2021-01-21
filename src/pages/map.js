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
  "<p>The first step of any geo-spatial data analysis is to draw the background map of the area of interest. This section explains what are the main ways to build it with <code>Python</code>. It is the foundation of the next sections that will add some data on top of it.</p>";

export default function BackgroundMap() {

  return (

    <Layout title="Background Map" isTocEnabled>

      <TitleAndDescription
        title="Background Map"
        description={chartDescription}
      />

      <Spacing />

      <Container>
        <h2 id="Intro">🔎 Input format and package overview</h2>
        <p>
          Geo-spatial data visualization is always performed in 2 main steps. You
          have to pick the right option for each step depending on your needs:
        </p>
        <ul>
          <li>
            <u>Find region boundaries</u>. This information can be retrieved using:
            <ul>
              <li>a <a href="#shape">shape file</a>. The <code>geopandas</code> library is the best way to read this file with Python.</li>
              <li>a <u>geoJson file</u></li>
              <li>a python library like <code>xxx</code> or <code>xxx</code> providing the information for specific areas</li>
              <li><code>google map</code> or <code>open street map</code>.</li>
            </ul>
          </li>

          <li><u>Manipulate and plot it</u></li>
        </ul>
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
