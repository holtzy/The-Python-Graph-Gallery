---
title: "Introduction to candlestick chart"
description: "<a href='https://python-graph-gallery.com/timeseries/'>A candlestick chart</a>, created using the Matplotlib library in Python, is a graphical representation of <b>financial data</b>. It displays price movements over a specific time period, typically used in stock market analysis. Candlestick charts are composed of individual <i>'candlesticks</i>', each representing the <b>opening, closing, high, and low</b> prices for a given time interval. <br><br>These candlesticks are displayed on a two-dimensional coordinate system, with one axis representing time and the other axis representing price.<br>  <code>Mplfinance</code>, a submodule of the <a href='https://python-graph-gallery.com/matplotlib/'>matplotlib</a> library, provides the capability to create candlestick charts easily. In this post, we'll create simple <a href='https://python-graph-gallery.com/timeseries/'> candlestick charts</a> with this library. "
seoDescription: "How to create a candlestick plot with matplotlib and mplfinance"
keywords: "candle, stick, matplotlib, mplfinance, plot, time, series"
family: "evolution"
chartType: "timeseries"
interactive: false
slug: "548-intro-candle-stick-matplotlib"
---

## Libraries

Creating [Candlestick charts](https://python-graph-gallery.com/timeseries/) with matplotlib requires a library called `mplfinance`, built by [matplotlib](https://python-graph-gallery.com/matplotlib/).

To install `mplfinance`, you can use the **following command** in your command-line interface (such as `Terminal` or `Command Prompt`):

`pip install mplfinance`

And since we'll load **data from yahoo finance**, we need the `yfinance` library:

`pip install yfinance`

```python
import mplfinance as mpf
import yfinance as yf
```

## Dataset

[Candlestick charts](https://python-graph-gallery.com/timeseries/) are mainly used to represent **financial data**, especially stock prices.

In this post, we'll load Apple's share price data, directly from our **Python** code via the `yfinance` library. All we need to do is define the desired **start** and **end** data (`yyyy-mm-dd` format), and the **ticker** or symbol associated with this company (in this case `"AAPL"`).

Our dataset must have the **characteristics** needed to produce our graph easily:
- be a pandas dataframe
- a date index
- an Open column
- a High column
- a Low column
- a Close column

The **tickers** can be found on easily on [yahoo finance](https://finance.yahoo.com).

According to the documentation of [mplfinance](https://github.com/matplotlib/mplfinance): *"Non-trading days are simply not shown"*.

```python
# Define the stock symbol and date range
stock_symbol = "AAPL"  # Example: Apple Inc.
start_date = "2022-01-01"
end_date = "2022-03-30"

# Load historical data
stock_data = yf.download(stock_symbol,
                         start=start_date, end=end_date)
```

:::output
```text
[*********************100%***********************]  1 of 1 completed
```
:::

## Simplest candlestick

Once we've opened our dataset, we'll now **create the graph**.

Finally, if our dataset has the **properties listed above**, we simply call mplfinance's `plot()` function.

```python
mpf.plot(stock_data)
```

:::output
![](./output-1.png)
:::

## Candle for each date

To get **real candlesticks**, all we have to do is specify the argument `type='candle'` in the `plot()` function. 

A candlestick turns **black** if the last price is **higher** than the previous close, and it goes **white** if the last price is **lower** than the previous close.

```python
mpf.plot(stock_data, type='candle')
```

:::output
![](./output-2.png)
:::

## Going further

This post explains how to create a candlestick chart with [matplotlib](https://python-graph-gallery.com/matplotlib/).

For more examples of **how to create or customize** your time series plots, see the [time series section](https://python-graph-gallery.com/timeseries/). You may also be interested in how to [add moving averages on top](https://python-graph-gallery.com/549-candle-stick-with-moving-average/).
