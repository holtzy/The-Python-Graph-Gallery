import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import CodeChunk from '@/components/CodeChunk';
import ChartFamilySection from '@/components/ChartFamilySection';
import FunctionExploration from '@/components/FunctionExploration';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { kdeplot } from '@/lib/functions/kdeplot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Density Chart Gallery | Dozens of examples with code',
  seoDescription:
    'A collection of density plot examples made with Python, coming with explanation and reproducible code',
  path: '/density-plot/',
});

const chartDescription =
  "<p>Density plots allow you to visualize the <b>distribution of a numeric variable</b> for one or several groups. They are very well adapted for large datasets, as stated in <a href='https://data-to-viz.com'>data-to-viz.com</a>.<br><br>Note that <b>2 approaches</b> exist to build them in python: the first one consists of <i>computing a kernel density estimate</i>, and the second one involves building a <i>high resolution histogram</i>.</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default density plot
sns.kdeplot(df['sepal_width'])
`;

export default function DensityPlot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Density chart" description={chartDescription} chartType="density" />
      </div>

      <div className="wrapper">
        <h2 id="Quick start">&#9201; Quick start</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              If you are in a rush, the most straightforward way to build a density chart is to use{' '}
              <code>Seaborn</code> and its <code>kdeplot()</code> function. You just need to provide it with a
              numeric variable from your dataset. 🔥
            </p>
          </div>
          <div>
            <Link href="/70-basic-density-plot-with-seaborn">
              <ChartImage
                imgName="70_Basic_density_plot_Seaborn"
                caption="The most basic density plot one can make with python and seaborn"
              />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Density charts with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better charts easily. It is well adapted to
          build density charts thanks to its <code>kdeplot</code> function.
        </p>
        <p>
          The following charts will guide you through its usage, going from a very{' '}
          <Link href="/density-plot/">basic density plot</Link> to something much more{' '}
          <Link href="/density-plot/">customized</Link>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="The most basic density plot one can make with python and seaborn"
            linkTo="/70-basic-density-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="70-basic-density-plot-with-seaborn-2"
            caption="Cumulative version of the most basic density plot"
            linkTo="/70-basic-density-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="71_Shaded_density_plot_Seaborn"
            caption="seaborn densty chart with filled area"
            linkTo="/71-density-plot-with-shade-seaborn"
          />
          <ChartImageContainer
            imgName="72_Horizontal_density_plot_Seaborn"
            caption="vertical seaborn density chart"
            linkTo="/72-horizontal-density-plot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn1"
            caption="control density chart color"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn2"
            caption="Changed the bandwidth used to compute the density"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="74_density_plot_multi_variables"
            caption="Density chart with several displayed groups"
            linkTo="/74-density-plot-of-several-variables"
          />
          <ChartImageContainer
            imgName="density-mirror"
            caption="Mirror density chart to compare the distribution of 2 variables"
            linkTo="/density-mirror"
          />
          <ChartImageContainer
            imgName="575-distribution-plot-with-quantiles-2"
            caption="Density chart with quantiles displayed"
            linkTo="/575-distribution-plot-with-quantiles"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Multiple groups">
          <Seaborn />
          Density charts, <code>Seaborn</code> and multiple groups
        </h2>
        <p>
          It is a common use case to compare the density of several groups in a dataset. Several options exist to
          do so.
        </p>
        <p>
          You can plot all items on the same chart, using <b>transparency</b> and annotation to make the comparison
          possible.
        </p>
        <p>
          Or you can use a technique called <b>small multiples</b> where the graph window is split in individual
          charts, avoiding group overlaps that are sometimes hard to read.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="density-chart-multiple-groups-seaborn1"
            caption="Density chart with multiple groups overlapped"
            linkTo="/density-chart-multiple-groups-seaborn"
          />
          <ChartImageContainer
            imgName="density-chart-multiple-groups-seaborn3"
            caption="Density chart with multiple groups overlapped"
            linkTo="/density-chart-multiple-groups-seaborn"
          />
          <ChartImageContainer
            imgName="density-chart-multiple-groups-seaborn4"
            caption="Density chart with multiple groups overlapped"
            linkTo="/density-chart-multiple-groups-seaborn"
          />
        </ChartGrid>
        <Link href="/density-chart-multiple-groups-seaborn" className="block">
          <ChartImage
            imgName="density-chart-multiple-groups-seaborn5"
            caption="A density chart with multiple groups displayed, transparency and clean annotation."
          />
        </Link>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10">
        <FunctionExploration funDetails={kdeplot} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib /> Density charts with <code>Matplotlib</code>
        </h2>
        <p>
          It is possible to build a density chart with <code>matplotlib</code>, but it is truely a struggle
          compared to making it with <code>seaborn</code> as shown above.
        </p>
        <p>
          Here is an example to prove it is doable, but I strongly advise to go for <code>seaborn</code>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="density-chart-matplotlib-vector"
            caption="Basic density chart with python and matplotlib from a vector of data"
            linkTo="/density-chart-matplotlib"
          />
          <ChartImageContainer
            imgName="density-chart-matplotlib-csv"
            caption="Read a csv file and plot the density of a column"
            linkTo="/density-chart-matplotlib"
          />
          <ChartImageContainer
            imgName="raincloud-plot-with-matplotlib-and-ptitprince"
            caption="Combining density and boxplot"
            linkTo="/raincloud-plot-with-matplotlib-and-ptitprince"
          />
          <ChartImageContainer
            imgName="575-distribution-plot-with-quantiles-2"
            caption="Density chart with quantiles displayed"
            linkTo="/575-distribution-plot-with-quantiles"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10" id="related">
        <ChartFamilySection chartFamily="distribution" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <TableOfContent />
    </>
  );
}
