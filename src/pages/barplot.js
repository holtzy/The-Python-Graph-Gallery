import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import {
  Seaborn,
  Matplotlib,
  Pandas,
  Plotnine,
  Plotly,
} from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';
import { barplot } from '../functions/barplot';
import FunctionExploration from '../components/FunctionExploration';

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/barplot.html">barplot</a>{' '}
      shows the relationship between a <b>numeric</b> and a <b>categoric</b>{' '}
      variable. Each entity of the categoric variable is represented as a{' '}
      <b>bar</b>. The size of the bar represents its numeric value.{' '}
    </p>
    <p>
      This section shows how to build a barplot with <code>Python</code>, using
      libraries like <code>Matplotlib</code> and <code>Seaborn</code>. It start
      by explaining how to build a very basic barplot, and then provides
      tutorials for more customized versions.
    </p>
    <p>
      Note that this page also provides guidelines on how to build{' '}
      <b>stacked</b> and <b>grouped</b> barplot, 2 common variatons useful when
      several levels of grouping are available.
    </p>
  </>
);

const quickCode = `# Libraries
import numpy as np
import matplotlib.pyplot as plt

# Make a random dataset:
height = [3, 12, 5, 18, 45]
bars = ('A', 'B', 'C', 'D', 'E')
y_pos = np.arange(len(bars))

# Create bars
plt.bar(y_pos, height)

# Create names on the x-axis
plt.xticks(y_pos, bars)

# Show graphic
plt.show()
`;

