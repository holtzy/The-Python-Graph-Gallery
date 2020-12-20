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
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import FunctionExploration from '../components/FunctionExploration'
import TableOfContent from '../components/TableOfContent'

const chartDescription =
  "<p>Density plots allow to visualize the distribution of a numeric variable for one or several groups. They are very well adapted for large dataset, as stated in data-to-viz.com. Note that 2 approaches exist to build them in python: the first one consists in computing a kernel density estimate, the second one in building a high resolution histogram.</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default density plot
sns.kdeplot(df['sepal_width'])
`

export default function DensityPlot() {

  return (

    <Layout title="Density chart">
      <TitleAndDescription
        title="Density chart"
        description={chartDescription}
      />
      <Container>

        <TableOfContent />
        {/* <Scrollspy onUpdate={undefined} offset={50} items={['Quick', 'Seaborn', 'Matplotlib', 'Related']} currentClassName="is-current">
          <li><a href="#Quick">Quick</a></li>
          <li><a href="#Seaborn">Seaborn</a></li>
          <li><a href="#Matplotlib">Matplotlib</a></li>
          <li><a href="#Related">Related</a></li>
        </Scrollspy> */}

        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>If you are in a rush, the most straightforward way to build a density chart is to use <code>Seaborn</code> and its <code>kdeplot()</code> function. You just need to provide it with a numeric variable from your dataset. 🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/70-basic-density-plot-with-seaborn"}>
              <ChartImage imgName="70_Basic_density_plot_Seaborn"
                caption="The most basic density plot one can make with python and seaborn" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />


        <h2 id="Seaborn"><Seaborn />Density charts with <code>Searborn</code></h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better
          charts easily. It is well adapted to build density charts thanks to
          its <code>kdeplot</code> function. The following charts will guide you
          through its usage, going from a very{" "}
          <Link to="">basic density plot</Link> to something much more{" "}
          <Link to="">customized</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="The most basic density plot one can make with python and seaborn"
            linkTo="/70-basic-density-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="71_Shaded_density_plot_Seaborn"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
          <ChartImageContainer
            imgName="72_Horizontal_density_plot_Seaborn"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn1"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn2"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
          <ChartImageContainer
            imgName="74_density_plot_multi_variables"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
        </Row>
      </Container>

      <div className="greySection">
        <Container>
          <FunctionExploration functionName={"kdeplot"} />
        </Container>
      </div>

      <Container>
        <h2 id="Matplotlib"><Matplotlib /> Density charts with <code>Matplotlib</code></h2>
        <p>
          <code>Matplotlib</code> is the most commong way to make charts in
          python. It is a bit more verbose than <code>Seaborn</code> described
          above, but sometimes allow more customization. Here are a few density
          chart examples made with <code>Matplotlib</code>:
        </p>
        <Row>
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="learn how to build a very basic density chart"
            linkTo=""
          />
        </Row>
        <br />
      </Container>

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
