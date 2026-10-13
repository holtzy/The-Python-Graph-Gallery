'use client';

import { useEffect, useState } from 'react';
import KitForm from '@/components/KitForm';
import { CAVEATS_IMG_DIR, DATAVIZ_CAVEATS, caveatForChartType, type Caveat } from '@/lib/lead-magnets/dataviz-caveats';

// Cards shown behind the top card of the deck: some of the most telling caveats
const DECK_IDS = ['13', '03', '19', '09', '24'];

// Position of the 5 cards of the fanned deck (the middle one is on top)
const FAN = [
  { rotate: -14, x: -50, y: 14 },
  { rotate: -7, x: -25, y: 4 },
  { rotate: 0, x: 0, y: 0 },
  { rotate: 7, x: 25, y: 4 },
  { rotate: 14, x: 50, y: 14 },
];

// Lead magnet: the deck of 25 dataviz caveat cards, offered in exchange for an email.
// The card on top of the deck matches the chart type of the page (or is random).
export default function DatavizCaveatsMagnet({ chartType }: { chartType?: string }) {
  const matching = caveatForChartType(chartType);
  // Pages without a matching card get a random one, picked in the browser (the html is static)
  const [top, setTop] = useState<Caveat>(matching ?? DATAVIZ_CAVEATS[4]);
  useEffect(() => {
    if (!matching) setTop(DATAVIZ_CAVEATS[Math.floor(Math.random() * DATAVIZ_CAVEATS.length)]);
  }, [matching]);

  return (
    <div className="grid items-center gap-10 md:grid-cols-[1fr_320px] md:gap-6">
      <div>
        <h2 data-toc-ignore className="!mt-0">⚠️ Avoid the 25 most common dataviz mistakes</h2>
        <p>
          Boxplots hiding information, pie charts, cut axes, spaghetti charts... I gathered the 25 dataviz caveats
          I see the most as a deck of cards. Each card shows a chart that is not ideal, and a better alternative.
        </p>
        <p className="text-muted-foreground">Get the full deck for free:</p>
        <KitForm form="datavizCaveats" buttonLabel="Send me the cards" className="mt-4" />
        <p className="!mt-3 text-xs text-muted-foreground">I respect your privacy. Unsubscribe anytime.</p>
      </div>

      <div className="order-first md:order-none">
        <CardDeck top={top} />
      </div>
    </div>
  );
}

function CardDeck({ top }: { top: Caveat }) {
  const others = DECK_IDS.filter((id) => id !== top.id)
    .slice(0, 4)
    .map((id) => DATAVIZ_CAVEATS.find((c) => c.id === id)!);
  const cards = [others[0], others[1], top, others[2], others[3]];

  return (
    <div className="group relative mx-auto h-[300px] w-[320px]" aria-label="Preview of the dataviz caveat cards">
      {cards.map((card, i) => {
        const { rotate, x, y } = FAN[i];
        const isTop = i === 2;
        return (
          <img
            key={card.id}
            src={`${CAVEATS_IMG_DIR}/${card.file}-vert.webp`}
            width={720}
            height={1440}
            loading="lazy"
            alt={isTop ? `Dataviz caveat card: ${card.title}` : ''}
            className="absolute bottom-0 left-1/2 -ml-[68px] h-[272px] w-[136px] origin-bottom rounded-lg bg-white shadow-[0_6px_20px_rgba(0,0,0,0.14)] ring-1 ring-black/10 [transform:var(--fan)] transition-transform duration-300 ease-out group-hover:[transform:var(--spread)]"
            style={
              {
                zIndex: isTop ? 10 : 5 - Math.abs(i - 2),
                '--fan': `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${isTop ? 1.06 : 1})`,
                // On hover, the deck opens a bit more
                '--spread': `translate(${x * 1.1}px, ${y * 1.3 - (isTop ? 10 : 0)}px) rotate(${rotate * 1.2}deg) scale(${isTop ? 1.1 : 1})`,
              } as React.CSSProperties
            }
          />
        );
      })}
      {/* Sticker */}
      <div className="absolute top-0 right-2 z-20 grid size-16 rotate-12 place-items-center rounded-full bg-foreground text-center text-[11px] leading-tight font-semibold text-background shadow-md">
        <span>
          25
          <br />
          cards
        </span>
      </div>
    </div>
  );
}
