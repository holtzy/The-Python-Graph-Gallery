---
title: "Plot a Basic Correlation Matrix using Seaborn"
description: "This post aims to show how to plot a <b>basic correlation matrix</b> using <a href='http://python-graph-gallery.com/seaborn/'>seaborn</a>."
seoDescription: "Plotting a basic correlation matrix using pairplot function of seaborn library"
keywords: "python, chart, plot, seaborn, matplotlib, pairplot, correlogram, correlation matrix"
family: "correlation"
chartType: "correlogram"
slug: "110-basic-correlation-matrix-with-seaborn"
---

[Seaborn](https://python-graph-gallery.com/seaborn/) allows you to make a [correlogram](https://python-graph-gallery.com/correlogram/) or correlation matrix really easily. Correlogram is awesome for **exploratory analysis**: it makes you quickly observe the relationship between every variable of your matrix. It is easy to do it with seaborn: just call the `pairplot()` function!

```python
# libraries
import seaborn as sns
import matplotlib.pyplot as plt

# load data set
df = sns.load_dataset('iris')

# Basic correlogram
sns.pairplot(df)
plt.show()
```

:::output
![](./output-1.png)
:::
