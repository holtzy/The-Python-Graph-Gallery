---
title: "Basic Bubble Plot with matplotlib"
description: "This post explains how to produce a <b>basic bubble plot</b> using <a href='https://python-graph-gallery.com/matplotlib/'>matplotlib</a> and provides a reproducible code.<br><br>In the next post, you will learn how to change <a href='/271-custom-your-bubble-plot'>colors, shape and size</a> of the bubbles and how to <a href='/272-map-a-color-to-bubble-plot'>map bubble colors</a> with a 4th variable."
seoDescription: "Plotting a basic bubble plot with matplotlib"
keywords: "python, chart, plot, matplotlib, bubble, scatter"
family: "correlation"
chartType: "bubble"
slug: "270-basic-bubble-plot"
---

## Libraries & Dataset

We will start by importing the necessary libraries and loading the dataset.

Since [bubble plots](/bubble-plot) requires **numerical values**, we need to have quantitative data in our dataset.

```python
# libraries
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# create data
df = pd.DataFrame({
      'x': np.random.rand(40),
      'y': np.random.rand(40),
      'z': np.random.rand(40),
   })
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Bubble plot

A bubble plot is very similar to a [scatterplot](/scatter-plot). Using [matplotlib](/matplotlib) library, a bubble plot can be constructed using the `scatter()` function. In the example, the following parameters are used:

- `x` : The data position on the x axis
- `y` : The data position on the y axis
- `s` : The marker size
- `alpha` : Transparancy ratio

```python
plt.scatter(df['x'], df['y'], s=df['z']*1000, alpha=0.5)
plt.show()
```

:::output
![](./output-2.png)
:::

## Going further

You might be interested in:

- how to change [colors, shape and size](/271-custom-your-bubble-plot) of the bubbles
- how to [map bubble colors](/272-map-a-color-to-bubble-plot) with a 4th variable
