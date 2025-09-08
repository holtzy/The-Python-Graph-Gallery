import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import FunctionExploration from '../components/FunctionExploration';
import { fig_arrow } from '../functions/drawarrow';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      <code>DrawArrow</code> is a library that allows to create arrows for your
      matplotlib charts with ease.
    </p>
    <p>
      It was created by <a href="https://barbierjoseph.com/">Joseph Barbier</a>{' '}
      in order to create curved, straight, thin, large or bizarre arrows in
      matplotlib, in <b>any color, width and style you like</b>.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="DrawArrow: drawing arrows for matplotlib made easy"
    seoDescription="An overview of the drawarrow library in Python"
  />
);

export default function Post() {
  return (
    <Layout title="DrawArrow">
      <TitleAndDescription
        title="DrawArrow: drawing arrows for matplotlib made easy"
        description={chartDescription}
        chartType={'drawarrow'}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <p>
          Before using drawarrow you need to <b>install</b> it. This can easily
          be done with <code>pip</code>:
        </p>
        <br />
        <CodeChunk>{codeInstall}</CodeChunk>
        <br />
        <Row className="align-items-center">
          <Col md={7}>
            <p>
              Matplotlib graphs have <strong>two main components</strong>:
            </p>
            <ul>
              <li>the figure (the overall graph)</li>
              <li>the axes (all the sub-graphs)</li>
            </ul>
            <p>
              &rarr; <a href="/matplotlib/#Lexicon">Learn more about it</a>
            </p>
            <p>
              DrawArrow provides <b>2 simple functions</b>:
              <ul>
                <li>
                  <code>fig_arrow()</code>: draw an arrow on a matplotlib{' '}
                  <b>figure</b>
                </li>
                <li>
                  <code>ax_arrow()</code>: draw an arrow on a matplotlib{' '}
                  <b>axes</b>
                </li>
              </ul>
            </p>
            <p>
              You basically just have to specify the head and tail positions to
              have an arrow on your chart.
            </p>
          </Col>
          <Col md={5}>
            <Link to={'/drawarrow#Quick'}>
              <ChartImage
                imgName="introduction-drawarrow-1"
                caption="Most basic arrow with drawarrow"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration funDetails={fig_arrow} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Axes">Draw an arrow on an axes</h2>
        <Row className="align-items-center">
          <Col md={7}>
            <p>
              Matplotlib graphs have <strong>two main components</strong>:
            </p>
            <ul>
              <li>the figure (the overall graph)</li>
              <li>the axes (all the sub-graphs)</li>
            </ul>
            <p>
              &rarr; <a href="/matplotlib/#Lexicon">Learn more about it</a>
            </p>
            <p>
              The <code>ax_arrow()</code> function is designed to{' '}
              <strong>draw arrows on an axes</strong>. It means that it&apos;s
              using the <strong>same coordinate system</strong> as the plotted
              data.
            </p>
          </Col>
          <Col md={5}>
            <ChartImage
              imgName="introduction-drawarrow-2"
              caption="Most basic arrow with drawarrow"
            />
          </Col>
        </Row>
        <CodeChunk>{axesCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Figure">Draw an arrow on a figure</h2>
        <Row className="align-items-center">
          <Col md={5}>
            <ChartImage
              imgName="introduction-drawarrow-3"
              caption="Most basic arrow with drawarrow"
            />
          </Col>
          <Col md={7}>
            <p>
              The <code>fig_arrow()</code> function is designed to{' '}
              <b>draw arrows on a figure</b>: using the relative coordinate
              system. The position (0,0) means the bottom left and (1,1) the top
              right of the figure
            </p>
          </Col>
        </Row>
        <CodeChunk>{figCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Custom">Customize the arrow</h2>
        <Row className="align-items-center">
          <Col md={7}>
            <p>
              The arrow displayed is a <code>FancyArrowPatch</code>, a
              specialized{' '}
              <strong>
                <a href="/matplotlib">matplotlib</a> object
              </strong>{' '}
              for creating complex arrows. You can pass{' '}
              <a href="/drawarrow#Fig_arrow() details">
                any additional arguments
              </a>{' '}
              for this object to <code>fig_arrow()</code> and{' '}
              <code>ax_arrow()</code>.
            </p>
            <br />
            <p>
              The example below demonstrates some of the most useful options.
            </p>
          </Col>
          <Col md={5}>
            <ChartImage
              imgName="introduction-drawarrow-4"
              caption="Most basic arrow with drawarrow"
            />
          </Col>
        </Row>
        <CodeChunk>{customCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2>Gallery of examples</h2>
        <p>
          Here are some examples of what you can do with drawarrow. Click on the
          images to see the code.
        </p>
        <Row>
          <Col xs={12} md={4}>
            <Link to="/web-map-with-custom-legend">
              <ChartImage
                imgName={'web-map-with-custom-legend'}
                caption={'Choropleth map with continuous palette'}
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/web-lollipop-with-colormap-and-arrow">
              <ChartImage
                imgName={'web-lollipop-with-colormap-and-arrow-square'}
                caption={'Lollipop chart with arrows'}
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/web-area-chart-with-different-colors-for-positive-and-negative-values">
              <ChartImage
                imgName={
                  'web-area-chart-with-different-colors-for-positive-and-negative-values-square'
                }
                caption={'Minimalist style area chart'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to="/web-stacked-area-with-inflexion-arrows">
              <ChartImage
                imgName={'web-stacked-area-with-inflexion-arrows-square'}
                caption={
                  'Stacked area chart with arrows with an inflection point'
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2>Going further</h2>
        <p>
          You might be interested in
          <ul>
            <li>
              the{' '}
              <a href="https://github.com/y-sunflower/drawarrow">
                {' '}
                official github repo of drawarrow
              </a>{' '}
              (⭐ give it a star!)
            </li>
            <li>
              how to draw an{' '}
              <a href="/591-arrows-with-inflexion-point">
                arrow with an inflection point
              </a>{' '}
            </li>
            <li>
              how to create{' '}
              <a href="/advanced-custom-annotations-matplotlib">
                beautiful annotation in matplotlib
              </a>
            </li>
            <li>
              how to work with{' '}
              <a href="/pyfonts">different fonts in matplotlib</a>
            </li>
          </ul>
        </p>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="general" />
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

const quickCode = `import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

ax.scatter(x=[1, 2, 3, 4, 5], y=[1, 2, 3, 4, 5], s=100)

fig_arrow(
    head_position=(0.5, 0.5),
    tail_position=(0.2, 0.7),
    width=2,
    radius=0.3,
    color="darkred",
    fill_head=False,
    mutation_scale=2,
)

plt.show()
`;

const axesCode = `import matplotlib.pyplot as plt
from drawarrow import ax_arrow

fig, ax = plt.subplots(figsize=(7,7))

ax.scatter(x=[1, 5, 10], y=[5, 12, 3], s=300)
ax_arrow(
   tail_position=(2, 8),
   head_position=(9.5, 3),
   ax=ax,
   color="green",
   width=5,
   head_width=15,
   head_length=20,
   radius=0.4
)
plt.show()
`;

const figCode = `import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots(figsize=(7,7))

ax.scatter(x=[1, 5, 10], y=[5, 12, 3], s=300)
fig_arrow(
   tail_position=(0.2, 0.8),
   head_position=(0.7, 0.3),
   color="grey",
   width=5,
   head_width=15,
   head_length=20,
   radius=-0.2
)
plt.show()
`;

const customCode = `import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots(figsize=(10,10))

ax.scatter(x=[1, 2, 3, 4, 5], y=[4.3, 2, 3.2, 4, 5], s=300)

fig_arrow(
   tail_position=(0.2, 0.7),
   head_position=(0.5, 0.48),
   inflection_position=(0.4, 0.8),
   double_headed=True,
   fill_head=False,
   color="#003049",
   radius=0.1,
   alpha=0.8,
   width=5,
   head_width=10,
   head_length=10,
   mutation_scale=2
)

plt.show()
`;

const codeInstall = `pip install drawarrow`;
