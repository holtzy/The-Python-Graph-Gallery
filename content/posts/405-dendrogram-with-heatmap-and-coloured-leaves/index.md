---
title: "Dendrogram with heatmap and coloured leaves"
description: "The <a href='https://python-graph-gallery.com/404-dendrogram-with-heat-map/'>previous post</a> describes in detail how to plot a dendrogram with heatmap using <a href='http://python-graph-gallery.com/seaborn/'>seaborn</a>. I strongly advise to read it before doing this chart. This post aims to describe how to color leaves of your dendrogram built with seaborn."
seoDescription: "How to change leaf colors of a dendrogram with heatmap using seaborn "
keywords: "python, chart, plot, seaborn, dendrogram, heatmap, clustermap"
family: "partOfAWhole"
chartType: "dendrogram"
slug: "405-dendrogram-with-heatmap-and-coloured-leaves"
---

In the example, mtcars dataset that shows the features of cars through numerical variables is used. While clustering cars, a color sheme is added to the left part of the plot. The 3 colours represent the 3 possible values of the ‘cyl’ column. By using this feature, you can evaluate whether samples within a group are clustered together.

```python
# Libraries
import seaborn as sns
import pandas as pd
from matplotlib import pyplot as plt
 
# Data set
url = 'https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/mtcars.csv'
df = pd.read_csv(url)
df = df.set_index('model')
 
# Prepare a vector of color mapped to the 'cyl' column
my_palette = dict(zip(df.cyl.unique(), ["orange","yellow","brown"]))
row_colors = df.cyl.map(my_palette)
 
# plot
sns.clustermap(df, metric="correlation", method="single", cmap="Blues", standard_scale=1, row_colors=row_colors)
plt.show()
```

:::output
![](./output-1.png)
:::
