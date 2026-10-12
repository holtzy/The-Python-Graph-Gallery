---
title: "Horizontal lollipop plot"
description: "This post provides a reproducible code to plot a <b>horizontal lollipop plot</b> using the hline() function of <a href='https://python-graph-gallery.com/matplotlib/'>matplotlib</a>."
seoDescription: "How to plot a horizontal lollipop plot using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, lollipop, horizontal"
family: "ranking"
chartType: "lollipop"
slug: "182-vertical-lollipop-plot"
---

When a **lollipop plot** shows the relationship between a numerical and a categorical variable, it might be better to re-order the groups on a decreasing order and display them **horizontally**.

Note that the `stem()` function does not allow to plot horizontal lollipop plots, thus you need to use the `hlines()` function.

```python
# libraries
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
 
# Create a dataframe
df = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })
 
# Reorder it based on the values
ordered_df = df.sort_values(by='values')
my_range=range(1,len(df.index)+1)
 
# The horizontal plot is made using the hline function
plt.hlines(y=my_range, xmin=0, xmax=ordered_df['values'], color='skyblue')
plt.plot(ordered_df['values'], my_range, "o")
 
# Add titles and axis names
plt.yticks(my_range, ordered_df['group'])
plt.title("A vertical lolipop plot", loc='left')
plt.xlabel('Value of the variable')
plt.ylabel('Group')

# Show the plot
plt.show()
```

:::output
![](./output-1.png)
:::
