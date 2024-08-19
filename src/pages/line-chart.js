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
  Matplotlib,
  Pandas,
  Plotly,
  Seaborn,
} from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';
import { plot } from '../functions/plot';
import FunctionExploration from '../components/FunctionExploration';

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/line.html">line chart</a>{' '}
      displays the <b>evolution</b> of one or several <b>numeric variables</b>.
      It is often used to represend <Link href="/timeseries">time series</Link>.
    </p>
    <p>
      The line chart is one of the <b>most common</b> chart type. As a result,
      all the most common python data visualization libraries like{' '}
      <code>matplotlib</code>, <code>seaborn</code> or <code>plotly</code> allow
      to build it.
    </p>
    <p>
      This page displays many line chart examples made with those tools. It goes
      from <b>basic line chart tutorials</b> to highly customized,{' '}
      <b>polished examples</b> 🔥.
    </p>
  </>
);

const quickCode = `# libraries
import matplotlib.pyplot as plt
import numpy as np

# create data
values=np.cumsum(np.random.randn(1000,1))

# use the plot function
plt.plot(values)
`;

export const Head = () => (
  <SEO
    title="Line chart | Python & Matplotlib examples"
    seoDescription="A collection of line chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function LinePlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Line Chart"
        description={chartDescription}
        chartType="line"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Making a simple line chart with <code>matplotlib</code> is pretty
              straightforward thanks to the <code>plot()</code> function.
            </p>
            <p>
              If you provide only a series of values, it will consider that
              these values are ordered and will use values from 1 to n to create
              the X axis.🔥
            </p>
            <p>
              For more control on the chart, see the dedicated section below.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/120-line-chart-with-matplotlib'}>
              <ChartImage
                imgName="120_Basic_lineplot2"
                caption="A basic line chart made with python and matplotlib"
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
          Line chart with <code>Matplotlib</code>
        </h2>
        <p>
          <code>Matplotlib</code> is a great fit to build line charts thanks to
          its <code>plot()</code> function.{' '}
        </p>
        <p>
          The <Link to="/120-line-chart-with-matplotlib">first chart</Link> of
          this section explains how to use <code>plot()</code> from any kind of
          data input format. The{' '}
          <Link to="/121-line-chart-customization">next one</Link> goes deep
          into chart customization (line width, color aspect and more).{' '}
        </p>
        <p>
          Another common need is to build a{' '}
          <Link to="/line-chart-dual-y-axis-with-matplotlib">
            dual Y axis line chart
          </Link>
          , but be mindful of the{' '}
          <a href="https://www.data-to-viz.com/caveat/dual_axis.html">
            caveats
          </a>{' '}
          that go with it.
        </p>
        <Row>
          <ChartImageContainer
            imgName="120_Basic_lineplot1"
            caption="How to build a basic line chart with python from any kind of input format"
            linkTo="/120-line-chart-with-matplotlib"
          />
          <ChartImageContainer
            imgName="121_Custom_line_plot3"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/121-line-chart-customization"
          />
          <ChartImageContainer
            imgName="basic-time-series-with-matplotlib"
            caption="How to deal with the date format. How to represent those dates properly on the X axis."
            linkTo="/basic-time-series-with-matplotlib"
          />
          <ChartImageContainer
            imgName="line-chart-dual-y-axis-with-matplotlib1"
            caption="How to build a dual Y axis line chart to display 2 series with different units."
            linkTo="/line-chart-dual-y-axis-with-matplotlib"
          />
          <ChartImageContainer
            imgName="area-fill-between-two-lines-in-matplotlib"
            caption="Fill the gap between 2 line charts"
            linkTo="/area-fill-between-two-lines-in-matplotlib"
          />
          <ChartImageContainer
            imgName="516-line-chart-with-annotations"
            caption="Add annotation on top of a matplotlib line chart"
            linkTo="/516-line-chart-with-annotations"
          />
          <ChartImageContainer
            imgName="525-line-chart-log-transform"
            caption="How to apply a log transform to the Y scale of the line chart"
            linkTo="/525-line-chart-log-transform"
          />
          <ChartImageContainer
            imgName="585-legend-for-categorical-data-matplotlib-3"
            caption="Add label on each line of a line chart with matplotlib"
            linkTo="/585-legend-for-categorical-data-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration funDetails={plot} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Multiple groups">
          <Matplotlib />
          Line chart with several groups (<code>Matplotlib</code>)
        </h2>
        <p>
          A line chart with multiple groups allows to show the evolution of{' '}
          <b>several items</b> on the same figure.{' '}
        </p>
        <p>
          It is powerful but can quickly turn into a{' '}
          <a href="https://www.data-to-viz.com/caveat/spaghetti.html">
            spaghetti chart
          </a>
          : when too many lines are displayed they get cluttered and{' '}
          <b>hard to read</b>. Moreover, make sure to use{' '}
          <Link href="/123-highlight-a-line-in-line-plot">inline labeling</Link>{' '}
          instead of a side legend that is very annoying to read.
        </p>
        <p>
          The examples below explain how to build a line chart with multiple
          groups, and what are the <b>alternatives</b> to show your data a
          better way.
        </p>
        <Row>
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="Line chart with multiple groups"
            linkTo="/122-multiple-lines-chart"
          />
          <ChartImageContainer
            imgName="123_Highlight_a_line"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/123-highlight-a-line-in-line-plot"
          />
          <ChartImageContainer
            imgName="124_Spaghetti_plot"
            caption="Line chart with multiple groups"
            linkTo="/124-spaghetti-plot"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple_v2"
            caption="Line chart and small multiple"
            linkTo="/125-small-multiples-for-line-chart"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple"
            caption="Line chart and small multiple (variation)"
            linkTo="/125-small-multiples-for-line-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="seaborn">
          <Seaborn />
          Line chart with Seaborn
        </h2>
        <p>
          <Link href="/seaborn">Seaborn</Link> is another very good alternative
          when it comes to create line charts in Python. It comes with a
          powerful <code>lineplot()</code> function that does most of the work
          for us.
        </p>
        <Row>
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="Line chart with multiple groups"
            linkTo="/122-multiple-lines-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="plotly">
          <Plotly />
          Interactive line chart with plotly
        </h2>
        <p>
          If you are looking for an <b>interactive</b> version of a line chart
          with Python, <Link href="/plotly">plotly</Link> is definitely the
          library you need.
        </p>
        <p>
          Its API is very straightforward to understand, and the output allows
          to <b>zoom</b> on the chart and have <b>tooltip</b> for markers:
        </p>
        <Row>
          <ChartImageContainer
            imgName="514-interactive-line-chart-plotly-1"
            caption="Basic interactive line chart with plotly"
            linkTo="/514-interactive-line-chart-plotly"
          />
          <ChartImageContainer
            imgName="514-interactive-line-chart-plotly-2"
            caption="How to customize the appearance of a plotly line chart"
            linkTo="/514-interactive-line-chart-plotly"
          />
          <ChartImageContainer
            imgName="514-interactive-line-chart-plotly-3"
            caption="Interactive line chart with multiple groups"
            linkTo="/514-interactive-line-chart-plotly"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="pandas">
          <Pandas />
          Line chart with Pandas
        </h2>
        <p>
          <Link href="/pandas">Pandas</Link> offers a simple and efficient way
          to create line charts directly from <b>DataFrames</b>, eliminating the
          need for complex data manipulation.
        </p>
        <p>
          Its integration with <Link href="/matplotlib">Matplotlib</Link>
          allows for extensive customization, making it a versatile choice for
          quick data visualization tasks.
        </p>
        <Row>
          <ChartImageContainer
            imgName="530-introduction-to-linechart-with-pandas"
            caption="Introduction to line chart with pandas"
            linkTo="/530-introduction-to-linechart-with-pandas"
          />
          <ChartImageContainer
            imgName="531-customizing-linecharts-with-pandas"
            caption="Customize your line charts with pandas"
            linkTo="/531-customizing-linecharts-with-pandas"
          />
          <ChartImageContainer
            imgName="532-linecharts-mutliple-groups-with-pandas"
            caption="Line charts with multiple variables or groups with pandas"
            linkTo="/532-linecharts-mutliple-groups-with-pandas"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python line chart examples
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
          <Col xs={12} md={4}>
            <Link to={'/web-line-chart-with-labels-at-line-end'}>
              <ChartImage
                imgName={'web-line-chart-with-labels-at-line-end'}
                caption={
                  'How to add labels at the end of each line with matplotlib. Definitely better than using a legend!'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-time-series-and-facetting-with-matplotlib'}>
              <ChartImage
                imgName={'web-time-series-and-facetting-with-matplotlib-square'}
                caption={
                  'Display 2 line charts and fill the area between both. Also uses faceting to split by groups.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-highlighted-lineplot-with-faceting'}>
              <ChartImage
                imgName={'web-highlighted-lineplot-with-faceting'}
                caption={
                  'A multipanel connected scatterplot, with several groups displayed and one highlighted per panel.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-lineplots-and-area-chart-the-economist'}>
              <ChartImage
                imgName={'web-lineplots-and-area-chart-the-economist-square1'}
                caption={
                  "Learn how to mimick The Economist's style with a figure combining both a line and an area chart."
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-multiple-lines-and-panels'}>
              <ChartImage
                imgName={'web-multiple-lines-and-panels'}
                caption={
                  'Multiple grouped line charts with a beautiful color palette and customized title and annotation.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-line-chart-small-multiple'}>
              <ChartImage
                imgName={'web-line-chart-small-multiple-square'}
                caption={
                  'A beautiful line chart with small multiple made with Python and matplotlib'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-stacked-charts'}>
              <ChartImage
                imgName={'web-stacked-charts'}
                caption={'A wordcloud combined with a line chart'}
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-small-multiple-with-highlights'}>
              <ChartImage
                imgName={'web-small-multiple-with-highlights'}
                caption={'Multiple line charts with highlights'}
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="evolution" />
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
