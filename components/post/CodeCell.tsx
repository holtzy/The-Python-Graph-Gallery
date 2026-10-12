'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { LoaderCircle, Pencil, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CopyButton from '@/components/CopyButton';
import { usePostRuntime, type CellOutput } from './PostRuntime';

const CodeEditor = dynamic(() => import('./CodeEditor'), {
  ssr: false,
  loading: () => <div className="h-24 animate-pulse rounded bg-muted" />,
});

type CodeCellProps = {
  index: number;
  code: string;
  // Code highlighted at build time (shiki html)
  highlighted: string;
  // The static output, rendered at build time
  children?: React.ReactNode;
};

// A code cell of a post.
// By default it is 100% static html (code + chart image), great for SEO and performance.
// "Edit code" turns it into an editor; "Run" executes it with Python in the browser (Pyodide).
export default function CodeCell({ index, code, highlighted, children }: CodeCellProps) {
  const { getCode, setCode, resetCode, run, runs } = usePostRuntime();
  const [isEditing, setIsEditing] = useState(false);
  const cellRun = runs[index];
  const currentCode = isEditing ? getCode(index) : code;
  const isRunning = cellRun?.status === 'running';
  const hasChanged = getCode(index) !== code;

  return (
    <div className="my-6">
      <div className="group relative rounded-md border bg-muted/60">
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          <CopyButton text={currentCode} className="opacity-0 transition-opacity group-hover:opacity-100" />
          {!isEditing && (
            <Button variant="outline" size="xs" onClick={() => setIsEditing(true)}>
              <Pencil /> Edit code
            </Button>
          )}
        </div>

        {isEditing ? (
          <div className="px-2 pt-2 pb-12">
            <CodeEditor value={getCode(index)} onChange={(v) => setCode(index, v)} onRun={() => run(index)} />
            <div className="absolute right-2 bottom-2 flex items-center gap-2">
              {hasChanged && (
                <Button variant="ghost" size="xs" onClick={() => resetCode(index)}>
                  <RotateCcw /> Reset
                </Button>
              )}
              <span className="hidden text-xs text-muted-foreground sm:inline">Shift + Enter</span>
              <Button size="sm" onClick={() => run(index)} disabled={isRunning}>
                {isRunning ? <LoaderCircle className="animate-spin" /> : <Play />}
                Run
              </Button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto px-4 py-3" dangerouslySetInnerHTML={{ __html: highlighted }} />
        )}
      </div>

      {isRunning && (
        <p className="!mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <LoaderCircle size={14} className="animate-spin" />
          {cellRun.message}
        </p>
      )}

      {cellRun?.status === 'error' && (
        <div className="mt-2 rounded-md border border-destructive/30 bg-destructive/5 p-3">
          {cellRun.errorCell !== undefined && cellRun.errorCell >= 0 && cellRun.errorCell !== index && (
            <p className="!m-0 pb-2 text-sm text-destructive">The error comes from a code cell above this one.</p>
          )}
          <pre className="overflow-x-auto text-xs whitespace-pre-wrap text-destructive">{cellRun.error}</pre>
        </div>
      )}

      {cellRun?.status === 'done' && cellRun.outputs ? (
        <RuntimeOutputs outputs={cellRun.outputs} />
      ) : (
        children && <div className="cell-output mt-4">{children}</div>
      )}
    </div>
  );
}

function RuntimeOutputs({ outputs }: { outputs: CellOutput[] }) {
  if (!outputs.length) {
    return <p className="!mt-2 text-sm text-muted-foreground">Done (no output).</p>;
  }
  return (
    <div className="cell-output mt-4 space-y-4">
      {outputs.map((o, i) => {
        if (o.type === 'image') return <img key={i} src={`data:image/png;base64,${o.data}`} alt="Chart produced by the code above" className="h-auto max-w-full" />;
        if (o.type === 'html') return <div key={i} className="cell-output-html" dangerouslySetInnerHTML={{ __html: o.data }} />;
        if (o.type === 'iframe') return <iframe key={i} srcDoc={o.data} className="h-[500px] w-full border-0" title="Interactive chart" />;
        return <pre key={i} className="plain-output">{o.data}</pre>;
      })}
    </div>
  );
}
