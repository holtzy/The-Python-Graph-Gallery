---
title: "Overlapped Area Chart with Zoom Outsets"
description: "In this tutorial, we will be composing a four-panel plot for <b>multiscale visualization</b> of rainfall time series data in Texas. We'll need to tackle two key challenges into visualizing this rainfall time series: dealing with <b>scrunched axes scales</b> and co-visualizing <b>dueling readings</b> from two rain gauges.<br><br>To address these challenges, we will <ul><li> use <a href='/area-plot'>matplotlib's stackplot</a> with a transparency effect to create an overlapped area plot that elegantly shows agreement/disagreement between the gauges</li><li> use the <a href='https://github.com/mmore500/outset'>outset package</a> to add <b>panels zooming</b> in on areas of interest in the primary plot</li></ul>"
seoDescription: "Creating an multiscale overlapped area plot visualization of time series data using matplotlib's stackplot in conjunction with the outset package, which allows us to add zoom panels showing regions of interest in greater detail."
keywords: "python, chart, overlapped, area, matplotlib, line, multiscale, faceted, outset, zoom"
family: "evolution"
chartType: "area"
interactive: false
slug: "web-overlapped-area-chart-with-zoom-outsets"
---

# Overlapped Area Chart with Zoom Outsets

In this tutorial, we will be composing a four-panel plot for multiscale visualization of rainfall time series data in Texas made available by [Evett et al. via the USDA](https://doi.org/10.15482/USDA.ADC/1528713).
Our data comprises recordings from a pair of rain gauges positioned in opposite corners of the study area.

We'll need to tackle two key challenges into visualizing this rainfall time series: _1)_ dealing with scrunched time/rainfall scales and _2)_ co-visualizing dueling readings from our twin gauges.

### Challenge 1

To address the first challenge, we will use `matplotlib`'s `stackplot` to create area plots with a transparency ("alpha") effect.
(For those unfamiliar, area plots are line plots with the area between the line and the x-axis filled in.)
Because the gauges mostly agree, the majority of plotted area will be overlap from both gauges.
However, where they differ one area plot will show through.

### Challenge 2

The second challenge in visualizing this data arises because, in the particular study area, large amounts of rain falls in short spurts.
So, when we zoom out to see the whole month and the maximum rainfall rate, large spikes in the data cause the rest of the data to be scrunched into obscurity.

To plot our data without losing information about low-magnitude rainfall and the short-time events, we will use the `outset` package draw supplementary views of the data at alternate magnifications.
These auxiliary plots will be combined with the main plot (overall view) as an axes grid.

Here's a sneak peek at the visualization we'll be building:

![](https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/80d2c1281cac1e0152c056048645f897fcc9e83a/static/graph/web-overlapped-area-chart-with-zoom-outsets.png)

## Libraries

Begin by importing necessary packages.

Notably:

- `datetime` for converting the month and day values from day-of-year
- `pandas` for data management
- `matplotlib` for plotting area charts using `stackplot`
- `outset` for managing multi-zoom grid and zoom indicators

```python
from datetime import datetime, timedelta
import itertools as it
import typing

from matplotlib import pyplot as plt
from matplotlib import text as mpl_text
import numpy as np
import outset as otst
from outset import util as otst_util
import opytional as opyt
import pandas as pd
import seaborn as sns
```

To install dependencies for this exercise,

```bash
python3 -m pip install matplotlib numpy outset opytional pandas seaborn
```

## Data Preparation

Next, fetch our data and do a little work on it: rename columns and subset data down to just the month of March.

```python
# download data
df = pd.read_csv("https://osf.io/6mx3e/download")

nwls = "NW Lysimeter\n(35.18817624°N, -102.09791°W)"
swls = "SW Lysimeter\n(35.18613985°N, -102.0979187°W)"
df[nwls], df[swls] = df["NW precip in mm"], df["SW precip in mm"]

# filter down to just data from March 2019
march_df = df[np.clip(df["Decimal DOY"], 59, 90) == df["Decimal DOY"]]
march_df.head()  # show snippet of dataframe content
```

:::output
::output-html{src="./output-1.html"}
:::

Here's a preliminary look at the time series.

```python
fig, ax = plt.subplots(figsize=(8,6))
sns.lineplot(data=march_df, x="Decimal DOY", y="NW precip in mm", ax=ax)
sns.lineplot(data=march_df, x="Decimal DOY", y="SW precip in mm", ax=ax)
plt.show()
```

:::output
![](./output-2.png)
:::

We've certainly got some work to do to nice this up!

Our visualization will focus on showing three details that are difficult to make out in a naive visualization _1)_ a little shower around day 72, _2)_ the big rainstorm around day 82, and _3)_ light precipitation events over the course of the entire month.
We'll create a zoom panel to show each of these components.

