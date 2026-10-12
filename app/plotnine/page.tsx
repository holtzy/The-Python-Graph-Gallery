import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import CodeChunk from '@/components/CodeChunk';
import ChartGrid from '@/components/ChartGrid';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Plotnine',
  seoDescription: 'An overview of the plotnine library in Python',
  path: '/plotnine/',
});

const chartDescription = (
  <>
    <p>
      <code>Plotnine</code> is a library that allows to use the <b>grammar of graphics</b> in <code>Python</code>. It
      is based on the famous <code>ggplot2</code> library in <a href="https://r-graph-gallery.com">R</a>.
    </p>
    <p>
      Plotnine is a great tool to create <b>beautiful</b> and <b>complex</b> visualizations with a syntax that R users
      already know and love.
    </p>
  </>
);

const quickCode = `# Load plotnine
from plotnine import ggplot, geom_point, aes
import pandas as pd

# Sample data
x = [1,2,3,4,5,6,7,8,9,10]
y = [10,9,8,7,6,5,4,3,2,1]
df = pd.DataFrame({'x':x, 'y':y})

# Create a chart
(
ggplot(df, aes(x='x', y='y')) +
    geom_point()
)
`;

const codeInstall = `pip install plotnine`;

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Plotnine: ggplot in python" description={chartDescription} chartType="plotnine" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <p>
          Before using plotnine you need to install it. This can easily be done with <code>pip</code>:
        </p>
        <CodeChunk>{codeInstall}</CodeChunk>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p>
              The <b>Grammar of Graphics</b> is a way of thinking about how to build graphs. It is based on the idea
              that you can build a graph by <b>adding layers</b> to it. In this example, we add a layer of points to a
              graph.
            </p>
            <p>
              Once installed, you can either <b>import all the functions</b> from the library with{' '}
              <code>from plotnine import *</code> or import only the functions you need with{' '}
              <code>from plotnine import ggplot, geom_point</code>.
            </p>
          </div>
          <div className="md:col-span-5">
            <Link href={'/573-introduction-scatterplot-plotnine'}>
              <ChartImage imgName="quick-code-img-plotnine" caption="Most basic plotnine chart" />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Gallery">Scatter plot with plotnine</h2>
        <p>
          <a href="/scatter-plot">Scatter plots</a> are a great way to visualize the relationship between two numerical
          variables. The <code>plotnine</code> library makes it easy to thanks to its <code>geom_point()</code>{' '}
          function.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="573-introduction-scatterplot-plotnine-1"
            caption="Most basic scatterplot with plotnine"
            linkTo="/573-introduction-scatterplot-plotnine"
          />
          <ChartImageContainer
            imgName="573-introduction-scatterplot-plotnine-2"
            caption="Change color markers"
            linkTo="/573-introduction-scatterplot-plotnine"
          />
          <ChartImageContainer
            imgName="573-introduction-scatterplot-plotnine-3"
            caption="Color by group"
            linkTo="/573-introduction-scatterplot-plotnine"
          />
          <ChartImageContainer
            imgName="574-custom-marker-scatter-plotnine-1"
            caption="Change marker size"
            linkTo="/574-custom-marker-scatter-plotnine"
          />
          <ChartImageContainer
            imgName="574-custom-marker-scatter-plotnine-2"
            caption="Changer marker shape"
            linkTo="/574-custom-marker-scatter-plotnine"
          />
          <ChartImageContainer
            imgName="574-custom-marker-scatter-plotnine-3"
            caption="Changer marker transparency"
            linkTo="/574-custom-marker-scatter-plotnine"
          />
          <ChartImageContainer
            imgName="574-custom-marker-scatter-plotnine-4"
            caption="Custom edge colors"
            linkTo="/574-custom-marker-scatter-plotnine"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Gallery">Bar plot with plotnine</h2>
        <p>
          <a href="/bar-plot">Bar plots</a> are a great way to visualize the relationship between a categorical
          variable and a numerical one. The <code>plotnine</code> library makes it easy thanks to its{' '}
          <code>geom_bar()</code> function.
        </p>
        <p>
          The following examples show how to <b>create a basic bar plot</b> with plotnine and how to{' '}
          <b>customize it</b>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="576-introduction-barplot-plotnine-1"
            caption="Most simple barplot"
            linkTo="/576-introduction-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="576-introduction-barplot-plotnine-2"
            caption="Change color and edge color"
            linkTo="/576-introduction-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="576-introduction-barplot-plotnine-3"
            caption="Custom width of the bars"
            linkTo="/576-introduction-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="577-customize-barplot-plotnine-1"
            caption="Define one specific color per bar"
            linkTo="/577-customize-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="577-customize-barplot-plotnine-2"
            caption="Color bars according to a variable"
            linkTo="/577-customize-barplot-plotnine"
          />
          <ChartImageContainer
            imgName="577-customize-barplot-plotnine-3"
            caption="Flip the x and y axis"
            linkTo="/577-customize-barplot-plotnine"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Gallery">Histogram with plotnine</h2>
        <p>
          <a href="/histogram">Bar plots</a> are a great way to visualize the distribution of a numerical variable. The{' '}
          <code>plotnine</code> library makes it easy thanks to its <code>geom_histogram()</code> function.
        </p>
        <p>
          The following examples show how to <b>create a basic histogram</b> with plotnine and how to{' '}
          <b>customize it</b>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="578-introduction-histogram-plotnine-1"
            caption="Most basic histogram with plotnine"
            linkTo="/578-introduction-histogram-plotnine"
          />
          <ChartImageContainer
            imgName="578-introduction-histogram-plotnine-2"
            caption="Control bar color"
            linkTo="/578-introduction-histogram-plotnine"
          />
          <ChartImageContainer
            imgName="578-introduction-histogram-plotnine-3"
            caption="Custom style with theme, colors and opacity"
            linkTo="/578-introduction-histogram-plotnine"
          />
          <ChartImageContainer
            imgName="579-multiple-histograms-plotnine-1"
            caption="Split histogram by group"
            linkTo="/579-multiple-histograms-plotnine"
          />
          <ChartImageContainer
            imgName="579-multiple-histograms-plotnine-2"
            caption="Mirror histogram to compare 2 variables"
            linkTo="/579-multiple-histograms-plotnine"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Gallery">Change theme with plotnine</h2>
        <p>
          <code>Plotnine</code> allows to <b>change the theme</b> of the chart. This can easily be done by adding{' '}
          <code>theme_*</code> functions to the chart.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="575-custom-theme-plotnine-2"
            caption="White theme with plotnine"
            linkTo="/575-custom-theme-plotnine"
          />
          <ChartImageContainer
            imgName="575-custom-theme-plotnine-3"
            caption="Dark theme with plotnine"
            linkTo="/575-custom-theme-plotnine"
          />
          <ChartImageContainer
            imgName="575-custom-theme-plotnine-4"
            caption="Theme withouth grid lines"
            linkTo="/575-custom-theme-plotnine"
          />
        </ChartGrid>
      </div>

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
