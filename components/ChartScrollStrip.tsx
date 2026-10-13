import Link from 'next/link';

export type StripChart = {
  link: string;
  title: string;
  author: string;
  // Url of the image (square thumbnail)
  src: string;
  alt?: string;
};

// A full width horizontal strip of chart cards, scrollable horizontally, fading on both sides.
// It must be placed in a .wrapper: it breaks out of the content column to span the full page width.
export default function ChartScrollStrip({ charts }: { charts: StripChart[] }) {
  return (
    <div className="full-bleed relative">
      <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-4 noScrollBar">
        {charts.map((chart, i) => (
          <Link key={chart.link + i} href={'/' + chart.link} className="group w-56 shrink-0 snap-start sm:w-64">
            <div className="overflow-hidden rounded-lg border bg-white">
              <img
                src={chart.src}
                alt={chart.alt || chart.title}
                loading="lazy"
                decoding="async"
                className="aspect-square h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <p className="!mt-2 truncate text-sm font-medium leading-5">{chart.title}</p>
            <p className="!mt-0 truncate text-xs text-muted-foreground">{chart.author}</p>
          </Link>
        ))}
      </div>
      {/* Fading edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />
    </div>
  );
}
