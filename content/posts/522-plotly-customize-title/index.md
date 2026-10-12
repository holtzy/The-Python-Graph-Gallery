---
title: "How to customize titles on a Plotly chart"
description: "This post explains how to control the title appearance on a <a href='https://python-graph-gallery.com/plotly'>plotly</a> chart.<br/>Changing the title appearance is made possible thanks to the <b>fig.update_layout()</b> function. This post provides everything you need to know about this function to control your title look and feel."
seoDescription: "Learn how to control the appearance of the title on a chart made with Python and Plotly library."
keywords: "python, chart, plotly, plot, express, graph-objects, interactive, title, custom"
family: "general"
chartType: "plotly"
slug: "522-plotly-customize-title"
---

## Data and Library

Let's create a dummy dataset and load the `graph objects` API of the python `plotly` library.

If you are not familiar with plotly and its APIs yet, please take a look at the [introduction to plotly](https://python-graph-gallery.com/plotly) first.

```python
# Load plotly
import plotly.graph_objects as go

# Sample data
x_values = [1, 2, 3, 4, 5]
y_values = [2.2, 13.3, 4.4, 55.3, 52.1]
```

## Default title

It is possible to add a title to a `plotly` chart thanks to the `fig.update_layout()` function that has a `title` argument.

This is how the title looks like by default:

```python
fig = go.Figure()

fig.add_trace(go.Scatter(
    x=x_values, # x-axis
    y=y_values, # y-axis
    mode='lines', # Connect data points with lines
    name='Line' # Name in the legend
))

fig.update_layout(
    title = "Evolution of X"
)
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/plotly-customize-title-1.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/plotly-customize-title-1.html" 
    width="800" 
    height="600" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Title customization

Customizing titles in `Plotly` graph objects **is a straightforward way** to enhance the visual appeal and clarity of your data visualizations. 

With Plotly, you have the flexibility to modify various aspects of the title, such as its `text`, `font`, `color`, `alignment`, and `positioning`. 

Here's a brief guide on how to customize titles using Plotly graph objects:

```python

fig = go.Figure()

fig.add_trace(go.Scatter(
    x=x_values, # x-axis
    y=y_values, # y-axis
    mode='lines', # Connect data points with lines
    name='Line' # Name in the legend
))

# Add and change title style
fig.update_layout(
    title='Custom Title',
    title_font=dict(size=14,
                    color='blue',
                    family='Arial'),
    title_x=0.11,  # Title aligned with grid
    title_y=0.83,  # Title positioned near the top vertically
)
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/plotly-customize-title-2.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/plotly-customize-title-2.html" 
    width="500" 
    height="500" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::
