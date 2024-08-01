import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib } from '../components/MiscellaneousLogos';
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import gapminderGif from '../../static/animations/gapminder-2.gif';
import outerSpaceGIF from '../../static/animations/web-animation-with-text8.gif';
import plasticGIF from '../../static/animations/web-animated-line-chart-with-text-6.gif';
import basicScatterGif from '../../static/animations/scatter.gif';
import volcanoGif from '../../static/animations/volcano.gif';
import { SEO } from '../components/SEO';

const chartDescription =
  '<p>An animation is a sequence of <b>images displayed one after the other</b>. It is a powerful way to show a process or a <b>change over time</b>.</p><p>This page shows how to build animated charts with Python and <a href="https://www.python-graph-gallery.com/matplotlib">Matplotlib</a>.</p>';

const quickCode = `# libraries
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# initiate figure
fig, ax = plt.subplots(figsize=(10, 8), dpi=120)

def update(frame):
    ax.clear()
    ax.scatter(
      1+frame, 10+frame*10,
      s=600, alpha=0.5,
      edgecolors="black"
    )
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 100)
    return fig, ax

ani = FuncAnimation(fig, update, frames=range(10))
ani.save("my_animation.gif", fps=5)
`;

export const Head = () => (
  <SEO
    title="Animation"
    seoDescription="A collection of animated charts made with Python and Matplotlib, coming with explanation and reproducible code"
  />
);

export default function Correlogram() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Animation"
        description={chartDescription}
        chartType="animation"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              An animated chart can be build with <code>python</code> using the
              <code>FuncAnimation()</code> function from matplotlib. We follow
              these steps:
            </p>
            <ul>
              <li>Load libraries</li>
              <li>Open a dataset</li>
              <li>
                Define an <code>update</code> function used to build each frame
                of the animation
              </li>
              <li>
                Create the animation with <code>FuncAnimation()</code> and save
                it with <code>save()</code>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Link to={'/340-scatterplot-animation'}>
              <img
                src={basicScatterGif}
                alt="Animation with python"
                style={{ width: '100%' }}
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <Link to="/340-scatterplot-animation">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="&#8800; interaction">
            &#128161; Animation &#8800; Interaction
          </h2>
          <p>
            There is a common confusion between what animated and interactive
            charts are:
          </p>
          <ul>
            <li>
              <u>Animated</u> means a sequence of several static images is
              displayed. The user can't do anything except watching those
              images.
            </li>
            <li>
              <u>Interactive</u> means the user can interact with the chart:
              zoom in, hover over a shape to get a tooltip, click to have a
              menu... The user is not a spectator anymore, but also an actor.
            </li>
          </ul>
          <Link to="/plotly">
            <Button size="sm">Interactive Charts section</Button>
          </Link>
          <br />
          <br />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          <code>Matplotlib</code> and <code>FuncAnimation()</code>
        </h2>
        <p>
          The <code>FuncAnimation()</code> function, a component of the{' '}
          <code>matplotlib.animation</code> module, facilitates the creation of
          animations by <strong>repeatedly invoking a function</strong> that
          updates the plot content with each iteration.
        </p>
        <p>
          Typically, you start by{' '}
          <strong>establishing a figure and an axis</strong>. Following this, an{' '}
          <code>update()</code> function is defined to modify the plot's content
          at every animation cycle.
        </p>
        <p>
          To complete the process, you <strong>generate the animation</strong>{' '}
          using <code>FuncAnimation()</code> and subsequently store it using the{' '}
          <code>save()</code> function.
        </p>
        <Link to={'/341-python-gapminder-animation'}>
          <img
            src={gapminderGif}
            alt="Basic animated scatterplot with python"
            style={{ maxWidth: '900px', width: '100%' }}
          />
        </Link>
        <p>
          The process is pretty much <b>the same</b> for a 3d chart. Here is an
          example with an animated volcano plot. Each iteration of the loop
          changes the <b>camera angle</b>, giving this feeling of travelling
          around the volcano.
        </p>
        <Link to={'/342-animation-on-3d-plot'}>
          <img
            src={volcanoGif}
            alt="Animated volcano plot with Python"
            style={{ maxWidth: '900px', width: '100%' }}
          />
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2>Advanced uses cases</h2>
        <p>
          Animated charts can be highly impactful when illustrating a
          <b>process</b> or <b>change over time</b>. Here are a few examples
          that demonstrate their effectiveness.
        </p>
        <Row className="align-items-center">
          <Col md={4}>
            <p>
              This <b>real life</b> example illustrates the power of animated
              charts. The chart is a{' '}
              <a href="/stacked-area-plot">stacked area</a> chart with a text
              that is written <b>through the animation</b>.
            </p>
            <br />
            <Link to="/web-animated-line-chart-with-annotation">
              <Button size="sm">See code</Button>
            </Link>
          </Col>
          <Col md={8}>
            <Link to={'/web-animated-line-chart-with-annotation'}>
              <img
                src={outerSpaceGIF}
                alt="Animation with python"
                style={{ width: '100%' }}
              />
            </Link>
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={8}>
            <Link to={'/web-animated-line-chart-with-text'}>
              <img
                src={plasticGIF}
                alt="Animation with python"
                style={{ width: '100%' }}
              />
            </Link>
          </Col>
          <Col md={4}>
            <p>
              This <a href="/line-chart">line chart</a>, or <b>race chart</b>,
              shows the evolution of the of global plastic production over time
              with a <b>smooth animation</b> and <b>highlighted text</b>.
            </p>
            <br />
            <Link to="/web-animated-line-chart-with-text">
              <Button size="sm">See code</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

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
