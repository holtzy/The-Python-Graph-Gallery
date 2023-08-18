import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Seaborn } from '../components/MiscellaneousLogos';
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/scatter.html'>scatter plot</a> displays the relationship between 2 numeric variables. Each data point is represented as a circle. Several tools allow to build one in python, this section provides code samples for <code>Seaborn</code>, <code>Matplotlib</code> and <code>Plotly</code> for interactive versions.</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# use the function regplot to make a scatterplot
sns.regplot(x=df["sepal_length"], y=df["sepal_width"])
`;

const quickCodeMatplotlib = `# libraries
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Create a dataset:
df=pd.DataFrame({'x_values': range(1,101), 'y_values': np.random.randn(100)*15+range(1,101) })

# plot
plt.plot( 'x_values', 'y_values', data=df, linestyle='none', marker='o')
plt.show()
`;

export const Head = () => (
  <SEO
    title="Scatterplot"
    seoDescription="A collection of scatterplot examples made with Python, coming with explanation and reproducible code"
  />
);

export default function ViolinPlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="Scatterplot" description={chartDescription} />

      <Container>
        <h2 id="Quick start">&#9201; Quick start (Seaborn)</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              The <code>regplot()</code> function of the <code>Seaborn</code>{' '}
              library is definitely the best way to build a scatterplot in
              minutes. 🔥
            </p>
            <p>
              Simply pass a numeric column of a data frame to both the{' '}
              <code>x</code> and <code>y</code> variable and the function will
              handle the rest.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/40-basic-scatterplot-seaborn'}>
              <ChartImage
                imgName="40_Basic_Scatterplot_seaborn"
                caption="Basic boxplot with Python and Seaborn from various data input formats."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Common caveats">
            &#9888;&#65039; Scatterplot and overplotting
          </h2>
          <p>
            The main danger with scatterplots is{' '}
            <a href="https://www.data-to-viz.com/caveat/overplotting.html">
              overplotting
            </a>
            . When the sample size gets big, circles tend to overlap, making the
            figure unreadable.
          </p>
          <p>
            Several workarounds exist to fix the issue, like using opacity or
            switching to another chart type:
          </p>
          <Row>
            <ChartImageContainer
              imgName="134_Fighting_overplotting1"
              caption="Basic boxplot. You can quickly read the median, quartiles and outliers of each group."
              linkTo="/134-how-to-avoid-overplotting-with-python"
            />
            <ChartImageContainer
              imgName="134_Fighting_overplotting2"
              caption="If you add individual points with jitter, a bimodal distribution appears for group B"
              linkTo="/134-how-to-avoid-overplotting-with-python"
            />
            <ChartImageContainer
              imgName="134_Fighting_overplotting10"
              caption="If you have a very large dataset, the violin plot is a better alternative than jittering"
              linkTo="/134-how-to-avoid-overplotting-with-python"
            />
          </Row>
          <Link to="/134-how-to-avoid-overplotting-with-python">
            <Button size="sm">Code and more</Button>
          </Link>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Scatterplots with <code>Seaborn</code>
        </h2>
        <p>
          <Link to="/seaborn">Seaborn</Link> is a python library allowing to
          make better charts easily. The <code>regplot()</code> function should
          get you started in minutes. The{' '}
          <Link to="/40-basic-scatterplot-seaborn">first example</Link> below
          explains how to build the most basic scatterplot with python. Then,
          several types of customization are described: adding a{' '}
          <Link to="/42-custom-linear-regression-fit-seaborn">regression</Link>{' '}
          line, tweaking <Link to="/41-control-marker-features">markers</Link>
          and <Link to="/44-control-axis-limits-of-plot-seaborn">axis</Link>,
          adding <Link to="/46-add-text-annotation-on-scatterplot">labels</Link>{' '}
          and more.
        </p>
        <Row>
          <ChartImageContainer
            imgName="40_Basic_Scatterplot_seaborn"
            caption="Most basic scatterplot with seaborn"
            linkTo="/40-basic-scatterplot-seaborn"
          />
          <ChartImageContainer
            imgName="42_Scatterplot_custom_linear_fit_seaborn"
            caption="Add a regression thanks to the fit_reg parameter"
            linkTo="/42-custom-linear-regression-fit-seaborn"
          />
          <ChartImageContainer
            imgName="41_Scatterplot_change_marker_shape_seaborn"
            caption="Customize markers: color, size, opacity, type and more"
            linkTo="/41-control-marker-features"
          />
          <ChartImageContainer
            imgName="43_seaborn_map_color_to_a_avariable3"
            caption="Color dots according to a group"
            linkTo="/43-use-categorical-variable-to-color-scatterplot-seaborn"
          />
          <ChartImageContainer
            imgName="44_seaborn_control_axis_limits"
            caption="Control X and Y axes limits"
            linkTo="/44-control-axis-limits-of-plot-seaborn"
          />
          <ChartImageContainer
            imgName="45_set_color_of_each_point_in_scatterplot_seaborn"
            caption="Control the marker's color according to their coordinates"
            linkTo="/45-control-color-of-each-marker-seaborn"
          />
          <ChartImageContainer
            imgName="46_add_text_annotation_scatterplot_seaborn3"
            caption="Add labels manually on your scatterplot"
            linkTo="/46-add-text-annotation-on-scatterplot"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Related to Seaborn ">
          &#128161; Other charts involving scatterplots and <code>Seaborn</code>
        </h2>
        <p>
          If you are interested in scatterplots, some other chart could be
          useful to you.
        </p>
        <p>
          A scatterplot with{' '}
          <Link to="/82-marginal-plot-with-seaborn">marginal distribution</Link>{' '}
          allows to check the distribution of both the <code>x</code> and{' '}
          <code>y</code> variables. A{' '}
          <Link to="/111-custom-correlogram">correlogram</Link> allows to check
          the relationship between each pair of numeric variables in a dataset.
        </p>
        <Row>
          <ChartImageContainer
            imgName="82_seaborn_jointplot4"
            caption="Scatterplot with marginal distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom4"
            caption="Build a correlogram with the pairplot function"
            linkTo="/111-custom-correlogram"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Quick start">&#9201; Quick start (Matplotlib)</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <Link to="/matplotlib">Matplotlib</Link> also requires only a few
              lines of code to draw a scatterplot thanks to its{' '}
              <code>plot()</code> function. The resulting chart is not as
              good-looking, but the function probably offers more flexibility in
              term of customization.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/130-basic-matplotlib-scatterplot'}>
              <ChartImage
                imgName="130_Basic_Matplotlib_Scatterplot"
                caption="Most basic scatterplot with Matplotlib."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCodeMatplotlib}</CodeChunk>
        <br />
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Scatterplots with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is another great alternative to build
          scatterplots with python. As often, it takes a bit more lines of code
          to get a decent chart, but allows more customization.
        </p>
        <p>
          The examples below should get you covered for all the most common
          problems: adding{' '}
          <Link to="/193-annotate-matplotlib-chart">markers</Link>, adding
          <Link to="/193-annotate-matplotlib-chart">labels</Link>, changing{' '}
          <Link to="/131-custom-a-matplotlib-scatterplot">shapes</Link> and
          more.
        </p>
        <Row>
          <ChartImageContainer
            imgName="130_Basic_Matplotlib_Scatterplot"
            caption="Most basic scatterplot with Matplotlib"
            linkTo="/130-basic-matplotlib-scatterplot"
          />
          <ChartImageContainer
            imgName="131_Custom_Matplotlib_Scatterplot5"
            caption="Customize marker features: size, color, stroke, type and more"
            linkTo="/131-custom-a-matplotlib-scatterplot"
          />
          <ChartImageContainer
            imgName="193_annotate6"
            caption="Display a math equation on your matplotlib chart"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate5"
            caption="Matplotlib: add horizontal and vertical ablines"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate2"
            caption="Highlight a specific area of the chart with Matplotlib"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate1"
            caption="Add an annotation to highlight a specific marker"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="manhattan-plot-with-matplotlib"
            caption="How to build a Manhattan plot with Python and Matplotlib"
            linkTo="/manhattan-plot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="custom-legend-with-matplotlib2"
            caption="Scatterplot with grouping and legend"
            linkTo="/custom-legend-with-matplotlib"
          />
          <ChartImageContainer
            imgName="custom-legend-with-matplotlib6"
            caption="Legend customization: how to control location, add a background, customize labels and markers and more"
            linkTo="/custom-legend-with-matplotlib"
          />
          <ChartImageContainer
            imgName="scatterplot-and-log-scale-in-matplotlib"
            caption="How to use a log scale for the X or the Y axis."
            linkTo="/scatterplot-and-log-scale-in-matplotlib"
          />
          <ChartImageContainer
            imgName="scatterplot-with-regression-fit-in-matplotlib"
            caption="How to compute and add a linear regression to a scatterplot with Python and matplotlib"
            linkTo="/scatterplot-with-regression-fit-in-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="From the web">
          <Matplotlib />
          From the web
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://www.python-graph-gallery.com">
            Python graph gallery
          </a>{' '}
          tries to display (or translate from R) some of the best creations and
          explain how their source code works.
        </p>
        <p>
          The <Link to="/web-text-repel-with-matplotlib">first example</Link>{' '}
          below demos how to add clean labels on a scatterplot, automatically
          avoiding overlapping. It also explains how to control background,
          fonts, titles and more.
        </p>
        <p>
          If you want to display your work here, please drop me a word or even
          better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
            Pull Request
          </a>
          !
        </p>
        <Row>
          <Col xs={12} md={4}>
            <Link to={'/web-text-repel-with-matplotlib'}>
              <ChartImage
                imgName={'web-text-repel-with-matplotlib-square'}
                caption={
                  'Learn how to use the adjustText library to add many labels with no overlaps.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link
              to={'/web-scatterplot-text-annotation-and-regression-matplotlib'}
            >
              <ChartImage
                imgName={
                  'web-scatterplot-text-annotation-and-regression-matplotlib-square'
                }
                caption={
                  'Scatterplot with regression fit, group colors and non-overlapping labels.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-scatterplot-astronaut'}>
              <ChartImage
                imgName={'web-scatterplot-astronaut-square'}
                caption={
                  'Dark mode scatterplot with custom annotations, title and explanations. All of that with a very good appearance!'
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="correlation" />
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
