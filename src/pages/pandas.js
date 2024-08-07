import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartFamilySection from '../components/ChartFamilySection';
import ChartImage from '../components/ChartImage';
import { Link } from 'gatsby';
import { Pandas } from '../components/MiscellaneousLogos';
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import Spacing from '../components/Spacing';
import { Button } from 'react-bootstrap';
import ChartImageContainer from '../components/ChartImageContainer';

const chartDescription = (
  <>
    <p>
      <code>Pandas</code> is a popular open-source Python library used for data
      manipulation and analysis. It provides <b>data structures</b> and
      functions that make working with structured data, such as tabular data
      (like <code>Excel</code> spreadsheets or
      <code>SQL</code> tables), easy and intuitive.
    </p>
    <p>
      Although not best known for this functionality, Pandas{' '}
      <b>can be used to create graphs</b> and visualize data, thanks to its{' '}
      <b>lightweight syntax</b> and{' '}
      <a href="https://python-graph-gallery.com/matplotlib/">matplotlib</a>{' '}
      functions.
    </p>
  </>
);

const quickCode = `# library
import pandas as pd
import matplotlib.pyplot as plt

# Create data
values=[12, 11, 9, 13, 14, 16, 14, 15, 18, 17, 19, 20]
df=pd.DataFrame({'x': range(1,13), 'y': values })

# plot
df.plot('x', 'y') // This is the plot function of pandas
plt.show()
`;

const plotApi = `df.plot('x', 'y', kind='line')
plt.show()
`;

const funcnameApi = `df.line('x', 'y')
plt.show()
`;

const plotFuncnameApi = `df.plot.line('x', 'y')
plt.show()
`;

export default function Pandass() {
  return (
    <Layout
      title="Pandas"
      isTocEnabled
      seoDescription="An overview of the Pandas python library data wrangling and data visualization"
    >
      <TitleAndDescription
        title="Pandas for data visualization"
        description={chartDescription}
        chartType={'pandas'}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              <code>pandas</code> plotting features are a wrapper around the{' '}
              <a href="https://python-graph-gallery.com/matplotlib/">
                matplotlib
              </a>{' '}
              library, which is the most popular python library for data
              visualization.
            </p>
            <p>
              The <code>plot</code> function is the most basic function to
              create a chart with pandas. It is a wrapper around the{' '}
              <code>matplotlib.pyplot.plot</code> function.
            </p>
          </Col>
          <Col md={6}>
            <Link to={'/530-introduction-to-linechart-with-pandas'}>
              <ChartImage
                imgName="quick-pandas"
                caption="The most basic (line) chart one can make with pandas"
              />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="APIs">
          <Pandas />
          Three distinct syntaxes
        </h2>
        <p>
          There are 3 ways to build a chart with pandas: the <code>plot</code>{' '}
          method, the function name methods (like <code>line</code>,{' '}
          <code>bar</code> or <code>hist</code>) and the <code>plot</code> +
          function name method.
        </p>
        <br />
        <h3>
          ➡️ <code>plot method</code>
        </h3>
        <p>
          In this case, we have to specify the <code>kind</code> of chart we
          want to create. The <code>plot</code> method is a wrapper around the{' '}
          <code>matplotlib.pyplot.plot</code> function. The <code>kind</code>{' '}
          argument is used to specify the <b>type of chart</b> we want to
          create.
        </p>
        <CodeChunk>{plotApi}</CodeChunk>
        <br />
        <br />
        <h3>
          ➡️ <code>function name method</code>
        </h3>
        <p>
          The function name method is a bit more straightforward. We just have
          to call <b>the right function name</b> to create the chart we want.
          Matplotlib has various functions to create different types of charts.
          For example, the
          <code>line</code> function is used to create line charts.
        </p>

        <CodeChunk>{funcnameApi}</CodeChunk>

        <br />
        <br />
        <h3>
          ➡️ <code>plot + function name method</code>
        </h3>
        <p>
          This method is a combination of the previous two. We use the{' '}
          <code>plot</code> method and need the <code>function name</code>
          right after it.
        </p>

        <CodeChunk>{plotFuncnameApi}</CodeChunk>

        <br />
        <br />

        <p>
          The <code>function name</code> method is the most straightforward and
          the one we recommend. <b>Most posts</b> on the gallery use this
          method.
        </p>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Example">
          <Pandas />
          Chart examples with Pandas
        </h2>
        <p>
          Pandas offers a wide range of nice charts. Here is a{' '}
          <b>selection of examples</b> that you can find on the gallery. Click
          on the images to see the code!
        </p>
        <Row>
          <ChartImageContainer
            imgName="527-introduction-to-histogram-with-pandas"
            caption="Simple histogram built with pandas"
            linkTo="/527-introduction-to-histogram-with-pandas"
          />
          <ChartImageContainer
            imgName="529-multi-group-histogram-pandas"
            caption="Multi group histogram"
            linkTo="/529-multi-group-histogram-pandas"
          />
          <ChartImageContainer
            imgName="529-multi-group-histogram-pandas-2"
            caption="Small multiples histogram"
            linkTo="/529-multi-group-histogram-pandas"
          />

          <ChartImageContainer
            imgName="535-introduction-to-scatter-plot-with-pandas"
            caption="Scatter plot with pandas"
            linkTo="/535-introduction-to-scatter-plot-with-pandas"
          />
          <ChartImageContainer
            imgName="537-scatter-plots-grouped-by-color-with-pandas"
            caption="Scatter plot grouped by color"
            linkTo="/537-scatter-plots-grouped-by-color-with-pandas"
          />
          <ChartImageContainer
            imgName="536-customizing-scatter-plots-with-pandas"
            caption="Customized scatter plot"
            linkTo="/536-customizing-scatter-plots-with-pandas"
          />

          <ChartImageContainer
            imgName="538-introduction-to-barplot-with-pandas"
            caption="Barplot with pandas"
            linkTo="/538-introduction-to-barplot-with-pandas"
          />
          <ChartImageContainer
            imgName="539-customizing-barplot-with-pandas"
            caption="Customized barplot"
            linkTo="/539-customizing-barplot-with-pandas"
          />
          <ChartImageContainer
            imgName="540-barplots-grouped-by-color-with-pandas"
            caption="Barplot grouped by color"
            linkTo="/540-barplots-grouped-by-color-with-pandas"
          />
          <ChartImageContainer
            imgName="530-introduction-to-linechart-with-pandas"
            caption="Introduction to line chart with pandas"
            linkTo="/530-introduction-to-linechart-with-pandas"
          />
          <ChartImageContainer
            imgName="531-customizing-linecharts-with-pandas"
            caption="Customize your line charts with pandas"
            linkTo="/531-customizing-linecharts-with-pandas"
          />
          <ChartImageContainer
            imgName="532-linecharts-mutliple-groups-with-pandas"
            caption="Line charts with multiple variables or groups with pandas"
            linkTo="/532-linecharts-mutliple-groups-with-pandas"
          />
        </Row>
      </Container>

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
