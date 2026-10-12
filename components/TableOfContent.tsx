'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Heading = { title: string; node: HTMLElement };

// Sticky table of content listing the h2 of the page. Only visible on very large screens.
export default function TableOfContent() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('main h2'));
    setHeadings(nodes.map((node) => ({ title: node.textContent?.trim() || node.id, node })));
  }, []);

  useEffect(() => {
    if (!headings.length) return;
    const onScroll = () => {
      const position = window.scrollY + 150;
      let index = 0;
      headings.forEach((h, i) => {
        if (h.node.getBoundingClientRect().top + window.scrollY <= position) index = i;
      });
      setActive(index);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav
      aria-label="Table of content"
      className="fixed top-28 right-4 hidden max-h-[70vh] w-52 overflow-y-auto noScrollBar 2xl:block"
    >
      {headings.map(({ title, node }, i) => (
        <p
          key={i}
          onClick={() => node.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className={cn(
            '!mt-0 cursor-pointer border-l-2 py-1 pl-3 text-sm leading-5 transition-colors',
            active === i ? 'border-brand text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'
          )}
        >
          {title}
        </p>
      ))}
    </nav>
  );
}
