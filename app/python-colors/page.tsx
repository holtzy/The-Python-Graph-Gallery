import type { Metadata } from 'next';
import Link from 'next/link';
import TitleAndDescription from '@/components/TitleAndDescription';
import ChartFamilySection from '@/components/ChartFamilySection';
import Contact from '@/components/Contact';
import Spacing from '@/components/Spacing';
import TableOfContent from '@/components/TableOfContent';
import CodeChunk from '@/components/CodeChunk';
import ChartImage from '@/components/ChartImage';
import { buttonVariants } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tips about colors with Python',
  seoDescription: 'How to manage colors in python charts',
  path: '/python-colors/',
});

const btn = buttonVariants({ variant: 'default' });
const btnSm = buttonVariants({ variant: 'default', size: 'sm' });

const chartDescription = (
  <>
    <p>
      <a href="https://python-graph-gallery.com/matplotlib">Matplotlib</a> offers extensive customization of plots,
      including a wide range of features for working with colors.
    </p>
    <p>
      Dealing with colors in Matplotlib can be challenging. This page is here to address all your needs. It begins with
      tips on how to apply a <b>single color</b> to a chart, and then discusses accessing <b>color palettes</b> for
      both continuous and categorical data.
    </p>
    <p>
      Finally, it introduces <code>pypalettes</code>, a Python library that provides access to 2,500+ color palettes.
      It also includes a <a href="https://python-graph-gallery.com/color-palette-finder/">color palette finder</a> tool
      that you are sure to love. 💜
    </p>
  </>
);

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <TitleAndDescription title="Dealing with colors in matplotlib" description={chartDescription} chartType="colors" />
      </div>

      {/* This section links to /available-colors-in-matplotlib */}
      <div className="wrapper">
        <h2 id="Single color">1️⃣ Applying a single Color</h2>
        <p>
          That&apos;s the most simple use-case. You just made a chart that has an uniform default color and want to
          change it.
        </p>
        <p>
          All <a href="/matplotlib">Matplotlib</a> plotting function have a <b>color</b> argument allowing to control
          the color.
        </p>
        <p>The color can be provided in multiple ways:</p>
        <ul>
          <li>
            <b>Named colors:</b> Use the name of the color. For example, <code>red</code>,<code>blue</code>,{' '}
            <code>green</code>.
          </li>
          <li>
            <b>RGB colors:</b> Use a tuple of 3 values between 0 and 1. For example, <code>(1, 0, 0)</code> for red.
            Note that a 4th value can be provided for the opacity.
          </li>
          <li>
            <b>Hexadecimal colors:</b> Use the hexadecimal code. For example, <code>#FF0000</code> for red.
          </li>
        </ul>
        <p>Code would look like this:</p>
        <CodeChunk>{codeSingleColor}</CodeChunk>
        <p>We wrote a post that goes in-depth in this topic. It also lists all the premade-colors.</p>
        <Link href="/available-colors-in-matplotlib" className={btn}>
          Learn more about single color
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Qualitative palette">2️⃣ Categorical / Qualitative color palettes</h2>
        <p>
          Qualitative color schemes represent categorical variables, where the possible values of the variable are{' '}
          <b>discrete</b> and <b>unordered</b>.
        </p>
        <p>
          <u>Example</u>: you want to color <code>group A</code> in blue, <code>group B</code> in red and so on. This
          applies for <Link href="/barplot">barplots</Link>, <Link href="/pie-plot">pie</Link> charts,{' '}
          <Link href="/scatter-plot">scatterplot</Link> or any other chart that can be split by <b>group</b>.
        </p>

        <h3>Method 1: use a matplotlib pre-made palette</h3>
        <p>
          Matplotlib provides a set of <Link href="/categorical-color-palette">pre-made categorical palettes</Link> that
          are ready to be used.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p>
              Read <Link href="/categorical-color-palette">this post</Link> to find the entire list and to understand
              how to use those palettes.
            </p>
            <p>
              Basically, you will have to create a color map using the <code>get_cmap()</code> function and pass this
              color map to the <code>color</code> argument of the function you&apos;re using.
            </p>
            <Link href="/categorical-color-palette" className={btn}>
              Read now
            </Link>
          </div>
          <div>
            <Link href="/categorical-color-palette">
              <ChartImage imgName="categorical_palettes" caption="Available categorical color palettes in Matplotlib" />
            </Link>
          </div>
        </div>

        <h3>
          Method 2: more palette with <code>pypalettes</code>
        </h3>
        <p>
          Matplotlib only offers about a dozen <Link href="/categorical-color-palette">qualitative palettes</Link>. So
          we&apos;ve just created <code>pypalettes</code>, a python library that offers 2500+ color palettes. The
          library is described in depth below.
        </p>
        <Link href="#pypalettes" className={btn}>
          More about pypalettes
        </Link>

        <h3>Method 3: provide an array of colors</h3>
        <p>
          You can pick some colors manually, and provide them as an array to the <code>color</code> argument of the
          matplotlib function you&apos;re using.
        </p>
        <p>
          I strongly advise <b>not</b> doing this though. It&apos;s time consuming and finding colors that go well
          together is a struggle.{' '}
        </p>
        <Link href="#own_colors" className={btn}>
          Create my own palette
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="Continuous palette">3️⃣ Continuous color palettes</h2>
        <p>
          A continuous color palette is a <b>smooth gradient</b> of colors that transitions seamlessly from one hue to
          another.
        </p>
        <p>
          <u>Example</u>: you want to encode a value with a color. For instance, <code>0</code> will be in light blue,
          and <code>100</code> will be in dark blue. This applies for <Link href="/heatmap">heatmap</Link>,{' '}
          <Link href="/choropleth-map">choropleth</Link> maps for example.
        </p>
        <h3>Method 1: use a matplotlib pre-made palette</h3>
        <p>
          <a href="/matplotlib">Matplotlib</a> provides a set of pre-made continuous palettes that are split into 2 main
          categories:
        </p>
        <ul>
          <li>
            <b>Sequential:</b> for representing data that ranges from low to high values.
          </li>
          <li>
            <b>Diverging:</b> for representing data that ranges from negative to positive values.
          </li>
        </ul>

        <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link href="/continuous-color-palette">
            <ChartImage imgName="sequential_palettes" caption="Available sequential color palettes in Matplotlib" />
          </Link>
          <Link href="/continuous-color-palette">
            <ChartImage imgName="diverging_palettes" caption="Available diverging color palettes in Matplotlib" />
          </Link>
        </div>
        <p>
          We&apos;ve written <Link href="/continuous-color-palette">a post</Link> that will guide you through their
          usage, and provides an exhaustive list of all the available continuous palettes.
        </p>
        <Link href="/continuous-color-palette" className={btn}>
          Continuous palettes in Matplotlib
        </Link>

        {/* This section links to the pypalette tutorial*/}
        <h3>
          Method 2: more palette with <code>pypalettes</code>
        </h3>
        <p>
          <code>pypalettes</code> is a python library that offers 2500+ color palettes. The library is described in
          depth below and will be useful if you&apos;re not satisfied with matplotlib built-in options.
        </p>
        <Link href="#pypalettes" className={btn}>
          More about pypalettes
        </Link>

        <h3>Method 3: create your own</h3>
        <p>Strongly discouraged: you will struggle to build something great.</p>
        <p>But definitely doable. See the last section of this page!</p>
        <Link href="#own_colors" className={btn}>
          Create my own palette
        </Link>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="pypalettes">
          4️⃣ Need more palette options? Check <code>pypalettes</code>.
        </h2>
        <p>
          <a href="/introduction-to-pypalettes">PyPalettes</a> is a Python library that gives access to 2500+ palettes.
        </p>
        <p>
          It&apos;s hosted on <a href="https://github.com/y-sunflower/pypalettes">github</a>, you can install it with{' '}
          <code>PyPI</code>, and it&apos;s super easy to use.
        </p>
        <h3>User-friendly API</h3>
        <p>
          <code>pypalettes</code> is pretty straightfoward to use. For instance, this is how to use a palette called{' '}
          <code>Acadia</code> once the library is installed:
        </p>
        <CodeChunk>{codePypalettes}</CodeChunk>
        <p>
          The pypalettes API is super intuitive, and we&apos;ve written a{' '}
          <a href="/introduction-to-pypalettes">digestible post</a> to explain how it works.
        </p>
        <Link href="/introduction-to-pypalettes" className={btnSm}>
          Access 2500+ colors with pypalettes
        </Link>
        <h3>Color palette finder</h3>
        <p>
          Last but not least, we&apos;ve also built a{' '}
          <a href="https://python-graph-gallery.com/color-palette-finder/">color palette finder</a>.
        </p>
        <p>
          It allows to quickly explore all the options, see them <b>in action</b> on 7 different charts, export their
          code, simulate <b>color blindness</b>, and so much more.
        </p>
        <a href="https://python-graph-gallery.com/color-palette-finder/" className="my-6 block">
          <img
            src="/asset/pypalettes.gif"
            alt="Color palette finder demo"
            width={1903}
            height={946}
            loading="lazy"
            className="h-auto w-full max-w-[900px]"
          />
        </a>
        <a href="https://python-graph-gallery.com/color-palette-finder/" className={btnSm}>
          Browse the palettes
        </a>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="customization">5️⃣ How to work with color maps</h2>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div>
            <p>
              <a href="/matplotlib">Matplotlib</a> provides a wide range of colormaps but also a specific way of
              working with them. This post will show you how to use colormaps in <a href="/matplotlib">Matplotlib</a>{' '}
              to enhance the readability of your plots.
            </p>
            <Link href="/587-how-to-use-colormap" className={btnSm}>
              Learn more
            </Link>
          </div>
          <div className="md:col-span-2">
            <Link href={'/587-how-to-use-colormap'}>
              <ChartImage imgName="587-how-to-use-colormap" caption="Available colors in Matplotlib" />
            </Link>
          </div>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 id="own_colors">6️⃣ Creating your own palette</h2>
        <p>
          If you&apos;re not satisfied with the <b>2500+ options</b> offered in the previous sections, you can still
          create your own palette from scratch.
        </p>
        <p>We&apos;ve built a full post on the topic, but here is a summary: </p>
        <p>
          <a href="/matplotlib">Matplotlib</a> provides a few tools that, based on a <b>list of colors</b> create a
          colormap with it. You can create
          <b>both</b> categorical and continuous palettes.
        </p>
        <a href="/create-your-own-color-maps" className={btnSm}>
          Create my own palette
        </a>
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

const codeSingleColor = `# Hexadecimal color code
color = "#FF5733"

# Pre-defined color names
color = "skyblue"

# RGB tuple
color = (0.1, 0.2, 0.5)

# RGBA tuple
color = (0.1, 0.2, 0.5, 0.4)

# Use in a barplot
fig, ax = plt.subplots()
ax.bar(x, y, color=color)
`;

const codePypalettes = `# Import pypalettes
from pypalettes import load_cmap

# Load the palette called Acadia
cmap = load_cmap("Acadia")

# Use the color map anywhere!
`;
