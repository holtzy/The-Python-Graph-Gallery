---
title: "Density plot with shade in seaborn"
description: "In a <a href='https://python-graph-gallery.com/70-basic-density-plot-with-seaborn/'>previous post</a>, we saw how to create a very simple <b>density plot</b> with seaborn.<br><br>This post shows how to <b>add a shade</b> to the area under the line."
seoDescription: "Adding a shade to the area under a density plot line with seaborn."
keywords: "python, chart, plot, seaborn, matplotlib, kdeplot, density"
family: "distribution"
chartType: "density"
slug: "71-density-plot-with-shade-seaborn"
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

## Shade

Adding a shade to the area under the curve is as simple as setting the 'shade' parameter to True.

```python
sns.set_theme(style="darkgrid")
sns.kdeplot(df['sepal_width'], fill=True)
plt.show()
```

:::output
![](./output-1.png)
:::

## Going further

This post explains **how to create** a density plot with [seaborn](https://python-graph-gallery.com/seaborn/). 

You might be interested in [how to flip a density plot](https://python-graph-gallery.com/72-horizontal-density-plot/) and [creating a mirrored density plot](https://python-graph-gallery.com/density-mirror/).
