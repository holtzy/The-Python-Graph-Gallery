import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import LogoLink from '../components/LogoLink';
import SeabornImg from '../../static/logo/Other/seabornLogoHighRes.png';
import PlotlyImg from '../../static/logo/Other/plotlyLogoHighRes.png';
import MatplotlibImg from '../../static/logo/Other/matplotlibLogoHighRes.png';
import PlotnineImg from '../../static/logo/Other/plotnineLogoHighRes.png';
import BokehImg from '../../static/logo/Other/Bokeh.png';
import VegaImg from '../../static/logo/Other/vega-altair.png';
import Spacing from '../components/Spacing';
import CartopyImg from '../../static/logo/Other/cartopy.png';
import FoliumImg from '../../static/logo/Other/folium.png';
import GeoplotImg from '../../static/logo/Other/geoplot.png';
import GeopandasImg from '../../static/logo/Other/geopandas.png';
import PypalettesImg from '../../static/logo/Other/pypalettes.png';
import HighlighTextImg from '../../static/logo/Other/highlight_text.png';
import FlexiTextImg from '../../static/logo/Other/flexitext.png';
import NetworkXImg from '../../static/logo/Other/networkX.png';
import wordcloudImg from '../../static/logo/Other/wordcloud.png';
import pywaffleImg from '../../static/logo/Other/pywaffle.png';
import greatTablesImg from '../../static/logo/Other/great_tables.png';
import plotTablesImg from '../../static/logo/Other/plottable.png';
import pyfontsImg from '../../static/logo/Other/pyfonts.png';
import drawarrowImg from '../../static/logo/Other/drawarrow.png';
import { SEO } from '../components/SEO';

// Core
// Matplotlib, Seabor, Plotnine,  pandas

// Interactive
// Plotly, Altair, Bokeh,

// Matplotlib third party
// Pypalettes, highlight_text, flexitext,

// Geospatial
// folium, geoplot, cartopy, basemap, geopandas

// Specfic chart type
// networkX, wordcloud, suqarify, pywaffle,

// Tables
// great_tables et autres

// Themes?
// To explore!

const chartDescription =
  "<p>Python is very powerful when it comes to data visualization, especially thanks to its specialized packages that elevate its potential to unparalleled heights. Among these, <a href='/matplotlib'>matplotlib</a> stands out as a foundational tool, offering a versatile platform for creating a wide array of plots.<br/><br/>However, the real magic unfolds when you delve into <b>its extensions</b> and the plethora of other visualization packages available such as <a href='/seaborn'>seaborn</a>, <a href='/advanced-custom-annotations-matplotlib'>highlight_text</a> or <a href='/color-palette-finder'>pypalettes</a>. Together, they empower users to craft virtually <b>any type</b> of chart imaginable, showcasing the true versatility and power of Python in the realm of data visualization.<br/><br/>Python also comes with a set of great independant packages such as <a href='/plotly'>plotly</a>, that provides a simple way to create <b>interactive charts</b>, and <a href='/plotnine'>plotnine</a> that uses the <b>grammar of graphics</b> as a syntax, pretty much like the more than famous <a href='https://r-graph-gallery.com/ggplot2-package.html'>ggplot2</a>.</p>";

const logoCore = [
  {
    imgPath: MatplotlibImg,
    url: '/matplotlib',
    altText: 'Matplotlib logo',
    name: 'Matplotlib',
  },
  {
    imgPath: PlotlyImg,
    url: '/plotly',
    altText: 'Plotly logo',
    name: 'Plotly',
  },
  {
    imgPath: PlotnineImg,
    url: '/plotnine',
    altText: 'Plotnine logo',
    name: 'Plotnine',
  },
  {
    imgPath: SeabornImg,
    url: '/seaborn',
    altText: 'Seaborn logo',
    name: 'Seaborn',
  },
];

const logoMatplotExtension = [
  {
    imgPath: PypalettesImg,
    url: '/color-palette-finder',
    altText: 'Pypalettes logo',
    name: 'PyPalettes',
    height: '115px',
  },
  {
    imgPath: pyfontsImg,
    url: '/pyfonts',
    altText: 'pyfonts logo',
    name: 'PyFonts',
    height: '115px',
  },
  {
    imgPath: drawarrowImg,
    url: '/drawarrow',
    altText: 'drawarrow logo',
    name: 'DrawArrow',
    height: '115px',
  },
  {
    imgPath: HighlighTextImg,
    url: '/advanced-custom-annotations-matplotlib',
    altText: 'Highlight Text logo',
    name: 'Highlight Text',
    height: '115px',
  },
  {
    imgPath: FlexiTextImg,
    url: '/594-introduction-flexitext',
    altText: 'Flexitext logo',
    name: 'Flexitext',
    height: '115px',
  },
];

