import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import ChartImage from '@/components/ChartImage';
import ChartGrid from '@/components/ChartGrid';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import { Matplotlib, Pandas, Seaborn } from '@/components/MiscellaneousLogos';
import {
  CheatSheetModalButton,
  CheatSheetModalProvider,
  CheatSheetModalTrigger,
} from '@/components/CheatSheetModal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cheat sheets',
  seoDescription: 'A collection of cheat sheets related with Python and data visualization',
  path: '/cheat-sheets/',
});

const chartDescription =
  "<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>";

const handoutClassName = 'h-auto w-full rounded-md';

export default function CheatSheets() {
  return (
    <CheatSheetModalProvider>
      <div className="wrapper">
        <TitleAndDescription title="Cheat Sheets" description={chartDescription} chartType="cheatSheets" />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="matplotlib">
          <Matplotlib />
          Matplotlib
        </h2>
        <p>
          There are several useful cheatsheets about <Link href="/matplotlib">matplotlib</Link>.
        </p>
        <p>The Matplotlib organization itself provides several options, and Datacamp is also a great contributor.</p>
        <p>
          Note that if you want to truely understand how matplotlib works,
          <a href="https://www.matplotlib-journey.com" target="_blank">
            Matplotlib Journey
          </a>{' '}
          is what you truly need!
        </p>
        <p>In any case, you can download all the available cheatsheets in a single PDF:</p>
        <div>
          <CheatSheetModalButton>Download All</CheatSheetModalButton>
        </div>

        <ChartGrid cols={2} className="mt-10 items-center">
          <CheatSheetModalTrigger>
            <ChartImage imgName="matplotlib_cheat_sheet" caption="Matplotlib cheatsheet by Datacamp." />
          </CheatSheetModalTrigger>
          <CheatSheetModalTrigger>
            <ChartImage
              imgName="matplotlib-python-official-cheatsheet1"
              caption="Matplotlib cheatsheet by matplotlib (page 1)."
            />
          </CheatSheetModalTrigger>
          <CheatSheetModalTrigger>
            <ChartImage
              imgName="matplotlib-python-official-cheatsheet2"
              caption="Matplotlib cheatsheet by matplotlib (page 2)."
            />
          </CheatSheetModalTrigger>
          <CheatSheetModalTrigger>
            <img
              src="/img/handout-beginner.webp"
              alt="handout Cheatsheet beginners"
              loading="lazy"
              className={handoutClassName}
            />
          </CheatSheetModalTrigger>
          <CheatSheetModalTrigger>
            <img
              src="/img/handout-intermediate.webp"
              alt="handout Cheatsheet beginners"
              loading="lazy"
              className={handoutClassName}
            />
          </CheatSheetModalTrigger>
          <CheatSheetModalTrigger>
            <img
              src="/img/handout-tips.webp"
              alt="handout Cheatsheet beginners"
              loading="lazy"
              className={handoutClassName}
            />
          </CheatSheetModalTrigger>
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Seaborn">
          <Seaborn />
          Seaborn
        </h2>
        <p>
          Seaborn is a dataviz library for Python built on top of Matplotlib. It is unavoidable to build some chart
          types and provides much better default than matplotlib. You cannot live without it!
        </p>
        <div>
          <CheatSheetModalButton>Download Cheatsheet</CheatSheetModalButton>
        </div>

        <ChartGrid cols={2} className="mt-10 items-center">
          <CheatSheetModalTrigger>
            <ChartImage imgName="seaborn_cheat_sheet" caption="Seaborn cheatsheet by Datacamp." />
          </CheatSheetModalTrigger>
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="data-to-viz">Chart type choice</h2>
        <p>Wondering what chart type you should use for your dataset?</p>
        <p>
          Here is a decision tree coming from my Data to Viz project. You describe your dataset format and it leads you
          to the most appropriate chart type!
        </p>
        <div>
          <CheatSheetModalButton>Download Decision Tree</CheatSheetModalButton>
        </div>

        <CheatSheetModalTrigger className="mt-10">
          <img
            src="/img/poster_small.png"
            alt="handout Cheatsheet beginners"
            loading="lazy"
            className={handoutClassName}
          />
        </CheatSheetModalTrigger>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Pandas">
          <Pandas />
          Pandas
        </h2>
        <p>Last but not least, what would we do without Pandas for the data wrangling part of our projects? 😀</p>
        <div>
          <CheatSheetModalButton>Download Cheatsheet</CheatSheetModalButton>
        </div>

        <ChartGrid cols={2} className="mt-10 items-center">
          <CheatSheetModalTrigger>
            <ChartImage imgName="pandas_cheat_sheet" caption="Pandas cheatsheet by Datacamp." />
          </CheatSheetModalTrigger>
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper bg-muted py-10" id="related">
        <ChartFamilySection chartFamily="general" />
      </div>

      <Spacing />

      <div className="wrapper">
        <Contact />
      </div>

      <Spacing />

      <TableOfContent />
    </CheatSheetModalProvider>
  );
}
