import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Animation } from "../components/MiscellaneousLogos"
import { Button } from "react-bootstrap";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/caveat/ridgeline.html'>ridgeline</a> summarizes the distribution of a numeric variable for several groups. Each group is represented as a density chart, each density chart overlapping each other to use space more efficiently.</p>";

export default function RidgelinePlot() {

  return (

    <Layout title="Ridgeline">

      <TitleAndDescription
        title="Ridgeline chart"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick"><Animation />Interactive ridgeline chart with <code>plotly</code></h2>
        <p>Plotly is a python library that makes the link with Javascript to build interactive charts that you can display in a browser.</p>
        <p>The following example is a ridgeline chart made with this library</p>
        <div className="mx-auto">
          <iframe src="/interactiveCharts/ridgeline-graph-plotly.html" title="ridgeline chart with plotly" style={{ border: "none", width: '800px', height: '500px' }}></iframe>
        </div>
        <Link to="/ridgeline-graph-plotly">
          <Button size="sm">
            See code
          </Button>
        </Link>
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

    </Layout >
  );
}
