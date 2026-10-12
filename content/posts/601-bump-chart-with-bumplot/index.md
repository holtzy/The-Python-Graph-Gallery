---
title: "Create bump charts with the bumplot package"
description: "<a href='https://y-sunflower.github.io/bumplot/'>Bumplot</a> is a small Python package made to facilitate the creation of <b>bump charts</b> using matplotlib and Bézier curves. It has high customization capabilities too! Bump charts are useful when the focus is on <b>comparing relative rankings—who is ahead of whom</b>—rather than the exact magnitude of the differences."
seoDescription: "How to use the bumplot library to create bump charts in Python"
keywords: "bump, plot, matplotlib, annotation, color, bumplot, seaborn, chart"
family: "evolution"
chartType: "timeseries"
slug: "601-bump-chart-with-bumplot"
---

## Packages

The easiest way to create bump charts is to use the `bumplot` package that you can install with:

```bash
pip install bumplot
```

```python
import pandas as pd
import matplotlib.pyplot as plt

from bumplot import bumplot
```

## Basic bump chart

```python
from bumplot import bumplot

data = pd.DataFrame(
    {
        "x": [2020, 2021, 2022, 2023],
        "A": [10, 50, 20, 80],
        "B": [40, 30, 60, 10],
        "C": [90, 20, 70, 40],
    }
)

bumplot(x="x", y_columns=["A", "B", "C"], data=data)
```

:::output
![](./output-1.png)
:::

## Customization

```python
import pandas as pd
import matplotlib.pyplot as plt
from bumplot import bumplot

data = pd.DataFrame(
    {
        "x": [2020, 2021, 2022, 2023],
        "A": [10, 50, 20, 80],
        "B": [40, 30, 60, 10],
        "C": [90, 20, 70, 40],
    }
)

fig, ax = plt.subplots(figsize=(8, 4))
bumplot(
    x="x",
    y_columns=["A", "B", "C"],
    data=data,
    curve_force=0.5,
    plot_kwargs={"lw": 4},
    scatter_kwargs={"s": 150, "ec": "black", "lw": 2},
    colors=["#ffbe0b", "#ff006e", "#3a86ff"],
)
ax.legend()
ax.spines[["top", "right", "left", "bottom"]].set_visible(False)
ax.grid(alpha=0.4)
```

:::output
![](./output-2.png)
:::

## Going further

You might be interested in [different ways to represent time series](/timeseries)
