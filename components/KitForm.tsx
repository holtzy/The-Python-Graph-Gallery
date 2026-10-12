'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

// Kit (former ConvertKit) forms used on the site
export const KIT_FORMS = {
  newsletter: { id: '6500196', success: 'Success! Now check your email to confirm your subscription.' },
  cheatSheet: { id: '7902489', success: 'Success! Check your emails for confirmation now.' },
  poster: { id: '7902961', success: 'Poster sent! Check your spam folder just in case.' },
} as const;

type KitFormProps = {
  form: keyof typeof KIT_FORMS;
  buttonLabel?: string;
  className?: string;
};

// A lightweight email form posting to Kit. Replaces the heavy Kit embed script.
export default function KitForm({ form, buttonLabel = 'Subscribe', className }: KitFormProps) {
  const { id, success } = KIT_FORMS[form];
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
        className="h-9 flex-1 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
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
