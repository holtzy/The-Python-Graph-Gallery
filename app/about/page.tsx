import type { Metadata } from 'next';
import TitleAndDescription from '@/components/TitleAndDescription';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import MatplotlibJourneyPromo from '@/components/MatplotlibJourneyPromo';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  seoDescription: 'About page of the Python Graph Gallery',
  path: '/about/',
});

const chartDescription =
  "<p>👋 Hi! The Python Graph Gallery is a website brought to you by <a href='https://www.yan-holtz.com'>Yan Holtz</a>. It displays hundreds of charts made with <code>Python</code>, together with their reproducible code. Here are a few things you should know about it! 👇</p>";

export default function About() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="About" description={chartDescription} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="How and Why">❓ How and Why this gallery</h2>
        <p>
          <u>How</u>: The python graph gallery displays about <code>400 charts</code> organize in about{' '}
          <code>40 sections</code>{' '}
          (families)! 😳. It showcases the most common types of chart used for data science. Each family displays
          several examples, describing the most common need of customization. Every example comes with its reproducible
          code and with some explanation 😀.
        </p>

        <p>This website relies on the following stack:</p>
        <ul>
          <li>
            <a href="https://nextjs.org">Next.js</a> makes the website blazing fast
          </li>
          <li>
            Code is hosted on <a href="https://github.com/holtzy/The-Python-Graph-Gallery">github</a>, you can edit it!
          </li>
          <li>
            Every blog post is a markdown file. Its code runs in your browser thanks to{' '}
            <a href="https://pyodide.org">Pyodide</a>: click "Edit code" on any example!
          </li>
          <li>
            <a href="https://tailwindcss.com">Tailwind CSS</a> and <a href="https://ui.shadcn.com">shadcn/ui</a> are
            used for the design.
          </li>
        </ul>

        <p>
          <u>Why</u>: I guess the main explanation is that I'm a nerd 😊. I love exploring all the graph possibilities a
          language offers. I also love teaching and helping people out. If you've found this website helpful, say me
          thanks and you will make my day! 🙏
        </p>

        <blockquote>
          This website is built on my free time with the little I know! Please be kind when giving feedbacks ❤️
        </blockquote>
      </div>

      <Spacing />

      <MatplotlibJourneyPromo title="🚀 Going further 🔥" buttonHref="https://www.dataviz-inspiration.com">
        <a href="https://www.matplotlib-journey.com">Matplotlib Journey</a> is an interactive online course crafted to
        transform you into a Matplotlib <b>dataviz expert</b>. It provides a clear, big-picture understanding of how data
        visualization works in Python, empowering you to grasp any example from the gallery with ease.
      </MatplotlibJourneyPromo>

      <Spacing />

      <div className="wrapper">
        <h2 id="Acknowledgment">🙏 Acknowledgment</h2>
        <p>This website would no exist without the precious help of those people:</p>
        <ul className="space-y-4">
          <li>
            <u>Maintainers</u> of python viz libraries like <code>matplotlib</code>, <code>seaborn</code>,{' '}
            <code>plotly</code>, <code>circlify</code>, <code>squarify</code>, <code>pandas</code>,{' '}
            <code>leaflet</code>, <code>networkX</code> and others.
          </li>
          <li>
            Main <u>contributors</u> who wrote some of the blogposts: Nicolas Rousselet and Ozlem Tok
          </li>
          <li>
            <u>Friends</u>: <a href="http://www.conor.fr/">Conor Healy</a> for the logos,{' '}
            <a href="https://www.linkedin.com/in/guillaume-debreu-7b360b125/">Gimzu Debreu</a> for general knowledge
            about the internet and all others who gave me constructive feedbacks.
          </li>
          <li>
            More generally, everybody who gave <u>feedbacks</u>, english corrections, bug reports, opened issues
          </li>
        </ul>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Contribution">🙇‍♂️ How to contribute</h2>
        <p>
          Contribution to the python graph gallery are highly encouraged 📢! I'm working hard on this project and would
          love some help of any kind.
        </p>
        <p>There are 2 main ways to contribute:</p>
        <ul className="space-y-4">
          <li>
            <u>Improve</u> an existing page. It can be anything from correcting an english mistake to a python code
            reformating.
            <ul>
              <li>
                👍🏽 Open an <a href="https://github.com/holtzy/The-Python-Graph-Gallery/issues">issue on github</a> to
                explain the bug you've found
              </li>
              <li>
                🔥 Open a pull request on the{' '}
                <a href="https://github.com/holtzy/The-Python-Graph-Gallery">github repo</a> to suggest a correction
              </li>
            </ul>
          </li>
          <li>
            <u>Create</u> a new chart. Contact me by email, on{' '}
            <a href="https://twitter.com/R_Graph_Gallery">twitter</a> or open a{' '}
            <a href="https://github.com/holtzy/The-Python-Graph-Gallery">pull request</a> with a new chart suggestion.
          </li>
        </ul>
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
