---
title: "Percent stacked barplot"
description: "The previous post shows how to generate a <a href='https://python-graph-gallery.com/stacked-barplot/'>stacked barplot</a> using matplotlib. This post explains how you can modify your stacked barplot to display bars as a percent bars consists of different percentages of subgroups."
seoDescription: "How to plot a percent stacked plot using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, barplot"
family: "distribution"
chartType: "density"
slug: "13-percent-stacked-barplot"
---

A percent [stacked bar chart](http://python-graph-gallery.com/12-stacked-barplot-with-matplotlib/) is almost the same as a stacked barchart. Subgroups are displayed on of top of each other, but data are **normalised** to make in sort that the **sum** of every subgroups is **100**.

```python
# libraries
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rc
import pandas as pd
 
# Data
r = [0,1,2,3,4]
raw_data = {'greenBars': [20, 1.5, 7, 10, 5], 'orangeBars': [5, 15, 5, 10, 15],'blueBars': [2, 15, 18, 5, 10]}
df = pd.DataFrame(raw_data)
 
# From raw value to percentage
totals = [i+j+k for i,j,k in zip(df['greenBars'], df['orangeBars'], df['blueBars'])]
greenBars = [i / j * 100 for i,j in zip(df['greenBars'], totals)]
orangeBars = [i / j * 100 for i,j in zip(df['orangeBars'], totals)]
blueBars = [i / j * 100 for i,j in zip(df['blueBars'], totals)]
 
# plot
barWidth = 0.85
names = ('A','B','C','D','E')
# Create green Bars
plt.bar(r, greenBars, color='#b5ffb9', edgecolor='white', width=barWidth)
# Create orange Bars
plt.bar(r, orangeBars, bottom=greenBars, color='#f9bc86', edgecolor='white', width=barWidth)
# Create blue Bars
plt.bar(r, blueBars, bottom=[i+j for i,j in zip(greenBars, orangeBars)], color='#a3acff', edgecolor='white', width=barWidth)
 
# Custom x axis
plt.xticks(r, names)
plt.xlabel("group")
 
# Show graphic
plt.show()
```

:::output
![](./output-1.png)
:::

**Edit**: Following the nice comment of Prakash, I propose a little modification to this chart in order to add a legend.

```python
# Create green Bars
plt.bar(r, greenBars, color='#b5ffb9', edgecolor='white', width=barWidth, label="group A")
# Create orange Bars
plt.bar(r, orangeBars, bottom=greenBars, color='#f9bc86', edgecolor='white', width=barWidth, label="group B")
# Create blue Bars
plt.bar(r, blueBars, bottom=[i+j for i,j in zip(greenBars, orangeBars)], color='#a3acff', edgecolor='white', width=barWidth, label="group C")
 
# Custom x axis
plt.xticks(r, names)
plt.xlabel("group")
 
# Add a legend
plt.legend(loc='upper left', bbox_to_anchor=(1,1), ncol=1)
 
# Show graphic
plt.show()
```

:::output
![](./output-2.png)
:::
