import React from 'react';
import {
  colorHowToUse,
  hatchHowToUse,
  alphaHowToUse,
  linewidthDescription,
  linewidthHowToUse,
} from './paramDescription';

const name = 'stackplot()';
const description = (
  <>
    <p>
      The <code>stackplot()</code> function from{' '}
      <a href="/matplotlib">matplotlib</a> creates a stacked area plot. This
      type of plot is used to show how multiple variables change over time, with
      each variable stacked on top of the previous ones. It's particularly
      useful for visualizing the composition of a whole over time.
    </p>
  </>
);

const docUrl =
  'https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.stackplot.html';

const param1 = {
  name: 'x',
  description: <p>The x coordinates of the data points.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(x, y1, y2)
plt.show()
`.trim(),
  type: 'array-like',
  howToUse: (
    <p>
      Pass a 1D array-like object for the x-axis values. This is typically the
      time axis.
    </p>
  ),
  img: 'tuto-stackplot-6-square',
  post: '250-basic-stacked-area-chart',
};
//
//
//
//
//
const param2 = {
  name: 'y',
  description: (
    <p>
      The y coordinates of the data points. Each input will generate a colored
      area.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)
y3 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(x, y1, y2, y3)
plt.show()
`.trim(),
  type: 'array-like or sequence of array-likes',
  howToUse: (
    <p>
      Pass <b>one or more</b> 1D array-like objects, each representing a
      different data series to be stacked. You can pass these as separate
      arguments or as a single sequence.
    </p>
  ),
  img: '250_basic_stacked_area_chart',
  post: '250-basic-stacked-area-chart',
};
//
//
//
//
//
const param3 = {
  name: 'labels',
  description: (
    <p>A sequence of strings to identify each data series in the legend.</p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2,
  labels=['Series 1', 'Series 2', 'Series 3']
)
ax.legend(loc='upper left', fontsize=12)
plt.show()
`.trim(),
  type: 'list of str',
  howToUse: (
    <p>
      Provide a list of strings, one for each data series. These labels will be
      used in the legend if it is displayed with <code>ax.legend()</code>.
    </p>
  ),
  img: 'tuto-stackplot-1-square',
  post: 'introduction-to-stackplot-in-matplotlib',
};
//
//
//
//
//
const param4 = {
  name: 'colors',
  description: <div>The colors to use for each area, from bottom to top.</div>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)
y3 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2, y3
  colors=['#EED4C5FF', '#835D4AFF', '#D2A19AFF']
)
plt.show()
`.trim(),
  type: 'list',
  howToUse: <div>{colorHowToUse}</div>,
  img: '253-control-the-color-in-stacked-area-chart-1',
  post: '253-control-the-color-in-stacked-area-chart',
};
//
//
//
//
//
const param5 = {
  name: 'edgecolor',
  description: <div>The colors to use for each area, from bottom to top.</div>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)
y3 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2, y3
  colors=['#EED4C5FF', '#835D4AFF', '#D2A19AFF']
)
plt.show()
`.trim(),
  type: 'list',
  howToUse: <div>{colorHowToUse}</div>,
  img: '253-control-the-color-in-stacked-area-chart-2',
  post: '253-control-the-color-in-stacked-area-chart',
};
//
//
//
//
//
const param6 = {
  name: 'baseline',
  description: (
    <p>
      The type of baseline to use for stacking. Options are <code>zero</code>,
      <code>sym</code>, <code>wiggle</code>, and <code>weighted_wiggle</code>.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2,
  baseline='paramgoeshere'
)
plt.show()
`.trim(),
  type: 'string',
  options: [
    {
      name: 'zero',
      explanation: (
        <p>
          (Default) Layers are stacked on top of a fixed baseline at zero,
          creating a standard stacked area.
        </p>
      ),
      isDefault: true,
      img: 'tuto-stackplot-6-square',
    },
    {
      name: 'sym',
      explanation: (
        <p>
          Layers are centered around the middle of the plot, balancing the areas
          above and below, resembling a river-like flow.
        </p>
      ),
      isDefault: true,
      img: 'tuto-stackplot-3-square',
    },
    {
      name: 'wiggle',
      explanation: (
        <p>
          Layers are arranged to minimize the amount of vertical movement,
          reducing the overall &quot;wiggling&quot; effect.
        </p>
      ),
      isDefault: true,
      img: 'tuto-stackplot-4-square',
    },
    {
      name: 'weighted_wiggle',
      explanation: (
        <p>
          Similar to <code>wiggle</code>, but the arrangement is adjusted to
          give larger layers more influence in reducing vertical movement.
        </p>
      ),
      isDefault: true,
      img: 'tuto-stackplot-5-square',
    },
  ],
  img: '252_baseline_and_stacked_area_chart',
  post: '252-baseline-options-for-stacked-area-chart',
};
//
//
//
//
//
const param7 = {
  name: 'hatch',
  description: <p>Determines the pattern to be used to fill the bars</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)
y3 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2, y3,
  hatch=['*', '.', '+']
)
plt.show()
`.trim(),
  type: 'str or list',
  howToUse: <div>{hatchHowToUse}</div>,
  img: 'tuto-stackplot-7-square',
  post: '253-control-the-color-in-stacked-area-chart',
};
//
//
//
//
//
const param8 = {
  name: 'alpha',
  description: <p>Determines the pattern to be used to fill the bars</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)
y3 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2, y3,
  alpha=0.6
)
plt.show()
`.trim(),
  type: 'str or list',
  howToUse: <div>{alphaHowToUse}</div>,
  img: '253-control-the-color-in-stacked-area-chart-3',
  post: '253-control-the-color-in-stacked-area-chart',
};
//
//
//
//
//
const param9 = {
  name: 'linewidth',
  description: <div>{linewidthDescription}</div>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
y1 = np.random.rand(10)
y2 = np.random.rand(10)
y3 = np.random.rand(10)

fig, ax = plt.subplots(figsize=(10,10))
ax.stackplot(
  x, y1, y2, y3,
  edgecolor='black',
  linewidth=4
)
plt.show()
`.trim(),
  type: 'str or list',
  howToUse: <div>{linewidthHowToUse}</div>,
  img: '253-control-the-color-in-stacked-area-chart-2',
  post: '253-control-the-color-in-stacked-area-chart',
};

export const stackplot = {
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
