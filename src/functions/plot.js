import React from 'react';

const name = 'plot';
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
  howToUse: (
    <p>
      Can be a color name, a Hex code, or an RGB value. See matplotlib's{' '}
      <a href="https://matplotlib.org/stable/tutorials/colors/colors.html">
        color guide
      </a>{' '}
      for more details.
    </p>
  ),
  img: 'tuto-plot-1-square',
  post: 'matplotlib-line-plot',
};
//
//
//
//
//
const param2 = {
  name: 'linestyle',
  description: <p>Determines the style of the line in the plot.</p>,
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
  howToUse: (
    <p>
      Common values include '-' (solid), '--' (dashed), ':' (dotted), and '-.'
      (dash-dot).
    </p>
  ),
  img: 'tuto-plot-2-square',
  post: 'matplotlib-line-styles',
};
//
//
//
//
//
const param3 = {
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
  post: 'matplotlib-markers',
};
//
//
//
//
//
const param4 = {
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
  post: 'matplotlib-legend',
};
//
//
//
//
//
const param5 = {
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
  howToUse: (
    <p>
      Values range from 0 (completely transparent) to 1 (completely opaque).
    </p>
  ),
  img: 'tuto-plot-5-square',
  post: 'matplotlib-transparency',
};
//
//
//
//
//
const param6 = {
  name: 'linewidth',
  description: <p>Sets the width of the plotted line.</p>,
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
  howToUse: (
    <p>Larger values create thicker lines. The default value is usually 1.</p>
  ),
  img: 'tuto-plot-6-square',
  post: 'matplotlib-line-width',
};
//
//
//
//
//
const param7 = {
  name: 'zorder',
  description: <p>Controls the drawing order of plot elements.</p>,
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
  howToUse: (
    <p>
      Higher zorder values are drawn on top of lower values. This is useful when
      you want certain elements to appear above others.
    </p>
  ),
  img: 'tuto-plot-7-square',
  post: 'matplotlib-zorder',
};

export const plot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5, param6, param7],
};
