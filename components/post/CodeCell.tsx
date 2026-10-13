'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { LoaderCircle, Pencil, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CopyButton from '@/components/CopyButton';
import AiCodeHint from '@/components/lead-magnets/AiCodeHint';
import { cn } from '@/lib/utils';
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
  // The paragraphs right above the code, displayed next to the chart (rendered at build time)
  intro?: React.ReactNode;
  // The static output (chart, table, text), rendered at build time
  output?: React.ReactNode;
  // true when the output is a chart
  hasChart?: boolean;
  // false: the code can not run in the browser, the "Edit code" button is hidden
  interactive?: boolean;
};

// A code cell of a post.
// By default it is 100% static html (code + chart image), great for SEO and performance.
// - when the cell produces a chart: text on the left, chart on the right, code below
// - otherwise: code, then its output
// "Edit code" turns the code into an editor; "Run" executes it with Python in the browser (Pyodide).
export default function CodeCell({
  index,
  code,
  highlighted,
  intro,
  output,
  hasChart,
  interactive = true,
}: CodeCellProps) {
  const { getCode, setCode, resetCode, run, runs } = usePostRuntime();
  const [isEditing, setIsEditing] = useState(false);
  const cellRun = runs[index];
  const currentCode = isEditing ? getCode(index) : code;
  const isRunning = cellRun?.status === 'running';
  const hasChanged = getCode(index) !== code;

  const shownOutput =
    cellRun?.status === 'done' && cellRun.outputs ? <RuntimeOutputs outputs={cellRun.outputs} /> : output;

  const codeBlock = (
    <div>
      <div className="group relative rounded-lg border bg-muted/40">
        <CopyButton
          text={currentCode}
          className="absolute top-2 right-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
        />
        {isEditing ? (
          <div className="p-2">
            <CodeEditor value={getCode(index)} onChange={(v) => setCode(index, v)} onRun={() => run(index)} />
          </div>
        ) : (
          <div className="overflow-x-auto px-4 py-3" dangerouslySetInnerHTML={{ __html: highlighted }} />
        )}
        {!isEditing && <AiCodeHint className="absolute top-2 right-[76px] z-10" />}
      </div>

      {interactive && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {isEditing ? (
            <>
              <Button onClick={() => run(index)} disabled={isRunning}>
                {isRunning ? <LoaderCircle className="animate-spin" /> : <Play />}
                Run
              </Button>
              {hasChanged && (
                <Button variant="outline" onClick={() => resetCode(index)}>
                  <RotateCcw /> Reset
                </Button>
              )}
              <span className="ml-1 hidden text-xs text-muted-foreground sm:inline">or Shift + Enter</span>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Pencil /> Edit code
            </Button>
          )}
          {isRunning && (
            <span className="flex items-center gap-2 text-sm text-muted-foreground">{cellRun.message}</span>
          )}
        </div>
      )}

      {cellRun?.status === 'error' && (
        <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
          {cellRun.errorCell !== undefined && cellRun.errorCell >= 0 && cellRun.errorCell !== index && (
            <p className="!m-0 pb-2 text-sm text-destructive">The error comes from a code cell above this one.</p>
          )}
          <pre className="overflow-x-auto text-xs whitespace-pre-wrap text-destructive">{cellRun.error}</pre>
        </div>
      )}
    </div>
  );

  // Cell producing a chart: text on the left, chart on the right, then the code
  if (hasChart) {
    return (
      <div className="my-10">
        {intro ? (
          <div className="mb-6 grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
            <div className="[&>*:first-child]:!mt-0">{intro}</div>
            <div className="cell-output">{shownOutput}</div>
          </div>
        ) : (
          <div className="cell-output mx-auto mb-6 max-w-[560px]">{shownOutput}</div>
        )}
        {codeBlock}
      </div>
    );
  }

  // Other cells: code, then its output
  return (
    <div className="my-8">
      {codeBlock}
      {shownOutput && <div className={cn('cell-output mt-4')}>{shownOutput}</div>}
    </div>
  );
}

function RuntimeOutputs({ outputs }: { outputs: CellOutput[] }) {
  if (!outputs.length) {
    return <p className="!mt-2 text-sm text-muted-foreground">Done (no output).</p>;
  }
  return (
    <div className="space-y-4">
      {outputs.map((o, i) => {
        if (o.type === 'image')
          return (
            <img
              key={i}
              src={`data:image/png;base64,${o.data}`}
              alt="Chart produced by the code"
              className="h-auto max-w-full"
            />
          );
        if (o.type === 'html')
          return <div key={i} className="cell-output-html" dangerouslySetInnerHTML={{ __html: o.data }} />;
        if (o.type === 'iframe')
          return <iframe key={i} srcDoc={o.data} className="h-[500px] w-full border-0" title="Interactive chart" />;
        return (
          <pre key={i} className="plain-output">
            {o.data}
          </pre>
        );
      })}
    </div>
  );
}
