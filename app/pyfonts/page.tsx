import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import CodeChunk from '@/components/CodeChunk';
import ChartGrid from '@/components/ChartGrid';
import ChartImage from '@/components/ChartImage';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'PyFonts',
  seoDescription: 'An overview of the PyFonts library in Python',
  path: '/pyfonts/',
});

const chartDescription = (
  <>
    <p>
      <a href="https://y-sunflower.github.io/pyfonts/">PyFonts</a> is a library that allows to load easily any font
      from the web and use it in your matplotlib charts.
    </p>
    <p>
      It was created by <a href="https://barbierjoseph.com/">Joseph Barbier</a> in order to <b>simplify</b> the
      process to loading fonts in matplotlib and <b>remove</b> the need to install them on your computer.
    </p>
  </>
);

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription
          title="PyFonts: a simple way to load fonts for matplotlib"
          description={chartDescription}
          chartType={'pyfonts'}
        />
      </div>

      <div className="wrapper">
        <h2 id="Quick">&#9201; Quick start</h2>
        <p>
          Before using pyfonts you need to <b>install</b> it. This can easily be done with <code>pip</code>:
        </p>
        <CodeChunk>{codeInstall}</CodeChunk>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              pyfonts has <b>a main simple function</b>:<code>load_google_font()</code>: load a font from Google font
              and return a matplotlib font object.
            </p>
          </div>
          <div>
            <ChartImage imgName="quickstart-pyfonts" caption="Basic use case of pyfonts" />
          </div>
        </div>
        <CodeChunk>{quickCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>How to find good fonts</h2>
        <div>
          The easiest way to find great is to
          <ul>
            <li>
              browse{' '}
              <a href="https://fonts.google.com/" target="_blank">
                Google Font
              </a>
            </li>
            <li>copy the name of the font you like</li>
            <li>
              pass it to <code>load_google_font(&quot;Font Name&quot;)</code>
            </li>
          </ul>
        </div>
        <p>
          Then you can use the <code>weight</code> argument to control is the font should be <b>bold</b> or thin for
          example.
        </p>
        <p>
          You can control if the font should be <i>italic</i> by specifying <code>italic=True</code> (default to{' '}
          <code>False</code>).
        </p>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Fonts that are not on Google font</h2>
        <p>
          Since not all fonts are available on Google fonts, <code>pyfonts</code> provides a <code>load_font()</code>{' '}
          function that allows to <b>load a font from any arbitrary url</b> that points to a font file.
        </p>
        <p>Most font files are on Github repositories. In order to load a font from a Github repository, you have to:</p>
        <ul>
          <li>
            Copy the url of that font file. Here we&apos;ll use this url from pyfonts Github repository:
            <p className="break-all">
              <code>https://github.com/y-sunflower/pyfonts/blob/main/tests/Ultra-Regular.ttf</code>
            </p>
          </li>
          <li>
            Then we add <code>?raw=true</code> at the end, which gives us:
            <p className="break-all">
              <code>https://github.com/y-sunflower/pyfonts/blob/main/tests/Ultra-Regular.ttf?raw=true</code>
            </p>
          </li>
        </ul>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <p>
              Use <code>load_font()</code> by passing the font&apos;s URL.
            </p>
            <p>
              Then, provide the <b>output</b> of <code>load_font()</code> directly to any{' '}
              <a href="/matplotlib">matplotlib</a> function that accepts a font, such as <code>ax.text()</code>.
            </p>
          </div>
          <div>
            <ChartImage imgName="usecase-pyfonts-1-square" caption="how to load a font with pyfonts" />
          </div>
        </div>
        <CodeChunk>{useFontCode}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Different weight and style</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p>
              When you load a font, <b>you don&apos;t load all its extensions</b>: bold, italic, thin etc, but only the
              one from the url. If you want to be able to use a font and its <b>bold</b> version, for example, you need
              to load both fonts:
            </p>
          </div>
          <div className="md:col-span-5">
            <ChartImage
              imgName="usecase-pyfonts-2-square"
              caption="Combine a normal font and a bold font with pyfonts"
            />
          </div>
        </div>
        <CodeChunk>{useFontCode2}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Locally stored font</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p>
              <code>PyFonts</code> also allows you to load a font file that you have on your own computer. You just
              have to give it the path to your font.
            </p>
          </div>
          <div className="md:col-span-5">
            <ChartImage imgName="usecase-pyfonts-3-square" caption="Load a locally stored font with pyfonts" />
          </div>
        </div>
        <CodeChunk>{useFontCode3}</CodeChunk>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Gallery of examples</h2>
        <p>
          Here are some examples of what you can do with <code>PyFonts</code>. Click on the images to see the code.
        </p>
        <ChartGrid>
          <Link href="/web-waffle-chart-for-time-series">
            <ChartImage
              imgName={'web-waffle-chart-for-time-series-square'}
              caption={'Waffle chart with nice theme and fonts'}
            />
          </Link>
          <Link href="/web-lollipop-with-colormap-and-arrow">
            <ChartImage
              imgName={'web-lollipop-with-colormap-and-arrow-square'}
              caption={'Lollipop chart with arrows'}
            />
          </Link>
          <Link href="/web-area-chart-with-different-colors-for-positive-and-negative-values">
            <ChartImage
              imgName={'web-area-chart-with-different-colors-for-positive-and-negative-values-square'}
              caption={'Minimalist style area chart'}
            />
          </Link>
        </ChartGrid>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2>Going further</h2>
        <div>
          You might be interested in
          <ul>
            <li>
              The official{' '}
              <a href="https://y-sunflower.github.io/pyfonts/" target="_blank">
                pyfonts documentation
              </a>
              .
            </li>
            <li>
              The <a href="https://github.com/y-sunflower/pyfonts"> official github repo of pyfonts</a> (⭐ give it a
              star!)
            </li>
            <li>
              Learn more on <a href="custom-fonts-in-matplotlib">how matplotlib handle fonts</a>
            </li>
            <li>
              How to <a href="/drawarrow">draw arrows in matplotlib</a>
            </li>
            <li>
              How to create{' '}
              <a href="/advanced-custom-annotations-matplotlib">beautiful annotation in matplotlib</a>
            </li>
          </ul>
        </div>
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
    </>
  );
}

