import React from 'react';
import {
  alphaHowToUse,
  colorHowToUse,
  linestyleDescription,
  linestyleHowToUse,
  zorderDescription,
  zorderHowToUse,
  linewidthDescription,
  linewidthHowToUse,
} from './paramDescription';

const name = 'plot()';
const description = (
  <>
    <p>
      The <code>plot()</code> function of <a href="/matplotlib">matplotlib</a>{' '}
      is a versatile plotting function that can create{' '}
      <b>various types of plots</b>, including line plots, scatter plots, and
      step plots. It&apos;s one of the most fundamental plotting functions in
      matplotlib.
    </p>
  </>
);

const docUrl =
  'https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html';
//
//
//
//
//
const param1 = {
  name: 'x',
  description: <p>Positions of the data points along the x-axis.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x=x, y=y)
plt.show()
`.trim(),
  type: 'array-like',
  howToUse: (
    <p>
      The <code>x</code> and <code>y</code> arrays must have the same length and
      contain numerical values.
    </p>
  ),
  img: '120_Basic_lineplot2',
  post: '120-line-chart-with-matplotlib',
};
//
//
//
//
//
const param2 = {
  name: 'y',
  description: <p>Positions of the data points along the y-axis.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x=x, y=y)
plt.show()
`.trim(),
  type: 'array-like',
  howToUse: (
    <p>
      The <code>x</code> and <code>y</code> arrays must have the same length and
      contain numerical values.
    </p>
  ),
  img: '120_Basic_lineplot2',
  post: '120-line-chart-with-matplotlib',
};
//
//
//
//
//
const param3 = {
  name: 'color',
  description: <p>Sets the color of the line or markers in the plot.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y, color="red")
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-plot-1-square',
  post: '121-line-chart-customization',
};
//
//
//
//
//
const param4 = {
  name: 'linestyle',
  description: <div>{linestyleDescription}</div>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y, linestyle="--")
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{linestyleHowToUse}</div>,
  img: 'tuto-plot-2-square',
  post: '121-line-chart-customization',
};
//
//
//
//
//
const param5 = {
  name: 'marker',
  description: <p>Specifies the marker style for the data points.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 20)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y, marker='o')
plt.show()
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      Common markers include 'o' (circle), 's' (square), '^' (triangle up), and
      '.' (point). See matplotlib's{' '}
      <a href="https://matplotlib.org/stable/api/markers_api.html">
        marker reference
      </a>{' '}
      for more options.
    </p>
  ),
  img: 'tuto-plot-3-square',
  post: '121-line-chart-customization',
};
//
//
//
//
//
const param6 = {
  name: 'label',
  description: <p>Sets the label for the plot, which is used in the legend.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

fig, ax = plt.subplots()
ax.plot(x, y1, label='sin(x)')
ax.plot(x, y2, label='cos(x)')
plt.legend()
plt.show()
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      Use <code>plt.legend()</code> to display the legend after setting labels.
    </p>
  ),
  img: 'tuto-plot-4-square',
  post: '585-legend-for-categorical-data-matplotlib',
};
//
//
//
//
//
const param7 = {
  name: 'alpha',
  description: <p>Controls the transparency of the plot elements.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y, alpha=0.5)
plt.show()
`.trim(),
  type: 'float',
  howToUse: <div>{alphaHowToUse}</div>,
  img: 'tuto-plot-5-square',
  post: '121-line-chart-customization',
};
//
//
//
//
//
const param8 = {
  name: 'linewidth',
  description: <div>{linewidthDescription}</div>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y, linewidth=6)
plt.show()
`.trim(),
  type: 'float',
  howToUse: <div>{linewidthHowToUse}</div>,
  img: 'tuto-plot-6-square',
  post: '121-line-chart-customization',
};
//
//
//
//
//
const param9 = {
  name: 'zorder',
  description: <div>{zorderDescription}</div>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

fig, ax = plt.subplots()
ax.plot(x, y1, zorder=2)
ax.plot(x, y2, zorder=1)
plt.show()
`.trim(),
  type: 'int',
  howToUse: <div>{zorderHowToUse}</div>,
  img: 'tuto-plot-7-square',
  post: '121-line-chart-customization',
};

export const plot = {
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
