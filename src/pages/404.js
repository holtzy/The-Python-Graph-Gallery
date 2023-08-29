import React from 'react';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Spacing from '../components/Spacing';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';

export const Head = () => (
  <SEO title="404" seoDescription="Python Graph Gallery 404" />
);

export default function Missing() {
  return (
    <Layout>
      <Spacing />

      <Container>
        <h2 id="404"> 😞 Oh No 😞 | 404</h2>
        <p>It looks like there is nothing here anymore.</p>
        <p>
          Please go back to the <Link to="/">gallery home page</Link> and check
          if you can find your graph!
        </p>
      </Container>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
