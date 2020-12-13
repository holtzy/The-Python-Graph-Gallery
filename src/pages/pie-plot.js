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
  "<p>A <a href='https://www.data-to-viz.com/caveat/pie.html'>Pie Chart</a> is a circle divided into sectors that each represent a proportion of the whole. It is one of the most common viz type, but also probably the most <a href='https://www.data-to-viz.com/caveat/pie.html'>criticized</a>. In python, they are most of the time done thanks to the <code>pie()</code> function of the <code>Matplotlib</code> library.</p>";


const quickCode = `# library
import matplotlib.pyplot as plt

# create data: an array of values
size_of_groups=[12,11,3,30]

# Create a pieplot
plt.pie(size_of_groups)
plt.show()
`

export default function Donut() {

  return (

    <Layout title="Pie plot">
      <TitleAndDescription
        title="Pie Plot"
        description={chartDescription}
      />



      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>matplotlib</code> allows to build a <Link to="/pie-plot">pie chart</Link> easily
            thanks to its <code>pie()</code> function.</p>
            <p>The input data you must provide is an array of numbers, where each numbers will be mapped
              to one of the pie item.🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/pie-plot-matplotlib-basic"}>
              <ChartImage imgName="pie-plot-matplotlib-basic1"
                caption="Most basic donut chart with Python and Matplotlib" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>


      <div className="greySection">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Mind the donut!</h2>
          <p>As his friend the <Link to='pie-plot'>Pie chart</Link>, the Donut chart is often criticized. Humans
          are pretty bad at reading angles, making it hard to rank the groups accurately. Most
          of the time, it is better to display the
            information as a <Link to='/barplot'>barchart</Link>, a <Link to='/treemap'>treemap</Link> or a <Link to='/lollipop-plot'>lollipop</Link> plot.</p>
          <p>Have a look to the 3 pie charts below, can you spot the pattern hidden in it?</p>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Link to='/173-elaborated-venn-diagram'>
              <ChartImage imgName={'pieChartIssue'} caption={'The matplotlib-venn library allows a high level of customization. Here is an example taking advantage of it'} />
            </Link>
          </div>
          <a href='https://www.data-to-viz.com/caveat/pie.html'>
            <Button size="sm">See it as a barplot</Button>
          </a>
        </Container>
      </div>


      <Container>
        <h2 id="Matplotlib"><Matplotlib />Donut plot with <code>Matplotlib</code></h2>
        <p>
          The example above is a good start but you probably need to go further. The blog posts linked below
          explain common tasks like <Link to='/161-custom-matplotlib-donut-plot'>adding and
          customizing labels</Link>, change section colors, add <Link to='/161-custom-matplotlib-donut-plot'>padding</Link> between each
          and more.
        </p>
        <Row>
          <ChartImageContainer
            imgName="161_custom_donut_plot5"
            caption="Add and customize the labels"
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot3"
            caption="Customize the donut section colors"
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot6"
            caption="Add blank space between each donut section."
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="162_Background_color_donut"
            caption="How to make the rectangle colors relative to their values."
            linkTo="/162-change-background-of-donut-plot"
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
