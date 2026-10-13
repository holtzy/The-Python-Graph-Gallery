import KitForm from './KitForm';
import { getGraphImage } from '@/lib/images';

// A few of the best charts of the gallery, shown as a mosaic
const MOSAIC = [
  'web-waffle-chart-with-groups-evolution-square',
  'web-choropleth-map-with-histogram-square',
  'web-circular-barplot-with-matplotlib-square',
  'web-small-multiple-with-highlights-square',
  'web-lollipop-with-colormap-and-arrow-square',
  'web-stacked-area-with-inflexion-arrows-square',
  'web-heatmap-and-radial-barchart-plastics-square1',
  'web-scatter-with-customized-annotations-square',
  'web-highlighted-lineplot-with-faceting-square',
];

// Bottom of most pages: lead magnet sending to my top 300 dataviz projects (dataviz-inspiration.com)
export default function Contact(_props: { pageSlug?: string; isNotebook?: boolean }) {
  return (
    <section className="grid grid-cols-1 items-center gap-10 rounded-xl border p-6 sm:p-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <h2 id="Inspiration" className="!mt-0 !border-b-0 !pb-0 !text-2xl">
          💡 Out of dataviz inspiration?
        </h2>
        <p>
          I have spent years collecting the most beautiful data visualizations out there. Get the list of{' '}
          <b>my top 300 dataviz projects</b>, hand-picked, for free.
        </p>
        <KitForm form="inspiration" buttonLabel="Send me the list" className="mt-6" />
        <p className="!mt-2 text-xs text-muted-foreground">I respect your privacy. Unsubscribe anytime.</p>
      </div>

      <div className="relative mx-auto w-full max-w-[260px] md:col-span-2">
        <div className="grid -rotate-3 grid-cols-3 gap-1.5 rounded-xl bg-white p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
          {MOSAIC.map((name) => {
            const img = getGraphImage(name);
            if (!img) return null;
            return (
              <img
                key={name}
                src={img.thumb}
                alt=""
                width={200}
                height={200}
                loading="lazy"
                className="aspect-square w-full rounded-md object-cover"
              />
            );
          })}
        </div>
        {/* Sticker */}
        <div className="absolute -top-4 -right-3 grid size-16 rotate-12 place-items-center rounded-full bg-foreground text-center text-[11px] leading-tight font-semibold text-background shadow-md">
          <span>
            300
            <br />
            projects
          </span>
        </div>
      </div>
    </section>
  );
}
