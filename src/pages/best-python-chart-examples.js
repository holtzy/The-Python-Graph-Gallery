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

      <section
        className="greySection"
        style={{ marginTop: 20, marginBottom: 80 }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 60,
            paddingBottom: 20,
          }}
        >
          <p style={{ fontSize: 16, maxWidth: 500, marginBottom: -40 }}>
            Love Python and Dataviz? I send my best tips once a week in my
            "Dataviz Universe" newsletter. More than 8000 people love it!
          </p>
          <SubscribeButton />
        </div>
      </section>

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

        <Spacing />
      </Container>

      <section className="greySection">
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 180,
            paddingBottom: 180,
          }}
        >
          <a href="https://www.matplotlib-journey.com">
            <img
              src="/asset/matplotlib-journey-overview.png"
              alt="overview of the matplotlib journey landing page"
              width="100%"
              style={{ border: 'solid grey 1px' }}
            />
          </a>
          <p
            style={{
              maxWidth: 500,
              textAlign: 'center',
              fontSize: 16,
              marginTop: 30,
            }}
          >
            If you like those examples, you will love{' '}
            <a href="https://www.matplotlib-journey.com">Matplotlib Journey</a>.
            It's an interactive online course crafted to transform you into a
            Matplotlib <b>dataviz expert</b>. It provides a clear, big-picture
            understanding of how data visualization works in Python, empowering
            you to grasp any example from the gallery with ease.
          </p>
          <a href="https://www.dataviz-inspiration.com" target="_blank">
            <Button size="md">Finally, Understand Matplotlib.</Button>
          </a>
        </div>
      </section>

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
