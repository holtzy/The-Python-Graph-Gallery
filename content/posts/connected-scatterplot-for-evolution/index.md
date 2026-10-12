---
title: "Basic Connected Scatterplot for Evolution of Variables"
description: "A <a href='https://python-graph-gallery.com/connected-scatter-plot/'>connected scatterplot</a> is useful to display the evolution of 2 variables while <b>displaying other information</b>.<br><br>In this, post, we will explain how to use <a href='https://python-graph-gallery.com/matplotlib/'>Matplotlib</a> to create a connected scatterplot in Python and how to <b>add annotations</b> to it."
seoDescription: "Plotting a connected scatterplot to see the evolution of 2 variables"
keywords: "python, chart, plot, seaborn, matplotlib, evolution"
family: "correlation"
chartType: "scatter"
slug: "connected-scatterplot-for-evolution"
---

## Libraries

First, we need to load a few libraries:

- [matplotlib](http://python-graph-gallery.com/matplotlib/): for creating the chart
- [pandas](http://python-graph-gallery.com/pandas/): for data manipulation

```python
import pandas as pd
import matplotlib.pyplot as plt
```

## Dataset

Our dataset is about the number of **people having a certain name**, and the evolution of this number over the years. Let's load it with pandas:

```python
# import dataset
df = pd.read_csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv")
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

Our goal here is to explore the evolution of the number of people named "Ashley" and "Amanda" over the years in a **single scatter plot**.

For this, we need to change a bit the dataset:

- **filter** on those 2 names
- **filter** on only date after 1970
- **pivot** the table to have the names as columns and the years as rows, using the `pivot_table()` function

```python
# filter data
df = df.loc[(df.name=="Ashley") | (df.name=="Amanda")]
df = df.loc[(df.sex=="F") & (df.year>1970)]
df = pd.pivot_table(df, values='n', index=['year'], columns=['name'])

df.head()
```

:::output
::output-html{src="./output-2.html"}
:::

## Connected scatterplot for evolution

In practice, we just have to call the `plot()` function with our columns as arguments. We specify that `markers` have to be used with `marker='o'` and that the **lines have to be connected** with `linestyle='-'`.

```python
fig, ax = plt.subplots(figsize=(8, 6))

# plot the connected scatterplot
ax.plot(df.Amanda, df.Ashley, linestyle='-', marker='o')

# x axis label
plt.xlabel('Amanda')

# y axis label
plt.ylabel('Ashley')

# show the graph
plt.show()
```

:::output
![](./output-3.png)
:::

## Annotations

Our last chart has a major issue: we don't know **which year is represented by each point**.

To fix this, we can use the `annotate()` function to add a **text next to each point**. However, it's not necessary to add all the years, and decide to **only plot 1 out of 3 years**.

In practice, we **loop over the number of rows** with a step of 3 (thanks to `range(0, len(df), 3)`) and add an annotation with the `annotate()` function.

```python
fig, ax = plt.subplots(figsize=(8, 6))

# plot the connected scatterplot
ax.plot(df.Amanda, df.Ashley, linestyle='-', marker='o')

# add annotations in every 3 data points with a loop
for line in range(0, df.shape[0], 3):
     ax.annotate(
          df.index[line], 
          (df.Amanda.iloc[line], df.Ashley.iloc[line]+1000) ,
          va='bottom',
          ha='center'
     )

# labels and display
plt.xlabel('Amanda')
plt.ylabel('Ashley')
plt.show()
```

:::output
![](./output-4.png)
:::

What a nice way to visualize the evolution of the number of people named Ashley and Amanda over the years!

## Going further

This post explains how to create a [connected scatterplot](http://python-graph-gallery.com/connected-scatterplot/) with [matplotlib](http://python-graph-gallery.com/matplotlib/).

You might be interested in how to reproduce this [beautiful connected scatter plot](http://python-graph-gallery.com/web-highlighted-lineplot-with-faceting/) and how to create [multiple connected scatter plots](http://python-graph-gallery.com/508-connected-scatter-plot-seaborn/) on the same chart.
