---
title: "Custom lollipop plot"
description: "While the <a href='http://python-graph-gallery.com/180-basic-lollipop-plot/'>previous post</a> explains how to draw a lollipop plot using matplotlib, this post aims to describe the customization you can apply to 3 main parts: the <b>stem</b>, the <b>markers</b> and the <b>baseline</b>. Note that for all of these 3 components, we first build the plot with the stem() function, and then customize it with the setp() function."
seoDescription: "How to make customizations to a lollipop plot using matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, lollipop, stem, setp"
family: "ranking"
chartType: "lollipop"
slug: "181-custom-lollipop-plot"
---

## Markers

You can easily remove the dots of the stem plot with the parameter `markerfmt`. It is also possible to change color, shape and size of the markers using `setp()` function.

```python
# libraries
import matplotlib.pyplot as plt
import numpy as np
 
# create data
values=np.random.uniform(size=40)
 
# plot without markers
plt.stem(values, markerfmt=' ')
plt.show()
 
# change color and shape and size and edges
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(markers, marker='D', markersize=10, markeredgecolor="orange", markeredgewidth=2)
plt.show()
```

:::output
![](./output-1.png)

![](./output-2.png)
:::

## Baseline

The position of the baseline can be changed using `bottom` argument in the `stem()` functon. You can also customize the baseline: remove it, change its size, color, and so on using the `setp()` function.

```python
# libraries
import matplotlib.pyplot as plt
import numpy as np

# create data
values=np.random.uniform(size=100)
 
# position is customized with the `bottom` argument
plt.stem(values, markerfmt=' ', bottom=0.5)
plt.show()
 
# hide the baseline
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(baseline, visible=False)
plt.show()
 
# hide the baseline - second way
plt.stem(values, basefmt=" ")
plt.show()
 
# custom the color and line style of the baseline 
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(baseline, linestyle="-", color="grey", linewidth=6)
plt.show()
```

:::output
![](./output-3.png)

![](./output-4.png)

![](./output-5.png)

![](./output-6.png)
:::

## Stem

The stems can be customized as well. All the feature that you can apply to a [line plot](http://python-graph-gallery.com/line-chart/) can be applied to the stem: **color, width, type, transparency** etc.

```python
# libraries
import matplotlib.pyplot as plt
import numpy as np

# create data
values=np.random.uniform(size=100)

# custom the stem lines
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(stemlines, linestyle="-", color="olive", linewidth=0.5 )
plt.show()
```

:::output
![](./output-7.png)
:::
