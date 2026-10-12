---
title: "Sankey Diagram with python and the pySankey library"
description: "This post shows how to create a <a href='https://python-graph-gallery.com/sankey-diagram/'>Sankey diagram</a> using the <code>pySankey</code> library. It shows how the dataset must be formatted, what are the possible customizations and how to save the diagram to a png image."
seoDescription: "How to draw a sankey diagram in Python with the pySankey library. Provides explanation on how to format the dataset, how to customize the chart appearance and how to save to png."
keywords: "python, chart, plot, seaborn, matplotlib, sankey, pysankey"
family: "flow"
chartType: "sankey"
interactive: false
slug: "basic-sankey-diagram-with-pysankey"
---

## Introduction

A [**Sankey diagram**](https://www.data-to-viz.com/graph/sankey.html) is a visualisation technique that allows to display flows. Several entities (nodes) are represented by rectangles or text. Their links are represented with arrow or arcs that have a width proportional to the importance of the flow.

The [pySankey](https://github.com/anazalea/pySankey) library, which is based on Matplotlib, makes it extremely easy to obtain Sankey diagrams in Python. This post is based on the library's documentation and aims to explain how to obtain Sankey diagrams with the pySankey library.

The `pySankey` library can be installed with `pip install pysankey`, but note you need to use `pySankey` instead of `pysankey` when importing the library or something from it.

```python
import pandas as pd

# Import the sankey function from the sankey module within pySankey
from pySankey.sankey import sankey
```

## Basic Sankey diagram

Let's import the `fruits.txt` dataset that comes with the library. Here we download it from the [github repository](https://raw.githubusercontent.com/anazalea/pySankey/master/pysankey/fruits.txt).

The dataset has 2 columns only. Each row describes a connection, with the origin in the first column and the destination in the second. If a connection has several occurences in the dataset (the same row appears many times), its weight will be higher and the connection on the diagram will be bigger.

The `sankey()` function is used to draw the diagram. It takes at least 2 arguments as input: the origin and destination columns:

```python
url = "https://raw.githubusercontent.com/anazalea/pySankey/master/pysankey/fruits.txt"
df = pd.read_csv(url, sep=" ", names=["true", "predicted"])

colors = {
    "apple": "#f71b1b",
    "blueberry": "#1b7ef7",
    "banana": "#f3f71b",
    "lime": "#12e23f",
    "orange": "#f78c1b"
}

sankey(df["true"], df["predicted"], aspect=20, colorDict=colors, fontsize=12)
```

:::output
![](./output-1.png)
:::

## Dataset with weights

It's also possible to use weights. The following diagram is based on the [customer-goods.csv](https://raw.githubusercontent.com/anazalea/pySankey/master/pysankey/customers-goods.csv) data from the pySankey library. This time each connection has only 1 row in the dataset, but its weight is explicitely provided in a column called `revenue`. We can provide this column to the `leftWeight` and `rightWeight` argument to draw the connections with the according sizes.

```python
url = "https://raw.githubusercontent.com/anazalea/pySankey/master/pysankey/customers-goods.csv"
df = pd.read_csv(url, sep=",")

sankey(
    left=df["customer"], right=df["good"], 
    leftWeight= df["revenue"], rightWeight=df["revenue"], 
    aspect=20, fontsize=20
)
```

:::output
![](./output-2.png)
:::

## Save the figure (`.png`)

You need [matplotlib](https://python-graph-gallery.com/matplotlib/) if you want to save the diagram with a custom size:

```python
import matplotlib.pyplot as plt

# Create Sankey diagram again
sankey(
    left=df["customer"], right=df["good"], 
    leftWeight= df["revenue"], rightWeight=df["revenue"], 
    aspect=20, fontsize=20
)

# Get current figure
fig = plt.gcf()

# Set size in inches
fig.set_size_inches(6, 6)

# Set the color of the background to white
fig.set_facecolor("w")

# Save the figure
fig.savefig("customers-goods.png", bbox_inches="tight", dpi=150)
```

:::output
![](./output-3.png)
:::
