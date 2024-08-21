import React from 'react';
import {
  colorHowToUse,
  hueDescription,
  hueHowToUse,
  dataDescription,
  dataHowToUse,
  paletteDescription,
  paletteHowToUse,
} from './paramDescription';

const name = 'kdeplot()';
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
  name: 'data',
  description: <div>{dataDescription}</div>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width')
`.trim(),
  type: 'dataframe',
  howToUse: <div>{dataHowToUse}</div>,
  img: '70_Basic_density_plot_Seaborn',
  post: '71-density-plot-with-shade-seaborn',
};
//
//
//
//
//
const param2 = {
  name: 'x',
  description: <p>Variable name that specify which column to plot.</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width')
`.trim(),
  type: 'string',
  howToUse: (
    <div>
      <p>
        Instead of specifying <code>x=&apos;col_name&apos;</code>, you can{' '}
        <code>y=&apos;col_name&apos;</code> to plot the density on the y axis
        instead.
      </p>
      <p>
        If both <code>x</code> and <code>y</code> are provided, plots a 2
        dimensional density plot.
      </p>
    </div>
  ),
  img: '70_Basic_density_plot_Seaborn',
  post: '71-density-plot-with-shade-seaborn',
};
//
//
//
//
//
const param3 = {
  name: 'y',
  description: <p>Variable name that specify which column to plot.</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, y='sepal_width')
`.trim(),
  type: 'string',
  howToUse: (
    <div>
      <p>
        Instead of specifying <code>x=&apos;col_name&apos;</code>, you can{' '}
        <code>y=&apos;col_name&apos;</code> to plot the density on the y axis
        instead.
      </p>
      <p>
        If both <code>x</code> and <code>y</code> are provided, plots a 2
        dimensional density plot.
      </p>
    </div>
  ),
  img: '72_Horizontal_density_plot_Seaborn',
  post: '72-horizontal-density-plot',
};
//
//
//
//
//
const param4 = {
  name: 'color',
  description: (
    <p>
      Adjusts the shape&apos;s color, affecting both its outline and the area
      beneath it. See <code>fill</code> to draw the area or not.
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
  howToUse: <div>{colorHowToUse}</div>,
  img: '70_Basic_density_plot_Seaborn',
  post: '71-density-plot-with-shade-seaborn',
};

//
//
//
//
//
const param5 = {
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
sns.kdeplot(data=df, x='sepal_width', fill=True)
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
const param6 = {
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
sns.kdeplot(data=df, x='sepal_width', bw_adjust=0.3)
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
//
const param7 = {
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
sns.kdeplot(data=df, x='sepal_width', cumulative=True)
`.trim(),
  type: 'boolean',
  howToUse: (
    <p>
      When to <code>False</code> (default), it estimates and display the density
      function but you can switch to <code>True</code> to display the cumulative
      distribution.
    </p>
  ),
  img: '70-basic-density-plot-with-seaborn-2',
  post: '70-basic-density-plot-with-seaborn',
};

//
//
//
//
//
//
const param8 = {
  name: 'hue',
  description: <div>{hueDescription}</div>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width', hue='species')
`.trim(),
  type: 'string',
  howToUse: <div>{hueHowToUse}</div>,
  img: '74_density_plot_multi_variables',
  post: '74-density-plot-of-several-variables',
};

//
//
//
//
//
const param9 = {
  name: 'palette',
  description: <div>{paletteDescription}</div>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
from pypalettes import get_hex
df = sns.load_dataset('iris')

palette = get_hex('Acadia')
sns.kdeplot(
  data=df,
  x='sepal_width',
  hue='species',
  palette=palette
)
`.trim(),
  type: 'list',
  howToUse: <div>{paletteHowToUse}</div>,
  img: 'density-chart-multiple-groups-seaborn6',
  post: 'density-chart-multiple-groups-seaborn',
};

//
//
//
//
//
const param10 = {
  name: 'multiple',
  description: (
    <p>
      Determines how to display multiple groups on the chart.
      <br />
      This parameter becomes interesting when using the <code>hue</code>{' '}
      parameter as it dictates the behaviour in the case of{' '}
      <b>multiple distributions</b> on a graph.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(
  data=df,
  x='sepal_width',
  multiple='paramgoeshere',
  hue='species'
)
`.trim(),
  type: 'string',
  options: [
    {
      name: 'layer',
      explanation: <p>Groups are overlapping each other</p>,
      isDefault: true,
      img: '74_density_plot_multi_variables',
    },
    {
      name: 'stack',
      explanation: <p>Groups are stacked on top of each other</p>,
      isDefault: true,
      img: 'density-chart-multiple-groups-seaborn1',
    },
    {
      name: 'fill',
      explanation: (
        <p>Entire graph will be filled in to show the breakdown by category.</p>
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
  parameters: [
    param1,
    param2,
    param3,
    param4,
    param5,
    param6,
    param7,
    param8,
    param9,
    param10,
  ],
};
