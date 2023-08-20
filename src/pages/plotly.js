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
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import ChartImageContainer from '../components/ChartImageContainer';

const chartDescription = (
  <>
    <p>
      <code>Plotly</code> is a library for making <b>interactive</b> graphs with
      python. On a plotly chart it is possible to have <b>tooltips</b> for
      interesting markers, <b>zoom</b> on interesting location, <b>save</b> the
      chart as png and more.
    </p>
    <p>
      Plotly is based on the famous{' '}
      <a href="https://www.d3-graph-gallery.com">d3.js</a> javascript library,
      and provides a python wrapper allowing to build stunning interactive
      charts directly from <code>Python</code>. Most of the gallery sections
      provide <code>plotly</code> examples, this post provides a few{' '}
      <b>general tips</b>.
    </p>
  </>
);

export default function Plotlys() {
  return (
    <Layout
      title="Plotly"
      isTocEnabled
      seoDescription="An overview of the plotly python library for interactive data visualization"
    >
      <TitleAndDescription
        title="Interactive charts with Plotly"
        description={chartDescription}
        chartType={'plotly'}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>Matplotlib</code> is the most famous python data
              visualization library. It is widely used and most of other viz
              libraries (like <code>seaborn</code>) are actually built on top of
              it.
            </p>
            <p>
              Once installed, matplotlib must be imported, usually using{' '}
              <code>import matplotlib.pyplot as plt</code>. You can then use use
              the functions available in the <code>plt</code> object.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/240-basic-area-chart'}>
              <ChartImage
                imgName="240_basic_area_chart"
                caption="The most basic area chart one can make with python and matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
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
        <h3>&rarr; Quick chart with plotly express 🏃🏿‍♀️</h3>
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

        <h3>&rarr; Fine control with Plotly Graph Objects 🎨</h3>
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
          In the following code the <code>Figure</code> is a dictionary or
          instances of <code>plotly.graph_objects.Figure</code>. In the
          following code, compared to the Express API, we need to initiate a
          figure object (with a slightly more complex syntax) using the function{' '}
          <code>go.Figure</code> and then change the layout of this figure using
          the function <code>fig.update_layout()</code>.
        </p>
        <CodeChunk>{plotlyGoCode}</CodeChunk>
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
          Read the following tutorial to understand how the change the{' '}
          <b>font</b>,<b>color</b>, <b>size</b> and <b>alignment</b> of your
          title.
        </p>
        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/plotly-customize-title-2.html"
            title="plotly chart with customized title"
            style={{ border: 'none', width: '500px', height: '500px' }}
          ></iframe>
        </div>
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
            imgName="520-interactive-barplot-with-plotly"
            caption="Interactive Barplot with plotly"
            linkTo="/520-interactive-barplot-with-plotly"
          />
        </Row>

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

const quickCode = `# library
import numpy as np
import matplotlib.pyplot as plt

# Create data
x=range(1,6)
y=[1,4,6,8,4]

# Area plot
plt.fill_between(x, y)
plt.show()
`;

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
