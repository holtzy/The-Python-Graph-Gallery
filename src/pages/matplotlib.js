
import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib } from "../components/MiscellaneousLogos"
import { Col, ToggleButton } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";
import { Button } from "react-bootstrap";

const chartDescription =
  "<p><code>Matplotlib</code> is the most famous library for data visualization with <code>python</code>. It allows to create literally every type of chart with a great level of customization. This page provides some general tips that can be applied on any kind of chart made with <code>matplotlib</code> like customizing titles or colors. If you're looking at creating a specific chart type, visit <a href='https://www.python-graph-gallery.com'>the gallery</a> instead.</p>";

const quickCode = `# library
import numpy as np
import matplotlib.pyplot as plt

# Create data
x=range(1,6)
y=[1,4,6,8,4]

# Area plot
plt.fill_between(x, y)
plt.show()
`

const pyplotAPI = `# import libraries
import pandas as pd
import matplotlib.pyplot as plt

# Create a data frame
df = pd.DataFrame ({'Group':  ['A', 'B', 'C', 'D', 'E'], 'Value': [1,5,4,3,9]})

# Create horizontal bars
plt.barh(y=df.Group, width=df.Value);

# Add title
plt.title('A simple barplot');
`
const objOrientedAPI = `# import libraries
import pandas as pd
import matplotlib.pyplot as plt

# Create a data frame
df = pd.DataFrame ({'Group':  ['A', 'B', 'C', 'D', 'E'], 'Value': [1,5,4,3,9]})

# Initialize a Figure and an Axes
fig, ax = plt.subplots()

# Fig size
fig.set_size_inches(9,9)

# Create horizontal bars
ax.barh(y=df.Group, width=df.Value);

# Add title
ax.set_title('A simple barplot');
`

const allStyle = ['seaborn-darkgrid', 'seaborn-notebook', 'classic', 'seaborn-ticks', 'grayscale', 'bmh', 'seaborn-talk', 'dark_background', 'ggplot', 'fivethirtyeight', '_classic_test', 'seaborn-colorblind', 'seaborn-deep', 'seaborn-whitegrid', 'seaborn-bright', 'seaborn-poster', 'seaborn-muted', 'seaborn-paper', 'seaborn-white', 'seaborn-pastel', 'seaborn-dark', 'seaborn', 'seaborn-dark-palette']


