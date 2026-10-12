---
title: "Introduction to candlestick chart with plotly"
description: "<a href='https://python-graph-gallery.com/candlestick/'>A candlestick chart</a>, created using the <a href='https://python-graph-gallery.com/plotly/'>Plotly</a> library in Python, is a graphical representation of <b>financial data</b>. It displays price movements over a specific time period, typically used in stock market analysis. Candlestick charts are composed of individual <i>'candlesticks'</i>, each representing the <b>opening, closing, high, and low</b> prices for a given time interval. These candlesticks are displayed on a two-dimensional coordinate system, with one axis representing time and the other axis representing price. <br><br>  <code>Plotly</code> has a <code>Candlestick()</code> function that provides the capability to create candlestick charts easily. In this post, we'll create simple <a href='https://python-graph-gallery.com/candlestick/'> candlestick charts</a> with this library. "
seoDescription: "How to create a candlestick plot with plotly"
keywords: "candlestick, plotly, finance, plot, chart"
family: "evolution"
chartType: "candlestick"
interactive: false
slug: "553-intro-candle-stick-plotly"
---

## Libraries

First, we need to install the **plotly**:

`pip install plotly`

In this post, we'll use the `object oriented` API from plotly: you can find more info of why [here](https://python-graph-gallery.com/plotly/).

And since we'll load **data from yahoo finance**, we need the `yfinance` library:

`pip install yfinance`

```python
import plotly.graph_objects as go
import yfinance as yf
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
stock_symbol = "GOOGL"  # Example: Google
start_date = "2021-01-01"
end_date = "2021-03-30"

# Load historical data
stock_data = yf.download(stock_symbol,
                         start=start_date, end=end_date)
```

:::output
```text
[*********************100%%**********************]  1 of 1 completed
```
:::

## Simple candlestick

Once we've opened our dataset, we'll now **create the graph**.

We have to **specify which column to use** for opening, closing etc. In our case, it's pretty intuitive:

```python
fig = go.Figure(data=[go.Candlestick(
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close'])])

# Mask a default range slider
fig.update_layout(xaxis_rangeslider_visible=False)

# Set layout size
fig.update_layout(
    autosize=False,
    width=700,
    height=500)
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/candlestick-plotly-basic.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-basic.html" 
    width="800" 
    height="600" 
    title="candlestick with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Candle chart with a range slider

[Plotly](https://python-graph-gallery.com/plotly/) lets us easily **add a slider** below the graph, which defines the date range displayed on the graph. 

To do this, simply **remove** the line of code from the graph above that specified that the slider should be hidden.

```python
fig = go.Figure(data=[go.Candlestick(
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close'])])

# Set layout size
fig.update_layout(
    autosize=False,
    width=700,
    height=500)

# Display the plot
fig.show()
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/candlestick-plotly-basic-2.html")
```

```html
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-basic-2.html" 
    width="800" 
    height="600" 
    title="candlestick with plotly 2" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Going further

This post explains how to create a candlestick chart with [plotly](https://python-graph-gallery.com/plotly/).

For more examples of **how to create or customize** your candlesticks plots, see the [candlestick section](https://python-graph-gallery.com/candlestick/). You may also be interested in how to [custom style of a plotly candlestick chart](https://python-graph-gallery.com/554-custom-candle-stick-plotly/).
