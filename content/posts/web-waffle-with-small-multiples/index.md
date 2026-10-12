---
title: "Small multiple waffle chart"
description: "We will create a <a href='/waffle-chart'>waffle chart </a> using <a href='/matplotlib/'>Matplotlib</a> and <code>Pywaffle</code> to visualize data about recycling in London.<br><br>This chart is a small multiple, meaning that we will create <b>multiple waffle charts</b>, one for each London borough, and <b>display them in a grid</b>. Each waffle chart will show the percentage of household waste that is recycled dry or recycled green."
seoDescription: "How to create a small multiple waffle chart with annotations, colormap and nice features using Matplotlib and Pywaffle."
keywords: "pywaffle, waffle, matplotlib, color, plot, chart, small multiple, grid, annotation, colormap, title, footer, source, subtitle, title font, label font, title color, value color, background color, grid color"
family: "partOfAWhole"
chartType: "waffle"
interactive: false
slug: "web-waffle-with-small-multiples"
---

## About

This plot is a [waffle chart](/waffle-chart), with small mutliples. It shows the **recycling rates** per London borough. The size of each square is proportional to the recycling rate. The chart is made with the `pywaffle` library.

The chart was made by [Lisa Hornung](https://inside-numbers.com/). Thanks to her for accepting sharing her work here!

Let's see what the final picture will look like:

![small multiple waffle chart](https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/graph/web-waffle-with-small-multiples.png?raw=true)

## Libraries

First, you need to install the following librairies:

- [matplotlib](https://python-graph-gallery.com/matplotlib/) is used for creating the chart and add customization features
- [pandas](https://python-graph-gallery.com/pandas/) is used to read the data
- [pywaffle](/waffle-chart) is used to create the waffle chart
- `flexitext`: to add beautiful annotations to the chart

And that's it!

```python
import pandas as pd
import matplotlib.pyplot as plt
from pywaffle import Waffle
from flexitext import flexitext
from matplotlib import font_manager
```

## Dataset

For this reproduction, we're going to retrieve the data directly from the [gallery's Github repo](https://github.com/holtzy/The-Python-Graph-Gallery). This means we just need to **give the right url as an argument** to pandas' `read_csv()` function to retrieve the data.

```python
url = "https://raw.githubusercontent.com/holtzy/the-python-graph-gallery/master/static/data/london_recycling.csv"

df = pd.read_csv(url)
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Initialize parameters

Before creating the plot, we first need to define different elements:

- the layout of the small multiples

```python
layout = [
    ["___","___","___","___","ENF","___","___","___"],
    ["___","___","HRW","BRN","HGY","WTH","___","___"],
    ["HDN","ELG","BRT","CMD","ISL","HCK","RDB","HVG"],
    ["HNS","HMS","KNS","WST","CTY","TOW","NWM","BAR"],
    ["___","RCH","WNS","LAM","SWR","LSH","GRN","BXL"],
    ["___","___","KNG","MRT","CRD","BRM","___","___"],
    ["___","___","___","STN","___","___","___","___"],
]
```

- the font: remember to change `my_path` value to the path of the font on your computer. You can learn more about font management [in this post](/custom-fonts-in-matplotlib)

```python
# load fonts
my_path = '/Users/josephbarbier/Library/Fonts'
label_font = font_manager.FontProperties(fname=f'{my_path}/Roboto-Medium.ttf')
title_font = font_manager.FontProperties(fname=f'{my_path}/LilitaOne-Regular.ttf')
```

- a color mapping

```python
colors = {
   "dry": "#22A2AA",
   "green": "#81CE9C",
   "none": "#fbfaf9",
   "value": "#0B4465",
   "bg": "#fbfaf9"
}
```

We can now develop the plot! The main step is to generate a **figure with a grid of subplots**. After that, we iterate through each axis to construct a waffle chart.

```python
# layout
scale_factor = 1.8
fig, axs = plt.subplot_mosaic(layout, figsize=(8*scale_factor,7*scale_factor), empty_sentinel="___")
plt.subplots_adjust(wspace=0.25, hspace=0.25, left=0.05, right=0.95, bottom=0.05)
fig.set_facecolor(colors["bg"])

plt.show()
```

:::output
![](./output-2.png)
:::

We easily recognize the shape of the layout defined above!

## Fill the grid

Once the grid is created, we can fill it with the [waffle charts](/waffle-chart). We **iterate through each axis** to create a [waffle chart](/waffle-chart). We use the `pywaffle` library to create the [waffle chart](/waffle-chart). We also add a title to each subplot.

```python
# setup
columns =  [
    'household_waste_recycled_dry_perc',
    'household_waste_recycled_green_perc',
    'household_waste_not_recycled_perc_est'
]

# layout
scale_factor = 1.8
fig, axs = plt.subplot_mosaic(layout, figsize=(8*scale_factor,7*scale_factor), empty_sentinel="___")
plt.subplots_adjust(wspace=0.25, hspace=0.25, left=0.1, right=0.9, top=0.9, bottom=0.1)
fig.set_facecolor(colors["bg"])


# plot data
for ax in axs:
    data_filtered = df[df["Display_name"]==ax]
    y_values = data_filtered[columns].values.tolist()[0]
    Waffle.make_waffle(
        ax=axs[ax],
        rows=10,
        values=y_values,
        colors=[colors["dry"],
        colors["green"],
        colors["none"]],
        interval_ratio_x=0.35,
        interval_ratio_y=0.35,
        vertical=True,
        zorder=1
    )

    #display % value and borough
    axs[ax].text(
        0.95,
        0.8,
        str(int(y_values[0] + y_values[1]))+"%",
        ha="right",
        va='top',
        fontsize=20,
        color=colors["value"],
        fontproperties=title_font
    )
    axs[ax].text(
        0.95,
        0.95,
        ax,
        fontsize=10,
        ha="right",
        va='top',
        color=colors["value"],
        zorder=3,
        fontproperties=label_font
    )

# title and footer
fig.text(
    0.5,
    1,
    "Recycling rates by London borough",
    fontsize=38,
    ha='center',
    va="top",
    fontweight="bold",
    fontproperties=title_font,
    color=colors["value"]
)
fig.text(
    0.7,
    0.055,
    "Source: Defra",
    fontsize=11,
    ha='right',
    va="center",
    fontweight="normal",
    fontproperties=label_font,
    linespacing=1.5, color="black"
)
subtitle = (
    "<size:20>% of household waste sent for "
    "<color:#22A2AA, weight:bold>DRY</> or <color:#81CE9C, weight:bold>GREEN</> recycling, 2022/23</>"
)
flexitext(0.5, 1-0.075, subtitle, va="bottom", ha="center", xycoords="figure fraction")

plt.savefig("../../static/graph/web-waffle-with-small-multiples.png", dpi=300)
plt.show()
```

:::output
![](./output-3.png)
:::

## Going further

This article explains how to reproduce a [small multiple waffle chart](/waffle-chart) with annotations, colormap and nice other features.

You might be interested in:

- the [waffle chart section](/waffle-chart) of the gallery
