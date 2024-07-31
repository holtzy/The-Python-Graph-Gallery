import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib, Plotly } from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';
import SectionLogoWithOverlay from '../components/SectionLogoWithOverlay';
import { chartTypesInfo } from '../util/sectionDescriptions';
import { fullUrlToInternalLink } from '../util/utils';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const logoToKeep = ['lollipop', 'parallel', 'barplot', 'stackedBar'];
const SpiderAlternativeLogos = () => {
  const allLogos = chartTypesInfo
    .filter((chart) => logoToKeep.includes(chart.id))
    .map((chart, id) => {
      const link = fullUrlToInternalLink(chart.pythonURL);
      return (
        <Col key={id} xs={4} md={2}>
          <SectionLogoWithOverlay
            link={link}
            chartType={chart.logo}
            caption={chart.label}
          />
        </Col>
      );
    });

  return (
    <div>
      <Row>{allLogos}</Row>
    </div>
  );
};

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/caveat/spider.html'>radar chart</a> (or <a href='https://www.data-to-viz.com/caveat/spider.html'>spider plot</a>, or <a href='https://www.data-to-viz.com/caveat/spider.html'>polar chart</a>) allows to visualize one or more series of values over multiple quantitative variables. Each variable has its own axis, all axes are joined in the center of the figure. This section shows how to build it with <code>Matplotlib</code>, but keep in mind they are some <a href='https://www.data-to-viz.com/caveat/spider.html'>caveats</a> associated with this chart type.</p>";

export const Head = () => (
  <SEO
    title="Radar chart"
    seoDescription="A collection of radar chart examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Radar() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Radar Chart"
        description={chartDescription}
        chartType="radar"
      />

      <div className="greySection" id="warning">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Radar charts are criticized</h2>
          <p>
            Spider plots are somewhat criticized. The <u>variable order</u> has
            a huge impact on the chart appearance, <u>scales</u> can be skewed,{' '}
            <u>overplotting</u> makes it hard to read and <u>over-evaluation</u>{' '}
            of differences are the main arguments.
          </p>
          <p>
            You should probably read{' '}
            <a href="https://www.data-to-viz.com/caveat/spider.html">
              this article
            </a>{' '}
            that explains the issues more in depth before building one, and
            consider switching to one of the alternative below:
          </p>
          <SpiderAlternativeLogos />
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib /> Radar chart with <code>Matplotlib</code>
        </h2>
        <p>
          As far as I know there isn't any library offering a function to build
          a spider plot quickly. Fortunately, <code>Matplotlib</code> allows a
          very high level of customization. With a bit of trigonometry and the{' '}
          <code>plot()</code> function you should get your desired viz.
        </p>
        <Row>
          <ChartImageContainer
            imgName="390_basic_Radarchart"
            caption="Most basic radar chart with python."
            linkTo="/390-basic-radar-chart"
          />
          <ChartImageContainer
            imgName="391_Several_indiv_Radarchart"
            caption="Radar chart with several displayed values"
            linkTo="/391-radar-chart-with-several-individuals"
          />
        </Row>
        <p>
          Radar charts are often used in combination with faceting. It allows to
          compare the features of several groups, what would be unreadable if
          plotted on the same chart.
        </p>
        <Link to={'/392-use-faceting-for-radar-chart'}>
          <ChartImage
            imgName="393_Faceting_and_Radarchart"
            caption="A polar chart with small multiple to compare 4 groups"
          />
        </Link>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Plotly">
          <Plotly /> Radar chart with <code>Plotly</code>
        </h2>
        <p>
          <code>Plotly</code> is a great library to build radar charts. It
          offers a high level of interactivity and can be used with both
          <code>plotly express</code> and <code>plotly graph objects</code>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="571-radar-chart-with-plotly-1"
            caption="Most basic radar chart with plotly"
            linkTo="/571-radar-chart-with-plotly"
          />
          <ChartImageContainer
            imgName="571-radar-chart-with-plotly-2"
            caption="Radar chart with several displayed values"
            linkTo="/571-radar-chart-with-plotly"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Best">
          <Matplotlib />
          Best python radar chart examples
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
            <Link to={'/web-radar-chart-with-matplotlib'}>
              <ChartImage
                imgName={'web-radar-chart-with-matplotlib-square'}
                caption={
                  'An appealing radar chart with several groups to compare some penguins populations .'
                }
              />
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <Link to={'/web-circular-barplot-with-matplotlib'}>
              <ChartImage
                imgName={'web-circular-barplot-with-matplotlib-square'}
                caption={
                  'A circular barchart with several features per group made with Python and Matplotlib.'
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
