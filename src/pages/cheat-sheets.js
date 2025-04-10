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
        <h2 id="matplotlib">
          <Matplotlib />
          Matplotlib
        </h2>
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
            <img
              src="https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/refs/heads/master/src/img/handout-beginner.webp"
              width="100%"
              alt="handout Cheatsheet beginners"
            />
          </Col>
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <img
              src="https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/refs/heads/master/src/img/handout-intermediate.webp"
              width="100%"
              alt="handout Cheatsheet beginners"
            />
          </Col>
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <img
              src="https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/refs/heads/master/src/img/handout-tips.webp"
              width="100%"
              alt="handout Cheatsheet beginners"
            />
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Seaborn
        </h2>
        <p>
          Seaborn is a dataviz library for Python built on top of Matplotlib. It
          is unavoidable to build some chart types and provides much better
          default than matplotlib. You cannot live without it!
        </p>
        <Button
          size="md"
          style={{ borderWidth: 1, marginLeft: 10 }}
          onClick={() => setIsModalOpen(true)}
        >
          Download Cheatsheet
        </Button>

        <p>
          <br />
        </p>
        <Row className="align-items-center">
          <Col md={6} onClick={() => setIsModalOpen(true)}>
            <ChartImage
              imgName={'seaborn_cheat_sheet'}
              caption={'Seaborn cheatsheet by Datacamp.'}
            />
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="data-to-viz">Chart type choice</h2>
        <p>Wondering what chart type you should use for your dataset?</p>
        <p>
          Here is a decision tree coming from my Data to Viz project. You
          describe your dataset format and it leads you to the most appropriate
          chart type!
        </p>
        <Button
          size="md"
          style={{ borderWidth: 1, marginLeft: 10 }}
          onClick={() => setIsModalOpen(true)}
        >
          Download Decision Tree
        </Button>

        <p>
          <br />
        </p>
        <Row className="align-items-center">
          <Col md={12} onClick={() => setIsModalOpen(true)}>
            <img
              src="https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/refs/heads/master/src/img/poster_small.png"
              alt="handout Cheatsheet beginners"
              width="100%"
            />
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          <Pandas />
          Pandas
        </h2>
        <p>
          Last but not least, what would we do without Pandas for the data
          wrangling part of our projects? 😀
        </p>
        <Button
          size="md"
          style={{ borderWidth: 1, marginLeft: 10 }}
          onClick={() => setIsModalOpen(true)}
        >
          Download Cheatsheet
        </Button>

        <p>
          <br />
        </p>
        <Row className="align-items-center">
          <Col md={6} onClick={() => setIsModalOpen(true)}>
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
