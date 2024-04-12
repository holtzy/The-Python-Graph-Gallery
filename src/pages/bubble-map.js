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
  "<p>A <a href='https://www.data-to-viz.com/graph/bubblemap.html'>bubble map</a> uses circles of different size to represent a numeric value on a territory. It displays one bubble per geographic coordinate, or one bubble per region. As for <a href='https://python-graph-gallery.com/map/'>background maps</a>, several python libraries are useful to build them: <code>folium</code>, <code>geopandas</code>, <code>geoplot</code> and <code>basemap</code> are listed here.</p>";

export const Head = () => (
  <SEO
    title="Bubble Map"
    seoDescription="A collection of bubble map examples made with Python, coming with explanation and reproducible code"
  />
);

export default function BubbleMap() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Bubble Map" description={chartDescription} />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Overview">🔎 Building maps with Python</h2>
          <p>
            If you're new to geospatial analysis with python, I strongly advise
            to check the <Link to="/map">background map section</Link> of the
            gallery. It gives a great overview of the available tools, and help
            you pick the right one.
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
        <h2 id="Geopandas & Geoplot">
          <code>Geopandas</code> and <code>GeoPlot</code>
        </h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area
          chart with <code>python</code>. The below examples show how to start
          basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <Row>
          <ChartImageContainer
            imgName="map-read-geojson-with-python-geopandas"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/map-read-geojson-with-python-geopandas"
          />
        </Row>
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
        <h2 id="Basemap">Best bubble map examples</h2>
        <p>
          The below examples show how to create <b>advanced bubble maps</b> with
          python using real life data.
        </p>
        <Link to="//web-map-usa-with-scatter-plot-on-top">
          <div style={{ margin: '0 auto' }}>
            <ChartImage
              imgName="web-map-usa-with-scatter-plot-on-top"
              caption="Bubble map with a scatter plot on top of it"
            />
          </div>
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
