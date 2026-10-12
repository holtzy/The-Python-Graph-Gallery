---
title: "Adding jitter to a boxplot distribution"
description: "Boxplot is an amazing way to study distributions. However, note that different type of distribution can be hidden under the same box. Thus, it is highly advised to display every observations over your boxplot, to be sure not to miss an interesting pattern. Note that violin plots can be an interesting alternative if you have many many observations."
seoDescription: "How to add jitter to your data inside a Seaborn boxplot"
keywords: "python, chart, plot, seaborn, matplotlib, boxplot"
family: "distribution"
chartType: "boxplot"
slug: "36-add-jitter-over-boxplot-seaborn"
---

Seaborn boxplot() function does not include any argument to display points directly. To do so, we use a matplotlib.axes object in order to successively plot a seaborn boxplot() and a seaborn swarmplot(). The latter enables us to add points to the figure.  
Overall, such a figure is quite similar to a violinplots in terms of information.

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')

# Usual boxplot
ax = sns.boxplot(x='species', y='sepal_length', data=df)
 
# Add jitter with the swarmplot function
ax = sns.swarmplot(x='species', y='sepal_length', data=df, color="grey")
plt.show()
```

:::output
![](./output-1.png)
:::
