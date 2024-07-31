import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import ChartFamilySection from '../components/ChartFamilySection';
import { Link } from 'gatsby';
import { Matplotlib } from '../components/MiscellaneousLogos';
import ChartImage from '../components/ChartImage';
import { Button, Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { SEO } from '../components/SEO';

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/venn.html'>Venn Diagram</a> (also called <code>primary diagram</code>, <code>set diagram</code> or <code>logic diagram</code>) is a diagram that shows all possible logical relationships between a finite collection of different sets. Fortunately, the <code>matplotlib_venn</code> library allows to build one easily with Python.</p>";

const quickCode = `# library
import matplotlib.pyplot as plt
from matplotlib_venn import venn2

# Use the venn2 function
venn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))
plt.show()
`;

export const Head = () => (
  <SEO
    title="Venn Diagram"
    seoDescription="A collection of venn diagram examples made with Python, coming with explanation and reproducible code"
  />
);

export default function Venn() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Venn Diagram"
        description={chartDescription}
        chartType="venn"
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              The <code>venn2</code> function of the{' '}
              <code>matplotlib_venn</code> library is the best way to make a
              Venn Diagram with Python, as shown on the code below.
            </p>
            <p>
              {' '}
              Note that several input formats are possible to get there. This
              first post of the section goes through them and should get you
              started from any kind of input. 🔥
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/170-basic-venn-diagram-with-2-groups'}>
              <ChartImage
                imgName="170_Basic_Venn_Diagram"
                caption="Most basic Venn Diagram with Python"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <h2 id="Matplotlib-venn pkg">
            &#8505; &#65039; A note on the <code>Matplotlib-venn</code> library
          </h2>
          <p>
            The <code>matplotlib-venn</code> library has been created by{' '}
            <a href="https://github.com/konstantint/matplotlib-venn">
              Konstantin Tretyakov
            </a>
            . Its official documentation is available on{' '}
            <a href="https://github.com/konstantint">github</a>. Take a minute
            to give him a ⭐ if you use it!
          </p>
          <a href="https://github.com/konstantint/matplotlib-venn">
            <Button size="sm">Matplotlib-venn documentation</Button>
          </a>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Matplotlib">
          <Matplotlib />
          Venn Diagram with <code>Matplotlib</code> and{' '}
          <code>matplotlib-venn</code>
        </h2>
        <p>
          <code>Matplotlib</code> is probably the most famous and flexible
          python library for data visualization. It is appropriate to build any
          kind of chart, including the lollipop plot thanks to its{' '}
          <code>stem()</code> function.
        </p>
        <Row>
          <ChartImageContainer
            imgName="171_Basic_Venn_3-groups"
            caption="Venn Diagram with 3 sets."
            linkTo="/171-basic-venn-diagram-with-3-groups"
          />
          <ChartImageContainer
            imgName="172_custom_venn_diagram3"
            caption="Customize Venn Diagram: circles, lables and more."
            linkTo="/172-custom-venn-diagram"
          />
          <ChartImageContainer
            imgName="174_Change_Background_color_venn"
            caption="Change Venn diagram background color."
            linkTo="/174-change-background-colour-of-venn-diagram"
          />
        </Row>
        <p>
          The <code>Venn2()</code> function allows to customize the venn diagram
          as much as you want, allowing to build some pretty neat figures as
          below:
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Link to="/173-elaborated-venn-diagram">
            <ChartImage
              imgName={'173_elaborated_Venn_diagram'}
              caption={
                'The matplotlib-venn library allows a high level of customization. Here is an example taking advantage of it'
              }
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="UpSet Chart">Upset plot as an alternative</h2>
        <p>
          Venn diagrams are great to visualize the intersection between 2 or 3
          sets. Above that they become quite{' '}
          <a href="https://www.data-to-viz.com/graph/venn.html">
            messy and unreadable
          </a>
          .
        </p>
        <p>
          There is a alternative to them: the upSet plot that can be made thanks
          to the <a href="https://pypi.org/project/UpSetPlot/">upSetPlot</a>{' '}
          library
        </p>
        <a href="https://pypi.org/project/UpSetPlot/">
          <Button size="sm">Show me!</Button>
        </a>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="partOfAWhole" />
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
