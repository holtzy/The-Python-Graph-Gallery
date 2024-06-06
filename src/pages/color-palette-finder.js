import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Button, Col } from 'react-bootstrap';
import Spacing from '../components/Spacing';
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';
import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';

const chartDescription = (
  <>
    <p>
      Finding the perfect colors for your Python chart can be <b>daunting</b>.
      Picking colors manually often leads to a <b>maze of unsuitable options</b>
      .
    </p>
    <p>
      Luckily, the all-new{' '}
      <a
        href="https://github.com/JosephBARBIERDARNAL/pypalettes"
        target="_blank"
        rel="noreferrer"
      >
        PyPalette
      </a>{' '}
      package provides a <b>collection of 2500+ palettes</b> meticulously
      curated by hundreds of experts.
    </p>
    <p>
      This app allows you to easily <b>explore</b> these palettes. Let's
      discover the one that will make your chart stand out! 😍
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="Python Color Palette Finder"
    seoDescription="A tool to find the perfect color palette for your Python Chart (with its code)"
    isRaptiveEnabled={false}
  />
);

export default function Colors() {
  return (
    <>
      <header>
        <TopNavbar />
      </header>

      <TitleAndDescription
        title="Python Color Palette Finder"
        description={chartDescription}
        isRaptiveEnabled={false}
      />

      <div style={{ height: '100%' }}>
        <iframe
          id="color-tool"
          title="Tool to find a color palette for a python chart"
          width="100%"
          height="1300px"
          src="https://holtzy.github.io/dataviz-color-finder/"
        ></iframe>
      </div>
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
      <Footer />
    </>
  );
}
