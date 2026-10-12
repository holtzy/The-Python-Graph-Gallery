import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import Parallax from '@/components/Parallax';
import SubscribeButton from '@/components/SubscribeButton';
import MatplotlibJourneyPromo from '@/components/MatplotlibJourneyPromo';
import ChartScrollStrip, { type StripChart } from '@/components/ChartScrollStrip';
import { Matplotlib, Pandas, Plotly, Plotnine, Seaborn } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { getGraphImage } from '@/lib/images';
import { listOfBestCharts } from '@/lib/list-of-best-charts';

export const metadata: Metadata = buildMetadata({
  title: 'Python Graph Gallery',
  seoDescription:
    'The Python Graph Gallery displays hundreds of charts made with Python, always with explanation and reproduciible code',
  path: '/',
});

const siteDescription = (
  <>
    <p>
      👋 The Python Graph Gallery is a collection of <b>hundreds of charts</b> made with <code>Python</code>.
    </p>
    <p>
      Graphs are dispatched in about 40 sections following the <a href="https://www.data-to-viz.com">data-to-viz</a>{' '}
      classification. There are also sections dedicated to more general topics like{' '}
      <a href="https://python-graph-gallery.com/matplotlib/" target="_blank" rel="noreferrer">
        matplotlib
      </a>{' '}
      or{' '}
      <a href="https://python-graph-gallery.com/seaborn/" target="_blank" rel="noreferrer">
        seaborn
      </a>
      .
    </p>
    <p>
      Each example is accompanied by its corresponding <b>reproducible code</b> along with comprehensive{' '}
      <b>explanations</b>. The gallery offers tutorials that cater to beginners to help kickstart their journey, as well
      as advanced examples that demonstrate the potency of Python in the realm of data visualization.
    </p>

    <div className="mt-10 rounded-lg border bg-card p-6 shadow-xs">
      <p>❤️ Love the project?</p>
      <p className="!mt-2">
        You can contribute on{' '}
        <a href="https://github.com/holtzy/The-Python-Graph-Gallery" target="_blank" rel="noreferrer">
          GitHub
        </a>
        , share your feedback on{' '}
        <a href="https://www.linkedin.com/in/yan-holtz-2477534a/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        , or join 10,000+ subscribers to the newsletter to get updates when new examples are published! 🔥
      </p>
      <SubscribeButton className="mt-5" />
    </div>
  </>
);

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
      <div className="wrapper">
        <TitleAndDescription title="The Python Graph Gallery" description={siteDescription} />
      </div>

      <div className="wrapper">
        <h2 className="!mt-6 !border-b-0">The biggest list of python chart examples</h2>
        <p>
          Within our collection, we cover <b>every chart type</b> imaginable to ensure we fullfil your data
          visualization needs. To streamline the process of finding your required chart, we meticulously{' '}
          <b>classified</b> all the examples under their respective chart types.
        </p>
        <p>
          For each chart type, we kick off with a <b>foundational tutorial</b> that introduces its basic structure and
          utility. After mastering the basics, users can delve into our step-by-step guides on the most elementary{' '}
          <b>customizations</b>, ensuring your chart not only presents data but does so with an individual touch that
          caters to your specific requirements.
        </p>
        <div className="mt-8">
          <ChartFamilySection chartFamily="distribution" />
          <ChartFamilySection chartFamily="correlation" />
          <ChartFamilySection chartFamily="ranking" />
          <ChartFamilySection chartFamily="partOfAWhole" />
          <ChartFamilySection chartFamily="evolution" />
          <ChartFamilySection chartFamily="map" />
          <ChartFamilySection chartFamily="flow" />
          <ChartFamilySection chartFamily="general" />
        </div>
      </div>

      <div className="wrapper">
        <h2 className="!border-b-0">Hunting the most beautiful Python charts</h2>
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
        <h2 className="!mt-0 !border-b-0">Palette color finder</h2>
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
        <h2 className="!mt-0 !border-b-0">Python Graphing with State-of-the-Art Libraries</h2>
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
              <p className="!mt-2 flex-1 text-base leading-7 text-muted-foreground">{lib.description}</p>
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

      <Parallax
        imgLink="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/asset/dataviz-inspiration-overview.png?raw=true"
        height={300}
        opacity={0.3}
      >
        <div className="flex min-h-[300px] items-center justify-center px-4 py-10">
          <div className="max-w-[600px] text-center">
            <h2 className="!mt-0 !border-b-0">Love beautiful charts?</h2>
            <p>
              The Python Graph Gallery complements{' '}
              <a href="https://www.dataviz-inspiration.com" target="_blank">
                dataviz-Inspiration.com
              </a>
              , a website featuring hundreds of my favorite data visualization projects.
            </p>
            <a
              href="https://www.dataviz-inspiration.com"
              target="_blank"
              className={buttonVariants({ size: 'lg', className: 'mt-6' })}
            >
              Get some inspiration
            </a>
          </div>
        </div>
      </Parallax>

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
