// The 61 dataviz caveat cards (source: https://github.com/holtzy/dataviz-caveat-flashcards).
// Images (portrait version, 720x1440) are in public/lead-magnets/dataviz-caveats/<file>-vert.webp

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
  { id: '03', file: '03-do-not-cut-y-axis', title: 'Do not cut the y-axis', chartTypes: [] },
  {
    id: '04',
    file: '04-histogram-mind-the-bin',
    title: 'Histograms: mind the bin size',
    chartTypes: ['histogram', 'density'],
  },
  {
    id: '05',
    file: '05-boxplots-hide-info',
    title: 'Boxplots hide information',
    chartTypes: ['violin', 'boxplot', 'beeswarm', 'ridgeline'],
  },
  { id: '06', file: '06-use-color-intentionally', title: 'Use color intentionally', chartTypes: [] },
  {
    id: '07',
    file: '07-map-bubble-size-to-area',
    title: 'Size bubbles by area, not radius',
    chartTypes: ['bubbleMap'],
  },
  { id: '08', file: '08-avoid-moire-effect', title: 'Avoid the moiré effect with lollipops', chartTypes: [] },
  { id: '09', file: '09-the-spaghetti-chart', title: 'The spaghetti chart', chartTypes: ['line', 'parallel'] },
  { id: '10', file: '10-keep-colors-consistent', title: 'Keep colors consistent across charts', chartTypes: [] },
  { id: '11', file: '11-minimize-use-of-legends', title: 'Minimize the use of legends', chartTypes: [] },
  { id: '12', file: '12-avoid-counterintuitive', title: 'Avoid counterintuitive visuals', chartTypes: [] },
  { id: '13', file: '13-whats-wrong-with-pie', title: "What's wrong with pie charts?", chartTypes: ['pie', 'donut'] },
  { id: '14', file: '14-error-bars-on-barplot', title: 'Error bars on barplots', chartTypes: [] },
  { id: '15', file: '15-dual-y-axis', title: 'Dual y-axis', chartTypes: ['timeseries'] },
  {
    id: '16',
    file: '16-radial-bar-chart',
    title: 'Radial bar charts distort perception',
    chartTypes: ['circularBarplot'],
  },
  { id: '17', file: '17-connect-the-dots', title: 'Connect the dots', chartTypes: ['connectedScatter'] },
  { id: '18', file: '18-z-index-matters', title: 'Z-index matters', chartTypes: ['bubble'] },
  { id: '19', file: '19-avoid-3d', title: 'Avoid 3D', chartTypes: ['3d'] },
  { id: '20', file: '20-upset-plots', title: 'UpSet plots', chartTypes: ['venn'] },
  { id: '21', file: '21-optimizing-background-colors', title: 'Optimize background colors', chartTypes: [] },
  { id: '22', file: '22-color-contrast', title: 'Color contrast', chartTypes: ['colors'] },
  { id: '23', file: '23-avoid-pure-color', title: 'Avoid pure, flashy colors', chartTypes: [] },
  {
    id: '24',
    file: '24-stacked-charts-are-hard',
    title: 'Stacked charts are hard to read',
    chartTypes: ['stackedArea', 'stream'],
  },
  { id: '25', file: '25-avoid-cherry-picking', title: 'Avoid cherry-picking data', chartTypes: [] },
  { id: '26', file: '26-dont-move-countries', title: "Don't move countries around", chartTypes: [] },
  { id: '27', file: '27-beware-mercator', title: 'Beware of the Mercator projection', chartTypes: [] },
  { id: '28', file: '28-scatter-plot-aspect-ratio', title: "Mind your scatter plot's shape", chartTypes: [] },
  { id: '29', file: '29-draw-proportions-accurately', title: 'Draw proportions accurately', chartTypes: [] },
  { id: '30', file: '30-readable-date-axis', title: 'Make date axes easy to follow', chartTypes: [] },
  {
    id: '31',
    file: '31-sequential-palette-for-numbers',
    title: 'Use a sequential palette for numbers',
    chartTypes: [],
  },
  { id: '32', file: '32-share-the-y-axis', title: 'Share the y-axis to compare charts', chartTypes: [] },
  { id: '33', file: '33-too-many-colors', title: 'Too many colors kill the story', chartTypes: [] },
  { id: '34', file: '34-distinct-colors-for-groups', title: "Don't use a gradient for groups", chartTypes: [] },
  { id: '35', file: '35-align-everything', title: 'Align everything with something', chartTypes: [] },
  { id: '36', file: '36-labels-off-the-data', title: "Don't put labels on top of the data", chartTypes: [] },
  { id: '37', file: '37-two-fonts-max', title: 'Two fonts are enough', chartTypes: [] },
  { id: '38', file: '38-remove-the-box', title: 'Do you really need that box?', chartTypes: [] },
  { id: '39', file: '39-font-size-matters', title: 'Font size matters', chartTypes: [] },
  { id: '40', file: '40-group-what-belongs-together', title: 'Group what belongs together', chartTypes: [] },
  { id: '41', file: '41-normalize-your-maps', title: 'Normalize your maps', chartTypes: ['choropleth'] },
  { id: '42', file: '42-respect-time-intervals', title: 'Respect time intervals', chartTypes: [] },
  { id: '43', file: '43-show-the-sample-size', title: 'Show the sample size', chartTypes: [] },
  { id: '44', file: '44-avoid-the-rainbow-palette', title: 'Avoid the rainbow palette', chartTypes: [] },
  { id: '45', file: '45-diverging-palette', title: 'Diverging data, diverging palette', chartTypes: [] },
  { id: '46', file: '46-think-of-colorblind-readers', title: 'Think of colorblind readers', chartTypes: [] },
  { id: '47', file: '47-reorder-your-heatmap', title: 'Reorder your heatmap', chartTypes: ['heatmap', 'correlogram'] },
  {
    id: '48',
    file: '48-beware-of-overplotting',
    title: 'Beware of overplotting',
    chartTypes: ['scatter', 'hexbin', 'density2d'],
  },
  { id: '49', file: '49-make-the-title-say-something', title: 'Make the title say something', chartTypes: [] },
  { id: '50', file: '50-round-your-numbers', title: 'Round your numbers', chartTypes: [] },
  { id: '51', file: '51-show-missing-data', title: 'Show missing data as missing', chartTypes: [] },
  { id: '52', file: '52-small-regions-disappear', title: "Don't let small regions disappear", chartTypes: [] },
  { id: '53', file: '53-maybe-you-dont-need-a-map', title: "Maybe you don't need a map", chartTypes: ['map'] },
  { id: '54', file: '54-two-groups-try-a-dumbbell', title: 'Two groups? Try a dumbbell plot', chartTypes: [] },
  { id: '55', file: '55-annotate-your-chart', title: 'Annotation is crucial', chartTypes: [] },
  { id: '56', file: '56-simpsons-paradox', title: "Beware of Simpson's paradox", chartTypes: [] },
  { id: '57', file: '57-circular-barplot-distortion', title: 'Use circular barplots with care', chartTypes: [] },
  { id: '58', file: '58-use-margins-between-charts', title: 'Use margins between charts', chartTypes: [] },
  { id: '59', file: '59-link-your-charts', title: 'Link charts that share an axis', chartTypes: [] },
  { id: '60', file: '60-dont-label-every-tick', title: "Don't label every tick", chartTypes: [] },
  { id: '61', file: '61-declutter-less-is-more', title: 'Declutter: less is more', chartTypes: [] },
];

export const CAVEATS_IMG_DIR = '/lead-magnets/dataviz-caveats';

// The caveat matching a chart type (e.g. 'violin' -> 'Boxplots hide information')
export const caveatForChartType = (chartType?: string): Caveat | undefined =>
  chartType ? DATAVIZ_CAVEATS.find((c) => c.chartTypes.includes(chartType)) : undefined;
