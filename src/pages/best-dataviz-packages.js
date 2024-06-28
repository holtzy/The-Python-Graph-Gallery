import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import LogoLink from '../components/LogoLink';
import SeabornImg from '../../static/logo/Other/seabornLogoHighRes.png';
import PlotlyImg from '../../static/logo/Other/plotlyLogoHighRes.png';
import MatplotlibImg from '../../static/logo/Other/matplotlibLogoHighRes.png';
import PlotnineImg from '../../static/logo/Other/plotnineLogoHighRes.png';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>Python is very powerful when it comes to data visualization, especially thanks to its specialized packages that elevate its potential to unparalleled heights. Among these, <a href='/matplotlib'>matplotlib</a> stands out as a foundational tool, offering a versatile platform for creating a wide array of plots.<br/><br/>However, the real magic unfolds when you delve into <b>its extensions</b> and the plethora of other visualization packages available such as <a href='/seaborn'>seaborn</a>, <a href='/advanced-custom-annotations-matplotlib'>highlight_text</a> or <a href='/color-palette-finder'>pypalettes</a>. Together, they empower users to craft virtually <b>any type</b> of chart imaginable, showcasing the true versatility and power of Python in the realm of data visualization.<br/><br/>Python also comes with a set of great independant packages such as <a href='/plotly'>plotly</a>, that provides a simple way to create <b>interactive charts</b>, and <a href='/plotnine'>plotnine</a> that uses the <b>grammar of graphics</b> as a syntax, pretty much like the more than famous <a href='https://r-graph-gallery.com/ggplot2-package.html'>ggplot2</a>.</p>";

export const Head = () => (
  <SEO
    title="Best data visualization Python packages"
    seoDescription="All python data visualization packages and how to use them"
  />
);

export default function BestPackages() {
  const logoData = [
    {
      imgPath: MatplotlibImg,
      url: '/matplotlib',
      altText: 'Matplotlib logo',
      name: 'Matplotlib',
    },
    {
      imgPath: PlotlyImg,
      url: '/plotly',
      altText: 'Plotly logo',
      name: 'Plotly',
    },
    {
      imgPath: PlotnineImg,
      url: '/plotnine',
      altText: 'Plotnine logo',
      name: 'Plotnine',
    },
    {
      imgPath: SeabornImg,
      url: '/seaborn',
      altText: 'Seaborn logo',
      name: 'Seaborn',
    },
  ];

  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Best data visualization Python packages"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">Core packages</h2>
        <p>
          There is only a few <b>core</b> packages in python when it comes to
          data visualization. Most other packages are actually{' '}
          <b>built on top</b> on them, meaning that they use those packages
          features to create new ones!
        </p>
        <p>Here you can find them and learn:</p>
      </Container>

      <br />

      <div className="greySection">
        <Container>
          <Row className="justify-content-center">
            {logoData.map((logo, index) => (
              <LogoLink key={index} {...logo} />
            ))}
          </Row>
        </Container>
      </div>

      <Spacing />

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
    </Layout>
  );
}
