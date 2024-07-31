import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/story/MapConnection.html'>connection map</a> allows to show the connection between several positions on a map. The link between 2 places can be drawn with a straight line, or more commonly using <code>great circles</code>: the shortest route between them. The earth beeing a sphere, it results in arcs that give a really pleasant look to the map.</p>";

export const Head = () => (
  <SEO
    title="Connection Map"
    seoDescription="A collection of connection map examples made with Python, coming with explanation and reproducible code"
  />
);

export default function ConnectionMap() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Connection Map"
        description={chartDescription}
        chartType="connection"
      />

      <Container>
        <h2 id="Basemap">
          Background map with <code>Basemap</code>
        </h2>
        <p>
          <code>Basemap</code> is probably the best option to draw a connection
          map with <code>python</code>. It provides a function called
          <code>drawgreatcircle()</code> that draws the connection using great
          circles. Great circles are arcs that gives a better appearance than
          straight lines.
        </p>
        <Row>
          <ChartImageContainer
            imgName="300-draw-a-connection-line1"
            caption="Most basic connection map with Python and Basemap."
            linkTo="/300-draw-a-connection-line"
          />
          <ChartImageContainer
            imgName="300-draw-a-connection-line2"
            caption="Show connection between a few cities with great circles."
            linkTo="/300-draw-a-connection-line"
          />
        </Row>
        <br />
        <br />
        <p>
          This is the result when you visualize the connection between 7 major
          world cities:
        </p>
        <div style={{ margin: '0 auto' }}>
          <Link to="/300-draw-a-connection-line">
            <ChartImage
              imgName={'300-draw-a-connection-line3'}
              caption={
                'A connection map between 7 cities made with Python and Basemap'
              }
            />
          </Link>
        </div>
        <Link to="/300-draw-a-connection-line">
          <Button size="sm">Code and explanation</Button>
        </Link>
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
    </Layout>
  );
}
