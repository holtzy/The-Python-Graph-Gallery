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
        <h1 id="section 1">&#9201; Acknowlegment</h1>
        <h1 id="section 2">&#9201; Acknowlegment</h1>
        <h1 id="section 3">&#9201; Acknowlegment</h1>
        <h1 id="section 4">&#9201; Acknowlegment</h1>
        <h1 id="section 4">&#9201; Acknowlegment</h1>
        <p>Some explanation here comming next</p>
      </Container>

      <Container>
        <Contact />
      </Container>

    </Layout >
  );
}