# Create Axes Grid

Our first plotting step is to initialize an `outset.OutsetGrid` to manage content and layout of our planned axes grid.
This class operates analogously to seaborn's [`FacetGrid`](https://seaborn.pydata.org/generated/seaborn.FacetGrid.html), if you're familiar with that.

We'll provide a list of the main plot regions we want to magnify through the `data` kwarg.
Other kwargs provide styling and layout information, including how we want plots to be shaped and how many columns we want to have.

```python
grid = otst.OutsetGrid(  # initialize axes grid manager
    data=[
        # (x0, y0, x1, y1) regions to outset
        (71.6, 0, 72.2, 2),  # little shower around day 72
        (59, 0, 90, 0.2),  # all light precipitation events
        (81.3, 0, 82.2, 16),  # big rainstorm around day 82
    ],
    x="Time",
    y="Precipitation (mm)",  # label axes
    aspect=2,  # make subplots wide
    col_wrap=2,  # wrap subplots into a 2x2 grid
    # styling for zoom indicator annotations, discussed later
    marqueeplot_kws={"frame_outer_pad": 0, "mark_glyph_kws": {"zorder": 11}},
    marqueeplot_source_kws={"zorder": 10, "frame_face_kws": {"zorder": 10}},
)
```

:::output
![](./output-3.png)
:::

## Set Up Plot Content

Next, we'll set up the content of our plots --- overlapped area plots showing the two rain gauges' readings.

Matplotlib's [`stackplot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.stackplot.html) is designed to create area plots with areas "stacked" on top of each other instead of overlapping.
To get an overlap, we'll call `stackplot` twice so that each "stack" contains only one of our variables.

We will use `OutsetGrid.broadcast` to draw the same content across all four axes in our grid.
This method takes a plotter function as its first argument then calls it with subsequent arguments forwarded to it on each axis.

```python
grid = otst.OutsetGrid(  # initialize axes grid manager
    data=[
        # (x0, y0, x1, y1) regions to outset
        (71.6, 0, 72.2, 2),  # little shower around day 72
        (59, 0, 90, 0.2),  # all light precipitation events
        (81.3, 0, 82.2, 16),  # big rainstorm around day 82
    ],
    x="Time",
    y="Precipitation (mm)",  # label axes
    aspect=2,  # make subplots wide
    col_wrap=2,  # wrap subplots into a 2x2 grid
    # styling for zoom indicator annotations, discussed later
    marqueeplot_kws={"frame_outer_pad": 0, "mark_glyph_kws": {"zorder": 11}},
    marqueeplot_source_kws={"zorder": 10, "frame_face_kws": {"zorder": 10}},
)

# draw semi-transparent filled lineplot on all axes for each lysimeter
for y, color in zip([nwls, swls], ["fuchsia", "aquamarine"]):
    grid.broadcast(
        plt.stackplot,
        march_df["Decimal DOY"],  # all kwargs below forwarded to plotter...
        march_df[y],
        colors=[color],
        alpha=0.4,
        edgecolor=color,
        labels=[y],
        lw=2,
        zorder=10,
    )
```

:::output
![](./output-4.png)
:::

# Add Zoom Indicators

