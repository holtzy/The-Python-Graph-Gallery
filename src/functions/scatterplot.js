import React from 'react';
import CodeChunk from '../components/CodeChunk';

const name = 'scatterplot';
const description = (
  <>
    <p>
      The <code>scatterplot()</code> function of{' '}
      <a href="https://python-graph-gallery.com/seaborn/">seaborn</a> creates a
      scatter plot to visualize the relationship between two continuous
      variables. It displays each observation as a point on a two-dimensional
      plane.
    </p>
  </>
);

const docUrl = 'https://seaborn.pydata.org/generated/seaborn.scatterplot.html';

//
//
//
//
//
const param1 = {
  name: 'color',
  description: (
    <p>
      Sets the color of the scatter points. Can be a single color for all points
      or mapped to a variable using the <code>hue</code> parameter.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width',
  color='purple'
)
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      Can be a color name, a Hex code, or an RGB value. Read{' '}
      <a href="https://python-graph-gallery.com/python-colors/">this post</a> to
      learn more.
    </p>
  ),
  img: '40_Basic_Scatterplot_seaborn',
  post: '40-basic-scatterplot-seaborn',
};

//
//
//
//
//
const param2 = {
  name: 'hue',
  description: (
    <p>
      <code>hue</code> is the name of the variable that determines the color of
      scatter points. It allows for grouping and differentiating data points.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width',
  hue='species'
)
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      Specify the column name in your dataset that you want to use for
      color-coding the points.
    </p>
  ),
  img: '43_seaborn_map_color_to_a_avariable3',
  post: '43-use-categorical-variable-to-color-scatterplot-seaborn',
};

//
//
//
//
//
const param3 = {
  name: 'size',
  description: (
    <p>
      Determines the size of the scatter points. Can be a fixed value or mapped
      to a variable.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width',
  size='petal_length'
)
`.trim(),
  type: 'string or number',
  howToUse: (
    <p>
      Use a number for fixed size or a column name to vary point sizes based on
      data.
    </p>
  ),
  img: 'bubble-plot-with-seaborn',
  post: 'bubble-plot-with-seaborn',
};

//
//
//
//
//
const param4 = {
  name: 'style',
  description: (
    <p>
      <code>style</code> determines the marker style for scatter points. It can
      be used to represent an additional categorical variable.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width',
  style='species'
)
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      Specify a column name to vary marker styles based on categories in that
      column.
    </p>
  ),
  img: '41_Scatterplot_change_marker_shape_seaborn',
  post: '41-control-marker-features',
};

//
//
//
//
//
const param5 = {
  name: 'legend',
  description: (
    <p>
      Determines whether to show the legend for hue, size, or style mappings.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width',
  hue='species',
  legend=True
)
`.trim(),
  type: 'boolean',
  howToUse: (
    <p>
      Set to <code>True</code> to show the legend, <code>False</code> to hide
      it.
    </p>
  ),
  img: '43_seaborn_map_color_to_a_avariable3',
  post: '43-use-categorical-variable-to-color-scatterplot-seaborn',
};

export const scatterplot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5],
};
