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
import { Matplotlib } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Three-Dimensional plotting',
  seoDescription: 'A collection of 3d chart examples made with Python, coming with explanation and reproducible code',
  path: '/3d/',
});

const chartDescription =
  '<p>Python allows to build 3D charts thanks to the <code>mplot3d</code> toolkit of the <code>matplotlib</code> library. However, please note that 3d charts are most often a bad practice. This section focuses on 3d scatter plots and surface plots that are some interesting use cases.';

const quickCode = `# libraries
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Dataset
df=pd.DataFrame({'X': range(1,101), 'Y': np.random.randn(100)*15+range(1,101), 'Z': (np.random.randn(100)*15+range(1,101))*2 })

# plot
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(df['X'], df['Y'], df['Z'], c='skyblue', s=60)
ax.view_init(30, 185)
plt.show()
`;

export default function ThreeD() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Three-Dimensional plotting" description={chartDescription} chartType="3d" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              The <code>mplot3d</code> toolkit of <code>matplotlib</code> is used here.
            </p>
            <ul>
              <li>
                The projection parameter of the add_subplot() function is set to <code>3d</code>
              </li>
              <li>
                The usual <code>scatter()</code> function can now be called with 3 data inputs for the X, Y and Z axis
              </li>
              <li>
                The camera position can be set thanks to the <code>view_init()</code> function
              </li>
            </ul>
          </div>
          <div>
            <Link href={'/370-3d-scatterplot'}>
              <ChartImage imgName="370_3D_scatterplot" caption="Basic 3d scatterplot with Python & Matplotlib." />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
        <Link href="/341-python-gapminder-animation" className={buttonVariants({ size: 'sm' })}>
          See code
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Warning">&#9888;&#65039; Mind the 3d</h2>
        <p>
          Three dimensional objects are very popular but negatively affect the <u>accuracy</u> and <u>speed</u> at
          which one can interpret a graphic in most cases.
        </p>
        <p>
          In the example below, the brown section in front looks much bigger than the pink section in the back, even
          tough their real values are 30% vs 35%. Data is distorted.
        </p>
        <div className="mx-auto max-w-[350px]">
          <a href="https://www.data-to-viz.com/caveat/3d.html" className="block">
            <ChartImage imgName={'3d_is_bad'} caption={'An example of a bad 3d pie chart'} />
          </a>
        </div>
        <a href="https://www.data-to-viz.com/caveat/3d.html" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          Full article
        </a>
        <p className="mt-8">
          <u>Note</u>: remember pie charts should be avoided{' '}
          <a href="https://www.data-to-viz.com/caveat/pie.html">most of the time</a>
        </p>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="3d scatterplot">
          <Matplotlib />
          Three-dimensional scatterplots with <code>Matplotlib</code>
        </h2>
        <p>
          As described in the quick start section above, a three dimensional can be built with python thanks to the
          <code>mplot3d</code> toolkit of <code>matplotlib</code>. The example below will guide you through its usage to
          get this figure:
        </p>
        <div className="max-w-[450px]">
          <Link href={'/370-3d-scatterplot'}>
            <ChartImage imgName="370_3D_scatterplot" caption="Basic 3d scatterplot with Python & Matplotlib." />
          </Link>
        </div>
        <p>
          This technique is useful to visualize the result of a PCA (Principal Component Analysis). The following
          example explains how to run a PCA with python and check its result with a 3d scatterplot:
        </p>
        <div className="max-w-[450px]">
          <Link href="/372-3d-pca-result">
            <ChartImage imgName={'372_3D_PCA_result'} caption={'PCA result shown as a 3D scatterplot with python'} />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Surface plot">
          <Matplotlib />
          Surface plot with <code>Matplotlib</code>
        </h2>
        <p>
          A surface plot considers the X and Y coordinates as latitude and longitude, and Z as the altitude. It
          represents the dataset as a surface by interpolating positions between data points.
        </p>
        <p>
          This kind of chart can also be done thanks to the <code>mplot3d</code> toolkit of <code>matplotlib</code>.
          The posts linked below explain how to use and customize the <code>trisurf()</code> function that is used for
          surface plots.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="371_3D_Surface_plot_volcano_1"
            caption="Most basic surface plot with Python"
            linkTo="/371-surface-plot"
          />
          <ChartImageContainer
            imgName="371_3D_Surface_plot_volcano_2"
            caption="Plotting only one half of the heatmap"
            linkTo="/371-surface-plot"
          />
          <ChartImageContainer
            imgName="371_3D_Surface_plot_volcano_3"
            caption="Seaborn heatmap customization: grid"
            linkTo="/371-surface-plot"
          />
        </ChartGrid>
        <div className="mx-auto max-w-[450px]">
          <Link href={'/371-surface-plot'}>
            <ChartImage
              imgName="371_3D_Surface_plot_volcano_4"
              caption="Basic 3d scatterplot with Python & Matplotlib."
            />
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Animated 3d">
          <Matplotlib />
          Three dimensional plot and animation
        </h2>
        <p>
          You can build an animation from a 3d chart by changing the camera position at each iteration of a loop. The
          example below explains how to do it for a surface plot but visit the animation section for more.
        </p>
        <Link href={'/342-animation-on-3d-plot'} className="block">
          <img
            src="/animations/volcano.gif"
            alt="Animated volcano plot with Python"
            width={640}
            height={480}
            loading="lazy"
            className="h-auto w-full max-w-[900px]"
          />
        </Link>
        <Link href="/animation" className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
          Animation section
        </Link>
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
