---
title: "Control the color of Treemap"
description: "This page aims to describe the customization you can apply on a treemap. You can easily plot a treemap and change the color of each group using the squarify library."
seoDescription: "How to change the colors in a treemap"
keywords: "python, chart, plot, treemap"
family: "partOfAWhole"
chartType: "treemap"
slug: "201-control-the-color-of-treemap"
---

You can set the color of each group in a treemap using the `color` parameter:

```python
#libraries
import matplotlib.pyplot as plt
import squarify # pip install squarify (algorithm for treemap)
 
# Change color
squarify.plot(sizes=[13,22,35,5], label=["group A", "group B", "group C", "group D"], color=["red","green","blue", "grey"], alpha=.4 )
plt.axis('off')
plt.show()
```

:::output
![](./output-1.png)
:::
