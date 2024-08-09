import React from 'react';

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
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width'
)
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
  img: '40_Basic_Scatterplot_seaborn',
  post: '40-basic-scatterplot-seaborn',
};
//
//
//
//
//
const param2 = {
  name: 'x',
  description: (
    <p>Variable name that specify which column to plot on the x-axis.</p>
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
)
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      The simplest usage is to specify a column name (string) of a numerical
      variable in <code>data</code>. Alternatively, you can omit{' '}
      <code>data</code> and pass a vector-like object of numerical values to{' '}
      <code>x</code>.
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
const param3 = {
  name: 'y',
  description: (
    <p>Variable name that specify which column to plot on the y-axis.</p>
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
)
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      The simplest usage is to specify a column name (string) of a numerical
      variable in <code>data</code>. Alternatively, you can omit{' '}
      <code>data</code> and pass a vector-like object of numerical values to{' '}
      <code>y</code>.
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
const param4 = {
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
const param5 = {
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
const param6 = {
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
const param7 = {
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
const param8 = {
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

const param9 = {
  name: 'palette',
  description: (
    <p>
      Defines colors for the hue semantic. It can be a list of colors or a
      matplotlib colormap.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
from pypalettes import get_hex
df = sns.load_dataset('iris')

# Load the 'Acadia' palette
palette = get_hex('Acadia')

# Plot
sns.scatterplot(
  data=df,
  x='sepal_length',
  y='sepal_width',
  hue='species',
  palette=palette
)
`.trim(),
  type: 'list',
  howToUse: (
    <div>
      <p>
        This parameter is used <b>in combination</b> with the <code>hue</code>{' '}
        parameter and will a assign a different color to each category in{' '}
        <code>hue</code>.
      </p>
      <p>
        Moreover, the <a href="/color-palette-finder">pypalettes library</a> can
        help you find the best colors for your chart by providing access to
        thousands of pre-made color palette.
      </p>
    </div>
  ),
  img: '43-use-categorical-variable-to-color-scatterplot-seaborn-pypalettes',
  post: '43-use-categorical-variable-to-color-scatterplot-seaborn',
};

export const scatterplot = {
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
  ],
};
