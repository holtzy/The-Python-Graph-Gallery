---
title: "Express and Graph Objects: the 2 plotly APIs"
description: "<a href='https://python-graph-gallery.com/plotly'>Plotly</a> is the best python library for interactive charts.<br/>It comes with 2 distincts APIs: <b>plotly express</b> and <b>plotly graph objects</b>.<br/>This post explains how to build an interactive <a href='https://python-graph-gallery.com/barplot'>barplot</a> using both APIs. It allows to understand their pros and cons and make the right choice for you project."
seoDescription: "Description of the plotly express and plotly graph objects APIs of the plotly library for interactive data visualization."
keywords: "python, chart, plotly, plot, express, graph-objects, interactive, barplot"
family: "general"
chartType: "plotly"
slug: "520-the-two-plotly-apis"
---

## Data and libraries

This post is based on [plotly](https://python-graph-gallery.com/plotly), a python library made for **interactive** data visualization.

This library has 2 distinct APIs: plotly express and plotly graph objects. You can plotly with `pip install plotly` and you'll be ready to use both APIs.

Let's load the 2 APIs and generate a dummy dataset for our barplots:

```python
# import the plotly express library
import plotly.express as px

# import the graph objects API:
import plotly.graph_objects as go

# Some dummy data
categories = ['A', 'B', 'C', 'D', 'E']
values = [15, 22, 18, 12, 28]
```

We can now use `px` and `go` to refer to the 2 types of APIs respectively. Let's build some barplots.

## Plotly Express

Plotly Express is the user-friendly, high-level API. It allows to write very little code to build charts, but also offers less customization.

This is how an interactive barplot can be made with it. It's only 2 lines of code thanks to the `px.bar()` function 😋:

```python
# Create a bar chart using Plotly Express
fig = px.bar(
    x=categories, 
    y=values, 
    title="Simple Bar Chart"
)
```

Basically, the `px.bar()` function is called with 3 arguments:
- `x` is a categorical variable used for the X axis (the groups)
- `y` is the associated numeric variable
- `title` is used to change the title.

Note that the chart could also be based on a `pandas` data frame. We would just have to use the column from it.

Once this is done, you can show the figure with `fig.show()`, or save the figure in `HTML` and embed it in a webpage as follow:

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/barplot-plotly-express.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/barplot-plotly-express.html" 
    width="800" 
    height="400" 
    title="barplot with plotly express" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Plotly Graph Objects

In contrast, the Plotly Graph Objects API presents a **finer level of control** and customization within the Plotly framework. 

It encompasses essential objects like `Figure`, layout, and data, serving as the bedrock for constructing visualizations. The Figure, which can be represented as a dictionary or instances of `plotly.graph_objects.Figure`, undergoes JSON serialization before being handed off to `plotly.js`.

In the following code, compared to the Express API, we need to initiate a figure object (with a slightly **more complex** syntax) using the function `go.Figure` and then change the layout of this figure using the function `fig.update_layout()`.

```python
# Create a bar chart using the Graph Object API
fig = go.Figure(data=[go.Bar(x=categories, y=values)])

# Update layout
fig.update_layout(title="Simple Bar Chart", xaxis_title="Categories", yaxis_title="Values")
```

Save in a html file and embed the chart:

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/barplot-plotly-go.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/barplot-plotly-go.html" 
    width="800" 
    height="400" 
    title="barplot with plotly express" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Conclusion

It is important to understand that the `plotly.express` module leverages `plotly.graph_objects` internally, enabling the **creation of entire Figures in one go**. 

This seamless integration underscores Plotly's versatility, bridging the gap between simplified creation and intricate customization for diverse visualization needs.

Note that the python graph gallery relies mainly on the plotly graph objects API as it is more powerful. You can read more in the [plotly dedicated page](https://python-graph-gallery.com/plotly).
