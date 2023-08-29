import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Spacing from '../components/Spacing';
import SponsorImage from '../components/SponsorImage';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>👋 Hi! The Python Graph Gallery is a website brought to you by <a href='https://www.yan-holtz.com'>Yan Holtz</a>. It displays hundreds of charts made with <code>Python</code>, together with their reproducible code. Here are a few things you should know about it! 👇</p>";

export const Head = () => (
  <SEO title="About" seoDescription="About page of the Python Graph Gallery" />
);

export default function About() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription title="About" description={chartDescription} />

      <Spacing />

      <Container>
        <h2 id="How and Why">❓ How and Why this gallery</h2>
        <p>
          <u>How</u>: The python graph gallery displays about{' '}
          <code>400 charts</code> organize in about <code>40 sections</code>
          (families)! 😳. It showcases the most common types of chart used for
          data science. Each family displays several examples, describing the
          most common need of customization. Every example comes with its
          reproducible code and with some explanation 😀.
        </p>

        <p>This website relies on the following stack:</p>
        <ul>
          <li>
            <a href="https://www.gatsbyjs.com">Gatsby</a> makes the website
            blazing fast
          </li>
          <li>
            Code is hosted on{' '}
            <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
              github
            </a>
            , you can edit it!
          </li>
          <li>
            Every blog post is actually a{' '}
            <a href="https://jupyter.org">Jupyter notebook</a>
          </li>
          <li>
            <a href="https://react-bootstrap.github.io">React bootstrap</a> is
            the css framework used here.
          </li>
        </ul>

        <p>
          <u>Why</u>: I guess the main explanation is that I'm a nerd 😊. I love
          exploring all the graph possibilities a language offers. I also love
          teaching and helping people out. If you've found this website helpful,
          say me thanks and you will make my day! 🙏
        </p>

        <blockquote>
          This website is built on my free time with the little I know! Please
          be kind when giving feedbacks ❤️
        </blockquote>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Sponsoring">💵 Sponsoring</h2>
        <p>
          If you run a buisness that is highly related with python, data science
          or a closely related field, I would love to communicate about it in
          exchange of a few 💰. We all need to put some butter in the spinach
          (French expression, sorry) 🐸.
        </p>
        <p>
          The python graph gallery is visited about{' '}
          <code>400,000 times per months</code> by students and professionals
          that are highly interested in data science, from every country in the
          world
        </p>
        <p>
          Here is a list of the companies that helped me building this website,
          thanks <u>so much</u> to them!
        </p>
        <Row>
          <Col xs={6} md={3}>
            <SponsorImage
              imgName="data_society_logo"
              caption={'Data Society'}
            />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="datacamp_logo" caption={'Datacamp'} />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="datamatic" caption={'Data Society'} />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="EARL_logo" caption={'EARL conference'} />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="eoda_logo" caption={'EODA'} />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="HighStat_logo" caption={'HighStat'} />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage
              imgName="jumping_river_logo"
              caption={'Jumping River'}
            />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage
              imgName="MangoSolution_logo"
              caption={'Mango Solution'}
            />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage
              imgName="365_data_science_logo"
              caption={'365 Data Science'}
            />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="dataquest_logo" caption={'Dataquest'} />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage
              imgName="stack_abuse_logo"
              caption={'Stack Abuse book'}
            />
          </Col>
          <Col xs={6} md={3}>
            <SponsorImage imgName="udemy" caption={'Udemy'} />
          </Col>
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Acknowledgment">🙏 Acknowledgment</h2>
        <p>
          This website would no exist without the precious help of those people:
        </p>
        <ul>
          <li>
            <u>Maintainers</u> of python viz libraries like{' '}
            <code>matplotlib</code>, <code>seaborn</code>, <code>plotly</code>,{' '}
            <code>circlify</code>, <code>squarify</code>, <code>pandas</code>,{' '}
            <code>leaflet</code>, <code>networkX</code> and others.
          </li>
          <br />
          <li>
            Main <u>contributors</u> who wrote some of the blogposts: Nicolas
            Rousselet and Ozlem Tok
          </li>
          <br />
          <li>
            <u>Friends</u>: <a href="http://www.conor.fr/">Conor Healy</a> for
            the logos,{' '}
            <a href="https://www.linkedin.com/in/guillaume-debreu-7b360b125/">
              Gimzu Debreu
            </a>{' '}
            for general knowledge about the internet and all others who gave me
            constructive feedbacks.
          </li>
          <br />
          <li>
            More generally, everybody who gave <u>feedbacks</u>, english
            corrections, bug reports, opened issues
          </li>
        </ul>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Contribution">🙇‍♂️ How to contribute</h2>
        <p>
          Contribution to the python graph gallery are highly encouraged 📢! I'm
          working hard on this project and would love some help of any kind.
        </p>
        <p>There are 2 main ways to contribute:</p>
        <ul>
          <li>
            <u>Improve</u> an existing page. It can be anything from correcting
            an english mistake to a python code reformating.
            <ul>
              <li>
                👍🏽 Open an{' '}
                <a href="https://github.com/holtzy/The-Python-Graph-Gallery/issues">
                  issue on github
                </a>{' '}
                to explain the bug you've found
              </li>
              <li>
                🔥 Open a pull request on the{' '}
                <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
                  github repo
                </a>{' '}
                to suggest a correction
              </li>
            </ul>
          </li>
          <br />
          <li>
            <u>Create</u> a new chart. Contact me by email, on{' '}
            <a href="https://twitter.com/R_Graph_Gallery">twitter</a> or open a{' '}
            <a href="https://github.com/holtzy/The-Python-Graph-Gallery">
              pull request
            </a>{' '}
            with a new chart suggestion.
          </li>
        </ul>
      </Container>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
