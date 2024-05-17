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
  '<p>A section about how to manage colors with Python. Coming soon.';

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
        <Link to="/available-colors-in-matplotlib">
          <Button size="sm">Learn more</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Soon">
          <Matplotlib />
          Pre-made color palettes
        </h2>
        <p>
          Matplotlib provides a set of pre-made color palettes that can be used
          to colorize your charts. These palettes are available in the{' '}
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
