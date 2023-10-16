import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib } from '../components/MiscellaneousLogos';
import ChartImage from '../components/ChartImage';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      A <b>table</b> is a structured arrangement of data in <b>rows</b> and{' '}
      <b>columns</b> that allows for easy sorting, filtering, and analysis.
    </p>
    <p>
      It can be used in data visualization to present information in a clear,
      organized manner for quick comparison and interpretation.
    </p>
    <p>
      Building a polished table in python is not easy. This page mainly relies
      on <Link href="/pandas">pandas</Link> that has the best set of helper
      functions for tables
    </p>
  </>
);

const quickCode = `# Create a dataframe
import pandas as pd
df = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })

# Reorder it following the values:
ordered_df = df.sort_values(by='values')
my_range=range(1,len(df.index)+1)

# Make the plot
plt.stem(ordered_df['values'])
plt.xticks( my_range, ordered_df['group'])
`;

export const Head = () => (
  <SEO
    title="Table"
    ch
    seoDescription="A collection of table examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Lollipop() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Table"
        description={chartDescription}
        chartType={'table'}
      />

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
        <h2 id="Matplotlib">
          <Matplotlib /> Table with <code>Plottable</code>
        </h2>
        <p>
        <a href='https://github.com/znstrider/plottable'> Plottable</a> is a python
        library for plotting <b>nice table outputs</b>. You can custom style, colors,
        add images and even more with a light python syntax!
        </p>
        <p>
        <code>Plottable</code> is almost the <b>single python library</b> made
        especially for creating nice output tables. According to the main author,
        it's inspired from the <b>R</b> packages <code>gt</code> and <code>reactable</code>.
        </p>
        <p>
          Here are a few examples where <code>plottable</code> and <code>matplotlib</code> is used to
          create a table.
        </p>
        <Row>
          <ChartImageContainer
            imgName="560-introduction-plottable"
            caption="Introduction to Plottable main features"
            linkTo="/560-introduction-plottable"
          />
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
          <ChartImageContainer
            imgName="562-add-images-in-plottable-2"
            caption="Add images in a column"
            linkTo="/562-add-images-in-plottable"
          />
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
