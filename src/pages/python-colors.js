import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      <a href="https://python-graph-gallery.com/matplotlib">Matplotlib</a>{' '}
      offers extensive customization of plots, including a wide range of
      features for working with colors.
    </p>
    <p>
      Dealing with colors in Matplotlib can be challenging. This page is here to
      address all your needs. It begins with tips on how to apply a{' '}
      <b>single color</b> to a chart, and then discusses accessing{' '}
      <b>color palettes</b> for both continuous and categorical data.
    </p>
    <p>
      Finally, it introduces <code>pypalettes</code>, a Python library that
      provides access to 2,500+ color palettes. It also includes a{' '}
      <a href="https://python-graph-gallery.com/color-palette-finder/">
        color palette finder
      </a>{' '}
      tool that you are sure to love.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="Tips about colors with Python"
    seoDescription="How to manage colors in python charts"
  />
);

export default function Colors() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Dealing with colors in matplotlib"
        description={chartDescription}
      />

      <Container>
        <h2 id="Single color">1️⃣ Applying a single Color</h2>
        <p>
          That's the most simple use-case. You just made a chart that has an
          uniform default color and want to change it.
        </p>
        <p>
          All <a href="/matplotlib">Matplotlib</a> plotting function have a{' '}
          <b>color</b> argument allowing to control the color.
        </p>
        <br />
        <p>The color can be provided in multiple ways:</p>
        <ul>
          <li>
            <b>Named colors:</b> Use the name of the color. For example,{' '}
            <code>red</code>,<code>blue</code>, <code>green</code>.
          </li>
          <li>
            <b>RGB colors:</b> Use a tuple of 3 values between 0 and 1. For
            example, <code>(1, 0, 0)</code> for red. Note that a 4th value can
            be provided for the opacity.
          </li>
          <li>
            <b>Hexadecimal colors:</b> Use the hexadecimal code. For example,{' '}
            <code>#FF0000</code> for red.
          </li>
        </ul>
        <p>Code would look like this:</p>
        <CodeChunk>{codeSingleColor}</CodeChunk>
        <br />
        <p>
          We wrote a post that goes in-depth in this topic. It also lists all
          the premade-colors.
        </p>
        <Link to="/available-colors-in-matplotlib">
          <Button size="md">Learn more about single color</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Qualitative palette">
          2️⃣ Categorical / Qualitative color palettes
        </h2>
        <p>
          Qualitative color schemes represent categorical variables, where the
          possible values of the variable are <b>discrete</b> and{' '}
          <b>unordered</b>.
        </p>
        <p>
          <u>Example</u>: you want to color <code>group A</code> in blue,{' '}
          <code>group B</code> in red and so on.
        </p>
        <h3>Method 1: provide an array of colors</h3>
        <p>
          You can pick some colors manually, and provide them as an array to the{' '}
          <code>color</code> argument of the matplotlib function you're using.
        </p>
        <p>
          I strongly advise <b>not</b> doing this though. It's time consuming
          and finding colors that go well together is a struggle.{' '}
        </p>
        <h3>Method 2: use a matplotlib pre-made palette</h3>
        <p>
          Matplotlib provides a set of{' '}
          <Link to="/available-categoric-palettes">
            pre-made categorical palettes
          </Link>{' '}
          that are ready to be used.
        </p>
        <br />
        <Row>
          <Col md={6}>
            <p>
              Read <Link to="/available-categoric-palettes">this post</Link> to
              find the entire list and to understand how to use those palettes.
            </p>
            <p>
              Basically, you will have to create a color map using the{' '}
              <code>get_cmap()</code> function and pass this color map to the{' '}
              <code>color</code> argument of the function you're using.
            </p>
            <Link to="/available-categoric-palettes">
              <Button size="md">Read now</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/available-categoric-palettes">
              <ChartImage
                imgName="categorical_palettes"
                caption="Available categorical color palettes in Matplotlib"
              />
            </Link>
          </Col>
        </Row>

        <h3>
          Method 3: more palette with <code>pypalettes</code>
        </h3>
        <p>
          Matplotlib only offers about a dozen{' '}
          <Link to="/available-categoric-palettes">qualitative palettes</Link>.
          So we've just created <code>pypalettes</code>, a python library that
          offers 2500+ color palettes. The library is described in depth below.
        </p>
        <Link to="#pypalettes">
          <Button size="md">More about pypalettes</Button>
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Continuous palette">3️⃣ Continuous color palettes</h2>
        <p>
          <a href="/matplotlib">Matplotlib</a> provides a set of pre-made
          continuous palettes that are split into 2 main categories:
        </p>
        <ul>
          <li>
            <b>Sequential:</b> for representing data that ranges from low to
            high values.
          </li>
          <li>
            <b>Diverging:</b> for representing data that ranges from negative to
            positive values.
          </li>
        </ul>
        <br />
        <Row>
          <Col md={6}>
            <br />
            <p>
              On this post, you will find the entire list of <b>available</b>{' '}
              sequential palettes in <a href="/matplotlib">matplotlib</a>, how
              to use them, and how to create your <b>own</b>.
            </p>
            <Link to="/available-continuous-palettes">
              <Button size="sm">Sequential palettes</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/available-continuous-palettes">
              <ChartImage
                imgName="sequential_palettes"
                caption="Available sequential color palettes in Matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Link to="/available-continuous-palettes">
              <ChartImage
                imgName="diverging_palettes"
                caption="Available diverging color palettes in Matplotlib"
              />
            </Link>
          </Col>
          <Col md={6}>
            <p>
              Similar to the sequential palettes, you can find the entire list
              of <b>available</b> diverging palettes in{' '}
              <a href="/matplotlib">matplotlib</a>, how to use them, and how to
              create your <b>own</b>.
            </p>
            <Link to="/available-continuous-palettes">
              <Button size="sm">Diverging palettes</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="pypalettes">4️⃣ Need more palette options? Check pypalettes.</h2>

        <p>What is pypalettes</p>
        <p>How it works</p>
        <p>How to choose the right one: GIF</p>

        <Row>
          <Col md={6}>
            <p>
              <a href="/how-to-use-pypalettes">PyPalettes</a> is a Python
              library that provides 2500+ palettes,{' '}
              <b>
                including the ones from <code>matplotlib</code>
              </b>
              !
            </p>
            <p>
              On this post, you will find how to use the super intuitive API
              from <a href="/how-to-use-pypalettes">PyPalettes</a> to work with
              all these palettes.
            </p>
            <Link to="/how-to-use-pypalettes">
              <Button size="sm">Learn more</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/how-to-use-pypalettes">
              <ChartImage
                imgName="pypalettes-preview"
                caption="PyPalettes tutorial"
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="customization">
          5️⃣ Deal with color maps for fine grain custommization
        </h2>
        <Row className="align-items-center">
          <Col md={4}>
            <p>
              <a href="/matplotlib">Matplotlib</a> provides a wide range of
              colormaps but also a specific way of working with them. This post
              will show you how to use colormaps in{' '}
              <a href="/matplotlib">Matplotlib</a> to enhance the readability of
              your plots.
            </p>
            <Link to="/587-how-to-use-colormap">
              <Button size="sm">Learn more</Button>
            </Link>
          </Col>
          <Col md={8}>
            <Link to={'/587-how-to-use-colormap'}>
              <ChartImage
                imgName="587-how-to-use-colormap"
                caption="Available colors in Matplotlib"
              />
            </Link>
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
    </Layout>
  );
}

const codeSingleColor = `# Hexadecimal color code
color = "#FF5733"

# Pre-defined color names
color = "skyblue"

# RGB tuple
color = (0.1, 0.2, 0.5)

# RGBA tuple
color = (0.1, 0.2, 0.5, 0.4)

# Use in a barplot
fig, ax = plt.subplots()
ax.bar(x, y, color=color)
`;
