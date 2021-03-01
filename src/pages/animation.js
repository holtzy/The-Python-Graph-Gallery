import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib } from "../components/MiscellaneousLogos"
import { Button, Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import Spacing from "../components/Spacing";
import gapminderGif from "../../static/graph/animated_gapminder.gif"
import basicScatterGif from "../../static/graph/animated_chart.gif"
import volcanoGif from "../../static/graph/animated_volcano.gif"

const chartDescription =
  "<p>An animated chart displays a sequence of static charts, often in a gif or movie format. It can be really useful to describe the evolution of a dataset, or to denote the difference between two states (going from one to another and backward). This page explains how to build an animated chart with <code>Python</code> and <code>Image Magick</code>.";

const quickCode = `# Use image magick to transform a set of .png in a gif
# (this is bash, not python)
# (You have to be in a folder with several images called img1.png, img2.png, img3.png...)
convert -delay 80 img*.png animation.gif
`
const homebrewInstallCode = `brew install imagemagick`

export default function Correlogram() {

  return (

    <Layout title="Correlogram" isTocEnabled seoDescription="A collection of correlogram examples made with Python, coming with explanation and reproducible code">

      <TitleAndDescription
        title="Animation"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>An animated chart can be build with <code>python</code> using the following process:</p>
            <ul>
              <li>Make a loop that outputs each step of the animation as a single chart</li>
              <li>Export each chart in its own file (like <code>png</code> or <code>jpg</code>)</li>
              <li>Use <a href='https://imagemagick.org/index.php'>Image Magick</a> to concatenate all those files into a unique <code>.gif</code></li>
            </ul>
          </Col>
          <Col md={6}>
            <Link to={"/341-python-gapminder-animation"}>
              <img src={gapminderGif} alt="Animation with python" style={{ width: "100%" }} />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <Link to="/341-python-gapminder-animation">
          <Button size="sm">See code</Button>
        </Link>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Install">How to install <code>Image Magick</code></h2>
          <p>
            Installing Image magick can be a nightmare. The official documentation
          is <a href='https://imagemagick.org/script/download.php'>here</a>. The best
          way to install it if you're on Mac OS is to use <a href='https://brew.sh'>Homebrew</a> as follow:
        </p>
          <CodeChunk>{homebrewInstallCode}</CodeChunk>
        </Container>
      </div>
      <Spacing />


      <Container>
        <h2 id="Matplotlib"><Matplotlib /><code>Matplotlib</code> and <code>Image Magick</code></h2>
        <p>
          Let's start with a ver basic animated scatter plot made with <code>python</code>, <code>matplotlib</code>
          and <code>image magick</code>. The <code>scatter()</code> function is used to build a <Link to='/scatter-plot'>scatterplot</Link> at
          each iteration of a loop. <code>savefig()</code> is used to save each chart at <code>.png</code> format. Finally,
          <code>image magick builds</code> the gif.
        </p>
        <Link to={"/340-scatterplot-animation"}>
          <img src={basicScatterGif} alt="Basic animated scatterplot with python" style={{ maxWidth: "400px", width: "100%" }} />
        </Link>
        <p>The process is pretty much the same for a 3d chart. Here is an example with an animated volcano plot. Each iteration
        of the loop changes the camera angle, giving this feeling of travelling around the volcano.
        </p>
        <Link to={"/342-animation-on-3d-plot"}>
          <img src={volcanoGif} alt="Animated volcano plot with Python" style={{ maxWidth: "900px", width: "100%" }} />
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="&#8800; interaction">&#128161; Animation &#8800; Interaction</h2>
        <p>There is a common confusion between what animated and interactive charts are:
          </p>
        <ul>
          <li><u>Animated</u> means a sequence of several static images is displayed. The user can't do anything
            except watching those images.
            </li>
          <li><u>Interactive</u> means the user can interact with the chart: zoom in,
            hover over a shape to get a tooltip, click to have a menu... The user
              is not a spectator anymore, but also an actor.</li>
        </ul>
        <Link to="/scatter-plot">
          <Button size="sm">Interactive Charts section</Button>
        </Link>
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
