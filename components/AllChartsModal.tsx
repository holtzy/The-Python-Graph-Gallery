'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import SectionLogo from './SectionLogo';
import { chartTypesInfo } from '@/lib/sectionDescriptions';
import { fullUrlToInternalLink } from '@/lib/site';

const EXCLUDED = ['matplotlib', 'drawarrow', 'pyfonts', 'seaborn', 'plotnine', 'pypalettes', 'pandas'];

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

// Modal listing all the chart types of the gallery
export default function AllChartsModal({ open, onOpenChange }: Props) {
  const [name, setName] = useState('');
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogTitle className="font-[family-name:var(--font-bitter)]">All chart types</DialogTitle>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {chartTypesInfo
            .filter((chart) => !EXCLUDED.includes(chart.id))
            .map((chart) => (
              <Link
                key={chart.id}
                href={fullUrlToInternalLink(chart.pythonURL)}
                onClick={() => onOpenChange(false)}
                onMouseEnter={() => setName(chart.label)}
                onMouseLeave={() => setName('')}
                aria-label={chart.label}
                className="rounded-full transition-transform hover:scale-110"
              >
                <SectionLogo chartType={chart.logo} />
              </Link>
            ))}
        </div>
        <p className="h-6 text-center text-muted-foreground">{name}</p>
      </DialogContent>
    </Dialog>
  );
}
