---
title: "Surface Plot"
description: "<b>Surface plots</b> are one of the useful <a href='https://python-graph-gallery.com/3d/'>3D</a> graphs which you can create using matplotlib. In this post, you will see how to draw a surface plot and customize it with an example that produces 3 figures."
seoDescription: "How to generate a 3D surface plot using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, 3d, surface"
family: "general"
chartType: "3d"
interactive: false
slug: "371-surface-plot"
---

[3D plots](https://python-graph-gallery.com/3d/) are awesome to make **surface plots**. In a surface plot, each point is defined by 3 variables: its **latitude**, its **longitude**, and its **altitude** (X, Y and Z). Thus, 2 types of **inputs** are possible:
1) A rectangular matrix where each cell represents the altitude.  
2) A long format matrix with 3 columns where each row is a point.  

This example uses the rectangular format as an input, transforms it to a long format, and makes the plot:

```python
# libraries
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
 
# Get the data (csv file is hosted on the web)
url = 'https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/volcano.csv'
data = pd.read_csv(url)
 
# Transform it to a long format
df=data.unstack().reset_index()
df.columns=["X","Y","Z"]
 
# And transform the old column name in something numeric
df['X']=pd.Categorical(df['X'])
df['X']=df['X'].cat.codes
 
# Make the plot
fig = plt.figure()
ax = fig.gca(projection='3d')
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
plt.show()
 
# to Add a color bar which maps values to colors.
fig = plt.figure()
ax = fig.gca(projection='3d')
surf=ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
fig.colorbar( surf, shrink=0.5, aspect=5)
plt.show()
 
# Rotate it
fig = plt.figure()
ax = fig.gca(projection='3d')
surf=ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
ax.view_init(30, 45)
plt.show()
 
# Other palette
fig = plt.figure()
ax = fig.gca(projection='3d')
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.01)
plt.show()
```

:::output
![](./output-1.png)

![](./output-2.png)

![](./output-3.png)

![](./output-4.png)
:::
