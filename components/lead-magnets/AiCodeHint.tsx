'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import KitForm, { trackEvent } from '@/components/KitForm';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// Lead magnet shown below code blocks: a discrete sentence opening a modal offering the "Dataviz AI kit".
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
          <DialogTitle className="text-xl font-semibold tracking-tight">
            ✨ Stop copy-pasting. Let an AI agent build your charts.
          </DialogTitle>
          <DialogDescription className="mt-2">
            AI agents can write the code for you, but they often make ugly, misleading charts. My free Dataviz AI
            kit fixes that.
          </DialogDescription>

          {/* What working with an agent looks like */}
          <div className="mt-5 rounded-lg border bg-muted/40 p-3 font-mono text-xs leading-relaxed">
            <p className="!m-0">
              <span className="text-muted-foreground">&gt;</span> Make a violin plot of salary by job, sorted by
              median
            </p>
            <p className="!m-0 text-muted-foreground">Reading data.csv... building the chart...</p>
            <p className="!m-0 text-green-700">✓ salary-violin.png created</p>
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <b>A ready-to-use skill file</b> that teaches your agent (Claude Code, Cursor, Copilot, ChatGPT...)
              to build charts the right way: dataviz best practices, the 25 caveats, clean styling.
            </li>
            <li>
              <b>A 5-day email guide</b>: from copy-pasting code to an AI agent that builds your charts for you.
            </li>
          </ul>

          <KitForm form="aiKit" buttonLabel="Send me the kit" className="mt-6 max-w-none" />
          <p className="!mt-3 text-xs text-muted-foreground">I respect your privacy. Unsubscribe anytime.</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
