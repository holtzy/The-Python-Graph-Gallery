---
title: "Chord diagram with Python and the chord library"
description: "A chord diagram is a chart type allowing to visualise flows between entities. The chord library is probably the best way to build a chord diagram with Python. This blogpost will guide you through its usage."
seoDescription: "Code and explanation concerning the chord library that allows to build chord diagrams with Python"
keywords: "python, chart, plot, seaborn, matplotlib, chord, diagram"
family: "flow"
chartType: "chordDiagram"
slug: "chord-diagram-python-chord"
---

## Input dataset

The dataset considered in this page provides the number of people migrating from one country to another. Data used comes from this [scientific publication](https://onlinelibrary.wiley.com/doi/abs/10.1111/imre.12327) already discussed on [data-to-viz.com](https://www.data-to-viz.com/graph/chord.html).

The data is stored online here. Let's load it into Python as follow:

```python
# Pandas is gonna be used to read the csv file stored on the web:
import pandas as pd

# Load dataset from github
data = pd.read_csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/13_AdjacencyDirectedWeighted.csv", sep=" ")
data

# Create a list of all the items in the diagram
names = data.columns.values

data = data.values.tolist()
data
```

:::output
```text
[[3.142471,
  0.0,
  2.107883,
  0.0,
  0.540887,
  0.15598800000000002,
  0.0,
  0.0,
  0.0,
  0.673004],
 [0.0,
  1.630997,
  0.6012649999999999,
  0.0,
  0.97306,
  0.333608,
  0.0,
  0.380388,
  0.0,
  0.8693110000000001],
 [0.0, 0.0, 2.4014759999999997, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
 [0.0, 0.0, 1.762587, 0.8791979999999999, 3.627847, 0.0, 0.0, 0.0, 0.0, 0.0],
 [0.0, 0.0, 1.215929, 0.276908, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
 [0.0, 0.0, 0.17037, 0.0, 0.0, 0.190706, 0.0, 0.0, 0.0, 0.0],
 [0.0,
  0.525881,
  1.390272,
  0.0,
  1.508008,
  0.34742,
  1.307907,
  0.0,
  0.0,
  4.902081],
 [0.0,
  0.145264,
  0.468762,
  0.0,
  1.0579040000000002,
  0.278746,
  0.0,
  0.781316,
  0.0,
  0.0],
 [0.0, 0.0, 0.60923, 0.0, 0.0, 0.0, 0.0, 0.0, 1.8705009999999997, 0.0],
 [0.0, 0.0, 0.44962299999999994, 0.0, 0.169274, 0.0, 0.0, 0.0, 0.0, 0.927243]]
```
:::

What's important to understand here is that the chord library used later needs a `matrix` as input.

## Installing the `chord` library

All the hard work is gonna be tackled by the [chord library](https://github.com/shahinrostami/chord). This library basically wraps some javascript functions available in a really powerful library called d3.js. But you do not really need to take care about this 🎉

In order to take advantage of this library, we need to use it:

```python
pip install chord
```

:::output
```text
Requirement already satisfied: chord in /opt/anaconda3/lib/python3.8/site-packages (0.10.0)
Note: you may need to restart the kernel to use updated packages.
```
:::

## Most basic chord diagram

Let's start with the most simple chord diagram that can be built with this library

```python
# Import the library
from chord import Chord


# Basic cord diagram
# TODO THIS WON'T WORK BECAUSE INPUT TYPE ISNT RECOGNIZE
# Chord(data, names).to_html("../../static/interactiveCharts/chord-diagram-chord-library.html")
```

```python
matrix = [
    [0, 5, 6, 4, 7, 4],
    [5, 0, 5, 4, 6, 5],
    [6, 5, 0, 4, 5, 5],
    [4, 4, 4, 0, 5, 5],
    [7, 6, 5, 5, 0, 4],
    [4, 5, 5, 5, 4, 0],
]


names = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Thriller"]

matrix
```

:::output
```text
[[0, 5, 6, 4, 7, 4],
 [5, 0, 5, 4, 6, 5],
 [6, 5, 0, 4, 5, 5],
 [4, 4, 4, 0, 5, 5],
 [7, 6, 5, 5, 0, 4],
 [4, 5, 5, 5, 4, 0]]
```
:::

```python
Chord(matrix, names).to_html("../../static/interactiveCharts/chord-diagram-chord-library.html")
```

```python
%%html
<iframe src="../../interactiveCharts/chord-diagram-chord-library.html" width="800" height="600" title="Chord diagram with the chord library" style="border:none"></iframe>
```

:::output
::output-html{src="./output-1.html"}
:::
