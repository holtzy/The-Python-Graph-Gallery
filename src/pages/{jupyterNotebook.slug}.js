import '../styles/basic.css';

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import TitleAndDescription from '../components/TitleAndDescription';
import ChartFamilySection from '../components/ChartFamilySection';
import Contact from '../components/Contact';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const JupyterNotebook = ({ data }) => {
  const {
    title,
    description,
    family,
    chartType,
    slug,
    seoDescription,
    keywords,
  } = data.jupyterNotebook.metadata;
  return (
    <Layout
      title={title}
      isTocEnabled
      chartType={chartType}
      seoDescription={seoDescription}
      keywords={keywords}
    >
      <TitleAndDescription
        title={title}
        description={'<p>' + description + '</p>'}
        chartType={chartType}
      />

      {/* Blog content */}
      <Container>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.jupyterNotebook.html }}
        />
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <ChartFamilySection chartFamily={family} hasGreyBackground />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact pageSlug={slug} isNotebook />
      </Container>

      <Spacing />
    </Layout>
  );
};

JupyterNotebook.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query NotebookQuery($slug: String!) {
    jupyterNotebook(slug: { eq: $slug }) {
      html
      metadata {
        title
        description
        seoDescription
        family
        chartType
        keywords
        slug
      }
    }
  }
`;

export const Head = ({ data }) => (
  <SEO
    title={data.jupyterNotebook.metadata.title}
    seoDescription={data.jupyterNotebook.metadata.seoDescription}
    keywords={data.jupyterNotebook.metadata.keywords}
  />
);
export default JupyterNotebook;
