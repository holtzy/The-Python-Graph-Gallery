---
title: "Interactive scatterplot with Plotly"
description: "This post describes how to create an <b>interactive scatterplot</b> with python using the <a href='https://python-graph-gallery.com/plotly/'>plotly</a> library.<br/>Interactivity on scatterplots is very handy: it allows to <b>zoom on a specific area</b> and have a <b>tooltip</b> for data point description.<br/> This tutorial starts with a simple example and then shows how to add features such as a level of <b>grouping</b> or a <b>trend line</b>."
seoDescription: "A tutorial explaining how to build an interactive scatterplot with plotly using the plotly library"
keywords: "python, chart, scatter, plot, scatterplot, plotly, interactive, trendline"
family: "correlation"
chartType: "scatter"
slug: "511-interactive-scatterplot-with-plotly"
---

## What is a scatter plot?

A [scatter plot](https://python-graph-gallery.com/scatter-plot/) is a simple yet powerful way to visually represent **data relationships** by displaying points on a graph.

Imagine a coordinate system, where the horizontal `(x) axis` represents one variable, and the `vertical (y)` axis represents another. Each data point corresponds to a specific observation and is represented by its coordinates on the graph. By looking at the distribution of points, we can easily **identify patterns or trends**, such as correlations, clusters, or outliers.

Essentially, a [scatter plot](https://python-graph-gallery.com/scatter-plot/) allows us to see **how two variables might be related** or influenced by each other, making it a valuable tool for understanding data and drawing insights in a visual and intuitive manner.

## Libraries

[Plotly](https://python-graph-gallery.com/plotly/) is a library designed for **interactive visualization** with python. 

If you want to use plotly, you can either use the `plotly.express` module (`px`) or the `plotly.graph_objects` module (`go`). The main difference between these modules is the *"level"*: the `px` module is easier to use (*high level*), but if you want to do something **very specific and need flexibility**, I recommend you use the `go` module (*lower level*).

Don't forget to install [plotly](https://python-graph-gallery.com/plotly/) with the `pip install plotly` command.

In our case, we'll use the `go` module (or `graph_objects`). We will also use `numpy` and `pandas` to **generate data** and put it into a dataframe.

```python
# Libraries
import plotly.graph_objects as go
import pandas as pd
import numpy as np
```

## Dataset

Since scatterplots are intended to represent 2 continuous variables, let's generate a sample of 200 randomly distributed observations using numpy and its functions `random.normal()` and `random.uniform()`.

```python
# Generate a sample of 100 observations
sample_size = 200
x = np.random.uniform(30, 20, sample_size)
y = x * 10 + np.random.normal(0, 10, sample_size)

# Put the data into a pandas df
df = pd.DataFrame({'x': x,
                   'y': y})
```

## Basic scatter plot

The following code displays a simple scatter plot, with a title and an axis name, thanks to the `Scatter()` function.

The `fig.add_trace(go.Scatter([...]` line tells the program to **add a new trace** (data series) to a figure (`fig`) that we initiated just before. In this case, the trace is a [scatter plot](https://python-graph-gallery.com/scatter-plot/).

```python
# Create the figure (for the moment: a blank graph)
fig = go.Figure()

# Add the scatter trace
fig.add_trace(go.Scatter( 
    x=df['x'], # Variable in the x-axis
    y=df['y'], # Variable in the y-axis
    mode='markers', # This explicitly states that we want our observations to be represented by points
    
    # Properties associated with points 
    marker=dict(
        size=12, # Size
        color='#cb1dd1', # Color
        opacity=0.8, # Point transparency 
        line=dict(width=1, color='black') # Properties of the edges
    ),
))

# Customize the layout
fig.update_layout(
    title='Interactive Scatter Plot', # Title
    xaxis_title='First Variable', # x-axis name
    yaxis_title='Second Variable', # y-axis name
    width=800,  # Set the width of the figure to 800 pixels
    height=600,  # Set the height of the figure to 600 pixels
)
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/scatterplot-plotly-basic.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/scatterplot-plotly-basic.html" 
    width="800" 
    height="600" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

That's it, a first interactive scatterplot! 🔥 Try to hover markers, zoom on a specific area to understand the full potential of this chart.

## Add a grouping variable

If you want to **display a grouping variable** on a [scatter plot](https://python-graph-gallery.com/scatter-plot/), you can *change the color* of the points according to the labels of the categorical variable. 

To do this with [plotly](https://python-graph-gallery.com/plotly/), we'll need to define the colors we want for each label and then **iterate over each label** to add the associated points. 

We need to **create and add a categorical variable** to our initial data set. To do this, we use a **comprehension list** which will assign the value `'Group1'` to observations with a value less than 25 for the `first_variable`, `'Group2'` otherwise:

```python
# Generate a sample of 100 observations
sample_size = 200
first_variable = np.random.uniform(30, 20, sample_size)
second_variable = first_variable * 10 + np.random.normal(0, 10, sample_size)
categorical_variable = ['Group1' if i < 25 else 'Group2' for i in first_variable]

# Put the data into a pandas df
df = pd.DataFrame({'first_variable': first_variable,
                   'second_variable': second_variable,
                   'categorical_variable': categorical_variable,})
```

Now, let's create a scatterplot using the `group` variable to color the markers:

```python
# Create a dictionary to map categories to colors
category_colors = {
    'Group1': 'orange',
    'Group2': 'purple'
}

# Create the scatter plot (for the moment: a blank graph)
fig = go.Figure()

# Add the scatter trace with color based on the category_variable
for category, color in category_colors.items():
    category_data = df[df['categorical_variable'] == category]
    fig.add_trace(go.Scatter(
        x=category_data['first_variable'], # Variable in the x-axis
        y=category_data['second_variable'], # Variable in the y-axis
        mode='markers', # This explicitly states that we want our observations to be represented by points
        name=category,
        
        # Properties associated with points 
        marker=dict(
            size=12,
            color=color,
            opacity=0.7,
            line=dict(width=2, color='black') # Properties of the edges
        ),
    ))

# Customize the layout and change the figure size
fig.update_layout(
    title='Interactive Scatter Plot with a Categorical Variable', # Title
    xaxis_title='First Variable', # x-axis name
    yaxis_title='Second Variable', # y-axis name
    width=800,  # Set the width of the figure to 800 pixels
    height=600  # Set the height of the figure to 600 pixels
)
```

Save in HTML and display:

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/scatterplot-plotly-grouping.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/scatterplot-plotly-grouping.html" 
    width="800" 
    height="600" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Add a trendline (linear or polynomial)

Adding a trendline to a [scatter plot](https://python-graph-gallery.com/scatter-plot/) serves the purpose of visually representing the **overall trend or pattern** in the data. It helps in understanding the general **relationship** between two variables and provides insights into how they might be related.

For this purpose, we've created a function `fit_trendline()` to **fit a relationship** between 2 quantitative variables, for a **given degree**. A degree of 1 is equivalent to fit a **linear** relationship. 

Once the data has been fitted, simply **add the line** to the graph and define a few styling parameters.

```python
# Function to fit linear or polynomial trendline
def fit_trendline(x, y, degree):
    coeffs = np.polyfit(x, y, degree)
    return np.polyval(coeffs, x)

# Create a dictionary to map categories to colors
category_colors = {
    'Group1': 'orange',
    'Group2': 'purple'
}

# Create the scatter plot (for the moment: a blank graph)
fig = go.Figure()

# Add the scatter trace with color based on the category_variable
for category, color in category_colors.items():
    category_data = df[df['categorical_variable'] == category]
    fig.add_trace(go.Scatter(
        x=category_data['first_variable'], # Variable in the x-axis
        y=category_data['second_variable'], # Variable in the y-axis
        mode='markers', # This explicitly states that we want our observations to be represented by points
        name=category,
        
        # Properties associated with points 
        marker=dict(
            size=12,
            color=color,
            opacity=0.7,
            line=dict(width=2, color='black') # Properties of the edges
        ),
    ))

# Fit the data with our function
trendline_y = fit_trendline(df['first_variable'], df['second_variable'], degree=1)
    
fig.add_trace(go.Scatter(
    x=df['first_variable'],
    y=trendline_y,
    mode='lines',
    line=dict(color='black', dash='solid', width=3), # Dash the line to distinguish trendlines
    showlegend=False  # Remove trendline from the legend
))

# Customize the layout and change the figure size
fig.update_layout(
    title='Interactive Scatter Plot with a Categorical Variable', # Title
    xaxis_title='First Variable', # x-axis name
    yaxis_title='Second Variable', # y-axis name
    width=800,  # Set the width of the figure to 800 pixels
    height=600  # Set the height of the figure to 600 pixels
)
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/scatterplot-plotly-trendline.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/scatterplot-plotly-trendline.html" 
    width="800" 
    height="600" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

This article explains how to create an interactive scatter plot with [plotly](https://python-graph-gallery.com/plotly/) with various customization features, such as adding a categorical variable or a trendline.

For more examples of **how to create or customize** your scatter plots with Python, see the [scatter plot section](https://python-graph-gallery.com/scatter-plot/). You may also be interested in creating a [scatter plot with marginal distribution](https://python-graph-gallery.com/82-marginal-plot-with-seaborn/).
