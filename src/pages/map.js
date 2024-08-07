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
  '<p>The first step of any geo-spatial data analysis is to draw the background map of the area of interest. This section explains what are the main ways to build it with <code>Python</code>. It is the foundation of the next sections that will add some data on top of it.</p>';

export const Head = () => (
  <SEO
    title="Background Map"
    seoDescription="A collection of map examples made with Python, coming with explanation and reproducible code"
  />
);

export default function BackgroundMap() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Background Map"
        description={chartDescription}
        chartType="map"
      />

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Overview">🔎 Input format and package overview ⭐ </h2>
          <p>
            A map is basically a set of polygons displayed on a 2 dimensional
            canvas. There are two problems you need to solve when building one:
          </p>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: 30 }}>
            <ChartImage
              imgName={'schema-spatial-plot'}
              caption={
                'Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly'
              }
            />
          </div>
          <ul>
            <li>
              <u>Where to find polygon coordinates</u>. It can come from:
              <ul>
                <li>
                  a <b>shape file</b> or a <b>geoJson file</b>. That's 2
                  different ways to store the information. The{' '}
                  <code>geopandas</code> package is the best way to read those
                  file formats with Python.
                </li>
                <li>
                  a <b>python library</b> like <code>geopandas</code> or{' '}
                  <code>basemap</code> providing the information for common
                  location like the US.
                </li>
                <li>
                  <b>google map</b> or <b>open street map</b>.
                </li>
              </ul>
            </li>

            <br />

            <li>
              <u>How to plot those polygons?</u>
              <ul>
                <li>
                  Once you get a <code>geodataframe</code> thanks to the{' '}
                  <code>geopandas</code> package, <code>geoplot</code> is your
                  best choice to build a static map
                </li>
                <li>
                  If you need an interactive map from a{' '}
                  <code>geodataframe</code>, <code>plotly</code> is a good
                  option.
                </li>
                <li>
                  If you want to use google map style maps, <code>folium</code>{' '}
                  is the way to go.
                </li>
              </ul>
            </li>
          </ul>
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
          <code>Folium</code> for google maps style maps
        </h2>
        <p>
          <code>Folium</code> is a wrapper of the <code>leaflet.js</code>{' '}
          javascript library. It allows to make all the data wrangling with
          python, and benefit the power of <code>javascript</code> for
          interactive data visualization.
        </p>
        <p>
          The map below has been created with folium... with 1 line of code
          only! 😍
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/288_basic_folium_map.html"
            title="Basic map with folium"
            style={{ border: 'none', width: '800px', height: '300px' }}
          ></iframe>
        </div>
        <Link to="/288-map-background-with-folium">
          <Button size="sm">See code</Button>
        </Link>
        <br />
        <br />
        <p>
          <code>Folium</code> allows different types of background tiles. Here
          is an example with a tile called <code>Cartodb Dark Matter</code>:
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/288_basic_folium_map_osm.html"
            title="Folium and customized tile"
            style={{ border: 'none', width: '800px', height: '300px' }}
          ></iframe>
        </div>
        <Link to="/288-map-background-with-folium">
          <Button size="sm">See code</Button>
        </Link>
        <br />
        <br />
        <p>
          It is also possible to add markers with associated popups on top of
          the map:
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
          Background map with <code>Basemap</code>
        </h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area
          chart with <code>python</code>. The below examples show how to start
          basic, apply usual customization, and use the small multiple technique
          for when you have several groups to compare.
        </p>
        <Row>
          <ChartImageContainer
            imgName="281-basic-map-with-basemap1"
            caption="Most basic map with python and the basemap library."
            linkTo="/281-basic-map-with-basemap"
          />
          <ChartImageContainer
            imgName="281-basic-map-with-basemap2"
            caption="Select a specific location on the map."
            linkTo="/281-basic-map-with-basemap"
          />
          <ChartImageContainer
            imgName="281-basic-map-with-basemap3"
            caption="Customize color and features of shapes."
            linkTo="/281-basic-map-with-basemap"
          />
          <ChartImageContainer
            imgName="281-basic-map-with-basemap4"
            caption="List of available boundaries."
            linkTo="/281-basic-map-with-basemap"
          />
          <ChartImageContainer
            imgName="281-basic-map-with-basemap5"
            caption="Change projection."
            linkTo="/281-basic-map-with-basemap"
          />
          <ChartImageContainer
            imgName="281-basic-map-with-basemap6"
            caption="Use a background tile."
            linkTo="/281-basic-map-with-basemap"
          />
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
