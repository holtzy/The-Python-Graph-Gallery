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
  "<p>This section explains how to build a <a href='https://www.data-to-viz.com/graph/density2d.html'>2d density chart</a> or a <a href='https://www.data-to-viz.com/graph/density2d.html'>2d histogram</a> with python. Those chart types allow to visualize the combined distribution of two quantitative variables. They can be build with <code>Matplotlib</code> or <code>Seaborn</code>.</p>";


export default function Heatmap() {

  return (

    <Layout title="Connected Scatterplot">
      <TitleAndDescription
        title="2D Density Chart"
        description={chartDescription}
      />

      <div className="greySection">
        <Container>
          <h2 id="Warning">💡 What is a 2D density chart?</h2>
          <p>There are several chart types allowing to visualize the distribution
          of a combination of 2 numeric variables. They always have a variable represented on the X axis,
          the other on the Y axis, like
            for a <Link to='/scatter-plot'>scatterplot</Link> (left).</p>
          <p>Then the number
          of observations within a particular area of the 2D space is counted and represented
          with a color gradient. The shape can vary: hexagones result in a <code>hexbin chart</code>, squares in a <code>2d histogram</code>.
          A kernel density estimate can be used to get a <code>2d density plots</code> or a <code>contour plots</code></p>
          <div style={{ maxWidth: '750px', margin: "auto" }}>
            <Link to={"/86-avoid-overlapping-in-scatterplot-with-2d-density"}>
              <ChartImage imgName="86_2D_density_plot_explanation" caption={'Cheat sheet: line customization with matplotlib'} />
            </Link>
          </div>
          <p>Confusing? Visit <a href='https://www.data-to-viz.com/graph/density2d.html'>data-to-viz</a> to clarify..</p>
          <a href='https://www.data-to-viz.com/graph/density2d.html'>
            <Button size="sm">More viz explanation</Button>
          </a>
          <Link to='86-avoid-overlapping-in-scatterplot-with-2d-density.ipynb'>
            <Button size="sm">Show me the code</Button>
          </Link>
        </Container>
      </div>


      <Container>
        <h2 id="Seaborn"><Seaborn />Contour plot with <code>Seaborn</code></h2>
        <p>
          The contour plot can be easily built thanks to the <code>kdeplot()</code> function of the Seaborn library.
        </p>
        <Row>
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot1"
            caption="Basic contourplot with seaborn."
            linkTo="/contour-plot-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot2"
            caption="Basic contourplot with seaborn."
            linkTo="/contour-plot-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot3"
            caption="Basic contourplot with seaborn."
            linkTo="/contour-plot-seaborn"
          />
        </Row>
      </Container>


      <Container>
        <h2 id="Matplotlib"><Matplotlib />Connected scatterplot with <code>Matplotlib</code></h2>
        <p>
          As for <Link to='scattter-plot'>scatterplots</Link>, <code>Matplotlib</code> will help us build a bubble plot thanks to
          the the <code>plt.scatter()</code> function. This function provides a <code>s</code> parameter allowing
          to pass a third variable that will be mapped to the markers size.
        </p>
        <Row>
          <ChartImageContainer
            imgName="106_seaborn_style_on_plt1"
            caption="Basic connected scatterplot with Python and Matplotlib"
            linkTo="/106-seaborn-style-on-matplotlib-plot"
          />
          <ChartImageContainer
            imgName="194_matplotlib_subplot6"
            caption="Connected scatterplot on a split window"
            linkTo="/194-split-the-graphic-window-with-subplot"
          />
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="How to customize line and markers with Matplotlib"
            linkTo="/122-multiple-lines-chart"
          />
        </Row>
        <br />
        <p>Cheatsheet: line customization with <code>Matplotlib</code> and the <code>linestyle</code> parameter.</p>
        <div style={{ maxWidth: '350px' }}>
          <Link to={"/121-line-chart-customization.ipynb"}>
            <ChartImage imgName={"121_Custom_line_plot4"} caption={'Cheat sheet: line customization with matplotlib'} />
          </Link>
        </div>
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
