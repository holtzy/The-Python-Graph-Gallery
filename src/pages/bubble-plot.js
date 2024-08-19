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
import { scatterplot } from '../functions/scatterplot';
import FunctionExploration from '../components/FunctionExploration';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/bubble.html'>bubble plot</a> is a <a href='https://python-graph-gallery.com/scatter-plot'>scatterplot</a> where the circle size is mapped to the value of a third numeric variable. This section shows many bubble plots made with <code>Python</code>, using both the <code>Matplotlib</code> and <code>Seaborn</code> libraries.</p>";

const quickCode = `# libraries
import matplotlib.pyplot as plt
import seaborn as sns
from gapminder import gapminder # data set

# data
data = gapminder.loc[gapminder.year == 2007]

# use the scatterplot function to build the bubble map
sns.scatterplot(data=data, x="gdpPercap", y="lifeExp", size="pop", legend=False, sizes=(20, 2000))

# show the graph
plt.show()
`;

export const Head = () => (
  <SEO
    title="Python Bubble Chart Examples with Code"
    seoDescription="A collection of bubble chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function BubblePlot() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Bubble plot"
        description={chartDescription}
        chartType="bubble"
      />

      <Spacing />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              The <code>scatterplot()</code> function of <code>seaborn</code>{' '}
              also allows to build bubble charts. Indeed, it has a{' '}
              <code>size</code> parameter that controls circle size according to
              a numeric variable of the dataset.🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/bubble-plot-with-seaborn'}>
              <ChartImage
                imgName="bubble-plot-with-seaborn"
                caption="Basic bubble chart with Python and Seaborn."
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn">
          <Seaborn />
          Bubble plot with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is the best tool to quickly build a quality
          bubble chart. The example below are based on the famous{' '}
          <code>gapminder</code> dataset that shows the relationship between gdp
          per capita, life expectancy and population of world countries.
        </p>
        <p>
          The examples below start simple by calling the{' '}
          <code>scatterplot()</code> function with the minimum set of
          parameters. It then show how to change bubble colors to represent a
          fourth variable, improve general styling, tweak the legend and more.
        </p>
        <Row>
          <ChartImageContainer
            imgName="bubble-plot-with-seaborn"
            caption="Basic bubble chart with Python and Seaborn."
            linkTo="/bubble-plot-with-seaborn"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <FunctionExploration funDetails={scatterplot} />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Bubble plot with <code>Matplotlib</code>
        </h2>
        <p>
          As for <Link to="/scatter-plot">scatterplots</Link>,{' '}
          <code>Matplotlib</code> will help us build a bubble plot thanks to the
          the <code>plt.scatter()</code> function. This function provides a{' '}
          <code>s</code> parameter allowing to pass a third variable that will
          be mapped to the markers size.
        </p>
        <Row>
          <ChartImageContainer
            imgName="270_Basic_Bubble_plot"
            caption="Most basic bubble plot with Python and Matplotlib"
            linkTo="/270-basic-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization1"
            caption="Bubble plot customization: color"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization2"
            caption="Bubble plot customization: shape"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization3"
            caption="Bubble plot customization: size"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization4"
            caption="Bubble plot customization: stroke"
            linkTo="/271-custom-your-bubble-plot"
          />
        </Row>
        <p>
          Note that it is a common practice to map a fourth variable to the
          markers colors thanks to the <code>c</code> parameter. This way,
          you're now looking a 4 variables in the same time, on the same chart
          🎉.
        </p>
        <Row>
          <ChartImageContainer
            imgName="272_Bubble_plot_with_mapped_color"
            caption="A bubble chart width 4 dimensions: x, y, size & color"
            linkTo="/272-map-a-color-to-bubble-plot"
          />
          <ChartImageContainer
            imgName="bubble-plot-gapminder"
            caption="Bubble plot of the gapminder dataset"
            linkTo="/341-python-gapminder-animation"
          />
        </Row>
        <p>
          A very common task when it comes to bubble chart is to add a proper
          legend to explain what colors and sizes mean. The blogpost below is a
          deep-dive into matplotlib legend and should be of great help for this
        </p>
        <Row>
          <ChartImageContainer
            imgName="custom-legend-with-matplotlib6"
            caption="Legend customization: how to control location, add a background, customize labels and markers and more"
            linkTo="/custom-legend-with-matplotlib"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python bubble chart examples
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
          <Col xs={12} md={4}>
            <Link to={'/web-text-repel-with-matplotlib'}>
              <ChartImage
                imgName={'web-text-repel-with-matplotlib-square'}
                caption={
                  'Learn how to use the adjustText library to add many labels with no overlaps.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link
              to={'/web-scatterplot-text-annotation-and-regression-matplotlib'}
            >
              <ChartImage
                imgName={
                  'web-scatterplot-text-annotation-and-regression-matplotlib-square'
                }
                caption={
                  'Scatterplot with regression fit, group colors and non-overlapping labels.'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-scatterplot-astronaut'}>
              <ChartImage
                imgName={'web-scatterplot-astronaut-square'}
                caption={
                  'Dark mode scatterplot with custom annotations, title and explanations. All of that with a very good appearance!'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-scatterplot-with-images-in-circles'}>
              <ChartImage
                imgName={'web-scatterplot-with-images-in-circles'}
                caption={
                  'A scatter plot with images inside each marker to provide additional context'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={'/web-bubble-plot-with-annotations-and-custom-features'}>
              <ChartImage
                imgName={'web-bubble-plot-with-annotations-and-custom-features'}
                caption={
                  'A scatter plot with custom annotations and colors, with some markers being circled'
                }
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="correlation" />
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
