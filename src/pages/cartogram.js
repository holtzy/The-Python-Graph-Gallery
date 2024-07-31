import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { Col } from 'react-bootstrap';
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
      <TitleAndDescription
        title="Cartogram"
        description={chartDescription}
        chartType="cartogram"
      />

      <Container>
        <h2>
          😔 Cartogram with <code>Python</code>
        </h2>
        <p>
          Unfortunately, there is <strong>no direct method</strong> to build
          cartograms in Python. However, if you need to create one, you can
          easily build{' '}
          <a href="https://r-graph-gallery.com/cartogram.html">
            cartograms in R
          </a>{' '}
          using the <code>cartogram</code> package.
        </p>
        <p>
          If you have implemented a cartogram algorithm in Python, please{' '}
          <strong>share your code</strong> with the community by opening an
          issue on the{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery/issues">
            GitHub repository
          </a>{' '}
          of the gallery.
        </p>
        <p>
          The only kind of cartogram implemented in Python is the{' '}
          <code>non-contiguous cartogram</code> that preserves shape but change
          size. And the good news is that we have a tuto on the Gallery!
        </p>

        <br />

        <Link to={'/592-non-contiguous-cartogram-in-python'}>
          <img
            src="/graph/592-non-contiguous-cartogram-in-python.png"
            width="100%"
          />
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2>Other kind of maps</h2>
        <p>
          The gallery provides <strong>numerous map examples</strong> for you to
          explore. Browse the examples below:
        </p>
        <Row>
          <Col xs={12} md={4}>
            <Link to={'/web-map-with-custom-legend'}>
              <ChartImage
                imgName={'web-map-with-custom-legend'}
                caption={
                  'Choropleth map with customized legend, using Matplotlib and Geopandas'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-map-usa-with-scatter-plot-on-top'}>
              <ChartImage
                imgName={'web-map-usa-with-scatter-plot-on-top-square'}
                caption={'Bubble map of the USA with Matplotlib and Geopandas.'}
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-stacked-area-charts-on-a-map'}>
              <ChartImage
                imgName={'web-stacked-area-charts-on-a-map'}
                caption={'Stacked area charts on a map, with a special grid.'}
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-map-europe-with-color-by-country'}>
              <ChartImage
                imgName={'web-map-europe-with-color-by-country'}
                caption={
                  'Choropleth map of European counties with Matplotlib and Geopandas'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-multiple-maps'}>
              <ChartImage
                imgName={'web-multiple-maps'}
                caption={
                  'Combine multiple maps together, with a lollipop plot for the legend'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-waffle-with-small-multiples'}>
              <ChartImage
                imgName={'web-waffle-with-small-multiples'}
                caption={
                  'Use waffle chart for building a map on London boroughs'
                }
              />
            </Link>
          </Col>
        </Row>
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
