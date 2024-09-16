import React from 'react';
import {
  alphaHowToUse,
  colorHowToUse,
  hatchHowToUse,
} from './paramDescription';

const name = 'hist()';
const description = (
  <>
    <p>
      The <code>hist()</code> function of <a href="/matplotlib">matplotlib</a>{' '}
      creates a histogram to visualize the distribution of a dataset. It plots
      rectangular bars with heights proportional to the frequency of values in
      data bins.
    </p>
  </>
);

const docUrl =
  'https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html';
//
//
//
//
//
const param1 = {
  name: 'color',
  description: <p>Sets the color of the histogram bars.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, color="purple")
plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-hist-1-square',
  post: 'basic-histogram-in-matplotlib',
};
//
//
//
//
//
const param2 = {
  name: 'bins',
  description: <p>Determines the number of equal-width bins in the range.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, bins=50)
plt.show()
`.trim(),
  type: 'int or sequence or str',
  howToUse: (
    <p>
      Can be an integer, a list of bin edges, or one of the predefined strings
      (&apos;auto&apos;, &apos;fd&apos;, &apos;doane&apos;, &apos;scott&apos;,
      &apos;stone&apos;, &apos;rice&apos;, &apos;sturges&apos;, or
      &apos;sqrt&apos;).
    </p>
  ),
  img: 'tuto-hist-2-square',
  post: 'basic-histogram-in-matplotlib',
};
//
//
//
//
//
const param3 = {
  name: 'cumulative',
  description: (
    <p>
      If True, then a histogram is computed where each bin gives the counts in
      that bin plus all bins for smaller values.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, cumulative=True)
plt.show()
`.trim(),
  type: 'boolean',
  howToUse: (
    <p>
      Use <code>True</code> for a cumulative histogram, <code>False</code> for a
      regular histogram.
    </p>
  ),
  img: 'tuto-hist-3-square',
  post: 'basic-histogram-in-matplotlib',
};
//
//
//
//
//
const param4 = {
  name: 'alpha',
  description: <p>Controls the transparency of the histogram bars.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, alpha=0.5)
plt.show()
`.trim(),
  type: 'float',
  howToUse: <div>{alphaHowToUse}</div>,
  img: 'tuto-hist-5-square',
  post: 'basic-histogram-in-matplotlib',
};
//
//
//
//
//
const param5 = {
  name: 'orientation',
  description: (
    <p>Determines whether the histogram bars are vertical or horizontal.</p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, orientation='horizontal')
plt.show()
`.trim(),
  type: 'str',
  howToUse: (
    <p>
      Available values are either <code>&apos;vertical&apos;</code> (default) or{' '}
      <code>&apos;horizontal&apos;</code>
    </p>
  ),
  img: 'tuto-hist-4-square',
  post: 'basic-histogram-in-matplotlib',
};
//
//
//
//
//
const param6 = {
  name: 'edgecolor',
  description: <p>Determines the color of the edges of each bar</p>,
  basicUsage: `
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, edgecolor='black')
plt.show()
`.trim(),
  type: 'str',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-hist-6-square',
  post: 'basic-histogram-in-matplotlib',
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

data = np.random.randn(1000)
fig, ax = plt.subplots()
ax.hist(data, hatch='*')
plt.show()
`.trim(),
  type: 'str',
  howToUse: <div>{hatchHowToUse}</div>,
  img: '584-introduction-hatch-matplotlib-3',
  post: '584-introduction-hatch-matplotlib',
};

export const hist = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5, param6, param7],
};
