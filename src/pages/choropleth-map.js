import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import Button from 'react-bootstrap/Button';
import { SEO } from '../components/SEO';
import ChartImageContainer from '../components/ChartImageContainer';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/choropleth.html'>choropleth map</a> displays divided geographical areas or regions that are coloured in relation to a numeric variable. This section explains how to build static choropleth with <code>geopandas</code> and <code>geoplot</code>, and interactive versions with tools like <code>folium</code> and <code>plotly</code>.</p>";

export const Head = () => (
  <SEO
    title="Choropleth map"
    seoDescription="A collection of choropleth map examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Choropleth() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Choropleth map"
        description={chartDescription}
        chartType="choropleth"
      />

      <Container>
        <h2 id="Geopandas & Geoplot">
          Choropleth map with <code>Geopandas</code> and <code>GeoPlot</code>
        </h2>
        <p>
          <code>Geoplot</code> is a python library for geospatial data
          visualization. It works pretty well with <code>geopandas</code>,
          another library made to deal with geospatial data objects.
        </p>
        <p>
          <code>Geoplot</code> has a <code>choropleth()</code> function that
          allows to build a choropleth map easily as shown in the example below.
        </p>
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

      <Container>
        <h2 id="Folium">
          <code>Folium</code> for google maps style choropleth maps
        </h2>
        <p>
          <code>Folium</code> is a wrapper of the <code>Leaflet.js</code>{' '}
          javascript library. It brings the power of javascript for data
          visualization, but still allows to do some data wrangling with Python.
          Building a choropleth with <code>Folium</code> is quite
          straightforward thanks to the
          <code>choropleth()</code> function.
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/292-choropleth-map-with-folium.html"
            title="Folium choropleth map"
            style={{ border: 'none', width: '800px', height: '430px' }}
          ></iframe>
        </div>
        <Link to="/292-choropleth-map-with-folium">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          <code>Plotly</code> for interactive choropleth maps
        </h2>
        <p>
          <code>Plotly</code> is a powerful library for <b>interactive</b> data
          visualization. It allows to build choropleth maps with the
          <code>choropleth()</code> function.
        </p>
        <p>
          Try to hover the map below to see the value of each country. You can
          also zoom in and out, and move the map around.
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/choropleth-map-plotly-python.html"
            title="parallel coordinate chart with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <Link to="/choropleth-map-plotly-python">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <code>Matplotlib</code> for static choropleth maps
        </h2>
        <p>
          <a href="https://python-graph-gallery.com/matplotlib/">Matplotlib</a>{' '}
          allows to build static choropleth maps with the <code>geopandas</code>{' '}
          library. The below example shows how to build a choropleth map of
          European countries with <code>geopandas</code>
          and <code>matplotlib</code>.
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Link to={'/web-multiple-maps'}>
              <ChartImage
                imgName={'web-multiple-maps'}
                caption={
                  'Combine multiple maps together, with a lollipop plot for the legend'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-map-europe-with-color-by-country'}>
              <ChartImage
                imgName={'web-map-europe-with-color-by-country'}
                caption={
                  'Choropleth map of European counties with Matplotlib and Geopandas'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <Link to={'/web-map-with-custom-legend'}>
              <ChartImage
                imgName={'web-map-with-custom-legend'}
                caption={
                  'Choropleth map with customized legend, using Matplotlib and Geopandas'
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
