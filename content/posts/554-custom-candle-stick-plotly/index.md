---
title: "Customize candlestick chart with plotly"
description: "<a href='https://python-graph-gallery.com/candlestick/'>A candlestick chart</a>, created using the <a href='https://python-graph-gallery.com/plotly/'>Plotly</a> library in Python, is a graphical representation of <b>financial data</b>. It displays price movements over a specific time period, typically used in stock market analysis. Candlestick charts are composed of individual <i>'candlesticks'</i>, each representing the <b>opening, closing, high, and low</b> prices for a given time interval. These candlesticks are displayed on a two-dimensional coordinate system, with one axis representing time and the other axis representing price. <br><br>  <code>Plotly</code> has a <code>Candlestick()</code> function that provides the capability to create candlestick charts easily. In this post, we'll see how to customize <a href='https://python-graph-gallery.com/candlestick/'> candlestick charts</a> with this library. You might first want to take a look at this <a href='https://python-graph-gallery.com/553-intro-candle-stick-plotly/'>intro to candlestick</a> with plotly"
seoDescription: "How to customize a candlestick chart with plotly"
keywords: "candlestick, plotly, finance, plot, chart, customize"
family: "evolution"
chartType: "candlestick"
slug: "554-custom-candle-stick-plotly"
---

## Libraries

First, we need to install the **plotly**:

`pip install plotly`

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
stock_symbol = "^FCHI"  # Example: CAC40 (largest French companies)
start_date = "2022-01-01"
end_date = "2022-03-30"

# Load historical data
stock_data = yf.download(stock_symbol,
                         start=start_date, end=end_date)
```

:::output
```text
[*********************100%%**********************]  1 of 1 completed
```
:::

## Candlestick with custom colors

Once we've opened our dataset, we'll now **create the graph**. We have to **specify which column to use** for opening, closing etc. 

In order to **change the colors**, we need to add the `increasing_line_color` and `decreasing_line_color` arguments with the desired colors.

```python
fig = go.Figure(data=[go.Candlestick(
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close'],
                increasing_line_color = 'purple',
                decreasing_line_color = 'orange')])

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
fig.write_html("../../static/interactiveCharts/candlestick-plotly-custom.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-custom.html" 
    width="800" 
    height="600" 
    title="custom candlestick with plotly" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-1.html"}
:::

## Custom layout

-  **Title**: Added a title to the chart using `update_layout`

- **Background Color**: Set the background color of the plot to white

- **Grid Lines**: Added grid lines to both the `x` and `y` axes for easier reference

- **Candlestick Border Customization**: Customized the color and width of the candlestick borders for increasing (`purple`) and decreasing (`orange`) periods

- **Range Slider**: Enabled the range slider for zooming in and out on the `x-axis`. Customized its appearance by setting the thickness, background color, border color, and border width

These customizations enhance the aesthetics and functionality of your candlestick chart, making it more **informative** and visually **appealing**.

```python
fig = go.Figure(data=[go.Candlestick(
                x = stock_data.index, # date values
                open = stock_data['Open'],
                high = stock_data['High'],
                low = stock_data['Low'],
                close = stock_data['Close'],
                increasing_line_color = 'purple',
                decreasing_line_color = 'orange',
                name='Candlesticks')])

# Add a title
fig.update_layout(
    title="Stock Price Candlestick Chart",
    title_x=0.5,  # Center the title

    # Customize the font and size of the title
    title_font=dict(size=24, family="Arial"),

    # Set the background color of the plot
    plot_bgcolor='white',

    # Customize the grid lines
    xaxis=dict(showgrid=True, gridwidth=1, gridcolor='lightgray'),
    yaxis=dict(showgrid=True, gridwidth=1, gridcolor='lightgray'),
)

# Add a range slider and customize it
fig.update_layout(
    xaxis_rangeslider_visible=True,  # Show the range slider

    # Customize the range slider's appearance
    xaxis_rangeslider=dict(
        thickness=0.05,  # Set the thickness of the slider
        bordercolor='black',  # Set the border color
        borderwidth=1,  # Set the border width
    )
)

# Set layout size
fig.update_layout(
    autosize=False,
    width=700,  
    height=500)
```

Now, let's save the graph in a HTML file and display it in this website using an `iframe`

```python
# save this file as a standalong html file:
fig.write_html("../../static/interactiveCharts/candlestick-plotly-custom-2.html")
```

```python
%%html
<iframe 
    src="../../interactiveCharts/candlestick-plotly-custom-2.html" 
    width="800" 
    height="600" 
    title="custom candlestick with plotly 2" 
    style="border:none">
</iframe>
```

:::output
::output-html{src="./output-2.html"}
:::

## Going further

This post explains how to create a candlestick chart with [plotly](https://python-graph-gallery.com/plotly/).

For more examples of **how to create or customize** your candlesticks plots, see the [candlestick section](https://python-graph-gallery.com/candlestick/). You may also be interested in how to [add moving averages to a plotly candlestick chart](https://python-graph-gallery.com/555-candle-stick-with-moving-average-plotly/).
