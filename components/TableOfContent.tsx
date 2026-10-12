'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Heading = { title: string; node: HTMLElement };

// Heading text, without the links it may contain (e.g. "see full doc") and without emojis
const headingText = (node: HTMLElement) => {
  const clone = node.cloneNode(true) as HTMLElement;
  clone.querySelectorAll('a, img').forEach((el) => el.remove());
  const text = (clone.textContent ?? '')
    .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text || node.id;
};

// Table of content listing the h2 of the page, on the right of the content column.
// Only visible on large screens.
export default function TableOfContent() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('main h2'));
    setHeadings(nodes.map((node) => ({ title: headingText(node), node })));
  }, []);

  useEffect(() => {
    if (!headings.length) return;
    const onScroll = () => {
      const position = window.scrollY + 160;
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

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      // The content column is 780px wide and centered: the TOC sits 48px on its right
      className="fixed top-1/2 hidden w-52 -translate-y-1/2 min-[1340px]:block"
      style={{ left: 'calc(50% + 390px + 48px)' }}
    >
      <p className="!m-0 pb-3 text-sm font-medium">On this page</p>
      <ul className="!m-0 max-h-[60vh] !list-none overflow-y-auto border-l !pl-0 noScrollBar">
        {headings.map(({ title, node }, i) => (
          <li key={i} className="!m-0 !p-0">
            <button
              onClick={() => node.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className={cn(
                '-ml-px block w-full border-l py-1 pl-3 text-left text-sm leading-snug transition-colors',
                active === i
                  ? 'border-foreground font-medium text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
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
