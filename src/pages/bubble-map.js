import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/bubblemap.html'>bubble map</a> uses circles of different size to represent a numeric value on a territory. It displays one bubble per geographic coordinate, or one bubble per region. As for <a href='https://python-graph-gallery.com/map/'>background maps</a>, several python libraries are useful to build them: <code>folium</code>, <code>geopandas</code>, <code>geoplot</code> and <code>basemap</code> are listed here.</p>";

export const Head = () => (
  <SEO
    title="Bubble Map | Python Graph Gallery"
    seoDescription="A collection of bubble map examples made with Python, coming with explanation and reproducible code"
  />
);

export default function BubbleMap() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Bubble Map"
        description={chartDescription}
        chartType="bubbleMap"
      />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Overview">🔎 Building maps with Python</h2>
          <p>
            If you&apos;re new to geospatial analysis with python, I strongly
            advise to check the <Link to="/map">background map section</Link> of
            the gallery. It gives a great overview of the available tools, and
            help you pick the right one.
          </p>
          <Link to="/map">
            <Button size="sm">Background Map Section</Button>
          </Link>
          <br />
          <br />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Geoplot & Cartopy">
          <code>GeoPlot</code> & <code>Cartopy</code>
        </h2>
        <p>
          <code>GeoPlot</code> is an extension of <code>Cartopy</code> and{' '}
          <a href="/matplotlib">Matplotlib</a> to create maps with minimal
          efforts.
        </p>
        <Row>
          <ChartImageContainer
            imgName="web-bubble-map-with-arrows-1"
            caption="Initiate a background map"
            linkTo="/web-bubble-map-with-arrows"
          />
          <ChartImageContainer
            imgName="web-bubble-map-with-arrows-2"
            caption="Add bubble on top of a background map"
            linkTo="/web-bubble-map-with-arrows"
          />
          <ChartImageContainer
            imgName="web-bubble-map-with-arrows-3"
            caption="Customize style and colors in bubble maps"
            linkTo="/web-bubble-map-with-arrows"
          />
        </Row>
        <p>
          When creating maps, there are a large number of possible projections.
          The article below explains how to modify them.
        </p>
        <Link to={'/588-change-map-projection-in-python'}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: 30 }}>
            <ChartImage
              imgName={'projection_maps'}
              caption={'Change projection in maps'}
            />
          </div>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Folium">
          Bubble map with <code>Folium</code>
        </h2>
        <p>
          <code>Folium</code> is a wrapper of the <code>leaflet.js</code>{' '}
          javascript library. Once you understood how to{' '}
          <Link to="/map">initialize</Link> an interactive map with it, you can
          parse a data frame of coordinates and add markers to the map with
          functions like <code>Circle()</code> and <code>..()</code>
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/313-bubble-map-with-folium.html"
            title="Basic map with folium"
            style={{ border: 'none', width: '800px', height: '300px' }}
          ></iframe>
        </div>
        <Link to="/313-bubble-map-with-folium">
          <Button size="sm">See code</Button>
        </Link>
        <br />
        <br />
        <p>
          It is also possible to add any other kind of markers instead of
          circles. This is what you get with the default{' '}
          <code>folium.Marker()</code> function:
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/312-add-markers-on-folium-map.html"
            title="Folium and markers"
            style={{ border: 'none', width: '800px', height: '300px' }}
          ></iframe>
        </div>
        <Link to="/312-add-markers-on-folium-map">
          <Button size="sm">See code</Button>
        </Link>
        <br />
        <br />
        <p>
          And this is what you can build by passing some <code>html</code> to
          the marker and popup parameters:
        </p>
        <Row>
          <ChartImageContainer
            imgName="312-add-markers-on-folium-map1"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/312-add-markers-on-folium-map"
          />
          <ChartImageContainer
            imgName="312-add-markers-on-folium-map2"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/312-add-markers-on-folium-map"
          />
          <ChartImageContainer
            imgName="593-customize-bubble-map-with-folium-1"
            caption="Customize color, transparency and size of bubbles in folium bubble maps"
            linkTo="/593-customize-bubble-map-with-folium"
          />
          <ChartImageContainer
            imgName="593-customize-bubble-map-with-folium-2"
            caption="How to automatically group bubbles when zooming in or out"
            linkTo="/593-customize-bubble-map-with-folium"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Basemap">
          Bubble map with <code>Basemap</code>
        </h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area
          chart with <code>python</code>. The below examples show how to start
          basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <div style={{ margin: '0 auto' }}>
          <Link to="/315-a-world-map-of-surf-tweets">
            <ChartImage
              imgName={'315_Tweet_Surf_Bubble_map1'}
              caption={'Bubble map with Python and the basemap library'}
            />
          </Link>
        </div>
        <Row>
          <ChartImageContainer
            imgName="310-basic-map-with-markers-1"
            caption="Most simple bubble map"
            linkTo="/310-basic-map-with-markers"
          />
          <ChartImageContainer
            imgName="310-basic-map-with-markers-2"
            caption="Bubble map with different bubble size"
            linkTo="/310-basic-map-with-markers"
          />
          <ChartImageContainer
            imgName="310-basic-map-with-markers-3"
            caption="Bubble map with custom colors and size"
            linkTo="/310-basic-map-with-markers"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best examples">Best bubble map examples</h2>
        <p>
          The below examples show how to create <b>advanced bubble maps</b> with
          python using real life data.
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Link to={'/web-map-usa-with-scatter-plot-on-top'}>
              <ChartImage
                imgName={'web-map-usa-with-scatter-plot-on-top-square'}
                caption={'Background map with a scatter plot on top of it'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-bubble-map-with-arrows'}>
              <ChartImage
                imgName={'web-bubble-map-with-arrows-square'}
                caption={'Bubble map with arrows and nice annotations'}
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
