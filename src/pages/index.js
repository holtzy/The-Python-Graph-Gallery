import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import ChartFamilySection from '../components/ChartFamilySection';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Spacing from '../components/Spacing';
import { VoronoiImagePatchworkResponsive } from '../components/VoronoiImagePatchwork';
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';

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
      or subscribe to the{' '}
      <a
        href="https://datavizuniverse.substack.com"
        target="_blank"
        rel="noreferrer"
      >
        newsletter
      </a>{' '}
      to know when new examples are published! 🔥
    </p>
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
        <a href="https://www.data-to-viz.com/graph/density2d.html">
          <Button size="sm" style={{ borderWidth: 1, marginLeft: 0 }}>
            Check the best Examples
          </Button>
        </a>
        <br />
        <br />
      </Container>

      <VoronoiImagePatchworkResponsive />

      <Contact />

      <Spacing />
    </Layout>
  );
}