Now it's time to add zoom indicator boxes, a.k.a. `outset` "marquees," to show how the scales of our auxiliary plots relate to the scale of the main plot.
Note that we pass a kwarg to allow aspect ratios to vary between the main plot and outset plots.
That way, zoom areas can be expanded along their smaller dimension to take full advantage of available space.

```python
grid = otst.OutsetGrid(  # initialize axes grid manager
    data=[
        # (x0, y0, x1, y1) regions to outset
        (71.6, 0, 72.2, 2),  # little shower around day 72
        (59, 0, 90, 0.2),  # all light precipitation events
        (81.3, 0, 82.2, 16),  # big rainstorm around day 82
    ],
    x="Time",
    y="Precipitation (mm)",  # label axes
    aspect=2,  # make subplots wide
    col_wrap=2,  # wrap subplots into a 2x2 grid
    # styling for zoom indicator annotations, discussed later
    marqueeplot_kws={"frame_outer_pad": 0, "mark_glyph_kws": {"zorder": 11}},
    marqueeplot_source_kws={"zorder": 10, "frame_face_kws": {"zorder": 10}},
)

# draw semi-transparent filled lineplot on all axes for each lysimeter
for y, color in zip([nwls, swls], ["fuchsia", "aquamarine"]):
    grid.broadcast(
        plt.stackplot,
        march_df["Decimal DOY"],  # all kwargs below forwarded to plotter...
        march_df[y],
        colors=[color],
        alpha=0.4,
        edgecolor=color,
        labels=[y],
        lw=2,
        zorder=10,
    )

# draw "marquee' zoom indicators showing correspondences between main plot
# and outset plots
grid.marqueeplot(equalize_aspect=False)  # allow axes aspect ratios to vary
plt.show()
```

:::output
![](./output-5.png)
:::

## Replace Numeric Tick Labels with Human-readable Timestamps

We're almost there!
But the x-axis tick labels are still numeric "day of year" values, which is not very intuitive.
I don't know off the top of my head what day 42 of the year corresponds to, do you?

Let's fix that.
To replace the existing tick labels with timestamps, we'll define a function that takes a numeric day of the year and returns a human-readable timestamp.
We'll always include the time of day, but we'll only include the date on between-day transitions.
We'll also need a helper function to convert numeric day of the year to a Python datetime object.

```python
# helper function
def to_dt(day_of_year: float, year: int = 2019) -> datetime:
    """Convert decimal day of the year to a datetime object."""
    return datetime(year=year, month=1, day=1) + timedelta(days=day_of_year)


def format_tick_value(
    prev_value: typing.Optional[mpl_text.Text],
    value: mpl_text.Text,
) -> str:
    """Create human-readable timestamp to replace a numeric axes tick.

    Adjust date string content based on whether previous tick is a different
    calendar day than the current tick.
    """
    decimal_doy = float(value.get_text())
    prev_decimal_doy = opyt.apply_if(prev_value, lambda x: float(x.get_text()))

    # if the previous tick is the same day as this tick...
    # (note: first tick has no previous tick, so prev_decimal_day is None)
    if int(decimal_doy) == opyt.apply_if(prev_decimal_doy, int):
        # ... then just label with time of day
        return to_dt(decimal_doy).strftime("%H:%M")
    # otherwise, if prev tick is different day AND this tick near midnight...
    elif decimal_doy % 1.0 < 1 / 24:
        # ... then just label date and not time of day
        return to_dt(decimal_doy).strftime("%b %-d")
    # otherwise, prev tick is different day and this tick NOT near midnight...
    else:
        # ... label with time of day AND date
        return to_dt(decimal_doy).strftime("%H:%M\n%b %-d")
```

With this out of the way, we can loop over the axes in our grid and perform the label replacement.

