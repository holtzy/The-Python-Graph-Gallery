---
title: "Basic Interactive barplot with plotly"
description: "This post shows how to plot a <b>basic barplot</b> using the <a href='/plotly'>plotly</a> library in python.<br><br>The first example uses the <code>plotly.express</code> module and the second example uses the <code>plotly.graph_objects</code> module."
seoDescription: "How to plot a basic interactive barplot in python with plotly"
keywords: "python, chart, plot, barplot, plotly, interactive, bar, express, graph object"
family: "ranking"
chartType: "barplot"
slug: "582-simple-barplot-plotly"
---

## Dataset

For a barplot, we need a dataset with two columns: one for the **categories** and one for the **values**.

Let's create it using `pandas`:

```python
import pandas as pd
data = {
   'category': ['A', 'B', 'C', 'D', 'E'],
   'value': [17, 42, 33, 55, 25]
}

df = pd.DataFrame(data)
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Barplot with plotly express

The chart is made using using the `bar()` function from the `plotly.express` module.

We just have to pass the `df` object, and specify **which column** we want to plot. In this case it's the `category` and the `value` (defined above).

```python
import plotly.express as px
fig = px.bar(
   df,
   x='category',
   y='value'
)
fig.update_traces(marker_color='green')
fig.show()
```

Now we save it as an html element in order to render it

```python
# save widget to html
fig.write_html(
    "../../static/interactiveCharts/582-simple-barplot-plotly-1.html"
)
```

```python
%%html

<iframe
    src="../../interactiveCharts/582-simple-barplot-plotly-1.html"
    width="790"
    height="700"
    title="Barplot with plotly express"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Barplot with plotly graph object

```python
import plotly.graph_objects as go

data = go.Bar(
    x=df['category'],
    y=df['value'],
    marker_color='red'
)
fig = go.Figure()
fig.add_trace(data)
fig.show()
```

Now we save it as an html element in order to render it

```python
# save widget to html
fig.write_html(
    "../../static/interactiveCharts/582-simple-barplot-plotly-2.html"
)
```

```python
%%html

<iframe
    src="../../interactiveCharts/582-simple-barplot-plotly-2.html"
    width="790"
    height="700"
    title="Barplot with plotly graph object"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

You might be interested in:

- creating an [interactive stacked barplot](/583-stacked-barplot-plotly)

- creating an [interactive radar chart](/571-radar-chart-with-plotly)
