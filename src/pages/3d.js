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
import ChartImageContainer from '../components/ChartImageContainer';
import volcanoGif from '../../static/animations/volcano.gif';
import { SEO } from '../components/SEO';

const chartDescription =
  '<p>Python allows to build 3D charts thanks to the <code>mplot3d</code> toolkit of the <code>matplotlib</code> library. However, please note that 3d charts are most often a bad practice. This section focuses on 3d scatter plots and surface plots that are some interesting use cases.';

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
    title="Three-Dimensional plotting"
    seoDescription="A collection of 3d chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function ThreeD() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Three-Dimensional plotting"
        description={chartDescription}
        chartType="3d"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              The <code>mplot3d</code> toolkit of <code>matplotlib</code> is
              used here.
            </p>
            <ul>
              <li>
                The projection parameter of the add_subplot() function is set to{' '}
                <code>3d</code>
              </li>
              <li>
                The usual <code>scatter()</code> function can now be called with
                3 data inputs for the X, Y and Z axis
              </li>
              <li>
                The camera position can be set thanks to the{' '}
                <code>view_init()</code> function
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Link to={'/370-3d-scatterplot'}>
              <ChartImage
                imgName="370_3D_scatterplot"
                caption="Basic 3d scatterplot with Python & Matplotlib."
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
          <h2 id="Warning">&#9888;&#65039; Mind the 3d</h2>
          <p>
            Three dimensional objects are very popular but negatively affect the{' '}
            <u>accuracy</u> and <u>speed</u> at which one can interpret a
            graphic in most cases.
          </p>
          <p>
            In the example below, the brown section in front looks much bigger
            than the pink section in the back, even tough their real values are
            30% vs 35%. Data is distorted.
          </p>
          <div style={{ maxWidth: '350px', margin: '0 auto' }}>
            <a href="https://www.data-to-viz.com/caveat/3d.html">
              <ChartImage
                imgName={'3d_is_bad'}
                caption={'An example of a bad 3d pie chart'}
              />
            </a>
          </div>
          <a href="https://www.data-to-viz.com/caveat/3d.html">
            <Button size="sm">Full article</Button>
          </a>
          <br />
          <br />
          <p>
            <u>Note</u>: remember pie charts should be avoided{' '}
            <a href="https://www.data-to-viz.com/caveat/pie.html">
              most of the time
            </a>
          </p>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="3d scatterplot">
          <Matplotlib />
          Three-dimensional scatterplots with <code>Matplotlib</code>
        </h2>
        <p>
          As described in the quick start section above, a three dimensional can
          be built with python thanks to the
          <code>mplot3d</code> toolkit of <code>matplotlib</code>. The example
          below will guide you through its usage to get this figure:
        </p>
        <div style={{ maxWidth: '450px' }}>
          <Link to={'/370-3d-scatterplot'}>
            <ChartImage
              imgName="370_3D_scatterplot"
              caption="Basic 3d scatterplot with Python & Matplotlib."
            />
          </Link>
        </div>
        <p>
          This technique is useful to visualize the result of a PCA (Principal
          Component Analysis). The following example explains how to run a PCA
          with python and check its result with a 3d scatterplot:
        </p>
        <div style={{ maxWidth: '450px' }}>
          <Link to="/372-3d-pca-result">
            <ChartImage
              imgName={'372_3D_PCA_result'}
              caption={'PCA result shown as a 3D scatterplot with python'}
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Surface plot">
          <Matplotlib />
          Surface plot with <code>Matplotlib</code>
        </h2>
        <p>
          A surface plot considers the X and Y coordinates as latitude and
          longitude, and Z as the altitude. It represents the dataset as a
          surface by interpolating positions between data points.
        </p>
        <p>
          This kind of chart can also be done thanks to the <code>mplot3d</code>{' '}
          toolkit of <code>matplotlib</code>. The posts linked below explain how
          to use and customize the <code>trisurf()</code> function that is used
          for surface plots.
        </p>
        <Row>
          <ChartImageContainer
            imgName="371_3D_Surface_plot_volcano_1"
            caption="Most basic surface plot with Python"
            linkTo="/371-surface-plot"
          />
          <ChartImageContainer
            imgName="371_3D_Surface_plot_volcano_2"
            caption="Plotting only one half of the heatmap"
            linkTo="/371-surface-plot"
          />
          <ChartImageContainer
            imgName="371_3D_Surface_plot_volcano_3"
            caption="Seaborn heatmap customization: grid"
            linkTo="/371-surface-plot"
          />
        </Row>
        <div style={{ maxWidth: '450px', margin: '0 auto' }}>
          <Link to={'/371-surface-plot'}>
            <ChartImage
              imgName="371_3D_Surface_plot_volcano_4"
              caption="Basic 3d scatterplot with Python & Matplotlib."
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Animated 3d">
          <Matplotlib />
          Three dimensional plot and animation
        </h2>
        <p>
          You can build an animation from a 3d chart by changing the camera
          position at each iteration of a loop. The example below explains how
          to do it for a surface plot but visit the animation section for more.
        </p>
        <Link to={'/342-animation-on-3d-plot'}>
          <img
            src={volcanoGif}
            alt="Animated volcano plot with Python"
            style={{ maxWidth: '900px', width: '100%' }}
          />
        </Link>
        <Link to="/animation">
          <Button size="sm">Animation section</Button>
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
