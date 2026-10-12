import Link from 'next/link';

export type StripChart = {
  link: string;
  title: string;
  author: string;
  // Url of the image (square thumbnail)
  src: string;
  alt?: string;
};

// A full width horizontal strip of chart cards, scrollable horizontally.
// It must be placed in a .wrapper: it breaks out of the content column but stays aligned with it.
export default function ChartScrollStrip({ charts }: { charts: StripChart[] }) {
  return (
    <div className="full-bleed">
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 noScrollBar"
        // Align the first card with the content column (780px wide, the wrapper already has a 20px padding)
        style={{ paddingInline: 'max(0px, calc((100% - 780px) / 2))', scrollPaddingInline: 'max(0px, calc((100% - 780px) / 2))' }}
      >
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
    </div>
  );
}
