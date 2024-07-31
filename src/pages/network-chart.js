import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/network.html'>Network diagram</a> (or chart, or graph) show interconnections between a set of entities. Each entity is represented by a node (or vertices). Connection between nodes are represented through links (or edges). This section mainly focuses on <code>NetworkX</code>, probably the best library for this kind of chart with <code>python</code>.";

export const Head = () => (
  <SEO
    title="Network chart"
    seoDescription="A collection of network chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Network() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Network chart"
        description={chartDescription}
        chartType="network"
      />

      <Container>
        <h2 id="NetworkX">
          Network diagram with the <code>NetworkX</code> library
        </h2>
        <p>
          <a href="https://networkx.org">NetworkX</a> is a Python package for
          the creation, manipulation, and study of the structure, dynamics, and
          functions of complex networks..
        </p>
        <p>
          The examples below will guide you through a migration dataset already
          discussed in{' '}
          <a href="https://www.data-to-viz.com/graph/chord.html">
            data-to-viz.com
          </a>
          . It starts by describing the input dataset and the basic usage of the{' '}
          <code>Chord()</code> function.
        </p>
        <a href="https://networkx.org">
          <Button size="sm">Official doc</Button>
        </a>
        <br />
        <br />
        <Row>
          <ChartImageContainer
            imgName="320_Network_start_simple"
            caption="Most basic network chart with Python and NetworkX"
            linkTo="/320-basic-network-from-pandas-data-frame"
          />
          <ChartImageContainer
            imgName="321_Network_custom_look4"
            caption="Custom network appearance: color, shape, size, links"
            linkTo="/321-custom-networkx-graph-appearance"
          />
          <ChartImageContainer
            imgName="322_Network_layout4"
            caption="Control the layout used for the node location"
            linkTo="/322-network-layout-possibilities"
          />
          <ChartImageContainer
            imgName="323_Network_direction1"
            caption="Manage directed and undirected networks by adding arrows"
            linkTo="/323-directed-or-undirected-network"
          />
          <ChartImageContainer
            imgName="326_Network_background_color"
            caption="Control the background color of a network chart"
            linkTo="/326-background-colour-of-network-chart"
          />
          <ChartImageContainer
            imgName="500-network-chart-with-edge-bundling"
            caption="Bundles network edges together to reduce the figure visual clutter"
            linkTo="/500-network-chart-with-edge-bundling"
          />
        </Row>
        <br />
        <p>
          A common need when dealing with network charts is to map a numeric or
          categorical variable to the nodes or edges appearance. This is totally
          doable and adds some insight to the figure.
        </p>
        <Row>
          <ChartImageContainer
            imgName="324_Network_mapcolor1"
            caption="Map a continuous or categoric variable to nodes"
            linkTo="/324-map-a-color-to-network-nodes"
          />
          <ChartImageContainer
            imgName="325_Network_mapcolorttoedge1"
            caption="Map a color to edges"
            linkTo="/325-map-colour-to-the-edges-of-a-network"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Similarity matrix">Network chart from similarity matrix</h2>
        <p>
          Another commin task is to build a network chart from a correlation
          matrix. Let's say you have several numeric variables describing some
          items in a dataset. You can compute a similarity matrix and display it
          as a network chart. This process is described in the
          <Link to="/327-network-from-correlation-matrix">post #327</Link>{' '}
          below.
        </p>
        <Row>
          <ChartImageContainer
            imgName="327_Network_from_correlation"
            caption="Network chart from correlation matrix with Python and NetworkX"
            linkTo="/327-network-from-correlation-matrix"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Graph-tool">
          Network diagram with <code>graph-tool</code>
        </h2>
        <p>
          The <a href="https://graph-tool.skewed.de">graph tool</a> library is a
          python library implemented in C++. It makes it highly efficient to
          draw networks containing many nodes. Graphics to come.
        </p>
        <a href="https://graph-tool.skewed.de">
          <Button size="sm">Official doc</Button>
        </a>
      </Container>

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
    </Layout>
  );
}
