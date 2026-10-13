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
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: '2d density chart',
  seoDescription:
    'A collection of 2d density chart examples made with Python, coming with explanation and reproducible code',
  path: '/2d-density-plot/',
});

const chartDescription =
  "<p>This section explains how to build a <a href='https://www.data-to-viz.com/graph/density2d.html'>2d density chart</a> or a <a href='https://www.data-to-viz.com/graph/density2d.html'>2d histogram</a> with python. Those chart types allow to visualize the combined distribution of two quantitative variables. They can be built with <code>Matplotlib</code> or <code>Seaborn</code>.</p>";

export default function TwoDDensityPlot() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="2D Density Chart" description={chartDescription} chartType="density2d" />
      </div>

      <div className="wrapper">
        <h2 id="Warning">💡 What is a 2D density chart?</h2>
        <p>
          There are several chart types allowing to visualize the distribution of a combination of{' '}
          <b>2 numeric variables</b>. They always have a variable represented on the X axis, the other on the Y axis,
          like for a <Link href="/scatter-plot">scatterplot</Link> (left).
        </p>
        <p>
          Then the number of observations within a particular area of the 2D space is counted and represented with a{' '}
          <b>color gradient</b>. The shape can vary: hexagones result in a <code>hexbin chart</code>, squares in a{' '}
          <code>2d histogram</code>. A kernel density estimate can be used to get a <code>2d density plots</code> or
          a <code>contour plots</code>
        </p>
        <div className="mx-auto my-6 max-w-[750px]">
          <Link href="/86-avoid-overlapping-in-scatterplot-with-2d-density" className="block">
            <ChartImage imgName="what-is-density-chart" caption="Cheat sheet: line customization with matplotlib" />
          </Link>
        </div>
        <p>
          Confusing? Visit <a href="https://www.data-to-viz.com/graph/density2d.html">data-to-viz</a> to clarify..
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="https://www.data-to-viz.com/graph/density2d.html" className={buttonVariants({ size: 'sm' })}>
            More viz explanation
          </a>
          <Link
            href="/86-avoid-overlapping-in-scatterplot-with-2d-density"
            className={buttonVariants({ size: 'sm' })}
          >
            Show me the code
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Contour">
          <Seaborn />
          Contour plot with <code>Seaborn</code>
        </h2>
        <p>
          The contour plot can be easily built thanks to the <code>kdeplot()</code> function of the Seaborn library.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot1"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot2"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot3"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="2d histogram">
          <Matplotlib />
          2D histogram with <code>Matplotlib</code>
        </h2>
        <p>
          Build a 2d histogram thanks to the <code>hist2d()</code> function of the <code>Matplotlib</code> library.
          Do not forget to play with the <code>bins</code> argument to find the value representing the best your
          data.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="83-basic-2d-histograms-with-matplotlib-1"
            caption="Basic 2D histogram with bins customization"
            linkTo="/83-basic-2d-histograms-with-matplotlib"
          />
          <ChartImageContainer
            imgName="83-basic-2d-histograms-with-matplotlib-2"
            caption="Control the color in the 2d histogram."
            linkTo="/83-basic-2d-histograms-with-matplotlib"
          />
          <ChartImageContainer
            imgName="83-basic-2d-histograms-with-matplotlib-3"
            caption="Black and white, color scale legend."
            linkTo="/83-basic-2d-histograms-with-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Hexbin">
          <Matplotlib />
          Hexbin chart with <code>Matplotlib</code>
        </h2>
        <p>
          Split the graph area in hexagones and you get a hexbin density chart. This time, it is{' '}
          <code>matplotlib</code> that gets you covered thanks to its <code>hexbin()</code> function.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="84-hexbin-plot-with-matplotlib-1"
            caption="Basic hexbin with bins customization"
            linkTo="/84-hexbin-plot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="84-hexbin-plot-with-matplotlib-2"
            caption="Control the color in the hexbin."
            linkTo="/84-hexbin-plot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="84-hexbin-plot-with-matplotlib-3"
            caption="Black and white, color scale legend."
            linkTo="/84-hexbin-plot-with-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="2d density">
          <Matplotlib />
          2d density chart with <code>Matplotlib</code>
        </h2>
        <p>
          2D densities are computed thanks to the <code>gaussian_kde()</code> function and plotted thanks with the{' '}
          <code>pcolormesh()</code> function of <code>matplotlib()</code>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="85-density-plot-with-matplotlib-1"
            caption="Basic 2d density with bins customization"
            linkTo="/85-density-plot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="85-density-plot-with-matplotlib-2"
            caption="Control the color in the 2d density."
            linkTo="/85-density-plot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="85-density-plot-with-matplotlib-3"
            caption="Black and white, color scale legend."
            linkTo="/85-density-plot-with-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Marginal plot">
          <Matplotlib />
          2d density and marginal plots
        </h2>
        <p>
          2D densities often combined with marginal distributions. It helps to highlight the distribution of both
          variables individually. It is pretty straightforward to add thanks to the <code>jointplot()</code>{' '}
          function of the <code>Seaborn</code> library.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="82_seaborn_jointplot2"
            caption="Marginal distribution and hexbin."
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot3"
            caption="Marginal distribution and contour."
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot5"
            caption="General customization."
            linkTo="/82-marginal-plot-with-seaborn"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper" id="related">
        <ChartFamilySection chartFamily="correlation" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <TableOfContent />
    </>
  );
}
