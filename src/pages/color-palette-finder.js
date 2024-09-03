import React, { useEffect, useRef, useState } from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import ChartFamilySection from '../components/ChartFamilySection';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';
import Footer from '../components/Footer';
import TopNavbar from '../components/TopNavbar';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

const chartDescription = (
  <>
    <p>
      Finding the perfect colors for your Python chart can be <b>daunting</b>.
      Picking colors manually often leads to a <b>maze of unsuitable options</b>
      .
    </p>
    <p>
      Luckily, the all-new{' '}
      <a
        href="https://github.com/JosephBARBIERDARNAL/pypalettes"
        target="_blank"
        rel="noreferrer"
      >
        PyPalettes
      </a>{' '}
      package provides a <b>collection of 2500+ palettes</b> meticulously
      curated by hundreds of experts.
    </p>
    <p>
      This app lets you effortlessly <b>explore</b> various palettes and gives
      you two lines of code to use directly in your{' '}
      <Link href="/matplotlib">Matplotlib</Link> chart. Discover the perfect
      palette to make your chart stand out! 😍
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="Python Color Palette Finder"
    seoDescription="Browse 2500+ color palette. Find the perfect match for your Python Chart. Get the matplotlib code."
    isRaptiveEnabled={false}
    image={
      'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/asset/palette-finder-overview.png?raw=true'
    }
  />
);

export default function Colors({ location }) {
  const queryParams = new URLSearchParams(location.search);

  const palette = queryParams.get('palette');

  const iframeRef = useRef(null);

  const [src, setSrc] = useState('');

  // Need a useEffect to update the src. Otherwise gatsby remove the url parameter no idea why.
  useEffect(() => {
    setSrc('https://holtzy.github.io/dataviz-color-finder/?palette=' + palette);
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  }, [src]);

  return (
    <>
      <header>
        <TopNavbar />
      </header>

      <TitleAndDescription
        title="Python Color Palette Finder"
        description={chartDescription}
        chartType={'pypalettes'}
        isRaptiveEnabled={false}
      />

      <div style={{ height: '100%' }} ref={iframeRef}>
        <iframe
          id="color-tool"
          title="Tool to find a color palette for a python chart"
          width="100%"
          height="1300px"
          src={src}
          allow="clipboard-write" // If I do not put the ;, it breaks the feature no idea why
          sandbox="allow-same-origin allow-top-navigation allow-modals allow-scripts"
        ></iframe>
      </div>

      <Container>
        <h2>
          <code>pypalettes</code>: The Easiest Way to Access Colors
        </h2>
        <p>
          <a href="https://github.com/JosephBARBIERDARNAL/pypalettes">
            pypalettes
          </a>{' '}
          is a Python library developed by Joseph Barbier Darnal during his
          collaboration with the Python Graph Gallery 😋.
        </p>
        <p>
          While thousands of color palettes exist, quick access to them in
          Python has been limited. In R,{' '}
          <a href="https://github.com/EmilHvitfeldt/paletteer/">paleteer</a>{' '}
          does a great job of this. Now, the bridge is available for Python too.
        </p>
        <p>
          Palettes come from <code>paleteer</code>, Matplotlib, and Seaborn.
        </p>
        <p>
          <u>Pro Tip</u>: Give a star to the GitHub{' '}
          <a href="https://github.com/JosephBARBIERDARNAL/pypalettes">repo</a>{' '}
          to help spread the word!
        </p>
        <a href="/introduction-to-pypalettes">
          <Button size="sm">Official Doc</Button>
        </a>

        <h2>About this tool</h2>
        <p>
          Accessing <b>over 2500 colors</b> is fantastic, but an efficient tool
          for <b>exploring</b> them is essential.
        </p>
        <p>
          That is why this little explorer was created. Use your keyboard to
          switch between palettes at lightning speed 🔥!
        </p>
        <p>
          Developed by <a href="https://www.yan-holtz.com">Yan Holtz</a>, this
          tool is under active development. Feel free to report any bugs or
          request <b>new features</b>!
        </p>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="general" />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
      <Footer />
    </>
  );
}
