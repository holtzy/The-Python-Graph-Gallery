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
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Bubble Map | Python Graph Gallery',
  seoDescription:
    'A collection of bubble map examples made with Python, coming with explanation and reproducible code',
  path: '/bubble-map/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/bubblemap.html'>bubble map</a> uses circles of different size to represent a numeric value on a territory. It displays one bubble per geographic coordinate, or one bubble per region. As for <a href='https://python-graph-gallery.com/map/'>background maps</a>, several python libraries are useful to build them: <code>folium</code>, <code>geopandas</code>, <code>geoplot</code> and <code>basemap</code> are listed here.</p>";

const iframeClass = 'mx-auto block h-[300px] w-full max-w-[800px] rounded-md border';

export default function BubbleMap() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Bubble Map" description={chartDescription} chartType="bubbleMap" />
      </div>

      <div className="wrapper" id="related">
        <h2 id="Overview">🔎 Building maps with Python</h2>
        <p>
          If you&apos;re new to geospatial analysis with python, I strongly advise to check the{' '}
          <Link href="/map">background map section</Link> of the gallery. It gives a great overview of the available
          tools, and help you pick the right one.
        </p>
        <Link href="/map" className={buttonVariants({ size: 'sm' })}>
          Background Map Section
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Geoplot & Cartopy">
          <code>GeoPlot</code> & <code>Cartopy</code>
        </h2>
        <p>
          <code>GeoPlot</code> is an extension of <code>Cartopy</code> and <a href="/matplotlib">Matplotlib</a> to
          create maps with minimal efforts.
        </p>
        <ChartGrid cols={3}>
          <ChartImageContainer
            imgName="web-bubble-map-with-arrows-1"
            caption="Initiate a background map"
            linkTo="/web-bubble-map-with-arrows"
          />
          <ChartImageContainer
            imgName="web-bubble-map-with-arrows-2"
            caption="Add bubble on top of a background map"
            linkTo="/web-bubble-map-with-arrows"
          />
          <ChartImageContainer
            imgName="web-bubble-map-with-arrows-3"
            caption="Customize style and colors in bubble maps"
            linkTo="/web-bubble-map-with-arrows"
          />
        </ChartGrid>
        <p>
          When creating maps, there are a large number of possible projections. The article below explains how to
          modify them.
        </p>
        <Link href={'/588-change-map-projection-in-python'} className="mx-auto block max-w-[800px] p-8">
          <ChartImage imgName={'projection_maps'} caption={'Change projection in maps'} />
        </Link>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="bubbleMap" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Folium">
          Bubble map with <code>Folium</code>
        </h2>
        <p>
          <code>Folium</code> is a wrapper of the <code>leaflet.js</code> javascript library. Once you understood how
          to <Link href="/map">initialize</Link> an interactive map with it, you can parse a data frame of coordinates
          and add markers to the map with functions like <code>Circle()</code> and <code>..()</code>
        </p>
        <iframe
          src="/interactiveCharts/313-bubble-map-with-folium.html"
          title="Basic map with folium"
          loading="lazy"
          className={iframeClass}
        ></iframe>
        <Link href="/313-bubble-map-with-folium" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          See code
        </Link>
        <p className="mt-8">
          It is also possible to add any other kind of markers instead of circles. This is what you get with the
          default <code>folium.Marker()</code> function:
        </p>
        <iframe
          src="/interactiveCharts/312-add-markers-on-folium-map.html"
          title="Folium and markers"
          loading="lazy"
          className={iframeClass}
        ></iframe>
        <Link href="/312-add-markers-on-folium-map" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          See code
        </Link>
        <p className="mt-8">
          And this is what you can build by passing some <code>html</code> to the marker and popup parameters:
        </p>
        <ChartGrid cols={3}>
          <ChartImageContainer
            imgName="312-add-markers-on-folium-map1"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/312-add-markers-on-folium-map"
          />
          <ChartImageContainer
            imgName="312-add-markers-on-folium-map2"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/312-add-markers-on-folium-map"
          />
          <ChartImageContainer
            imgName="593-customize-bubble-map-with-folium-1"
            caption="Customize color, transparency and size of bubbles in folium bubble maps"
            linkTo="/593-customize-bubble-map-with-folium"
          />
          <ChartImageContainer
            imgName="593-customize-bubble-map-with-folium-2"
            caption="How to automatically group bubbles when zooming in or out"
            linkTo="/593-customize-bubble-map-with-folium"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Basemap">
          Bubble map with <code>Basemap</code>
        </h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below
          examples show how to start basic, apply usual customization, and use the small multiple technique for when
          you have several groups to compare.
        </p>
        <Link href="/315-a-world-map-of-surf-tweets" className="mx-auto block">
          <ChartImage
            imgName={'315_Tweet_Surf_Bubble_map1'}
            caption={'Bubble map with Python and the basemap library'}
          />
        </Link>
        <ChartGrid cols={3}>
          <ChartImageContainer
            imgName="310-basic-map-with-markers-1"
            caption="Most simple bubble map"
            linkTo="/310-basic-map-with-markers"
          />
          <ChartImageContainer
            imgName="310-basic-map-with-markers-2"
            caption="Bubble map with different bubble size"
            linkTo="/310-basic-map-with-markers"
          />
          <ChartImageContainer
            imgName="310-basic-map-with-markers-3"
            caption="Bubble map with custom colors and size"
            linkTo="/310-basic-map-with-markers"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best examples">Best bubble map examples</h2>
        <p>
          The below examples show how to create <b>advanced bubble maps</b> with python using real life data.
        </p>
        <ChartGrid cols={2}>
          <ChartImageContainer
            imgName={'web-map-usa-with-scatter-plot-on-top-square'}
            caption={'Background map with a scatter plot on top of it'}
            linkTo={'/web-map-usa-with-scatter-plot-on-top'}
          />
          <ChartImageContainer
            imgName={'web-bubble-map-with-arrows-square'}
            caption={'Bubble map with arrows and nice annotations'}
            linkTo={'/web-bubble-map-with-arrows'}
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
