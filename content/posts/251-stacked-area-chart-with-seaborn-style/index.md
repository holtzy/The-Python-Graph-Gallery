---
title: "Stacked area chart with seaborn style"
description: "The <a href='http://python-graph-gallery.com/250-basic-stacked-area-chart/'>previous post</a> describes how to draw a <b>basic stacked area chart</b> with matplotlib. In this post, you will see an example of stacked area chart with a seaborn theme."
seoDescription: "How to use seaborn theme in a stacked area chart built with matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, stackplot, theme"
family: "evolution"
chartType: "stackedArea"
slug: "251-stacked-area-chart-with-seaborn-style"
---

You can benefit the seaborn style in your graphs by calling the `set_theme()` function of seaborn library at the beginning of your code:

```python
# libraries
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# set seaborn style
sns.set_theme()
 
# Data
x=range(1,6)
y=[ [1,4,6,8,9], [2,2,7,10,12], [2,8,5,10,6] ]
 
# Plot
plt.stackplot(x,y, labels=['A','B','C'])
plt.legend(loc='upper left')
plt.show()
```

:::output
![](./output-1.png)
:::
