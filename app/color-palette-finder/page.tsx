import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import ColorPaletteFinderIframe from '@/components/ColorPaletteFinderIframe';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Python Color Palette Finder',
  seoDescription:
    'Browse 2500+ color palette. Find the perfect match for your Python Chart. Get the matplotlib code.',
  image:
    'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/asset/palette-finder-overview.png?raw=true',
  path: '/color-palette-finder/',
});

const chartDescription = (
  <>
    <p>
      Finding the perfect colors for your Python chart can be <b>daunting</b>. Picking colors manually often leads to a{' '}
      <b>maze of unsuitable options</b>.
    </p>
    <p>
      Luckily, the all-new{' '}
      <a href="https://github.com/y-sunflower/pypalettes" target="_blank" rel="noreferrer">
        PyPalettes
      </a>{' '}
      package provides a <b>collection of 2500+ palettes</b> meticulously curated by hundreds of experts.
    </p>
    <p>
      This app lets you effortlessly <b>explore</b> various palettes and gives you two lines of code to use directly in
      your <Link href="/matplotlib">Matplotlib</Link> chart. Discover the perfect palette to make your chart stand out!
      😍
    </p>
  </>
);

export default function ColorPaletteFinder() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription
          title="Python Color Palette Finder"
          description={chartDescription}
          chartType="pypalettes"
        />
      </div>

      <ColorPaletteFinderIframe />

      <div className="wrapper">
        <h2>
          <code>pypalettes</code>: The Easiest Way to Access Colors
        </h2>
        <p>
          <a href="https://github.com/y-sunflower/pypalettes">pypalettes</a> is a Python library developed by Joseph
          Barbier during his collaboration with the Python Graph Gallery 😋.
        </p>
        <p>
          While thousands of color palettes exist, quick access to them in Python has been limited. In R,{' '}
          <a href="https://github.com/EmilHvitfeldt/paletteer/">paleteer</a> does a great job of this. Now, the bridge
          is available for Python too.
        </p>
        <p>
          Palettes come from <code>paleteer</code>, Matplotlib, and Seaborn.
        </p>
        <p>
          <u>Pro Tip</u>: Give a star to the GitHub <a href="https://github.com/y-sunflower/pypalettes">repo</a> to help
          spread the word!
        </p>
        <div className="mt-6">
          <a href="/introduction-to-pypalettes" className={buttonVariants({ size: 'sm' })}>
            Official Doc
          </a>
        </div>

        <h2>About this tool</h2>
        <p>
          Accessing <b>over 2500 colors</b> is fantastic, but an efficient tool for <b>exploring</b> them is essential.
        </p>
        <p>
          That is why this little explorer was created. Use your keyboard to switch between palettes at lightning speed
          🔥!
        </p>
        <p>
          Developed by <a href="https://www.yan-holtz.com">Yan Holtz</a>, this tool is under active development. Feel
          free to report any bugs or request <b>new features</b>!
        </p>
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
    </>
  );
}
