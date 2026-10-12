---
title: "Introduction to the great_tables library in Python"
description: "This post delves into the fundamental aspects of the <code>great_tables</code> library in Python. It provides a detailed explanation on creating tables using the <code>great_tables</code> library.<br/><br/>Additionally, it demonstrates how to add a <b>title</b>, a <b>subtitle</b>, and <b>source</b> notes to your table. It also guides you on how to format the text using <b>markdown</b>.<br/><br/>For a more advanced use case, check <a href='/586-customization-great-tables'>how to customize tables using great_tables</a>."
seoDescription: "Learn how to use the great_tables library in Python to create beautiful tables. This tutorial covers the basics of the great_tables library and how to create a table in Python."
keywords: "table, python, great_tables, plot, graph, matplotlib"
family: "ranking"
chartType: "table"
slug: "585-introduction-great-tables"
---

## About `great_tables`

The `great_tables` package in Python is designed to help users create visually appealing and highly customizable tables with ease. By leveraging cohesive table components like **headers**, **footers**, and **formatted cells**, it transforms data from Pandas or Polars DataFrames into elegant tables.

The package emphasizes simplicity for everyday needs while offering **advanced customization** options when required. Ideal for displaying data in various formats, `great_tables` is perfect for both **console outputs** and **notebook** environments, making it a versatile tool for data presentation.

It's quite similar, and its syntax resembles that of the [`gt` package in R](https://r-graph-gallery.com/package/gt.html).

## Libraries & Dataset

For creating this chart, we will only need to load `great_tables`!

You can install it via the `pip install great_tables` command.

Also, since `great_tables` provides a few datasets, we're going to use them directly.

```python
from great_tables import GT, md

# load dataset about pizza
from great_tables.data import pizzaplace as df
df = df[['name', 'size', 'type', 'price']].tail()
df.index = range(5)
df
```

:::output
::output-html{src="./output-1.html"}
:::

## Most basic table with `great_tables`

The `great_tables` package offers a `GT()` function to create a specialized object, which enhances the functionality of our table.

To utilize it with our dataframe, follow these steps:

```python
my_table = GT(df)
my_table
```

:::output
::output-html{src="./output-2.html"}
:::

## Title and suptitle

The simplest way to add a **title** and **subtitle** is by using the `tab_header()` method from the `GT` object.

This function accepts `title` and `subtitle` arguments, producing an output that appears like this:

_Note that the parenthesis around the code are only here to make the code easier to read. Without it, we would not be able to jump row when calling the `tab_header()`_

```python
my_table = (
   GT(df)
   .tab_header(
      title="Pizza 🍕",
      subtitle="A list of pizza available in the Pyzza Graph Gallery",
   )
)
my_table
```

:::output
::output-html{src="./output-3.html"}
:::

## Footer

To add a footer, we need to use the `tab_source_note()` function.

We can wrap our text with the `md()` function to include markdown formatting such as **bold**, `code-like`, and _italic_ styles.

```python
my_table = (
   GT(df)
   .tab_header(
      title="🍕 Pizza 🍕",
      subtitle="A list of pizza available in the Pyzza Graph Gallery",
   )
   .tab_source_note(md("**Data source**: the `great_tables` python library"))
   .tab_source_note(md("**Tutorial**: the *Python Graph Gallery*"))
)
my_table
```

:::output
::output-html{src="./output-4.html"}
:::

## Going further

This article explains how to use the `great_tables` library in Python.

You might be interested in:

- [advanced use cases](/586-customization-great-tables) using `great_tables`
- the [table section of the gallery](https://python-graph-gallery.com/table/) to learn everything about tables in python
