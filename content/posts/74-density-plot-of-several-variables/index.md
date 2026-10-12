---
title: "Density plot of several variables"
description: "In a <a href='https://python-graph-gallery.com/71-density-plot-with-shade-seaborn/'>previous post</a>, we saw how to create a density plot of a single variable.<br>This post explains how to plot <b>multiple variables</b> in a density plot with <a href='https://python-graph-gallery.com/seaborn/'>seaborn</a>."
seoDescription: "Plotting multiple density graph on the same plot with seaborn kdeplot"
keywords: "python, chart, plot, seaborn, matplotlib, kdeplot, density"
family: "distribution"
chartType: "density"
slug: "74-density-plot-of-several-variables"
---

## Libraries

First, we need to import a few libraries:

- [matplotlib](https://python-graph-gallery.com/matplotlib/): for plotting
- [seaborn](https://python-graph-gallery.com/seaborn/): for making the plots prettier

```python
import matplotlib.pyplot as plt
import seaborn as sns
```

## Dataset

The dataset that we will use is the `iris` dataset that we can load using [seaborn](https://python-graph-gallery.com/seaborn/).

```python
df = sns.load_dataset('iris')
```

## Plot multiple elements

With [seaborn](https://python-graph-gallery.com/seaborn/), we just have to call the `kdeplot()` function again to **add another element** to the plot.

Here's how it looks:

```python
sns.set_theme(style="darkgrid")
sns.kdeplot(df['sepal_width'], fill=True, color="r")
sns.kdeplot(df['sepal_length'], fill=True, color="b")
plt.show()
```

:::output
![](./output-1.png)
:::

## Going further

This post explains **how to plot multiple variables** in a density plot with [seaborn](https://python-graph-gallery.com/seaborn/). 

You might be interested in [how to flip a density plot](https://python-graph-gallery.com/72-horizontal-density-plot/) and [creating a mirrored density plot](https://python-graph-gallery.com/density-mirror/).
