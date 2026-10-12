---
title: "3D PCA Result"
description: "<a href='https://python-graph-gallery.com/3d/'>3D</a> scatterplots can be useful to display the result of a <b>PCA</b>, in the case you would like to display 3 principal components. This post provides an example to show how to display PCA in your 3D plots using the sklearn library."
seoDescription: "Showing a PCA result in 3D scatterplot using sklearn and matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, sklearn, 3D, scatterplot, PCA"
family: "general"
chartType: "3d"
slug: "372-3d-pca-result"
---

Here is an example showing how to display the result of a PCA in 3D scatterplots. Note that the 3 red lines highlighting the dimensions.

```python
# libraries
import pandas as pd
import numpy as np
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import seaborn as sns
 
# Get the iris dataset
sns.set_style("white")
df = sns.load_dataset('iris')

# create figure
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
 
# Keep the 'species' column appart + make it numeric for coloring
df['species']=pd.Categorical(df['species'])
my_color=df['species'].cat.codes
df = df.drop('species', 1)
 
# Run The PCA
pca = PCA(n_components=3)
pca.fit(df)
 
# Store results of PCA in a data frame
result=pd.DataFrame(pca.transform(df), columns=['PCA%i' % i for i in range(3)], index=df.index)
 
# Plot initialisation
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(result['PCA0'], result['PCA1'], result['PCA2'], c=my_color, cmap="Set2_r", s=60)
 
# make simple, bare axis lines through space:
xAxisLine = ((min(result['PCA0']), max(result['PCA0'])), (0, 0), (0,0))
ax.plot(xAxisLine[0], xAxisLine[1], xAxisLine[2], 'r')
yAxisLine = ((0, 0), (min(result['PCA1']), max(result['PCA1'])), (0,0))
ax.plot(yAxisLine[0], yAxisLine[1], yAxisLine[2], 'r')
zAxisLine = ((0, 0), (0,0), (min(result['PCA2']), max(result['PCA2'])))
ax.plot(zAxisLine[0], zAxisLine[1], zAxisLine[2], 'r')
 
# label the axes
ax.set_xlabel("PC1")
ax.set_ylabel("PC2")
ax.set_zlabel("PC3")
ax.set_title("PCA on the iris data set")
plt.show()
```

:::output
![](./output-1.png)
:::
