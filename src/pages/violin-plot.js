import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Seaborn } from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';
import FunctionExploration from '../components/FunctionExploration';
import { violinplot } from '../functions/violinplot';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/violin.html'>violint plot</a> allows you to visualize the distribution of a numeric variable for one or several groups. <code>Seaborn</code> is particularly adapted to build it thanks to its <code>violin()</code> function. Violin plots deserve more attention than <a href='https://python-graph-gallery.com/boxplot'>boxplots</a>, which can sometimes hide features of the data.</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# plot
sns.violinplot(x=df["species"], y=df["sepal_length"])
`;

export const Head = () => (
  <SEO
    title="Python Violin plot Gallery | Dozens of examples with code"
    seoDescription="A collection of violin plot examples made with Python, coming with explanation and reproducible code"
  />
);

export default function ViolinPlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Violin plot"
        description={chartDescription}
        chartType="violin"
      />

      <Container>
        <h2 id="Quick start">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>Seaborn</code> is definitely the best library to quickly
              build a violin plot. It offers a dedicated{' '}
              <code>violinplot()</code> function that roughly works as
              follows:🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/50-basic-violinplot-and-input-formats'}>
              <ChartImage
                imgName="50_Basic_Violin_seaborn2"
                caption="The most basic violin plot one can make with python and seaborn"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Violin charts with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is a python library that enables you to make
          better visualizations. It is well adapted to build density charts
          thanks to its <code>violin</code> function. The following charts will
          guide you through its usage, going from a very{' '}
          <Link to="/50-basic-violinplot-and-input-formats">
            basic violin plot
          </Link>{' '}
          to something much more{' '}
          <Link to="/52-custom-seaborn-violinplot">customized</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="50_Basic_Violin_seaborn1"
            caption="How to build a very basic violin. Shows example based on different input formats."
            linkTo="/50-basic-violinplot-and-input-formats"
          />
          <ChartImageContainer
            imgName="51_Horizontal_violinplot_Seaborn"
            caption="Make your violin chart horizontal to make labels more readable"
            linkTo="/51-horizontal-violinplot"
          />
          <ChartImageContainer
            imgName="52_Custom_violinplot_Appearance_Seaborn1"
            caption="Chart appearance: control violin width, stroke width and more"
            linkTo="/52-custom-seaborn-violinplot"
          />
          <ChartImageContainer
            imgName="53_Custom_violinplot_color_Seaborn3"
            caption="How to manage colors on a python violin plot"
            linkTo="/53-control-color-of-seaborn-violinplot"
          />
          <ChartImageContainer
            imgName="55_Specific_order_violinplot_Seaborn2"
            caption="Control the groups order, very useful if you want to display them by increasing mean"
            linkTo="/55-control-order-of-groups-in-violinplot-seaborn"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="tuto-violinplot-2"
            caption="Split subgroups on the same axis"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="58_Number_of_obs_on_violinplot_seaborn"
            caption="Show the number of observations per group"
            linkTo="/58-show-number-of-observation-on-violinplot"
          />
          <ChartImageContainer
            imgName="502-violinplot-and-swarmplot"
            caption="Add a swarmplot on top of a violin chart to show individual data points"
            linkTo="/502-violinplot-and-swarmplot"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn2"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration funDetails={violinplot} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Violin charts with <code>Matplotlib</code>
        </h2>
        <p>
          <Link href="/matplotlib">Matplotlib</Link>, as usual, is another great
          otion to build violin charts with python. It comes with a{' '}
          <code>violinplot()</code> function that does all the hard work for us.
        </p>
        <p>Here are a couple of examples:</p>
        <Row>
          <ChartImageContainer
            imgName="557-anova-visualization-with-matplotlib-2"
            caption="Violin plot with ANOVA results on top"
            linkTo="/557-anova-visualization-with-matplotlib"
          />
          <ChartImageContainer
            imgName="557-anova-visualization-with-matplotlib-3"
            caption="Customized violin plot with ANOVA results on top"
            linkTo="/557-anova-visualization-with-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration functionName={'violin'} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python violin chart examples
        </h2>
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
          <Col xs={12} md={6}>
            <Link to={'/web-ggbetweenstats-with-matplotlib'}>
              <ChartImage
                imgName={'web-ggbetweenstats-with-matplotlib-square'}
                caption={
                  'A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top.'
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="distribution" />
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
