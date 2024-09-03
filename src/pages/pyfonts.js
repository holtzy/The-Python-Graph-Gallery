import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      <a href="https://github.com/JosephBARBIERDARNAL/pyfonts">PyFonts</a> is a
      library that allows to load easily any font from the web and use it in
      your matplotlib charts.
    </p>
    <p>
      It was created by <a href="https://barbierjoseph.com/">Joseph Barbier</a>{' '}
      in order to <b>simplify</b> the process to loading fonts in matplotlib and{' '}
      <b>remove</b> the need to install them on your computer.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="PyFonts"
    seoDescription="An overview of the PyFonts library in Python"
  />
);

export default function Post() {
  return (
    <Layout title="PyFonts">
      <TitleAndDescription
        title="PyFonts: a simple way to load fonts for matplotlib"
        description={chartDescription}
        chartType={'pyfonts'}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <p>
          Before using pyfonts you need to <b>install</b> it. This can easily be
          done with <code>pip</code>:
        </p>
        <br />
        <CodeChunk>{codeInstall}</CodeChunk>
        <br />
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              pyfonts provides <b>1 simple function</b>:<code>load_font()</code>
              : load a font from the web (Github) and return a matplotlib font
              object.
            </p>
          </Col>
          <Col md={6}>
            <ChartImage
              imgName="quickstart-pyfonts"
              caption="Basic use case of pyfonts"
            />
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2>1- How to find fonts</h2>

        <p>
          There are many fonts available on the web. The{' '}
          <strong>easiest way</strong> to find one is to follow these steps:
        </p>

        <ul>
          <li>
            Browse <a href="https://fonts.google.com/">Google Font website</a>{' '}
            to find a font that you like. Let's say you want to use{' '}
            <a href="https://fonts.google.com/specimen/Amaranth?query=amaranth">
              Amaranth
            </a>
            .
          </li>
          <li>
            Go to the{' '}
            <a href="https://github.com/google/fonts/tree/main/ofl">
              Google font GitHub repository
            </a>{' '}
            and type the name of your desired font in the search bar. We find
            that <i>Amaranth font file</i> in <strong>Bold</strong> is named{' '}
            <code>
              https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Bold.ttf
            </code>
            .
          </li>
          <li>
            Copy the URL and add <code>?raw=true</code> at the end, which gives
            us{' '}
            <code>
              https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Bold.ttf?raw=true
            </code>
            .
          </li>
        </ul>
      </Container>

      <Spacing />

      <Container>
        <h2>2 - Load a font in matplotlib</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Use <code>load_font()</code> by passing the font's URL.
            </p>
            <p>
              Then, provide the <b>output</b> of <code>load_font()</code>{' '}
              directly to any <a href="/matplotlib">matplotlib</a> function that
              accepts a font, such as <code>ax.text()</code>.
            </p>
          </Col>
          <Col md={6}>
            <ChartImage
              imgName="usecase-pyfonts-1-square"
              caption="how to load a font with pyfonts"
            />
          </Col>
          <CodeChunk>{useFontCode}</CodeChunk>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2>Different weight and style</h2>
        <Row className="align-items-center">
          <Col md={7}>
            <p>
              When you load a font, <b>you don't load all its extensions</b>:
              bold, italic, thin etc, but only the one from the url. If you want
              to be able to use a font and its <b>bold</b> version, for example,
              you need to load both fonts:
            </p>
          </Col>
          <Col md={5}>
            <ChartImage
              imgName="usecase-pyfonts-2-square"
              caption="Combine a normal font and a bold font with pyfonts"
            />
          </Col>
        </Row>
        <CodeChunk>{useFontCode2}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2>Gallery of examples</h2>
        <p>
          Here are some examples of what you can do with <code>PyFonts</code>.
          Click on the images to see the code.
        </p>
        <Row>
          <Col xs={12} md={4}>
            <Link to="/web-waffle-chart-for-time-series">
              <ChartImage
                imgName={'web-waffle-chart-for-time-series-square'}
                caption={'Waffle chart with nice theme and fonts'}
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/web-lollipop-with-colormap-and-arrow">
              <ChartImage
                imgName={'web-lollipop-with-colormap-and-arrow-square'}
                caption={'Lollipop chart with arrows'}
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to="/web-area-chart-with-different-colors-for-positive-and-negative-values">
              <ChartImage
                imgName={
                  'web-area-chart-with-different-colors-for-positive-and-negative-values-square'
                }
                caption={'Minimalist style area chart'}
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2>Going further</h2>
        <p>
          You might be interested in
          <ul>
            <li>
              The{' '}
              <a href="https://github.com/JosephBARBIERDARNAL/pyfonts">
                {' '}
                official github repo of pyfonts
              </a>{' '}
              (⭐ give it a star!)
            </li>
            <li>
              Learn more on{' '}
              <a href="custom-fonts-in-matplotlib">
                how matplotlib handle fonts
              </a>
            </li>
            <li>
              How to <a href="/drawarrow">draw arrows in matplotlib</a>
            </li>
            <li>
              How to create{' '}
              <a href="/advanced-custom-annotations-matplotlib">
                beautiful annotation in matplotlib
              </a>
            </li>
          </ul>
        </p>
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
    </Layout>
  );
}

const quickCode = `# Load pyfonts and matplotlib
import matplotlib.pyplot as plt
from pyfonts import load_font

# load font from Github
font = load_font(
   font_url="https://github.com/google/fonts/blob/main/apache/ultra/Ultra-Regular.ttf?raw=true"
)

# Create a plot with an annotation that uses the loaded font
fig, ax = plt.subplots(figsize=(10, 6), dpi=300)
ax.text(
   x=0.5,
   y=0.5,
   s=f"What an easy way to load fonts, isn't it?",
   font=font,
   fontsize=20,
   ha="center",
)
plt.show()
`;

const axesCode = `import matplotlib.pyplot as plt
from pyfonts import ax_arrow

fig, ax = plt.subplots(figsize=(10,10))

ax.scatter(x=[1, 5, 10], y=[5, 12, 3], s=300)
ax_arrow(
   tail_position=(2, 8),
   head_position=(9.5, 3),
   ax=ax,
   color="green",
   tail_width=10,
   head_width=30,
   head_length=30,
   radius=0.4
)
plt.show()
`;

const useFontCode = `import matplotlib.pyplot as plt
from pyfonts import load_font

font = load_font(
  "https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Bold.ttf?raw=true"
)

fig, ax = plt.subplots(figsize=(10, 10), dpi=300)
ax.text(
    x=0.5,
    y=0.5,
    s=f"Amaranth font\\nwith PyFonts!!!",
    font=font,
    fontsize=50,
    ha="center",
)
plt.show()
`;

const useFontCode2 = `import matplotlib.pyplot as plt
from pyfonts import load_font

font = load_font(
   "https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Regular.ttf?raw=true"
)
bold_font = load_font(
   "https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Bold.ttf?raw=true"
)

fig, ax = plt.subplots(figsize=(6, 6), dpi=300)
ax.text(
   x=0.5,
   y=0.5,
   s=f"Congrats, you now have a cool font!",
   font=font,
   fontsize=20,
   ha="center",
)
ax.text(x=0.5, y=0.3, s=f"And now it's bold", font=bold_font, fontsize=25, ha="center")
plt.show()
`;

const codeInstall = `pip install pyfonts`;