```python
grid = otst.OutsetGrid(  # initialize axes grid manager
    data=[
        # (x0, y0, x1, y1) regions to outset
        (71.6, 0, 72.2, 2),  # little shower around day 72
        (59, 0, 90, 0.2),  # all light precipitation events
        (81.3, 0, 82.2, 16),  # big rainstorm around day 82
    ],
    x="Time",
    y="Precipitation (mm)",  # label axes
    aspect=2,  # make subplots wide
    col_wrap=2,  # wrap subplots into a 2x2 grid
    # styling for zoom indicator annotations, discussed later
    marqueeplot_kws={"frame_outer_pad": 0, "mark_glyph_kws": {"zorder": 11}},
    marqueeplot_source_kws={"zorder": 10, "frame_face_kws": {"zorder": 10}},
)

# draw semi-transparent filled lineplot on all axes for each lysimeter
for y, color in zip([nwls, swls], ["fuchsia", "aquamarine"]):
    grid.broadcast(
        plt.stackplot,
        march_df["Decimal DOY"],  # all kwargs below forwarded to plotter...
        march_df[y],
        colors=[color],
        alpha=0.4,
        edgecolor=color,
        labels=[y],
        lw=2,
        zorder=10,
    )

# draw "marquee' zoom indicators showing correspondences between main plot
# and outset plots
grid.marqueeplot(equalize_aspect=False)  # allow axes aspect ratios to vary

for ax in grid.axes.flat:  # iterate over all axes in grid
    # first, filter x ticks to keep only ticks that are within axes limits
    ax.set_xticks(
        [val for val in ax.get_xticks() if np.clip(val, *ax.get_xlim()) == val]
    )
    # second, map format_tick_value over tick positions to make tick timestamps
    new_tick_labels = it.starmap(
        format_tick_value,  # mapped function
        # ... taking sequential tick pairs as arguments,
        # front-padded with None (first tick has no preceding tick)
        it.pairwise((None, *ax.get_xticklabels())),
    )
    # third, replace existing tick labels with new timestamp tick labels
    ax.set_xticklabels([*new_tick_labels])  # make list b/c mpl rejects iters

plt.show()
```

:::output
![](./output-6.png)
:::

## Final Details

The last order of business is to add a legend to the upper left corner of the main plot.

```python
grid = otst.OutsetGrid(  # initialize axes grid manager
    data=[
        # (x0, y0, x1, y1) regions to outset
        (71.6, 0, 72.2, 2),  # little shower around day 72
        (59, 0, 90, 0.2),  # all light precipitation events
        (81.3, 0, 82.2, 16),  # big rainstorm around day 82
    ],
    x="Time",
    y="Precipitation (mm)",  # label axes
    aspect=2,  # make subplots wide
    col_wrap=2,  # wrap subplots into a 2x2 grid
    # styling for zoom indicator annotations, discussed later
    marqueeplot_kws={"frame_outer_pad": 0, "mark_glyph_kws": {"zorder": 11}},
    marqueeplot_source_kws={"zorder": 10, "frame_face_kws": {"zorder": 10}},
)

# draw semi-transparent filled lineplot on all axes for each lysimeter
for y, color in zip([nwls, swls], ["fuchsia", "aquamarine"]):
    grid.broadcast(
        plt.stackplot,
        march_df["Decimal DOY"],  # all kwargs below forwarded to plotter...
        march_df[y],
        colors=[color],
        alpha=0.4,
        edgecolor=color,
        labels=[y],
        lw=2,
        zorder=10,
    )

# draw "marquee' zoom indicators showing correspondences between main plot
# and outset plots
grid.marqueeplot(equalize_aspect=False)  # allow axes aspect ratios to vary

for ax in grid.axes.flat:  # iterate over all axes in grid
    # first, filter x ticks to keep only ticks that are within axes limits
    ax.set_xticks(
        [val for val in ax.get_xticks() if np.clip(val, *ax.get_xlim()) == val]
    )
    # second, map format_tick_value over tick positions to make tick timestamps
    new_tick_labels = it.starmap(
        format_tick_value,  # mapped function
        # ... taking sequential tick pairs as arguments,
        # front-padded with None (first tick has no preceding tick)
        it.pairwise((None, *ax.get_xticklabels())),
    )
    # third, replace existing tick labels with new timestamp tick labels
    ax.set_xticklabels([*new_tick_labels])  # make list b/c mpl rejects iters

grid.source_axes.legend(  # add legend to primary axes
    loc="upper left",
    bbox_to_anchor=(0.02, 1.0),  # legend positioning
    frameon=True,  # styling: turn on legend frame
)

plt.show()
```

