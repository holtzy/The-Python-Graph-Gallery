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
import gapminderGif from '../../static/graph/animated_gapminder.gif';
import outerSpaceGIF from '../../static/animations/web-animation-with-text8.gif';
import basicScatterGif from '../../static/graph/animated_chart.gif';
import volcanoGif from '../../static/graph/animated_volcano.gif';
import { SEO } from '../components/SEO';

const chartDescription =
  '<p>An animation is a sequence of <b>images displayed one after the other</b>. It is a powerful way to show a process or a <b>change over time</b>. This page shows how to build animated charts with Python and Matplotlib.</p>';

const quickCode = `# libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# read the data (on the web)
data = pd.read_csv('https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/gapminderData.csv')
data['continent'] = pd.Categorical(data['continent'])

# create animation
fig, ax = plt.subplots(figsize=(10, 10), dpi=120)
def update(frame):
    ax.clear()
    yearly_data = data.loc[data.year == frame, :]
    ax.scatter(
        x=yearly_data['lifeExp'], 
        y=yearly_data['gdpPercap'], 
        s=yearly_data['pop']/100000,
        c=yearly_data['continent'].cat.codes, 
        cmap="Accent",
    )
    return ax
ani = FuncAnimation(fig, update, frames=data['year'].unique())
ani.save('quick-anim.gif', writer='imagemagick', fps=1)
`;
const homebrewInstallCode = `brew install imagemagick`;

export const Head = () => (
  <SEO
    title="Animation"
    seoDescription="A collection of correlogram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Correlogram() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Animation" description={chartDescription} />

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
            <Link to={'/341-python-gapminder-animation'}>
              <img
                src={gapminderGif}
                alt="Animation with python"
                style={{ width: '100%' }}
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <Link to="/341-python-gapminder-animation">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Install">
            How to install <code>Image Magick</code>
          </h2>
          <p>
            Installing Image magick can be a nightmare. The official
            documentation is{' '}
            <a href="https://imagemagick.org/script/download.php">here</a>. The
            best way to install it if you're on Mac OS is to use{' '}
            <a href="https://brew.sh">Homebrew</a> as follow:
          </p>
          <CodeChunk>{homebrewInstallCode}</CodeChunk>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2>Advanced use case</h2>
        <Row className="align-items-center">
          <Col md={4}>
            <p>
              This <b>real life</b> example illustrates the power of animated
              charts. The chart is a stacked area chart with a text that is
              written <b>through the animation</b>.
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
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          <code>Matplotlib</code> and <code>Image Magick</code>
        </h2>
        <p>
          Let's start with a ver basic animated scatter plot made with{' '}
          <code>python</code>, <code>matplotlib</code>
          and <code>image magick</code>. The <code>scatter()</code> function is
          used to build a <Link to="/scatter-plot">scatterplot</Link> at each
          iteration of a loop. <code>savefig()</code> is used to save each chart
          at <code>.png</code> format. Finally,
          <code>image magick builds</code> the gif.
        </p>
        <Link to={'/340-scatterplot-animation'}>
          <img
            src={basicScatterGif}
            alt="Basic animated scatterplot with python"
            style={{ maxWidth: '400px', width: '100%' }}
          />
        </Link>
        <p>
          The process is pretty much the same for a 3d chart. Here is an example
          with an animated volcano plot. Each iteration of the loop changes the
          camera angle, giving this feeling of travelling around the volcano.
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
            displayed. The user can't do anything except watching those images.
          </li>
          <li>
            <u>Interactive</u> means the user can interact with the chart: zoom
            in, hover over a shape to get a tooltip, click to have a menu... The
            user is not a spectator anymore, but also an actor.
          </li>
        </ul>
        <Link to="/plotly">
          <Button size="sm">Interactive Charts section</Button>
        </Link>
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
