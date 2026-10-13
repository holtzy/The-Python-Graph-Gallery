---
title: "Control rug and density on a Seaborn histogram"
description: "By default, the histplot function of <a href='https://python-graph-gallery.com/seaborn/'>Seaborn</a> plots an histogram without a density curve (see <a href='https://python-graph-gallery.com/20-basic-histogram-seaborn/'>histogram with seaborn</a>). You can easily add the latter by setting the <code>kde</code> argument to True. You can also control the presence of rugs using <code>rug=True</code>. You can customize rug and density as presented below."
seoDescription: "How to customize density and rug on a histogram with Seaborn"
keywords: "python, chart, plot, seaborn, histogram"
family: "distribution"
chartType: "histogram"
slug: "21-control-rug-and-density-on-seaborn-histogram"
---

## Libraries & Dataset

First, we need to load a few libraries and the iris dataset:

```python
# libraries
import seaborn as sns
import matplotlib.pyplot as plt
sns.set_theme(style="darkgrid")

# dataset
df = sns.load_dataset("iris")
```

## Histogram + rug + kernel density curve

**Rugs** are small lines or marks at the edge of a plot that represent the **distribution of individual** data points along an axis.

```python
sns.displot(data=df["sepal_length"], kde=True, rug=True)
plt.show()
```

:::output
![](./output-1.png)
:::

## Customizing rugs

Thanks to the `rug_kws` argument, we can easily change how the **rugs** look like!

```python
sns.displot(df["sepal_length"],
            kde=True,
            rug=True,
            rug_kws={"alpha": 0.2, "linewidth": 4, "height": 0.2})
plt.show()
```

:::output
![](./output-2.png)
:::

## Customizing the density curve

It's also pretty straight forward to customize the density curve in a chart:

```python
sns.displot(df["sepal_length"],
            kind="kde",
            fill=True,
            rug=True,
            rug_kws={"alpha": 0.9, "height": 0.1},
            color="skyblue",
            alpha=0.6,)
plt.show()
```

:::output
![](./output-3.png)
:::

## Going further

This post explains how to customize a [distribution plot](https://python-graph-gallery.com/density-plot/) by adding rugs and density to it using [seaborn](https://python-graph-gallery.com/seaborn/)!

For more examples of **how to create or customize** your distribution plots, see the [density plot section](https://python-graph-gallery.com/density-plot/). You may also be interested in how to create a [density chart with multiple groups](https://python-graph-gallery.com/74-density-plot-of-several-variables/).
