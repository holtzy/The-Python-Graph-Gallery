---
title: "Most basic donut plot"
description: "This post aims to describe how to plot a <b>basic donut chart</b> using <a href='https://python-graph-gallery.com/matplotlib/'>matplotlib</a> library."
seoDescription: "Plotting a basic donut chart using matplotlib"
keywords: "python, chart, plot, matplotlib, donut, pie, circle"
family: "partOfAWhole"
chartType: "donut"
slug: "160-basic-donut-plot"
---

The trick to plot a donut chart using matplotlib is to draw a [pie plot](https://python-graph-gallery.com/pie-plot/) and add a white circle in the middle of it. In order to draw a circle, you can use the `Circle()` function of matplotlib. The parameters passed to the function in the example below are:
* `(x,y)` : center point of the circle
* `radius` : radius of the circle
* `color` : color of the circle

In the example, the `add_artist()` function is used to add the white circle on the axes of the pie chart. In order to get the current axes instance on the current figure, the `gca()` function is used and to get the current figure, the `gcf()` function is used.

```python
# library
import matplotlib.pyplot as plt
 
# create data
size_of_groups=[12,11,3,30]
 
# Create a pie plot
plt.pie(size_of_groups)
#plt.show()
 
# add a white circle at the center
my_circle=plt.Circle( (0,0), 0.7, color='white')
p=plt.gcf()
p.gca().add_artist(my_circle)

# show the graph
plt.show()
```

:::output
![](./output-1.png)
:::
