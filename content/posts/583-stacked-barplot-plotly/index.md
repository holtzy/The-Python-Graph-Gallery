---
title: "Interactive stacked barplot with plotly"
description: "This post shows how to plot a <b>stacked barplot</b> using the <a href='/plotly'>plotly</a> library in python. In the previous post, we saw how to create a simple <a href='/582-simple-barplot-plotly'>interactive barplot</a>.<br><br>In this post, we will learn how to represent barplot with <b>both categories and sub categories</b>. The first example uses the <code>plotly.express</code> module and the second example uses the <code>plotly.graph_objects</code> module."
seoDescription: "How to plot an interactive stacked barplot in python with plotly"
keywords: "python, chart, plot, barplot, plotly, interactive, bar, express, graph object"
family: "ranking"
chartType: "barplot"
slug: "583-stacked-barplot-plotly"
---

## Dataset

For a barplot, we need a dataset with 3 columns: one for the **main categories**, one for the **sub categories** and one for the **values**.

Let's create it using `pandas`:

```python
import pandas as pd
data = {
    'category': ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    'sub_category': ['X', 'Y', 'X', 'Y', 'X', 'Y', 'X', 'Y', 'X', 'Y'],
    'value': [17, 10, 42, 22, 33, 11, 55, 25, 25, 15]
}

df = pd.DataFrame(data)
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Stacked Barplot with plotly express

The chart is made using using the `bar()` function from the `plotly.express` module.

We just have to pass the `df` object, and specify **which column** we want to plot. In this case it's the `category` and the `value` (defined above).

Then we just need to specify the `color` argument with the `sub_category` column so that **colors map** this column.

```python
import plotly.express as px
fig = px.bar(
   df,
   x='category',
   y='value',
   color='sub_category'
)
fig.show()
```

Now we save it as an html element in order to render it

```python
# save widget to html
fig.write_html(
    "../../static/interactiveCharts/583-stacked-barplot-plotly-1.html"
)
```

```html
%%html

<iframe
    src="../../interactiveCharts/583-stacked-barplot-plotly-1.html"
    width="790"
    height="700"
    title="Stacked Barplot with plotly express"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Barplot with plotly graph object

The plotly graph object API requires a bit more verbose, but nothing very complex here!

We mainly have to **iterate** over each sub categories, filter the dataframe on this sub category, and plot it.

Last but not least, we use the `update_layout()` function with the `barmode='stack'` argument to ensure that bars are **stacked on each others**. Otherwise the default render will put them next to each other (the **default** value is `group`)

```python
import plotly.graph_objects as go

fig = go.Figure()

# Create list of all unique sub categories
sub_categories = df['sub_category'].unique()

# Adding bars for each sub-category
for sub_cat in sub_categories:
    filtered_df = df[df['sub_category'] == sub_cat]
    fig.add_trace(go.Bar(
        x=filtered_df['category'],
        y=filtered_df['value'],
        name=sub_cat
    ))

# Update layout if necessary
fig.update_layout(
    barmode='stack'
)

# Show plot
fig.show()
```

Now we save it as an html element in order to render it

```python
# save widget to html
fig.write_html(
    "../../static/interactiveCharts/583-stacked-barplot-plotly-2.html"
)
```

```html
%%html

<iframe
    src="../../interactiveCharts/583-stacked-barplot-plotly-2.html"
    width="790"
    height="790"
    title="Stacked Barplot with plotly graph object"
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

You might be interested in:

- creating an [interactive radar chart](/571-radar-chart-with-plotly)
