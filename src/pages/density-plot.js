import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";

const chartDescription =
  "<p>Density plots allow to visualize the distribution of a numeric variable for one or several groups. They are very well adapted for large dataset, as stated in data-to-viz.com. Note that 2 approaches exist to build them in python, the first computing a kernel density estimate, the second building a high resolution histogram.</p>";

export default function Violin() {
  return (
    <Layout title="Density chart">
      <TitleAndDescription
        title="Density chart"
        description={chartDescription}
      />
      <Container>
        <h2>
          Density charts with <code>Searborn</code>
        </h2>
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

        <h2>
          Density charts with <code>Matplotlib</code>
        </h2>
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
      </Container>
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
        <Container>
          <ChartFamilySection chartFamily="distribution" />
        </Container>
      </div>
      <Continer>
        <Contact />
      </Continer>
    </Layout>
  );
}
