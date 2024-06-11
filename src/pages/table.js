import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Pandas } from '../components/MiscellaneousLogos';

import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';
import { Col } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';

const chartDescription = (
  <>
    <p>
      A <b>table</b> is a structured arrangement of data in <b>rows</b> and{' '}
      <b>columns</b> that allows for easy sorting, filtering, and analysis.
    </p>
    <p>
      It can be used in <b>data visualization</b> to present information in a
      clear, organized manner for quick comparison and interpretation.
    </p>
    <p>
      Several strategies exist to build table wih Python. Tweaking{' '}
      <a href="/matplotlib">matplotlib</a> functions is doable but very verbose.{' '}
      <Link href="/pandas">pandas</Link> has a couple of utility functions. But{' '}
      <code>plottable</code> is definitely the best option. It is a powerful
      library and this section describes it ind depth.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="Table"
    ch
    seoDescription="A collection of table examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Table() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Table"
        description={chartDescription}
        chartType={'table'}
      />

      <Container>
        <h2 id="great_tables">
          Table with <code>great_tables</code>
        </h2>
        <p>
          <a href="https://github.com/posit-dev/great-tables"> great_tables</a>{' '}
          is a python library for plotting <b>nice table outputs</b> inspired by
          the <b>R</b> packages <code>gt</code>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="585-introduction-great-tables-1"
            caption="The most simple table with great_tables"
            linkTo="/585-introduction-great-tables"
          />
          <ChartImageContainer
            imgName="585-introduction-great-tables-2"
            caption="Add a title to the table with great_tables"
            linkTo="/585-introduction-great-tables"
          />
          <ChartImageContainer
            imgName="585-introduction-great-tables-3"
            caption="Add footer with markdown to the table with great_tables"
            linkTo="/585-introduction-great-tables"
          />
          <ChartImageContainer
            imgName="586-customization-great-tables"
            caption="Highlight a specific cell with great_tables"
            linkTo="/586-customization-great-tables"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plottable">
          Table with <code>Plottable</code>
        </h2>
        <p>
          <a href="https://github.com/znstrider/plottable"> Plottable</a> is a
          python library for plotting <b>nice table outputs</b>. You can custom
          style, colors, add images and even more with a light python syntax!
        </p>
        <p>
          <code>Plottable</code> is almost the <b>single python library</b> made
          especially for creating nice output tables. According to the main
          author, it's inspired from the <b>R</b> packages <code>gt</code> and{' '}
          <code>reactable</code>.
        </p>
        <p>
          If you don't know this tool yet, I suggest starting with the{' '}
          <Link href="/560-introduction-plottable">
            introduction to plottable
          </Link>
          . It will teach you how to install the library and create a simple yet
          clean table with the <code>Table()</code> object.
        </p>
        <Row>
          <ChartImageContainer
            imgName="560-introduction-plottable"
            caption="Introduction to Plottable main features"
            linkTo="/560-introduction-plottable"
          />
        </Row>
        <br />
        <p>
          The second chapter of the tutorial explains how to{' '}
          <Link href="/561-control-colors-in-plottable">
            customize table colors
          </Link>
          . Learn how to highlight a cell, a row or a column, or even how to use
          a gradient color to transform a table in a{' '}
          <Link href="/heatmap">heatmap</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="561-control-colors-in-plottable-1"
            caption="Color of a specific row"
            linkTo="/561-control-colors-in-plottable"
          />
          <ChartImageContainer
            imgName="561-control-colors-in-plottable-2"
            caption="Color of a specific column"
            linkTo="/561-control-colors-in-plottable"
          />
          <ChartImageContainer
            imgName="561-control-colors-in-plottable-4"
            caption="Gradient color in a column"
            linkTo="/561-control-colors-in-plottable"
          />
          <ChartImageContainer
            imgName="561-control-colors-in-plottable-5"
            caption="Color rows based on if they are even or odd"
            linkTo="/561-control-colors-in-plottable"
          />
        </Row>
        <br />
        <p>
          Next, learn how to{' '}
          <Link href="/563-graph-in-plottable">insert graphs in cells</Link>:
          barplot, donuts, stars and more. This can greatly improve the{' '}
          <b>readability</b> of your table, making it much more insightful.
        </p>
        <Row>
          <ChartImageContainer
            imgName="563-graph-in-plottable-1"
            caption="Star review in a column"
            linkTo="/563-graph-in-plottable"
          />
          <ChartImageContainer
            imgName="563-graph-in-plottable-2"
            caption="Percentile bar in a column"
            linkTo="/563-graph-in-plottable"
          />
          <ChartImageContainer
            imgName="563-graph-in-plottable-3"
            caption="Donut progress in a column"
            linkTo="/563-graph-in-plottable"
          />
          <ChartImageContainer
            imgName="563-graph-in-plottable-4"
            caption="Progress bar in a column"
            linkTo="/563-graph-in-plottable"
          />
          <ChartImageContainer
            imgName="563-graph-in-plottable-5"
            caption="Advanced custom graph with plottable"
            linkTo="/563-graph-in-plottable"
          />
        </Row>
        <br />
        <p>
          Lastly, some additional tips like how to{' '}
          <Link href="/562-add-images-in-plottable">
            insert images in cells
          </Link>
          .
        </p>
        <Row>
          <ChartImageContainer
            imgName="562-add-images-in-plottable-2"
            caption="Add images in a column"
            linkTo="/562-add-images-in-plottable"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib /> Table with <code>Matplotlib</code>
        </h2>
        <p>
          <Link href="/matplotlib">Matplotlib</Link> is probably the most famous
          and flexible python library for data visualization. It is pretty
          limited when it comes to building table though.
        </p>
        <p>
          Here are a few examples where <code>matplotlib</code> is used to
          create a table.
        </p>
        <Row>
          <ChartImageContainer
            imgName="552-table-combined-with-plot"
            caption="Stacked Barplot combined with a table"
            linkTo="/552-table-combined-with-plot"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          <Pandas /> Table with <code>Pandas</code>
        </h2>
        <p>
          <Link href="/pandas">Pandas</Link> has a whole section dedicated to
          formatting table in its doc. It lists any features but I still advise
          to use <code>plottable</code> as documented above.
        </p>

        <Row>
          <ChartImageContainer
            imgName="550-intro-table-with-pandas-1"
            caption="Table with gradient color used to represent a numeric value"
            linkTo="/550-intro-table-with-pandas"
          />

          <ChartImageContainer
            imgName="550-intro-table-with-pandas-2"
            caption="Table with gradient color used to represent a numeric value"
            linkTo="/550-intro-table-with-pandas"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">Best python table examples</h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a>{' '}
          tries to display (or translate from R) some of the best creations and
          explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
            Pull Request
          </a>
          !
        </p>
        <Row>
          <Col xs={12} md={9}>
            <Link to={'/564-publication-ready-table-with-plottable'}>
              <ChartImage
                imgName={'564-publication-ready-table-with-plottable'}
                caption={
                  'The 10 best and worst countries to live in according to the EIU, presented in a beautiful table.'
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>

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
