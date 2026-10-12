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

// Note: the former page passed a misspelled "seoDesciption" prop, so no meta description was set.
export const metadata: Metadata = buildMetadata({
  title: 'Connected Scatterplot',
  path: '/connected-scatter-plot/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>connected scatterplot</a> is a <a href='https://python-graph-gallery.com/line-chart/'>line chart</a> where each data point is shown by a circle or any type of marker. This section explains how to build a connected scatterplot with <code>Python</code>, using both the <code>Matplotlib</code> and the <code>Seaborn</code> libraries.</p>";

const quickCode = `# libraries
  import matplotlib.pyplot as plt
  import numpy as np
  import pandas as pd

  # data
  df = pd.DataFrame({
      'x_axis': range(1,10),
      'y_axis': np.random.randn(9)*80+range(1,10)
  })

  # plot
  plt.plot('x_axis', 'y_axis', data=df, linestyle='-', marker='o')
  plt.show()
`;

export default function ConnectedScatter() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription
          title="Connected Scatterplot"
          description={chartDescription}
          chartType="connectedScatter"
        />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              Building a connected scatterplot with Python and Matplotlib is a breeze thanks to the <code>plot()</code>{' '}
              function. The 2 first argumenst are the X and Y values respectively, which can be stored in a{' '}
              <code>pandas</code> data frame.
            </p>
            <p>
              The <code>linestyle</code> and <code>marker</code> arguments allow to use line and circles to make it look
              like a connected scatterplot. It means everything is very close to a{' '}
              <Link href="/line-chart">line chart</Link> or a <Link href="/scatter-plot">scatterplot</Link> that are
              extensively described in the gallery.
            </p>
          </div>
          <div>
            <Link href={'/132-basic-connected-scatterplot'}>
              <ChartImage
                imgName="132_Matplotlib-connected-scatterplot"
                caption="Basic connected scatterplot with Python and Seaborn."
              />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10">
        <h2 id="Warning">&#9888;&#65039; Two types of connected scatterplot</h2>
        <p>There are two types of connected scatterplot, and it often creates confusion.</p>
        <p>
          The <u>first</u> is simply a <Link href="/line-chart">lineplot</Link> with dots added on top of it. It takes
          as input 2 numeric variables only. The <u>second</u> shows the relationship between 2 numeric variables
          across time. It requires 3 numeric variables as input.
        </p>
        <p>
          Confusing? Visit <a href="https://www.data-to-viz.com/graph/connectedscatter.html">data-to-viz</a> to
          clarify..
        </p>
        <a
          href="https://www.data-to-viz.com/graph/connectedscatter.html"
          className={buttonVariants({ size: 'sm' })}
        >
          Read more
        </a>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Connected scatterplot with <code>Seaborn</code>
        </h2>
        <p>
          Building a connected scatterplot with <code>Seaborn</code> looks pretty much the same as for a{' '}
          <Link href="/line-chart">line chart</Link>. It is made thanks to the <code>lineplot()</code> function.
        </p>
        <p>
          Click the following images to get a long form tutorial on how to create a <b>basic connected scatterplot</b>{' '}
          with Seaborn, how to draw <b>multiple groups</b> and how to <b>customize the lines</b> and the{' '}
          <b>markers</b>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="508-connected-scatter-plot-seaborn-1"
            caption="Basic connected scatterplot with Python and Seaborn"
            linkTo="/508-connected-scatter-plot-seaborn"
          />
          <ChartImageContainer
            imgName="508-connected-scatter-plot-seaborn-2"
            caption="Connected scatterplot with multiple groups (Seaborn)"
            linkTo="/508-connected-scatter-plot-seaborn"
          />
          <ChartImageContainer
            imgName="508-connected-scatter-plot-seaborn-4"
            caption="Connected scatterplot: customize markers and lines (Seaborn)"
            linkTo="/508-connected-scatter-plot-seaborn"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Connected scatterplot with <code>Matplotlib</code>
        </h2>
        <p>
          As for <Link href="/scatter-plot">scatterplots</Link>, <code>Matplotlib</code> will help us build a bubble
          plot thanks to the the <code>plt.scatter()</code> function. This function provides a <code>s</code> parameter
          allowing to pass a third variable that will be mapped to the markers size.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="106_seaborn_style_on_plt1"
            caption="Basic connected scatterplot with Python and Matplotlib"
            linkTo="/106-seaborn-style-on-matplotlib-plot"
          />
          <ChartImageContainer
            imgName="194_matplotlib_subplot6"
            caption="Connected scatterplot on a split window"
            linkTo="/194-split-the-graphic-window-with-subplot"
          />
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="How to customize line and markers with Matplotlib"
            linkTo="/122-multiple-lines-chart"
          />
          <ChartImageContainer
            imgName="132-basic-connected-scatterplot"
            caption="Some more connected scatterplot examples with matplotlib"
            linkTo="/132-basic-connected-scatterplot"
          />
        </ChartGrid>
        <p>
          Cheatsheet: line customization with <code>Matplotlib</code> and the <code>linestyle</code> parameter.
        </p>
        <div className="max-w-[350px]">
          <Link href={'/121-line-chart-customization'}>
            <ChartImage
              imgName={'121_Custom_line_plot4'}
              caption={'Cheat sheet: line customization with matplotlib'}
            />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Connected scatterplot for 2 variables
        </h2>
        <p>
          As explained above, a connected scatterplot can also be base on 3 numeric variables. It allows to study the
          evolution of 2 variables (placed on the X and on the Y axis).
        </p>
        <div className="max-w-[550px]">
          <Link href={'/connected-scatterplot-for-evolution'}>
            <ChartImage
              imgName={'connected-scatterplot-for-evolution'}
              caption={'Connected scatterplot to show the evolution of 2 variables'}
            />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best python connected scatterplot examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often using{' '}
          <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a> tries to display (or translate from R)
          some of the best creations and explain how their source code works. If you want to display your work here,
          please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <ChartGrid cols={2}>
          <ChartImageContainer
            imgName={'web-text-repel-with-matplotlib-square'}
            caption={'Learn how to use the adjustText library to add many labels with no overlaps.'}
            linkTo={'/web-text-repel-with-matplotlib'}
          />
          <ChartImageContainer
            imgName={'web-highlighted-lineplot-with-faceting'}
            caption={
              'A multipanel connected scatterplot, with several groups displayed and one highlighted per panel.'
            }
            linkTo={'/web-highlighted-lineplot-with-faceting'}
          />
        </ChartGrid>
        <div className="md:w-2/3">
          <ChartImageContainer
            imgName={'web-stacked-charts'}
            caption={'A connected scatterplot with a word cloud for the background.'}
            linkTo={'/web-stacked-charts'}
          />
        </div>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10" id="related">
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
