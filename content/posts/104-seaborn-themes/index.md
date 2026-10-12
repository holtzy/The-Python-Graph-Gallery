---
title: "Seaborn Themes"
description: "The <a href='http://python-graph-gallery.com/seaborn/'>seaborn</a> python library is well known for its grey background and its general styling. However, there are few <b>other built in styles</b> available: <code>darkgrid</code>, <code>white grid</code>, <code>dark</code>, <code>white</code> and <code>ticks</code>.<br><br>You can set themes using the <code>set_style()</code> function of seaborn library. This post provides examples of different <a href='http://python-graph-gallery.com/seaborn/'>seaborn</a> <b>themes</b> that you can use with your charts. "
seoDescription: "How to change theme of your chart using seaborn styles"
keywords: "python, chart, plot, seaborn, matplotlib, theme"
family: "general"
chartType: "cheatSheets"
slug: "104-seaborn-themes"
---

## Libraries

Let's start by loading a few libraries:

- [matplotlib](https://python-graph-gallery.com/matplotlib/): for plotting
- [seaborn](https://python-graph-gallery.com/seaborn/): for the themes
- `numpy` for data generation
- `pandas` for storing the data

```python
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd
```

## Dataset

Our dataset will consist of 6 columns of numeric values:

```python
data = np.random.normal(size=(20, 6)) + np.arange(6) / 2
df = pd.DataFrame(data)
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Default theme

```python
sns.boxplot(data=data)
plt.show()
```

:::output
![](./output-2.png)
:::

## White grid

```python
sns.set_style("whitegrid")
sns.boxplot(data=data)
plt.title("whitegrid")
plt.show()
```

:::output
![](./output-3.png)
:::

## Dark grid

```python
sns.set_style("darkgrid")
sns.boxplot(data=data);
plt.title("darkgrid")
plt.show()
```

:::output
![](./output-4.png)
:::

## White

```python
sns.set_style("white")
sns.boxplot(data=data);
plt.title("white")
plt.show()
```

:::output
![](./output-5.png)
:::

## Dark

```python
sns.set_style("dark")
sns.boxplot(data=data);
plt.title("dark")
plt.show()
```

:::output
![](./output-6.png)
:::

## Ticks

```python
sns.set_style("ticks")
sns.boxplot(data=data);
plt.title("ticks")
plt.show()
```

:::output
![](./output-7.png)
:::

## Going further

This post explains how to set the style of a [seaborn](https://python-graph-gallery.com/seaborn/) plot.

You might be interested in how to [custom axis in seaborn](https://python-graph-gallery.com/191-custom-axis-on-matplotlib-chart/) and how to [add a title in seaborn](https://python-graph-gallery.com/seaborn-title-customization/)
