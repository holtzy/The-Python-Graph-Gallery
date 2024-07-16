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
sns.kdeplot(df['sepal_width'])
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
            <code>fill</code> controls the color under the curve.
          </p>
        ),
        basicUsage: (
          <CodeChunk hasWhiteBackground>
            {`
sns.kdeplot(df['sepal_width'], color="purple")
`.trim()}
          </CodeChunk>
        ),
        type: (
          <p>
            A string that provides the desired color. You can provide a name,
            some rgb, some hsl. Read this post to know more.
          </p>
        ),
        img: '70_Basic_density_plot_Seaborn',
        post: '70-basic-density-plot-with-seaborn',
      },
      ////////////////////////////////////////////////////////////////////////
      {
        name: 'bw',
        description: (
          <p>
            <code>bw</code> controls this amazing things
          </p>
        ),
        basicUsage: (
          <CodeChunk hasWhiteBackground>
            {`
sns.kdeplot(df['sepal_width'], bw=72)
`.trim()}
          </CodeChunk>
        ),
        type: <p>I think it's a number but I'm not sure</p>,
        img: '73_Control_bandwidth_densityplot_Seaborn1',
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
