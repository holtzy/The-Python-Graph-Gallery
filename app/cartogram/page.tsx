import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cartogram',
  seoDescription: 'A collection of cartogram examples made with Python, coming with explanation and reproducible code',
  path: '/cartogram/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/cartogram.html'>cartogram</a> is a map in which each region size is distorted according to a numeric variable. Python allows to draw this kind of map thanks to the <code>Geopandas</code> and <code>Geoplot</code> libraries</p>";

export default function Cartogram() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Cartogram" description={chartDescription} chartType="cartogram" />
      </div>

      <div className="wrapper">
        <h2>
          😔 Cartogram with <code>Python</code>
        </h2>
        <p>
          Unfortunately, there is <strong>no direct method</strong> to build cartograms in Python. However, if you need
          to create one, you can easily build <a href="https://r-graph-gallery.com/cartogram.html">cartograms in R</a>{' '}
          using the <code>cartogram</code> package.
        </p>
        <p>
          If you have implemented a cartogram algorithm in Python, please <strong>share your code</strong> with the
          community by opening an issue on the{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery/issues">GitHub repository</a> of the gallery.
        </p>
        <p>
          The only kind of cartogram implemented in Python is the <code>non-contiguous cartogram</code> that preserves
          shape but change size. And the good news is that we have a tuto on the Gallery!
        </p>

        <Link href={'/592-non-contiguous-cartogram-in-python'} className="mt-6 block">
          <img
            src="/graph/592-non-contiguous-cartogram-in-python.png"
            alt="Non contiguous cartogram made with Python"
            width={3600}
            height={2100}
            loading="lazy"
            className="h-auto w-full rounded-md"
          />
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Other kind of maps</h2>
        <p>
          The gallery provides <strong>numerous map examples</strong> for you to explore. Browse the examples below:
        </p>
        <ChartGrid cols={3}>
          <ChartImageContainer
            imgName={'web-map-with-custom-legend'}
            caption={'Choropleth map with customized legend, using Matplotlib and Geopandas'}
            linkTo={'/web-map-with-custom-legend'}
          />
          <ChartImageContainer
            imgName={'web-map-usa-with-scatter-plot-on-top-square'}
            caption={'Bubble map of the USA with Matplotlib and Geopandas.'}
            linkTo={'/web-map-usa-with-scatter-plot-on-top'}
          />
          <ChartImageContainer
            imgName={'web-stacked-area-charts-on-a-map'}
            caption={'Stacked area charts on a map, with a special grid.'}
            linkTo={'/web-stacked-area-charts-on-a-map'}
          />
          <ChartImageContainer
            imgName={'web-map-europe-with-color-by-country'}
            caption={'Choropleth map of European counties with Matplotlib and Geopandas'}
            linkTo={'/web-map-europe-with-color-by-country'}
          />
          <ChartImageContainer
            imgName={'web-multiple-maps'}
            caption={'Combine multiple maps together, with a lollipop plot for the legend'}
            linkTo={'/web-multiple-maps'}
          />
          <ChartImageContainer
            imgName={'web-waffle-with-small-multiples'}
            caption={'Use waffle chart for building a map on London boroughs'}
            linkTo={'/web-waffle-with-small-multiples'}
          />
          <ChartImageContainer
            imgName={'web-combine-choropleth-map-with-barplot-square'}
            caption={'Choropleth map combined with a barplot'}
            linkTo={'/web-combine-choropleth-map-with-barplot'}
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper" id="related">
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
