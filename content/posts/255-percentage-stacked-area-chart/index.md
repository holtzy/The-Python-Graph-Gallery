---
title: "Percentage Stacked Area Chart"
description: "A <b>percentage stacked area chart</b> is very close to a classic <a href='http://python-graph-gallery.com/250-basic-stacked-area-chart/'>stacked area chart</a>. However, values are <b>normalised</b> to make in sort that the sum of each group is 100 at each position on the X axis. In this post, you will see how to create a percentage stacked area chart with matplotlib library."
seoDescription: "Plotting a percentage stacked area chart using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, percentage stacked area, stackplot, normalised"
family: "evolution"
chartType: "stackedArea"
slug: "255-percentage-stacked-area-chart"
---

In this example we consider 3 groups, displayed in a pandas data frame. The first step is to **normalise** the data. Then it is possible to make the plot using the common `stackplot()` function.

```python
# libraries
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
 
# Make data
data = pd.DataFrame({  'group_A':[1,4,6,8,9], 'group_B':[2,24,7,10,12], 'group_C':[2,8,5,10,6], }, index=range(1,6))
 
# We need to transform the data from raw data to percentage (fraction)
data_perc = data.divide(data.sum(axis=1), axis=0)
 
# Make the plot
plt.stackplot(range(1,6),  data_perc["group_A"],  data_perc["group_B"],  data_perc["group_C"], labels=['A','B','C'])
plt.legend(loc='upper left')
plt.margins(0,0)
plt.title('100 % stacked area chart')
plt.show()
```

:::output
![](./output-1.png)
:::
