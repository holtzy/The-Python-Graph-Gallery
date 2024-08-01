import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import Spacing from '../components/Spacing';
import ChartImage from '../components/ChartImage';
import { Matplotlib, Pandas, Seaborn } from '../components/MiscellaneousLogos';
import { Link } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>";

export const Head = () => (
  <SEO
    title="Cheat sheets"
    seoDescription="A collection of cheat sheets related with Python and data visualization"
  />
);

export default function CheatSheet() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Cheat Sheets"
        description={chartDescription}
        chartType="cheatSheets"
      />

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Matplotlib cheatsheet
        </h2>
        <p>
          <a
            href="https://datacamp.pxf.io/YgNDbR"
            title="Datacamp"
            target="_blank"
            rel="noreferrer"
          >
            Datacamp
          </a>{' '}
          provides a cheatsheet describing the basics of <code>matplotlib</code>
          . Matplotlib is the most widely used library for datavisualization
          with python. You can read more about it on its{' '}
          <Link href="/matplotlib">dedicated page</Link>.
        </p>
        <Row>
          <Col xs={12} md={12}>
            <a href="https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Matplotlib_Cheat_Sheet.pdf">
              <ChartImage
                imgName={'matplotlib_cheat_sheet'}
                caption={'Matplotlib cheatsheet by Datacamp.'}
              />
            </a>
          </Col>
        </Row>
        <br />
        <br />
        <p>
          The following 2 cheatsheets from the{' '}
          <a href="https://github.com/matplotlib/cheatsheets">
            official matplotlib repository
          </a>{' '}
          are also very handy:
        </p>
        <Row>
          <Col xs={12} md={12}>
            <ChartImage
              imgName={'matplotlib-python-official-cheatsheet1'}
              caption={'Matplotlib cheatsheet by matplotlib (page 1).'}
            />
          </Col>
          <Col xs={12} md={12}>
            <ChartImage
              imgName={'matplotlib-python-official-cheatsheet2'}
              caption={'Matplotlib cheatsheet by matplotlib (page 2).'}
            />
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Seaborn cheatsheet
        </h2>
        <p>
          <a
            href="https://datacamp.pxf.io/YgNDbR"
            title="Datacamp"
            target="_blank"
            rel="noreferrer"
          >
            Datacamp
          </a>{' '}
          provides a cheatsheet describing the basics of <code>seaborn</code>.
          Seaborn is also a widely used library for datavisualization with
          python. It allows to get very clean chart with less code. You can read
          more about it on its <Link href="/seaborn">dedicated page</Link>.
        </p>
        <Row>
          <Col xs={12} md={12}>
            <a href="https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf">
              <ChartImage
                imgName={'seaborn_cheat_sheet'}
                caption={'Seaborn cheatsheet by Datacamp.'}
              />
            </a>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          <Pandas />
          Pandas cheatsheet
        </h2>
        <p>
          <a
            href="https://datacamp.pxf.io/YgNDbR"
            title="Datacamp"
            target="_blank"
            rel="noreferrer"
          >
            Datacamp
          </a>{' '}
          provides a cheatsheet describing the basics of <code>pandas</code>.
          Pandas is mainly used for data manipulation with Python, but also
          offers some dataviz helpers.
        </p>
        <Row>
          <Col xs={12} md={12}>
            <ChartImage
              imgName={'pandas_cheat_sheet'}
              caption={'Pandas cheatsheet by Datacamp.'}
            />
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
