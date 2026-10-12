---
title: "Customization of table with the great_tables library in Python"
description: "This post delves more specific usage of the <code>great_tables</code> library in Python. It covers <b>advanced customization</b> of tables using the <code>great_tables</code> library.<br><br>For an introduction to <code>great_tables</code>, check <a href='/585-introduction-great-tables'>this post</a>"
seoDescription: "Learn how to use the great_tables library in Python to create beautiful tables. This tutorial covers advanced customization of tables using the great_tables library."
keywords: "table, python, great_tables, plot, graph, matplotlib"
family: "ranking"
chartType: "table"
slug: "586-customization-great-tables"
---

## Libraries & Dataset

For creating this chart, we will only need to load `great_tables`!

You can install it via the `pip install great_tables` command.

Also, since `great_tables` provides a few datasets, we're going to use them directly.

```python
from great_tables import GT, md, style, loc

# load dataset about pizza
from great_tables.data import pizzaplace as df
df = df[['name', 'size', 'type', 'price']].tail()
df.index = range(5)
df
```

:::output
::output-html{src="./output-1.html"}
:::

## Simple table with `great_tables`

Let's start with a simple table with a header and a footer:

```python
my_table = (
   GT(df)
   .tab_header(
      title="🍕 Pizza 🍕",
      subtitle="A list of pizza available in the Pyzza Graph Gallery",
   )
   .tab_source_note(md("**Data source**: the `great_tables` python library"))
   .tab_source_note(md("**Tutorial**: the *[Python Graph Gallery](https://python-graph-gallery.com)*"))
)
my_table
```

:::output
::output-html{src="./output-2.html"}
:::

## Color some row/column

We can color a specific row/col using the `tab_style()` function. This functions requires 2 arguments:

- `style`: the best way is to use it with the `style` class imported before (with `style.fill()`, `style.text()` and `style.borders()`)
- `locations`: as for `style`, it's better to use it with the `loc` class imported above with `loc.body()`

\_Note that the parenthesis around the code are only here to make the code easier to read. Without it, we would not be able to jump row when calling a `tab\__()` function\*

```python
my_table = (
   GT(df, rowname_col="name")
   .tab_header(
      title="Pizza 🍕",
      subtitle="A list of pizza available in the Pyzza Graph Gallery",
   )
   .tab_source_note(md("**Data source**: the `great_tables` python library"))
   .tab_source_note(md("**Tutorial**: the *Python Graph Gallery*"))
   .tab_style(
      style=style.fill(color="#f0c580"),
      locations=loc.body(columns="price", rows=["mexicana"]),
   )
   .tab_style(
      style=style.fill(color="#c5eceb"),
      locations=loc.body(columns="size", rows=["napolitana"]),
   )
   .tab_style(
      style=style.text(weight='bold', size='20px'),
      locations=loc.body(columns="price", rows=["ckn_alfredo"]),
   )
   .tab_style(
      style=style.borders(sides=["top", "left"], weight='3px', color="red"),
      locations=loc.body(columns="type", rows=[3]),
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

You might be interested in the [table section of the gallery](https://python-graph-gallery.com/table/) to learn everything about tables in python
