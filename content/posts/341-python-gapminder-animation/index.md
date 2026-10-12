---
title: "Animated bubble chart"
description: "This blogpost explains how to build an <b>animated bubble chart</b> using <code>Python</code> and <code>Matplotlib</code>. <code>Matplotlib</code> is used to a <code>gif</code> file that can be displayed in a web page. The data used is the <code>gapminder</code> dataset, which is a classic dataset used in data visualization.<br><br>The animation is saved as a <code>gif</code> file and displayed in the blogpost. The code is available in the blogpost and can be used to create similar animations with other datasets."
seoDescription: "How to make an animated bubble chart with Python and Image Magick"
keywords: "python, chart, plot, seaborn, matplotlib, gapminder, animation, bubble"
family: "general"
chartType: "animation"
slug: "341-python-gapminder-animation"
---

## 📍 Libraries & Dataset

This example is based on the famous `gapminder` dataset. It provides the average life expectancy, gdp per capita and population size for more than 100 countries. It is available online [here](https://www.gapminder.org/data/) and I've stored a copy on the gallery [github repo](https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/gapminderData.csv)

Let's load it in python and have a look to the 3 first rows.

```python
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import pandas as pd
import numpy as np

data = pd.read_csv('https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/data/gapminderData.csv')
data['continent'] = pd.Categorical(data['continent'])
data.head()
```

:::output
::output-html{src="./output-1.html"}
:::

## 💭 Bubble chart

Let's build a bubble chart for the first year of the dataset (1952). If you're interested in how to make bubble charts with python, the gallery has a [dedicated section](https://python-graph-gallery.com/bubble-plot/) for it.

Let's build one using the `scatter()` function of `matplotlib`:

```python
fig, ax = plt.subplots(figsize=(10, 10))

# Subset of the data for year 1952
data1952 = data[data.year == 1952]

# Scatterplot
ax.scatter(
    x = data1952['lifeExp'], 
    y = data1952['gdpPercap'], 
    s = data1952['pop']/50000, 
    c = data1952['continent'].cat.codes, 
    cmap = "Accent", 
    alpha = 0.6, 
    edgecolors = "white", 
    linewidth = 2
)
 
# Add titles (main and on axis)
plt.yscale('log')
ax.set_xlabel("Life Expectancy")
ax.set_ylabel("GDP per Capita")
ax.set_title("Year 1952")
ax.set_ylim(100,50000)
ax.set_xlim(30, 75)

plt.show()
```

:::output
![](./output-2.png)
:::

## 🎥 Animation

An animation is basically a set of static images visualized one after the other.

Fortunately, `matplotlib` has a built-in function to create animations: `FuncAnimation`. It requires a **figure** and a function to **update** the figure at each iteration.

The core of the animation is made via the `update()` function that will be called at each iteration. It will update the position of the bubbles according to the year of the dataset. What we have to do is to **subset our dataset** for each year, and update the position of the bubbles accordingly.

```python
fig, ax = plt.subplots(figsize=(10, 10), dpi=120)

def update(frame):
    # Clear the current plot to redraw
    ax.clear()
    
    # Filter data for the specific year
    yearly_data = data.loc[data.year == frame, :]

    # Scatter plot for that year
    ax.scatter(
        x=yearly_data['lifeExp'], 
        y=yearly_data['gdpPercap'], 
        s=yearly_data['pop']/100000,
        c=yearly_data['continent'].cat.codes, 
        cmap="Accent", 
        alpha=0.6, 
        edgecolors="white", 
        linewidths=2
    )

    # Updating titles and layout
    ax.set_title(f"Global Development in {frame}")
    ax.set_xlabel("Life Expectancy")
    ax.set_ylabel("GDP per Capita")
    ax.set_yscale('log')
    ax.set_ylim(100, 100000)
    ax.set_xlim(20, 90)

    return ax

ani = FuncAnimation(fig, update, frames=data['year'].unique())
ani.save('../../static/animations/gapminder-1.gif', fps=1)
```

![](https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/animations/gapminder-1.gif)

You now know how to create a simple animation with matplotlib!

## Smooth animation

The previous animation is a bit rough. We can make it smoother by interpolating the position of the bubbles between two years. This can be done by the `interpolate()` function of the `pandas` library.

The code for the animation stays the same, but we have to update our dataframe before the animation. Let's do it:

```python
interp_data = pd.DataFrame()

multiple = 10
for country in data['country'].unique():
   
   # prepare a temporary dataframe and subset
   temp_df = pd.DataFrame()
   country_df = data[data['country']==country]

   # interpolate the data
   years = np.linspace(country_df['year'].min(), country_df['year'].max(), len(country_df) * multiple-(multiple-1))
   pops = np.linspace(country_df['pop'].min(), country_df['pop'].max(), len(country_df) * multiple-(multiple-1))
   lifeExps = np.linspace(country_df['lifeExp'].min(), country_df['lifeExp'].max(), len(country_df) * multiple-(multiple-1))
   gdps = np.linspace(country_df['gdpPercap'].min(), country_df['gdpPercap'].max(), len(country_df) * multiple-(multiple-1))
   continents = [country_df['continent'].values[0]] * len(years)

   # add the data to the temporary dataframe
   temp_df['year'] = years
   temp_df['pop'] = pops
   temp_df['lifeExp'] = lifeExps
   temp_df['gdpPercap'] = gdps
   temp_df['continent'] = continents
   temp_df['country'] = country

   # append the temporary dataframe to the final dataframe
   interp_data = pd.concat([interp_data, temp_df])
   interp_data['continent'] = pd.Categorical(interp_data['continent'])

interp_data.head()
```

:::output
::output-html{src="./output-3.html"}
:::

The following code is almost the same as before: we only change the `fps` parameter of the `FuncAnimation` function to make the animation display more frames per second.

_Note: this can take a bit of time to compute, depending on your computer._

```python
fig, ax = plt.subplots(figsize=(10, 10), dpi=120)

def update(frame):
    # Clear the current plot to redraw
    ax.clear()
    
    # Filter data for the specific year
    yearly_data = interp_data.loc[interp_data.year == frame, :]

    # Scatter plot for that year
    ax.scatter(
        x=yearly_data['lifeExp'], 
        y=yearly_data['gdpPercap'], 
        s=yearly_data['pop']/100000,
        c=yearly_data['continent'].cat.codes, 
        cmap="Accent", 
        alpha=0.6, 
        edgecolors="white", 
        linewidths=2
    )

    # Updating titles and layout
    ax.set_title(f"Global Development in {round(frame)}")
    ax.set_xlabel("Life Expectancy")
    ax.set_ylabel("GDP per Capita")
    ax.set_yscale('log')
    ax.set_ylim(100, 100000)
    ax.set_xlim(20, 90)

    return ax

ani = FuncAnimation(fig, update, frames=interp_data['year'].unique())
ani.save('../../static/animations/gapminder-2.gif', fps=10)
```

![](https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/animations/gapminder-2.gif)

## Going further

If you want to go further, have a look at this [animation with a stacked area chart](/web-animated-line-chart-with-annotation)
