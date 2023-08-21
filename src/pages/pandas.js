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

const chartDescription = (
  <>
    <p>
      Beyond its powerful data manipulation capabilities, Pandas offers
      convenient plotting methods, enabling users to visualize data directly
      from DataFrame and Series objects.
    </p>
  </>
);

export default function Plotlys() {
  return (
    <Layout
      title="Pandas"
      isTocEnabled
      seoDescription="An overview of the Pandas python library data wrangling and data visualization"
    >
      <TitleAndDescription
        title="Pandas for data visualization"
        description={chartDescription}
        chartType={'plotly'}
      />

      <Container>
        <p>This section is under construction and will be available soon.</p>
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
