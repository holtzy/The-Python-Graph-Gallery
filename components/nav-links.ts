// Menu content of the top navbar

export type NavItem = { label: string; href: string; logo?: string; isMain?: boolean };

export const TOOLS_MENU: NavItem[][] = [
  [
    { label: 'Matplotlib', href: '/matplotlib/', logo: '/img/MatplotlibSmall.png', isMain: true },
    { label: 'Axis', href: '/matplotlib/#Axis' },
    { label: 'Title', href: '/matplotlib/#Title' },
    { label: 'Legend', href: '/matplotlib/#Legend' },
    { label: 'Subplot', href: '/matplotlib/#Subplot' },
    { label: 'Annotation', href: '/matplotlib/#Annotation' },
    { label: 'Font', href: '/matplotlib/#Font' },
    { label: 'Theme', href: '/matplotlib/#Theme' },
    { label: 'Color', href: '/color-palette-finder/' },
  ],
  [
    { label: 'Seaborn', href: '/seaborn/', logo: '/img/SeabornSmall.png', isMain: true },
    { label: 'Title', href: '/seaborn/#Title' },
    { label: 'Axis', href: '/seaborn/#Axis' },
    { label: 'Theme', href: '/seaborn/#Theme' },
  ],
  [{ label: 'Plotly', href: '/plotly/', logo: '/img/PlotlySmall.png', isMain: true }],
  [{ label: 'Pandas', href: '/pandas/', logo: '/img/PandasSmallClean.png', isMain: true }],
  [{ label: 'Plotnine', href: '/plotnine/', logo: '/img/plotnine-small.png', isMain: true }],
  [{ label: 'Color Palette Finder', href: '/color-palette-finder/', isMain: true }],
];

export const RELATED_MENU: NavItem[][] = [
  [
    { label: 'Data To Viz', href: 'https://www.data-to-viz.com', isMain: true },
    { label: 'Dataviz Inspiration', href: 'https://www.dataviz-inspiration.com', isMain: true },
  ],
  [
    { label: 'R Graph Gallery', href: 'https://www.r-graph-gallery.com', isMain: true },
    { label: 'D3.js Graph Gallery', href: 'https://www.d3-graph-gallery.com', isMain: true },
    { label: 'React Graph Gallery', href: 'https://www.react-graph-gallery.com', isMain: true },
  ],
  [{ label: 'Matplotlib Journey', href: 'https://www.matplotlib-journey.com', isMain: true }],
];

export const TOP_LINKS: NavItem[] = [
  { label: 'All', href: '/all-charts/' },
  { label: 'Best', href: '/best-python-chart-examples/' },
  { label: 'Libs', href: '/best-dataviz-packages/' },
];
