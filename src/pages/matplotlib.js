
import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";
import { Button } from "react-bootstrap";

const chartDescription =
  "<p><code>Matplotlib</code> is the most famous library for data visualization with <code>python</code>. It allows to create literally every type of chart with a great level of customization. This page provides some general tips that can be applied on any kind of chart made with <code>matplotlib</code> like customizing titles or colors. If you're looking at creating a specific chart type, visit <a href='https://www.python-graph-gallery.com'>the gallery</a> instead.</p>";

const quickCode = `# library
import numpy as np
import matplotlib.pyplot as plt

# Create data
x=range(1,6)
y=[1,4,6,8,4]

# Area plot
plt.fill_between(x, y)
plot.show()
`

export default function LinePlot() {

  return (

    <Layout title="Matplotlib" isTocEnabled>

      <TitleAndDescription
        title="Matplotlib"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors of values as input.</p>
            <ul>
              <li>The <code>fill_between()</code> function</li>
              <li>The <code>stackplot()</code> function that is more useful for <Link to='/stacked-area-plot'>stacked area</Link> charts</li>
            </ul>
          </Col>
          <Col md={6}>
            <Link to={"/240-basic-area-chart"}>
              <ChartImage imgName="240_basic_area_chart"
                caption="The most basic area chart one can make with python and matplotlib" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Lexicon"><Matplotlib />Basic vocabulary</h2>
        <p>
          The figure below describes the anatomy of a <code>matplotlib</code> charts. It names all the main components,
          names that you need to know to understand the documentation properly.
        </p>
        <p>
          &#9888;&#65039; <u>Disclaimer</u>: this figure comes from the very complete <a href='https://matplotlib.org/faq/usage_faq.html#coding-styles'>matplotlib documentation</a>. Have a look at it
          for a thorough explanation on how this library works.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <ChartImage imgName={'matplotlib_vocabulary'} caption={'Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly'} />
        </div>
        <a href='https://matplotlib.org/faq/usage_faq.html#coding-styles'>
          <Button size="sm">Matplotlib doc</Button>
        </a>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Title"><Matplotlib />Customizing titles</h2>
        <p>
          The title is a key part of a good chart. It has to <u>summarize</u> its key message in a few words. Always avoid to simply
          repeat what is displayed on each axis. Try to provide some more insight allowing to understand the main result instead.
        </p>
        <p>The <Link to='/190-custom-matplotlib-title'>post #190</Link> goes in depth on how to customize the <code>matplotlib</code>
        title. All the main types of change are descried: changing
        its color, adding a subtitle, using math formulas and so on. Give it a go!
        </p>
        <Row>
          <ChartImageContainer
            imgName="190_Custom_title6"
            caption="Python chart with subtitle and custom color"
            linkTo="/190-custom-matplotlib-title"
          />
          <ChartImageContainer
            imgName="190_Custom_title7"
            caption="Add a math formula in title with Matplotlib"
            linkTo="/190-custom-matplotlib-title"
          />
          <ChartImageContainer
            imgName="190_Custom_title5"
            caption="Control the height of the matplotlib title"
            linkTo="/190-custom-matplotlib-title"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Annotation"><Matplotlib />Annotation</h2>
        <p>
          Annatation is a key part of a great visualization. It transforms a simple chart
          in a whole piece of story telling. Before you share your graph with anyone,
          make sure the key insight is explained.
        </p>
        <Row>
          <ChartImageContainer
            imgName="191_Custom_axis1"
            caption="Change the axis title and its appearance"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis2"
            caption="Control axis labels and ticks look"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis6"
            caption="Control axis limit with the xlim() function"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Axis"><Matplotlib />Customizing axis</h2>
        <p>
          <code>Matplotlib</code> allows every kind of axis configuration. It is mainly done thanks
          to the <code>tick_params()</code>, <code>xticks()</code> and <code>xlabels()</code> functions.
          The <Link to='191-custom-axis-on-matplotlib-chart'>post #191</Link> will guide you through all the possibilities.
        </p>
        <Row>
          <ChartImageContainer
            imgName="191_Custom_axis1"
            caption="Change the axis title and its appearance"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis2"
            caption="Control axis labels and ticks look"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis6"
            caption="Control axis limit with the xlim() function"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
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

    </Layout >
  );
}
