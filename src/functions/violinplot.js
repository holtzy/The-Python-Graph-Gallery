import React from 'react';
import {
  colorHowToUse,
  hueDescription,
  hueHowToUse,
  paletteDescription,
  paletteHowToUse,
  linewidthDescription,
  linewidthHowToUse,
} from './paramDescription';

const name = 'violinplot()';
const description = (
  <>
    <p>
      The <code>violinplot()</code> function of <a href="/seaborn">seaborn</a>{' '}
      creates violin plots which show the distribution of quantitative data
      across several levels of one (or more) categorical variables. It combines
      a box plot with a kernel density estimation.
    </p>
  </>
);

const docUrl = 'https://seaborn.pydata.org/generated/seaborn.violinplot.html';
//
//
//
//
//
const param1 = {
  name: 'x',
  description: (
    <p>
      Inputs for plotting long-form data. This parameter specify the variable
      for the x axes.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

# Plot
sns.violinplot(x="total_bill", data=tips)
plt.show()
`.trim(),
  type: 'string, vector, or pd.Series',
  howToUse: (
    <p>
      Can be vector names in the data DataFrame, or external vectors passed
      directly.
    </p>
  ),
  img: 'tuto-violinplot-1-square',
  post: '50-basic-violinplot-and-input-formats',
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
      Inputs for plotting long-form data. This parameter specify the variable
      for the y axes.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

# Plot
sns.violinplot(y="total_bill", data=tips)
plt.show()
`.trim(),
  type: 'string, vector, or pd.Series',
  howToUse: (
    <p>
      Can be vector names in the data DataFrame, or external vectors passed
      directly.
    </p>
  ),
  img: '50_Basic_Violin_seaborn1',
  post: '50-basic-violinplot-and-input-formats',
};
//
//
//
//
//
const param3 = {
  name: 'hue',
  description: <div>{hueDescription}</div>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  hue="smoker",
  data=tips
)
plt.show()
`.trim(),
  type: 'string or vector',
  howToUse: <div>{hueHowToUse}</div>,
  img: '51_Horizontal_violinplot_Seaborn',
  post: '51-horizontal-violinplot',
};
//
//
//
//
//
const param4 = {
  name: 'split',
  description: (
    <p>
      When using a hue variable, this determines whether the violins for
      different hue levels should be plotted on opposite sides of the main
      categorical axis.
    </p>
  ),
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  hue="smoker",
  split=True,
  data=tips
)
plt.show()
`.trim(),
  type: 'boolean',
  howToUse: (
    <p>
      Set to <code>True</code> to split violins for different hue levels.
    </p>
  ),
  img: 'tuto-violinplot-2-square',
  post: '54-grouped-violinplot',
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
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  data=tips,
  palette="Set2"
)
plt.show()
`.trim(),
  type: 'string, list, dict, or matplotlib colormap',
  howToUse: <div>{paletteHowToUse}</div>,
  img: '54_Grouped_violinplot_Seaborn',
  post: '54-grouped-violinplot',
};
//
//
//
//
//
const param6 = {
  name: 'linewidth',
  description: <div>{linewidthDescription}</div>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  data=tips,
  linewidth=2
)
plt.show()
`.trim(),
  type: 'float',
  howToUse: <div>{linewidthHowToUse}</div>,
  img: '52_Custom_violinplot_Appearance_Seaborn1',
  post: '52-custom-seaborn-violinplot',
};
//
//
//
//
//
const param7 = {
  name: 'linecolor',
  description: <p>Defines the color of the lines</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  hue="smoker",
  linecolor='white',
  linewidth=1.5,
  data=tips
)
plt.show()
`.trim(),
  type: 'number',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-violinplot-3-square',
  post: '52-custom-seaborn-violinplot',
};
//
//
//
//
//
const param8 = {
  name: 'saturation',
  description: <p>Level of saturation of the colors used in the violin.</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  hue="smoker",
  saturation=0.2,
  data=tips
)
plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <div>
      <p>
        By default, all colours have a saturation level of 1, but this can be an
        effective way of improving the style by reducing it.
      </p>
    </div>
  ),
  img: 'tuto-violinplot-4-square',
  post: '52-custom-seaborn-violinplot',
};
//
//
//
//
//
const param9 = {
  name: 'fill',
  description: <p>Whether or not to fill in the violin colors.</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  hue="smoker",
  fill=False,
  data=tips
)
plt.show()
`.trim(),
  type: 'bool',
  howToUse: (
    <p>
      By default, the violin have a <code>linecolor</code> and{' '}
      <code>color</code>. This parameter is <code>True</code> by default, but
      when set to <code>False</code>, the color of the violin becomes the
      background color of the chart.
    </p>
  ),
  img: 'tuto-violinplot-5-square',
  post: '52-custom-seaborn-violinplot',
};
//
//
//
//
//
const param10 = {
  name: 'color',
  description: <p>Whether or not to fill in the violin colors.</p>,
  basicUsage: `
# Library & Dataset
import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset("tips")

sns.violinplot(
  x="day",
  y="total_bill",
  color='red',
  data=tips
)
plt.show()
`.trim(),
  type: 'bool',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-violinplot-6-square',
  post: '53-control-color-of-seaborn-violinplot',
};

export const violinplot = {
  name,
  description,
  docUrl,
  parameters: [
    param1,
    param2,
    param10,
    param3,
    param4,
    param5,
    param6,
    param7,
    param8,
    param9,
  ],
};
