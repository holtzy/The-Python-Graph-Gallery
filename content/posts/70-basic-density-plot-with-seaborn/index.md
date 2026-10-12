---
title: "Basic density plot with seaborn"
description: "With seaborn, a  density plot is made using the kdeplot function. It only takes one numerical variable as input, as presented in the example below."
seoDescription: "How to draw a basic density plot with seaborn."
keywords: "python, chart, plot, seaborn, matplotlib, kdeplot, density"
family: "distribution"
chartType: "density"
interactive: false
slug: "70-basic-density-plot-with-seaborn"
---

How to build a basic density chart with `Python` and `Seaborn`.

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')
 
# Make default density plot
sns.kdeplot(df['sepal_width'])
plt.show()
```

:::output
![](./output-1.png)
:::

## Cumulative density plot

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')
 
# Make default density plot
sns.kdeplot(df['sepal_width'], cumulative=True)
plt.show()
```

:::output
![](./output-2.png)
:::
