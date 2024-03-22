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
      <code>Plotnine</code> is a library that allows to use the grammar of
      graphics in <code>Python</code>. It is based on the famous <code>ggplot2</code>{' '}
      library in <code>R</code>.
    </p>
    <p>
      Plotnine is a great tool to create <b>beautiful</b> and <b>complex</b>{' '}
      visualizations with a syntax that R users love.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="Plotly"
    seoDescription="An overview of the plotnine library in Python"
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
          Before using plotnine you need to install it. This can easily be done
          with <code>pip</code>:
        </p>
        <CodeChunk>{codeInstall}</CodeChunk>
        <br />
        <p>
          Now, try to use the following code in a Jupyter Notebook. You will get
          an interactive graph on which you can <b>zoom</b>, hover points to
          show a <b>tooltip</b>, <b>save as png</b> and more.
        </p>
        <iframe
          src="/interactiveCharts/plotly-add-annotation-0.html"
          title="scatterplot with plotly"
          style={{ border: 'none', width: '100%', height: '600px' }}
        ></iframe>

        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Embed">Scatter plot</h2>
        <p>
          Scatter plot in <code>plotnine</code> relies
          on the <code>geom_point()</code> function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="573-introduction-scatterplot-plotnine-1"
            caption="Basic scatter plot with plotnine"
            linkTo="/573-introduction-scatterplot-plotnine"
          />
          <ChartImageContainer
            imgName="573-introduction-scatterplot-plotnine-2"
            caption="Basic scatter plot with plotnine"
            linkTo="/573-introduction-scatterplot-plotnine"
          />
          <ChartImageContainer
            imgName="573-introduction-scatterplot-plotnine-3"
            caption="Basic scatter plot with plotnine"
            linkTo="/573-introduction-scatterplot-plotnine"
          />
        </Row>
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

const codeInstall = `pip install plotnine`;

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
