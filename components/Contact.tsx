import KitForm from './KitForm';

// Bottom of most pages: lead magnet sending to my top 300 dataviz projects (dataviz-inspiration.com).
// Full width band with a parallax background image (the page must render it inside a .wrapper).
export default function Contact(_props: { pageSlug?: string; isNotebook?: boolean }) {
  return (
    <section
      className="full-bleed relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/lead-magnets/dataviz-inspiration-bg.webp)' }}
    >
      {/* White veil: stronger in the center, where the text is */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_30%,rgba(255,255,255,0.6)_100%)]" />
      <div className="relative mx-auto flex max-w-[640px] flex-col items-center px-5 py-20 text-center sm:py-28">
        <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
          300 projects
        </span>
        <h2 id="Inspiration" className="!mt-4 !border-b-0 !pb-0">
          💡 Out of dataviz inspiration?
        </h2>
        <p>
          I have spent years collecting the most beautiful data visualizations out there. Get the list of{' '}
          <b>my top 300 dataviz projects</b>, hand-picked, for free.
        </p>
        <KitForm form="inspiration" buttonLabel="Send me the list" className="mt-6" />
        <p className="!mt-3 text-xs text-muted-foreground">I respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
