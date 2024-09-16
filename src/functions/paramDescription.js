import React from 'react';

export const alphaHowToUse = (
  <p>
    Values range from <code>0</code> (completely transparent) to <code>1</code>{' '}
    (completely opaque).
  </p>
);

export const colorHowToUse = (
  <p>
    Can be a color name, a Hex code, or an RGB value.{' '}
    <a href="/python-colors">Learn more about colors.</a>
  </p>
);

export const zorderDescription = (
  <p>Controls the drawing order of plot elements.</p>
);

export const zorderHowToUse = (
  <p>
    Higher zorder values are drawn on top of lower values. This is useful when
    you want certain elements to appear above others.
  </p>
);

export const hatchHowToUse = (
  <p>
    It must be in one of: <code>&apos;/&apos;</code>, <code>&apos;\&apos;</code>
    , <code>&apos;|&apos;</code>,<code>&apos;-&apos;</code>,{' '}
    <code>&apos;+&apos;</code>, <code>&apos;x&apos;</code>,{' '}
    <code>&apos;o&apos;</code>, <code>&apos;O&apos;</code>,
    <code>&apos;.&apos;</code>, <code>&apos;*&apos;</code>
  </p>
);

export const hueDescription = (
  <p>
    Specify the dataset column to use for color encoding in the chart. It allows
    for grouping and differentiating data points.
  </p>
);

export const hueHowToUse = (
  <p>
    Column name to use for color encoding in the chart. It's usually a
    categorical variable.
  </p>
);

export const dataHowToUse = (
  <div>
    <p>
      It just has to be a <code>pandas.DataFrame</code> (columns are variables),
      <code>numpy.ndarray</code> (rows/columns are variables), or any
      mapping/sequence (dictionaries/lists)
    </p>
    <p>
      Supports both long-form (each variable in its own column) and wide-form
      (variables in separate columns; reshaped internally).
    </p>
  </div>
);

export const dataDescription = (
  <p>
    Dataframe-like (pandas, numpy, polars...) with the columns we want to plot.
  </p>
);

export const linestyleDescription = (
  <p>Determines the style of the line in the plot.</p>
);

export const linestyleHowToUse = (
  <p>
    Common values include '-' (solid), '--' (dashed), ':' (dotted), and '-.'
    (dash-dot).
  </p>
);

export const linewidthDescription = <p>Sets the width of the plotted line.</p>;

export const linewidthHowToUse = (
  <p>
    Larger values create thicker lines. The default value is usually{' '}
    <code>1</code>.
  </p>
);

export const paletteDescription = (
  <p>
    Defines colors for the <code>hue</code> semantic. It can be a list of colors
    or a matplotlib colormap.
  </p>
);

export const paletteHowToUse = (
  <div>
    <p>
      This parameter is used <b>in combination</b> with the <code>hue</code>{' '}
      parameter and will a assign a different color to each category in{' '}
      <code>hue</code>.
    </p>
    <p>
      Moreover, the <a href="/color-palette-finder">pypalettes library</a> can
      help you find the best colors for your chart by providing access to
      thousands of pre-made color palette.
    </p>
  </div>
);
