import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib } from '../components/MiscellaneousLogos';
import ChartImage from '../components/ChartImage';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/lollipop.html'>lollipop chart</a> is an alernative to the more usual <a href='https://python-graph-gallery.com/barplot'>barplot</a>. <code>Python</code> allows to build lollipops thanks to the <code>matplotlib</code> library, as shown in the examples below. The strategy here is to use the <code>stem()</code> function or to hack the <code>vline()</code> function depending on your input format.</p>";

const quickCode = `# Create a dataframe
import pandas as pd
df = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })

# Reorder it following the values:
ordered_df = df.sort_values(by='values')
my_range=range(1,len(df.index)+1)

# Make the plot
plt.stem(ordered_df['values'])
plt.xticks( my_range, ordered_df['group'])
`;

export const Head = () => (
  <SEO
    title="Lollipop chart | Python & Matplotlib examples"
    seoDescription="A collection of lollipop plot examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Lollipop() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Lollipop plot"
        description={chartDescription}
        chartType="lollipop"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              A <code>lollipop plot</code> displays each element of a dataset as
              a segment and a circle.
            </p>
            <p>
              {' '}
              This is doable with <code>python</code> and{' '}
              <code>Matplotlib</code> thanks to the <code>stem()</code> function
              that accepts a data frame as input.🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/180-basic-lollipop-plot'}>
              <ChartImage
                imgName="180_Basic_lolipop_plot2"
                caption="Most basic lollipop plot with Python & Matplotlib."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Lollipop plot with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is probably the most famous and flexible
          python library for data visualization. It is appropriate to build any
          kind of chart, including the lollipop plot thanks to its{' '}
          <code>stem()</code> function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="180_Basic_lolipop_plot"
            caption="Most basic lollipop. Will get you started with any kind of input format"
            linkTo="/180-basic-lollipop-plot"
          />
          <ChartImageContainer
            imgName="181_custom_lolliplot_2"
            caption="Basic circle customizations: shape, size, color and more."
            linkTo="/181-custom-lollipop-plot"
          />
          <ChartImageContainer
            imgName="181_custom_lolliplot_3"
            caption="Change lollipop baseline position."
            linkTo="/181-custom-lollipop-plot"
          />
          <ChartImageContainer
            imgName="182_vertical_lolipop_plot"
            caption="Horizontal lollipop chart (more readable labels)."
            linkTo="/182-vertical-lollipop-plot"
          />
          <ChartImageContainer
            imgName="183_highlight_a_group_in_lolipop_plot"
            caption="Highlight some specific groups in a lollipop."
            linkTo="/183-highlight-a-group-in-lollipop"
          />
          <ChartImageContainer
            imgName="184_lolipop_plot_with_2_groups"
            caption="Cleveland chart: a lollipop chart with 2 subgroups displayed under each row."
            linkTo="/184-lollipop-plot-with-2-groups"
          />
          <ChartImageContainer
            imgName="185_lolipop_plot_with_conditional_color"
            caption="Lollipop chart with conditional colors."
            linkTo="/185-lollipop-plot-with-conditional-color"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python lollipop plot examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a>{' '}
          tries to display (or translate from R) some of the best creations and
          explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
            Pull Request
          </a>
          !
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Link
              to={'/web-lollipop-plot-with-python-mario-kart-64-world-records'}
            >
              <ChartImage
                imgName={
                  'web-lollipop-plot-with-python-mario-kart-64-world-records-square'
                }
                caption={
                  'A highly customized lollipop chart made with Python and Matplotlib. A work by Cédric Scherer to visualize some Mario Kart World records.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-lollipop-plot-with-python-the-office'}>
              <ChartImage
                imgName={'web-lollipop-plot-with-python-the-office-square'}
                caption={
                  'A highly customized lollipop chart made with Python and Matplotlib to display a timeseries.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-circular-lollipop-plot-with-matplotlib'}>
              <ChartImage
                imgName={'web-circular-lollipop-plot-with-matplotlib-square'}
                caption={
                  'A circular lollipop plot with customized layout, great color palette and in circle legend.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-dumbell-chart'}>
              <ChartImage
                imgName={'web-dumbell-chart'}
                caption={'Advanced lollipop chart with a dumbell style.'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-lollipop-with-background-image'}>
              <ChartImage
                imgName={'web-lollipop-with-background-image'}
                caption={'Lollipop chart with a background image.'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-lollipop-with-colormap-and-arrow'}>
              <ChartImage
                imgName={'web-lollipop-with-colormap-and-arrow-square'}
                caption={'Horizontal lollipop chart with nice annotations.'}
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="ranking" />
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
