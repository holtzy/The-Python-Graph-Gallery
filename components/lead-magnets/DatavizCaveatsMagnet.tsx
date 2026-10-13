'use client';

import { useEffect, useState } from 'react';
import KitForm from '@/components/KitForm';
import { CAVEATS_IMG_DIR, DATAVIZ_CAVEATS, caveatForChartType, type Caveat } from '@/lib/lead-magnets/dataviz-caveats';

// Lead magnet: shows one dataviz caveat card (the one matching the chart type of the page,
// or a random one) and offers the link to all 25 cards in exchange for an email.
export default function DatavizCaveatsMagnet({ chartType }: { chartType?: string }) {
  const matching = caveatForChartType(chartType);
  // Pages without a matching card get a random one, picked in the browser (the html is static)
  const [caveat, setCaveat] = useState<Caveat>(matching ?? DATAVIZ_CAVEATS[0]);
  useEffect(() => {
    if (!matching) setCaveat(DATAVIZ_CAVEATS[Math.floor(Math.random() * DATAVIZ_CAVEATS.length)]);
  }, [matching]);

  const src = `${CAVEATS_IMG_DIR}/${caveat.file}-horiz`;

  return (
    <div className="rounded-xl border p-4 sm:p-6">
      <img
        src={`${src}-800.webp`}
        srcSet={`${src}-800.webp 800w, ${src}.webp 1600w`}
        sizes="(min-width: 820px) 730px, 100vw"
        width={1600}
        height={1000}
        loading="lazy"
        alt={`Dataviz caveat: ${caveat.title}`}
        className="h-auto w-full rounded-lg border"
      />
      <div className="mt-6 px-1 sm:mt-8">
        <p className="!m-0 text-sm text-muted-foreground">Dataviz caveat {caveat.id} of 25</p>
        <p className="!mt-1 text-2xl font-semibold tracking-tight">Avoid the 25 most common dataviz mistakes</p>
        <p className="!mt-3 text-muted-foreground">
          This card is one of the 25 dataviz caveats I collected over the years: what is not ideal, and what to do
          instead. Enter your email and I'll send you the link to all of them.
        </p>
        <KitForm form="datavizCaveats" buttonLabel="Get the 25 cards" className="mt-5" />
      </div>
    </div>
  );
}
