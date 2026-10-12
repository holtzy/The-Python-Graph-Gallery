---
title: "Interactive map with Python and Folium"
description: "<code>Folium</code> is a python library wrapping the <code>leaflet.js</code> javascript library. It allows to build interactive maps with several kind of background tiles as shown in this blogpost."
seoDescription: "Build interactive maps with python and folium"
keywords: "python, chart, plot, seaborn, matplotlib, map, folium, leaflet"
family: "map"
chartType: "map"
slug: "288-map-background-with-folium"
---

## 🤔 What is `Folium`

Folium is a python library allowing to call the `Leaflet.js` Javascript library. It allows you to manipulate your data with python and map them using the power of leaflet! It is really easy to call a map using this library.

Folium can be installed with pip using the following:

`pip install folium`

## 👍 Most basic map

To create a map with `Folium`, simply pass the coordinates of the location you're interested in to the `Map()` function:

```python
# Import the folium library
import folium

# Build the default map for a specific location
map = folium.Map(location=[43.61092, 3.87723])
map
```

:::output
::output-html{src="./output-1.html"}
:::

Welcome to Montpellier, south of France, where I live most of the time 😊!

## 💾 Save as `html`

If you're not working in a jupyter notebook, you probably want to export the map to a standalone `.html` file. This is done thanks to the `save` function:

```python
# Save the map to a specific location in my laptop
map.save('../../static/interactiveCharts/288_basic_folium_map.html')
```

You can now embed this page in any html document using an `iframe`. Open your `.html` document and add this somewhere:

```python
%%html
<iframe
   src="/interactiveCharts/288_basic_folium_map.html"
   title="Basic map with folium"
   width="790"
   height="600"
>
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## 🌈 Change tile

The `folium` library comes with several options for the background tile. The background tile is set thanks to the `tiles` parameter. For instance, let's visit Paris with a `Cartodb Positron` tile:

```python
map = folium.Map(location=[48.85, 2.35],
                 tiles="Cartodb Positron", zoom_start=10)
map
```

:::output
::output-html{src="./output-3.html"}
:::

-

`Cartodb dark matter`

```python
map = folium.Map(location=[48.85, 2.35],
                 tiles="Cartodb dark_matter", zoom_start=10)
map
```

:::output
::output-html{src="./output-4.html"}
:::

-

`Open Street Map`

```python
map = folium.Map(
    location=[48.85, 2.35], tiles="OpenStreetMap", zoom_start=10)
map
```

:::output
::output-html{src="./output-5.html"}
:::

Note: some `mapbox` tiles are available as well, but you need an API key for that

## Going further

You might be interested in:

- building a [bubble map with folium](/593-customize-bubble-map-with-folium)
- creating a [choropleth map with folium](/292-choropleth-map-with-folium)
- learn more about [maps in python](/map)
