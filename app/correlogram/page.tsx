import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import ChartFamilySection from '@/components/ChartFamilySection';
import CodeChunk from '@/components/CodeChunk';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Correlogram',
  seoDescription:
    'A collection of correlogram examples made with Python, coming with explanation and reproducible code',
  path: '/correlogram/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/correlogram.html'>correlogram</a> or <a href='https://www.data-to-viz.com/graph/correlogram.html'>correlation matrix</a> allows to analyse the relationship between each pair of numeric variables of a matrix. The correlation is visualised as a <a href='https://python-graph-gallery.com/scatter-plot'>scatterplot</a>. The diagonal represents the distribution of each variable with a <a href='https://python-graph-gallery.com/histogram'>histogram</a> or a <a href='https://python-graph-gallery.com/density-plot'>density plot</a>.</p > ";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')
import matplotlib.pyplot as plt

# Basic correlogram
sns.pairplot(df)
plt.show()
`;

export default function Correlogram() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Correlogram" description={chartDescription} chartType="correlogram" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              Once more, the <code>Seaborn</code> library is here to build a high quality correlogram with a few lines
              of code only.🔥
            </p>
            <p>
              Note that all the stuff you learned in the <Link href="/scatter-plot">scatterplot</Link>
              and <Link href="/histogram">histogram</Link> sections can be used here.
            </p>
          </div>
          <div>
            <Link href={'/110-basic-correlation-matrix-with-seaborn'}>
              <ChartImage imgName="110_Basic_Correlogram" caption="Basic correlogram with Python and Seaborn." />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Correlogram with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is definitely the best way to build a correlogram with <code>python</code>. It provides
          a <code>pairplot()</code> function that handles most of the work for you. The examples below give an overview
          of the customizations you can apply to it to suits your need.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="111_Correlogram_custom1"
            caption="Correlogram with linear trend displayed on each scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom4"
            caption="Apply colors to each group and customized the scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom7"
            caption="Customize the distributions displayed on the diagonal"
            linkTo="/111-custom-correlogram"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Correlogram with <code>Matplotlib</code>
        </h2>
        <p>
          As usual it is totally possible to build the chart with Matplotlib, but requires to write a bit more code.
          Basically, it is done using the subplots() function to create the grid, and next building a loop to add the
          charts one by one.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="how-to-remove-axis-in-matplotlib"
            caption="How to remove some unused entries in a chart grid."
            linkTo="/how-to-remove-axis-in-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Related">&#128161; Scatterplot and Histogram sections are related</h2>
        <p>
          Note that a correlogram is an aggregate of <Link href="/scatter-plot">scatterplots</Link> and{' '}
          <Link href="/histogram">histograms</Link>. Most of the customizations described in those related sections can
          be applied here.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/scatter-plot" className={buttonVariants({ size: 'sm' })}>
            Scatterplot section
          </Link>
          <Link href="/histogram" className={buttonVariants({ size: 'sm' })}>
            Histogram section
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper" id="related">
        <ChartFamilySection chartFamily="correlation" />
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
