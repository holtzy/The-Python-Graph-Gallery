import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Choropleth map',
  seoDescription:
    'A collection of choropleth map examples made with Python, coming with explanation and reproducible code',
  path: '/choropleth-map/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/choropleth.html'>choropleth map</a> displays divided geographical areas or regions that are coloured in relation to a numeric variable. This section explains how to build static choropleth with <code>geopandas</code> and <code>geoplot</code>, and interactive versions with tools like <code>folium</code> and <code>plotly</code>.</p>";

export default function Choropleth() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Choropleth map" description={chartDescription} chartType="choropleth" />
      </div>

      <div className="wrapper">
        <h2 id="Geopandas & Geoplot">
          Choropleth map with <code>Geopandas</code> and <code>GeoPlot</code>
        </h2>
        <p>
          <code>Geoplot</code> is a python library for geospatial data visualization. It works pretty well with{' '}
          <code>geopandas</code>, another library made to deal with geospatial data objects.
        </p>
        <p>
          <code>Geoplot</code> has a <code>choropleth()</code> function that allows to build a choropleth map easily as
          shown in the example below.
        </p>
        <Link href="/choropleth-map-geopandas-python" className="mx-auto block">
          <ChartImage
            imgName={'choropleth-map-geopandas-python'}
            caption={'Choropleth map of US counties with Python, Geopandas and Geoplot'}
          />
        </Link>
        <Link href="/choropleth-map-geopandas-python" className={buttonVariants({ size: 'lg', className: 'mt-4' })}>
          Read post
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Folium">
          <code>Folium</code> for google maps style choropleth maps
        </h2>
        <p>
          <code>Folium</code> is a wrapper of the <code>Leaflet.js</code> javascript library. It brings the power of
          javascript for data visualization, but still allows to do some data wrangling with Python. Building a
          choropleth with <code>Folium</code> is quite straightforward thanks to the
          <code>choropleth()</code> function.
        </p>
        <iframe
          src="/interactiveCharts/292-choropleth-map-with-folium.html"
          title="Folium choropleth map"
          loading="lazy"
          className="mx-auto block h-[430px] w-full max-w-[800px] rounded-md border"
        ></iframe>
        <Link href="/292-choropleth-map-with-folium" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          See code
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Plotly">
          <code>Plotly</code> for interactive choropleth maps
        </h2>
        <p>
          <code>Plotly</code> is a powerful library for <b>interactive</b> data visualization. It allows to build
          choropleth maps with the
          <code>choropleth()</code> function.
        </p>
        <p>
          Try to hover the map below to see the value of each country. You can also zoom in and out, and move the map
          around.
        </p>
        <iframe
          src="/interactiveCharts/choropleth-map-plotly-python.html"
          title="parallel coordinate chart with plotly"
          loading="lazy"
          className="mx-auto block h-[500px] w-full max-w-[800px] rounded-md border"
        ></iframe>
        <Link href="/choropleth-map-plotly-python" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          See code
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <code>Matplotlib</code> for static choropleth maps
        </h2>
        <p>
          <a href="https://python-graph-gallery.com/matplotlib/">Matplotlib</a> allows to build static choropleth maps
          with the <code>geopandas</code> library. The below example shows how to build a choropleth map of European
          countries with <code>geopandas</code>
          and <code>matplotlib</code>.
        </p>
        <ChartGrid cols={2}>
          <ChartImageContainer
            imgName={'web-multiple-maps'}
            caption={'Combine multiple maps together, with a lollipop plot for the legend'}
            linkTo={'/web-multiple-maps'}
          />
          <ChartImageContainer
            imgName={'web-map-europe-with-color-by-country'}
            caption={'Choropleth map of European counties with Matplotlib and Geopandas'}
            linkTo={'/web-map-europe-with-color-by-country'}
          />
          <ChartImageContainer
            imgName={'web-map-with-custom-legend'}
            caption={'Choropleth map with customized legend, using Matplotlib and Geopandas'}
            linkTo={'/web-map-with-custom-legend'}
          />
          <ChartImageContainer
            imgName={'web-combine-choropleth-map-with-barplot'}
            caption={'Choropleth map combined with a barplot'}
            linkTo={'/web-combine-choropleth-map-with-barplot'}
          />
          <ChartImageContainer
            imgName={'web-two-maps-with-different-granulaties'}
            caption={'Two choropleth maps with different granularities'}
            linkTo={'/web-two-maps-with-different-granulaties'}
          />
          <ChartImageContainer
            imgName={'web-choropleth-map-with-barplot-square'}
            caption={'Choropleth map combined with a barplot for the legend'}
            linkTo={'/web-choropleth-map-with-barplot'}
          />
          <ChartImageContainer
            imgName={'web-choropleth-map-with-histogram-square'}
            caption={'Choropleth map combined with a histogram for the legend'}
            linkTo={'/web-choropleth-map-with-histogram'}
          />
          <ChartImageContainer
            imgName={'web-polygon-map-to-compare-distances-square'}
            caption={'Beyond the choropleth: a polygon map'}
            linkTo={'/web-polygon-map-to-compare-distances'}
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10" id="related">
        <ChartFamilySection chartFamily="map" />
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
