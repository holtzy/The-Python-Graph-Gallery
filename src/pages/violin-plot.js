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
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import FunctionExploration from '../components/FunctionExploration'

const chartDescription =
  "<p>Violinplots allow to visualize the distribution of a numeric variable for one or several groups. It is really close from a boxplot, but allows a deeper understanding of the density. Violins are particularly adapted when the amount of data is huge and showing individual observations gets impossible. Seaborn is particularly adapted to realize them through its violin function. Violinplots are a really convenient way to show the data and would probably deserve more attention compared to boxplots that can sometimes hide features of the data..</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# plot
sns.violinplot(x=df["species"], y=df["sepal_length"])
`

export default function ViolinPlot() {

  return (

    <Layout title="Violin plot" isTocEnabled>
      <TitleAndDescription
        title="Violin plot"
        description={chartDescription}
      />
      <Container>

        <h2 id="Quick start">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>Seaborn</code> is definitely the best library to quickly build a violin plot. It offers a dedicated <code>violinplot()</code> function that roughly works as follows:🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/50-basic-violinplot-and-input-formats"}>
              <ChartImage imgName="50_Basic_Violin_seaborn2"
                caption="The most basic violin plot one can make with python and seaborn" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />


        <h2 id="Seaborn"><Seaborn />Violin charts with <code>Seaborn</code></h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better
          charts easily. It is well adapted to build density charts thanks to
          its <code>violin</code> function. The following charts will guide you
          through its usage, going from a very{" "}
          <Link to="/50-basic-violinplot-and-input-formats">basic violin plot</Link> to something much more{" "}
          <Link to="/52-custom-seaborn-violinplot">customized</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="50_Basic_Violin_seaborn1"
            caption="How to build a very basic violin. Shows example based on different input formats."
            linkTo="/50-basic-violinplot-and-input-formats"
          />
          <ChartImageContainer
            imgName="51_Horizontal_violinplot_Seaborn"
            caption="Make your violin chart horizontal to make labels more readable"
            linkTo="/51-horizontal-violinplot"
          />
          <ChartImageContainer
            imgName="52_Custom_violinplot_Appearance_Seaborn1"
            caption="Chart appearance: control violin width, stroke width and more"
            linkTo="/52-custom-seaborn-violinplot"
          />
          <ChartImageContainer
            imgName="53_Custom_violinplot_color_Seaborn3"
            caption="How to manage colors on a python violin plot"
            linkTo="/53-control-color-of-seaborn-violinplot"
          />
          <ChartImageContainer
            imgName="55_Specific_order_violinplot_Seaborn2"
            caption="Control the groups order, very useful if you want to display them by increasing mean"
            linkTo="/55-control-order-of-groups-in-violinplot-seaborn"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="58_Number_of_obs_on_violinplot_seaborn"
            caption="Show the number of observations per group"
            linkTo="/58-show-number-of-observation-on-violinplot"
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
