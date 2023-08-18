import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import Button from 'react-bootstrap/Button';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/cartogram.html'>cartogram</a> is a map in which each region size is distorded according to a numeric variable. Python allows to draw this kind of map thanks to the <code>Geopandas</code> and <code>Geoplot</code> libraries</p>";

export const Head = () => (
  <SEO
    title="Cartogram"
    seoDescription="A collection of cartogram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Cartogram() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Cartogram" description={chartDescription} />

      <Container>
        <h2 id="Geoplot">
          Cartogram with <code>GeoPlot</code>
        </h2>
        <p>Oh no 😞, there is no example in this section yet 😞.</p>
        <div style={{ margin: '0 auto', padding: 0 }}>
          <Link to="/choropleth-map-geopandas-python">
            <ChartImage
              imgName={'choropleth-map-geopandas-python'}
              caption={
                'Choropleth map of US counties with Python, Geopandas and Geoplot'
              }
            />
          </Link>
        </div>
        <Link to="/choropleth-map-geopandas-python">
          <Button size="xl">Read post</Button>
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
