// Menu content of the top navbar

export type NavItem = { label: string; href: string; logo?: string; description?: string };

// "Tools" menu: the libraries...
export const LIBRARIES: NavItem[] = [
  { label: 'Matplotlib', href: '/matplotlib/', logo: '/img/MatplotlibSmall.png', description: 'The foundation of Python dataviz' },
  { label: 'Seaborn', href: '/seaborn/', logo: '/img/SeabornSmall.png', description: 'Statistical charts, great defaults' },
  { label: 'Plotly', href: '/plotly/', logo: '/img/PlotlySmall.png', description: 'Interactive charts for the web' },
  { label: 'Pandas', href: '/pandas/', logo: '/img/PandasSmallClean.png', description: 'Plot right from your dataframes' },
  { label: 'Plotnine', href: '/plotnine/', logo: '/img/plotnine-small.png', description: 'The grammar of graphics in Python' },
  { label: 'Color Palette Finder', href: '/color-palette-finder/', description: '2,500+ palettes for your charts' },
];

// ... and the most common customization topics
export const MATPLOTLIB_TOPICS: NavItem[] = [
  { label: 'Axis', href: '/matplotlib/#Axis' },
  { label: 'Title', href: '/matplotlib/#Title' },
  { label: 'Legend', href: '/matplotlib/#Legend' },
  { label: 'Subplot', href: '/matplotlib/#Subplot' },
  { label: 'Annotation', href: '/matplotlib/#Annotation' },
  { label: 'Font', href: '/matplotlib/#Font' },
  { label: 'Theme', href: '/matplotlib/#Theme' },
  { label: 'Color', href: '/color-palette-finder/' },
];

export const SEABORN_TOPICS: NavItem[] = [
  { label: 'Title', href: '/seaborn/#Title' },
  { label: 'Axis', href: '/seaborn/#Axis' },
  { label: 'Theme', href: '/seaborn/#Theme' },
];

export const RELATED: NavItem[] = [
  { label: 'Data To Viz', href: 'https://www.data-to-viz.com', description: 'Find the right chart for your data' },
  { label: 'Dataviz Inspiration', href: 'https://www.dataviz-inspiration.com', description: 'Hundreds of beautiful dataviz projects' },
  { label: 'R Graph Gallery', href: 'https://www.r-graph-gallery.com', description: 'The same gallery, with R' },
  { label: 'D3.js Graph Gallery', href: 'https://www.d3-graph-gallery.com', description: 'Interactive charts with D3.js' },
  { label: 'React Graph Gallery', href: 'https://www.react-graph-gallery.com', description: 'Charts with React and D3.js' },
  { label: 'Matplotlib Journey', href: 'https://www.matplotlib-journey.com', description: 'The online course to master Matplotlib' },
];

export const TOP_LINKS: NavItem[] = [
  { label: 'All', href: '/all-charts/' },
  { label: 'Best', href: '/best-python-chart-examples/' },
  { label: 'Libs', href: '/best-dataviz-packages/' },
];
