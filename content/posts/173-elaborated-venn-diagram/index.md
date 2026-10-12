---
title: "Elaborated Venn diagram"
description: "This post displays an example from the <a href='https://pypi.python.org/pypi/matplotlib-venn'>Matplotlib documentation</a>. It describes very well the possibilities offered by the <a href='https://python-graph-gallery.com/matplotlib/'>matplotlib library</a> in terms of Venn diagram. Thanks to the Matplotlib team for providing such a tool and documentation!"
seoDescription: "How to draw a venn diagram with customizations"
keywords: "python, chart, plot, matplotlib, venn3, venn2"
family: "partOfAWhole"
chartType: "venn"
slug: "173-elaborated-venn-diagram"
---

This is an elaborated example of a venn diagram built with matplotlib.

```python
# libraries
from matplotlib import pyplot as plt
import numpy as np
from matplotlib_venn import venn3, venn3_circles
 
# Make a Basic Venn
v = venn3(subsets=(1, 1, 1, 1, 1, 1, 1), set_labels = ('A', 'B', 'C'))
 
# Custom it
v.get_patch_by_id('100').set_alpha(1.0)
v.get_patch_by_id('100').set_color('white')
v.get_label_by_id('100').set_text('Unknown')
v.get_label_by_id('A').set_text('Set "A"')
c = venn3_circles(subsets=(1, 1, 1, 1, 1, 1, 1), linestyle='dashed')
c[0].set_lw(1.0)
c[0].set_ls('dotted')
 
# Add title and annotation
plt.title("Sample Venn diagram")
plt.annotate('Unknown set', xy=v.get_label_by_id('100').get_position() - np.array([0, 0.05]), xytext=(-70,-70),
ha='center', textcoords='offset points', bbox=dict(boxstyle='round,pad=0.5', fc='gray', alpha=0.1),
arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0.5',color='gray'))
 
# Show it
plt.show()
```

:::output
![](./output-1.png)
:::
