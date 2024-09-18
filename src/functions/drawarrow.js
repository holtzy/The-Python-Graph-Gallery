import React from 'react';
import { colorHowToUse, alphaHowToUse } from './paramDescription';

const name = 'fig_arrow()';
const description = (
  <>
    <p>
      The <code>fig_arrow()</code> function of drawarrow <b>add an arrow</b> on
      a given matplotlib figure. All the arguments described here also work with
      the <code>ax_arrow()</code> function.
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
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8]
)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'introduction-drawarrow-arg0-square',
  post: 'drawarrow#Custom',
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
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  fig=fig
)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      The first value is the x-axis position, and the second value is the y-axis
      position.
    </p>
  ),
  img: 'introduction-drawarrow-arg0-square',
  post: 'drawarrow#Custom',
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
  radius=0.5
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      It can be any value, but in most cases you want it to be between -1 and 1.
    </p>
  ),
  img: 'introduction-drawarrow-arg2-square',
  post: 'drawarrow#Custom',
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
  color='red'
)

plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'introduction-drawarrow-arg3-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param16 = {
  name: 'edgecolor',
  description: <p>Arrow edge color</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  edgecolor='red'
)

plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'introduction-drawarrow-arg14-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param17 = {
  name: 'facecolor',
  description: <p>Arrow head color</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  facecolor='red'
)

plt.show()
`.trim(),
  type: 'string',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'introduction-drawarrow-arg15-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param5 = {
  name: 'width',
  description: <p>Specify the width of the arrow.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  width=3
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <div>
      <p>
        In most cases, you want the width of the tail to be between 1 and 10.
      </p>
    </div>
  ),
  img: 'introduction-drawarrow-arg4-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param6 = {
  name: 'head_width',
  description: <p>Width of the head of the arrow.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  head_width=40
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      Specify a value generally between 1 and 50 to modify the width of the head
      of your arrow.
    </p>
  ),
  img: 'introduction-drawarrow-arg5-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param7 = {
  name: 'head_length',
  description: <p>Length of the head of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()
fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  head_length=50
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      The length of the head of the arrow is generally between 1 and 50. The
      default value is 8.
    </p>
  ),
  img: 'introduction-drawarrow-arg6-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param9 = {
  name: 'mutation_scale',
  description: <p>Value used to scale the entire arrow (head and body)</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.3, 0.3],
  head_position=[0.8, 0.8],
  mutation_scale=4
)

fig_arrow(
  tail_position=[0.2, 0.3],
  head_position=[0.6, 0.8],
  mutation_scale=10
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <p>
      This argument makes easier to change the size of the arrow by multiplying
      all style properties by its value. If <code>mutation_scale=4</code>, the
      arrow will be 4 times larger.
    </p>
  ),
  img: 'introduction-drawarrow-arg7-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param10 = {
  name: 'alpha',
  description: <p>Opacity of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.2, 0.3],
  head_position=[0.6, 0.8],
  alpha=0.5,
  color='black'
)

plt.show()
`.trim(),
  type: 'number',
  howToUse: <div>{alphaHowToUse}</div>,
  img: 'introduction-drawarrow-arg8-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param11 = {
  name: 'invert',
  description: <p>Whether to invert the curvature of the arrow</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  radius=0.4,
  fig=fig
)

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  radius=0.4,
  invert=True,
  fig=fig
)

plt.show()
`.trim(),
  type: 'bool',
  howToUse: (
    <p>
      If set to <code>True</code>, the curvature of the arrow will be inverted.
      Another way of doing so is to set the radius to a negative value.
    </p>
  ),
  img: 'introduction-drawarrow-arg9-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param12 = {
  name: 'fill_head',
  description: <p>Whether or not to fill the arrowhead</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  fill_head=False
)

plt.show()
`.trim(),
  type: 'bool',
  howToUse: (
    <p>
      If set to <code>True</code> (default), the head of the arrow will be
      filled, empty otherwise.
    </p>
  ),
  img: 'introduction-drawarrow-arg10-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param13 = {
  name: 'double_headed',
  description: <p>Whether or not to fill the arrowhead</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  double_headed=True
)

plt.show()
`.trim(),
  type: 'bool',
  howToUse: (
    <p>
      If set to <code>True</code> (default to <code>False</code>), the arrow
      will have a head at both the start and the end.
    </p>
  ),
  img: 'introduction-drawarrow-arg11-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param14 = {
  name: 'inflection_position',
  description: (
    <p>
      Array-like of length 2 specifying the position of the inflection point of
      the arrow on the figure.
    </p>
  ),
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  inflection_position=[0.5, 0.7]
)

plt.show()
`.trim(),
  type: 'list',
  howToUse: (
    <p>
      Facultative parameter. The first value is the x-axis position, and the
      second value is the y-axis position.
    </p>
  ),
  img: 'introduction-drawarrow-arg12-square',
  post: 'drawarrow#Custom',
};
//
//
//
//
//
const param15 = {
  name: 'shadow_style',
  description: <p>Dictionary of parameters for styling the arrow shadow.</p>,
  basicUsage: `
import matplotlib.pyplot as plt
from drawarrow import fig_arrow

fig, ax = plt.subplots()

fig_arrow(
  tail_position=[0.4, 0.3],
  head_position=[0.8, 0.8],
  shadow_style={
    'shadow_color': 'black',
    'offset': (4,-4),
    'alpha': 0.5
  }
)

plt.show()
`.trim(),
  type: 'dict',
  howToUse: (
    <p>
      If provided, a <b>shadow</b> will be displayed below the arrow. It accepts
      the following parameters: <code>offset</code>, <code>shadow_color</code>{' '}
      and <code>alpha</code>{' '}
    </p>
  ),
  img: 'introduction-drawarrow-arg13-square',
  post: 'drawarrow#Custom',
};

export const fig_arrow = {
  name,
  description,
  docUrl,
  parameters: [
    param1,
    param2,
    param14,
    param3,
    param4,
    param16,
    param17,
    param12,
    param13,
    param5,
    param6,
    param7,
    param9,
    param10,
    param11,
    param15,
  ],
};
