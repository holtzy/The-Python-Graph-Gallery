---
title: "Add annotation on a plotly chart"
description: "This post explains how to add annotations on an interactive chart made with <a href='https://python-graph-gallery.com/plotly'>plotly</a>.<br/>Everything relies on the <code>add_annotation()</code> function that provides numerous options for annotations.<br/>The post shows several examples on how this function can be used to add text, arrows, rectangles, circles and more."
seoDescription: "Learn how to add annotations on an interactive chart made with Python and Plotly."
keywords: "python, chart, plotly, plot, express, graph-objects, interactive, annotation"
family: "general"
chartType: "plotly"
slug: "523-plotly-add-annotation"
---

## Library and Data

Let's create a dummy dataset and load the `graph objects` API of the python `plotly` library.

If you are not familiar with plotly and its APIs yet, please take a look at the [introduction to plotly](https://python-graph-gallery.com/plotly) first.

We will add annotations to a simple <a href="https://python-graph-gallery.com/scatter-plot">scatterplot</a>. So we basically need a set of 2 numeric variables to build it:

```python
# Load plotly
import plotly.graph_objects as go

# Sample data
x = [1.5, 2.9, 3, 4.2, 5.6]
y = [2.2, 13.3, 4.4, 55.3, 52.1]
```

## Basic scatterplot

If you are not sure how to build a scatterplot with plotly, please take a look at the [dedicated scatterplot tutorial](https://python-graph-gallery.com/scatter-plot).

Basically, everything relies on the `go.Scatter()` function that must be used with the `markers` mode as follow:

```python
# Create the figure (for the moment: a blank graph)
fig = go.Figure()

# Add the scatter trace
fig.add_trace(go.Scatter( 
    x=x, # Variable in the x-axis
    y=y, # Variable in the y-axis
    mode='markers', # This explicitly states that we want our observations to be represented by points
    
    # Properties associated with points 
    marker=dict(
        size=12, # Size
        color='#cb1dd1', # Color
        opacity=0.8, # Point transparency 
    ),
))
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/plotly-add-annotation-0.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/plotly-add-annotation-0.html" 
    width="100%" 
    height="500" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Add simple annotations

Annotation is a key part of a **great visualization**. 

It transforms a simple chart in a whole **piece of story telling**. Before you share your graph with anyone, make sure the key insight are highlighted with `labels`, `shapes` or `color`.

With plotly, we will mainly need to use the `add_annotation()` function. Let's say we want to highlight the 4th data point on the previous scatterplot:

```python
# Add annotation to a specific point
fig.add_annotation(
    x=4.2, y=55.3, # position
    text="Annotated Point", # text
    #showarrow=True,
    arrowhead=2,
    arrowsize=1,
    arrowwidth=2,
    arrowcolor="red"
)
```

Save and embed the chart:

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/plotly-add-annotation-1.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/plotly-add-annotation-1.html" 
    width="100%" 
    height="500" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Add complex annotations

You can add **more complex** annotations to your [plotly](https://python-graph-gallery.com/plotly/) graphs, with boxes, lines and more. 

The great thing about these annotations is that you can add **HTML**, allowing you to change the style of the text or **add emojis**, for example!

Here's what we'll be using in our case:
- **add hyperlink** to the gallery with this `<a href='https://python-graph-gallery.com'> Click here! </a>` as a text
- **add a dashed line** thanks to the `dash=dot` argument in the `add_shape()` function
- **add a rectangle** thanks to `type='rect'` argument in the `add_shape()` function
- **add an emoji** with the HTML code `<span style='font-size:60px;'>&#9748;</span>` as a text. It will display an emoji of an umbrella.

```python
# Create the figure (for the moment: a blank graph)
fig = go.Figure()

# Add the scatter trace
fig.add_trace(go.Scatter( 
    x=x, # Variable in the x-axis
    y=y, # Variable in the y-axis
    mode='markers', # This explicitly states that we want our observations to be represented by points
    
    # Properties associated with points 
    marker=dict(
        size=12, # Size
        color='#cb1dd1', # Color
        opacity=0.8, # Point transparency 
    ),
))

# Add the text annotation
fig.add_annotation(
    x=2.2, y=40,
    xref="x", yref="y",
    text="<a href='https://python-graph-gallery.com'>Click here!</a>",
    showarrow=False,
    font=dict(size=14, color="blue"),
    align="center",
    bgcolor="rgba(255, 255, 0, 0.5)",
)

# Add a purple dashed line
fig.add_shape(
    type="line",
    x0=3.3, y0=0, # start position
    x1=3.5, y1=60,  # end position
    line=dict(
        color="purple",
        width=2,
        dash="dot",  # Make the line dashed
    )
)

# Add a gray and lightblue rectangle
fig.add_shape(
    type="rect",
    x0=3.5, y0=10, x1=4.2, y1=30,  # Define the coordinates of the rectangle's corners
    line=dict(
        color="gray",
        width=2,
    ),
    fillcolor="lightblue",  # Set the color to fill the rectangle
)

# Add additional text
fig.add_annotation(
    x=3.9, y=17,
    xref="x", yref="y",  # Reference system for text's x and y coordinates
    text="Funny text<br>inside the box",
    showarrow=False # Hide arrow 
)

# Add text with bold and italic
text = "<b>Embrace</b> <i>the</i><br>Playful Side<br><i>of</i> <b>emojis</b>:"
fig.add_annotation(
    x=5, y=35, # Text annotation position
    xref="x", yref="y", # Coordinate reference system
    text=text, # Text content
    showarrow=False # Hide arrow 
)

# Add an emoji (umbrela)
size = '60'
emoji = '&#9748'
text = f"<span style='font-size:{size}px;'>{emoji};</span>"
fig.add_annotation(
    x=5, y=15, # Text annotation position
    xref="x", yref="y", # Coordinate reference system
    text=text, # Text content
    showarrow=False # Hide arrow 
)
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/plotly-add-annotation-2.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/plotly-add-annotation-2.html" 
    width="100%" 
    height="500" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::
