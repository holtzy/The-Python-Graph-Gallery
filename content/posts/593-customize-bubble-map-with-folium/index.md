---
title: "Bubble map with Folium in Python"
description: "Folium is a Python library based on <code>Leaflet.js</code> JavaScript library. It allows us to create maps in the <b>style of Google Maps</b> with an additional layer of <b>customization</b>.<br/><br/>This post will explain how to use Folium to create <a href='/bubble-map'>bubble maps</a>, a kind of chart where background maps are <b>combined</b> with individual points that represent events or physical objects that have a certain <b>latitude and longitude</b>.<br/><br/>For an introduction to Folium, <a href='/288-map-background-with-folium'>check this post</a>.<br/>For an introduction to bubble map in Folium, <a href='/313-bubble-map-with-folium'>check this post</a>."
seoDescription: "How to create and customize a bubble map using Folium"
keywords: "matplotlib, python, tutorial, seaborn, plot, folium, bubble, customize"
family: "map"
chartType: "bubbleMap"
slug: "593-customize-bubble-map-with-folium"
---

## Libraries & Data

For creating this chart, we will need to load the following libraries:

- [folium](/folium) for plotting the chart
- [pandas](/pandas) for loading the data
- `numpy` for some calculations

```python
import folium
from folium import plugins
import pandas as pd
import numpy as np
```

## Dataset

Let's start by loading shape data:

```python
url = "https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/earthquakes.csv"
df = pd.read_csv(url)
df = df[df['Depth (km)'] >= 0.01]  # depth of at least 10 meters
df.sort_values(by='Depth (km)', ascending=False, inplace=True)
df.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## Custom bubble style

The main steps to create a bubble map with folium are:

- **initiate the map** with `folium.Map()`
- **iterate over each rows** to add each individual point with `folium.CircleMarker()`

In order to make each point **better looking**, in the `CircleMarker()`, we:

- change `radius` to the value in `row['Depth (km)']`
- change the `color` depending on the magnitude with: `color = '#0a9396' if row['Magnitude'] < 4 else '#ee9b00' if row['Magnitude'] < 6 else '#ae2012'`
- change the opacity with `fill_opacity`
- change border width with `weight`

```python
# Initialize map
m = folium.Map(
    location=[0, 0],  # center around Africa
    zoom_start=2,  # dezoom
    tiles='cartodb positron'  # background style
)

# Add all the individual earthquakes to the map
for idx, row in df.iterrows():
    color = '#0a9396' if row['Magnitude'] < 4 else '#ee9b00' if row['Magnitude'] < 6 else '#ae2012'
    folium.CircleMarker(
        location=[row['Latitude'], row['Longitude']],
        radius=np.log(row['Depth (km)']) * 2,
        color=color,
        fill=True,
        fill_color=color,
        fill_opacity=0.5,
        weight=1
    ).add_to(m)

m.save('../../static/interactiveCharts/593-customize-bubble-map-with-folium-1.html')
```

```html
%%html
<iframe
  src="../../interactiveCharts/593-customize-bubble-map-with-folium-1.html"
  width="790"
  height="600"
  title="Folium map"
  style="border: none"
>
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Tooltip

An interactive map without a **tooltip** wouldn't be very effective!

Luckily, with the `tooltip` argument, customizing it is straightforward, and we can even incorporate some `HTML` into it.

For instance, we can display the `Location`, `Magnitude`, `Depth`, and `Date`, wrap them in `<b>` tags for boldness, and set them as level 5 headings (`<h5>`).

```python
# Initialize map
m = folium.Map(
    location=[0, 0],
    zoom_start=2,
    tiles='cartodb positron'
)

# Add all the individual earthquakes to the map
for idx, row in df.iterrows():
    tooltip_text = f"""
   <h5><b>Location:</b> {row['Region']}</h5>
   <h5><b>Magnitude:</b> {row['Magnitude']}</h5>
   <h5><b>Depth:</b> {row['Depth (km)']} km</h5>
   <h5><b>Date:</b> {row['Date']}</h5>
   """
    color = '#0a9396' if row['Magnitude'] < 4 else '#ee9b00' if row['Magnitude'] < 6 else '#ae2012'
    folium.CircleMarker(
        location=[row['Latitude'], row['Longitude']],
        radius=np.log(row['Depth (km)']) * 2,
        color=color,
        fill=True,
        fill_color=color,
        fill_opacity=0.5,
        weight=1,
        tooltip=folium.Tooltip(tooltip_text, sticky=True)
    ).add_to(m)

m.save('../../static/interactiveCharts/593-customize-bubble-map-with-folium-2.html')
```

```html
%%html
<iframe
  src="../../interactiveCharts/593-customize-bubble-map-with-folium-2.html"
  width="790"
  height="600"
  title="Folium map"
  style="border: none"
>
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Automatically cluster points

`folium` comes with a set of plugins to add new features super easily!

For example here we use the `MarkerCluster()` plugin to **automatically cluster** the marker into groups when zooming-out.

And in order for this to work: we add the markers to the map with `.add_to(marker_cluster)` instead of `.add_to(m)`

```python
from folium import plugins

# Initialize map
m = folium.Map(
    location=[0, 0],
    zoom_start=2,
    tiles='cartodb positron'
)

# Add earthquake data with clustering
marker_cluster = plugins.MarkerCluster().add_to(m)

# Add all the individual earthquakes to the map
for idx, row in df.iterrows():
    tooltip_text = f"""
   <h5><b>Location:</b> {row['Region']}</h5>
   <h5><b>Magnitude:</b> {row['Magnitude']}</h5>
   <h5><b>Depth:</b> {row['Depth (km)']} km</h5>
   <h5><b>Date:</b> {row['Date']}</h5>
   """
    color = '#0a9396' if row['Magnitude'] < 4 else '#ee9b00' if row['Magnitude'] < 6 else '#ae2012'
    folium.CircleMarker(
        location=[row['Latitude'], row['Longitude']],
        radius=np.log(row['Depth (km)']) * 2,
        color=color,
        fill=True,
        fill_color=color,
        fill_opacity=0.7,
        weight=0.4,
        tooltip=folium.Tooltip(tooltip_text, sticky=True)
    ).add_to(marker_cluster)

m.save('../../static/interactiveCharts/593-customize-bubble-map-with-folium-3.html')
```

```html
%%html
<iframe
  src="../../interactiveCharts/593-customize-bubble-map-with-folium-3.html"
  width="790"
  height="600"
  title="Folium map"
  style="border: none"
>
</iframe>
```

:::output
::output-html{src="./output-4.html"}
:::

## Going further

You might be interested in:

- learn more about how to create [bubble maps](/bubble-map)
- understand the basics of [folium](/288-map-background-with-folium)
- this great [static bubble map](/web-bubble-map-with-arrows)
