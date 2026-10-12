---
title: "Custom markers in a scatter plot with plotnine"
description: "<a href='https://python-graph-gallery.com/plotnine/'>Plotnine</a> is a Python library allowing to create beautiful ggplot-like plots using the grammar of graphics syntax.<br><br>In this step-by-step post, we will see how to customize markers in a <b>scatter plot</b> using <a href='https://python-graph-gallery.com/plotnine/'>plotnine</a>. For an <b>introduction</b> to scatter plot in plotnine, check <a href='https://python-graph-gallery.com/573-introduction-scatterplot-plotnine'>this post</a>."
seoDescription: "How to customize markers in a scatter plot using plotnine and its grammar of graphics syntax."
keywords: "scatter, plotnine, python, plot, customization, ggplot2, grammar of graphics, ggplot, marker"
family: "correlation"
chartType: "scatter"
slug: "574-custom-marker-scatter-plotnine"
---

## Libraries

For creating this chart, we will need to load the following libraries:

- [pandas](https://python-graph-gallery.com) for data manipulation
- [plotnine](https://python-graph-gallery.com/plotnine/) for data visualization

```python
import pandas as pd
from plotnine import *
```

## Dataset

Since [scatter plot](https://python-graph-gallery.com/scatter-plot/) is a type of chart that displays values for **two numerical variables** for a set of data, we will load the `iris` dataset:

```python
url = 'https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/iris.csv'
df = pd.read_csv(url)
```

## Change size of points

In order to change the **size of the points** in a scatter plot, you just have to add the `size` argument to the `geom_point()` function:

```python
(
ggplot(df, aes(x='sepal_length', y='sepal_width')) +
    geom_point(size=4)
)
```

:::output
![](./output-1.png)
:::

## Change dots shape

In order to change the **shape of the points** in a scatter plot, you just have to add the `shape` argument to the `geom_point()` function.

There are **lots of available options**!

```python
(
ggplot(df, aes(x='sepal_length', y='sepal_width')) +
    geom_point(shape='d', size=4)
)
```

:::output
![](./output-2.png)
:::

## Transparency 

In order to change the **transparency of the points** in a scatter plot, you just have to add the `alpha` argument to the `geom_point()` function:

```python
(
ggplot(df, aes(x='sepal_length', y='sepal_width')) +
    geom_point(alpha=0.3, size=4)
)
```

:::output
![](./output-3.png)
:::

## Edge color

In order to change the **edge color of the points** in a scatter plot, you just have to use the `color` and `fill` arguments in the `geom_point()` function:

```python
(
ggplot(df, aes(x='sepal_length', y='sepal_width')) +
    geom_point(color='black', fill='lightblue', size=4)
)
```

:::output
![](./output-4.png)
:::

## Going further

This article explains how to custom markers in a [scatter plot](https://python-graph-gallery.com/scatter-plot/) with [plotnine](https://python-graph-gallery.com/plotnine/).

If you want to go further, you can also learn how to [colors according to a 3rd variable](https://python-graph-gallery.com/573-introduction-scatterplot-plotnine) or how to [custom theme](https://python-graph-gallery.com/575-custom-theme-plotnine).
