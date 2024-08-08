import React from 'react';

const name = 'fig_arrow';
const description = (
  <>
    <p>
      The <code>fig_arrow()</code> function of drawarrow add an arrow on a given
      matplotlib figure. You can customize any of its properties such as its
      color, head/tail width, opacity...
    </p>
  </>
);

const docUrl = 'https://github.com/JosephBARBIERDARNAL/drawarrow';

//
//
//
//
//
const param1 = {
  name: 'tail_position',
  description: (
    <p>
      Array-like of length 2 specifying the tail position of the arrow on the
      figure.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(tail_position=[0.3, 0.3], head_position=[0.8, 0.8], fig=fig)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'introduction-drawarrow-1',
  post: '',
};
//
//
//
//
//
const param2 = {
  name: 'head_position',
  description: (
    <p>
      Array-like of length 2 specifying the head position of the arrow on the
      figure.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(tail_position=[0.3, 0.3], head_position=[0.8, 0.8], fig=fig)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'introduction-drawarrow-1',
  post: '',
};
//
//
//
//
//
const param3 = {
  name: 'radius',
  description: <p>Curvature of the arrow (default to 0.1).</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  radius=0.5,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'tuto-drawarrow-1',
  post: '',
};
//
//
//
//
//
const param4 = {
  name: 'color',
  description: <p>Color of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  color='red',
  fig=fig
)

plt.show()
`.trim(),
  type: 'string',
  howToUse: (
    <p>
      This can be any <a href="/python-colors">matplotlib color</a>, hexadecimal
      or rgb color.
    </p>
  ),
  img: 'tuto-drawarrow-2',
  post: '',
};
//
//
//
//
//
const param5 = {
  name: 'tail_width',
  description: <p>Width of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  tail_width=15,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This can be any <a href="/python-colors">matplotlib color</a>, hexadecimal
      or rgb color.
    </p>
  ),
  img: 'tuto-drawarrow-4',
  post: '',
};
//
//
//
//
//
const param6 = {
  name: 'head_width',
  description: <p>Width of the head of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  head_width=50,
  fig=fig
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This can be any <a href="/python-colors">matplotlib color</a>, hexadecimal
      or rgb color.
    </p>
  ),
  img: 'tuto-drawarrow-5',
  post: '',
};

export const fig_arrow = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5, param6],
};
