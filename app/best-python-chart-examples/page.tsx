import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartImage from '@/components/ChartImage';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import SubscribeButton from '@/components/SubscribeButton';
import MatplotlibJourneyPromo from '@/components/MatplotlibJourneyPromo';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { listOfBestCharts } from '@/lib/list-of-best-charts';

export const metadata: Metadata = buildMetadata({
  title: 'Best Python Chart Examples',
  seoDescription:
    'A selection of the best graphs made with python, coming with in-depth tutorials and reproducible code.',
  path: '/best-python-chart-examples/',
});

const chartDescription = (
  <>
    <p>
      The <a href="/">Python Graph Gallery</a> has always been a reservoir of inspiration, providing{' '}
      <b>hundreds of foundational chart examples</b> for newcomers and seasoned developers alike.
    </p>
    <p>
      While our vast collection offers a stepping stone into the world of data visualization,{' '}
      <b>the following list stands out</b>.
    </p>
    <p>
      Every chart here represents the pinnacle of craftsmanship, exhibiting the depths to which{' '}
      <Link href="/matplotlib">matplotlib</Link> can be customized. These are not just graphs; they are polished
      masterpieces, ready for publication.
    </p>
    <p>
      While I'm deeply indebted to the <b>original authors</b> for their stellar work, it's worth noting that many of
      these visualizations were first conceived in <a href="https://www.r-graph-gallery.com">R</a>, a testament to its
      rich visualization ecosystem. In an endeavor to <b>bring the best to our Python community</b>, I've translated
      these gems to further showcase the versatility and power of matplotlib.
    </p>
    <p>Dive in and get inspired! 😍</p>
  </>
);

export default function BestPythonChartExamples() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Best Python Chart Examples" description={chartDescription} />
      </div>

      <section className="wrapper mt-5 mb-16">
        <div className="flex flex-col items-center rounded-xl border p-8 text-center">
          <p className="max-w-[500px] text-base leading-7">
            Love Python and Dataviz? I send my best tips once a week in my "Dataviz Universe" newsletter. More than
            8000 people love it!
          </p>
          <SubscribeButton className="mt-6" />
        </div>
      </section>

      <div className="wrapper">
        {listOfBestCharts.map((chart, i) => (
          <div key={i} className="mb-20 grid grid-cols-1 items-center gap-6 sm:mb-28 md:grid-cols-2 md:gap-10">
            <Link href={'/' + chart.link} className="block">
              <ChartImage imgName={chart.img.replace('.png', '')} />
            </Link>
            <div>
              <h2 className="!mt-0 !border-b-0 !pb-2 !text-[22px] !leading-[34px]">{chart.title}</h2>
              <p className="!mt-0">{chart.description}</p>
              <p className="!mt-2 text-base text-muted-foreground">
                <i>
                  <span>by </span>
                  {chart.author}
                </i>{' '}
              </p>
              <Link href={'/' + chart.link} className={buttonVariants({ size: 'sm', className: 'mt-4' })}>
                Read tutorial
              </Link>
            </div>
          </div>
        ))}

        <p>
          Note that I am always <b>hunting for the best charts</b> made with Python! If you have any examples in mind
          that should be showcased here, please <b>let me know</b> 🙏.
        </p>
      </div>

      <Spacing />

      <MatplotlibJourneyPromo buttonHref="https://www.dataviz-inspiration.com">
        If you like those examples, you will love <a href="https://www.matplotlib-journey.com">Matplotlib Journey</a>.
        It's an interactive online course crafted to transform you into a Matplotlib <b>dataviz expert</b>. It provides
        a clear, big-picture understanding of how data visualization works in Python, empowering you to grasp any
        example from the gallery with ease.
      </MatplotlibJourneyPromo>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <Spacing />
    </>
  );
}
