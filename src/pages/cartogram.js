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
        <h2>
          Cartogram with <code>Python</code>
        </h2>
        <p>
          Unfortunately, there is <strong>no direct method</strong> to build cartograms in Python. However, if you need to create one, you can easily build <a href='https://r-graph-gallery.com/cartogram.html'>cartograms in R</a> using the <code>cartogram</code> package.
        </p>
        <p>
          If you have implemented a cartogram algorithm in Python, please <strong>share your code</strong> with the community by opening an issue on the <a href="https://github.com/holtzy/The-Python-Graph-Gallery/issues">GitHub repository</a> of the gallery.
        </p>
        <p>
          The gallery provides <strong>numerous map examples</strong> for you to explore. Browse the examples below:
        </p>

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
