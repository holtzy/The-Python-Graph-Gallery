---
title: "Select one color with matplotlib"
description: "This post aims to describe how to <b>set a color</b> with the <a href='https://python-graph-gallery.com/matplotlib/'>matplotlib</a> library of python. These techniques also work for most of the python libraries, since most of them are build on top of matplotlib. Note that the next post is dedicated to the choice and utilisation of color palettes."
seoDescription: "How to select a single color with matplotlib"
keywords: "python, chart, plot, seaborn, matplotlib, color"
family: "general"
chartType: "cheatSheets"
slug: "196-select-one-color-with-matplotlib"
---

## Name

The most common way to call a color is by its **name**. It is highly advised to avoid the basic ‘blue’, ‘red’, ‘green’, etc. since they seem quite ugly in charts. There are so many other nice possibilities. See the figure which shows all the possibilities in this page.(Thanks to the Matplotlib documentation for their work).

```python
# libraries
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# dataset
df=pd.DataFrame({'x_pos': range(1,101), 'y_pos': np.random.randn(100)*15+range(1,101)})
 
# plot
plt.plot( 'x_pos', 'y_pos', data=df, marker='o', color='mediumvioletred')

# show the graph
plt.show()
```

:::output
![](./output-1.png)
:::

## Abbreviation

It is also possible to call a color with the **abbreviation** of its name:

```python
# libraries
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# dataset
df=pd.DataFrame({'x_pos': range(1,101), 'y_pos': np.random.randn(100)*15+range(1,101)})
 
# Plot
plt.plot( 'x_pos', 'y_pos', data=df, marker='o', color='c')

# Show the graph
plt.show()
```

:::output
![](./output-2.png)
:::

## Hex Code

This example shows how to use **hex codes** to call a name:

```python
# library
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# dataset
df=pd.DataFrame({'x_pos': range(1,101), 'y_pos': np.random.randn(100)*15+range(1,101)})
 
# plot
plt.plot( 'x_pos', 'y_pos', data=df, marker='o', color='#8f9805')

# show the graph
plt.show()
```

:::output
![](./output-3.png)
:::

## RGB

Here is an example which passes an RGB colors to the plot:

```python
# libraries
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# dataset
df=pd.DataFrame({'x_pos': range(1,101), 'y_pos': np.random.randn(100)*15+range(1,101)})
 
# plot
plt.plot( 'x_pos', 'y_pos', data=df, marker='o', color=(0.9, 0.2, 0.5, 0.2))

# show the graph
plt.show()
```

:::output
![](./output-4.png)
:::

## Black and White

Here is an example of black and white plot:

```python
# libraries
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# dataset
df=pd.DataFrame({'x_pos': range(1,101), 'y_pos': np.random.randn(100)*15+range(1,101)})

# plot
plt.plot( 'x_pos', 'y_pos', data=df, marker='o', color='0.9')

# show the graph
plt.show()
```

:::output
![](./output-5.png)
:::

## Transparency

You can change the color transparency with the `alpha` parameter:

```python
# libraries
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# dataset
df=pd.DataFrame({'x_pos': range(1,101), 'y_pos': np.random.randn(100)*15+range(1,101)})

# plot
plt.plot( 'x_pos', 'y_pos', data=df, marker='o', color='blue', alpha=0.3)

# show the graph
plt.show()
```

:::output
![](./output-6.png)
:::
