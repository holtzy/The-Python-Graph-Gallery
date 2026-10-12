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
    // Heading text, without the links it may contain (e.g. "see full doc")
    const headingText = (node: HTMLElement) => {
      const clone = node.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('a').forEach((a) => a.remove());
      return clone.textContent?.trim() || node.id;
    };
    setHeadings(nodes.map((node) => ({ title: headingText(node), node })));
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
      className="fixed top-1/2 right-6 hidden max-h-[70vh] w-56 -translate-y-1/2 overflow-y-auto noScrollBar xl:block"
    >
      <p className="!m-0 mb-2 text-sm font-medium">On this page</p>
      <ul className="!m-0 !list-none space-y-1.5 !pl-0">
        {headings.map(({ title, node }, i) => (
          <li key={i} className="!m-0 !p-0">
            <button
              onClick={() => node.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={cn(
                'block w-full text-left text-[13px] leading-snug transition-colors',
                active === i ? 'font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
