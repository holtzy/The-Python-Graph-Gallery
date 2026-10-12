---
title: "Lollipop plot with 2 groups"
description: "If you have several groups and 2 observations for each group, it may be better to display the observation values side by side on the same line, by only showing their differences instead of displaying the values on different lines. This post provides an example that shows these variations on a <a href='http://python-graph-gallery.com/lollipop-plot/'>lollipop plot</a>."
seoDescription: "Plotting a lolliop chart with several groups and multiple observations for each group"
keywords: "python, chart, plot, seaborn, matplotlib, lollipop, hlines, scatter"
family: "ranking"
chartType: "lollipop"
slug: "184-lollipop-plot-with-2-groups"
---

The following example shows you how to display the difference between two observations of each groups in a horizontal lollipop plot using the `hlines()` and the `scatter()` functions.

```python
# libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
 
# Create a dataframe
value1=np.random.uniform(size=20)
value2=value1+np.random.uniform(size=20)/4
df = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'value1':value1 , 'value2':value2 })
 
# Reorder it following the values of the first value:
ordered_df = df.sort_values(by='value1')
my_range=range(1,len(df.index)+1)
 
# The horizontal plot is made using the hline function
plt.hlines(y=my_range, xmin=ordered_df['value1'], xmax=ordered_df['value2'], color='grey', alpha=0.4, zorder=1)
plt.scatter(ordered_df['value1'], my_range, color='skyblue', alpha=1, label='value1')
plt.scatter(ordered_df['value2'], my_range, color='lightgreen', alpha=1 , label='value2')
plt.legend()
 
# Add title and axis names
plt.yticks(my_range, ordered_df['group'])
plt.title("Comparison of the value 1 and the value 2", loc='left')
plt.xlabel('Value of the variables')
plt.ylabel('Group')

# Show the graph
plt.show()
```

:::output
![](./output-1.png)
:::
