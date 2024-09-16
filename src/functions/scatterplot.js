import React from 'react';
import {
  hueDescription,
  hueHowToUse,
  paletteDescription,
  paletteHowToUse,
  colorHowToUse,
  dataDescription,
  dataHowToUse,
} from './paramDescription';

const name = 'scatterplot()';
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
  description: <div>{dataDescription}</div>,
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
plt.show()
`.trim(),
  type: 'dataframe',
  howToUse: <div>{dataHowToUse}</div>,
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
plt.show()
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
plt.show()
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
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{colorHowToUse}</div>,
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
  description: <div>{hueDescription}</div>,
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
  howToUse: <div>{hueHowToUse}</div>,
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
plt.show()
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
plt.show()
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
plt.show()
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
  description: <div>{paletteDescription}</div>,
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
plt.show()
`.trim(),
  type: 'list',
  howToUse: <div>{paletteHowToUse}</div>,
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
