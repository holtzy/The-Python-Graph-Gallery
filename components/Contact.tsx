'use client';

import { useRef } from 'react';
import KitForm from './KitForm';

// Bottom of most pages: lead magnet sending to my top 300 dataviz projects (dataviz-inspiration.com).
// Full width band with a parallax background image (the page must render it inside a .wrapper).
// It is drawn above the fixed table of content (z-10). Around the mouse, the charts are shown at full opacity.
export default function Contact(_props: { pageSlug?: string; isNotebook?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  // The position of the mouse is passed to the css (no React render on mouse move)
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    node.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  const onMouseLeave = () => {
    ref.current?.style.setProperty('--mx', '-1000px');
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="full-bleed relative z-10 bg-cover bg-fixed bg-center bg-no-repeat [--mx:-1000px] [--my:-1000px]"
      style={{ backgroundImage: 'url(/lead-magnets/dataviz-inspiration-bg.webp)' }}
    >
      {/* White veil: stronger in the center, where the text is, with a hole around the mouse */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_30%,rgba(255,255,255,0.6)_100%)]"
        style={{
          maskImage: 'radial-gradient(circle 140px at var(--mx) var(--my), transparent 35%, black 100%)',
          WebkitMaskImage: 'radial-gradient(circle 140px at var(--mx) var(--my), transparent 35%, black 100%)',
        }}
      />
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
