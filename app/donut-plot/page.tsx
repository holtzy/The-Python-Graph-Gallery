import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartGrid from '@/components/ChartGrid';
import ChartImage from '@/components/ChartImage';
import ChartImageContainer from '@/components/ChartImageContainer';
import ChartFamilySection from '@/components/ChartFamilySection';
import CodeChunk from '@/components/CodeChunk';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import LeadMagnetSpot from '@/components/lead-magnets/LeadMagnetSpot';
import { Matplotlib } from '@/components/MiscellaneousLogos';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Donut plot | Python Graph Gallery',
  seoDescription:
    'A collection of donut chart examples made with Python, coming with explanation and reproducible code',
  path: '/donut-plot/',
});

const chartDescription =
  "<p>A Donut chart is essentially a <a href='https://python-graph-gallery.com/pie-plot/'>Pie Chart</a> with an area of the center cut out. You can build one hacking the <code>plt.pie()</code> function of the <code>matplotlib</code> library as shown in the examples below.</p>";

const quickCode = `# library
import matplotlib.pyplot as plt

# create data
size_of_groups=[12,11,3,30]

# Create a pieplot
plt.pie(size_of_groups)

# add a circle at the center to transform it in a donut chart
my_circle=plt.Circle( (0,0), 0.7, color='white')
p=plt.gcf()
p.gca().add_artist(my_circle)

plt.show()
`;

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Donut Plot" description={chartDescription} chartType="donut" />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              <code>matplotlib</code> allows to build a <Link href="/pie-plot">pie chart</Link> easily thanks to its{' '}
              <code>pie()</code> function. Visit the <Link href="/pie-plot">dedicated section</Link> for more about
              that.
            </p>
            <p>
              We can use the exact same principle and add a circle to the center thanks to the{' '}
              <code>circle()</code> function and get a donut chart.🔥
            </p>
          </div>
          <Link href="/160-basic-donut-plot" className="block">
            <ChartImage
              imgName="160_Basic_donut_plot"
              caption="Most basic donut chart with Python and Matplotlib"
            />
          </Link>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <LeadMagnetSpot chartType="donut" />

      <Spacing />

      <div className="wrapper">
        <h2 id="Warning">&#9888;&#65039; Mind the donut!</h2>
        <p>
          As his friend the <Link href="/pie-plot">Pie chart</Link>, the Donut chart is often criticized. Humans are
          pretty bad at reading angles, making it hard to rank the groups accurately. Most of the time, it is better to
          display the information as a <Link href="/barplot">barchart</Link>, a <Link href="/treemap">treemap</Link>{' '}
          or a <Link href="/lollipop-plot">lollipop</Link> plot.
        </p>
        <p>Have a look to the 3 pie charts below, can you spot the pattern hidden in it?</p>
        <div className="mx-auto max-w-[600px]">
          <Link href="/173-elaborated-venn-diagram" className="block">
            <ChartImage
              imgName="pieChartIssue"
              caption="The matplotlib-venn library allows a high level of customization. Here is an example taking advantage of it"
            />
          </Link>
        </div>
        <a href="https://www.data-to-viz.com/caveat/pie.html" className={buttonVariants({ size: 'sm' })}>
          See it as a barplot
        </a>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Matplotlib">
          <Matplotlib />
          Donut plot with <code>Matplotlib</code>
        </h2>
        <p>
          The example above is a good start but you probably need to go further. The blog posts linked below explain
          common tasks like <Link href="/161-custom-matplotlib-donut-plot">adding and customizing labels</Link>, change
          section colors, add <Link href="/161-custom-matplotlib-donut-plot">padding</Link> between each and more.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="161_custom_donut_plot5"
            caption="Add and customize the labels"
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot3"
            caption="Customize the donut section colors"
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot6"
            caption="Add blank space between each donut section."
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="162_Background_color_donut"
            caption="How to make the rectangle colors relative to their values."
            linkTo="/162-change-background-of-donut-plot"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <ChartFamilySection chartFamily="partOfAWhole" />
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
