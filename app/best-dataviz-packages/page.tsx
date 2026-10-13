import type { Metadata } from 'next';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LogoLink, { type LogoLinkProps } from '@/components/LogoLink';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'The best Python libraries for data visualization',
  seoDescription: 'All python data visualization packages and how to use them',
  path: '/best-dataviz-packages/',
});

const chartDescription =
  "<p>Python is very powerful when it comes to data visualization, especially thanks to its specialized packages that elevate its potential to unparalleled heights. Among these, <a href='/matplotlib'>matplotlib</a> stands out as a foundational tool, offering a versatile platform for creating a wide array of plots.<br/><br/>However, the real magic unfolds when you delve into <b>its extensions</b> and the plethora of other visualization packages available such as <a href='/seaborn'>seaborn</a>, <a href='/advanced-custom-annotations-matplotlib'>highlight_text</a> or <a href='/color-palette-finder'>pypalettes</a>. Together, they empower users to craft virtually <b>any type</b> of chart imaginable, showcasing the true versatility and power of Python in the realm of data visualization.<br/><br/>Python also comes with a set of great independant packages such as <a href='/plotly'>plotly</a>, that provides a simple way to create <b>interactive charts</b>, and <a href='/plotnine'>plotnine</a> that uses the <b>grammar of graphics</b> as a syntax, pretty much like the more than famous <a href='https://r-graph-gallery.com/ggplot2-package.html'>ggplot2</a>.</p>";

const LOGO = '/logo/Other/';
const MatplotlibImg = LOGO + 'matplotlibLogoHighRes.png';
const PlotlyImg = LOGO + 'plotlyLogoHighRes.png';
const PlotnineImg = LOGO + 'plotnineLogoHighRes.png';
const SeabornImg = LOGO + 'seabornLogoHighRes.png';
const BokehImg = LOGO + 'bokeh.png';
const VegaImg = LOGO + 'vega-altair.png';
const CartopyImg = LOGO + 'cartopy.png';
const FoliumImg = LOGO + 'folium.png';
const GeoplotImg = LOGO + 'geoplot.png';
const GeopandasImg = LOGO + 'geopandas.png';
const PypalettesImg = LOGO + 'pypalettes.png';
const HighlighTextImg = LOGO + 'highlight_text.png';
const FlexiTextImg = LOGO + 'flexitext.png';
const NetworkXImg = LOGO + 'networkx.png';
const wordcloudImg = LOGO + 'wordcloud.png';
const pywaffleImg = LOGO + 'pywaffle.png';
const greatTablesImg = LOGO + 'great_tables.png';
const plotTablesImg = LOGO + 'plottable.png';
const pyfontsImg = LOGO + 'pyfonts.png';
const bumplotImg = LOGO + 'bumplot.png';
const drawarrowImg = LOGO + 'drawarrow.png';
const dayplotImg = LOGO + 'dayplot.png';
const morethemesImg = LOGO + 'morethemes.png';

const logoCore: LogoLinkProps[] = [
  { imgPath: MatplotlibImg, url: '/matplotlib', altText: 'Matplotlib logo', name: 'Matplotlib' },
  { imgPath: PlotlyImg, url: '/plotly', altText: 'Plotly logo', name: 'Plotly' },
  { imgPath: PlotnineImg, url: '/plotnine', altText: 'Plotnine logo', name: 'Plotnine' },
  { imgPath: SeabornImg, url: '/seaborn', altText: 'Seaborn logo', name: 'Seaborn' },
];

const logoMatplotExtension: LogoLinkProps[] = [
  { imgPath: PypalettesImg, url: '/color-palette-finder', altText: 'Pypalettes logo', name: 'PyPalettes', height: '115px' },
  { imgPath: pyfontsImg, url: '/pyfonts', altText: 'pyfonts logo', name: 'PyFonts', height: '115px' },
  { imgPath: drawarrowImg, url: '/drawarrow', altText: 'drawarrow logo', name: 'DrawArrow', height: '115px' },
  { imgPath: dayplotImg, url: '/calendar-heatmaps-with-python-and-matplotlib', altText: 'DayPlot logo', name: 'DayPlot' },
  { imgPath: morethemesImg, url: '/custom-matplotlib-theme-with-morethemes', altText: 'morethemes logo', name: 'MoreThemes' },
  { imgPath: bumplotImg, url: 'https://y-sunflower.github.io/bumplot/', altText: 'bumplot logo', name: 'BumPlot' },
  {
    imgPath: HighlighTextImg,
    url: '/advanced-custom-annotations-matplotlib',
    altText: 'Highlight Text logo',
    name: 'Highlight Text',
    height: '115px',
  },
  { imgPath: FlexiTextImg, url: '/594-introduction-flexitext', altText: 'Flexitext logo', name: 'Flexitext', height: '115px' },
];

