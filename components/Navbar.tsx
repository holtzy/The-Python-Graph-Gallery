'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import AllChartsModal from './AllChartsModal';
import KitForm from './KitForm';
import SearchCommand from './SearchCommand';
import { LIBRARIES, MATPLOTLIB_TOPICS, RELATED, SEABORN_TOPICS, TOP_LINKS, type NavItem } from './nav-links';
import { cn } from '@/lib/utils';

// An entry of a menu panel: title (+ logo) and a short description
const MenuEntry = ({ item }: { item: NavItem }) => (
  <NavigationMenuLink asChild>
    <a href={item.href} className="flex-row items-start gap-3">
      {item.logo ? (
        <img src={item.logo} alt="" width={20} height={20} className="mt-0.5 h-5 w-5 shrink-0" />
      ) : (
        <span className="mt-0.5 h-5 w-5 shrink-0" />
      )}
      <span className="flex flex-col gap-0.5">
        <span className="text-sm leading-none font-medium">{item.label}</span>
        {item.description && <span className="text-xs leading-snug text-muted-foreground">{item.description}</span>}
      </span>
    </a>
  </NavigationMenuLink>
);

// A small list of topics (e.g. "Matplotlib: Axis, Title, Legend...")
const TopicList = ({ title, items }: { title: string; items: NavItem[] }) => (
  <div>
    <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">{title}</p>
    {items.map((item) => (
      <NavigationMenuLink key={item.href + item.label} asChild>
        <a href={item.href} className="px-2 py-1">
          {item.label}
        </a>
      </NavigationMenuLink>
    ))}
  </div>
);

const plainLink = cn(navigationMenuTriggerStyle(), 'bg-transparent text-muted-foreground hover:text-foreground');

export default function Navbar() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      {/* Same width as the content column (.wrapper: 780px + 20px padding on each side) */}
      <nav className="mx-auto flex h-14 max-w-[820px] items-center justify-between px-5">
        <Link href="/" aria-label="Python Graph Gallery, home" className="shrink-0">
          <img src="/logo-96.png" alt="Python Graph Gallery logo" width={28} height={28} className="h-7 w-7" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <button className={plainLink} onClick={() => setIsChartModalOpen(true)}>
                  Chart types
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[560px] grid-cols-[1fr_170px] gap-2 p-2">
                    <div className="grid gap-0.5">
                      {LIBRARIES.map((item) => (
                        <MenuEntry key={item.href} item={item} />
                      ))}
                    </div>
                    <div className="flex flex-col gap-4 border-l pl-2">
                      <TopicList title="Matplotlib" items={MATPLOTLIB_TOPICS} />
                      <TopicList title="Seaborn" items={SEABORN_TOPICS} />
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {TOP_LINKS.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink asChild className={plainLink}>
                    <Link href={l.href}>{l.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Related
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!right-0 !left-auto">
                  <div className="grid w-[460px] grid-cols-2 gap-0.5 p-2">
                    {RELATED.map((item) => (
                      <MenuEntry key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={plainLink}>
                  <a href="https://www.matplotlib-journey.com" target="_blank" rel="noopener">
                    Learn
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        </div>

        <div className="flex items-center gap-2">
          <SearchCommand />
          <Button size="sm" className="hidden lg:inline-flex" onClick={() => setIsSubscribeOpen(true)}>
            Subscribe
          </Button>

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
              {[...TOP_LINKS, { label: 'Learn', href: 'https://www.matplotlib-journey.com' }].map((l) => (
                <a key={l.href} href={l.href} className="py-1 font-medium">
                  {l.label}
                </a>
              ))}
              <p className="mt-4 text-sm uppercase text-muted-foreground">Tools</p>
              {LIBRARIES.map((i) => (
                <a key={i.label} href={i.href} className="py-1">
                  {i.label}
                </a>
              ))}
              <p className="mt-4 text-sm uppercase text-muted-foreground">Related</p>
              {RELATED.map((i) => (
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
        </div>
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
