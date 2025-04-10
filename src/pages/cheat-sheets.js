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
import { Button, Col, Row } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import CheatSheetModal from '../components/cheatSheetModal';

const chartDescription =
  "<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>";

export const Head = () => (
  <SEO
    title="Cheat sheets"
    seoDescription="A collection of cheat sheets related with Python and data visualization"
  />
);

export default function CheatSheet() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Cheat Sheets"
        description={chartDescription}
        chartType="cheatSheets"
      />

      <Spacing />

      <Container>
        <h2 id="matplotlib">Matplotlib</h2>
        <p>
          There are several useful cheatsheets about{' '}
          <Link href="/matplotlib">matplotlib</Link>.
        </p>
        <p>
          The Matplotlib organization itself provides several options, and
          Datacamp is also a great contributor.
        </p>
        <p>
          Note that if you want to truely understand how matplotlib works,
          <a href="https://www.matplotlib-journey.com" target="_blank">
            Matplotlib Journey
          </a>{' '}
          is what you truly need!
        </p>
        <p>
          In any case, you can download all the available cheatsheets in a
          single PDF:
        </p>
        <Button
          size="md"
          style={{ borderWidth: 1, marginLeft: 10 }}
          onClick={() => setIsModalOpen(true)}
        >
          Download All
        </Button>

        <p>
          <br />
        </p>
        <Row className="align-items-center">
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <ChartImage
              imgName={'matplotlib_cheat_sheet'}
              caption={'Matplotlib cheatsheet by Datacamp.'}
            />
          </Col>
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <ChartImage
              imgName={'matplotlib-python-official-cheatsheet1'}
              caption={'Matplotlib cheatsheet by matplotlib (page 1).'}
            />
          </Col>
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <ChartImage
              imgName={'matplotlib-python-official-cheatsheet2'}
              caption={'Matplotlib cheatsheet by matplotlib (page 2).'}
            />
          </Col>
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <ChartImage
              imgName={'handout-beginner'}
              caption={'Handout Beginner'}
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

      <CheatSheetModal
        show={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
