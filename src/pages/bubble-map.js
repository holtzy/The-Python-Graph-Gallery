import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";
import { Button } from "react-bootstrap";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/bubblemap.html'>bubble map</a> uses circles of different size to represent a numeric value on a territory. It displays one bubble per geographic coordinate, or one bubble per region. As for <a href='https://python-graph-gallery.com/map/'>background maps</a>, several python libraries are useful to build them: <code>folium</code>, <code>geopandas</code>, <code>geoplot</code> and <code>basemap</code> are listed here.</p>";

export default function BackgroundMap() {

  return (

    <Layout title="Bubble Map" isTocEnabled>

      <TitleAndDescription
        title="Bubble Map"
        description={chartDescription}
      />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Overview">🔎  Building maps with Python</h2>
          <p>
            If you're new to geospatial analysis with python, I strongly advise to check
            the <Link to='/map'>background map section</Link> of the gallery. It gives a great overview of the
            available tools, and help you pick the right one.
          </p>
          <Link to='/map'>
            <Button size="sm">Background Map Section</Button>
          </Link>
          <br /><br />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Geopandas & Geoplot"><code>Geopandas</code> and <code>GeoPlot</code></h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below examples
          show how to start basic, apply usual customization, and use the small multiple technique
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
        <h2 id="Folium"><code>Folium</code> for google maps style maps</h2>
        <p>
          <code>Folium</code> is a wrapper of the <code>leaflet.js</code> javascript library. Once you understood
          how to <Link to="/map">initialize</Link> an interactive map with it, you can parse a data frame of coordinates
          and add markers to the map with functions like <code>Circle()</code> and <code>..()</code>
        </p>
        <div className="mx-auto">
          <iframe src="/interactiveCharts/313-bubble-map-with-folium.html" title="Basic map with folium" style={{ border: "none", width: '800px', height: '300px' }}></iframe>
        </div>
        <Link to='/313-bubble-map-with-folium'>
          <Button size="sm">See code</Button>
        </Link>
        <br /><br />
        <p><code>Folium</code> allows different types of background tiles. Here is an example with a tile called <code>Stamen Toner</code>:</p>
        <div className="mx-auto">
          <iframe src="/interactiveCharts/288_basic_folium_map_toner.html" title="Folium and customized tile" style={{ border: "none", width: '800px', height: '300px' }}></iframe>
        </div>
        <Link to='/288-map-background-with-folium'>
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Basemap">Background map with <code>Basemap</code></h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below examples
          show how to start basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/242-area-chart-and-faceting'>
            <ChartImage imgName={'242_area_chart_and_faceting'} caption={'Area chart with small multiple, seaborn'} />
          </Link>
        </div>
        <p></p>
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

    </Layout >
  );
}
