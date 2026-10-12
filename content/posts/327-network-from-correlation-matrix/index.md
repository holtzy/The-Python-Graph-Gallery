---
title: "Network from Correlation Matrix"
description: "This post explains how to draw a <b>correlation network</b>: a <a href='https://python-graph-gallery.com/network-chart/'>network</a> build on a correlation matrix."
seoDescription: "How to plot a network chart from a correlation matrix in python"
keywords: "python, chart, plot, matplotlib, network, correlation"
family: "flow"
chartType: "network"
slug: "327-network-from-correlation-matrix"
---

Suppose that you have 10 individuals, and know how close they are related to each other. It is possible to represent these **relationships** in a network. Each individual will be a **node**. If 2 individuals are close enough (we set a **threshold**), then they are linked by an **edge**. That will show the structure of the population!

In this example, we see that our population is clearly split into 2 groups!

```python
# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
 
# I build a data set: 10 individuals and 5 variables for each
ind1=[5,10,3,4,8,10,12,1,9,4]
ind5=[1,1,13,4,18,5,2,11,3,8]
df = pd.DataFrame({ 'A':ind1, 'B':ind1 + np.random.randint(10, size=(10)) , 'C':ind1 + np.random.randint(10, size=(10)) , 'D':ind1 + np.random.randint(5, size=(10)) , 'E':ind1 + np.random.randint(5, size=(10)), 'F':ind5, 'G':ind5 + np.random.randint(5, size=(10)) , 'H':ind5 + np.random.randint(5, size=(10)), 'I':ind5 + np.random.randint(5, size=(10)), 'J':ind5 + np.random.randint(5, size=(10))})
 
# Calculate the correlation between individuals. We have to transpose first, because the corr function calculate the pairwise correlations between columns.
corr = df.corr()
 
# Transform it in a links data frame (3 columns only):
links = corr.stack().reset_index()
links.columns = ['var1', 'var2', 'value']
 
# Keep only correlation over a threshold and remove self correlation (cor(A,A)=1)
links_filtered=links.loc[ (links['value'] > 0.8) & (links['var1'] != links['var2']) ]
 
# Build your graph
G=nx.from_pandas_edgelist(links_filtered, 'var1', 'var2')
 
# Plot the network:
nx.draw(G, with_labels=True, node_color='orange', node_size=400, edge_color='black', linewidths=1, font_size=15)
```

:::output
![](./output-1.png)
:::
