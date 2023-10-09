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
import { Col } from 'react-bootstrap';
import CodeChunk from '../components/CodeChunk';
import ChartImage from '../components/ChartImage';
import FunctionExploration from '../components/FunctionExploration';
import Spacing from '../components/Spacing';

const chartDescription = (
  <>
    <p>
      Python is not only great at data visualization, but it is also powerful
      for running <b>statistical analysis</b>, providing a comprehensive toolkit
      for both beginners and seasoned statisticians to extract meaningful
      insights from complex datasets.
    </p>
    <p>
      This section shows how to visualize the results of your statistical
      analysis, like Principal Component Analysis (<b>PCA</b>),{' '}
      <b>linear modeling</b>, ANOVA, t-tests and more.
    </p>
    <p>
      It does not focus on how to run the test, but on how to{' '}
      <b>make clean output</b>
      to present your findings in a appealing manner.
    </p>
  </>
);

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# plot
sns.violinplot(x=df["species"], y=df["sepal_length"])
`;

export default function ViolinPlot() {
  return (
    <Layout
      title="Visualizing statistics with Python"
      isTocEnabled
      seoDescription="How to run statistical analysis in Python and visualize the results efficiently."
    >
      <TitleAndDescription
        title="Visualizing statistics with Python"
        description={chartDescription}
        chartType={'statistics'}
      />

      <Container>
        <h2 id="PCA">Principal Component Analysis (PCA)</h2>
        <p>
          Principal Component Analysis (<b>PCA</b>) is a transformative
          technique widely used in the realm of data science to{' '}
          <b>reduce the dimensionality</b> of large datasets while preserving as
          much variance as possible. By transforming the original variables into
          a new set of orthogonal components, PCA offers a concise yet
          informative perspective, making it easier to visualize and analyze
          high-dimensional data.
        </p>
        <p>
          Python is a powerful tool when it comes to PCA thanks to its{' '}
          <code>scikit-learn</code> library.
        </p>
        <p>
          The following post teaches how to perform a PCA with{' '}
          <code>scikit-learn</code> and focus on how to build clean outputs
          using <Link href="/matplotlib">matplotlib</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="515-intro-pca-graph-python-1"
            caption="The scree plot allows to check for the variance explained by each variable."
            linkTo="/515-intro-pca-graph-python"
          />
          <ChartImageContainer
            imgName="515-intro-pca-graph-python-2"
            caption="Check the correlation circle plot to see the correlation between variables"
            linkTo="/515-intro-pca-graph-python"
          />
          <ChartImageContainer
            imgName="515-intro-pca-graph-python-3"
            caption="Use a scatterplot to check how samples are clusterized"
            linkTo="/515-intro-pca-graph-python"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="PCA">Hypothesis testing</h2>
        <p>
          <b>Statistical hypothesis testing</b> is a key technique in the realm of
          data analysis.</p>
        <p>
          The posts below explain how to display the results of your hypothesis
          tests <b>on your graphs</b>, so as to represent your results in the most elegant
          way possible. 
        </p>
        <p>
          We'll use the scipy library to run the tests and <Link href="/matplotlib">matplotlib</Link>
          to display the results.
        </p>
        <Row>
          <ChartImageContainer
            imgName="551-student-t-test-visualization-1"
            caption="Histograms with p-value and t statistic"
            linkTo="/551-student-t-test-visualization"
          />
          <ChartImageContainer
            imgName="551-student-t-test-visualization-2"
            caption="Boxplots with p-value and t statistic"
            linkTo="/551-student-t-test-visualization"
          />
        </Row>
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
    </Layout>
  );
}
