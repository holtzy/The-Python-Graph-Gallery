import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Button, Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/bubble.html'>bubble plot</a> is a <a href='https://www.python-graph-gallery.com/scatter-plot'>scatterplot</a> where the circle size is mapped to the value of a third numeric variable. This section shows many bubble plots made with <code>Python</code>, using both the <code>Matplotlib</code> and <code>Seaborn</code> libraries.</p>";

const quickCode = `# library
import seaborn as sns
import pandas as pd
import numpy as np

# Create a dataset
df = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])

# Default heatmap
p1 = sns.heatmap(df)
`

export default function Heatmap() {

  return (

    <Layout title="Bubble plot">
      <TitleAndDescription
        title="Bubble plot"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>TODO.🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/90-heatmaps-with-various-input-format"}>
              <ChartImage imgName="90_Input_format_for_heatmap1"
                caption="Basic heatmap with Python and Seaborn from various data input formats." />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>


      <Container>
        <h2 id="Seaborn"><Seaborn />Bubble plot with <code>Seaborn</code></h2>
        <p>
          TODO.
        </p>
        <Row>
          <ChartImageContainer
            imgName="90_Input_format_for_heatmap1"
            caption="The heatmap() function and how to apply it to any kind of data input"
            linkTo="/90-heatmaps-with-various-input-format"
          />
        </Row>
      </Container>


      <Container>
        <h2 id="Matplotlib"><Matplotlib />Bubble plot with <code>Matplotlib</code></h2>
        <p>
          As for <Link to='scattter-plot'>scatterplots</Link>, <code>Matplotlib</code> will help us build a bubble plot thanks to
          the the <code>plt.scatter()</code> function. This function provides a <code>s</code> parameter allowing
          to pass a third variable that will be mapped to the markers size.
        </p>
        <Row>
          <ChartImageContainer
            imgName="270_Basic_Bubble_plot"
            caption="Most basic bubble plot with Python and Matplotlib"
            linkTo="/270-basic-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization1"
            caption="Bubble plot customization: color"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization2"
            caption="Bubble plot customization: shape"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization3"
            caption="Bubble plot customization: size"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization4"
            caption="Bubble plot customization: stroke"
            linkTo="/271-custom-your-bubble-plot"
          />
        </Row>
        <p>
          Note that it is a common practice to map a fourth variable to the markers colors thanks to the <code>c</code> parameter.
          This way, you're now looking a 4 variables in the same time, on the same chart 🎉.
        </p>
        <Row>
          <ChartImageContainer
            imgName="272_Bubble_plot_with_mapped_color"
            caption="A bubble chart width 4 dimensions: x, y, size & color"
            linkTo="/272-map-a-color-to-bubble-plot"
          />
        </Row>
      </Container>



      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="correlation" />
        </Container>
      </div>
      <Container>
        <Contact />
      </Container>


    </Layout >
  );
}
