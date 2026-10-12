import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartGrid from '@/components/ChartGrid';
import CodeChunk from '@/components/CodeChunk';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Boxplot Gallery | Dozens of examples with code',
  seoDescription: 'A collection of boxplot examples made with Python, coming with explanation and reproducible code',
  path: '/boxplot/',
});

const chartDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/caveat/boxplot.html">boxplot</a> summarizes the <b>distribution</b> of
      a numeric variable for one or several groups. It allows to quickly get the <b>median</b>, <b>quartiles</b> and{' '}
      <b>outliers</b> but also hides the dataset individual data points.
    </p>
    <p>
      In python, boxplots can be made with both <Link href="/seaborn">seaborn</Link> and{' '}
      <Link href="/matplotlib">matplotlib</Link> as they both offer a <code>boxplot()</code> function made for the
      job.
    </p>
  </>
);

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

sns.boxplot( x=df["species"], y=df["sepal_length"] )
`;

export default function Boxplot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Boxplot" description={chartDescription} chartType="boxplot" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              <code>Seaborn</code> is definitely the best library to quickly build a boxplot. It offers a dedicated{' '}
              <code>boxplot()</code> function that roughly works as follows:🔥
            </p>
          </div>
          <div>
            <Link href="/30-basic-boxplot-with-seaborn">
              <ChartImage
                imgName="30_Basic_Box_seaborn2"
                caption="Basic boxplot with Python and Seaborn from various data input formats."
              />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10">
        <h2 id="Warning">&#9888;&#65039; Mind the boxplot</h2>
        <p>
          A boxplot is an awesome way to summarize the distribution of a variable. However it hides the real
          distribution and the sample size. Check the 3 charts below that are based on the exact same dataset.
        </p>
        <p>
          To read more about this, visit <a href="https://www.data-to-viz.com/caveat/boxplot.html">data-to-viz.com</a>{' '}
          that has a dedicated article.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="39_Bad_boxplot1"
            caption="Basic boxplot. You can quickly read the median, quartiles and outliers of each group."
            linkTo="/39-hidden-data-under-boxplot"
          />
          <ChartImageContainer
            imgName="39_Bad_boxplot2"
            caption="If you add individual points with jitter, a bimodal distribution appears for group B"
            linkTo="/39-hidden-data-under-boxplot"
          />
          <ChartImageContainer
            imgName="39_Bad_boxplot3"
            caption="If you have a very large dataset, the violin plot is a better alternative than jittering"
            linkTo="/39-hidden-data-under-boxplot"
          />
        </ChartGrid>
        <Link href="/39-hidden-data-under-boxplot" className={buttonVariants({ size: 'sm' })}>
          Code and more
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Boxplots with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better charts easily. The <code>boxplot</code>{' '}
          function should get you started in minutes. The examples below aim at showcasing the various possibilities
          this function offers.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="30_Basic_Box_seaborn2"
            caption="Let's start basic. The most simple boxplot, based on 3 differents input formats"
            linkTo="/30-basic-boxplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="33_Custom_Boxplot_color_Seaborn5"
            caption="Everything you need concerning color customization on your boxplot: transparency, palette in use, manual control.."
            linkTo="/33-control-colors-of-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="33_Custom_Boxplot_color_Seaborn4"
            caption="Learn how to highlight a specific group in the dataset to make your point more obvious"
            linkTo="/33-control-colors-of-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="34_Grouped_Boxplot_Seaborn"
            caption="If you have group and subgroups, you can build a grouped boxplot"
            linkTo="/34-grouped-boxplot"
          />
          <ChartImageContainer
            imgName="35_Specific_order_Boxplot_Seaborn1"
            caption="Control the order of groups in the boxplot. It makes the chart more insightful"
            linkTo="/35-control-order-of-boxplot"
          />
          <ChartImageContainer
            imgName="36_Boxplot_with_Jitter_Seaborn"
            caption="To avoid hiding information, you can add individual data points with jitter"
            linkTo="/36-add-jitter-over-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="38_Number_of_obs_on_boxplot_seaborn"
            caption="Since individual data points are hidden, it is a good practice to show the sample size under each box"
            linkTo="/38-show-number-of-observation-on-boxplot"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn1-1"
            caption="Customization: border width"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn2"
            caption="Customization: use notch"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn3"
            caption="Customization: box width"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="31-horizontal-boxplot-with-seaborn"
            caption="Horizontal boxplot with seaborn"
            linkTo="/31-horizontal-boxplot-with-seaborn"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="matplotlib">
          <Matplotlib />
          Boxplots with <code>Matplotlib</code>
        </h2>
        <p>
          <Link href="/matplotlib">Matplotlib</Link> also has a <code>boxplot()</code> function made to build
          boxplots.
        </p>
        <p>The following tutorials will guide you from its basic usage to the finest customization:</p>
        <ChartGrid>
          <ChartImageContainer
            imgName="533-introduction-boxplots-matplotlib"
            caption="Simple boxplot with matplotlib"
            linkTo="/533-introduction-boxplots-matplotlib"
          />
          <ChartImageContainer
            imgName="542-custom-boxplots-matplotlib"
            caption="Flipped, notched and customized boxplot"
            linkTo="/542-custom-boxplots-matplotlib"
          />
          <ChartImageContainer
            imgName="543-grouped-boxplots-matplotlib"
            caption="Grouped boxplot"
            linkTo="/543-grouped-boxplots-matplotlib"
          />
          <ChartImageContainer
            imgName="509-introduction-to-swarm-plot-in-matplotlib-3"
            caption="Beeswarm and boxplot combination"
            linkTo="/509-introduction-to-swarm-plot-in-matplotlib"
          />
          <ChartImageContainer
            imgName="557-anova-visualization-with-matplotlib-1"
            caption="Boxplot and ANOVA results on top"
            linkTo="/557-anova-visualization-with-matplotlib"
          />
          <ChartImageContainer
            imgName="534-highly-customized-layout"
            caption="Subplot, title, and margin customization"
            linkTo="/534-highly-customized-layout"
          />
          <ChartImageContainer
            imgName="584-introduction-hatch-matplotlib-4"
            caption="Add patterns to your boxplot"
            linkTo="/584-introduction-hatch-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best python boxplot examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often using{' '}
          <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a> tries to display (or translate from
          R) some of the best creations and explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <ChartGrid cols={2}>
          <Link href="/web-ggbetweenstats-with-matplotlib" className="block">
            <ChartImage
              imgName="web-ggbetweenstats-with-matplotlib-square"
              caption="A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top."
            />
          </Link>
          <Link href="/raincloud-plot-with-matplotlib-and-ptitprince" className="block">
            <ChartImage
              imgName="raincloud-plot-with-matplotlib-and-ptitprince"
              caption="Combining boxplot and density chart. A great way to display the distribution of a variable for several groups."
            />
          </Link>
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
