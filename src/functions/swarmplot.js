import React from 'react';
import {
  colorHowToUse,
  dataDescription,
  dataHowToUse,
  hueDescription,
  hueHowToUse,
  paletteDescription,
  paletteHowToUse,
  linewidthHowToUse,
} from './paramDescription';

const name = 'swarmplot()';
const description = (
  <>
    <p>
      The <code>swarmplot()</code> function from <a href="/seaborn">seaborn</a>{' '}
      creates a categorical scatter plot where each point is adjusted (swarmed)
      so that it does not overlap with others. This plot is particularly useful
      for visualizing the distribution of data points in small datasets while
      avoiding data occlusion.
    </p>
  </>
);

const docUrl = 'https://seaborn.pydata.org/generated/seaborn.swarmplot.html';
//
//
//
//
//
const param1 = {
  name: 'x',
  description: (
    <p>Variable name that specify which column to plot on the x-axis.</p>
  ),
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(x="day", y="total_bill", data=data)
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
  img: '505-Introduction-to-swarm-plot-in-seaborn-1',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param2 = {
  name: 'y',
  description: (
    <p>Variable name that specify which column to plot on the y-axis.</p>
  ),
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(x="total_bill", y="day", data=data)
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
  img: '505-Introduction-to-swarm-plot-in-seaborn-2',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param3 = {
  name: 'data',
  description: <div>{dataDescription}</div>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(x="total_bill", y="day", data=data)
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{dataHowToUse}</div>,
  img: '505-Introduction-to-swarm-plot-in-seaborn-2',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param4 = {
  name: 'hue',
  description: <div>{hueDescription}</div>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(x="day", y="total_bill", hue="sex", data=data)
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{hueHowToUse}</div>,
  img: '505-Introduction-to-swarm-plot-in-seaborn-3',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param5 = {
  name: 'palette',
  description: <div>{paletteDescription}</div>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(
  x="day",
  y="total_bill",
  hue="sex",
  data=data,
  palette="Set2"
)
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{paletteHowToUse}</div>,
  img: 'tuto-swarmplot-3-square',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param6 = {
  name: 'size',
  description: <p>Sets the size of the plot markers.</p>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(x="day", y="total_bill", data=data, size=8)
plt.show()
`.trim(),
  type: 'float',
  howToUse: (
    <p>
      Larger values result in larger markers. Useful for emphasizing certain
      data points.
    </p>
  ),
  img: 'tuto-swarmplot-2-square',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param7 = {
  name: 'edgecolor',
  description: (
    <p>
      Color of the marker edges. It can be a single color or a list of colors
      with the same length as the number of data points.
    </p>
  ),
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(
  y="total_bill",
  x="sex",
  data=data,
  edgecolor="black",
  linewidth=1.5
)
plt.show()
`.trim(),
  type: 'str',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-swarmplot-4-square',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};
//
//
//
//
//
const param8 = {
  name: 'linewidth',
  description: <p>Width of the marker edges.</p>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset("tips")
sns.swarmplot(
  y="total_bill",
  x="sex",
  data=data,
  edgecolor="black",
  linewidth=1.5
)
plt.show()
`.trim(),
  type: 'str',
  howToUse: <div>{linewidthHowToUse}</div>,
  img: 'tuto-swarmplot-4-square',
  post: '505-introduction-to-swarm-plot-in-seaborn',
};

export const swarmplot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5, param6, param7, param8],
};
