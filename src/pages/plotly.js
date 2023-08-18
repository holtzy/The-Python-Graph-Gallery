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

const chartDescription =
  "<p><code>Plotly</code> is a javascript library for data visualization. It is based on the famous <a href='https://www.d3-graph-gallery.com'>d3.js</a> library, and provides a python wrapper allowing to build stunning interactive charts directly from <code>Python</code>. Most of the gallery sections provide <code>plotly</code> examples, this post provides a few general tips.</p>";

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

export default function Plotlys() {
  return (
    <Layout
      title="Plotly"
      isTocEnabled
      seoDescription="An overview of the plotly python library for interactive data visualization"
    >
      <TitleAndDescription title="Plotly" description={chartDescription} />

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
        <h2 id="Save">&#9201; Saving a plotly chart</h2>
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
        <h2 id="Embed">&#9201; Embeding a plotly chart</h2>
        <p>
          Once the chart has been saved, you can embed it in a html document
          using:
        </p>
        <CodeChunk>{embedCode}</CodeChunk>
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
