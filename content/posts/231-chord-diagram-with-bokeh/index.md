---
title: "Chord Diagram with Bokeh"
description: "A <b>chord chart</b> is used for representing the relationships between data points. Each data points are arranged into a <b>circle</b> and their relationships are displayed with <b>chords</b>. This post describes how to draw a chord chart using <b>bokeh</b> library of python."
seoDescription: "Drawing a chord chart using bokeh library of python"
keywords: "python, chart, plot, seaborn, matplotlib, bokeh, chord"
family: "flow"
chartType: "chordDiagram"
interactive: false
slug: "231-chord-diagram-with-bokeh"
---

You can use `Chord` element of holoviews library to produce **chord diagrams**. It uses bokeh and matplotlib libraries as backends. The following example is taken from the [official documentation](http://holoviews.org/reference/elements/bokeh/Chord.html) where you can find more information about the chord element.

```python
# libraries
import pandas as pd
import holoviews as hv
from holoviews import opts, dim
from bokeh.sampledata.les_mis import data

# Should the diagram be plotted with 'bokeh' or 'matplotlib'?
hv.extension('bokeh')
# How large should be the diagram?
hv.output(size=300)

# Data set
nodes = hv.Dataset(pd.DataFrame(data['nodes']), 'index')
links = pd.DataFrame(data['links'])

# Chord diagram
chord = hv.Chord((links, nodes)).select(value=(5, None))
chord.opts(
    opts.Chord(cmap='Category20', edge_cmap='Category20', edge_color=dim('source').str(), 
               labels='name', node_color=dim('index').str()))

# Not needed in a jupyter notebook
# It shows the diagram when run in another IDE or from a python script:
from bokeh.plotting import show
show(hv.render(chord))
```

:::output
::output-html{src="./output-1.html"}

::output-html{src="./output-2.html"}

::output-html{src="./output-3.html"}
:::
