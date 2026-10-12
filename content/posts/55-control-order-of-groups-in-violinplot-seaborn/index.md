---
title: "Manage the order of groups in seaborn violinplot"
description: "One could decide to change the order in which groups appear in a given plot, wether it be for the sake of clarity or other reasons. This can be performed with the 'order' parameter, either by specifying directly the order of the groups through a list, or by generating an ordered list based on the groups corresponding mean for example."
seoDescription: "Managing the order in which groups will appear in the violinplot. This is done by changing the 'order' parameter of seaborn violinplot."
keywords: "python, chart, plot, seaborn, matplotlib, violinplot"
family: "distribution"
chartType: "violin"
slug: "55-control-order-of-groups-in-violinplot-seaborn"
---

## Directly specyfing a list 
Thanks to the `order` parameter of the violinplot function, you can set the order in which you expect the distributions to appear on the figure.

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')

# specifying the group list as 'order' parameter and plotting
sns.violinplot(x='species', y='sepal_length', data=df, order=[ "versicolor", "virginica", "setosa"])
plt.show()
```

:::output
![](./output-1.png)
:::

## Ordering by decreasing median 
Instead of creating the list 'by hand' with various categories, you can also use the power of pandas operations (groupby, median or mean) in order to create a ranked list, which we stored in `my_order` variable in the following example.

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')
 
# Using pandas methods and slicing to determine the order by decreasing median
my_order = df.groupby(by=["species"])["sepal_length"].median().sort_values().iloc[::-1].index
 
# Specifying the 'order' parameter with my_order and plotting
sns.violinplot(x='species', y='sepal_length', data=df, order=my_order)
plt.show()
```

:::output
![](./output-2.png)
:::
