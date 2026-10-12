import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartImage from '@/components/ChartImage';
import ChartGrid from '@/components/ChartGrid';
import CodeChunk from '@/components/CodeChunk';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import FunctionExploration from '@/components/FunctionExploration';
import { Matplotlib, Seaborn } from '@/components/MiscellaneousLogos';
import { scatterplot } from '@/lib/functions/scatterplot';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Bubble Chart Examples with Code',
  seoDescription:
    'A collection of bubble chart examples made with Python, coming with explanation and reproducible code',
  path: '/bubble-plot/',
});

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/bubble.html'>bubble plot</a> is a <a href='https://python-graph-gallery.com/scatter-plot'>scatterplot</a> where the circle size is mapped to the value of a third numeric variable. This section shows many bubble plots made with <code>Python</code>, using both the <code>Matplotlib</code> and <code>Seaborn</code> libraries.</p>";

const quickCode = `# libraries
import matplotlib.pyplot as plt
import seaborn as sns
from gapminder import gapminder # data set

# data
data = gapminder.loc[gapminder.year == 2007]

# use the scatterplot function to build the bubble map
sns.scatterplot(data=data, x="gdpPercap", y="lifeExp", size="pop", legend=False, sizes=(20, 2000))

# show the graph
plt.show()
`;

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Bubble plot" description={chartDescription} chartType="bubble" />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              The <code>scatterplot()</code> function of <code>seaborn</code>{' '}
              also allows to build bubble charts. Indeed, it has a{' '}
              <code>size</code> parameter that controls circle size according to
              a numeric variable of the dataset.🔥
            </p>
          </div>
          <div>
            <Link href={'/bubble-plot-with-seaborn'}>
              <ChartImage imgName="bubble-plot-with-seaborn" caption="Basic bubble chart with Python and Seaborn." />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Bubble plot with <code>Seaborn</code>
        </h2>
        <p>
          <code>Seaborn</code> is the best tool to quickly build a quality
          bubble chart. The example below are based on the famous{' '}
          <code>gapminder</code> dataset that shows the relationship between gdp
          per capita, life expectancy and population of world countries.
        </p>
        <p>
          The examples below start simple by calling the{' '}
          <code>scatterplot()</code> function with the minimum set of
          parameters. It then show how to change bubble colors to represent a
          fourth variable, improve general styling, tweak the legend and more.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="bubble-plot-with-seaborn"
            caption="Basic bubble chart with Python and Seaborn."
            linkTo="/bubble-plot-with-seaborn"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10">
        <FunctionExploration funDetails={scatterplot} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Bubble plot with <code>Matplotlib</code>
        </h2>
        <p>
          As for <Link href="/scatter-plot">scatterplots</Link>,{' '}
          <code>Matplotlib</code> will help us build a bubble plot thanks to the
          the <code>plt.scatter()</code> function. This function provides a{' '}
          <code>s</code> parameter allowing to pass a third variable that will
          be mapped to the markers size.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="270_Basic_Bubble_plot"
            caption="Most basic bubble plot with Python and Matplotlib"
            linkTo="/270-basic-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization1"
            caption="Bubble plot customization: color"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization2"
            caption="Bubble plot customization: shape"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization3"
            caption="Bubble plot customization: size"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization4"
            caption="Bubble plot customization: stroke"
            linkTo="/271-custom-your-bubble-plot"
          />
        </ChartGrid>
        <p>
          Note that it is a common practice to map a fourth variable to the
          markers colors thanks to the <code>c</code> parameter. This way,
          you&apos;re now looking a 4 variables in the same time, on the same chart
          🎉.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="272_Bubble_plot_with_mapped_color"
            caption="A bubble chart width 4 dimensions: x, y, size & color"
            linkTo="/272-map-a-color-to-bubble-plot"
          />
          <ChartImageContainer
            imgName="bubble-plot-gapminder"
            caption="Bubble plot of the gapminder dataset"
            linkTo="/341-python-gapminder-animation"
          />
        </ChartGrid>
        <p>
          A very common task when it comes to bubble chart is to add a proper
          legend to explain what colors and sizes mean. The blogpost below is a
          deep-dive into matplotlib legend and should be of great help for this
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="custom-legend-with-matplotlib6"
            caption="Legend customization: how to control location, add a background, customize labels and markers and more"
            linkTo="/custom-legend-with-matplotlib"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Best">
          <Matplotlib />
          Best python bubble chart examples
        </h2>
        <p>
          The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>). The{' '}
          <a href="https://python-graph-gallery.com">Python graph gallery</a>{' '}
          tries to display (or translate from R) some of the best creations and
          explain how their source code works. If you want to display your work
          here, please drop me a word or even better, submit a{' '}
          <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>
          !
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName={'web-text-repel-with-matplotlib-square'}
            caption={'Learn how to use the adjustText library to add many labels with no overlaps.'}
            linkTo={'/web-text-repel-with-matplotlib'}
          />
          <ChartImageContainer
            imgName={'web-scatterplot-text-annotation-and-regression-matplotlib-square'}
            caption={'Scatterplot with regression fit, group colors and non-overlapping labels.'}
            linkTo={'/web-scatterplot-text-annotation-and-regression-matplotlib'}
          />
          <ChartImageContainer
            imgName={'web-scatterplot-astronaut-square'}
            caption={
              'Dark mode scatterplot with custom annotations, title and explanations. All of that with a very good appearance!'
            }
            linkTo={'/web-scatterplot-astronaut'}
          />
          <ChartImageContainer
            imgName={'web-scatterplot-with-images-in-circles'}
            caption={'A scatter plot with images inside each marker to provide additional context'}
            linkTo={'/web-scatterplot-with-images-in-circles'}
          />
          <ChartImageContainer
            imgName={'web-bubble-plot-with-annotations-and-custom-features'}
            caption={'A scatter plot with custom annotations and colors, with some markers being circled'}
            linkTo={'/web-bubble-plot-with-annotations-and-custom-features'}
          />
        </ChartGrid>
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
