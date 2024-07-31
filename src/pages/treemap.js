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
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>";

const quickCode = `# libraries
import matplotlib.pyplot as plt
import squarify    # pip install squarify (algorithm for treemap)
import pandas as pd

# Create a data frame with fake data
df = pd.DataFrame({'nb_people':[8,3,4,2], 'group':["group A", "group B", "group C", "group D"] })

# plot it
squarify.plot(sizes=df['nb_people'], label=df['group'], alpha=.8 )
plt.axis('off')
plt.show()
`;

export const Head = () => (
  <SEO
    title="Treemap"
    seoDescription="A collection of treemap examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Treemap() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Treemap"
        description={chartDescription}
        chartType="treemap"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              A <code>treemap</code> displays each element of a dataset as a
              rectangle. It allows to see what proportion each element has
              compared to the whole.
            </p>
            <p>
              {' '}
              This is doable with <code>python</code> and{' '}
              <code>Matplotlib</code> thanks to the <code>squarify</code>{' '}
              library that can be used as follow:🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/200-basic-treemap-with-python'}>
              <ChartImage
                imgName="200_Basic_Treemap_with_squarify"
                caption="Most basic Treemap with Python, Matplotlib and Squarify"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Squarify">
            &#8505; &#65039; A note on the <code>Squarify</code> package
          </h2>
          <p>
            The squarify library is a pure Python implementation of the squarify
            treemap layout algorithm. It is a project developped by{' '}
            <a href="https://github.com/laserson">Uri Laserson</a> that has its
            documentation on{' '}
            <a href="https://github.com/laserson/squarify">github</a>.
          </p>
          <a href="https://github.com/laserson/squarify">
            <Button size="sm">Squarify documentation</Button>
          </a>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Treemap with <code>Matplotlib</code> and <code>Squarify</code>
        </h2>
        <p>
          <code>Matplotlib</code> is probably the most famous and flexible
          python library for data visualization. It is appropriate to build any
          kind of chart, including the lollipop plot thanks to its{' '}
          <code>stem()</code> function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="201_Custom_Treemap1"
            caption="How to control the color of your treemap"
            linkTo="/201-control-the-color-of-treemap"
          />
          <ChartImageContainer
            imgName="202_Treemap_map_color_to_size"
            caption="How to make the rectangle colors relative to their values."
            linkTo="/202-treemap-with-colors-mapped-on-values"
          />
          <ChartImageContainer
            imgName="590-advanced-treemap-1"
            caption="A simple treemap with labels"
            linkTo="/590-advanced-treemap"
          />
          <ChartImageContainer
            imgName="590-advanced-treemap-2"
            caption="Color customization of a treemap"
            linkTo="/590-advanced-treemap"
          />
          <ChartImageContainer
            imgName="590-advanced-treemap-3"
            caption="Label customization of a treemap"
            linkTo="/590-advanced-treemap"
          />
          <ChartImageContainer
            imgName="590-advanced-treemap-4"
            caption="Color + Label + Legend customization of a treemap"
            linkTo="/590-advanced-treemap"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          <Plotly />
          Treemap with <code>Plotly</code>
        </h2>
        <p>
          <code>Plotly</code> is a very powerful library to create interactive
          graphics. It is known for its great interactivity and its ability to
          handle large datasets.
        </p>
        <p>
          It comes with <b>multiple functions</b> to create treemaps, for both
          of its API: <code>plotly.graph_objects</code> and{' '}
          <code>plotly.express</code>. Try to <b>hover and click</b> on the
          following treemap to see how it reacts:
        </p>
        <iframe
          src="../../interactiveCharts/580-simple-interactive-treemap-plotly-2.html"
          width="800"
          height="600"
          title="most simple treemap"
        ></iframe>
        <a
          className="btn btn-secondary btn-md text-uppercase"
          href="/580-simple-interactive-treemap-plotly"
        >
          See code
        </a>
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
