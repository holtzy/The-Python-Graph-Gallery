import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartGrid from '@/components/ChartGrid';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Dendrogram',
  seoDescription:
    'A collection of dendrogram examples made with Python, coming with explanation and reproducible code',
  path: '/dendrogram/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/dendrogram.html'>dendrogram</a> is a network structure. It is constituted of a root node that gives birth to several nodes connected by edges or branches. It is used to represent a hierarchical structure or to display the result of a clustering algorithm.</p>";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Dendrogram" description={chartDescription} chartType="dendrogram" />
      </div>

      <div className="wrapper">
        <h2 id="What is it?">&#8505; &#65039; Two types of dendrogram</h2>
        <p>
          It is important to understand that dendrograms are used in 2 very different conditions that are based on 2
          different data inputs:
        </p>
        <ul>
          <li>
            <u>Hierarchical dataset</u>: think about a CEO managing team leads managing employees and so on.
          </li>
          <li>
            <u>Clustering result</u>: clustering divides a set of individuals in group according to their similarity.
            Its result can be visualized as a tree, often going together with a heatmap.
          </li>
        </ul>
        <a href="https://www.data-to-viz.com/graph/dendrogram.html" className={buttonVariants({ size: 'sm' })}>
          Read more about dendrogram
        </a>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Clustering & Matplotlib">
          <Matplotlib />
          Dendrogram for clustering with <code>Matplotlib</code>
        </h2>
        <p>
          The <Link href="/400-basic-dendrogram">first chart</Link> of this section explains how to build a basic
          dendrogram with Python and <code>matplotlib</code>. It starts from a numeric matrix, compute the similarity
          between each pair of item thanks to the <code>linkage()</code> function and plot the result with the{' '}
          <code>dendrogram()</code> function.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="400_Basic_Dendrogram"
            caption="Most basic dendrogram and clustering with Python and Matplotlib"
            linkTo="/401-customised-dendrogram"
          />
        </ChartGrid>
        <p>
          The next post explains how to customize the output: change node and edge features like color and shapes,
          select a specific part of the tree and more.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="401_custom_Dendrogram2"
            caption="Most basic dendrogram and clustering with Python and Matplotlib"
            linkTo="/400-basic-dendrogram"
          />
          <ChartImageContainer
            imgName="401_custom_Dendrogram6"
            caption="Horizontal dendrogram"
            linkTo="/401-customised-dendrogram"
          />
          <ChartImageContainer
            imgName="401_custom_Dendrogram5"
            caption="Cut the dendrogram at a specific height"
            linkTo="/401-customised-dendrogram"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="dendrogram" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Clustering & Seaborn">
          <Seaborn />
          Dendrogram, clustering and heatmaps with <code>Seaborn</code>
        </h2>
        <p>
          It is very common to display the results of a clustering using a <Link href="/heatmap">heatmap</Link> with
          dendrograms around it. Fortunately the <code>Seaborn</code> library makes it a breeze.
        </p>
        <p>
          The examples below will guide you through the most usual needs. Note however that data normalization should
          be your main focus here, as it can massively impact the final visual result. (See{' '}
          <Link href="/404-dendrogram-with-heat-map">this post</Link> for that).
        </p>
        <Link href="/heatmap" className={buttonVariants({ size: 'sm' })}>
          Related: heatmap section
        </Link>
        <div className="mx-auto max-w-[600px] p-[30px]">
          <Link href="/405-dendrogram-with-heatmap-and-coloured-leaves" className="block">
            <ChartImage
              imgName="405_Dendro_and_heatmap_and_rowcolor"
              caption="A seaborn heatmap with clusterization and dendrogram applied"
            />
          </Link>
        </div>
        <ChartGrid>
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap3"
            caption="Most basic heatmap with dendrogram with seaborn"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap9"
            caption="Change color palette"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap11"
            caption="Learn how to normalize data in the heatmap, avoiding that kind of result"
            linkTo="/404-dendrogram-with-heat-map"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Hierarchichal">Dendrogram for hierarchical datasets</h2>
        <p>
          Dendrogram can also be used to display a hierarchy. A hierarchy as a root node that gets divided in several
          children and so on.
        </p>
        <p>TODO</p>
      </div>

      <Spacing />

      <div className="wrapper">
        <ChartFamilySection chartFamily="partOfAWhole" />
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
