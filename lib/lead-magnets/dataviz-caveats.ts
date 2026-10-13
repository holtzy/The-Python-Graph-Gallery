// The 25 dataviz caveat cards (source: https://github.com/holtzy/dataviz-caveat-flashcards).
// Images are in public/lead-magnets/dataviz-caveats/: <file>-horiz.webp (1600px), <file>-horiz-800.webp
// and <file>-vert.webp (720px, mobile).

export type Caveat = {
  id: string;
  file: string;
  title: string;
  // Chart types (ids of lib/sectionDescriptions.ts) for which this caveat is the most relevant
  chartTypes: string[];
};

export const DATAVIZ_CAVEATS: Caveat[] = [
  { id: '01', file: '01-rank-your-barplot', title: 'Rank your barplot', chartTypes: ['barplot', 'lollipop'] },
  { id: '02', file: '02-prefer-horizontal-labels', title: 'Prefer horizontal labels', chartTypes: [] },
  { id: '03', file: '03-do-not-cut-y-axis', title: 'Do not cut the Y axis', chartTypes: [] },
  { id: '04', file: '04-histogram-mind-the-bin', title: 'Histogram: mind the bin size', chartTypes: ['histogram', 'density'] },
  {
    id: '05',
    file: '05-boxplots-hide-info',
    title: 'Boxplots hide information',
    chartTypes: ['violin', 'boxplot', 'beeswarm', 'ridgeline'],
  },
  { id: '06', file: '06-use-color-intentionally', title: 'Use color intentionally', chartTypes: [] },
  { id: '07', file: '07-map-bubble-size-to-area', title: 'Map bubble size to area', chartTypes: ['bubbleMap'] },
  { id: '08', file: '08-avoid-moire-effect', title: 'Avoid the moiré effect', chartTypes: [] },
  { id: '09', file: '09-the-spaghetti-chart', title: 'The spaghetti chart', chartTypes: ['line', 'parallel'] },
  { id: '10', file: '10-keep-colors-consistent', title: 'Keep colors consistent', chartTypes: [] },
  { id: '11', file: '11-minimize-use-of-legends', title: 'Minimize the use of legends', chartTypes: [] },
  { id: '12', file: '12-avoid-counterintuitive', title: 'Avoid counterintuitive visuals', chartTypes: [] },
  { id: '13', file: '13-whats-wrong-with-pie', title: "What's wrong with pie charts?", chartTypes: ['pie', 'donut'] },
  { id: '14', file: '14-error-bars-on-barplot', title: 'Error bars on barplots', chartTypes: [] },
  { id: '15', file: '15-dual-y-axis', title: 'Dual Y axis', chartTypes: ['timeseries'] },
  { id: '16', file: '16-radial-bar-chart', title: 'Radial bar charts', chartTypes: ['circularBarplot'] },
  { id: '17', file: '17-connect-the-dots', title: 'Connect the dots: reveal the pattern', chartTypes: ['connectedScatter'] },
  { id: '18', file: '18-z-index-matters', title: 'Z-index matters', chartTypes: ['bubble'] },
  { id: '19', file: '19-avoid-3d', title: 'Avoid 3D', chartTypes: ['3d'] },
  { id: '20', file: '20-upset-plots', title: 'Upset plots', chartTypes: ['venn'] },
  { id: '21', file: '21-optimizing-background-colors', title: 'Optimizing background colors', chartTypes: [] },
  { id: '22', file: '22-color-contrast', title: 'Color contrast', chartTypes: ['colors'] },
  { id: '23', file: '23-avoid-pure-color', title: 'Avoid pure colors', chartTypes: [] },
  { id: '24', file: '24-stacked-charts-are-hard', title: 'Stacked charts are hard to read', chartTypes: ['stackedArea', 'stream'] },
  { id: '25', file: '25-avoid-cherry-picking', title: 'Avoid cherry-picking', chartTypes: [] },
];

export const CAVEATS_IMG_DIR = '/lead-magnets/dataviz-caveats';

// The caveat matching a chart type (e.g. 'violin' -> 'Boxplots hide information')
export const caveatForChartType = (chartType?: string): Caveat | undefined =>
  chartType ? DATAVIZ_CAVEATS.find((c) => c.chartTypes.includes(chartType)) : undefined;
