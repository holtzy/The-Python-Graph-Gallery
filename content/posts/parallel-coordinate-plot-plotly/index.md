---
title: "Parallel coordinate chart with Python and Plotly"
description: "This blogpost explains how to build a parallel coordinate chart with <code>Python</code> and <code>Plotly</code>. The result is interactive, you can select an area to highlight the according groups."
seoDescription: "How to draw a ridgeline graph with Plotly"
keywords: "python, chart, plot, plotly, ridgeline"
family: "ranking"
chartType: "parallel"
slug: "parallel-coordinate-plot-plotly"
---

## Most basic parallel coordinate chart with `plotly`

`Plotly` is an awesome python library sending the power of Javascript to Python. Javascript is the language used in browser to make a webpage interactive.

Fortunately, `plotly` provides a `parallel_coordinates()` function that can be used as follow to build this chart type:

```python
# Import the library
import plotly.express as px

# Load the iris dataset provided by the library
df = px.data.iris()

# Create the chart:
fig = px.parallel_coordinates(
    df, 
    color="species_id", 
    labels={"species_id": "Species","sepal_width": "Sepal Width", "sepal_length": "Sepal Length", "petal_width": "Petal Width", "petal_length": "Petal Length", },
    color_continuous_scale=px.colors.diverging.Tealrose,
    color_continuous_midpoint=2)

# Hide the color scale that is useless in this case
fig.update_layout(coloraxis_showscale=False)

# Show the plot
fig.show()
```

Note that you can save this chart to a standalone file thanks to the `write.html()` function. It is then possible to render it in any `html` document using an `<iframe>`

```python
# If you need to save this file as a standalone html file:
fig.write_html("../../static/interactiveCharts/parallel-coordinate-plot-plotly.html")
```

```python
%%html
<iframe src="../../interactiveCharts/parallel-coordinate-plot-plotly.html" width="800" height="600" title="parallel coordinate chart with plotly" style="border:none"></iframe>
```

:::output
::output-html{src="./output-1.html"}
:::
