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
  name: 'data',
  description: (
    <p>
      Dataframe-like (pandas, numpy, polars...) with the columns we want to
      plot.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.kdeplot(data=df, x='sepal_width')
`.trim(),
  type: 'dataframe',
  howToUse: (
    <div>
      <p>
        It just has to be a <code>pandas.DataFrame</code> (columns are
        variables),
        <code>numpy.ndarray</code> (rows/columns are variables), or any
        mapping/sequence (dictionaries/lists)
      </p>
      <p>
        Supports both long-form (each variable in its own column) and wide-form
        (variables in separate columns; reshaped internally).
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
  howToUse: (
    <p>
      Can be a color name, a Hex code, or an RGB value. Read{' '}
      <a href="https://python-graph-gallery.com/python-colors/">this post</a> to
      learn more.
    </p>
  ),
  img: '70_Basic_density_plot_Seaborn',
  post: '71-density-plot-with-shade-seaborn',
};

export const kdeplot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4],
};
