'use client';

import { createContext, useContext, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import SubscribeButtonCheatSheet from './SubscribeButtonCheatSheet';
import { cn } from '@/lib/utils';

const CheatSheetModalContext = createContext<() => void>(() => {});

// Wraps a page: any <CheatSheetModalTrigger> / <CheatSheetModalButton> inside opens the download dialog
export function CheatSheetModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <CheatSheetModalContext.Provider value={() => setOpen(true)}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-6 sm:max-w-xl">
          <DialogTitle className="font-heading text-2xl">Download</DialogTitle>
          <DialogDescription asChild>
            <div className="text-base text-foreground">
              <p>I use these cheatsheets all the time.</p>
              <p>
                To make things easier, I've combined them into a <b>single PDF</b> that I can send to you by email
                right away. (It's 100% free!)
              </p>
            </div>
          </DialogDescription>
          <SubscribeButtonCheatSheet className="mt-2" />
        </DialogContent>
      </Dialog>
    </CheatSheetModalContext.Provider>
  );
}

// Makes any content (e.g. a cheatsheet image) open the download dialog on click
export function CheatSheetModalTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const open = useContext(CheatSheetModalContext);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
      className={cn('cursor-pointer', className)}
    >
      {children}
    </div>
  );
}

// A button opening the download dialog
export function CheatSheetModalButton({ children }: { children: React.ReactNode }) {
  const open = useContext(CheatSheetModalContext);
  return (
    <Button size="lg" onClick={open} className="mt-4">
      {children}
    </Button>
  );
}
