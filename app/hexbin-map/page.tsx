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
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Hexbin Map',
  seoDescription: 'A collection of hexbin map examples made with Python, coming with explanation and reproducible code',
  path: '/hexbin-map/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/hexbinmap.html'>hexbin map</a> is a specific type of map where each region is represented as a hexagon. This section explains how to build a hexbin map with python and libraries like <code>geopandas</code> and <code>geoplot</code>.</p>";

export default function HexbinMap() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Hexbin Map" description={chartDescription} chartType="hexbin" />
      </div>

      <Spacing />

      <div className="wrapper" id="related">
        <h2 id="Overview">🔎 2 kinds of hexbin maps ⭐ </h2>
        <p>
          There are 2 different kinds of hexbin maps as explained in{' '}
          <a href="https://www.data-to-viz.com/graph/hexbinmap.html">data-to-viz.com</a>:
        </p>
        <ul>
          <li>
            from a <u>hexagonal geospatial object</u>. Example: you find a `geoJson` file of US counties where each
            county is represented as a hexagon instead of with its real shape.
          </li>
          <br />
          <li>
            from a <u>2d density</u> technique. A set of coordinates is provided. The map is split in many hexagones and
            the number of data points is represented as a color in each hexagone.
          </li>
        </ul>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="hexbin" />

      <Spacing />

      <div className="wrapper">
        <h2 id="From geospatial">Hexbin map from geospatial object</h2>
        <p>
          <code>Seaborn</code> is another great alternative to build an area chart with <code>python</code>. The below
          examples show how to start basic, apply usual customization, and use the small multiple technique for when
          you have several groups to compare.
        </p>
        <ChartGrid cols={3}>
          <ChartImageContainer
            imgName="hexbin-map-from-geojson-python-1"
            caption="Most basic hexbin map from geoJson with python."
            linkTo="/hexbin-map-from-geojson-python"
          />
          <ChartImageContainer
            imgName="hexbin-map-from-geojson-python-2"
            caption="Compute polygon centroid to add labels."
            linkTo="/hexbin-map-from-geojson-python"
          />
        </ChartGrid>
        <p className="mt-8">
          This is what you get with a bit of <code>matplotlib</code> tweaking:
        </p>
        <Link href="/hexbin-map-from-geojson-python" className="mx-auto block">
          <ChartImage
            imgName={'hexbin-map-from-geojson-python-orig'}
            caption={'Clean hexbin map with python, geopandas and matplotlib'}
          />
        </Link>
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
