---
title: "Choropleth map with Python and Folium"
description: "This blogpost explains how to build a choropleth map of the US with <code>python</code>. It uses the <code>Folium</code> library that allows to create interactive map."
seoDescription: "same as description but shorter"
keywords: "python, chart, plot, seaborn, matplotlib, kdeplot"
family: "map"
chartType: "choropleth"
interactive: false
slug: "292-choropleth-map-with-folium"
---

> `Folium` is a `python` library for interactive geo-spatial data visualization. It is a wrapper of the `leaflet.js` javascript library. You can read more about it in the [map section](https://python-graph-gallery.com) of the gallery.

## Map initialization

A map made with `Folium` always starts with an initialization step where the tile and the location are defined:

```python
# import the folium library
import folium

# initialize the map and store it in a m object
m = folium.Map(location=[40, -95], zoom_start=4)

# show the map
m
```

:::output
::output-html{src="./output-1.html"}
:::

Here we are, now, let's show states with some appropriate colors to get a chloropleth.

## Data

To build a choropleth map, you need 2 data inputs:

- a set of geographic regions and their boundary coordinates
- a numeric value for each region, used for the color

This blogpost is based on the [official documentation](https://python-visualization.github.io/folium/quickstart.html), and aims at visualizing the unemployment rate in the US states. Let's load the 2 dataset:

```python
import pandas as pd

url = (
    "https://raw.githubusercontent.com/python-visualization/folium/main/examples/data"
)
state_geo = f"{url}/us-states.json"
state_unemployment = f"{url}/US_Unemployment_Oct2012.csv"
state_data = pd.read_csv(state_unemployment)
```

## Choropleth of US states

```python
folium.Choropleth(
    geo_data=state_geo,
    name="choropleth",
    data=state_data,
    columns=["State", "Unemployment"],
    key_on="feature.id",
    fill_color="YlGn",
    fill_opacity=0.7,
    line_opacity=.1,
    legend_name="Unemployment Rate (%)",
).add_to(m)

folium.LayerControl().add_to(m)

m
```

:::output
::output-html{src="./output-2.html"}
:::

> Note: the [official doc](https://python-visualization.github.io/folium/quickstart.html) has some more examples for choropleth map with folium

## Save the choropleth

You can save the above choropleth map as a standalone `html` file if needed:

```python
m.save('../../static/interactiveCharts/292-choropleth-map-with-folium.html')
```
