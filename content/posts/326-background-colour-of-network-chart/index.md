---
title: "Background Color of Network Chart"
description: "This post aims to describe a matplotlib function <b>set_facecolor()</b> which you can use to change background color of a network chart."
seoDescription: "How to change a background color of a network chart using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, network, background color, set_facecolor"
family: "flow"
chartType: "network"
slug: "326-background-colour-of-network-chart"
---

You can change the **background color** of your network chart with `fig.set_facecolor()` function.  
Note that if you want to keep your background colour for your png, you should use `fig.get_facecolor()` function.

```python
# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
 
# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C'] })
 
# Build your graph
G=nx.from_pandas_edgelist(df, 'from', 'to', create_using=nx.Graph() )
 
# Custom the nodes:
fig = plt.figure()
nx.draw(G, with_labels=True, node_color='skyblue', node_size=1500, edge_color='white')
fig.set_facecolor("#00000F")
 
# If you want to save the figure to png:
# plt.savefig('yourname.png', facecolor=fig.get_facecolor() )
```

:::output
![](./output-1.png)
:::
