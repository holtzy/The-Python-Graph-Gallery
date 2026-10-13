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
  title: 'Connection Map',
  seoDescription:
    'A collection of connection map examples made with Python, coming with explanation and reproducible code',
  path: '/connection-map/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/story/MapConnection.html'>connection map</a> allows to show the connection between several positions on a map. The link between 2 places can be drawn with a straight line, or more commonly using <code>great circles</code>: the shortest route between them. The earth being a sphere, it results in arcs that give a really pleasant look to the map.</p>";

export default function ConnectionMap() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Connection Map" description={chartDescription} chartType="connection" />
      </div>

      <div className="wrapper">
        <h2 id="Basemap">
          Background map with <code>Basemap</code>
        </h2>
        <p>
          <code>Basemap</code> is probably the best option to draw a connection map with <code>python</code>. It
          provides a function called{' '}
          <code>drawgreatcircle()</code> that draws the connection using great circles. Great circles are arcs that
          gives a better appearance than straight lines.
        </p>
        <ChartGrid cols={3}>
          <ChartImageContainer
            imgName="300-draw-a-connection-line1"
            caption="Most basic connection map with Python and Basemap."
            linkTo="/300-draw-a-connection-line"
          />
          <ChartImageContainer
            imgName="300-draw-a-connection-line2"
            caption="Show connection between a few cities with great circles."
            linkTo="/300-draw-a-connection-line"
          />
        </ChartGrid>
        <p className="mt-8">This is the result when you visualize the connection between 7 major world cities:</p>
        <Link href="/300-draw-a-connection-line" className="mx-auto block">
          <ChartImage
            imgName={'300-draw-a-connection-line3'}
            caption={'A connection map between 7 cities made with Python and Basemap'}
          />
        </Link>
        <Link href="/300-draw-a-connection-line" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          Code and explanation
        </Link>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="connection" />

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
