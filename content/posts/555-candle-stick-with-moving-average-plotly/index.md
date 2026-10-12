---
title: "Candlestick chart with moving averages"
description: "<a href='https://python-graph-gallery.com/candlestick/'>A candlestick chart</a>, created using the <a href='https://python-graph-gallery.com/plotly/'>Plotly</a> library in Python, is a graphical representation of <b>financial data</b>. It displays price movements over a specific time period, typically used in stock market analysis. Candlestick charts are composed of individual <i>'candlesticks'</i>, each representing the <b>opening, closing, high, and low</b> prices for a given time interval. These candlesticks are displayed on a two-dimensional coordinate system, with one axis representing time and the other axis representing price. <br><br>  <code>Plotly</code> has a <code>Candlestick()</code> function that provides the capability to create candlestick charts easily. In this post, we'll see how to add moving averages in <a href='https://python-graph-gallery.com/candlestick/'> candlestick charts</a> with this library. You might first want to take a look at <a href='https://python-graph-gallery.com/553-intro-candle-stick-plotly/'>how to customize a candlestick chart</a> (color, layout...) with plotly."
seoDescription: "How to create a candlestick chart with moving averages with plotly"
keywords: "candlestick, plotly, moving, rolling, average, chart, finance"
family: "evolution"
chartType: "candlestick"
slug: "555-candle-stick-with-moving-average-plotly"
---

## Libraries

First, we need to install the **plotly**:

`pip install plotly`

And since we'll load **data from yahoo finance**, we need the `yfinance` library:

`pip install yfinance`

We'll also need the `pandas` module to calculate the moving average.

```python
import plotly.graph_objects as go
import yfinance as yf
import pandas as pd
```

## Dataset

[Candlestick charts](https://python-graph-gallery.com/candlestick/) are mainly used to represent **financial data**, especially stock prices.

In this post, we'll load Apple's share price data, directly from our **Python** code via the `yfinance` library. All we need to do is define the desired **start** and **end** data (`yyyy-mm-dd` format), and the **ticker** or symbol associated with this company (in this case `"AAPL"`).

Our dataset must have the **characteristics** needed to produce our graph easily:
- be a pandas dataframe
- a date index
- an Open column
- a High column
- a Low column
- a Close column

The **tickers** can be found on easily on [yahoo finance](https://finance.yahoo.com).

```python
# Define the stock symbol and date range
stock_symbol = "^FCHI"  # Example: CAC40 (largest French companies)
start_date = "2020-01-01"
end_date = "2020-03-30"

# Load historical data
stock_data = yf.download(stock_symbol,
                         start=start_date, end=end_date)
```

:::output
```text
[*********************100%%**********************]  1 of 1 completed
```
:::

Once we have our dataset, we just need to **calculate the moving averages**. Thanks to the `rolling()` function from [pandas](https://python-graph-gallery.com/pandas/), it's actually pretty easy:

```python
# Moving average over a window of 3 and 8
stock_data['moving3'] = stock_data['Close'].rolling(3).mean()
stock_data['moving8'] = stock_data['Close'].rolling(8).mean()
```

## Candlestick with one moving average

Once we've opened our dataset, we'll now **create the graph**. We have to **specify which column to use** for opening, closing etc. 

To add the moving average, all we need to do is add an `Scatter` to the `data` argument, and specify the values on the **x-axis** (in this case, time) and those on the **y-axis** (the moving average calculated previously).

```python
fig = go.Figure(data=[go.Candlestick(
                
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close']),
                      
                      # Add the moving average
                      go.Scatter(x=stock_data['moving3'].index,
                                 y=stock_data['moving3'])
                     ])

# Mask a default range slider
fig.update_layout(xaxis_rangeslider_visible=False)

# Set layout size
fig.update_layout(
    autosize=False,
    width=700,
    height=500,
    showlegend=False)
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/candlestick-plotly-moving-average.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-moving-average.html" 
    width="800" 
    height="600" 
    title="candlestick with moving average" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Multiple moving averages

You can easily add **as many moving averages as you want** by adding arguments when creating the figure. In our case, we'll add the **8-day** moving average.

```python
fig = go.Figure(data=[go.Candlestick(
                
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close']),
                      
                      # Add the moving average
                      go.Scatter(x=stock_data['moving3'].index,
                                 y=stock_data['moving3']),
                      go.Scatter(x=stock_data['moving8'].index,
                                 y=stock_data['moving8'])
                     ])

# Mask a default range slider
fig.update_layout(xaxis_rangeslider_visible=False)

# Set layout size
fig.update_layout(
    autosize=False,
    width=700,
    height=500,
    showlegend=False)
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/candlestick-plotly-moving-average-2.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-moving-average-2.html" 
    width="800" 
    height="600" 
    title="candlestick with moving average 2" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Custom style of the moving averages

To make our graph **easier to read** and **more informative**, we can change the `colors` of the bars and moving averages.

- **change color**: add a `line` argument (dictionnary) with the properties wanted (color, width and shape)
- **add legend**: add a `name` argument with the text we want

```python
fig = go.Figure(data=[go.Candlestick(
                
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close'],
                
                # color or bars
                increasing_line_color = 'limegreen',
                decreasing_line_color = 'orangered',
                showlegend=False), 
                      
                      # Add the moving average
                      go.Scatter(x=stock_data['moving3'].index,
                                 y=stock_data['moving3'],
                                 line=dict(color='gray',
                                           width=1,
                                           shape='spline'), # smooth the line
                                 name='MA3'),
                      
                      go.Scatter(x=stock_data['moving8'].index,
                                 y=stock_data['moving8'],
                                 line=dict(color='black',
                                           width=1,
                                           shape='spline'), # smooth the line
                                 name='MA8')
                     ])

# Mask a default range slider
fig.update_layout(xaxis_rangeslider_visible=False)

# Set layout size
fig.update_layout(
    autosize=False,
    width=600,
    height=500,
    legend=dict(
        x=0.82,  # Adjust the legend's x position
        y=0.98,  # Adjust the legend's y position
        font=dict(size=12)  # Customize font size
    )
)
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/candlestick-plotly-moving-average-3.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-moving-average-3.html" 
    width="800" 
    height="600" 
    title="candlestick with moving average 3" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-3.html"}
:::

## Going further

This post explains how to create a candlestick chart with [plotly](https://python-graph-gallery.com/plotly/).

For more examples of **how to create or customize** your candlestick plots, see the [candlestick section](https://python-graph-gallery.com/candlestick/). You may also be interested in how to [custom style of a plotly candlestick chart](https://python-graph-gallery.com/554-custom-candle-stick-plotly/).
