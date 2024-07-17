import React from 'react';
import CodeChunk from '../components/CodeChunk';

const name = 'kdeplot';
const description = (
  <>
    <p>
      The <code>kdeplot()</code> function of{' '}
      <a href="https://python-graph-gallery.com/seaborn/">seaborn</a> generates
      Kernel Density Estimates to depict the probability density function of a
      continuous variable. It outputs a smoothed curve representing the
      distribution of the data.
    </p>
  </>
);

const docUrl = 'https://seaborn.pydata.org/generated/seaborn.kdeplot.html';

//
//
//
//
//
const param1 = {
  name: 'color',
  description: (
    <p>
      Adjusts the shape's color, affecting both its outline and the area beneath
      it. See <code>fill</code> to draw the area or not.
    </p>
  ),
  basicUsage: (
    <CodeChunk hasWhiteBackground>
      {`
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim()}
    </CodeChunk>
  ),
  type: 'string',
  howToUse: (
    <p>
      Can be a color name, a Hex code, or an RGB value. Read{' '}
      <a href="https://python-graph-gallery.com/python-colors/">this post</a> to
      learn more.
    </p>
  ),
  img: '71_Shaded_density_plot_Seaborn',
  post: '71-density-plot-with-shade-seaborn',
};

//
//
//
//
//
const param2 = {
  name: 'fill',
  description: <p>Controls the color of the area under the curve. See</p>,
  basicUsage: (
    <CodeChunk hasWhiteBackground>
      {`
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim()}
    </CodeChunk>
  ),
  type: <p>string</p>,
  img: '71_Shaded_density_plot_Seaborn',
  post: '71-density-plot-with-shade-seaborn',
};

//
//
//
//
//
const param3 = {
  name: 'bw_adjust',
  description: (
    <p>
      <code>bw_adjust</code> determines the smoothness of the graph. The higher
      the value, the smoother the graph.
    </p>
  ),
  basicUsage: (
    <CodeChunk hasWhiteBackground>
      {`
sns.kdeplot(data=df, x='sepal_width', bw_adjust=0.2)
`.trim()}
    </CodeChunk>
  ),
  type: <p>float</p>,
  img: '73_Control_bandwidth_densityplot_Seaborn2',
  post: '73-control-bandwidth-of-seaborn-density-plot',
};

//
//
//
//
//
const param4 = {
  name: 'cumulative',
  description: (
    <p>
      <code>cumulative</code> determines whether a cumulative distribution
      function should be estimated.
    </p>
  ),
  basicUsage: (
    <CodeChunk hasWhiteBackground>
      {`
sns.kdeplot(data=df, x='sepal_width', cumulative=True)
`.trim()}
    </CodeChunk>
  ),
  type: <p>bool</p>,
  img: '70-basic-density-plot-with-seaborn-2',
  post: '70-basic-density-plot-with-seaborn',
};

//
//
//
//
//
const param5 = {
  name: 'hue',
  description: (
    <p>
      <code>hue</code> is the name of the variable used to split the estimate
      into its categories.
    </p>
  ),
  basicUsage: (
    <CodeChunk hasWhiteBackground>
      {`
sns.kdeplot(data=df, x='sepal_width', hue='species')
`.trim()}
    </CodeChunk>
  ),
  type: <p>string</p>,
  img: '74_density_plot_multi_variables',
  post: '70-basic-density-plot-with-seaborn',
};

//
//
//
//
//
const param6 = {
  name: 'multiple',
  description: (
    <p>Determines the method for displaying multiple subsets in a plot.</p>
  ),
  basicUsage: (
    <CodeChunk hasWhiteBackground>
      {`
sns.kdeplot(data=df, x='sepal_width', hue='species', multiple='stack')
`.trim()}
    </CodeChunk>
  ),
  type: (
    <p>
      A string that can takes 3 values:
      <ul>
        <i>
          <code>layer</code>&rarr; Default value. The density estimation can
          overlap.
        </i>
        <br />
        <i>
          <code>stack</code>&rarr; The density estimates will be one on top of
          the other to avoid overlaps.
        </i>
        <br />
        <i>
          <code>fill</code>&rarr; The entire graph will be filled in to show the
          breakdown by category.
        </i>
      </ul>
    </p>
  ),
  img: 'density-chart-multiple-groups-seaborn4',
  post: 'density-chart-multiple-groups-seaborn',
};

export const kdeplot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5],
};
