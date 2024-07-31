import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib } from '../components/MiscellaneousLogos';
import ChartImage from '../components/ChartImage';
import { Button } from 'react-bootstrap';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>";

export const Head = () => (
  <SEO
    title="Circular Packing"
    seoDescription="A collection of circular packing examples made with Python, coming with explanation and reproducible code"
  />
);

export default function CircularPacking() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Circular Packing"
        description={chartDescription}
        chartType="circularPacking"
      />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Circlify">
            &#8505; &#65039; A note on the <code>Circlify</code> package
          </h2>
          <p>
            The <code>circlify</code> package is a pure Python implementation of
            a circle packing layout algorithm. It has been developped by{' '}
            <a href="https://github.com/elmotec">Jerome Lecomte</a> and lives on{' '}
            <a href="https://github.com/elmotec/circlify">github</a>. 🙏🙏{' '}
          </p>
          <p>
            You can install it with <code>pip install circlify</code>.
          </p>
          <a href="https://github.com/elmotec/circlify">
            <Button size="sm">Circlify documentation</Button>
          </a>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="One level of hierarchy">
          <Matplotlib />
          One level of hierarchy
        </h2>
        <p>
          <code>Circlify</code> can work without a hierarchical structure, i.e.
          with just a set of numeric varialbles that will be each displayed as a
          bubble. Note that the package just compute the position and size of
          each bubble. Once that's done, <code>matplotlib</code> is used to make
          the chart itself with usual functions.
        </p>
        <Row>
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy1"
            caption="Most basic circle packing"
            linkTo="/circular-packing-1-level-hierarchy"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy2"
            caption="Add colors and labels"
            linkTo="/circular-packing-1-level-hierarchy"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy3"
            caption="control space between bubbles"
            linkTo="/circular-packing-1-level-hierarchy"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Several levels">
          <Matplotlib />
          Several levels of hierarchy
        </h2>
        <p>
          <code>Circlify</code> also works from a hierarchical structure.
          Bubbles representing the bottom of the hierarchy are encapsulated into
          higher hierarchy bubbles and so on. Note that the process is a bit
          more tedious here, but still doable thanks to <code>matplotlib</code>.
        </p>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: 30 }}>
          <Link to="/circular-packing-several-levels-of-hierarchy">
            <ChartImage
              imgName={'circular-packing-several-levels-of-hierarchy-large'}
              caption={
                'Circular packing with several levels of hierarchy with Python and the circlize library'
              }
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="partOfAWhole" />
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
