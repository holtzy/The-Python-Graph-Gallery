---
title: "Map with markers with Python and Folium"
description: "This blogpost explains how to build an interactive map with markers using <code>Python</code> and <code>Folium</code>. It explains how to add the markers at specific locations, and how to customize their appearance and popup using <code>html</code>."
seoDescription: "How to build a map with markers using Python and Folium"
keywords: "python, chart, plot, seaborn, matplotlib, folium, map, marker, html"
family: "map"
chartType: "bubbleMap"
slug: "312-add-markers-on-folium-map"
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

## Add markers

Let's create a `Pandas` dataframe. It provides a numeric value for a few big cities, along with their geographic coordinates

```python
# Import the pandas library
import pandas as pd

# Make a data frame with dots to show on the map
data = pd.DataFrame({
   'lon':[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5],
   'lat':[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97],
   'name':['Buenos Aires', 'Paris', 'melbourne', 'St Petersbourg', 'Abidjan', 'Montreal', 'Nairobi', 'Salvador'],
   'value':[10, 12, 40, 70, 23, 43, 100, 43]
}, dtype=str)

data
```

:::output
::output-html{src="./output-2.html"}
:::

Now, loop through this dataframe, and add a marker to each location thanks to the `Marker()` function:

```python
# add marker one by one on the map
for i in range(0,len(data)):
   folium.Marker(
      location=[data.iloc[i]['lat'], data.iloc[i]['lon']],
      popup=data.iloc[i]['name'],
   ).add_to(m)

# Show the map again
m
```

:::output
::output-html{src="./output-3.html"}
:::

Save the map as a standalone html file if needed:

```python
m.save('../../static/interactiveCharts/312-add-markers-on-folium-map.html')
```

## Custom marker

It is possible to customize the markers. The `icon` parameter basically allows to include any `html` code, and you can pass some `css` to it with inline `style`

```python
# Make an empty map
n = folium.Map(location=[20,0], tiles="OpenStreetMap", zoom_start=2)

# add marker one by one on the map
for i in range(0,len(data)):
   folium.Marker(
      location=[data.iloc[i]['lat'], data.iloc[i]['lon']],
      popup=data.iloc[i]['name'],
      icon=folium.DivIcon(html=f"""<div style="font-family: courier new; color: blue">{data.iloc[i]['name']}</div>""")
   ).add_to(n)

# Show the map again
n
```

:::output
::output-html{src="./output-4.html"}
:::

## Custom popup

Likewise, you can use any `html` code in the marker popups

```python
# Make an empty map
n = folium.Map(location=[20,0], tiles="OpenStreetMap", zoom_start=2)

# add marker one by one on the map
for i in range(0,len(data)):
    html=f"""
        <h1> {data.iloc[i]['name']}</h1>
        <p>You can use any html here! Let's do a list:</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        </p>
        <p>And that's a <a href="https://python-graph-gallery.com">link</a></p>
        """
    iframe = folium.IFrame(html=html, width=200, height=200)
    popup = folium.Popup(iframe, max_width=2650)
    folium.Marker(
        location=[data.iloc[i]['lat'], data.iloc[i]['lon']],
        popup=popup,
        icon=folium.DivIcon(html=f"""
            <div><svg>
                <circle cx="50" cy="50" r="40" fill="#69b3a2" opacity=".4"/>
                <rect x="35", y="35" width="30" height="30", fill="red", opacity=".3" 
            </svg></div>""")
    ).add_to(n)

# Show the map again
n
```

:::output
::output-html{src="./output-5.html"}
:::
