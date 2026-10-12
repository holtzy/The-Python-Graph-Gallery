---
title: "Introduction to table with Pandas"
description: "<b>Creating elegant tables</b> with the <a href='https://python-graph-gallery.com/pandas/'>Pandas</a> library in Python is a useful way to organize and display <b>structured data</b>. <a href='https://python-graph-gallery.com/pandas/'>Pandas</a> tables allow you to present information in a neat and organized format, making it easy to analyze and understand various datasets.<br>  You can use Pandas to create tables that display data such as <b>numerical values, text, and categorical</b> information. These tables can be <b>customized and styled</b> to enhance their visual appeal, making them a versatile tool for <i>data presentation and analysis</i>."
seoDescription: "How to custom a table with pandas"
keywords: "table, pandas, customization, styler"
family: "general"
chartType: "table"
slug: "550-intro-table-with-pandas"
---

## Libraries

First, you need to install the following librairies:
- [matplotlib](https://python-graph-gallery.com/matplotlib/) is used for plot creating the charts
- [pandas](https://python-graph-gallery.com/pandas/) is used to put the data into a dataframe and custom the table
- `numpy` is used to generate some data

For some reasons, we need to use an older pandas version (1.5.3) than the lastest available. It means we have to run `pip install pandas==1.5.3` in the terminal before.

```python
import pandas as pd
import matplotlib as mpl

# data generation
import numpy as np
```

## Dataset

When creating **nice output tables**, we first need to have the dataframe with the values we want. 

In this post, we'll use *fake weather data* from different cities. We'll take a look at different simple features of [pandas](https://python-graph-gallery.com/pandas/)  to make this table more **aesthetically appealing**.

```python
sample_size = 6

new_york = np.random.uniform(20,60,sample_size)
paris = np.random.uniform(20,40,sample_size)
london = np.random.uniform(5,30,sample_size)

df = pd.DataFrame({'new_york': new_york,
                   'paris': paris,
                   'london': london},
                 
                 # generate date values in the index of the dataframe
                 index=pd.date_range(start="2020-01-01", periods=sample_size).strftime("%d-%m-%Y"))
```

## Default output

The default result **isn't very pretty**, but it's from this base that we'll build something more pleasing to the eye.

```python
df
```

:::output
::output-html{src="./output-1.html"}
:::

## Change colors

A clean way to apply modifications to [Pandas](https://python-graph-gallery.com) tables is to create a function that performs the **modifications**, then apply this function to our data frame.

- We use a colormap named *"Reds"*, that will put the **background color** of each cell depending on the value in the cell.

Once the function is defined, we use the `style()` and `pipe()` from [Pandas](https://python-graph-gallery.com) to **apply this function** to the dataframe.

```python
def custom_table(styler):
    styler.background_gradient(cmap="Reds", axis=None)
    
    # center text and increase font size
    styler.applymap(lambda x: 'text-align: center; font-size: 14px;') 
    return styler

df.style.pipe(custom_table)
```

:::output
::output-html{src="./output-2.html"}
:::

Here, for example, it's much easier to see that temperatures in New York are **higher** compared to London.

## Add aggregate metrics

To make our table more meaningful, we can then add **aggregation measures**. To do this, we use pandas' `agg()` and `concat()` functions.

We also add a line to our function to **round off the values** in our table, using the `format()` function.

```python
def custom_table(styler):
    styler.background_gradient(cmap="Blues", axis=None)
    styler.format(precision=2)

    # center text and increase font size
    styler.applymap(lambda x: 'text-align: center; font-size: 14px;') 
    return styler

agg_metrics = df.agg(["mean", "max"])
pd.concat([df, agg_metrics]).style.pipe(custom_table)
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

This post explains how to create a simple custom table with [pandas](https://python-graph-gallery.com/pandas/).

For more examples of **how to create or customize** your tables, see the [table section](https://python-graph-gallery.com/table/). You may also be interested in how to [add HTML and CCS to your table](https://python-graph-gallery.com/5xx-pandas-table-with-html-and-css/).
