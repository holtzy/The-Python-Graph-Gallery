import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>The Python Graph Gallery displays hundreds of charts made with Python, together with their reproducible code.</p>";


export default function About() {

  return (
    <Layout title="About" isTocEnabled>

      <TitleAndDescription
        title="About"
        description={chartDescription}
      />


      <Spacing />

      <Container>
        <h2 id="How and Why">❓ How and Why this gallery</h2>
        <p>Contribution to the python graph gallery are highly encouraged</p>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Sponsoring">💵 Sponsoring</h2>
        <p>Contribution to the python graph gallery are highly encouraged</p>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Acknowledgment">🙏 Acknowledgment</h2>
        <p>Contribution to the python graph gallery are highly encouraged</p>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Contribution">🙇‍♂️ How to contribute</h2>
        <p>Contribution to the python graph gallery are highly encouraged! I'm
          working hard on this project and would love some help on any kind.</p>
        <p>There are 2 main ways to contribute:</p>
        <ul>
          <li><u>Improve</u> an existing page. It can be anything from correcting an english
          mistake to a python code reformating. In this case, just find the appropriate page on the
          github repository (see the <a href="https://github.com/holtzy/The-Python-Graph-Gallery/tree/master/src/pages">page</a> or the notebooks folders.</li>
          <li><u>Create</u> a new chart:</li>
        </ul>
      </Container>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />

    </Layout >
  );
}
