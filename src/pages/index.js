import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import ChartFamilySection from '../components/ChartFamilySection';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Spacing from '../components/Spacing';
import { VoronoiImagePatchworkResponsive } from '../components/VoronoiImagePatchwork';
import { Button, Col, Row } from 'react-bootstrap';
import pypalettesGIF from '../../static/asset/pypalettes.gif';

import {
  Matplotlib,
  Pandas,
  Plotly,
  Plotnine,
  Seaborn,
} from '../components/MiscellaneousLogos';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';
import SubscribeButton from '../components/SubscribeButton';
import Parallax from '../components/Parallax';

const siteDescription = (
  <>
    <p>
      👋 The Python Graph Gallery is a collection of <b>hundreds of charts</b>{' '}
      made with <code>Python</code>.
    </p>
    <p>
      Graphs are dispatched in about 40 sections following the{' '}
      <a href="https://www.data-to-viz.com">data-to-viz</a> classification.
      There are also sections dedicated to more general topics like{' '}
      <a
        href="https://python-graph-gallery.com/matplotlib/"
        target="_blank"
        rel="noreferrer"
      >
        matplotlib
      </a>{' '}
      or{' '}
      <a
        href="https://python-graph-gallery.com/seaborn/"
        target="_blank"
        rel="noreferrer"
      >
        seaborn
      </a>
      .
    </p>
    <p>
      Each example is accompanied by its corresponding <b>reproducible code</b>{' '}
      along with comprehensive <b>explanations</b>. The gallery offers tutorials
      that cater to beginners to help kickstart their journey, as well as
      advanced examples that demonstrate the potency of Python in the realm of
      data visualization.
    </p>
    <br />
    <p>❤️ Love the project?</p>
    <p>
      You can contribute on{' '}
      <a
        href="https://github.com/holtzy/The-Python-Graph-Gallery"
        target="_blank"
        rel="noreferrer"
      >
        github
      </a>
      , send me a feedback on{' '}
      <a
        href="https://twitter.com/R_Graph_Gallery"
        target="_blank"
        rel="noreferrer"
      >
        twitter
      </a>{' '}
      or join 4000+ subscribers to the newsletter to know when new examples are
      published! 🔥
    </p>
    <SubscribeButton />
  </>
);

export const Head = () => (
  <SEO
    title="Python Graph Gallery"
    seoDescription="The Python Graph Gallery displays hundreds of charts made with Python, always with explanation and reproduciible code"
  />
);

