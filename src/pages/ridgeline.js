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
import FunctionExploration from '../components/FunctionExploration'
import chart from '../interactiveCharts/test.html'

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/caveat/ridgeline.html'>ridgeline</a> summarizes the distribution of a numeric variable for several groups. Each group is represented as a density chart, each density chart overlapping each other to use space more efficiently.</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

sns.boxplot( x=df["species"], y=df["sepal_length"] )
`

export default function RidgelinePlot() {

  return (

    <Layout title="Ridgeline">
      <TitleAndDescription
        title="Ridgeline chart"
        description={chartDescription}
      />
      <Container>

        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>Seaborn</code> is definitely the best library to quickly build a boxplot. It offers a dedicated <code>boxplot()</code> function that roughly works as follows:🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/30-basic-boxplot-with-seaborn"}>
              <ChartImage imgName="30_Basic_Box_seaborn2"
                caption="Basic boxplot with Python and Seaborn from various data input formats." />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />

      </Container>

      <p>HEllllllo</p>
      <div
        dangerouslySetInnerHTML={{ __html: chart }}
      />

      <div className="greySection">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Mind the boxplot</h2>
          <p>A boxplot is an awesome way to summarize the distribution of a variable. However it hides the real distribution and the sample size. Check the 3 charts below that are based on the exact same dataset.</p>
          <p>To read more about this, visit <a href="https://www.data-to-viz.com/caveat/boxplot.html">data-to-viz.com</a> that has a dedicated article.</p>
          <Row>
            <ChartImageContainer
              imgName="39_Bad_boxplot1"
              caption="Basic boxplot. You can quickly read the median, quartiles and outliers of each group."
              linkTo="/39-hidden-data-under-boxplot"
            />
            <ChartImageContainer
              imgName="39_Bad_boxplot2"
              caption="If you add individual points with jitter, a bimodal distribution appears for group B"
              linkTo="/39-hidden-data-under-boxplot"
            />
            <ChartImageContainer
              imgName="39_Bad_boxplot3"
              caption="If you have a very large dataset, the violin plot is a better alternative than jittering"
              linkTo="/39-hidden-data-under-boxplot"
            />
          </Row>
          <Link to="/39-hidden-data-under-boxplot">
            <Button size="sm">Code and more</Button>
          </Link>
        </Container>
      </div>

      <Container>
        <h2 id="Seaborn"><Seaborn />Boxplots with <code>Seaborn</code></h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better
          charts easily. The <code>boxplot</code> function should get you started in minutes. The examples below aim at showcasing the various possibilities this function offers.
        </p>
        <Row>
          <ChartImageContainer
            imgName="30_Basic_Box_seaborn2"
            caption="Let's start basic. The most simple boxplot, based on 3 differents input formats"
            linkTo="/30-basic-boxplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="33_Custom_Boxplot_color_Seaborn5"
            caption="Everything you need concerning color customization on your boxplot: transparency, palette in use, manual control.."
            linkTo="/33-control-colors-of-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="33_Custom_Boxplot_color_Seaborn4"
            caption="Learn how to highlight a specific group in the dataset to make your point more obvious"
            linkTo="/33-control-colors-of-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="34_Grouped_Boxplot_Seaborn"
            caption="If you have group and subgroups, you can build a grouped boxplot"
            linkTo="/34-grouped-boxplot"
          />
          <ChartImageContainer
            imgName="35_Specific_order_Boxplot_Seaborn1"
            caption="Control the order of groups in the boxplot. It makes the chart more insightful"
            linkTo="/35-control-order-of-boxplot"
          />
          <ChartImageContainer
            imgName="36_Boxplot_with_Jitter_Seaborn"
            caption="To avoid hiding information, you can add individual data points with jitter"
            linkTo="/36-add-jitter-over-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="38_Number_of_obs_on_boxplot_seaborn"
            caption="Since individual data points are hidden, it is a good practice to show the sample size under each box"
            linkTo="/38-show-number-of-observation-on-boxplot"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn1-1"
            caption="Customization: border width"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn2"
            caption="Customization: use notch"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn3"
            caption="Customization: box width"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
        </Row>
      </Container>

      <div className="greySection">
        <Container>
          <FunctionExploration functionName={"violin"} />
        </Container>
      </div>

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="distribution" />
        </Container>
      </div>
      <Container>
        <Contact />
      </Container>


    </Layout >
  );
}
