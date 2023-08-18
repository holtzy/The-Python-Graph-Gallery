import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>This page has been moved to the <a href='https://www.python-graph-gallery.com/barplot'>barplot section</a> of the gallery. Have a look!";

export const Head = () => (
  <SEO
    title="Stacked Barplot"
    seoDescription="A collection of stacked barplot examples made with Python, coming with explanation and reproducible code"
  />
);

export default function StackedBarplot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Stacked Barplot"
        description={chartDescription}
      />

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="ranking" />
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
