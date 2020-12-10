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
import ChartImage from "../components/ChartImage";
import { Button, Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk";


const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>";


const quickCode = `# libraries
import matplotlib.pyplot as plt
import squarify    # pip install squarify (algorithm for treemap)
import pandas as pd

# Create a data frame with fake data
df = pd.DataFrame({'nb_people':[8,3,4,2], 'group':["group A", "group B", "group C", "group D"] })

# plot it
squarify.plot(sizes=df['nb_people'], label=df['group'], alpha=.8 )
plt.axis('off')
plt.show()
`


export default function Treemap() {

  return (

    <Layout title="Treemap">
      <TitleAndDescription
        title="Treemap"
        description={chartDescription}
      />



      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>A <code>treemap</code> displays each element of a dataset as a rectangle. It allows to
            see what proportion each element has compared to the whole.</p>
            <p> This is doable with <code>python</code> and <code>Matplotlib</code> thanks to
            the <code>squarify</code> library that can be used as follow:🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/200-basic-treemap-with-python"}>
              <ChartImage imgName="200_Basic_Treemap_with_squarify"
                caption="Most basic Treemap with Python, Matplotlib and Squarify" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>


      <div className="greySection" id="related">
        <Container>
          <h2 id="Matplotlib">&#8505; &#65039; A note on the <code>Squarify</code> package</h2>
          <p>The squarify library is a pure Python implementation of the squarify
            treemap layout algorithm. It is a project developped by <a href="https://github.com/laserson">Uri Laserson</a> that
            has its documentation on <a href="https://github.com/laserson/squarify">github</a>.</p>
          <a href="https://github.com/laserson/squarify">
            <Button size="sm">Squarify documentation</Button>
          </a>
        </Container>
      </div>


      <Container>
        <h2 id="Matplotlib"><Matplotlib />Treemap with <code>Matplotlib</code> and <code>Squarify</code></h2>
        <p>
          <code>Matplotlib</code> is probably the most famous and flexible python library for data visualization.
          It is appropriate to build any kind of chart, including the
          lollipop plot thanks to its <code>stem()</code> function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="201_Custom_Treemap1"
            caption="How to control the color of your treemap"
            linkTo="/201-control-the-color-of-treemap"
          />
          <ChartImageContainer
            imgName="202_Treemap_map_color_to_size"
            caption="How to make the rectangle colors relative to their values."
            linkTo="/202-treemap-with-colors-mapped-on-values"
          />
        </Row>
      </Container>



      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="partOfAWhole" />
        </Container>
      </div>


      <Container>
        <Contact />
      </Container>


    </Layout >
  );
}
