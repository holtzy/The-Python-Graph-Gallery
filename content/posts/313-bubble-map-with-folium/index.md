---
title: "Bubble map with Python and Folium"
description: "This blogpost explains how to build a bubble map with <code>Python</code> and <code>Folium</code>. It initializes the map with an <code>OpenStreetMap</code> Tile, create a dataframe with circle coordinates and add a circle for each item of the dataset."
seoDescription: "How to build a bubble map with Python and the Folium library"
keywords: "python, chart, plot, seaborn, matplotlib, map, bubble, folium"
family: "map"
chartType: "bubbleMap"
slug: "313-bubble-map-with-folium"
---

> If you're new into `Folium`, I strongly advise to read [this introduction](https://python-graph-gallery.com/288-map-background-with-folium). It explains the basics: __install__ the library, __initialize__ a map, change __tile__, __save__ as standalone html file, __embed__ the map somewhere and so on.

## Map initialization

Building a map with `Folium` always start by initializing it. Pick the tile type you want, and select the location and zoom you're interested in. In this example, we're going to consider the whole world, centered on Europe.

```python
# import the library
import folium

# Make an empty map
m = folium.Map(location=[20,0], tiles="OpenStreetMap", zoom_start=2)

# Show the map
m
```

:::output
::output-html{src="./output-1.html"}
:::

## The Data

A bubble map basically adds some markers (circles) at some locations on the map. Those circle must have coordinates (longitude and latitude). They usually have values as well, values that are mapped to the circle size.

Let's build a random dataset with `Pandas`

```python
# Import the pandas library
import pandas as pd

# Make a data frame with dots to show on the map
data = pd.DataFrame({
   'lon':[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5],
   'lat':[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97],
   'name':['Buenos Aires', 'Paris', 'melbourne', 'St Petersbourg', 'Abidjan', 'Montreal', 'Nairobi', 'Salvador'],
   'value':[10, 12, 40, 70, 23, 43, 100, 43]
})

data
```

:::output
::output-html{src="./output-2.html"}
:::

## Add circles

Let's loop through this data frame and add one bubble to each location. Adding one circle is made thanks to the `Circle()` function. It needs to be used together with the `add_to()` function to be added to the map you're working on.

Note that the `radius` parameter is set in meters. This is why it is multiplied by `20000` here, otherwise circles would be too small.

Mercator projection deforms the circles which are far away from the equator. To avoid this effect, `radius` is multiplied by the cosine of the latitude.

Last but not least, the `popup` parameters controls what's available in the popup you get when you click on a circle.

```python
import math
# add marker one by one on the map, and account for Mercator deformation
for city in data.itertuples():
    local_deformation = math.cos(city.lat * math.pi / 180)
    folium.Circle(
        location=[city.lat, city.lon],
        popup='%s (%.1f)' % (city.name, city.value),
        radius=city.value * 20000.0 * local_deformation,
        color='crimson',
        fill=True,
        fill_color='crimson'
    ).add_to(m)

# Show the map again
m
```

:::output
::output-html{src="./output-3.html"}
:::

Save the map as a standalone html file:

```python
m.save('../../static/interactiveCharts/313-bubble-map-with-folium.html')
```

## Zooming effect

In the example above, the circle radius is defined in meters. As a result, the circle becomes bigger on the screen when you zoom, and smaller when you unzoom. 

It is possible to change this behaviour thanks to the `CircleMarker()` function. In this case, the radius is defined in pixels. Which means circle will always appear the same, whatever the zoom level is.

```python
n = folium.Map(location=[20,0], tiles="OpenStreetMap", zoom_start=3)

for city in data.itertuples():
    folium.CircleMarker(
        location=[city.lat, city.lon],
        popup=city.name,
        radius=float(city.value),
        color='#69b3a2',
        fill=True,
        fill_color='#69b3a2'
   ).add_to(n)

# A title can be added to the map, if desired.
n.get_root().html.add_child(folium.Element("<h3 align='center'>Map with zooming circles</h3>"))

n
```

:::output
::output-html{src="./output-4.html"}
:::
