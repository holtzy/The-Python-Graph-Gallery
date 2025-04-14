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
import { Button } from 'react-bootstrap';

const chartDescription =
  '<p>This site is <a href="https://github.com/holtzy/The-Python-Graph-Gallery">open source</a>, meaning that <b>anyone can contribute</b> to it, mostly either by improving current content or adding brand new content.</p>';

export const Head = () => (
  <SEO
    title="Contributing"
    seoDescription="how to contribute to the the Python Graph Gallery"
  />
);

export default function Contributing() {
  return (
    <Layout isTocEnabled>
      <TitleAndDescription
        title="Contributing"
        description={chartDescription}
      />

      <Spacing />

      <Container>
        <h2 id="Contribution">🙇‍♂️ How to contribute</h2>
        <h3>Set up development environment</h3>
        <p>Here are the steps to follow to install the website locally:</p>
        <ul>
          <li>
            If not already, install Git, Node.js, npm, Gatsby. See{' '}
            <a
              href="https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/"
              target="_blank"
            >
              this page
            </a>{' '}
            for a dedicated tutorial.
          </li>
          <li>
            Fork and Clone the{' '}
            <a
              href="https://github.com/holtzy/The-Python-Graph-Gallery"
              target="_blank"
            >
              Github repo
            </a>
            .
          </li>
          <li>Create a new Git branch</li>
          <li>
            Run <code>npm install</code> to install dependencies
          </li>
          <li>
            Run <code>npm run develop</code> to build and view the site locally.
            It may take 1 to 2 minutes to build, and then open{' '}
            <code>http://localhost:8000</code> in your browser.
          </li>
        </ul>
        <h3>Improve a blog post</h3>
        <p>
          Let's say you want to improve the blog post at this url{' '}
          <a
            href="https://python-graph-gallery.com/20-basic-histogram-seaborn/"
            target="_blank"
          >
            <code>
              https://python-graph-gallery.com/<b>20-basic-histogram-seaborn</b>
              /
            </code>
          </a>
        </p>
        <ul>
          <li>
            In your code editor, open the{' '}
            <code>20-basic-histogram-seaborn.ipynb</code> file.
          </li>
          <li>
            Since it's just a Jupyter Notebook, you can make all the changes you
            want in this file.
          </li>
          <li>
            Commit and push your changes, and then open a PR. Feel free to tag{' '}
            <code>
              <b>@holtzy</b>
            </code>{' '}
            on Github to ensure your PR get a review.
          </li>
        </ul>
        <h3>Create a blog post</h3>
        <p>
          The recommended way to create a new blog post is to dupplicate an
          existing one and then update from it. The steps are:
        </p>
        <ul>
          <li>
            Dupplicate an existing <code>.ipynb</code> file stored in{' '}
            <code>src/notebooks/</code>
          </li>
          <li>
            Rename it with the name of your blog post.
            <ul>
              <li>
                Use only lowercase letters and the <code>-</code> symbol.
              </li>
              <li>
                Make sure it starts with a number not already taken, above 600.
              </li>
              <li>
                For example, it could be{' '}
                <code>
                  602-combine-boxplot-and-violintplot-using-seaborn.ipynb
                </code>
              </li>
            </ul>
          </li>
          <li>
            Open this file in order to change the <code>slug</code> metadata
            parameters. For this, you need to open it without Jupyter Notebooks.
            <ul>
              <li>
                In VS Code, you can do <code>Open With {'>'} Text Editor</code>{' '}
                (instead of <code>Jupyter Notebook</code>, the default).
              </li>
              <li>
                The <code>slug</code> parameter is at the very end of the file.
              </li>
              <li>
                Put the exact same name as for the file name (without the
                extension), such as{' '}
                <code>602-combine-boxplot-and-violintplot-using-seaborn</code>
              </li>
            </ul>
          </li>
          <li>
            You might need to re run <code>npm run develop</code> to re-build
            the site. Once done, open{' '}
            <code>
              http://localhost:8000/602-combine-boxplot-and-violintplot-using-seaborn
            </code>
          </li>
          <li>
            Now you should be able to make modifications in the Jupyter Notebook
            that will automatically appear on your browser.
          </li>
          <li>
            Once you have write your blog posts, you need to{' '}
            <b>change the metadata</b> of the file. Once again, you have to open
            the notebook as a text file.
            <ul>
              <li>
                title: the main title that will appear in big at the very top of
                the blogpost
              </li>
              <li>
                description: the first chunk of text that will appear under the
                title. You can use html here, so feel free to include some links
                and formatting.
              </li>
              <li>
                <code>family</code>: must be be one of: <b>evolution</b>,{' '}
                <b>ranking</b>,<b>distribution</b>, <b>general</b>,{' '}
                <b>correlation</b>, <b>partOfAWhole</b>, <b>flow</b>
              </li>
              <li>
                <code>chartType</code>: it must be one of the id used in{' '}
                <a
                  href="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/src/util/sectionDescriptions.js"
                  target="_blank"
                >
                  this file
                </a>
                .
              </li>
              <li>
                <code>slug</code>: we did it previously already
              </li>
              <li>
                <code>keywords</code>: will be passed to the html page header
              </li>
              <li>
                <code>seoDescription</code>: will be used for the description
                header meta tag of the html page. So think about what google
                wants to know about your post. Text only.
              </li>
            </ul>
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