export default function Matplotlibs() {

  const [selectedParameter, setSelectedParameter] = React.useState(allStyle[0])

  const allStyleButtons = allStyle.map(
    (item, i) =>
      <ToggleButton
        type="radio"
        active={true}
        key={i}
        className={"functionButton"}
        variant="secondary"
        size="sm"
        value={item}
        checked={selectedParameter === item}
        onChange={(e) => setSelectedParameter(e.currentTarget.value)}
      >
        {item}
      </ToggleButton>
  )

  return (

    <Layout title="Matplotlib" isTocEnabled seoDescription="A collection of charts, tips and tricks on the Matplotlib Python library.">

      <TitleAndDescription
        title="Matplotlib"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>Matplotlib</code> is the most famous python data visualization library. It is widely used and most of other viz libraries (like <code>seaborn</code>)
            are actually built on top of it.</p>
            <p>Once installed, matplotlib must be imported, usually using <code>import matplotlib.pyplot as plt</code>. You can then use use the functions available in the <code>plt</code> object.</p>
          </Col>
          <Col md={6}>
            <Link to={"/240-basic-area-chart"}>
              <ChartImage imgName="240_basic_area_chart"
                caption="The most basic area chart one can make with python and matplotlib" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Lexicon"><Matplotlib />Basic vocabulary</h2>
        <p>
          The figure below describes the anatomy of a <code>matplotlib</code> charts. It names all the main components,
          names that you need to know to understand the documentation properly.
        </p>
        <p>
          &#9888;&#65039; <u>Disclaimer</u>: this figure comes from the very complete <a href='https://matplotlib.org/faq/usage_faq.html#coding-styles'>matplotlib documentation</a>. Have a look at it
          for a thorough explanation on how this library works.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <ChartImage imgName={'matplotlib_vocabulary'} caption={'Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly'} />
        </div>
        <a href='https://matplotlib.org/faq/usage_faq.html#coding-styles'>
          <Button size="sm">Matplotlib doc</Button>
        </a>
      </Container>

      <Spacing />


      <Container>
        <h2 id="APIs"><Matplotlib />Two distinct APIs</h2>
        <p>
          There are 2 main ways to build a chart with matplotlib: the <code>pyplot API</code> and the <code>object-oriented API</code>.
        </p>
        <p>➡️ <code>pyplot API</code></p>
        <p>Pyplot is a collection of functions, each function applying a change to a figure. For
          instance, <code>plt.barh()</code> will build a barplot and <code>plt.title()</code> will
          add a title to it.
        </p>
        <CodeChunk>{pyplotAPI}</CodeChunk>

        <br /><br />
        <p>➡️ <code>object oriented API</code></p>
        <p>The object oriented API usually starts by initializing one <code>Figure</code> object and
        one or more <code>Axes</code> object using the <code>subplot()</code> function. Then the methods of those objects
        will be used to apply changes to the chart.</p>
        <CodeChunk>{objOrientedAPI}</CodeChunk>

        <br /><br />
        <p>See how the syntax slightly differs between both options? (<code>plt.title</code> versus <code>ax.set_title()</code>. This
        is pretty confusing and I advise to have a look to the <a href='https://matplotlib.org/stable/api/index.html#usage-patterns'>official documentation</a> for a
        more thorough explanation. In the gallery, both APIs are used.</p>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Title"><Matplotlib />Customizing titles</h2>
        <p>
          The title is a key part of a good chart. It has to <u>summarize</u> its key message in a few words. Always avoid to simply
          repeat what is displayed on each axis. Try to provide some more insight allowing to understand the main result instead.
        </p>
        <p>The <Link to='/190-custom-matplotlib-title'>post #190</Link> goes in depth on how to customize the <code>matplotlib</code>
        title. All the main types of change are descried: changing
        its color, adding a subtitle, using math formulas and so on. Give it a go!
        </p>
        <Row>
          <ChartImageContainer
            imgName="190_Custom_title6"
            caption="Python chart with subtitle and custom color"
            linkTo="/190-custom-matplotlib-title"
          />
          <ChartImageContainer
            imgName="190_Custom_title7"
            caption="Add a math formula in title with Matplotlib"
            linkTo="/190-custom-matplotlib-title"
          />
          <ChartImageContainer
            imgName="190_Custom_title5"
            caption="Control the height of the matplotlib title"
            linkTo="/190-custom-matplotlib-title"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Annotation"><Matplotlib />Annotation</h2>
        <p>
          Annotation is a key part of a great visualization. It transforms a simple chart
          in a whole piece of story telling. Before you share your graph with anyone,
          make sure the key insight are highlighted with labels, shapes or color.
        </p>
        <p>
          All those kind of annotation are built thanks to various matplotlib functions
          like <code>annotate()</code> or <code>add_patch()</code>. The blogposts showcased below should get you started
          with it.
        </p>
        <Row>
          <ChartImageContainer
            imgName="193_annotate1"
            caption="Add a label with a segment"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate2"
            caption="Add a square to highlight an area"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate3"
            caption="Add a circle to highlight an area"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate4"
            caption="Add a segment"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate5"
            caption="Add vertical and horizontal ablines"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate6"
            caption="Annotate with an equation"
            linkTo="/193-annotate-matplotlib-chart"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Margin"><Matplotlib />Add margin around a <code>matplotlib</code> chart</h2>
        <p>
          It is a common struggle to deal with the margins around the chart. Fortunately this
          is pretty straightforward thanks to the <code>subplots_adjust()</code> function as explained in the examples
          below.
        </p>
        <Row>
          <ChartImageContainer
            imgName="192_increase_margin2"
            caption="Increase the bottom margin of a matplotlib chart."
            linkTo="/192-about-matplotlib-margins"
          />
          <ChartImageContainer
            imgName="192_increase_margin4"
            caption="Increase the top margin to fit a title"
            linkTo="/192-about-matplotlib-margins"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Subplot"><Matplotlib />Split the figure in subplots</h2>
        <p>
          It can be really useful to split your graphic window in several
          parts, in order to display several charts in the same time.
          The <code>subplot()</code> function of <code>matplotlib</code> allows to
          do it quickly with a great level of customization.
        </p>
        <Row>
          <ChartImageContainer
            imgName="194_matplotlib_subplot4"
            caption="Split the figure in 4 charts of same size."
            linkTo="/194-split-the-graphic-window-with-subplot"
          />
          <ChartImageContainer
            imgName="194_matplotlib_subplot6"
            caption="Split the figure with a custom layout"
            linkTo="/192-about-matplotlib-margins"
          />
          <ChartImageContainer
            imgName="194_matplotlib_subplot9"
            caption="Manage chart size on subplots"
            linkTo="/192-about-matplotlib-margins"
          />
        </Row>
      </Container>

      <Spacing />


      <Container>
        <h2 id="Theme"><Matplotlib />Available style sheets</h2>
        <p>
          <code>Matplotlib</code> comes with a set of 26 pre-built themes to style your chart easily. <Link to='/199-matplotlib-style-sheets'>This post</Link> is
           dedicated to this feature, explaining how to use <code>plt.style.use()</code> to pick a theme up.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: 30 }}>
          <Link to='/199-matplotlib-style-sheets'>
            <ChartImage imgName={'199-matplotlib-style-sheets-538-full'} caption={'Customize a matplotlib chart with a preset theme'} />
          </Link>
        </div>





      </Container>

      <Spacing />

      <Container>
        <h2 id="Axis"><Matplotlib />Customizing axis</h2>
        <p>
          <code>Matplotlib</code> allows every kind of axis configuration. It is mainly done thanks
          to the <code>tick_params()</code>, <code>xticks()</code> and <code>xlabels()</code> functions.
          The <Link to='191-custom-axis-on-matplotlib-chart'>post #191</Link> will guide you through all the possibilities.
        </p>
        <Row>
          <ChartImageContainer
            imgName="191_Custom_axis1"
            caption="Change the axis title and its appearance"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis2"
            caption="Control axis labels and ticks look"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="191_Custom_axis6"
            caption="Control axis limit with the xlim() function"
            linkTo="/191-custom-axis-on-matplotlib-chart"
          />
        </Row>
      </Container>

      <Spacing />
      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="evolution" />
        </Container>
      </div>

      <Spacing />


      <Container>
        <Contact />
      </Container>

      <Spacing />

    </Layout >
  );
}
