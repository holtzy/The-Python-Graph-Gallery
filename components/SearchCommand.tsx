'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import { Button } from './ui/button';
import type { SearchItem } from '@/app/search-index.json/route';

// Search box over all the posts and chart types. Opens with ⌘K / Ctrl+K or with the navbar button.
// The search index (/search-index.json) is only downloaded the first time the search opens.
export default function SearchCommand() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<SearchItem[] | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open && !items) {
      fetch('/search-index.json')
        .then((r) => r.json())
        .then(setItems)
        .catch(() => setItems([]));
    }
  }, [open, items]);

  const go = (url: string) => {
    setOpen(false);
    router.push(url);
  };

  const sections = items?.filter((i) => i.g === 'section') ?? [];
  const posts = items?.filter((i) => i.g === 'post') ?? [];

  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Search (⌘K)"
        title="Search (⌘K)"
        onClick={() => setOpen(true)}
      >
        <Search />
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search the gallery"
        description="Search a chart type or a post"
      >
        <Command>
          <CommandInput placeholder="Search a chart, e.g. violin, map, seaborn…" />
          <CommandList className="max-h-[60vh]">
            {!items ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Loading…
              </div>
            ) : (
              <>
                <CommandEmpty>No result.</CommandEmpty>
                <CommandGroup heading="Chart types">
                  {sections.map((item) => (
                    <CommandItem
                      key={item.u}
                      value={`${item.t} section`}
                      onSelect={() => go(item.u)}
                    >
                      {item.i && (
                        <img
                          src={item.i}
                          alt=""
                          width={24}
                          height={24}
                          className="size-6 rounded-full"
                        />
                      )}
                      {item.t}
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandGroup heading="Posts">
                  {posts.map((item) => (
                    <CommandItem
                      key={item.u}
                      value={`${item.t} ${item.c ?? ''} ${item.u}`}
                      onSelect={() => go(item.u)}
                    >
                      {item.i ? (
                        <img
                          src={item.i}
                          alt=""
                          width={32}
                          height={24}
                          loading="lazy"
                          className="h-6 w-8 shrink-0 rounded-sm border bg-white object-contain"
                        />
                      ) : (
                        <span className="h-6 w-8 shrink-0" />
                      )}
                      <span className="flex-1 truncate">{item.t}</span>
                      {item.c && (
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {item.c}
                        </span>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
