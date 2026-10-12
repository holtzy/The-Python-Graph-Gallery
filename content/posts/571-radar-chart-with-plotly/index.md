---
title: "Radar chart with Plotly"
description: "<a href='https://python-graph-gallery.com/radar-chart/'> Radar or Spider chart</a> are a kind of graph that is used to <b>compare values of different groups</b>. Even though they are <a href='https://www.data-to-viz.com/caveat/spider.html'>criticized</a>, an interactive version of it can be interesting to explore data.<br><br>This post explains how to create a <b>radar chart</b> with <a href='https://python-graph-gallery.com/plotly/'>plotly</a>."
seoDescription: "How to create a radar chart with plotly using plotly express and plotly graph objects in Python. Examples of radar charts with multiple traces."
keywords: "radar, plotly, interactive, spider, chart, python, matplotlib"
family: "ranking"
chartType: "radar"
slug: "571-radar-chart-with-plotly"
---

## Libraries

For creating this chart, we will need to load the following libraries:

- [pandas](https://python-graph-gallery.com) for data manipulation
- [plotly](https://python-graph-gallery.com/plotly/) for the interactive chart

We will see how to do with **both** `plotly express` and `plotly graph objects`.

```python
import pandas as pd
import plotly.graph_objects as go
import plotly.express as px
```

## Dataset

For this post, we'll create a simple dataset with 2 columns: `name` and `value`:

```python
data = {
    'name': ['John', 'Anna', 'Peter', 'Linda'],
    'value': [10, 20, 15, 25]
}
df = pd.DataFrame(data)
```

## Plotly express

With `plotly express`, it is **very easy** to create a [radar chart](https://python-graph-gallery.com/radar-chart/).

You just need to call the `px.line_polar()` function. Then we specify the `r` (**value**) and `theta` (**label**) parameters.

```python
fig = px.line_polar(df, r='value', theta='name', line_close=True)
fig.update_traces(fill='toself')
fig.show()

fig.write_html("../../static/interactiveCharts/radarchart-plotly-express.html")
```

Let's see the results:

```python
%%html
<iframe 
    src="../../interactiveCharts/radarchart-plotly-express.html" 
    width="800" 
    height="600" 
    title="Radar chart with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Plotly graph objects

With `plotly graph objects`, it is a bit **more complex** to create a radar chart. But it is also **more flexible**.

We use the `add_trace()` function to add a trace to the figure. We specify the `r` (**value**) and `theta` (**label**) parameters.

```python
fig = go.Figure()
fig.add_trace(
    go.Scatterpolar(
        r=df['value'],
        theta=df['name'],
        fill='toself'
    )
)
fig.show()

fig.write_html("../../static/interactiveCharts/radarchart-plotly-object.html")
```

Let's see the results:

```python
%%html
<iframe 
    src="../../interactiveCharts/radarchart-plotly-object.html" 
    width="800" 
    height="600" 
    title="Radar chart with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Multiple radar charts

For displaying **multiple radar charts**, on the same figure, we just have to **add multiple traces** to the figure.

```python
df['new_value'] = [20, 10, 25, 15]

fig = go.Figure()

fig.add_trace(
    go.Scatterpolar(
        r=df['value'],
        theta=df['name'],
        fill='toself'
    )
)
fig.add_trace(
    go.Scatterpolar(
        r=df['new_value'],
        theta=df['name'],
        fill='toself'
    )
)

fig.show()
fig.write_html("../../static/interactiveCharts/radarchart-plotly-object-2.html")
```

Let's see the results:

```python
%%HTML
<iframe
    src="../../interactiveCharts/radarchart-plotly-object-2.html"
    width="800"
    height="600"
    title="Radar chart with plotly"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

This article explains how to create an interactive [radar chart](https://python-graph-gallery.com/radar-chart/) using [plotly](https://python-graph-gallery.com/plotly/).

You might want to check how to create [barplot with plotly](https://python-graph-gallery.com/520-interactive-barplot-with-plotly/) and [scatterplot with plotly](https://python-graph-gallery.com/511-interactive-scatterplot-with-plotly/).
