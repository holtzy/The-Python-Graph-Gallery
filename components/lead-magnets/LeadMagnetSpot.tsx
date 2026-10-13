'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/components/KitForm';
import { cn } from '@/lib/utils';
import DatavizCaveatsMagnet from './DatavizCaveatsMagnet';

type MagnetProps = { chartType?: string };

// All the lead magnets. A spot shows one of them, picked at random.
const MAGNETS: { name: string; Component: React.ComponentType<MagnetProps> }[] = [
  { name: 'dataviz-caveats', Component: DatavizCaveatsMagnet },
];

// A place of a page where a lead magnet is displayed: a full width grey band.
// Use it outside of any .wrapper: it is a .wrapper itself.
// Google Analytics receives a "lead_magnet_view" event when the spot is seen, and a "generate_lead"
// event when someone subscribes: compare them to get the conversion rate of each magnet.
export default function LeadMagnetSpot({ chartType, className }: MagnetProps & { className?: string }) {
  // The html is static: the first magnet is rendered at build time, the random pick happens in the browser
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * MAGNETS.length));
  }, []);

  const { name, Component } = MAGNETS[index];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        trackEvent('lead_magnet_view', { magnet: name });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [name]);

  return (
    <aside ref={ref} className={cn('wrapper bg-muted py-14 sm:py-20', className)} data-lead-magnet={name}>
      <Component chartType={chartType} />
    </aside>
  );
}