const logoMaps = [
  {
    imgPath: GeopandasImg,
    url: '/597-introduction-to-geopandas',
    altText: 'Geopandas logo',
    name: 'Geopandas',
    height: '115px',
  },
  {
    imgPath: GeoplotImg,
    url: '/map-read-geojson-with-python-geopandas',
    altText: 'Geoplot logo',
    name: 'Geoplot',
    height: '115px',
  },
  {
    imgPath: CartopyImg,
    url: '/web-bubble-map-with-arrows',
    altText: 'Cartopy logo',
    name: 'Cartopy',
    height: '115px',
  },
  {
    imgPath: MatplotlibImg,
    url: '/281-basic-map-with-basemap',
    altText: 'Matplotlib logo',
    name: 'Basemap',
  },
  {
    imgPath: FoliumImg,
    url: '/288-map-background-with-folium',
    altText: 'Folium logo',
    name: 'Folium',
    height: '115px',
  },
];

const logoSpecificChart = [
  {
    imgPath: NetworkXImg,
    url: '/network-chart',
    altText: 'NetworkX logo',
    name: 'NetworkX',
  },
  {
    imgPath: wordcloudImg,
    url: '/wordcloud',
    altText: 'Wordcloud logo',
    name: 'Wordcloud',
  },
  {
    imgPath: pywaffleImg,
    url: '/waffle-chart',
    altText: 'PyWaffle logo',
    name: 'PyWaffle',
  },
];

const logoTables = [
  {
    imgPath: greatTablesImg,
    url: '/585-introduction-great-tables',
    altText: 'Great Tables logo',
    name: 'Great Tables',
    height: '110px',
  },
  {
    imgPath: plotTablesImg,
    url: '/560-introduction-plottable',
    altText: 'Plottables logo',
    name: 'Plottables',
    height: '110px',
  },
  {
    imgPath: MatplotlibImg,
    url: '/552-table-combined-with-plot',
    altText: 'Matplotlib logo',
    name: 'Matplotlib',
  },
];

const logoInteractive = [
  {
    imgPath: PlotlyImg,
    url: '/plotly',
    altText: 'Plotly logo',
    name: 'Plotly',
  },
  {
    imgPath: BokehImg,
    url: '/',
    altText: 'Bokeh logo',
    name: 'Bokeh',
    className: 'disable-lib',
  },
  {
    imgPath: VegaImg,
    url: '/',
    altText: 'Vega-Altair logo',
    name: 'Vega-Altair',
    className: 'disable-lib',
  },
];

export const Head = () => (
  <SEO
    title="The best Python libraries for data visualization"
    seoDescription="All python data visualization packages and how to use them"
  />
);

export default function BestPackages() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="The best Python libraries for data visualization"
        description={chartDescription}
      />

      <Container>
        <h2 id="Core">Core packages</h2>
        <p>
          There is only a few <b>core</b> packages in python when it comes to
          data visualization. Most other packages are actually{' '}
          <b>built on top</b> on them, meaning that they use those packages
          features to create new ones!
        </p>
        <p>Here you can find them and learn:</p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-start py-4">
            {logoCore.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

      <br />

      <Container>
        <h2 id="Matplotlib extension">Matplotlib extensions</h2>
        <p>
          Matplotlib extensions are <b>specialized packages</b> that build upon
          the core functionality of Matplotlib. These extensions provide{' '}
          <b>additional features and capabilities</b>, making it easier to
          create specific types of visualizations or enhance existing plots.
        </p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-start py-4">
            {logoMatplotExtension.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

      <br />

      <Container>
        <h2 id="Geospatial">Geospatial packages</h2>
        <p>
          Geospatial packages in Python are designed to handle and visualize{' '}
          <b>geographical data</b>. These packages offer tools for{' '}
          <b>creating maps</b>, analyzing spatial information, and working with
          various types of geographic data formats.
        </p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-start py-4">
            {logoMaps.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

      <br />

      <Container>
        <h2 id="Interactivity">Interactivity</h2>
        <p>
          Interactive visualization packages in Python allow you to create{' '}
          <b>dynamic and responsive</b> charts and plots. These tools enable
          users to interact with the data, explore different aspects, and gain
          deeper insights through features like{' '}
          <b>zooming, panning, and hovering</b>.
        </p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-start py-4">
            {logoInteractive.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

      <br />

      <Container>
        <h2 id="Chart type">Specific chart types</h2>
        <p>
          Some Python packages are designed to excel at creating{' '}
          <b>specific types of charts or visualizations</b>. These specialized
          tools offer advanced features and optimizations for particular chart
          types, allowing you to create more <b>sophisticated</b> and tailored
          visualizations.
        </p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-start py-4">
            {logoSpecificChart.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

      <br />

      <Container>
        <h2 id="Table">Tables</h2>
        <p>
          Table visualization packages in Python provide tools for creating{' '}
          <b>attractive and informative tables</b> to display your data. These
          packages offer various <b>styling</b> options, <b>formatting</b>{' '}
          features, and the ability to <b>integrate</b> tables with other
          visualizations.
        </p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-start py-4">
            {logoTables.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

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
