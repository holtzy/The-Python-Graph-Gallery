---
title: "Available color palettes with Matplotlib"
description: "The <a href='https://python-graph-gallery.com/196-select-one-color-with-matplotlib/'>previous post</a> describes how to pick up a single color when working with python and matplotlib. This post aims to describe a few <b>color palettes</b> that are provided, and thus make your life easier when plotting with several colors. "
seoDescription: "How to use available color palettes with matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, color, palettes"
family: "general"
chartType: "cheatSheets"
slug: "197-available-color-palettes-with-matplotlib"
---

There are 3 types of color palettes: **Sequential**, **Discrete** and **Diverging**. Here are a few explanations for each:

## Sequential

```python
# libraries
from matplotlib import pyplot as plt
import numpy as np
 
# create data
x = np.random.rand(15)
y = x+np.random.rand(15)
z = x+np.random.rand(15)
z=z*z
 
# call pallette in cmap
plt.scatter(x, y, s=z*2000, c=x, cmap="BuPu", alpha=0.4, edgecolors="grey", linewidth=2)
plt.show()
 
# You can reverse it by adding "_r" to the end:
plt.scatter(x, y, s=z*2000, c=x, cmap="BuPu_r", alpha=0.4, edgecolors="grey", linewidth=2)
plt.show()

# OTHER: viridis / inferno / plasma / magma
plt.scatter(x, y, s=z*2000, c=x, cmap="plasma", alpha=0.4, edgecolors="grey", linewidth=2)
plt.show()
```

:::output
![](./output-1.png)

![](./output-2.png)

![](./output-3.png)
:::

## Diverging

```python
# libraries
from matplotlib import pyplot as plt
import numpy as np
import seaborn as sns

#Just use set_theme() function of seaborn library for a nice looking appearance.
sns.set_theme()

# create data
x = np.random.rand(80) - 0.5
y = x+np.random.rand(80)
z = x+np.random.rand(80)
 
# plot
plt.scatter(x, y, s=z*2000, c=x, cmap="PuOr", alpha=0.4, edgecolors="grey", linewidth=2)
plt.show()
 
# reverse
plt.scatter(x, y, s=z*2000, c=x, cmap="PuOr_r", alpha=0.4, edgecolors="grey", linewidth=2)
plt.show()
```

:::output
![](./output-4.png)

![](./output-5.png)
:::

## Discrete

```python
# libraries
from matplotlib import pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
 
# Data
df = sns.load_dataset('iris')
 
# We use the species column to choose the color. We need to make a numerical vector from it:
df['species']=pd.Categorical(df['species'])
df['species'].cat.codes
 
# Scatter plot
plt.scatter(df['sepal_length'], df['sepal_width'], s=62, c=df['species'].cat.codes, cmap="Set1", alpha=0.9, linewidth=0)
plt.show()
```

:::output
![](./output-6.png)
:::
