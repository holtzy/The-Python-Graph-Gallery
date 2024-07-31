import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p><a href='https://www.data-to-viz.com/graph/edge_bundling.html'>Hierarchical edge bundling</a> allows to visualize adjacency relations between entities organized in a hierarchy. The idea is to bundle the adjacency edges together to decrease the clutter usually observed in complex networks.";

export const Head = () => (
  <SEO
    title="Hierarchical Edge Bundling"
    seoDescription="A collection of hierarchical edge bundling examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Arc() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Hierarchical Edge Bundling"
        description={chartDescription}
        chartType="edgeBundling"
      />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Python">
            😞 Sadness and Despair for Hierarchical Edge Bundling with{' '}
            <code>Python</code>.
          </h2>
          <p>
            As far as I know, there isn't any proper way to build a hierarchical
            edged bundling plot with python 😞. If you're aware of any tip to
            build it, please let me knwo! My contact is provided below 🙏🏽.
          </p>
          <p>You now have 3 options!</p>
          <ul>
            <li>
              Use an alternative chart type. See the <code>related chart</code>{' '}
              section below.
            </li>
            <li>
              Use <code>R</code> or <code>D3.js</code> instead of{' '}
              <code>python</code>, links are provided below as well.
            </li>
            <li>
              Build a Python library allowing to build them! I would love to
              share it here! 😊
            </li>
          </ul>
        </Container>
      </div>
      <Spacing />

      <Container>
        <h2 id="Other languages">
          Hierarchical Edge Bundling with <code>R</code> or{' '}
          <code>Javascript</code>
        </h2>
        <p>
          Contrary to <code>python</code> that is not of much help to build a
          hierarchical edge bundling, <code>R</code> and <code>Javascript</code>{' '}
          both offer built-in functions to make them. <code>R</code> will be
          more adapted if you're a data analyst and are happy with a static
          version. <code>Javascript</code> and the
          <code>d3.js</code> library offers more customization and interactivity
          options, but comes with a steeper learning curve and a lot of line of
          code. Pick your flavor!
        </p>
        <a href="https://www.r-graph-gallery.com/hierarchical-edge-bundling">
          <Button size="sm">R code</Button>
        </a>
        <a href="https://www.d3-graph-gallery.com/bundle">
          <Button size="sm">Javascript code</Button>
        </a>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <a href="https://r-graph-gallery.com/310-custom-hierarchical-edge-bundling.html">
            <ChartImage
              imgName={'hierarchical-edge-bundling-R'}
              caption={'Hierarchical edge bundling with R'}
            />
          </a>
        </div>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="flow" />
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
