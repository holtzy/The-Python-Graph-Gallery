import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import {
  Matplotlib,
  Pandas,
  Seaborn,
  Plotnine,
} from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';
import { hist } from '../functions/hist';
import FunctionExploration from '../components/FunctionExploration';

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/histogram.html">Histogram</a>{' '}
      represents the <b>distribution</b> of a numeric variable for one or
      several groups. The values are split in <b>bins</b>, each bin is
      represented as a <b>bar</b>.{' '}
    </p>
    <p>
      This page showcases many histograms built with <b>python</b>, using the{' '}
      most popular libraries like <code>seaborn</code> and{' '}
      <code>matplotlib</code>.
    </p>
    <p>
      Examples start with <b>very simple</b>, beginner-friendly histograms and
      progressively increase in complexity. At the end of the page, some{' '}
      <b>polished & publication-ready</b> histograms are provided, ready to be
      used in your next project 🔥!
    </p>
  </>
);

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot the histogram thanks to the displot function
sns.displot( data=df["sepal_length"], kde=True )
`;

const quickCodeMatplotlib = `# library & dataset
import matplotlib.pyplot as plt
hours = [17, 20, 22, 25, 26, 27, 30, 31, 32, 38, 40, 40, 45, 55]

# Initialize layout
fig, ax = plt.subplots(figsize = (9, 9))

#plot
ax.hist(hours, bins=5, edgecolor="black");
`;

const quickCodePandas = `# library & dataset
import pandas as pd
import matplotlib.pyplot as plt

time = [17, 25, 42, 35, 26, 27, 20, 11, 22, 32, 35, 30, 45, 55]

# Convert to a pandas format
time = pd.Series(time)

