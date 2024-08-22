import React from 'react';
import {
  colorHowToUse,
  hueDescription,
  paletteDescription,
  paletteHowToUse,
  hueHowToUse,
  dataDescription,
  dataHowToUse,
} from './paramDescription';

const name = 'barplot()';
const description = (
  <>
    <p>
      The <code>barplot()</code> function of <a href="/seaborn">seaborn</a>{' '}
      creates a bar plot to show the relationship between a numeric variable and
      one or more categorical variables. It estimates the central tendency and
      uncertainty around it.
    </p>
  </>
);

const docUrl = 'https://seaborn.pydata.org/generated/seaborn.barplot.html';
//
//
//
//
//
const param1 = {
  name: 'data',
  description: <div>{dataDescription}</div>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.barplot(x="day", y="total_bill", data=tips)
plt.show()
`.trim(),
  type: 'dataframe',
  howToUse: <div>{dataHowToUse}</div>,
  img: 'basic-barplot-with-seaborn2',
  post: 'basic-barplot-with-seaborn',
};
//
//
//
//
//
const param2 = {
  name: 'x',
  description: (
    <p>
      If `<code>x</code>` includes categorical data, then `<code>y</code>` must
      contain numerical values.
    </p>
  ),
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.barplot(x="day", y="total_bill", data=tips)
plt.show()
`.trim(),
  type: 'names of variables in data or array-like',
  howToUse: (
    <p>
      Can be vector data or column names from the <code>data</code> parameter.
    </p>
  ),
  img: 'basic-barplot-with-seaborn2',
  post: 'basic-barplot-with-seaborn',
};
//
//
//
//
//
const param3 = {
  name: 'y',
  description: (
    <p>
      If `<code>y</code>` includes categorical data, then `<code>x</code>` must
      contain numerical values.
    </p>
  ),
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.barplot(x="total_bill", y="day", data=tips)
plt.show()
`.trim(),
  type: 'names of variables in data or array-like',
  howToUse: (
    <p>
      Can be vector data or column names from the <code>data</code> parameter.
    </p>
  ),
  img: 'basic-barplot-with-seaborn1',
  post: 'basic-barplot-with-seaborn',
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

tips = sns.load_dataset("tips")
sns.barplot(x="day", y="total_bill", hue="sex", data=tips)
plt.show()
`.trim(),
  type: 'name of variables in data',
  howToUse: <div>{hueHowToUse}</div>,
  img: 'tuto-barplot-1-square',
  post: 'basic-barplot-with-seaborn',
};
//
//
//
//
//
const param5 = {
  name: 'color',
  description: <p>Color to use for the bars.</p>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.barplot(
  x="day",
  y="total_bill",
  data=tips,
  color="darkred"
)
plt.show()
`.trim(),
  type: 'matplotlib color',
  howToUse: <div>{colorHowToUse}</div>,
  img: 'tuto-barplot-2-square',
  post: 'basic-barplot-with-seaborn',
};
//
//
//
//
//
const param6 = {
  name: 'estimator',
  description: (
    <p>Statistical function to estimate within each categorical bin.</p>
  ),
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

tips = sns.load_dataset("tips")
sns.barplot(
  x="day",
  y="total_bill",
  data=tips,
  estimator=np.median
)
plt.show()
`.trim(),
  type: 'callable',
  howToUse: (
    <p>
      Use statistical functions like <code>np.mean</code>,{' '}
      <code>np.median</code>, etc.
    </p>
  ),
  img: 'error-bars-on-barplot',
  post: 'error-bars-on-barplot',
};
//
//
//
//
//
const param7 = {
  name: 'palette',
  description: <div>{paletteDescription}</div>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.barplot(
   x="day",
   hue="sex",
   y="total_bill",   
   data=tips,
   palette=["#FFDE01FF", "#A5BAD6FF"]
)
plt.show()
`.trim(),
  type: 'list',
  howToUse: <div>{paletteHowToUse}</div>,
  img: 'tuto-barplot-3',
  post: 'basic-barplot-with-seaborn',
};
//
//
//
//
//
const param8 = {
  name: 'gap',
  description: <div>Specifies the gap between bars.</div>,
  basicUsage: `
import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.barplot(
   x="day",
   hue="sex",
   y="total_bill",   
   data=tips,
   gap=2.3,
)
plt.show()
`.trim(),
  type: 'number',
  howToUse: (
    <div>
      It can be any value and adjusts the spacing between individual bars or
      groups of bars.
    </div>
  ),
  img: 'tuto-barplot-4-square',
  post: 'basic-barplot-with-seaborn',
};

export const barplot = {
  name,
  description,
  docUrl,
  parameters: [param1, param2, param3, param4, param5, param6, param7, param8],
};
