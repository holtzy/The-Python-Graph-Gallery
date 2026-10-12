'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import AllChartsModal from './AllChartsModal';
import KitForm from './KitForm';
import { NavItem, RELATED_MENU, TOOLS_MENU, TOP_LINKS } from './nav-links';
import { cn } from '@/lib/utils';

const navLink =
  'inline-flex h-8 cursor-pointer items-center rounded-md px-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none';

const MenuLink = ({ item }: { item: NavItem }) => (
  <a href={item.href} className={cn('flex w-full items-center justify-between gap-4', item.isMain && 'font-medium')}>
    {item.label}
    {item.logo && <img src={item.logo} alt="" width={20} height={20} className="h-5 w-5" />}
  </a>
);

const Dropdown = ({ label, groups }: { label: string; groups: NavItem[][] }) => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger className={navLink}>
      {label} <ChevronDown size={14} className="ml-1 opacity-60" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-60">
      {groups.map((group, i) => (
        <div key={i}>
          {i > 0 && <DropdownMenuSeparator />}
          {group.map((item) => (
            <DropdownMenuItem key={item.href + item.label} asChild className={cn(!item.isMain && 'pl-5 text-muted-foreground')}>
              <MenuLink item={item} />
            </DropdownMenuItem>
          ))}
        </div>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function Navbar() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
          <img src="/favicon-32x32.png" alt="" width={20} height={20} className="h-5 w-5" />
          Python Graph Gallery
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <span className={navLink} onClick={() => setIsChartModalOpen(true)}>
            Chart types
          </span>
          <Dropdown label="Tools" groups={TOOLS_MENU} />
          {TOP_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={navLink}>
              {l.label}
            </Link>
          ))}
          <Dropdown label="Related" groups={RELATED_MENU} />
          <a href="https://www.matplotlib-journey.com" target="_blank" rel="noopener" className={navLink}>
            Learn
          </a>
          <Button size="sm" className="ml-3" onClick={() => setIsSubscribeOpen(true)}>
            Subscribe
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger className="lg:hidden" aria-label="Open menu">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="overflow-y-auto px-6 py-6">
            <SheetTitle>Python Graph Gallery</SheetTitle>
            <div className="mt-6 flex flex-col gap-1 text-base">
              <button className="text-left font-medium" onClick={() => setIsChartModalOpen(true)}>
                Chart types
              </button>
              {[...TOP_LINKS, { label: 'Learn', href: 'https://www.matplotlib-journey.com', isMain: true }].map((l) => (
                <a key={l.href} href={l.href} className="py-1 font-medium">
                  {l.label}
                </a>
              ))}
              <p className="mt-4 text-sm uppercase text-muted-foreground">Tools</p>
              {TOOLS_MENU.flat().filter((i) => i.isMain).map((i) => (
                <a key={i.label} href={i.href} className="py-1">
                  {i.label}
                </a>
              ))}
              <p className="mt-4 text-sm uppercase text-muted-foreground">Related</p>
              {RELATED_MENU.flat().map((i) => (
                <a key={i.label} href={i.href} className="py-1">
                  {i.label}
                </a>
              ))}
              <Button size="sm" className="mt-6" onClick={() => setIsSubscribeOpen(true)}>
                Subscribe
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <AllChartsModal open={isChartModalOpen} onOpenChange={setIsChartModalOpen} />

      <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
        <DialogContent>
          <DialogTitle>Dataviz Universe</DialogTitle>
          <DialogDescription>
            My best Python tips and tricks directly delivered in your Inbox. No Spam ever. Subscribe anytime.
          </DialogDescription>
          <KitForm form="newsletter" />
        </DialogContent>
      </Dialog>
    </header>
  );
}