#plot
time.hist()
plt.show
`;

export const Head = () => (
  <SEO
    title="Python Histogram Gallery | Dozens of examples with code"
    seoDescription="A collection of histogram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Histogram() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Histogram"
        description={chartDescription}
        chartType="histogram"
      />

      <Container>
        <h2 id="Quick (Seaborn)">&#9201; Quick start (Seaborn)</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>Seaborn</code> is definitely the best library to quickly
              build a histogram thanks to its <code>displot()</code>.
            </p>
            <p>
              Note the importance of the <code>bins</code> parameter: try
              several values to see which represents your data the best. 🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/20-basic-histogram-seaborn'}>
              <ChartImage
                imgName="20_Basic_Histogram_seaborn2"
                caption="The most basic histogram one can make with python and seaborn"
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
          Histogram charts with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better
          charts easily. It is well adapted to build histogram thanks to its{' '}
          <code>displot</code> function. The following charts will guide you
          through its usage, going from a very{' '}
          <Link to="">basic histogram</Link> to something much more{' '}
          <Link to="">customized</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="20_Basic_Histogram_seaborn1"
            caption="The most basic histogram with seaborn. It adds a density on top by default"
            linkTo="/20-basic-histogram-seaborn"
          />
          <ChartImageContainer
            imgName="20_Basic_Histogram_seaborn2"
            caption="Play with the bin parameter to control the number of bars"
            linkTo="/20-basic-histogram-seaborn"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist1"
            caption="Remove the density chart on top of the seaborn histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist2"
            caption="Add rug on top of the histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist3"
            caption="Customize the rug: color, size and more"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist4"
            caption="Customize the appearance of the density chart displayed on top of the histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="23-90degree-rotated-histogram"
            caption="Flipping the histogram to display it horizontally"
            linkTo="/23-90degree-rotated-histogram"
          />
          <ChartImageContainer
            imgName="24_Histogram_with_boxplot_on_top"
            caption="How to split the chart window to display a boxplot on top of the histogram"
            linkTo="/24-histogram-with-a-boxplot-on-top-seaborn"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables1"
            caption="Compare the distribution of several groups on the same chart"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables2"
            caption="Use small multiple to compare the distribution of several groups"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot1"
            caption="Histogram can be added around a scatterplot to show each variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot6"
            caption="Histogram can be added around a 2d density chart to show x and y variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Quick (matplotlib)">
          <Matplotlib /> Quick start (Matplotlib)
        </h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <Link to="/matplotlib">Matplotlib</Link> can also build decent
              histograms easily. It provides a <code>hist()</code> function that
              accept a vector of numeric values as input.
            </p>
            <p>
              It also provides all the options you can think of to customize the
              binning and the genreral appearance.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/basic-histogram-in-matplotlib'}>
              <ChartImage
                imgName="basic-histogram-in-matplotlib"
                caption="The most basic histogram one can make with python and matplotlib"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCodeMatplotlib}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration funDetails={hist} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Histograms with <code>Matplotlib</code>
        </h2>
        <p>
          As usual <Link to="/matplotlib">matplotlib</Link> is perfectly skilled
          to build nice histogram, but require some more work camparing to{' '}
          <Link to="/seaborn">seaborn</Link> to get a good looking figure.
        </p>
        <p>
          The examples below should help you to get started with matplotlib
          histograms. They go from a very{' '}
          <Link to="/basic-histogram-in-matplotlib">basic version</Link> and
          then show how to customize it, like adding{' '}
          <Link to="/basic-histogram-in-matplotlib">annotation</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="basic-histogram-in-matplotlib"
            caption="The most basic histogram with matplotlib."
            linkTo="/basic-histogram-in-matplotlib"
          />
          <ChartImageContainer
            imgName="basic-histogram-in-matplotlib2"
            caption="Reduce chart opacity and add annotation (median represented in vertical line)"
            linkTo="/basic-histogram-in-matplotlib"
          />
          <ChartImageContainer
            imgName="tuto-hist-3"
            caption="Cumulative histogram"
            linkTo="/basic-histogram-in-matplotlib"
          />
          <ChartImageContainer
            imgName="density-mirror-histogram"
            caption="Mirror density chart to compare the distribution of 2 variables"
            linkTo="/density-mirror"
          />
          <ChartImageContainer
            imgName="504-histogram-with-colored-tails"
            caption="A histogram with bars being colored differently based on thresholds"
            linkTo="/504-histogram-with-colored-tails"
          />
          <ChartImageContainer
            imgName="506-histogram-with-small-mutliples"
            caption="Use small multiple to compare the distribution of several groups or several variables"
            linkTo="/506-histogram-with-small-mutliples"
          />
          <ChartImageContainer
            imgName="534-highly-customized-layout"
            caption="Subplot, title, and margin customization"
            linkTo="/534-highly-customized-layout"
          />
          <ChartImageContainer
            imgName="584-introduction-hatch-matplotlib-3"
            caption="Add patterns to your histogram bars"
            linkTo="/584-introduction-hatch-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Quick (pandas)">
          <Pandas /> Quick start (Pandas)
        </h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <Link to="/pandas">Pandas</Link> can build decent histograms
              easily. It provides different functions like <code>hist()</code>{' '}
              and <code>plot()</code> that need a pandas dataframe (or series)
              as input.
            </p>
            <p>
              Since it's based on <Link to="/matplotlib">matplotlib</Link>, it
              provides all the options you can think of to customize the binning
              and the genreral appearance.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/527-introduction-to-histogram-with-pandas'}>
              <ChartImage
                imgName="527-introduction-to-histogram-with-pandas"
                caption="The most basic histogram one can make with python and pandas"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCodePandas}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Pandas">
          <Pandas />
          Histograms with <code>Pandas</code>
        </h2>
        <p>
          <Link to="/pandas">Pandas</Link> is not the most common Python library
          to build histograms, but it can be used to build decent ones. It
          provides different functions like <code>hist()</code> and{' '}
          <code>plot()</code> from matplotlib.
        </p>
        <p>
          The examples below should help you to get started with
          <Link to="/527-introduction-to-histogram-with-pandas">
            {' '}
            basic pandas histograms
          </Link>
          .
        </p>
        <Row>
          <ChartImageContainer
            imgName="527-introduction-to-histogram-with-pandas"
            caption="The most basic histogram with pandas"
            linkTo="/527-introduction-to-histogram-with-pandas"
          />
          <ChartImageContainer
            imgName="528-customizing-histogram-with-pandas"
            caption="Customize title, labels and bins of histograms with pandas"
            linkTo="/528-customizing-histogram-with-pandas"
          />
          <ChartImageContainer
            imgName="529-multi-group-histogram-pandas-1"
            caption="Show the distribution of 2 groups or variables on a single graph"
            linkTo="/529-multi-group-histogram-pandas"
          />
          <ChartImageContainer
            imgName="529-multi-group-histogram-pandas-2"
            caption="Use small multiple to compare the distribution of several groups on the same chart"
            linkTo="/529-multi-group-histogram-pandas"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotnine">
          <Plotnine />
          Histograms with <code>Plotnine</code>
        </h2>
        <p>
          <Link to="/plotnine">Plotnine</Link> allows us to use the{' '}
          <b>grammar-of-graphics</b> to build histograms. It provides a{' '}
          <code>geom_histogram()</code> function that can be used to build
          histograms.
        </p>
        <p>
          The examples below should help you to get started with
          <b> basic plotnine histograms</b>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="578-introduction-histogram-plotnine-1"
            caption="Most basic histogram with plotnine"
            linkTo="/578-introduction-histogram-plotnine"
          />
          <ChartImageContainer
            imgName="578-introduction-histogram-plotnine-2"
            caption="Control bar color"
            linkTo="/578-introduction-histogram-plotnine"
          />
          <ChartImageContainer
            imgName="578-introduction-histogram-plotnine-3"
            caption="Custom style with theme, colors and opacity"
            linkTo="/578-introduction-histogram-plotnine"
          />
          <ChartImageContainer
            imgName="579-multiple-histograms-plotnine-1"
            caption="Split histogram by group"
            linkTo="/579-multiple-histograms-plotnine"
          />
          <ChartImageContainer
            imgName="579-multiple-histograms-plotnine-2"
            caption="Mirror histogram to compare 2 variables"
            linkTo="/579-multiple-histograms-plotnine"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python histogram examples
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
            <Link to={'/web-histogram-with-annotations'}>
              <ChartImage
                imgName={'web-histogram-with-annotations'}
                caption={'Nice histogram with custom annotations.'}
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
