import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import ChartImage from "../components/ChartImage";
import SectionLogoWithOverlay from "../components/SectionLogoWithOverlay";
import { chartTypesInfo } from "../util/sectionDescriptions"
import { fullUrlToInternalLink } from "../util/utils";
import CodeChunk from "../components/CodeChunk";

const logoToKeep = ['lollipop', 'barplot', 'treemap', 'circularPacking']
const WordAlternativeLogos = () => {
  const allLogos = chartTypesInfo
    .filter((chart) => logoToKeep.includes(chart.id))
    .map((chart, id) => {
      const link = fullUrlToInternalLink(chart.pythonURL);
      return (
        <Col key={id} xs={4} md={2}>
          <SectionLogoWithOverlay
            link={link}
            chartType={chart.logo}
            caption={chart.label}
          />
        </Col>
      );
    });

  return (
    <div>
      <Row>{allLogos}</Row>
    </div>
  );
}

const quickCode = `# Libraries
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# Create a list of word
text=("Python Python Python Matplotlib")

# Create the wordcloud object
wordcloud = WordCloud(width=480, height=480, margin=0).generate(text)

# Display the generated image:
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")
plt.margins(x=0, y=0)
plt.show()
`

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/wordcloud.html'>word cloud</a> (also called <a href='https://www.data-to-viz.com/graph/wordcloud.html'>tag cloud</a> or <a href='https://www.data-to-viz.com/graph/wordcloud.html'>weighted list</a>) is a visual representation of text data. Words are usually single words, and the importance of each is shown with font size or color. <code>Python</code> fortunately has a <code>wordcloud</code> library allowing to build them.</p>";

export default function Wordcloud() {

  return (

    <Layout title="Wordcloud">
      <TitleAndDescription
        title="Wordcloud"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>The <code>wordcloud</code> library is here to help you build a wordcloud in minutes. Here is a basic code snippets using the <code>WordCloud()</code> function to get you started.🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/260-basic-wordcloud"}>
              <ChartImage imgName="260_Basic_Wordcloud"
                caption="Most basic wordcloud with python and the wordcloud library."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>


      <div className="greySection" id="warning">
        <Container>
          <h2 id="Warning">&#9888;&#65039; The issue with wordclouds</h2>
          <p>Wordclouds are aesthetically pleasing and people are used to it, what make sure
          readers will understand them quick.
          </p>
          <p>However, it is important to consider the caveats associated to them. For instance,
          <u>longer words</u> will t<u>ake more space</u> on the figure by construction which distorts
          reality. Moreover, it is impossible to <u>translate a font size</u> to an accurate value.
          </p>
          <WordAlternativeLogos />
        </Container>
      </div>

      <Container>
        <h2 id="Wordcloud">Wordclouds with.. the <code>wordcloud</code> library &#128512;</h2>
        <p>
          The <code>wordcloud</code> library takes as input a <code>string</code> containing all the words you want to display. It passes it to the <code>Wordcloud()</code> function that will compute the display an show it on the screen thanks to the <code>imshow()</code> function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="261_Custom_Wordcloud1"
            caption="Wordcloud customization: word size."
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261_Custom_Wordcloud4"
            caption="Wordcloud customization: background color."
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261_Custom_Wordcloud5"
            caption="Wordcloud customization: word color."
            linkTo="/261-custom-python-wordcloud"
          />
        </Row>
      </Container>


      <Container>
        <h2 id="Wordcloud">Wordclouds and custom shapes</h2>
        <p>
          It is a common need to apply a specific shape to the wordcloud.
          TODO. Make a bette image.
          TODO: more proiminent link toward https://github.com/amueller/word_cloud
        </p>
        <div style={{ maxWidth: '750px', margin: "auto" }}>
          <Link to={"/262-worcloud-with-specific-shape"}>
            <ChartImage imgName="262_Wordcloud_with_a_Mask"
              caption="Use a mask to get a wordcloud with specific shape."
            />
          </Link>
        </div>
      </Container>

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="ranking" />
        </Container>
      </div>
      <Container>
        <Contact />
      </Container>


    </Layout >
  );
}