const quickCode = `import matplotlib.pyplot as plt
from pyfonts import load_google_font

font = load_google_font("Cascadia Mono", weight="bold", italic=True)

fig, ax = plt.subplots()
ax.text(
  x=0.2,
  y=0.5,
  s="Hey there!",
  size=30,
  font=font # we pass it to the 'font' argument
)
plt.show()
`;

const useFontCode = `import matplotlib.pyplot as plt
from pyfonts import load_font

font = load_font(
  "https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Bold.ttf?raw=true"
)

fig, ax = plt.subplots(figsize=(10, 10), dpi=300)
ax.text(
    x=0.5,
    y=0.5,
    s=f"Amaranth font\\nwith PyFonts!!!",
    font=font,
    fontsize=50,
    ha="center",
)
plt.show()
`;

const useFontCode2 = `import matplotlib.pyplot as plt
from pyfonts import load_font

font = load_font(
  "https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Regular.ttf?raw=true"
)
bold_font = load_font(
  "https://github.com/google/fonts/blob/main/ofl/amaranth/Amaranth-Bold.ttf?raw=true"
)

fig, ax = plt.subplots(figsize=(6, 6), dpi=300)
ax.text(
   x=0.5,
   y=0.5,
   s=f"Congrats, you now have a cool font!",
   font=font,
   fontsize=20,
   ha="center",
)
ax.text(x=0.5, y=0.3, s=f"And now it's bold", font=bold_font, fontsize=25, ha="center")
plt.show()
`;

const useFontCode3 = `import matplotlib.pyplot as plt
from pyfonts import load_font

font = load_font("path/to/myfont/Ultra-Regular.ttf")

fig, ax = plt.subplots(figsize=(6, 6), dpi=300)
ax.text(
   x=0.5,
   y=0.5,
   s=f"Yet another way to load font",
   font=font,
   fontsize=18,
   ha="center",
)
plt.show()
`;

const codeInstall = `pip install pyfonts`;
