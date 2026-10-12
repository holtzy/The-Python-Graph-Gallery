---
title: "Horizontal violin plot with Seaborn"
description: "A <a href='https://python-graph-gallery.com/violin-plot/'>violin plot</a> is a graphical representation employed to depict the distribution of a dataset, showcasing important statistics like the median, quartiles, and possible outliers. It offers a succinct <b>summary of the central tendency and dispersion of the data</b>. <br/><br/>Creating <b>violin plots</b> with <a href='https://python-graph-gallery.com/seaborn/'>Seaborn</a> allows us to easily visualize the <b>distribution</b>. In this post, we will explore how to use Seaborn to create a <b>horizontal violin plot</b>."
seoDescription: "How to create a horizontal violin plot with seaborn"
keywords: "violin, plot, seaborn, horizontal, flip, matplotlib"
family: "distribution"
chartType: "violin"
slug: "51-horizontal-violinplot"
---

## Libraries

First, you need to install the following librairies:
- [seaborn](https://python-graph-gallery.com/seaborn/) is used for creating the chart
- [matplotlib](https://python-graph-gallery.com/matplotlib/) is used for customization

```python
import seaborn as sns
import matplotlib.pyplot as plt
```

## Dataset

The dataset we will use is the **iris dataset**, which we can easily download with [seaborn](https://python-graph-gallery.com/seaborn/):

```python
df = sns.load_dataset('iris')
```

## Violin plot

Fortunately, it's a very **light syntax** to create a [violin plot](https://python-graph-gallery.com/violin-plot/) with seaborn thanks to the `violinplot()` function:

```python
  
sns.set_theme(style="darkgrid")
 
# Just switch x and y
sns.violinplot(x=df["species"], y=df["sepal_length"])
plt.show()
```

:::output
![](./output-1.png)
:::

## Flipped violin plot

**Flipping this graph** is actually quite simple, as all you have to do is **exchange** the arguments `x` and `y`.

```python
  
sns.set_theme(style="darkgrid")
 
# Just switch x and y
sns.violinplot(y=df["species"], x=df["sepal_length"])
plt.show()
```

:::output
![](./output-2.png)
:::

## Going further

This post explains how to create a horizontal violin plot with [seaborn](https://python-graph-gallery.com/seaborn/).

For more examples of **how to create or customize** your violin plots, check the [violin plot section](https://python-graph-gallery.com/violin-plot/). You may also be interested in how to [customize a violin plot](https://python-graph-gallery.com/52-custom-seaborn-violinplot/).
