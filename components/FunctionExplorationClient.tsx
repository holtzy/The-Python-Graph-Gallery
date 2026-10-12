'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

type Props = {
  parameterNames: string[];
  optionNames: (string[] | null)[];
  // panels[parameterIndex][optionIndex], rendered on the server
  panels: React.ReactNode[][];
};

export default function FunctionExplorationClient({ parameterNames, optionNames, panels }: Props) {
  const [param, setParam] = useState(0);
  const [opt, setOpt] = useState(0);
  const options = optionNames[param];

  return (
    <>
      <div className="mt-10 flex flex-wrap items-baseline gap-3">
        <h3 className="!m-0 whitespace-nowrap">&rarr; Arguments</h3>
        <div className="flex flex-wrap gap-1">
          {parameterNames.map((name, i) => (
            <Button
              key={name}
              size="sm"
              variant={param === i ? 'default' : 'outline'}
              onClick={() => {
                setParam(i);
                setOpt(0);
              }}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>

      {options && (
        <div className="mt-6 flex flex-wrap items-baseline gap-1">
          <span className="mr-2 text-xs text-muted-foreground">Options:</span>
          {options.map((name, i) => (
            <Button key={name} size="xs" variant={opt === i ? 'default' : 'outline'} onClick={() => setOpt(i)}>
              {name}
            </Button>
          ))}
        </div>
      )}

      <div className={cn('mt-2')}>{panels[param][options ? opt : 0]}</div>
    </>
  );
}
