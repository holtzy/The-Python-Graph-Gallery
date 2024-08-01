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
  "<p>A <a href='https://www.data-to-viz.com/graph/chord.html'>chord diagram</a> represents flows or connections between several entities (called nodes). Each entity is represented by a fragment on the outer part of the circular layout. Then, arcs are drawn between each entities. The size of the arc is proportional to the importance of the flow.";

export const Head = () => (
  <SEO
    title="Chord diagram"
    seoDescription="A collection of chord diagram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Chord() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Chord diagram"
        description={chartDescription}
        chartType="chordDiagram"
      />

      <Container>
        <h2 id="Chord library">
          Chord diagram with the <code>Chord</code> library
        </h2>
        <p>
          Chord diagram is not a very usual type of chart. The most common
          library like <code>Matplotlib</code> and
          <code>Seaborn</code> will not be of any help to build one.
          Fortunately, the <code>chord</code> library wraps some functions
          coming from javascript and the{' '}
          <a href="https://www.d3-graph-gallery.com">d3.js library</a>.
        </p>
        <p>
          The examples below will guide you through a migration dataset already
          discussed in{' '}
          <a href="https://www.data-to-viz.com/graph/chord.html">
            data-to-viz.com
          </a>
          . It starts by describing the input dataset and the basic usage of the{' '}
          <code>Chord()</code> function.
        </p>
        <Link to="/chord-diagram-python-chord">
          <Button size="sm">Show me the code</Button>
        </Link>
        <Row>
          <ChartImageContainer
            imgName="chord-diagram-chord-library"
            caption="Most basic chord diagram example from a random matrix."
            linkTo="/chord-diagram-python-chord"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Bokeh">
          Chord diagram with <code>Bokeh</code>
        </h2>
        <p>
          <a href="https://bokeh.org">Bokeh</a> is a pretty neat python library
          for data visualization. It provides a <code>chord_from_df()</code>{' '}
          function dedicated to chord diagram.
        </p>
        <p>
          The example below comes straight from their{' '}
          <a href="https://docs.bokeh.org/en/0.12.5/docs/gallery/chord_chart.html">
            documentation
          </a>
          . It represents the relationship between each character of the book{' '}
          <i>Les misérables</i>.
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/231-chord-diagram-with-bokeh">
            <ChartImage
              imgName={'231_Chord_Bokeh'}
              caption={'Simple chord diagram with the Bokeh python library'}
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          Chord diagram with <code>Plotly</code>
        </h2>
        <p>
          <code>plotly</code> is a powerful python library for data
          visualization and also allows to build chord diagrams. The good part
          is that it builds interactive charts. However if comes with a lot of
          code complexity so be ready to spend several hours before getting your
          first figure. &#128542;
        </p>
        <p>
          The example below shows the relationship between several people on
          facebook. Have a look to the{' '}
          <a href="https://plotly.com/python/v3/filled-chord-diagram/">
            plotly doc
          </a>{' '}
          for explanation and code. Hover over a connection to get names and
          flow value.
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/plotly_chord_diagram.html"
            title="chord diagram with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <a href="https://plotly.com/python/v3/filled-chord-diagram/">
          <Button size="sm">See code</Button>
        </a>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Chord library">
          Chord diagram with the <code>Mne</code> library
        </h2>
        <p>
          The <code>mne</code> library has been written for neuroscience
          purposes, but it comes with some handy functions when it comes to
          build chord diagrams. Visit the examples below to learn the basics and
          more!
        </p>
        <Row>
          <ChartImageContainer
            imgName="406-chord-diagram_mne1"
            caption="Most basic chord diagram with the mne library."
            linkTo="/406-chord-diagram-mne"
          />
          <ChartImageContainer
            imgName="406-chord-diagram_mne2"
            caption="Learn how to customize node, links, labels and more."
            linkTo="/406-chord-diagram-mne"
          />
          <ChartImageContainer
            imgName="406-chord-diagram_mne3"
            caption="How to split nodes in groups."
            linkTo="/406-chord-diagram-mne"
          />
        </Row>
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
