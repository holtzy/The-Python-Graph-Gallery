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
import SectionLogoWithOverlay from '@/components/SectionLogoWithOverlay';
import { chartTypesInfo } from '@/lib/sectionDescriptions';
import { fullUrlToInternalLink } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Wordcloud',
  seoDescription: 'A collection of wordcloud examples made with Python, coming with explanation and reproducible code',
  path: '/wordcloud/',
});

const logoToKeep = ['lollipop', 'barplot', 'treemap', 'circularPacking'];

// Chart types that are good alternatives to a wordcloud
const WordAlternativeLogos = () => (
  <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
    {chartTypesInfo
      .filter((chart) => logoToKeep.includes(chart.id))
      .map((chart) => (
        <SectionLogoWithOverlay
          key={chart.id}
          link={fullUrlToInternalLink(chart.pythonURL)}
          chartType={chart.logo}
          caption={chart.label}
        />
      ))}
  </div>
);

const quickCode = `# Libraries
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# Create a list of word
text=("Python Python Python Matplotlib")

# Create the wordcloud object
wordcloud = WordCloud(width=480, height=480, margin=0).generate(text)

# Display the generated image:
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")
plt.margins(x=0, y=0)
plt.show()
`;

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/wordcloud.html'>word cloud</a> (also called <a href='https://www.data-to-viz.com/graph/wordcloud.html'>tag cloud</a> or <a href='https://www.data-to-viz.com/graph/wordcloud.html'>weighted list</a>) is a visual representation of text data. Words are usually single words, and the importance of each is shown with font size or color. <code>Python</code> fortunately has a <code>wordcloud</code> library allowing to build them.</p>";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Wordcloud" description={chartDescription} chartType="wordcloud" />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              The <code>wordcloud</code> library is here to help you build a wordcloud in minutes. Here is a basic code
              snippets using the <code>WordCloud()</code> function to get you started.🔥
            </p>
          </div>
          <Link href="/260-basic-wordcloud" className="block">
            <ChartImage
              imgName="260-basic-wordcloud"
              caption="Most basic wordcloud with python and the wordcloud library."
            />
          </Link>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper" id="warning">
        <h2 id="Warning">&#9888;&#65039; The issue with wordclouds</h2>
        <p>
          Wordclouds are aesthetically pleasing and people are used to it, what make sure readers will understand them
          quick.
        </p>
        <p>
          However, it is important to consider the caveats associated to them. For instance,{' '}
          <u>longer words</u> will <u>take more space</u> on the figure by construction which distorts reality.
          Moreover, it is impossible to <u>translate a font size</u> to an accurate value.
        </p>
        <WordAlternativeLogos />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Wordcloud">
          Wordclouds with... the <code>wordcloud</code> library &#128512;
        </h2>
        <p>
          Thanks to the <a href="https://github.com/amueller/word_cloud">wordcloud</a> library, we have a{' '}
          <code>Wordcloud()</code> function. We just have to pass a <b>large string</b> of text to it, and it will
          generate a wordcloud for us.
        </p>
        <p>
          Then, we just have to call the <code>imshow()</code> function from matplotlib to{' '}
          <b>display the wordcloud</b>.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="261-custom-python-wordcloud-1"
            caption="Simple wordcloud"
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261-custom-python-wordcloud-2"
            caption="Control the maximum number of words"
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261-custom-python-wordcloud-3"
            caption="Custom text color theme"
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261-custom-python-wordcloud-4"
            caption="Worcloud with a specific shape"
            linkTo="/261-custom-python-wordcloud"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Custom shapes">Wordclouds and custom shapes</h2>
        <p>
          It is a common need to apply a <b>specific shape</b> to the wordcloud. It&apos;s an excellent way to make the
          wordcloud <b>more relevant</b> to the data you are displaying. The <code>wordcloud</code> library allows you
          to do it by using a mask, and it&apos;s quite easy to do!
        </p>
        <p>
          You can find the official documentation <a href="https://github.com/amueller/word_cloud">here</a> and some
          examples of how to use it in practice below.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="262-wordcloud-with-specific-shape-2"
            caption="Create a wordcloud in the shape of the Linkedin Logo"
            linkTo="/262-wordcloud-with-specific-shape"
          />
          <ChartImageContainer
            imgName="262-wordcloud-with-specific-shape-1"
            caption="Create a wordcloud in the shape of the Twitter Logo"
            linkTo="/262-wordcloud-with-specific-shape"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Best wordcloud examples</h2>
        <p>
          Below are some of the <b>best wordcloud examples</b> that you can find. They are all made with Python and the{' '}
          <code>wordcloud</code> library.
        </p>
        <ChartGrid>
          <ChartImageContainer
            imgName="web-stacked-charts"
            caption="Combine wordcloud with a line chart"
            linkTo="/web-stacked-charts"
          />
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <ChartFamilySection chartFamily="ranking" />
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
