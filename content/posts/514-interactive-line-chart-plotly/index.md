---
title: "Line chart with Plotly"
description: "This post describes how to create a <b>line chart</b> using <a href='https://python-graph-gallery.com/plotly/'>Plotly</a>. You'll see how to change the <b>chart style</b> and display <b>several lines</b> at once. More info in the <a href='https://python-graph-gallery.com/line-chart/'>line chart section</a>."
seoDescription: "Plotting basic line chart using Plotly, for one or more variables, with different customisation features."
keywords: "python, chart, line, plot, linechart, plotly"
family: "evolution"
chartType: "line"
slug: "514-interactive-line-chart-plotly"
---

## About line chart

A [line chart](https://python-graph-gallery.com/line-chart/), also known as a line graph, is a type of data **visualization** that displays information as a series of data points connected by **straight line segments**. It is commonly used to show the **trend** or **pattern** of data over a continuous interval, such as time.

## Libraries

[Plotly](https://python-graph-gallery.com/plotly/) is a library designed for **interactive visualization** with python. If you want to use plotly, you can either use the `plotly.express` module (`px`) or the `plotly.graph_objects` module (`go`). The main difference between these modules is the _"level"_: the `px` module is easier to use (_high level_), but if you want to do something **very specific and need flexibility**, I recommend you use the `go` module (_lower level_).

Don't forget to install [plotly](https://python-graph-gallery.com/plotly/) with the `pip install plotly` command.

In our case, we'll use the `go` module (or `graph_objects`). We will also use `numpy` and `pandas` to **generate data** and put it into a dataframe.

- [plotlty](https://python-graph-gallery.com/seaborn/) is used for creating the chart witht the `Scatter()` function
- `numpy` is used to generate some data
- `pandas` is used to put the data into a dataframe

```python
# Libraries
import plotly.graph_objects as go
import numpy as np
import pandas as pd
```

## Dataset

[Line chart](https://python-graph-gallery.com/line-chart/) are generally used to represent **variations over time**, but they don't have to be. For example, you can look at [connected scatter plots](https://python-graph-gallery.com/connected-scatter-plot/).

In our case, however, we need to generate dates. To do this, we will simply use a `for` loop and generate annual data, _from 1990 to 2022_.

Then we generate a **random walk** (which is just a variable that has a _0.5_ chance of going up (+1) and a _0.5_ chance of going down (-1), and calculate the **cumulative amount**). (We're doing this **three times** because we'll be displaying several variables in a single graph at the end).

```python
# Init an empty list that will stores the dates
dates = []

# Iterates over our range and add the value to the list
start = 1990
end = 2022
for date in range(start, end):
    dates.append(str(date))

# Generate random steps (+1 or -1) with equal probabilities
random_steps = np.random.choice([-1, 1], size=end-start, p=[0.5, 0.5])
# Calculate the cumulative sum
random_walk1 = np.cumsum(random_steps)

random_steps = np.random.choice([-1, 1], size=end-start, p=[0.5, 0.5])
random_walk2 = np.cumsum(random_steps)

random_steps = np.random.choice([-1, 1], size=end-start, p=[0.5, 0.5])
random_walk3 = np.cumsum(random_steps)

df = pd.DataFrame({'date': dates,
                   'value1': random_walk1,
                   'value2': random_walk2,
                   'value3': random_walk3, })
```

## Basic line chart

The following code displays a simple line chart built wiht [Plotly](https://python-graph-gallery.com/plotly/), with a title and an axis name, thanks to the `Scatter()` function.

```python
# Create a line chart using Plotly graph objects
fig = go.Figure()

fig.add_trace(go.Scatter(
    x=df['date'],  # x-axis
    y=df['value1'],  # y-axis
    mode='lines',  # Connect data points with lines
    name='Line'  # Name in the legend
))

# Layout parameters
fig.update_layout(
    title='Line Chart Example',  # Title
    xaxis_title='X Axis Label',  # y-axis name
    yaxis_title='Y Axis Label',  # x-axis name
    xaxis_tickangle=45,  # Set the x-axis label angle
    showlegend=True,     # Display the legend
)
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/linechart-plotly-basic.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/linechart-plotly-basic.html" 
    width="800" 
    height="600" 
    title="scatterplot with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Add customization features

In this section, we will see how to add some different **customization features** that will make the [line chart](https://python-graph-gallery.com/line-chart/) more aesthetic.

- **add markers**: we change the `mode` argument from `'lines'` to `'lines+markers'`
- **specify markers style**: the `symbol` (must be in the following list: `'circle'`, `'square'`, `'diamond'`, `'cross'`, `'x'`, `'star'`), the `size` and the `color`.
- **specify line style**: the `color` and the `width`

```python
# Create a line chart using Plotly graph objects
fig = go.Figure()

fig.add_trace(go.Scatter(
    x=df['date'],  # x-axis
    y=df['value1'],  # y-axis
    mode='lines+markers',  # Connect data points with lines and add markers
    name='Line',  # Name in the legend

    marker=dict(
        symbol='circle',    # Change the marker symbol to a circle
        size=10,            # Set the marker size
        color='#cb1dd1'),       # Set the marker color

    line=dict(
        color='#dea4e0',        # Change the line color to red
        width=2,                # Set the line width
    )
))

# Layout parameters
fig.update_layout(
    title='Customized Line Chart',  # Title
    xaxis_title='X Axis Label',  # y-axis name
    yaxis_title='Y Axis Label',  # x-axis name
    xaxis_tickangle=45,  # Set the x-axis label angle
    showlegend=True,     # Display the legend
    plot_bgcolor='white',  # Set the plot background color
    # Set the paper (outside plot area) background color
    paper_bgcolor='lightgray',
)
```

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/linechart-plotly-custom.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/linechart-plotly-custom.html" 
    width="800" 
    height="600" 
    title="line chart with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Line chart with mutliple variables

It's quite common to want to have **several lines in a single graph**. In practice, all you need to do is write the `add_trace()` with `go.Scatter()` function code several times (**one for each variable**).

This allows us to **easily specify** the parameters of each variable and ensure that the graph has a very **precise style**.

```python
# Create a line chart using Plotly graph objects
fig = go.Figure()

# Variable 1
fig.add_trace(go.Scatter(
    x=df['date'],  # x-axis
    y=df['value1'],  # y-axis
    mode='lines+markers',  # Connect data points with lines and add markers
    name='Line1',  # Name in the legend

    marker=dict(
        symbol='square',    # Change the marker symbol to a circle
        size=10,            # Set the marker size
        color='red'),       # Set the marker color

    line=dict(
        color='blue',        # Change the line color to red
        width=5)             # Set the line width
))

# Variable 2
fig.add_trace(go.Scatter(
    x=df['date'],  # x-axis
    y=df['value2'],  # y-axis
    mode='lines+markers',  # Connect data points with lines and add markers
    name='Line2',  # Name in the legend

    marker=dict(
        symbol='circle',    # Change the marker symbol to a circle
        size=7,            # Set the marker size
        color='purple'),       # Set the marker color

    line=dict(
        color='orange',        # Change the line color to red
        width=8)             # Set the line width
))

# Variable 3
fig.add_trace(go.Scatter(
    x=df['date'],  # x-axis
    y=df['value3'],  # y-axis
    mode='lines+markers',  # Connect data points with lines and add markers
    name='Line3',  # Name in the legend

    marker=dict(
        symbol='diamond',    # Change the marker symbol to a circle
        size=15,            # Set the marker size
        color='yellow'),       # Set the marker color

    line=dict(
        color='green',        # Change the line color to red
        width=4)             # Set the line width
))

# Layout parameters
fig.update_layout(
    title='Customized Line Chart',  # Title
    xaxis_title='X Axis Label',  # y-axis name
    yaxis_title='Y Axis Label',  # x-axis name
    xaxis_tickangle=45,  # Set the x-axis label angle
    showlegend=True,     # Display the legend
    plot_bgcolor='white',  # Set the plot background color
    # Set the paper (outside plot area) background color
    paper_bgcolor='lightblue',
)
```

```python
# save this file as a standalong html file:
fig.write_html(
    "../../static/interactiveCharts/linechart-plotly-multigroup.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/linechart-plotly-multigroup.html" 
    width="800" 
    height="600" 
    title="line chart with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

This article explains how to create a basic line chart with [Plotly](https://python-graph-gallery.com/plotly/) with various customization features, such as **changing color**, overall **style** or display **multiple lines**.

For more examples of **how to create or customize** your line charts with Python, see the [line chart section](https://python-graph-gallery.com/line-chart/). You may also be interested in creating an [area chart](https://python-graph-gallery.com/area-plot/).
