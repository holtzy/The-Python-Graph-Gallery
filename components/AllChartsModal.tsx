'use client';

import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import SectionLogo from './SectionLogo';
import { chartTypesInfo } from '@/lib/sectionDescriptions';
import { fullUrlToInternalLink } from '@/lib/site';

const EXCLUDED = ['matplotlib', 'drawarrow', 'pyfonts', 'seaborn', 'plotnine', 'pypalettes', 'pandas'];

const FAMILIES: { id: string; label: string }[] = [
  { id: 'distribution', label: 'Distribution' },
  { id: 'correlation', label: 'Correlation' },
  { id: 'ranking', label: 'Ranking' },
  { id: 'partOfAWhole', label: 'Part of a whole' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'map', label: 'Map' },
  { id: 'flow', label: 'Flow' },
  { id: 'general', label: 'General' },
];

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

// Menu listing all the chart types of the gallery: one column per chart family
export default function AllChartsModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        // Do not focus the close button when opening (it would show its focus ring)
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="max-h-[90vh] gap-0 overflow-y-auto p-6 sm:max-w-5xl sm:p-8"
      >
        <DialogTitle className="text-lg font-semibold tracking-tight">Chart types</DialogTitle>
        <DialogDescription className="mt-1">
          Pick a chart type to see all its examples. Classification follows{' '}
          <a href="https://www.data-to-viz.com" target="_blank" rel="noreferrer" className="underline underline-offset-4">
            Data To Viz
          </a>
          .
        </DialogDescription>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {FAMILIES.map((family) => {
            const charts = chartTypesInfo.filter((c) => c.family === family.id && !EXCLUDED.includes(c.id));
            if (!charts.length) return null;
            return (
              <section key={family.id}>
                <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground">{family.label}</h3>
                <ul className="space-y-0.5">
                  {charts.map((chart) => (
                    <li key={chart.id}>
                      <Link
                        href={fullUrlToInternalLink(chart.pythonURL)}
                        onClick={() => onOpenChange(false)}
                        className="flex items-center gap-2.5 rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted"
                      >
                        <span className="w-7 shrink-0">
                          <SectionLogo chartType={chart.logo} />
                        </span>
                        <span className="truncate">{chart.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
