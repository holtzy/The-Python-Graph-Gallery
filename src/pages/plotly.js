import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Plotly } from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import ChartImageContainer from '../components/ChartImageContainer';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      <code>Plotly</code> is a library for making <b>interactive</b> graphs with
      python. On a plotly chart it is possible to have <b>tooltips</b> for
      interesting markers, <b>zoom</b> on interesting location, <b>save</b> the
      chart as png and more 🔥.
    </p>
    <p>
      Plotly is based on the famous{' '}
      <a href="https://www.d3-graph-gallery.com">d3.js</a> javascript library,
      and provides a python wrapper allowing to build stunning interactive
      charts directly from <code>Python</code>.
    </p>
    <p>
      Most of the gallery sections provide <code>plotly</code> examples. This
      post provides a few <b>general tips</b> relative to this mind blowing
      library.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="Plotly"
    seoDescription="An overview of the plotly python library for interactive data visualization"
  />
);

export default function Plotlys() {
  return (
    <Layout title="Plotly">
      <TitleAndDescription
        title="Interactive charts with Plotly"
        description={chartDescription}
        chartType={'plotly'}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <p>
          Before using plotly you need to install it. This can easily be done
          with <code>pip</code>:
        </p>
        <CodeChunk>{codeInstall}</CodeChunk>
        <br />
        <p>
          Now, try to use the following code in a Jupyter Notebook. You will get
          an interactive graph on which you can <b>zoom</b>, hover points to
          show a <b>tooltip</b>, <b>save as png</b> and more.
        </p>
        <CodeChunk>{quickCode}</CodeChunk>
        <iframe
          src="/interactiveCharts/plotly-add-annotation-0.html"
          title="scatterplot with plotly"
          style={{ border: 'none', width: '100%', height: '600px' }}
        ></iframe>
      </Container>

      <Spacing />

      <Container>
        <h2 id="APIs">
          <code>{'</>'}</code> Two distinct APIs
        </h2>
        <p>
          There are 2 main ways to use the <code>plotly</code> python library:{' '}
          <b>plotly express</b> and <b>plotly graph objects</b>.
        </p>
        <h3>1️⃣ Quick chart with plotly express 🏃🏿‍♀️</h3>
        <p>
          This is the user-friendly, <b>high-level API</b>, that taps into
          Plotly's graphical capabilities to facilitate the swift creation
          graphs. Its streamlined approach empowers users to generate a variety
          of chart types with <b>minimal code</b>.
        </p>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              This abstraction shields users from intricate technical details,
              making it an ideal choice for those seeking an <b>efficient</b>{' '}
              visualization solution.
            </p>
            <p>
              In the following code, <b>just 2 lines of code</b> are needed to
              create an interactive bar chart, using the function{' '}
              <code>px.bar()</code>.
            </p>
          </Col>
          <Col md={6}>
            <div className="mx-auto">
              <iframe
                src="/interactiveCharts/barplot-plotly-express.html"
                title="barplot with plotly"
                style={{ border: 'none', width: '100%', height: '400px' }}
              ></iframe>
            </div>
          </Col>
        </Row>
        <CodeChunk>{plotlyExpressCode}</CodeChunk>
        <br />
        <h3>2️⃣ Fine control with Plotly Graph Objects 🎨</h3>
        <p>
          In contrast, the Plotly Graph Objects API presents a{' '}
          <b>finer level of control</b> and customization within the Plotly
          framework.
        </p>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <b>A bit more code</b> is required to build the same chart
              compared to plotly express. But we believe that this API is still
              very straightforward to use and offers more flexibility.
            </p>
          </Col>
          <Col md={6}>
            <div className="mx-auto">
              <iframe
                src="/interactiveCharts/barplot-plotly-go.html"
                title="barplot with plotly"
                style={{ border: 'none', width: '100%', height: '400px' }}
              ></iframe>
            </div>
          </Col>
        </Row>

        <p>
          Compared to the Express API, we need to initiate a figure object (with
          a slightly more complex syntax) using the function{' '}
          <code>go.Figure</code> and then change the layout of this figure using
          the function <code>fig.update_layout()</code>.
        </p>
        <CodeChunk>{plotlyGoCode}</CodeChunk>
        <br />
        <br />
        <p>
          Interested in knowing more? You can check the{' '}
          <Link href="/520-the-two-plotly-apis">full post</Link> on the topic!
        </p>
        <Link href="/520-the-two-plotly-apis">
          <Button>Plotly APIs post</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Save">Saving a plotly chart</h2>
        <p>
          Once you've created a <code>plotly</code> chart you probably want to
          save it as a standalone <code>html</code> file in order to share it or
          embed it in another webpage.
        </p>
        <p>
          This is the code allowing to save a <code>plotly</code> chart. You can
          read the full process{' '}
          <Link to="/parallel-coordinate-plot-plotly">here</Link> for instance.
        </p>
        <CodeChunk>{saveCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Embed">Embeding a plotly chart</h2>
        <p>
          Once the chart has been saved, you can embed it in a html document
          using:
        </p>
        <CodeChunk>{embedCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Embed">Title customization</h2>
        <p>
          The <code>fig.update_layout()</code> function provides everything you
          need to customize the <b>title</b> of your chart.
        </p>
        <p>
          Read the plotly{' '}
          <Link href="/522-plotly-customize-title">title tutorial</Link> to
          understand how the change the <b>font</b>, <b>color</b>, <b>size</b>{' '}
          and <b>alignment</b> of your title.
        </p>
        <Row>
          <ChartImageContainer
            imgName="522-plotly-customize-title"
            caption="How to customize the title of a plotly chart"
            linkTo="/522-plotly-customize-title"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Annotation">Annotation</h2>
        <p>
          <b>Annotation</b> is a key part of a great data visualization.
        </p>
        <p>
          Fortunately, plotly provides a <code>add_annotation()</code> function
          allowing to add some powerful, custom annotation on charts.
        </p>
        <p>
          Please read the dedicated{' '}
          <Link href="/523-plotly-add-annotation">annotation tutorial</Link> to
          learn how to use it.
        </p>
        <Row>
          <ChartImageContainer
            imgName="523-plotly-add-annotation"
            caption="Add an arrow with text to annotate a scatterplot"
            linkTo="/523-plotly-add-annotation"
          />
          <ChartImageContainer
            imgName="523-plotly-add-annotation-2"
            caption="Learn how to add a line, a square, emojis, links and more"
            linkTo="/523-plotly-add-annotation"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Gallery">
          <Plotly />
          Plotly graph gallery
        </h2>
        <p>Here is a glimpse of the plotly charts showcased in the gallery:</p>
        <Row>
          <ChartImageContainer
            imgName="511-interactive-scatterplot-with-plotly-1"
            caption="Most basic scatterplot with plotly"
            linkTo="/511-interactive-scatterplot-with-plotly"
          />
          <ChartImageContainer
            imgName="511-interactive-scatterplot-with-plotly-2"
            caption="Plotly scatterplot with several levels of grouping"
            linkTo="/511-interactive-scatterplot-with-plotly"
          />
          <ChartImageContainer
            imgName="511-interactive-scatterplot-with-plotly-3"
            caption="Plotly scatterplot with a trend line"
            linkTo="/511-interactive-scatterplot-with-plotly"
          />
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
          <ChartImageContainer
            imgName="parallel-coordinate-plot-plotly"
            caption="Interactive parallel chart with plotly"
            linkTo="/parallel-coordinate-plot-plotly"
          />
          <ChartImageContainer
            imgName="ridgeline-graph-plotly"
            caption="Interactive ridgeline chart with plotly"
            linkTo="/ridgeline-graph-plotly"
          />
          <ChartImageContainer
            imgName="sankey-diagram-with-python-and-plotly"
            caption="Interactive Sankey diagram with plotly"
            linkTo="/sankey-diagram-with-python-and-plotly"
          />
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
          <ChartImageContainer
            imgName="524-area-over-flexible-baseline_square"
            caption="Plotly line chart with many customization"
            linkTo="/524-area-chart-over-flexible-baseline"
          />
          <ChartImageContainer
            imgName="553-intro-candle-stick-plotly"
            caption="How to make a candlestick chart with Plotly"
            linkTo="/553-intro-candle-stick-plotly"
          />
          <ChartImageContainer
            imgName="554-custom-candle-stick-plotly"
            caption="How to customize a candlestick chart with Plotly"
            linkTo="/554-custom-candle-stick-plotly"
          />
          <ChartImageContainer
            imgName="555-candle-stick-with-moving-average-plotly"
            caption="How to add one or several moving averages to a candlestick chart"
            linkTo="/555-candle-stick-with-moving-average-plotly"
          />
          <ChartImageContainer
            imgName="571-radar-chart-with-plotly-1"
            caption="Most basic radar chart with plotly"
            linkTo="/571-radar-chart-with-plotly"
          />
          <ChartImageContainer
            imgName="571-radar-chart-with-plotly-2"
            caption="Radar chart with several displayed values"
            linkTo="/571-radar-chart-with-plotly"
          />
        </Row>
        <br />
        <p>
          Above images are <b>static</b>, but all linked blog posts provide the
          interactive version of the chart. Here is an example with an
          interactive{' '}
          <Link href="/parallel-coordinate-plot-plotly">
            parallel coordinate chart
          </Link>
          :
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/parallel-coordinate-plot-plotly.html"
            title="parallel coordinate chart with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <Link to="/parallel-coordinate-plot-plotly">
          <Button size="sm">See code</Button>
        </Link>
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

const quickCode = `# Load plotly
import plotly.graph_objects as go

# Sample data
x = [1.5, 2.9, 3, 4.2, 5.6]
y = [2.2, 13.3, 4.4, 55.3, 52.1]

# Initialize a figure
fig = go.Figure()

# Add the scatter trace
fig.add_trace(go.Scatter(
    x=x, # Variable in the x-axis
    y=y, # Variable in the y-axis
    mode='markers', # This explicitly states that we want our observations to be represented by points
))

# Show
fig.show()
`;

const codeInstall = `pip install plotly`;

const saveCode = `fig.write_html("the/path/to/chart-name.html")`;
const embedCode = `<iframe
  src="the/path/to/chart-name.html"
  width="800"
  height="600"
  title="chart name"
  style="border:none">
</iframe>`;

const plotlyExpressCode = `# import the plotly express library
import plotly.express as px

# Some dummy data
categories = ['A', 'B', 'C', 'D', 'E']
values = [15, 22, 18, 12, 28]

# Plot
fig = px.bar(
  x=categories,
  y=values,
)

fig.show()
`;

const plotlyGoCode = `# import the plotly graph objects lib
import plotly.graph_objects as go

# Some dummy data
categories = ['A', 'B', 'C', 'D', 'E']
values = [15, 22, 18, 12, 28]

# Create a bar chart using the Graph Object API
fig = go.Figure(data=[go.Bar(x=categories, y=values)])

# Update layout
fig.update_layout(
  title="Simple Bar Chart",
  xaxis_title="Categories",
  yaxis_title="Values")


fig.show()
`;
