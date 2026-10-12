---
title: "Use faceting for Radar chart"
description: "The posts <a href='https://python-graph-gallery.com/390-basic-radar-chart/'>#390</a> and <a href='https://python-graph-gallery.com/391-radar-chart-with-several-individuals/'>#391</a> showed how to make a <b>radar chart</b> with one or two individuals. This post describes using faceting when displaying more than two individuals on a radar chart using matplotlib."
seoDescription: "Using faceting when displaying more than two individuals on a radar chart"
keywords: "python, chart, plot, seaborn, matplotlib, radar, faceting"
family: "ranking"
chartType: "radar"
slug: "392-use-faceting-for-radar-chart"
---

It is not advised to display too many entities on the same spider plot since it would result in an **unreadable plot**. Instead, you may prefer **faceting**. When you display each individual in a separate plot, the figure stays clear and the reader can compare the shape of each plot easily.  

Here is the code allowing to make this figure. Do not hesitate to read [this page](https://python-graph-gallery.com/194-split-the-graphic-window-with-subplot) to understand how faceting works with [matplotlib](https://python-graph-gallery.com/matplotlib/).

```python
# Libraries
import matplotlib.pyplot as plt
import pandas as pd
from math import pi
 
# Set data
df = pd.DataFrame({
'group': ['A','B','C','D'],
'var1': [38, 1.5, 30, 4],
'var2': [29, 10, 9, 34],
'var3': [8, 39, 23, 24],
'var4': [7, 31, 33, 14],
'var5': [28, 15, 32, 14]
})
 
# ------- PART 1: Define a function that do a plot for one line of the dataset!
 
def make_spider( row, title, color):

    # number of variable
    categories=list(df)[1:]
    N = len(categories)

    # What will be the angle of each axis in the plot? (we divide the plot / number of variable)
    angles = [n / float(N) * 2 * pi for n in range(N)]
    angles += angles[:1]

    # Initialise the spider plot
    ax = plt.subplot(2,2,row+1, polar=True, )

    # If you want the first axis to be on top:
    ax.set_theta_offset(pi / 2)
    ax.set_theta_direction(-1)

    # Draw one axe per variable + add labels labels yet
    plt.xticks(angles[:-1], categories, color='grey', size=8)

    # Draw ylabels
    ax.set_rlabel_position(0)
    plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
    plt.ylim(0,40)

    # Ind1
    values=df.loc[row].drop('group').values.flatten().tolist()
    values += values[:1]
    ax.plot(angles, values, color=color, linewidth=2, linestyle='solid')
    ax.fill(angles, values, color=color, alpha=0.4)

    # Add a title
    plt.title(title, size=11, color=color, y=1.1)

    
# ------- PART 2: Apply the function to all individuals
# initialize the figure
my_dpi=96
plt.figure(figsize=(1000/my_dpi, 1000/my_dpi), dpi=my_dpi)
 
# Create a color palette:
my_palette = plt.cm.get_cmap("Set2", len(df.index))
 
# Loop to plot
for row in range(0, len(df.index)):
    make_spider( row=row, title='group '+df['group'][row], color=my_palette(row))
```

:::output
![](./output-1.png)
:::
