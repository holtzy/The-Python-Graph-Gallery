import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Plotly } from '../components/MiscellaneousLogos';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/sankey.html'>Sankey Diagram</a> is a visualisation technique that allows to display flows. Several entities (nodes) are represented by rectangles or text. Their links are represented with arrows or arcs that have a width proportional to the importance of the flow.";

export const Head = () => (
  <SEO
    title="Sankey diagram"
    seoDescription="A collection of sankey diagram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Chord() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Sankey diagram"
        description={chartDescription}
        chartType="sankey"
      />

      <Container>
        <h2 id="Plotly">
          <Plotly />
          Sankey diagram with <code>Plotly</code>
        </h2>
        <p>
          <code>Plotly</code> is an awesome <code>Python</code> library for
          interactive data visualization. It is most probably the best tool to
          create a Sankey Diagram. Its <code>Sankey()</code> function handles
          most of the business logic for you, allowing to get a figure in a
          couple of lines of code.
        </p>
        <p>
          The blogpost linked below should quickly get you started with some{' '}
          <Link to="/sankey-diagram-with-python-and-plotly">
            minimal starting example
          </Link>
          . It also describes the most common of type of customization you
          probably want to apply to your Sankey diagram to make it appealing,
          and ends up with the code for a real life Sankey diagram shown below.
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/sankey-diagram-plotly-real.html"
            title="Sankey diagram with plotly"
            style={{ border: 'none', width: '800px', height: '700px' }}
          ></iframe>
        </div>
        <Link to="/sankey-diagram-with-python-and-plotly">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="pySankey">
          Sankey diagrams with <code>pySankey</code>
        </h2>
        <p>
          The{' '}
          <a
            target="_blank"
            href="https://github.com/anazalea/pySankey"
            rel="noreferrer"
          >
            pySankey
          </a>{' '}
          python library by{' '}
          <a
            target="_blank"
            href="https://github.com/anazalea"
            rel="noreferrer"
          >
            anazalea
          </a>{' '}
          is another option when it comes to build sankey diagrams. It is based
          on <Link to="/matplotlib">matplotlib</Link> and aims a building static
          outputs only. The blogpost showcased below should help you to get
          started quickly, describing the various accepted dataset and the
          customization offered by the library.
        </p>
        <Row>
          <ChartImageContainer
            imgName="basic-sankey-diagram-with-pysankey-1"
            caption="How to build a basic sankey diagram with the pySankey library"
            linkTo="/basic-sankey-diagram-with-pysankey"
          />
          <ChartImageContainer
            imgName="basic-sankey-diagram-with-pysankey-2"
            caption="Some explanation on the various data format that are accepted by the library."
            linkTo="/basic-sankey-diagram-with-pysankey"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Sankey diagram with <code>Matplotlib</code>
        </h2>
        <p>
          The <code>matplotlib</code> library offers a <code>Sankey()</code>{' '}
          function that also allows to build sankey diagrams. It is a bit
          limited in my opinion, since it only allows to visualize flows passing
          through one unique group as shown in the example below.
        </p>
        <p>
          The example below comes from the{' '}
          <a href="https://matplotlib.org/api/sankey_api.html">official doc</a>.
          Have a look to the{' '}
          <a href="https://python-graph-gallery.com/220-sankey-diagram-with-matplotlib/">
            code <here></here>
          </a>
          .
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/220-sankey-diagram-with-matplotlib">
            <ChartImage
              imgName={'220_Sankey_Matplotlib'}
              caption={'Basic Sankey diagram with Matplotlib'}
            />
          </Link>
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
