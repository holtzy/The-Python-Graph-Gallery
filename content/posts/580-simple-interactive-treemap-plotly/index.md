---
title: "Basic Interactive Treemap with Plotly"
description: "This post shows how to plot a <b>basic treemap</b> using the <a href='/plotly'>plotly</a> library in python.<br><br>The first example uses the <code>plotly.express</code> module and the second example uses the <code>plotly.graph_objects</code> module."
seoDescription: "How to plot a basic interactive treemap in python with plotly"
keywords: "python, chart, plot, treemap, plotly, interactive"
family: "partOfAWhole"
chartType: "treemap"
slug: "580-simple-interactive-treemap-plotly"
---

## Plotly Express VS Plotly Graph Objects

One of the [plotly](/plotly) particularities is that it offers two different ways to create plots: `plotly.graph_objects` and `plotly.express`. Both of them are high-level interfaces to plotly, but they have different syntaxes and functionalities. You can learn more about [here](/520-the-two-plotly-apis).

- Plotly express has a **simpler syntax** and is more user-friendly
- Plotly graph objects, on the other side offer **more flexibility** and customization

In this post, we will see how to **use both** for [treemaps](/treemap). Let's start by load them (use `pip install plotly` if you don't have it yet):

```python
import plotly.express as px
import plotly.graph_objects as go

# we will use pandas to read the data
import pandas as pd

# create a dataset for the treemaps
df = pd.DataFrame({
    "names": ["Company", "Sales", "Marketing", "Tech", "North Region", "South Region", "SEO", "Advertising", "Development", "Support"],
    "parents": ["", "Company", "Company", "Company", "Sales", "Sales", "Marketing", "Marketing", "Tech", "Tech"]
})
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Plotly Express

```python
fig = px.treemap(
    df,
    names='names',
    parents='parents'
)
fig.update_traces()
fig.update_layout(margin=dict(t=50, l=25, r=25, b=25))
fig.show()
```

Now we save it as an html element in order to render it

```python
# save widget to html
fig.write_html(
    "../../static/interactiveCharts/580-simple-interactive-treemap-plotly-1.html"
)
```

```python
%%html

<iframe
    src="../../interactiveCharts/580-simple-interactive-treemap-plotly-1.html"
    width="800"
    height="600"
    title="most simple treemap"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Plotly Graph Objects

```python
fig = go.Figure(go.Treemap(
    labels=df['names'],
    parents=df['parents']
))
fig.update_layout(margin=dict(t=50, l=25, r=25, b=25))
fig.show()
```

Now we save it as an html element in order to render it

```python
# save widget to html
fig.write_html(
    "../../static/interactiveCharts/580-simple-interactive-treemap-plotly-2.html"
)
```

```python
%%html

<iframe
    src="../../interactiveCharts/580-simple-interactive-treemap-plotly-2.html"
    width="800"
    height="600"
    title="most simple treemap"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

This post explains how to create treemaps with [plotly](/plotly), using both `plotly.express` and `plotly.graph_objects`.

You might be interested in the following posts:

- [Customize treemaps in plotly](/581-custom-treemap-plotly)
