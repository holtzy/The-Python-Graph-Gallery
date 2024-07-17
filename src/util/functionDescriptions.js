import React from 'react';
import CodeChunk from '../components/CodeChunk';

export const functionDescriptions = {
  kdeplot: {
    description: (
      <>
        <p>
          The <code>kdeplot()</code> function of{' '}
          <a href="https://python-graph-gallery.com/seaborn/">seaborn</a>{' '}
          generates Kernel Density Estimates to depict the probability density
          function of a continuous variable. It outputs a smoothed curve
          representing the distribution of the data.
        </p>
      </>
    ),
    docUrl: 'https://seaborn.pydata.org/generated/seaborn.kdeplot.html',
    basicUsage: (
      <CodeChunk>
        {`
# library
import seaborn as sns

# Data
df = sns.load_dataset('iris')

# Default density plot
sns.kdeplot(data=df, x='sepal_width')
`.trim()}
      </CodeChunk>
    ),
    // PARAMETERS
    parameters: [
      ////////////////////////////////////////////////////////////////////////
      {
        name: 'fill',
        description: (
          <p>
            <code>fill</code> controls the color under the curve. You can
            provide a name, some rgb, some hsl.
          </p>
        ),
        basicUsage: (
          <CodeChunk hasWhiteBackground>
            {`
sns.kdeplot(data=df, x='sepal_width', color="purple")
`.trim()}
          </CodeChunk>
        ),
        type: <p>string</p>,
        img: '71_Shaded_density_plot_Seaborn',
        post: '71-density-plot-with-shade-seaborn',
      },
      ////////////////////////////////////////////////////////////////////////
      {
        name: 'bw_adjust',
        description: (
          <p>
            <code>bw_adjust</code> determines the smoothness of the graph. The
            higher the value, the smoother the graph.
          </p>
        ),
        basicUsage: (
          <CodeChunk hasWhiteBackground>
            {`
sns.kdeplot(data=df, x='sepal_width', bw_adjust=0.2)
`.trim()}
          </CodeChunk>
        ),
        type: <p>float</p>,
        img: '73_Control_bandwidth_densityplot_Seaborn2',
        post: '73-control-bandwidth-of-seaborn-density-plot',
      },
      ////////////////////////////////////////////////////////////////////////
      {
        name: 'cumulative',
        description: (
          <p>
            <code>cumulative</code> determines whether a cumulative distribution
            function should be estimated.
          </p>
        ),
        basicUsage: (
          <CodeChunk hasWhiteBackground>
            {`
sns.kdeplot(data=df, x='sepal_width', cumulative=True)
`.trim()}
          </CodeChunk>
        ),
        type: <p>bool</p>,
        img: '70-basic-density-plot-with-seaborn-2',
        post: '70-basic-density-plot-with-seaborn',
      },
      ////////////////////////////////////////////////////////////////////////
      {
        name: 'hue',
        description: (
          <p>
            <code>hue</code> is the name of the variable used to split the
            estimate into its categories.
          </p>
        ),
        basicUsage: (
          <CodeChunk hasWhiteBackground>
            {`
sns.kdeplot(data=df, x='sepal_width', hue='species')
`.trim()}
          </CodeChunk>
        ),
        type: <p>string</p>,
        img: '74_density_plot_multi_variables',
        post: '70-basic-density-plot-with-seaborn',
      },
    ],
  },
  //
  //
  //
  //
  //
  //     VIOLIN
  //
  //
  //
  //
  //
  violin: {
    description: '',
    docUrl: 'https://seaborn.pydata.org/generated/seaborn.violinplot.html',
    basicUsage: '',
    parameters: [
      {
        name: 'width',
        description: 'color under the curve',
        type: 'boolean',
        relatedChart: '70_deffffed',
      },
      {
        name: 'bw',
        description: 'control how density is computed',
        type: 'boolean',
        relatedChart: '70_deffffed',
      },
      {
        name: 'color',
        description: 'controls the color',
        type: 'string',
        relatedChart: '70_deffffed',
      },
    ],
  },
};
