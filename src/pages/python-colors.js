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
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p><a href='https://python-graph-gallery.com/matplotlib'>Matplotlib</a> is a <strong>powerful plotting library</strong> in Python that offers <strong>extensive customization</strong> of plots, including a <strong>wide variety of colors</strong>.<br /><br />Colors in Matplotlib can be specified in numerous ways, such as by <em>name</em> (e.g., <code>red</code>, <code>blue</code>), by <em>hexadecimal code</em> (e.g., <code>#FF5733</code>), or by <em>RGB/RGBA tuples</em> (e.g., <code>(1, 0, 0)</code> for red). This <strong>flexibility</strong> makes it easy to create <strong>visually appealing</strong> and <strong>informative plots</strong>.<br /> <br />Additionally, <a href='https://python-graph-gallery.com/matplotlib'>matplotlib</a> supports a <strong>range of colormaps</strong>, which can be particularly useful for <strong>representing data with a gradient of values</strong>, enhancing the <strong>interpretability</strong> of complex datasets.</p>";

const quickCode = `# libraries
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Dataset
df=pd.DataFrame({'X': range(1,101), 'Y': np.random.randn(100)*15+range(1,101), 'Z': (np.random.randn(100)*15+range(1,101))*2 })

# plot
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(df['X'], df['Y'], df['Z'], c='skyblue', s=60)
ax.view_init(30, 185)
plt.show()
`;

export const Head = () => (
  <SEO
    title="Tips about colors with Python"
    seoDescription="How to manage colors in python charts"
  />
);

export default function Colors() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Colors" description={chartDescription} />

      <Container>
        <h2 id="Quick">Color maps</h2>
        <Row className="align-items-center">
          <Col md={4}>
            <p>
              <a href="/matplotlib">Matplotlib</a> provides a wide range of
              colormaps but also a specific way of working with them. This post
              will show you how to use colormaps in{' '}
              <a href="/matplotlib">Matplotlib</a> to enhance the readability of
              your plots.
            </p>
            <Link to="/587-how-to-use-colormap">
              <Button size="sm">Learn more</Button>
            </Link>
          </Col>
          <Col md={8}>
            <Link to={'/587-how-to-use-colormap'}>
              <ChartImage
                imgName="587-how-to-use-colormap"
                caption="Available colors in Matplotlib"
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Quick">Named colors</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <a href="/matplotlib">Matplotlib</a> provides multiple ways of
              managing colors. Basically, you can use:
              <ul>
                <li>
                  <b>Named colors:</b> Use the name of the color. For example,
                  'red', 'blue', 'green', etc.
                </li>
                <li>
                  <b>RGB colors:</b> Use a tuple of 3 values between 0 and 1.
                  For example, (1, 0, 0) for red.
                </li>
                <li>
                  <b>Hexadecimal colors:</b> Use the hexadecimal code. For
                  example, '#FF0000' for red.
                </li>
              </ul>
            </p>
            <Link to="/available-colors-in-matplotlib">
              <Button size="sm">Learn more</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to={'/available-colors-in-matplotlib'}>
              <ChartImage
                imgName="color_names_matplotlib"
                caption="Available colors in Matplotlib"
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2>Pre-made categorical palettes</h2>
        <Row>
          <Col md={6}>
            <p>
              <a href="/matplotlib">Matplotlib</a> provides a set of pre-made
              categorical palettes. These palettes are <b>ready to use</b> and
              can be used to colorize your categorical data.
            </p>
            <p>
              On this post, you will find the entire list of <b>available</b>{' '}
              categorical palettes in <a href="/matplotlib">matplotlib</a>, how
              to use them, and how to create your <b>own</b>.
            </p>
            <Link to="/available-categoric-palettes">
              <Button size="sm">Learn more</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/available-categoric-palettes">
              <ChartImage
                imgName="categorical_palettes"
                caption="Available categorical color palettes in Matplotlib"
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2>Pre-made continuous palettes</h2>
        <p>
          <a href="/matplotlib">Matplotlib</a> provides a set of pre-made
          continuous palettes that are split into 2 main categories:
          <ul>
            <li>
              <b>Sequential:</b> Ideal for representing data that ranges from
              low to high values.
            </li>
            <li>
              <b>Diverging:</b> Ideal for representing data that ranges from
              negative to positive values.
            </li>
          </ul>
        </p>
        <Row>
          <Col md={6}>
            <br />
            <p>
              On this post, you will find the entire list of <b>available</b>{' '}
              sequential palettes in <a href="/matplotlib">matplotlib</a>, how
              to use them, and how to create your <b>own</b>.
            </p>
            <Link to="/available-continuous-palettes">
              <Button size="sm">Sequential palettes</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/available-continuous-palettes">
              <ChartImage
                imgName="sequential_palettes"
                caption="Available sequential color palettes in Matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Link to="/available-continuous-palettes">
              <ChartImage
                imgName="diverging_palettes"
                caption="Available diverging color palettes in Matplotlib"
              />
            </Link>
          </Col>
          <Col md={6}>
            <p>
              Similar to the sequential palettes, you can find the entire list
              of <b>available</b> diverging palettes in{' '}
              <a href="/matplotlib">matplotlib</a>, how to use them, and how to
              create your <b>own</b>.
            </p>
            <Link to="/available-continuous-palettes">
              <Button size="sm">Diverging palettes</Button>
            </Link>
          </Col>
        </Row>
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
