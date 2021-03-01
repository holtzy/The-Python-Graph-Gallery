import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartFamilySection from "../components/ChartFamilySection";
import Spacing from "../components/Spacing";
import ChartImage from "../components/ChartImage";
import Col from "react-bootstrap/Col";

const chartDescription =
  "<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>";


export default function CheatSheet() {

  return (

    <Layout title="Cheat sheets" isTocEnabled seoDescription="A collection of cheat sheets related with Python and data visualization">

      <TitleAndDescription
        title="Cheat Sheets"
        description={chartDescription}
      />

      <Spacing />

      <Container>
        <h2 id="Datacamp sheets">🔥 Datacamp cheat sheets</h2>
        <p>Datacamp provides 3 cheatsheets describing the basics of <code>matplotlib</code>, <code>seaborn</code> and <code>pandas</code>: the 3 most commonly used library for data analysis with python:</p>
        <Row>
          <Col xs={12} md={4}>
            <a href="https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Matplotlib_Cheat_Sheet.pdf">
              <ChartImage imgName={"matplotlib_cheat_sheet"} caption="Matplotlib cheat sheet" />
            </a>
          </Col>
          <Col xs={12} md={4}>
            <a href="http://datacamp-community-prod.s3.amazonaws.com/dbed353d-2757-4617-8206-8767ab379ab3">
              <ChartImage imgName={"pandas_cheat_sheet"} caption="Pandas cheat sheet" />
            </a>
          </Col>
          <Col xs={12} md={4}>
            <a href="https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf">
              <ChartImage imgName={"seaborn_cheat_sheet"} caption="Seaborn cheat sheet" />
            </a>
          </Col>
        </Row>

      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="general" />
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
