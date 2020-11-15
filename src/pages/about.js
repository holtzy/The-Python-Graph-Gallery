import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";

const chartDescription =
  "<p>How and why this website has been created</p>";


export default function About() {

  return (
    <Layout title="About">

      <TitleAndDescription
        title="About"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Acknowlegment</h2>
        <p>Some explanation</p>
      </Container>

      <Container>
        <Contact />
      </Container>

    </Layout >
  );
}
