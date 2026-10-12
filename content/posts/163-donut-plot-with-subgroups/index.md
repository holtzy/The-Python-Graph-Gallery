---
title: "Donut plot with subgroups"
description: "This post provides an example of a donut chart with several groups and subgroups for each group."
seoDescription: "Plotting a donut chart with several subgroups"
keywords: "python, chart, plot, matplotlib, donut, pie, circle"
family: "partOfAWhole"
chartType: "donut"
slug: "163-donut-plot-with-subgroups"
---

This code provides a donut plot with 3 groups and several **subgroups** for each group. You can set the position of the 2 circle levels using the **radius** and **width** options. Then, the idea is to attribute a color palette for each group. Note that the code for this graphic is far from optimal. It would be great to create a more general function. Do not hesitate to leave a comment if you have a better way to do it!

```python
# Libraries
import matplotlib.pyplot as plt
 
# Make data: I have 3 groups and 7 subgroups
group_names=['groupA', 'groupB', 'groupC']
group_size=[12,11,30]
subgroup_names=['A.1', 'A.2', 'A.3', 'B.1', 'B.2', 'C.1', 'C.2', 'C.3', 'C.4', 'C.5']
subgroup_size=[4,3,5,6,5,10,5,5,4,6]
 
# Create colors
a, b, c=[plt.cm.Blues, plt.cm.Reds, plt.cm.Greens]
 
# First Ring (outside)
fig, ax = plt.subplots()
ax.axis('equal')
mypie, _ = ax.pie(group_size, radius=1.3, labels=group_names, colors=[a(0.6), b(0.6), c(0.6)] )
plt.setp( mypie, width=0.3, edgecolor='white')
 
# Second Ring (Inside)
mypie2, _ = ax.pie(subgroup_size, radius=1.3-0.3, labels=subgroup_names, labeldistance=0.7, colors=[a(0.5), a(0.4), a(0.3), b(0.5), b(0.4), c(0.6), c(0.5), c(0.4), c(0.3), c(0.2)])
plt.setp( mypie2, width=0.4, edgecolor='white')
plt.margins(0,0)
 
# show it
plt.show()
```

:::output
![](./output-1.png)
:::
