---
title: "Histogram with several variables with Seaborn"
description: "If you have several numerical variables and want to visualize their distributions together, you have 2 options: plot them on the same axis or make use of matplotlib.Figure and matplotlib.Axes objects to customize your figure. The first option is nicer if you do not have too many variable, and if they do not overlap much."
seoDescription: "How to plot histograms with multiple variables"
keywords: "python, chart, plot, seaborn, matplotlib, histogram"
family: "distribution"
chartType: "histogram"
slug: "25-histogram-with-several-variables-seaborn"
---

## Plotting distributions on the same graph

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset("iris")

sns.histplot(data=df, x="sepal_length", color="skyblue", label="Sepal Length", kde=True)
sns.histplot(data=df, x="sepal_width", color="red", label="Sepal Width", kde=True)

plt.legend() 
plt.show()
```

:::output
![](./output-1.png)
:::

## Splitting the figure in as much axes as needed

```python
# libraries & dataset
import seaborn as sns
import matplotlib.pyplot as plt
  
sns.set_theme(style="darkgrid")
df = sns.load_dataset("iris")

fig, axs = plt.subplots(2, 2, figsize=(7, 7))

sns.histplot(data=df, x="sepal_length", kde=True, color="skyblue", ax=axs[0, 0])
sns.histplot(data=df, x="sepal_width", kde=True, color="olive", ax=axs[0, 1])
sns.histplot(data=df, x="petal_length", kde=True, color="gold", ax=axs[1, 0])
sns.histplot(data=df, x="petal_width", kde=True, color="teal", ax=axs[1, 1])

plt.show()
```

:::output
![](./output-2.png)
:::
