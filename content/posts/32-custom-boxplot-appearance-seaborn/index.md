---
title: "Customizing boxplots appearance with Seaborn"
description: "This post aims to describe 3 different customization tasks that you may want to apply to a Seaborn boxplot."
seoDescription: "Customizing your boxplot appearance with Seaborn"
keywords: "python, chart, plot, seaborn, matplotlib, boxplot"
family: "distribution"
chartType: "boxplot"
slug: "32-custom-boxplot-appearance-seaborn"
---

## Custom linewidth

Customizing your boxplot's linewidth is really straightforward and quickly done through the `linewidth` argument.

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')

sns.boxplot(x=df["species"], y=df["sepal_length"], linewidth=5)
plt.show()
```

:::output
![](./output-1.png)
:::

## Add notch

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')

sns.boxplot(x=df["species"], y=df["sepal_length"], notch=True)
plt.show()
```

:::output
![](./output-2.png)
:::

## Controlling box size

This can be an interesting modification in the case where you are facing with multiple categories to display in the same figure, given that space is limited.

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset('iris')

sns.boxplot(x=df["species"], y=df["sepal_length"], width=0.3)
plt.show()
```

:::output
![](./output-3.png)
:::
