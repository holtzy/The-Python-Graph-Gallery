import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import ChartFamilySection from "../components/ChartFamilySection";
import Spacing from "../components/Spacing";
import { Button } from "react-bootstrap";
import ArcDiagramD3 from "../components/ArcDiagramD3"

const chartDescription =
  "<p>An <a href='https://www.data-to-viz.com/graph/arc.html'>arc diagram</a> is a special kind of <a href='https://python-graph-gallery.com/network-chart/'>network graph</a>. It is consituted by <u>nodes</u> that represent entities and by <u>links</u> that show relationships between entities. In arc diagrams, nodes are displayed along a single axis and links are represented with arcs.";


export default function Arc() {

  return (

    <Layout title="Arc Diagram" isTocEnabled seoDescription="A collection of arc diagram examples made with Python, coming with explanation and reproducible code">
      <TitleAndDescription
        title="Arc diagram"
        description={chartDescription}
      />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Python">😞 Sadness and Despair for Arc diagrams with <code>Python</code>.</h2>
          <p>
            As far as I know, there isn't any proper way to build an arc diagram with python 😞. If you're aware of any tip to build it, please let me knwo! My contact is provided below 🙏🏽.
        </p>
          <p>You now have 3 options!</p>
          <ul>
            <li>Use an alternative chart type. See the <code>related chart</code> section below.</li>
            <li>Use <code>R</code> or <code>D3.js</code> instead of <code>python</code>, links are provided below as well.</li>
            <li>Build a Python library allowing to build them! I would love to share it here! 😊</li>
          </ul>
        </Container>
      </div>
      <Spacing />

      <Container>
        <h2 id="Other languages">Arc diagram with <code>R</code> or <code>Javascript</code></h2>
        <p>
          Contrary to <code>python</code> that is not of much help to build an arc diagram, <code>R</code> and <code>Javascript</code> both offer built-in functions
          to make them. <code>R</code> will be more adapted if you're a data analyst and are happy with a static version. <code>Javascript</code> and the
          <code>d3.js</code> library offers more customization and interactivity options, but comes with a steeper learning curve and a lot
          of line of code. Pick your flavor!
        </p>
        <a href="https://www.data-to-viz.com/graph/arc.html">
          <Button size="sm">R code</Button>
        </a>
        <a href="https://www.d3-graph-gallery.com/arc.html">
          <Button size="sm">Javascript code</Button>
        </a>
        <br /><br />
      </Container>
      <ArcDiagramD3 />
      <Container>
        <p>Here is an arc diagram showing the relationships between researchers. One <u>node</u> is drawn for each researcher having published at least one paper with my previous supervisor, <a href="https://sites.google.com/site/ranwez/">Vincent Ranwez</a>. Two researchers are <u>linked</u> if they co-authored at least one paper together. Read more about this dataset <a href="https://www.data-to-viz.com/story/AdjacencyMatrix.html">here</a>.</p>
        <p><i>Hover nodes for more info</i></p>
        <a className="btn btn-secondary btn-md text-uppercase" href="https://www.d3-graph-gallery.com/arc.html">See code</a>
      </Container >

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="flow" />
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
