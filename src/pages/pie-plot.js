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
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/caveat/pie.html'>Pie Chart</a> is a circle divided into sectors that each represent a proportion of the whole. It is one of the most common viz type, but also probably the most <a href='https://www.data-to-viz.com/caveat/pie.html'>criticized</a>. In python, they are most of the time done thanks to the <code>pie()</code> function of the <code>Matplotlib</code> library.</p>";

const quickCode = `# library
import matplotlib.pyplot as plt

# create data: an array of values
size_of_groups=[12,11,3,30]

# Create a pieplot
plt.pie(size_of_groups)
plt.show()
`;

export const Head = () => (
  <SEO
    title="Pie plot | Python & Matplotlib examples"
    seoDescription="A collection of pie chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Pie() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Pie Plot"
        description={chartDescription}
        chartType="pie"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>matplotlib</code> allows to build a{' '}
              <Link to="/pie-plot">pie chart</Link> easily thanks to its{' '}
              <code>pie()</code> function.
            </p>
            <p>
              The input data you must provide is an array of numbers, where each
              numbers will be mapped to one of the pie item.🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/pie-plot-matplotlib-basic'}>
              <ChartImage
                imgName="pie-plot-matplotlib-basic1"
                caption="Most basic donut chart with Python and Matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Mind the pie chart</h2>
          <p>
            Pie chart is probably the most criticized chart type. Humans are
            pretty bad at reading angles, making it hard to rank the groups
            accurately. Most of the time, it is better to display the
            information as a <Link to="/barplot">barchart</Link>, a{' '}
            <Link to="/treemap">treemap</Link> or a{' '}
            <Link to="/lollipop-plot">lollipop</Link> plot.
          </p>
          <p>
            Have a look to the 3 pie charts below, can you spot the pattern
            hidden in it?
          </p>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <a href="https://www.data-to-viz.com/caveat/pie.html">
              <ChartImage
                imgName={'pieChartIssue'}
                caption={
                  "Can you spot the pattern hidden behind those 3 pie charts? Click to see the same info visualized as barplots: much more insightful isn't it?"
                }
              />
            </a>
          </div>
          <a href="https://www.data-to-viz.com/caveat/pie.html">
            <Button size="sm">See it as a barplot</Button>
          </a>
          <p>
            Last but not least, please avoid the <code>explode</code> and{' '}
            <code>shadow</code> options of the pie() function, they are killing
            all the most basic dataviz principles.
          </p>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Pie chart with <code>Matplotlib</code>
        </h2>
        <p>
          The examples below should guide you through the <code>pie()</code>{' '}
          function usage. It starts basics and then show how to add labels,
          customize colors and more.
        </p>
        <Row>
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-add-labels"
            caption="Add and customize the labels"
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-add-padding"
            caption="Customize the pie section colors"
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-colors"
            caption="Add blank space between each pie section."
            linkTo="/pie-plot-matplotlib-basic"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="partOfAWhole" />
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
