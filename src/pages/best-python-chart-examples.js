import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import { Link } from 'gatsby';
import { Button, Col } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';
import Spacing from '../components/Spacing';
import { listOfBestCharts } from '../util/list-of-best-charts';
import { SEO } from '../components/SEO';
import SubscribeButton from '../components/SubscribeButton';

const chartDescription = (
  <>
    <p>
      The <a href="/">Python Graph Gallery</a> has always been a reservoir of
      inspiration, providing <b>hundreds of foundational chart examples</b> for
      newcomers and seasoned developers alike.{' '}
    </p>
    <p>
      While our vast collection offers a stepping stone into the world of data
      visualization, <b>the following list stands out</b>.
    </p>
    <p>
      Every chart here represents the pinnacle of craftsmanship, exhibiting the
      depths to which <Link href="/matplotlib">matplotlib</Link> can be
      customized. These are not just graphs; they are polished masterpieces,
      ready for publication.
    </p>
    <p>
      While I'm deeply indebted to the <b>original authors</b> for their stellar
      work, it's worth noting that many of these visualizations were first
      conceived in <a href="https://www.r-graph-gallery.com">R</a>, a testament
      to its rich visualization ecosystem. In an endeavor to{' '}
      <b>bring the best to our Python community</b>, I've translated these gems
      to further showcase the versatility and power of matplotlib.
    </p>
    <p>Dive in and get inspired! 😍</p>
    <br />
    <p>
      PS: don't miss new publications, I send them to 4000+ subscribers already
      ⬇️
    </p>
    <SubscribeButton />
  </>
);

export const Head = () => (
  <SEO
    title="Best Python Chart Examples"
    seoDescription="A selection of the best graphs made with python, coming with in-depth tutorials and reproducible code."
  />
);

export default function Beeswarm() {
  return (
    <Layout>
      <TitleAndDescription
        title="Best Python Chart Examples"
        description={chartDescription}
      />

      <Container>
        {listOfBestCharts.map((chart, i) => {
          return (
            <div key={i}>
              <Row>
                <Col xs={4} md={6}>
                  <Link href={'/' + chart.link}>
                    <ChartImage imgName={chart.img.replace('.png', '')} />
                  </Link>
                </Col>
                <Col xs={4} md={6}>
                  <h2
                    style={{
                      lineHeight: '34px',
                      fontSize: 22,
                      marginTop: 40,
                      paddingBottom: 10,
                      borderBottom: 'none',
                    }}
                  >
                    {chart.title}
                  </h2>
                  <p>{chart.description}</p>
                  <p style={{ fontSize: 16, color: 'grey' }}>
                    <i>
                      <span>by </span>
                      {chart.author}
                    </i>{' '}
                  </p>
                  <Link href={'/' + chart.link}>
                    <Button size="sm">Read tutorial</Button>
                  </Link>
                </Col>
              </Row>
              <Spacing />
            </div>
          );
        })}

        <p>
          Note that I am always <b>hunting for the best charts</b> made with
          Python! If you have any examples in mind that should be showcased
          here, please <b>let me know</b> 🙏.
        </p>
      </Container>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
