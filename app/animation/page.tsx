import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import CodeChunk from '@/components/CodeChunk';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Animation',
  seoDescription:
    'A collection of animated charts made with Python and Matplotlib, coming with explanation and reproducible code',
  path: '/animation/',
});

const chartDescription =
  '<p>An animation is a sequence of <b>images displayed one after the other</b>. It is a powerful way to show a process or a <b>change over time</b>.</p><p>This page shows how to build animated charts with Python and <a href="https://www.python-graph-gallery.com/matplotlib">Matplotlib</a>.</p>';

const quickCode = `# libraries
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# initiate figure
fig, ax = plt.subplots(figsize=(10, 8), dpi=120)

def update(frame):
    ax.clear()
    ax.scatter(
      1+frame, 10+frame*10,
      s=600, alpha=0.5,
      edgecolors="black"
    )
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 100)
    return fig, ax

ani = FuncAnimation(fig, update, frames=range(10))
ani.save("my_animation.gif", fps=5)
`;

const Gif = ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
  <img src={src} alt={alt} width={width} height={height} loading="lazy" className="h-auto w-full max-w-[900px]" />
);

export default function AnimationPage() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Animation" description={chartDescription} chartType="animation" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              An animated chart can be build with <code>python</code> using the{' '}
              <code>FuncAnimation()</code> function from matplotlib. We follow these steps:
            </p>
            <ul>
              <li>Load libraries</li>
              <li>Open a dataset</li>
              <li>
                Define an <code>update</code> function used to build each frame of the animation
              </li>
              <li>
                Create the animation with <code>FuncAnimation()</code> and save it with <code>save()</code>
              </li>
            </ul>
          </div>
          <div>
            <Link href={'/340-scatterplot-animation'} className="block">
              <Gif src="/animations/scatter.gif" alt="Animation with python" width={1200} height={960} />
            </Link>
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
        <Link href="/340-scatterplot-animation" className={buttonVariants({ size: 'sm' })}>
          See code
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="&#8800; interaction">&#128161; Animation &#8800; Interaction</h2>
        <p>There is a common confusion between what animated and interactive charts are:</p>
        <ul>
          <li>
            <u>Animated</u> means a sequence of several static images is displayed. The user can't do anything except
            watching those images.
          </li>
          <li>
            <u>Interactive</u> means the user can interact with the chart: zoom in, hover over a shape to get a tooltip,
            click to have a menu... The user is not a spectator anymore, but also an actor.
          </li>
        </ul>
        <Link href="/plotly" className={buttonVariants({ size: 'sm' })}>
          Interactive Charts section
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          <code>Matplotlib</code> and <code>FuncAnimation()</code>
        </h2>
        <p>
          The <code>FuncAnimation()</code> function, a component of the <code>matplotlib.animation</code> module,
          facilitates the creation of animations by <strong>repeatedly invoking a function</strong> that updates the
          plot content with each iteration.
        </p>
        <p>
          Typically, you start by <strong>establishing a figure and an axis</strong>. Following this, an{' '}
          <code>update()</code> function is defined to modify the plot's content at every animation cycle.
        </p>
        <p>
          To complete the process, you <strong>generate the animation</strong> using <code>FuncAnimation()</code> and
          subsequently store it using the <code>save()</code> function.
        </p>
        <Link href={'/341-python-gapminder-animation'} className="block">
          <Gif
            src="/animations/gapminder-2.gif"
            alt="Basic animated scatterplot with python"
            width={1200}
            height={1200}
          />
        </Link>
        <p>
          The process is pretty much <b>the same</b> for a 3d chart. Here is an example with an animated volcano plot.
          Each iteration of the loop changes the <b>camera angle</b>, giving this feeling of travelling around the
          volcano.
        </p>
        <Link href={'/342-animation-on-3d-plot'} className="block">
          <Gif src="/animations/volcano.gif" alt="Animated volcano plot with Python" width={640} height={480} />
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Advanced uses cases</h2>
        <p>
          Animated charts can be highly impactful when illustrating a{' '}
          <b>process</b> or <b>change over time</b>. Here are a few examples that demonstrate their effectiveness.
        </p>
        <div className="grid items-center gap-6 md:grid-cols-3">
          <div>
            <p>
              This <b>real life</b> example illustrates the power of animated charts. The chart is a{' '}
              <a href="/stacked-area-plot">stacked area</a> chart with a text that is written{' '}
              <b>through the animation</b>.
            </p>
            <Link href="/web-animated-line-chart-with-annotation" className={buttonVariants({ size: 'sm' })}>
              See code
            </Link>
          </div>
          <div className="md:col-span-2">
            <Link href={'/web-animated-line-chart-with-annotation'} className="block">
              <img
                src="/animations/web-animation-with-text8.gif"
                alt="Animation with python"
                width={1440}
                height={960}
                loading="lazy"
                className="h-auto w-full"
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 grid items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Link href={'/web-animated-line-chart-with-text'} className="block">
              <img
                src="/animations/web-animated-line-chart-with-text-6.gif"
                alt="Animation with python"
                width={2500}
                height={1500}
                loading="lazy"
                className="h-auto w-full"
              />
            </Link>
          </div>
          <div>
            <p>
              This <a href="/line-chart">line chart</a>, or <b>race chart</b>, shows the evolution of the of global
              plastic production over time with a <b>smooth animation</b> and <b>highlighted text</b>.
            </p>
            <Link href="/web-animated-line-chart-with-text" className={buttonVariants({ size: 'sm' })}>
              See code
            </Link>
          </div>
        </div>
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
