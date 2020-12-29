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
import { Button } from "react-bootstrap";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/streamgraph.html'>streamgraph</a> is a variation of the stacked area graph. It displays the evolution of a numeric value for several groups. Each group is displayed around a central axis and edges are rounded resulting in a flowing and organic shape.</p>";

export default function StackedAreaPlot() {

  return (

    <Layout title="Streamgraph" isTocEnabled>

      <TitleAndDescription
        title="Streamgraph"
        description={chartDescription}
      />

      <Container>
        <h2 id="Matplotlib"><Matplotlib />Streamgraph with <code>Matplotlib</code></h2>
        <p>
          <code>Matplotlib</code> can build streamgraphs but there isn't any prebuilt function for it
          so be ready for quite a lot of code. &#127871;
        </p>
        <p>The process starts pretty much like for a <Link to='/stacked-area-plot'>stacked area graph</Link>. The <code>baseline</code> parameter of the <code>stackplot()</code> function
          is used to place groups around the X axis. The tricky part is to interpolate points between each value of the
          X axis to get the smooth visual. This is done thanks to the <code>scipy.interpolate</code> library.
        </p>
        <Link to='/streamchart-basic-matplotlib'>
          <Button size="sm">Read more</Button>
        </Link>
        <Row>
          <ChartImageContainer
            imgName="250_basic_stacked_area_chart"
            caption="Most basic stacked area chart"
            linkTo="/250-basic-stacked-area-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Altair">Streamgraph with <code>Altair</code></h2>
        <p>
          Altair is a lesser know python library for datavizualization.
        </p>
        <p>
          Fortunately, the <code>pandas</code> library has a <code>divide()</code> function that
          allows to apply this normalization easily.
        </p>
        <Row>
          <ChartImageContainer
            imgName="streamchart-basic-altair"
            caption="Basic streamgraph with Altair and Python"
            linkTo="/255-percentage-stacked-area-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="tip">
        <Container>
          <h2 id="Workaround">&#128161; Stacked area chart as a workaround</h2>
          <p>
            It is important to note that the <code>stackplot()</code> function of <code>matplotlib</code> has a
            <code>baseline</code> parameter. This parameter controls how groups are displayed around
            the x axis, what allows to mimic a streamgraph.
          </p>
          <Link to='/252-baseline-options-for-stacked-area-chart'>
            <Button size="sm">Read more</Button>
          </Link>
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
            <Link to='/252-baseline-options-for-stacked-area-chart'>
              <ChartImage imgName={'252_baseline_and_stacked_area_chart'} caption={'It is hard to see how the green group evolves.'} />
            </Link>
          </div>
        </Container>
      </div>

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
