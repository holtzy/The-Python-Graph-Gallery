import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Seaborn } from "../components/MiscellaneousLogos"
import { Button, Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/heatmap.html'>heatmap</a> is a graphical representation of data where each value of a matrix is represented as a color. This page explains how to build a heatmap with <code>Python</code>, with an emphasis on the <code>Seaborn</code> library.</p>";

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

    <Layout title="Heatmap">
      <TitleAndDescription
        title="Heatmap"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>If you're in a rush and want to make a heatmap with <code>Python</code> as quick as possible, have a look to this code snippet that uses the <code>heatmap()</code> function of <code>Seaborn</code>.🔥</p>
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
        <h2 id="Seaborn"><Seaborn />Heatmap with <code>Seaborn</code></h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better
          charts easily thanks to its <code>heatmap()</code> function. This section
          starts with a post describing the basic usage of the function based on any kind of data input.
          Next it will guide you through the different ways to customize the chart,
          like <Link to=''>controling color</Link> and <Link to=''>data normalization</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="90_Input_format_for_heatmap1"
            caption="The heatmap() function and how to apply it to any kind of data input"
            linkTo="/90-heatmaps-with-various-input-format"
          />
          <ChartImageContainer
            imgName="90_Input_format_for_heatmap2bis"
            caption="Plotting only one half of the heatmap"
            linkTo="/90-heatmaps-with-various-input-format"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_control_lines"
            caption="Seaborn heatmap customization: grid"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_annotate_cells"
            caption="Seaborn heatmap customization: show numbers in cell"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_hide_colorbar"
            caption="Seaborn heatmap customization: hide the color bar"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="92_Control_color_heatmap1"
            caption="Color customization: how to select other color palettes and more"
            linkTo="/92-control-color-in-seaborn-heatmaps"
          />
        </Row>
      </Container>


      <div className="greySection">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Python heatmap and normalization</h2>
          <p>Consider the left heatmap below. The second column from the left (<code>variable 1</code>) has
          very high values compared to others. As a result, the variation existing in other variables is hidden.</p>
          <p>Highlighting the <code>variable 1</code> can be the main message of your chart. But
          if you're interested in other variable variations as well, you probably want to apply some
          normalization as shown on the right heatmap.</p>
          <p>If you want to no more about normalization,
            check <a href="https://www.data-to-viz.com/graph/heatmap.html">data-to-viz.com</a>. If
            you want some python code to do it, <Link to='/94-use-normalization-on-seaborn-heatmap'>it's here</Link>.</p>
          <Row>
            <ChartImageContainer
              imgName="94_Heatmap_Normalization_Seaborn1"
              caption="A heatmap that probably needs to be normalized."
              linkTo="/94-use-normalization-on-seaborn-heatmap"
            />
            <ChartImageContainer
              imgName="94_Heatmap_Normalization_Seaborn2"
              caption="The exact same heatmap after normalization"
              linkTo="/94-use-normalization-on-seaborn-heatmap"
            />
          </Row>
          <Link to="/94-use-normalization-on-seaborn-heatmap">
            <Button size="sm">Code and explanation</Button>
          </Link>
        </Container>
      </div>


      <Container>
        <h2 id="Seaborn">&#10052; Python, Heatmap and Clustering</h2>
        <p>It is very common to apply some <code>clustering</code> techniques on a heatmap. The idea is
        to group items that have the same kind of pattern for their numeric variables. &#128161;
        </p>
        <p>Usually, it is recommended to display a <code>dendrogram</code> on top of the heatmap to
        explain how the clusterization has been performed. Last but not least, it can be useful
        to compare the grouping we got with an expected structure, shown as an additional color.
        </p>
        <Link to="/dendrogram">
          <Button size="sm">Related: dendrogram section</Button>
        </Link>
        <Link to="/405-dendrogram-with-heatmap-and-coloured-leaves">
          <Button size="sm">Code and explanation</Button>
        </Link>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/405-dendrogram-with-heatmap-and-coloured-leaves'>
            <ChartImage imgName={'405_Dendro_and_heatmap_and_rowcolor'} caption={'A seaborn heatmap with clusterization and dendrogram applied'} />
          </Link>
        </div>
        <Row>
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap3"
            caption="Most basic heatmap with dendrogram with seaborn"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap9"
            caption="Change color palette"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap11"
            caption="Learn how to normalize data in the heatmap, avoiding that kind of result"
            linkTo="/404-dendrogram-with-heat-map"
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
