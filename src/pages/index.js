import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import ChartFamilySection from "../components/ChartFamilySection";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Spacing from "../components/Spacing";

const siteDescription =
  "<p>Welcome to the Python Graph Gallery, a collection of hundreds of charts made with <code>Python</code>. Charts are organized in about 40 sections and always come with their associated reproducible code. They are mostly made with <code>Matplotlib</code> and <code>Seaborn</code> but other libraries like <code>Plotly</code> are sometimes used.</p>";

export default function Home() {
  return (
    <Layout
      title="Python Graph Gallery"
      seoDescription="The Python Graph Gallery displays hundreds of charts made with Python, always with explanation and reproduciible code"
      isHome
    >
      <TitleAndDescription
        title="The Python Graph Gallery"
        description={siteDescription}
      />
      <Container>
        <ChartFamilySection chartFamily="distribution" />
        <ChartFamilySection chartFamily="correlation" />
        <ChartFamilySection chartFamily="ranking" />
        <ChartFamilySection chartFamily="partOfAWhole" />
        <ChartFamilySection chartFamily="evolution" />
        <ChartFamilySection chartFamily="map" />
        <ChartFamilySection chartFamily="flow" />
        <ChartFamilySection chartFamily="general" />

        <Spacing />

        <Contact />

        <Spacing />
      </Container>
    </Layout>
  );
}