export const Head = () => (
  <SEO
    title="Python Barplot Examples with Code"
    seoDescription="A collection of barplot examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Barplot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Barplot"
        description={chartDescription}
        chartType={'barplot'}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>Matplotlib</code> is pretty convenient to build a barplot
              thanks to its <code>bar()</code> function. Seaborn works perfectly
              as well, see its dedicated section.🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/1-basic-barplot'}>
              <ChartImage
                imgName="1_basic_barplot"
                caption="Most basic barplot with Python & Matplotlib."
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
          Barplot with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is probably the most famous and flexible
          python library for data visualization. It is appropriate to build any
          kind of chart, including the barchart thanks to its <code>bar()</code>{' '}
          function.
        </p>
        <p>
          The examples below should get you started. They go from{' '}
          <Link to="/1-basic-barplot">basic examples</Link> to the details on
          how to <Link to="/3-control-color-of-barplots">customize</Link> a
          barplot appropriately.
        </p>
        <Row>
          <ChartImageContainer
            imgName="2_horizontal_barplot"
            caption="Horizontal barplot, handy to make labels more readable."
            linkTo="/2-horizontal-barplot"
          />
          <ChartImageContainer
            imgName="3_control_color_barplot2"
            caption="Barplot and color customization."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="3_control_color_barplot4"
            caption="Change the bar stroke colors."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="4_add_title_and_axe_labels"
            caption="Title and axis labels with Matplotlib."
            linkTo="/4-add-title-and-axis-label"
          />
          <ChartImageContainer
            imgName="5_custom_space_between_bars"
            caption="Custom bar width. Can be handy to illustrate the sample size."
            linkTo="/5-control-width-and-space-in-barplots"
          />
          <ChartImageContainer
            imgName="5_custom_width_of_bars"
            caption="Custom space between bars."
            linkTo="/5-control-width-and-space-in-barplots"
          />
          <ChartImageContainer
            imgName="6_change_texture"
            caption="Change bar texture."
            linkTo="/6-change-bars-texture"
          />
          <ChartImageContainer
            imgName="7_increase_margin"
            caption="More space under X axis to fit long labels."
            linkTo="/7-custom-barplot-layout"
          />
          <ChartImageContainer
            imgName="7_custom_label"
            caption="Customize the bar labels."
            linkTo="/7-custom-barplot-layout"
          />
          <ChartImageContainer
            imgName="8_confidence_interval"
            caption="Barplot with confidence interval."
            linkTo="/8-add-confidence-interval-on-barplot"
          />
          <ChartImageContainer
            imgName="10_barplot_with_number_of_observations"
            caption="Highly customized barplot with colors, legend, labels and more."
            linkTo="/10-barplot-with-number-of-observation"
          />
          <ChartImageContainer
            imgName="web-tornado-chart"
            caption="Tornado chart with annotations"
            linkTo="/web-tornado-chart"
          />
          <ChartImageContainer
            imgName="584-introduction-hatch-matplotlib-1"
            caption="Add patterns to your barplot"
            linkTo="/584-introduction-hatch-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Barplot with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is definitely a good alternative to{' '}
          <code>Matplotlib</code> to build a barplot. It comes with a{' '}
          <code>barplot()</code> function that will get you started in minutes.
        </p>
        <p>
          As often, note that the <code>Seaborn</code> alternative allows to
          write less code to build the chart, but is slighlty more limited in
          term of customization
        </p>
        <Row>
          <ChartImageContainer
            imgName="basic-barplot-with-seaborn1"
            caption="Most basic barplot with Python and Seaborn"
            linkTo="/basic-barplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="basic-barplot-with-seaborn2"
            caption="Make your barplot vertical by swapping the x and y parameters"
            linkTo="/basic-barplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="basic-barplot-with-seaborn3"
            caption="Learn how to reorder groups in a seaborn barplot"
            linkTo="/basic-barplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="error-bars-on-barplot"
            caption="Add error bars on a seaborn barplot"
            linkTo="/error-bars-on-barplot"
          />
          <ChartImageContainer
            imgName="web-population-pyramid"
            caption="Population pyramid of a marketing funnel"
            linkTo="/web-population-pyramid"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration funDetails={barplot} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Stacked & Grouped">
          <Matplotlib />
          Stacked and Grouped barplot with <code>Matplotlib</code>
        </h2>
        <p>
          <u>Stacked</u> and <u>Grouped</u> barplots are a variation of the more
          simple barplot. They display the value of a numeric variable for each
          group and subgroups of a dataset. Subgroups can be stacked (stacked
          barplot) or set one beside the other (grouped barplot).
        </p>
        <p>
          The three examples below are in-depth tutorial explaining how to build
          them with Python.
        </p>
        <Row>
          <ChartImageContainer
            imgName="12_stacked_barplot"
            caption="How to build a stacked barplot with Python."
            linkTo="/12-stacked-barplot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="12_grouped_barplot"
            caption="How to build a grouped barplot with Python."
            linkTo="/11-grouped-barplot"
          />
          <ChartImageContainer
            imgName="12_stacked_percent_barplot"
            caption="How to build a percent stacked barplot with Python.."
            linkTo="/13-percent-stacked-barplot"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Stacked & Grouped">
          <Seaborn />
          Stacked and Grouped barplot with <code>Seaborn</code>
        </h2>
        <p>
          The <code>barplot()</code> function of <code>seaborn</code> allows to
          quickly build a grouped barplot. You just have to pass the column used
          for subgrouping to the <code>hue</code> parameter.
        </p>
        <p>
          It gets a bit more tricky for stacked and percent stacked barplot, but
          the examples below should hopefully help.
        </p>
        <Row>
          <ChartImageContainer
            imgName="grouped-barplot1"
            caption="Grouped barplot with python and seaborn"
            linkTo="/grouped-barplot"
          />
          <ChartImageContainer
            imgName="stacked-barplot-seaborn"
            caption="Stacked barchart with python and seaborn"
            linkTo="/stacked-and-percent-stacked-barplot"
          />
          <ChartImageContainer
            imgName="stacked-percent-barplot-seaborn"
            caption="Percent stacked barchart with python and seaborn"
            linkTo="/stacked-and-percent-stacked-barplot"
          />
          <ChartImageContainer
            imgName="552-table-combined-with-plot"
            caption="Stacked Barplot combined with a table"
            linkTo="/552-table-combined-with-plot"
          />
        </Row>
        <div style={{ margin: '0 auto' }}>
          <Link to="/grouped-barplot">
            <ChartImage
              imgName={'grouped-barplot2'}
              caption={
                'Grouped barplot with small multiples to show 3 levels of grouping.'
              }
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          <Pandas />
          Barplot with <code>Pandas</code>
        </h2>
        <p>
          The <code>bar()</code> function of <code>pandas</code> allows to
          quickly build a barplot. You will find below examples of how to create
          simple and grouped barcharts using <code>pandas</code>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="538-introduction-to-barplot-with-pandas"
            caption="Introduction to barplot with pandas"
            linkTo="/538-introduction-to-barplot-with-pandas"
          />
          <ChartImageContainer
            imgName="539-customizing-barplot-with-pandas"
            caption="Customizing barplot with pandas"
            linkTo="/539-customizing-barplot-with-pandas"
          />
          <ChartImageContainer
            imgName="540-barplots-grouped-by-color-with-pandas"
            caption="Barplots grouped by color with pandas"
            linkTo="/540-barplots-grouped-by-color-with-pandas"
          />
          <ChartImageContainer
            imgName="547-stacked-barplots-with-pandas-1"
            caption="Stacked barplot with pandas"
            linkTo="/547-stacked-barplots-with-pandas"
          />
          <ChartImageContainer
            imgName="547-stacked-barplots-with-pandas-2"
            caption="Stacked 100% barplot with pandas"
            linkTo="/547-stacked-barplots-with-pandas"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          <Plotly />
          Barplot with <code>Plotly</code>
        </h2>
        <p>
          The <code>Plotly</code> provides <b>2 ways</b> to build a barplot. The
          first one is to use the <code>plotly express</code> module for fast
          and interactive barplots. The second one is to use the{' '}
          <code>graph objects</code> module for more advanced customization.
        </p>
        <p>The examples below explains both methods.</p>
        <Row>
          <ChartImageContainer
            imgName="582-simple-barplot-plotly"
            caption="Interactive Barplot with plotly"
            linkTo="/582-simple-barplot-plotly"
          />
          <ChartImageContainer
            imgName="583-stacked-barplot-plotly"
            caption="Interactive Stacked Barplot with plotly"
            linkTo="/583-stacked-barplot-plotly"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotnine">
          <Plotnine />
          Barplot with <code>Plotnine</code>
        </h2>
        <p>
          The <a href="https://python-graph-gallery.com/plotnine/">plotnine</a>{' '}
          library is a great alternative to build barplots. It is based on the{' '}
          <b>grammar of graphics</b>, like ggplot2 in{' '}
          <a href="https://r-graph-gallery.com/">R</a>.
        </p>
        <p>
          The examples below should get you started. They go from very simple
          examples and how to customize them.
        </p>
        <Row>
          <ChartImageContainer
            imgName="576-introduction-barplot-plotnine-1"
            caption="Most simple barplot"
            linkTo="/576-introduction-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="576-introduction-barplot-plotnine-2"
            caption="Change color and edge color"
            linkTo="/576-introduction-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="576-introduction-barplot-plotnine-3"
            caption="Custom width of the bars"
            linkTo="/576-introduction-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="577-customize-barplot-plotnine-1"
            caption="Define one specific color per bar"
            linkTo="/577-customize-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="577-customize-barplot-plotnine-2"
            caption="Color bars according to a variable"
            linkTo="/577-customize-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="577-customize-barplot-plotnine-3"
            caption="Flip the x and y axis"
            linkTo="/577-customize-barplot-plotnine"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python barplot examples
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
            <Link to={'/web-circular-barplot-with-matplotlib'}>
              <ChartImage
                imgName={'web-circular-barplot-with-matplotlib-square'}
                caption={
                  'A circular barchart with several features per group made with Python and Matplotlib.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-horizontal-barplot-with-labels-the-economist'}>
              <ChartImage
                imgName={
                  'web-horizontal-barplot-with-labels-the-economist-square'
                }
                caption={
                  'Lear how to mimick the style of the Economist on this horizontal barplot.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-heatmap-and-radial-barchart-plastics'}>
              <ChartImage
                imgName={'web-heatmap-and-radial-barchart-plastics-square2'}
                caption={
                  'How to combine a heatmap with a radial barplot on the same figure with heaps of visual tweaks.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-ordered-mirror-barplot'}>
              <ChartImage
                imgName={'web-ordered-mirror-barplot'}
                caption={
                  'Mirror barplot with data points and annotations on top.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-barplot-with-annotations-and-arrows'}>
              <ChartImage
                imgName={'web-barplot-with-annotations-and-arrows-square'}
                caption={
                  'Barplot with annotations and arrows to highlight specific bars.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-tornado-chart'}>
              <ChartImage
                imgName={'web-tornado-chart'}
                caption={'Tornado with custom title and colors'}
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
