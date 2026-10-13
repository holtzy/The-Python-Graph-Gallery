'use client';

import { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import KitForm, { trackEvent } from '@/components/KitForm';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// Lead magnet shown below code blocks: a discrete sentence opening a modal offering a video demo of agentic coding (+ my AI skills as a bonus).
export default function AiCodeHint({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const onOpenChange = (value: boolean) => {
    setOpen(value);
    if (value) trackEvent('lead_magnet_view', { magnet: 'ai-kit' });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        className={cn(
          'flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline',
          className
        )}
      >
        <Sparkles size={14} />
        Still copy-pasting code? Let AI write it for you
      </button>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="gap-0 p-6 sm:max-w-lg sm:p-8">
          {/* Video preview */}
          <div className="relative overflow-hidden rounded-lg border">
            <img
              src="/lead-magnets/ai-video-preview.webp"
              alt="Preview of the video: Yan Holtz demoing agentic coding on the Python Graph Gallery"
              width={1000}
              height={685}
              className="h-auto w-full"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/10">
              <span className="grid size-16 place-items-center rounded-full bg-foreground/85 text-background shadow-lg">
                <Play className="ml-1 size-7 fill-current" />
              </span>
            </div>
          </div>

          <DialogTitle className="mt-6 text-xl font-semibold tracking-tight">
            🎬 Watch me build charts with an AI agent
          </DialogTitle>
          <DialogDescription className="mt-2">
            A video demo of agentic coding, and how your life changes when AI writes the code.{' '}
            <b className="text-foreground">Bonus:</b> the skills I use to make my AI even better.
          </DialogDescription>

          <KitForm form="aiKit" buttonLabel="Send me the video" className="mt-6 max-w-none" />
          <p className="!mt-3 text-xs text-muted-foreground">I respect your privacy. Unsubscribe anytime.</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
