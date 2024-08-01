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
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/hexbinmap.html'>hexbin map</a> is a specific type of map where each region is represented as a hexagone. This section explains how to build a hexbin map with python and libraries like <code>geopandas</code> and <code>geoplot</code>.</p>";

export const Head = () => (
  <SEO
    title="Hexbin Map"
    seoDescription="A collection of hexbin map examples made with Python, coming with explanation and reproducible code"
  />
);

export default function HexbinMap() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Hexbin Map"
        description={chartDescription}
        chartType="hexbin"
      />

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Overview">🔎 2 kinds of hexbin maps ⭐ </h2>
          <p>
            There are 2 different kinds of hexbin maps as explained in{' '}
            <a href="https://www.data-to-viz.com/graph/hexbinmap.html">
              data-to-viz.com
            </a>
            :
          </p>
          <ul>
            <li>
              from a <u>hexagonal geospatial object</u>. Example: you find a
              `geoJson` file of US counties where each county is represented as
              a hexagon instead of with its real shape.
            </li>
            <br />
            <li>
              from a <u>2d density</u> technique. A set of coordinates is
              provided. The map is split in many hexagones and the number of
              data points is represented as a color in each hexagone.
            </li>
          </ul>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="From geospatial">Hexbin map from geospatial object</h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area
          chart with <code>python</code>. The below examples show how to start
          basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <Row>
          <ChartImageContainer
            imgName="hexbin-map-from-geojson-python-1"
            caption="Most basic hexbin map from geoJson with python."
            linkTo="/hexbin-map-from-geojson-python"
          />
          <ChartImageContainer
            imgName="hexbin-map-from-geojson-python-2"
            caption="Compute polygon centroid to add labels."
            linkTo="/hexbin-map-from-geojson-python"
          />
        </Row>
        <br />
        <br />
        <p>
          This is what you get with a bit of <code>matplotlib</code> tweaking:
        </p>
        <div style={{ margin: '0 auto', padding: 0 }}>
          <Link to="/hexbin-map-from-geojson-python">
            <ChartImage
              imgName={'hexbin-map-from-geojson-python-orig'}
              caption={'Clean hexbin map with python, geopandas and matplotlib'}
            />
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
    </Layout>
  );
}
