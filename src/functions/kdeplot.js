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
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim(),
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
  description: (
    <p>
      Control wether or not the area under the curve is filled with color. See
      the <code>color</code> argument to control its color.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim(),
  type: 'boolean',
  howToUse: (
    <p>
      Use <code>true</code> to fill the area, <code>false</code> to use a line
      only.
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
const param3 = {
  name: 'bw_adjust',
  description: (
    <p>
      Determines the smoothness of the graph. It basically tweaks the kernel
      density estimation model.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      A value close to <code>0</code> produces a very smooth graph, while a
      value close to <code>1</code>
      reveals more detailed variable density.
    </p>
  ),
  img: '73_Control_bandwidth_densityplot_Seaborn2',
  post: '73-control-bandwidth-of-seaborn-density-plot',
};

//
//
//
//
//
// JOSEPH TODO
const param4 = {
  name: 'cumulative',
  description: (
    <p>
      <code>cumulative</code> determines whether a cumulative distribution
      function should be estimated.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim(),
  type: <p>bool</p>,
  img: '70-basic-density-plot-with-seaborn-2',
  post: '70-basic-density-plot-with-seaborn',
};

//
//
//
//
//
// JODEPH TODO
const param5 = {
  name: 'hue',
  description: (
    <p>
      <code>hue</code> is the name of the variable used to split the estimate
      into its categories.
    </p>
  ),
  basicUsage: `
sns.kdeplot(data=df, x='sepal_width', hue='species')
`.trim(),
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
  description: <p>Determines how to display multiple groups on the chart.</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', multiple="paramgoeshere")
`.trim(),
  type: 'string',
  options: [
    {
      name: 'layer',
      explanation: <p>Groups are overlapping each other</p>,
      isDefault: true,
      img: 'density-chart-multiple-groups-seaborn4',
    },
    {
      name: 'stack',
      explanation: <p>Groups are stacked on top of each other</p>,
      isDefault: true,
      img: 'density-chart-multiple-groups-seaborn4',
    },
    {
      name: 'fill',
      explanation: (
        <p>entire graph will be filled in to show the breakdown by category.</p>
      ),
      isDefault: true,
      img: 'density-chart-multiple-groups-seaborn4',
    },
  ],
  img: 'density-chart-multiple-groups-seaborn4',
  post: 'density-chart-multiple-groups-seaborn',
};

export const kdeplot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5, param6],
};
