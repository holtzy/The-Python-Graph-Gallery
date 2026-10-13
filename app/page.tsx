import type { Metadata } from 'next';
import Link from 'next/link';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import MatplotlibJourneyPromo from '@/components/MatplotlibJourneyPromo';
import ChartScrollStrip, { type StripChart } from '@/components/ChartScrollStrip';
import { Matplotlib, Pandas, Plotly, Plotnine, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { websiteJsonLd } from '@/lib/jsonld';
import JsonLd from '@/components/JsonLd';
import { getGraphImage } from '@/lib/images';
import { listOfBestCharts } from '@/lib/list-of-best-charts';

export const metadata: Metadata = buildMetadata({
  title: 'Python Graph Gallery',
  seoDescription:
    'The Python Graph Gallery displays hundreds of charts made with Python, always with explanation and reproducible code',
  path: '/',
});

const libraries = [
  {
    logo: <Matplotlib />,
    name: 'Matplotlib',
    href: '/matplotlib',
    description: (
      <>
        The <b>foundation</b> of Python visualization. Offers a wide array of customizable 2D plots and an{' '}
        <b>extensive set of tools</b> for creating intricate figures and charts.
      </>
    ),
  },
  {
    logo: <Seaborn />,
    name: 'Seaborn',
    href: '/seaborn',
    description: (
      <>
        Built atop Matplotlib, Seaborn <b>elevates</b> data visualization by providing a higher-level interface and
        stunning default themes.
      </>
    ),
  },
  {
    logo: <Pandas />,
    name: 'Pandas',
    href: '/pandas',
    description: (
      <>
        Beyond its powerful <b>data manipulation</b> capabilities, Pandas offers convenient plotting methods, enabling
        users to visualize data directly from DataFrame and Series objects.
      </>
    ),
  },
  {
    logo: <Plotly />,
    name: 'Plotly',
    href: '/plotly',
    description: (
      <>
        Delivering <b>interactive</b> and browser-based visualizations, Plotly allows users to craft visually
        captivating charts, bridging the gap between static graphs and <b>web-based interactivity</b>.
      </>
    ),
  },
  {
    logo: <Plotnine />,
    name: 'Plotnine',
    href: '/plotnine',
    description: (
      <>
        Plotnine is a Python library for creating statistical visualizations with a simple{' '}
        <b>grammar of graphics</b> interface, inspired by{' '}
        <a href="https://r-graph-gallery.com/ggplot2-package.html">ggplot2</a> in R.
      </>
    ),
  },
];

// Charts displayed in the voronoi patchwork (webp thumbnails of public/graph)
const bestCharts: StripChart[] = listOfBestCharts.map((chart) => ({
  link: chart.link,
  title: chart.title,
  author: chart.author,
  alt: chart.alt,
  src: getGraphImage(chart.img)?.thumb ?? '/graph/' + chart.img,
}));

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 pt-24 pb-28 text-center sm:pt-36 sm:pb-36">
          <h1>The Python Graph Gallery</h1>
          <p className="!mt-6 max-w-lg text-lg leading-8">
            A collection of <b>hundreds of charts</b> made with <code>Python</code>, from beginner-friendly basics to
            stunning dataviz. Each example comes with its <b>reproducible code</b> and explanations. Most of them use{' '}
            <Link href="/matplotlib">matplotlib</Link> and <Link href="/seaborn">seaborn</Link>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Link href="/best-python-chart-examples" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              Best examples
            </Link>
            <a href="#gallery" className={buttonVariants({ size: 'lg' })}>
              Browse charts
            </a>
          </div>
        </div>

        <p className="absolute right-6 bottom-6 hidden text-sm leading-5 text-muted-foreground lg:block">
          💡 Chart classification follows the
          <br />
          <a href="https://www.data-to-viz.com" target="_blank" rel="noreferrer" className="ml-6 underline underline-offset-4">
            Data To Viz project
          </a>
          .
        </p>
      </section>

      {/* All chart types */}
      <div id="gallery" className="wrapper scroll-mt-16">
        <h2 className="!mt-0">The biggest list of python chart examples</h2>
        <p>
          Charts are <b>classified</b> by chart type. Each section starts with a <b>foundational tutorial</b>, then
          goes into the most common <b>customizations</b>.
        </p>
        <div className="mt-4">
          <ChartFamilySection chartFamily="distribution" variant="family" />
          <ChartFamilySection chartFamily="correlation" variant="family" />
          <ChartFamilySection chartFamily="ranking" variant="family" />
          <ChartFamilySection chartFamily="partOfAWhole" variant="family" />
          <ChartFamilySection chartFamily="evolution" variant="family" />
          <ChartFamilySection chartFamily="map" variant="family" />
          <ChartFamilySection chartFamily="flow" variant="family" />
          <ChartFamilySection chartFamily="general" variant="family" />
        </div>
      </div>

      <div className="wrapper">
        <h2>Hunting the most beautiful Python charts</h2>
        <p>
          Explore our curated collection of the <b>finest Python charts</b>, handpicked for their superior{' '}
          <b>design</b> and <b>accuracy</b>. Go beyond the defaults with chart examples that are both visually stunning
          and instructive.
        </p>
        <p>
          Accompanied by in-depth tutorials, this section will please seasoned professionals aspiring to{' '}
          <b>elevate their craft</b>. Featuring the finest charts on the web, we stay ahead of the curve, showcasing the
          latest tips, tricks, and <b>advanced techniques</b> in data visualization.
        </p>
        <div className="mt-6 mb-8">
          <Link href="/best-python-chart-examples" className={buttonVariants({ size: 'lg' })}>
            Check the best Examples
          </Link>
        </div>
        <ChartScrollStrip charts={bestCharts} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 className="!mt-0">Palette color finder</h2>
        <p>
          Selecting <b>optimal chart colors</b> can be challenging and time-intensive. The <a>pypalettes</a> library
          simplifies this process by providing access to over <b>2,500 color palettes</b> with a single line of code.
        </p>
        <p>
          Additionally, the Python Graph Gallery features a <a href="/color-palette-finder">dedicated page</a> where you
          can <b>browse all these palettes</b> and preview their appearance on your charts.
        </p>
        <a href="/color-palette-finder" className="mt-8 block">
          <img
            src="/asset/pypalettes.gif"
            alt="Color palette finder demo"
            loading="lazy"
            className="h-auto w-full max-w-[900px] rounded-md border shadow-xs"
          />
        </a>
        <div className="mt-10 flex justify-center">
          <Link href="/color-palette-finder" className={buttonVariants({ size: 'lg' })}>
            Use the palette finder
          </Link>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 className="!mt-0">Python Graphing with State-of-the-Art Libraries</h2>
        <p>
          The python graph gallery relies on the <b>latest</b> and most <b>powerful</b> charting libraries.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {libraries.map((lib) => (
            <div key={lib.name} className="flex flex-col rounded-lg border bg-card p-6 shadow-xs">
              <h3 className="!mt-0 flex items-center">
                {lib.logo}
                {lib.name}
              </h3>
              <p className="!mt-2 flex-1">{lib.description}</p>
              <Link
                href={lib.href}
                className={buttonVariants({ variant: 'outline', size: 'sm', className: 'mt-4 self-start' })}
              >
                Tutorial
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/best-dataviz-packages" className={buttonVariants({ size: 'lg' })}>
            Check the full list
          </Link>
        </div>
      </div>

      <Spacing />

      <MatplotlibJourneyPromo>
        <a href="https://www.matplotlib-journey.com">Matplotlib Journey</a> is an interactive online course crafted to
        transform you into a Matplotlib <b>dataviz expert</b>. It provides a clear, big-picture understanding of how data
        visualization works in Python, empowering you to grasp any example from the gallery with ease.
      </MatplotlibJourneyPromo>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <Spacing />
    </>
  );
}
