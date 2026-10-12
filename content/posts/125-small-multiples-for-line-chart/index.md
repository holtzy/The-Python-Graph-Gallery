---
title: "Small multiples for line chart"
description: "Let’s say you want to build a <a href='http://python-graph-gallery.com/line-chart/'>line chart</a> with several lines, one for each group of your dataset. Adding all of them on the same plot can quickly lead to a <a href='https://python-graph-gallery.com/124-spaghetti-plot/'>spaghetti plot</a>, and thus provide a chart that is <b>hard to read</b> and gives <b>few insights</b> about the data. This post shows how to avoid it by creating several subplots using matplotlib."
seoDescription: "Avoiding a spaghetti plot by dividing the figure into several subplots to display the behaviour of each group using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, line, subplot"
family: "evolution"
chartType: "line"
slug: "125-small-multiples-for-line-chart"
---

## Libraries & Data

```python
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df = pd.DataFrame({
   'x': range(1,11),
   'y1': np.random.randn(10),
   'y2': np.random.randn(10)+range(1,11),
   'y3': np.random.randn(10)+range(11,21),
   'y4': np.random.randn(10)+range(6,16),
   'y5': np.random.randn(10)+range(4,14)+(0,0,0,0,0,0,0,-3,-8,-6),
   'y6': np.random.randn(10)+range(2,12),
   'y7': np.random.randn(10)+range(5,15),
   'y8': np.random.randn(10)+range(4,14),
   'y9': np.random.randn(10)+range(4,14) 
})
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Spaghetti Chart

Several ways exist to avoid creating a [spaghetti plot](https://www.data-to-viz.com/caveat/spaghetti.html), and one of them is using small multiple: here we cut the window in several **subplots**, one per group.

Then, you can choose to display every group discretely, or not to show them at all. Note that you can easily do the same with the [area chart](/242-area-chart-and-faceting).

## Left graph

You can create multiple plots on the same figure by using the `subplot()` function of matplotlib.

Note that you can check [this post](https://python-graph-gallery.com/194-split-the-graphic-window-with-subplot/) to see more examples of the `subplot()` function.

```python
# Create a color palette
palette = plt.get_cmap('Set1')

# Create a figure and axes
fig, axes = plt.subplots(3, 3, figsize=(12, 12), dpi=150)

# Flatten the axes array for easy iteration
axes = axes.flatten()

# Multiple line plots
for num, column in enumerate(df.drop('x', axis=1), start=1):
    ax = axes[num-1]
    
    # Plot the line plot
    ax.plot(df['x'], df[column], marker='', color=palette(num), linewidth=1.9, alpha=0.9, label=column)
    
    # Same limits for every chart
    ax.set_xlim(0, 10)
    ax.set_ylim(-2, 22)
    
    # Not ticks everywhere
    if num in range(7):
        ax.tick_params(labelbottom=False)
    if num not in [1, 4, 7]:
        ax.tick_params(labelleft=False)
    
    # Add title
    ax.set_title(column, loc='left', fontsize=12, fontweight=0, color=palette(num))

# General title
fig.suptitle(
    "How the 9 students improved\nthese past few days?",
    fontsize=13,
    fontweight=0,
    color='black',
    style='italic',
    y=1.02
)

# Adjust layout
fig.tight_layout(rect=[0, 0.03, 1, 0.95])

# Show the graph
plt.show()
```

:::output
![](./output-2.png)
:::

## Right graph

As an alternative to the previous example, you can make multiple subplots consisting the lines of all groups with only one group highlighted in each subplot.

```python
# Create a color palette
palette = plt.get_cmap('Set1')

# Create a figure and axes
fig, axes = plt.subplots(3, 3, figsize=(12, 12))

# Flatten the axes array for easy iteration
axes = axes.flatten()

# Multiple line plots
for num, column in enumerate(df.drop('x', axis=1), start=1):
    ax = axes[num-1]
    
    # Plot every group, but discrete (lower alpha)
    for v in df.drop('x', axis=1):
        ax.plot(df['x'], df[v], marker='', color='grey', linewidth=0.6, alpha=0.3)
    
    # Plot the line plot
    ax.plot(df['x'], df[column], marker='', color=palette(num), linewidth=2.4, alpha=0.9, label=column)
    
    # Same limits for every chart
    ax.set_xlim(0, 10)
    ax.set_ylim(-2, 22)
    
    # Not ticks everywhere
    if num in range(7):
        ax.tick_params(labelbottom=False)
    if num not in [1, 4, 7]:
        ax.tick_params(labelleft=False)
    
    # Add title
    ax.set_title(column, loc='left', fontsize=12, fontweight=0, color=palette(num))

# General title
fig.suptitle(
    "How the 9 students improved\nthese past few days?",
    fontsize=13,
    fontweight=0,
    color='black',
    style='italic',
    y=1.02
)

# Adjust layout
fig.tight_layout(rect=[0, 0.03, 1, 0.95])

# Show the graph
plt.show()
```

:::output
![](./output-3.png)
:::

## Going further

You might be interested in:

- this [advanced small multiples](/web-small-multiple-with-highlights) example
- how to stack the lines on top of each other with the [area chart](/stacked-area-plot)
