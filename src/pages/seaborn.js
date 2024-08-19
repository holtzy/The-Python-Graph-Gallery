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
import { Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import FunctionExploration from '../components/FunctionExploration';

const chartDescription =
  "<p><code>Seaborn</code> is a python graphic library built on top of <a href='https://python-graph-gallery.com/matplotlib'>matplotlib</a>. It allows to make your charts prettier with less code. This page provides general seaborn tips. Visit individual chart sections if you need a specific type of plot. Note that most of the <a href='https://python-graph-gallery.com/matplotlib'>matplotlib customization options</a> also work for <code>seaborn</code>.</p > ";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# use the function regplot to make a scatterplot
sns.regplot(x=df["sepal_length"], y=df["sepal_width"])
`;

export const Head = () => (
  <SEO
    title="Introduction to Seaborn for dataviz with Python"
    seoDescription="A collection of chart examples made with Seaborn, coming with explanation and reproducible code"
  />
);

export default function SeabornLib() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Seaborn"
        description={chartDescription}
        chartType="seaborn"
      />

      <Container>
        <h2 id="Quick start">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>seaborn</code> offers some specific functions for almost
              every kind of charts. For instance, <code>regplot()</code> can be
              used to build a <Link to="/scatter-plot">scatterplot</Link>.
            </p>
            <p>
              Note that no additional code is needed to get the nice grey
              background with grid and some good defaults for the dots 😍.
              That's 4 lines of code for a pretty decent chart 🔥!
            </p>
            <Link to="/scatter-plot">
              <Button size="sm">Scatterplot section</Button>
            </Link>
          </Col>
          <Col md={6}>
            <Link to={'/40-basic-scatterplot-seaborn'}>
              <ChartImage
                imgName="40_Basic_Scatterplot_seaborn"
                caption="Basic scatterplot with Python and Seaborn from various data input formats."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>

      <Spacing />

      <Container>
        <h2 id="Lexicon">
          <Matplotlib />
          Basic vocabulary
        </h2>
        <p>
          Since <code>seaborn</code> is built on top of <code>matplotlib</code>,
          most of its concepts and vocabulary are still correct. The figure
          below describes the anatomy of a <code>matplotlib</code> charts. It
          names all the main components, names that you need to know to
          understand the documentation properly.
        </p>
        <p>
          &#9888;&#65039; <u>Disclaimer</u>: this figure comes from the very
          complete{' '}
          <a href="https://matplotlib.org/faq/usage_faq.html#coding-styles">
            matplotlib documentation
          </a>
          . Have a look at it for a thorough explanation on how this library
          works.
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <ChartImage
            imgName={'matplotlib_vocabulary'}
            caption={
              'Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly'
            }
          />
        </div>
        <a href="https://matplotlib.org/faq/usage_faq.html#coding-styles">
          <Button size="sm">Matplotlib doc</Button>
        </a>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Main functions">
            🧐 Main <code>seaborn</code> functions
          </h2>
          <p>
            <code>Seaborn</code> is a wrapper of{' '}
            <a href="/matplotlib">matplotlib</a>, meaning that when you call a
            function in seaborn, it calls one or multiple matplotlib functions
            under the hood.
          </p>
          <p>
            Here is an overview of the <b>most common</b> <code>seaborn</code>{' '}
            functions. It provides a glimpse of they're made for, what are their
            parameters and links to their official doc.
          </p>
          <p>
            <ul>
              <li>
                <code>relplot()</code> - High-level interface for creating
                scatter and line plots.
              </li>
              <li>
                <code>scatterplot()</code> - For creating scatter plots.
              </li>
              <li>
                <code>lineplot()</code> - For creating line plots.
              </li>
              <li>
                <code>displot()</code> - For creating distribution plots,
                including histograms and KDE.
              </li>
              <li>
                <code>histplot()</code> - For creating histograms.
              </li>
              <li>
                <code>boxplot()</code> - For creating box plots.
              </li>
              <li>
                <code>violinplot()</code> - For creating violin plots.
              </li>
              <li>
                <code>heatmap()</code> - For creating heatmaps.
              </li>
              <li>
                <code>pairplot()</code> - For creating a grid of scatter plots
                for pairwise relationships.
              </li>
              <li>
                <code>catplot()</code> - High-level interface for creating
                various categorical plots.
              </li>
            </ul>
          </p>
          <br />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Title">
          <Seaborn />
          Customizing titles with Seaborn
        </h2>
        <p>
          Since <code>Seaborn</code> is built on top of <code>Matplotlib</code>,
          title customization works pretty much the same. A seaborn chart (like
          the one you get with <code>sns.boxplot()</code>) actually returns a{' '}
          <code>matplotlib</code> axes instance.
        </p>
        <p>
          This means that you will not be able to use the usual{' '}
          <code>pyplot</code> method <code>plt.title()</code>, but will have to
          use the corresponding argument for an <code>axes</code> which is{' '}
          <code>ax.set_title()</code>. This is described more in depth in this
          dedicated post:
        </p>
        <Row>
          <ChartImageContainer
            imgName="seaborn-title-customization"
            caption="Add a title on a seaborn chart"
            linkTo="/seaborn-title-customization"
          />
        </Row>
        <br />
        <br />
        <p>
          Once you've understood how to add a title, customizing it should work
          the same as for <code>matplotlib</code>:
        </p>
        <Row>
          <ChartImageContainer
            imgName="190_Custom_title6"
            caption="Python chart with subtitle and custom color"
            linkTo="/190-custom-matplotlib-title"
          />
          <ChartImageContainer
            imgName="190_Custom_title7"
            caption="Add a math formula in title with Matplotlib"
            linkTo="/190-custom-matplotlib-title"
          />
          <ChartImageContainer
            imgName="190_Custom_title5"
            caption="Control the height of the matplotlib title"
            linkTo="/190-custom-matplotlib-title"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Axis">
          <Seaborn />
          Customizing axis
        </h2>
        <p>
          The exact same concept than explained for titles above applies for
          axes. So please read the following blogpost about axis customization
          with matplotlib and apply it to your seaborn chart.
        </p>
        <Row>
          <ChartImageContainer
            imgName="191_Custom_axis1"
            caption="Change the axis title and its appearance"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis2"
            caption="Control axis labels and ticks look"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis6"
            caption="Control axis limit with the xlim() function"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Themes">🌈 Seaborn built-in themes</h2>
        <p>
          Seaborn comes with a few built-in themes. Those themes are available
          through the <code>set_style()</code> function. Here is an overview of
          what is offered.
        </p>
        <Row>
          <ChartImageContainer
            imgName="104_seaborn_themes1-square"
            caption="Control axis limit with the xlim() function"
            linkTo="/104-seaborn-themes"
          />
          <ChartImageContainer
            imgName="104_seaborn_themes2-square"
            caption=" "
            linkTo="/104-seaborn-themes"
          />
          <ChartImageContainer
            imgName="104_seaborn_themes3-square"
            caption=" "
            linkTo="/104-seaborn-themes"
          />
          <ChartImageContainer
            imgName="104_seaborn_themes4-square"
            caption=" "
            linkTo="/104-seaborn-themes"
          />
          <ChartImageContainer
            imgName="104_seaborn_themes5-square"
            caption=" "
            linkTo="/104-seaborn-themes"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Gallery">⭐ Seaborn graph gallery</h2>
        <p>
          If you're interested in a specific type of chart like{' '}
          <Link to="/boxplot">boxplot</Link> or{' '}
          <Link to="/heatmap">heatmap</Link>, I suggest to visit the{' '}
          <Link to="/">dedicated section</Link> of the gallery. In case you're
          interested in what <code>seaborn</code> can do, here is a glimpse of
          what's offered in the gallery 🧐.
        </p>
        <Row>
          <ChartImageContainer
            imgName="82_seaborn_jointplot1"
            caption="Histogram can be added around a scatterplot to show each variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="74_density_plot_multi_variables"
            caption="Density chart with several displayed groups"
            linkTo="/74-density-plot-of-several-variables"
          />
          <ChartImageContainer
            imgName="43_seaborn_map_color_to_a_avariable3"
            caption="Color dots according to a group"
            linkTo="/43-use-categorical-variable-to-color-scatterplot-seaborn"
          />
          <ChartImageContainer
            imgName="58_Number_of_obs_on_violinplot_seaborn"
            caption="Show the number of observations per group"
            linkTo="/58-show-number-of-observation-on-violinplot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn2"
            caption="Changed the bandwidth used to compute the density"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_annotate_cells"
            caption="Seaborn heatmap customization: show numbers in cell"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables1"
            caption="Compare the distribution of several groups on the same chart"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot2"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom4"
            caption="Apply colors to each group and customized the scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="85_2D_density_plot_matplotlib_1"
            caption="Basic 2d density chart."
            linkTo="/85-density-plot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables2"
            caption="Use small multiple to compare the distribution of several groups"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot6"
            caption="Histogram can be added around a 2d density chart to show x and y variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="51_Horizontal_violinplot_Seaborn"
            caption="Make your violin chart horizontal to make labels more readable"
            linkTo="/51-horizontal-violinplot"
          />
          <ChartImageContainer
            imgName="132_Matplotlib-connected-scatterplot"
            caption="Basic connected scatterplot with Python and Seaborn."
            linkTo="/132-basic-connected-scatterplot"
          />
          <ChartImageContainer
            imgName="92_Control_color_heatmap1"
            caption="Color customization: how to select other color palettes and more"
            linkTo="/92-control-color-in-seaborn-heatmaps"
          />
        </Row>
      </Container>

      <Spacing />

      <Spacing />
      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="evolution" />
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