:::output
![](./output-7.png)
:::

## Want Insets Instead?

Just call `outset.inset_outsets`!
In this case, we'll also use `outset.util.layout_inset_axes` to tweak inset sizing and positioning.

```python
grid = otst.OutsetGrid(  # initialize axes grid manager
    data=[
        # (x0, y0, x1, y1) regions to outset
        (71.6, 0, 72.2, 2),  # little shower around day 72
        (59, 0, 90, 0.2),  # all light precipitation events
        (81.3, 0, 82.2, 16),  # big rainstorm around day 82
    ],
    x="Time",
    y="Precipitation (mm)",  # label axes
    aspect=2,  # make subplots wide
    col_wrap=2,  # wrap subplots into a 2x2 grid
    # styling for zoom indicator annotations, discussed later
    marqueeplot_kws={"frame_outer_pad": 0, "mark_glyph_kws": {"zorder": 11}},
    marqueeplot_source_kws={"zorder": 10, "frame_face_kws": {"zorder": 10}},
)

# draw semi-transparent filled lineplot on all axes for each lysimeter
for y, color in zip([nwls, swls], ["fuchsia", "aquamarine"]):
    grid.broadcast(
        plt.stackplot,
        march_df["Decimal DOY"],  # all kwargs below forwarded to plotter...
        march_df[y],
        colors=[color],
        alpha=0.4,
        edgecolor=color,
        labels=[y],
        lw=2,
        zorder=10,
    )

# draw "marquee' zoom indicators showing correspondences between main plot
# and outset plots
grid.marqueeplot(equalize_aspect=False)  # allow axes aspect ratios to vary

for ax in grid.axes.flat:  # iterate over all axes in grid
    # first, filter x ticks to keep only ticks that are within axes limits
    ax.set_xticks(
        [val for val in ax.get_xticks() if np.clip(val, *ax.get_xlim()) == val]
    )
    # second, map format_tick_value over tick positions to make tick timestamps
    new_tick_labels = it.starmap(
        format_tick_value,  # mapped function
        # ... taking sequential tick pairs as arguments,
        # front-padded with None (first tick has no preceding tick)
        it.pairwise((None, *ax.get_xticklabels())),
    )
    # third, replace existing tick labels with new timestamp tick labels
    ax.set_xticklabels([*new_tick_labels])  # make list b/c mpl rejects iters

grid.source_axes.legend(  # add legend to primary axes
    loc="upper left",
    bbox_to_anchor=(0.02, 1.0),  # legend positioning
    frameon=True,  # styling: turn on legend frame
)

otst.inset_outsets(
    grid,
    insets=otst_util.layout_corner_insets(
        3,  # three insets
        "NW",  # arrange in upper-left corner
        inset_margin_size=(0.02, 0),  # allow closer to main axes bounds
        inset_grid_size=(0.67, 0.9),  # grow to take up available space
    ),
    equalize_aspect=False,
)
sns.move_legend(  # move legend centered above figure
    grid.source_axes, "lower center", bbox_to_anchor=(0.5, 1.1), ncol=2
)

plt.show()
```

:::output
![](./output-8.png)
:::

## Going Further

You can read more about area chart in the [dedicated section](/area-plot) of the gallery.

You can learn more about the `outset` package in the [official documentation](https://mmore500.com/outset/)

## Authorship

This tutorial is contributed by [Matthew Andres Moreno](https://mmore500.com/), the `outset` library author. You can find him on Twitter as [@MorenoMatthewA](https://twitter.com/morenomatthewa) and on GitHub as [@mmore500](https://github.com/mmore500/).