export default function Home() {
  return (
    <Layout isHome>
      <TitleAndDescription
        title="The Python Graph Gallery"
        description={siteDescription}
      />
      <div className="greySection">
        <Container>
          <br />
          <h2 style={{ borderBottom: 'none' }}>
            The biggest list of python chart examples
          </h2>
          <p>
            Within our collection, we cover <b>every chart type</b> imaginable
            to ensure we fullfil your data visualization needs. To streamline
            the process of finding your required chart, we meticulously{' '}
            <b>classified</b> all the examples under their respective chart
            types.
          </p>
          <p>
            For each chart type, we kick off with a <b>foundational tutorial</b>{' '}
            that introduces its basic structure and utility. After mastering the
            basics, users can delve into our step-by-step guides on the most
            elementary <b>customizations</b>, ensuring your chart not only
            presents data but does so with an individual touch that caters to
            your specific requirements.
          </p>
          <br />
          <ChartFamilySection chartFamily="distribution" />
          <ChartFamilySection chartFamily="correlation" />
          <ChartFamilySection chartFamily="ranking" />
          <ChartFamilySection chartFamily="partOfAWhole" />
          <ChartFamilySection chartFamily="evolution" />
          <ChartFamilySection chartFamily="map" />
          <ChartFamilySection chartFamily="flow" />
          <ChartFamilySection chartFamily="general" />
        </Container>
      </div>
      <Container>
        <br />
        <h2 style={{ borderBottom: 'none' }}>
          Hunting the most beautiful Python charts
        </h2>
        <p>
          Explore our curated collection of the <b>finest Python charts</b>,
          handpicked for their superior <b>design</b> and <b>accuracy</b>. Go
          beyond the defaults with chart examples that are both visually
          stunning and instructive.
        </p>
        <p>
          Accompanied by in-depth tutorials, this section will please seasoned
          professionals aspiring to <b>elevate their craft</b>. Featuring the
          finest charts on the web, we stay ahead of the curve, showcasing the
          latest tips, tricks, and <b>advanced techniques</b> in data
          visualization.
        </p>
        <Link href="/best-python-chart-examples">
          <Button size="sm" style={{ borderWidth: 1, marginLeft: 0 }}>
            Check the best Examples
          </Button>
        </Link>
        <br />
        <br />
      </Container>
      <VoronoiImagePatchworkResponsive />
      <Spacing />
      <Spacing />
      <div className="greySection">
        <Container>
          <br />
          <h2 style={{ borderBottom: 'none' }}>Palette color finder</h2>
          <p>
            {' '}
            Selecting <b>optimal chart colors</b> can be challenging and
            time-intensive. The <a>pypalettes</a> library simplifies this
            process by providing access to over <b>2,500 color palettes</b> with
            a single line of code.{' '}
          </p>{' '}
          <p>
            {' '}
            Additionally, the Python Graph Gallery features a{' '}
            <a href="/color-palette-finder">dedicated page</a> where you can
            <b>browse all these palettes</b> and preview their appearance on
            your charts.{' '}
          </p>
          <a href="/color-palette-finder">
            <img
              src={pypalettesGIF}
              alt="Color palette finder demo"
              style={{ maxWidth: '900px', width: '100%' }}
            />
          </a>
          <br />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/color-palette-finder">
              <Button
                size="lg"
                style={{ borderWidth: 1, marginLeft: 0, marginTop: 10 }}
              >
                Use the palette finder
              </Button>
            </Link>
          </div>
          <br />
          <br />
        </Container>
      </div>
      <Spacing />
      <Spacing />
      <Container>
        <br />
        <h2 style={{ borderBottom: 'none' }}>
          Python Graphing with State-of-the-Art Libraries
        </h2>
        <p>
          The python graph gallery relies on the <b>latest</b> and most{' '}
          <b>powerful</b> charting libraries.
        </p>
        <Row>
          <Col xs={12} md={6}>
            <h3>
              <Matplotlib />
              Matplotlib
            </h3>
            <p>
              The <b>foundation</b> of Python visualization. Offers a wide array
              of customizable 2D plots and an <b>extensive set of tools</b> for
              creating intricate figures and charts.
            </p>
            <Link href="/matplotlib">Tutorial</Link>
            <br />
          </Col>
          <Col xs={12} md={6}>
            <h3>
              <Seaborn />
              Seaborn
            </h3>
            <p>
              Built atop Matplotlib, Seaborn <b>elevates</b> data visualization
              by providing a higher-level interface and stunning default themes.
            </p>
            <Link href="/seaborn">Tutorial</Link>
            <br />
          </Col>
          <Col xs={12} md={6}>
            <h3>
              <Pandas />
              Pandas
            </h3>
            <p>
              Beyond its powerful <b>data manipulation</b> capabilities, Pandas
              offers convenient plotting methods, enabling users to visualize
              data directly from DataFrame and Series objects.
            </p>
            <Link href="/pandas">Tutorial</Link>
            <br />
          </Col>
          <Col xs={12} md={6}>
            <h3>
              <Plotly />
              Plotly
            </h3>
            <p>
              Delivering <b>interactive</b> and browser-based visualizations,
              Plotly allows users to craft visually captivating charts, bridging
              the gap between static graphs and <b>web-based interactivity</b>.
            </p>
            <Link href="/plotly">Tutorial</Link>
            <br />
          </Col>
          <Col xs={12} md={6}>
            <h3>
              <Plotnine />
              Plotnine
            </h3>
            <p>
              Plotnine is a Python library for creating statistical
              visualizations with a simple <b>grammar of graphics</b> interface,
              inspired by{' '}
              <a href="https://r-graph-gallery.com/ggplot2-package.html">
                ggplot2
              </a>{' '}
              in R.
            </p>
            <Link href="/plotnine">Tutorial</Link>
            <br />
          </Col>
        </Row>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/best-dataviz-packages">
            <Button size="lg" style={{ borderWidth: 1, marginLeft: 0 }}>
              Check the full list
            </Button>
          </Link>
        </div>
        <br />
        <br />
      </Container>
      <Spacing />
      <Parallax
        imgLink="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/asset/dataviz-inspiration-overview.png?raw=true"
        height={300}
        opacity={0.3}
      >
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: 600, textAlign: 'center' }}>
            <h2 className="contactTitle">Love beautiful charts?</h2>
            <p>
              The Python Graph Gallery complements{' '}
              <a href="https://www.dataviz-inspiration.com" target="_blank">
                dataviz-Inspiration.com
              </a>
              , a website featuring hundreds of my favorite data visualization
              projects.
            </p>
            <a href="https://www.dataviz-inspiration.com" target="_blank">
              <Button size="md">Get some inspiration</Button>
            </a>
          </div>
        </div>
      </Parallax>

      <Spacing />
      <Contact />
      <Spacing />
    </Layout>
  );
}
