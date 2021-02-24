import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Matplotlib } from "../components/MiscellaneousLogos"
import Spacing from "../components/Spacing";
import { Link } from "gatsby";
import ChartImage from "../components/ChartImage";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>";


export default function Heatmap() {

  return (

    <Layout title="Circular Barplot">

      <TitleAndDescription
        title="Circular Barplot"
        description={chartDescription}
      />

      <Container>
        <h2 id="Matplotlib"><Matplotlib />Circular barplot with <code>Matplotlib</code></h2>
        <p>
          <code>Matplotlib</code> allows to build circular barplots thanks to the <code>polar</code> Layout
          option of the <code>subplot()</code> function. Examples below should guide you from
          the most simple version to some more customization.
        </p>
        <p>It starts by explaining how the polar coordinates of <code>matplotlib</code> works, show how to use it to draw bars
          and finally goes into the trickiness of adding labels.
        </p>
        <Row>
          <ChartImageContainer
            imgName="circular-barplot-basic1"
            caption="Explanation of the polar coordinates with Matplotlib."
            linkTo="/circular-barplot-basic"
          />
          <ChartImageContainer
            imgName="circular-barplot-basic2"
            caption="Most basic circular barplot with Python and Matplotlib."
            linkTo="/circular-barplot-basic"
          />
          <ChartImageContainer
            imgName="circular-barplot-basic4"
            caption="Reorder items."
            linkTo="/circular-barplot-basic"
          />
        </Row>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: 30 }}>
          <Link to='/circular-barplot-basic'>
            <ChartImage imgName={'circular-barplot-basic3'} caption={'Circular barplot with labels'} />
          </Link>
        </div>
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
