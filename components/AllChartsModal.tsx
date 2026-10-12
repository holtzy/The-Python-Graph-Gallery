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
  { id: 'general', label: 'General knowledge' },
];

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

// Modal listing all the chart types of the gallery, grouped by family
export default function AllChartsModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] gap-0 overflow-y-auto p-6 sm:max-w-4xl sm:p-8">
        <DialogTitle className="text-xl font-semibold tracking-tight">All chart types</DialogTitle>
        <DialogDescription className="mt-1">Pick a chart type to see all its examples.</DialogDescription>

        {FAMILIES.map((family) => {
          const charts = chartTypesInfo.filter((c) => c.family === family.id && !EXCLUDED.includes(c.id));
          if (!charts.length) return null;
          return (
            <section key={family.id} className="mt-8">
              <h3 className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {family.label}
              </h3>
              <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 md:grid-cols-7">
                {charts.map((chart) => (
                  <Link
                    key={chart.id}
                    href={fullUrlToInternalLink(chart.pythonURL)}
                    onClick={() => onOpenChange(false)}
                    className="group flex flex-col items-center gap-2 rounded-lg p-2 transition-colors hover:bg-muted"
                  >
                    <div className="w-14 transition-transform duration-200 group-hover:scale-110 sm:w-16">
                      <SectionLogo chartType={chart.logo} />
                    </div>
                    <span className="text-center text-xs leading-tight text-muted-foreground group-hover:text-foreground">
                      {chart.label}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </DialogContent>
    </Dialog>
  );
}
