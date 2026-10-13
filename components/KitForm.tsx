'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

// Kit (former ConvertKit) forms used on the site
export const KIT_FORMS = {
  newsletter: { id: '6500196', success: 'Success! Now check your email to confirm your subscription.' },
  cheatSheet: { id: '7902489', success: 'Success! Check your emails for confirmation now.' },
  poster: { id: '7902961', success: 'Poster sent! Check your spam folder just in case.' },
  inspiration: { id: '10040254', success: 'Done! Check your emails: the list of 300 dataviz projects is on its way.' },
  datavizCaveats: { id: '10039805', success: 'Done! Check your emails: the link to the 25 cards is on its way.' },
} as const;

// Google Analytics event (gtag is loaded in app/layout.tsx)
export const trackEvent = (name: string, params: Record<string, string>) => {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.('event', name, params);
};

type KitFormProps = {
  form: keyof typeof KIT_FORMS;
  buttonLabel?: string;
  className?: string;
};

// A lightweight email form posting to Kit. Replaces the heavy Kit embed script.
export default function KitForm({ form: formName, buttonLabel = 'Subscribe', className }: KitFormProps) {
  const { id, success } = KIT_FORMS[formName];
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');
    try {
      const res = await fetch(`https://app.kit.com/forms/${id}/subscriptions`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) trackEvent('generate_lead', { form: formName });
    } catch {
      // The request was blocked (network, CORS...): fall back to a regular form submission on Kit
      form.target = '_blank';
      form.submit();
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return <p className={cn('font-medium text-green-700', className)}>{success}</p>;
  }

  return (
    <form
      action={`https://app.kit.com/forms/${id}/subscriptions`}
      method="post"
      onSubmit={onSubmit}
      className={cn('flex w-full max-w-md flex-col gap-2 sm:flex-row', className)}
    >
      <input
        type="email"
        name="email_address"
        required
        aria-label="Email Address"
        placeholder="Email Address"
        className="h-9 w-full rounded-md border border-input sm:flex-1 bg-background px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
      />
      <Button type="submit" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? '...' : buttonLabel}
      </Button>
      {status === 'error' && (
        <p className="text-sm text-destructive sm:basis-full">Something went wrong, please try again.</p>
      )}
    </form>
  );
}
