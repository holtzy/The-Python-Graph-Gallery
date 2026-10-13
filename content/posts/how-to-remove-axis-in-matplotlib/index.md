---
title: "How to remove axis in Matplotlib"
description: "The aim of this post is to show you how to remove certain axis from a visualization that is made up of multiple subplots. To do so, we build a pairplot or correlogram from scratch and show how to remove empty axis from the final chart."
seoDescription: "Remove specific axis from Matplotlib charts with multiple panels."
keywords: "python, chart, plot, matplotlib, pairplot, correlogram, correlation, remove axis"
family: "correlation"
chartType: "correlogram"
slug: "how-to-remove-axis-in-matplotlib"
---

```python
import palmerpenguins
import matplotlib.pyplot as plt
```

```python
penguins = palmerpenguins.load_penguins().dropna()
penguins.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Pairplot with Matplotlib

Let's create a pairplot with Matplotlib from scratch. This chart is useful to see the relationship between numerical variables and their distributions for some groups of observations. In this case, observations are grouped according to the species. The numerical variables are those in the `COLUMNS` list.

```python
COLUMNS = ["bill_length_mm", "bill_depth_mm", "flipper_length_mm", "body_mass_g"]
COLORS = ["#386cb0", "#fdb462", "#7fc97f"]
SPECIES = ["Adelie", "Gentoo", "Chinstrap"]
```

And now the plot:

```python
# A layout of 4x4 subplots
fig, axes = plt.subplots(4, 4, figsize = (12, 8), sharex="col", tight_layout=True)

for i in range(len(COLUMNS)):
    for j in range(len(COLUMNS)):
        # If this is the lower-triangule, add a scatterlpot for each group.
        if i > j:
            for species, color in zip(SPECIES, COLORS):
                data = penguins[penguins["species"] == species]
                axes[i, j].scatter(COLUMNS[j], COLUMNS[i], color=color, alpha=0.5, data=data)
                
        # If this is the main diagonal, add histograms
        if i == j:
            for species, color in zip(SPECIES, COLORS):
                data = penguins[penguins["species"] == species]
                axes[i, j].hist(COLUMNS[j], bins=15, alpha=0.5, data=data)
```

:::output
![](./output-2.png)
:::

## Remove unused axes

The code above shows it is not that hard to create a pairplot from scratch with Matplotlib. But those empty subplots on the upper triangle are now something we would like to keep on our viz. Let's remove them! 

`ax.remove()` is all we need. It simply removes the axis from the figure. Let's loop through the axes again, but this time removing those on the upper triangle of the layout.

```python
for i in range(len(COLUMNS)):
    for j in range(len(COLUMNS)):
        # If on the upper triangle
        if i < j:
            axes[i, j].remove()

# See the chart now
fig
```

:::output
![](./output-3.png)
:::