const logoMaps: LogoLinkProps[] = [
  { imgPath: GeopandasImg, url: '/597-introduction-to-geopandas', altText: 'Geopandas logo', name: 'Geopandas', height: '115px' },
  { imgPath: GeoplotImg, url: '/map-read-geojson-with-python-geopandas', altText: 'Geoplot logo', name: 'Geoplot', height: '115px' },
  { imgPath: CartopyImg, url: '/web-bubble-map-with-arrows', altText: 'Cartopy logo', name: 'Cartopy', height: '115px' },
  { imgPath: MatplotlibImg, url: '/281-basic-map-with-basemap', altText: 'Matplotlib logo', name: 'Basemap' },
  { imgPath: FoliumImg, url: '/288-map-background-with-folium', altText: 'Folium logo', name: 'Folium', height: '115px' },
];

const logoSpecificChart: LogoLinkProps[] = [
  { imgPath: NetworkXImg, url: '/network-chart', altText: 'NetworkX logo', name: 'NetworkX' },
  { imgPath: wordcloudImg, url: '/wordcloud', altText: 'Wordcloud logo', name: 'Wordcloud' },
  { imgPath: pywaffleImg, url: '/waffle-chart', altText: 'PyWaffle logo', name: 'PyWaffle' },
  { imgPath: dayplotImg, url: '/calendar-heatmaps-with-python-and-matplotlib', altText: 'DayPlot logo', name: 'DayPlot' },
  { imgPath: bumplotImg, url: 'https://y-sunflower.github.io/bumplot/', altText: 'bumplot logo', name: 'BumPlot' },
];

const logoTables: LogoLinkProps[] = [
  { imgPath: greatTablesImg, url: '/585-introduction-great-tables', altText: 'Great Tables logo', name: 'Great Tables', height: '110px' },
  { imgPath: plotTablesImg, url: '/560-introduction-plottable', altText: 'Plottables logo', name: 'Plottables', height: '110px' },
  { imgPath: MatplotlibImg, url: '/552-table-combined-with-plot', altText: 'Matplotlib logo', name: 'Matplotlib' },
];

const logoInteractive: LogoLinkProps[] = [
  { imgPath: PlotlyImg, url: '/plotly', altText: 'Plotly logo', name: 'Plotly' },
  { imgPath: BokehImg, url: '/', altText: 'Bokeh logo', name: 'Bokeh', disabled: true },
  { imgPath: VegaImg, url: '/', altText: 'Vega-Altair logo', name: 'Vega-Altair', disabled: true },
];

// Grid of library logos
const LogoGrid = ({ logos }: { logos: LogoLinkProps[] }) => (
  <div className="wrapper my-6">
    <div className="grid grid-cols-3 gap-x-1 gap-y-3 sm:grid-cols-4 md:grid-cols-6">
      {logos.map((logo, index) => (
        <LogoLink key={index} {...logo} />
      ))}
    </div>
  </div>
);

export default function BestPackages() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="The best Python libraries for data visualization" description={chartDescription} />
      </div>

      <div className="wrapper">
        <h2 id="Core">Core packages</h2>
        <p>
          There is only a few <b>core</b> packages in python when it comes to data visualization. Most other packages
          are actually <b>built on top</b> on them, meaning that they use those packages features to create new ones!
        </p>
        <p>Here you can find them and learn:</p>
      </div>

      <LogoGrid logos={logoCore} />

      <div className="wrapper">
        <h2 id="Matplotlib extension">Matplotlib extensions</h2>
        <p>
          Matplotlib extensions are <b>specialized packages</b> that build upon the core functionality of Matplotlib.
          These extensions provide <b>additional features and capabilities</b>, making it easier to create specific
          types of visualizations or enhance existing plots.
        </p>
      </div>

      <LogoGrid logos={logoMatplotExtension} />

      <div className="wrapper">
        <h2 id="Geospatial">Geospatial packages</h2>
        <p>
          Geospatial packages in Python are designed to handle and visualize <b>geographical data</b>. These packages
          offer tools for <b>creating maps</b>, analyzing spatial information, and working with various types of
          geographic data formats.
        </p>
      </div>

      <LogoGrid logos={logoMaps} />

      <div className="wrapper">
        <h2 id="Interactivity">Interactivity</h2>
        <p>
          Interactive visualization packages in Python allow you to create <b>dynamic and responsive</b> charts and
          plots. These tools enable users to interact with the data, explore different aspects, and gain deeper insights
          through features like <b>zooming, panning, and hovering</b>.
        </p>
      </div>

      <LogoGrid logos={logoInteractive} />

      <div className="wrapper">
        <h2 id="Chart type">Specific chart types</h2>
        <p>
          Some Python packages are designed to excel at creating <b>specific types of charts or visualizations</b>.
          These specialized tools offer advanced features and optimizations for particular chart types, allowing you to
          create more <b>sophisticated</b> and tailored visualizations.
        </p>
      </div>

      <LogoGrid logos={logoSpecificChart} />

      <div className="wrapper">
        <h2 id="Table">Tables</h2>
        <p>
          Table visualization packages in Python provide tools for creating <b>attractive and informative tables</b> to
          display your data. These packages offer various <b>styling</b> options, <b>formatting</b> features, and the
          ability to <b>integrate</b> tables with other visualizations.
        </p>
      </div>

      <LogoGrid logos={logoTables} />

      <Spacing />

      <div className="wrapper" id="related">
        <ChartFamilySection chartFamily="general" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <Spacing />

      <TableOfContent />
    </>
  );
}
