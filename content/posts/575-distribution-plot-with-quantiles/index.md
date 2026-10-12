---
title: "Distribution plot with quantiles"
description: "This post explains how to create a <a href='https://python-graph-gallery.com/density-plot/'>density plot</a> with quantiles displayed on top with <a href='https://python-graph-gallery.com/matplotlib/'>Matplotlib</a>.<br><br>It explains how to add <b>reference values</b> such as median and quantiles, as well as how to <b>fill the area</b> between quantiles with different colors."
seoDescription: "How to create a density plot with quantiles displayed on top with Python and Matplotlib"
keywords: "density plot, quantiles, matplotlib, python, fill_between, kdeplot, seaborn, area, color, reference, median"
family: "distribution"
chartType: "density"
slug: "575-distribution-plot-with-quantiles"
---

## Libraries

For creating this chart, we will need to load the following libraries:

- [pandas](https://python-graph-gallery.com) for data manipulation
- [matplotlib](https://python-graph-gallery.com) for styling the chart
- [seaborn](https://python-graph-gallery.com) for creating the chart
- `numpy` for creating the data

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
```

## Dataset

Since our goal is to create a simple density chart, we only need one numerical variable:

```python
x = np.random.normal(10, 3, 1000)
df = pd.DataFrame({'x': x})
```

## Default plot

Let's start by creating a figure with a simple [density plot](https://python-graph-gallery.com/density-plot/)

```python
fig, ax = plt.subplots(figsize=(8, 6))

sns.kdeplot(df['x'], color='grey', ax=ax, shade=True)

plt.show()
```

:::output
![](./output-1.png)
:::

## Add median line

```python
fig, ax = plt.subplots(figsize=(8, 6))
sns.kdeplot(df['x'], color='grey', ax=ax, shade=True)

# add vertical line at median
median = df['x'].median()
ax.axvline(median, color='black', linestyle='--')

plt.show()
```

:::output
![](./output-2.png)
:::

## Add quantiles

It can be interesting to **add quantiles to a distribution chart** in order to have a better understanding of the data distribution.

First we have to compute the quantiles using the `np.percentile()` function from `numpy`. Then we can add them to the chart using the `axvline()` function.

```python
fig, ax = plt.subplots(figsize=(8, 6))
sns.kdeplot(df['x'], color='grey', ax=ax, shade=True)

# add vertical line at median
median = df['x'].median()
plt.axvline(median, color='black', linestyle='--')

# compute quantiles
quantiles_to_compute = [5, 25, 75, 95]
quantiles = np.percentile(
    df['x'],
    quantiles_to_compute
)
quantiles = quantiles.tolist()

# add small vertical lines at the quartiles
for quantile in quantiles:
    ax.axvline(
        quantile, # position on the x-axis
        color='black', # color of the line
        ymax=0.1 # 10% of the plot height
    )

plt.show()
```

:::output
![](./output-3.png)
:::

## Fill between quantiles

It is also possible to **fill the area between quantiles** in order to highlight a specific area of the distribution.

This can be done using the `fill_between()` function from `matplotlib` that needs the following arguments:

- the **x values** (quantiles)
- the **y values** (height of the rectangle)
- the **color** of the rectangle

```python
fig, ax = plt.subplots(figsize=(8, 6))
sns.kdeplot(df['x'], color='grey', ax=ax, shade=True)

# compute quantiles
quantiles_to_compute = [5, 25, 40, 60, 75, 95]
quantiles = np.percentile(
    df['x'],
    quantiles_to_compute
)
quantiles = quantiles.tolist()

darkgreen = '#9BC184'
midgreen = '#C2D6A4'
lightgreen = '#E7E5CB'
colors = [lightgreen, midgreen, darkgreen, midgreen, lightgreen]
for i in range(len(quantiles) - 1):
        ax.fill_between(
            [quantiles[i], # lower bound
             quantiles[i+1]], # upper bound
            0, # start from 0 on the y-axis
            0.01, # height of the colored area
            color=colors[i]
        )

plt.show()
```

:::output
![](./output-4.png)
:::

## Annotations

When adding quantiles to a distribution chart, it's **not necessary obvious** to know what they represent. It can be useful to add **annotations** to the chart in order to **explicitly show** the value of each quantile.

For this, we use the `text()` function from `matplotlib` that needs the following arguments:

- the **x position** of the annotation
- the **y position** of the annotation
- the **text** to display
- the **horizontal alignment** of the text
- the **font size** of the text

```python
fig, ax = plt.subplots(figsize=(6, 6))
sns.kdeplot(df['x'], color='grey', ax=ax, shade=True)

# compute quantiles
quantiles_to_compute = [5, 25, 50, 75, 95]
quantiles = np.percentile(
    df['x'],
    quantiles_to_compute
)
quantiles = quantiles.tolist()

# plot regions between quantiles
darkgreen = '#9BC184'
midgreen = '#C2D6A4'
lightgreen = '#E7E5CB'
colors = [lightgreen, midgreen, darkgreen, 'green']
for i in range(len(quantiles) - 1):
        ax.fill_between(
            [quantiles[i], # lower bound
             quantiles[i+1]], # upper bound
            0, # start from 0 on the y-axis
            0.01, # height of the colored area
            color=colors[i]
        )

# annotate the quantiles
for i, quantile in enumerate(quantiles):
    ax.text(
        quantile, # x-coordinate
        0.015, # y-coordinate
        f'{quantiles_to_compute[i]}%', # text
        horizontalalignment='center', # centered
        fontsize=8, # small font size
    )

plt.show()
```

:::output
![](./output-5.png)
:::

## Going further

This article explains how to create a **density chart** with quantiles using the `seaborn` library. 

You might be interested in this [beautiful density plot with quantiles](https://python-graph-gallery.com/web-ridgeline-by-text/) and [how to highlight as specific point](http://python-graph-gallery.com/193-annotate-matplotlib-chart/)
