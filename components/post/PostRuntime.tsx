'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';

// Holds the interactive state of a post: the (possibly edited) code of every cell,
// and runs them in a Pyodide web worker when the reader asks for it.

export type CellOutput =
  | { type: 'image'; data: string }
  | { type: 'text'; data: string }
  | { type: 'html'; data: string }
  | { type: 'iframe'; data: string };

export type CellRun = {
  status: 'idle' | 'running' | 'done' | 'error';
  message?: string;
  outputs?: CellOutput[];
  error?: string;
  // Index of the cell that raised the error (may be a previous cell)
  errorCell?: number;
};

type PostRuntimeValue = {
  getCode: (index: number) => string;
  setCode: (index: number, code: string) => void;
  resetCode: (index: number) => void;
  run: (index: number) => void;
  runs: Record<number, CellRun>;
};

const PostRuntimeContext = createContext<PostRuntimeValue | null>(null);

export const usePostRuntime = () => {
  const ctx = useContext(PostRuntimeContext);
  if (!ctx) throw new Error('usePostRuntime must be used inside <PostRuntime>');
  return ctx;
};

// One worker for the whole site session: Python is loaded once
let sharedWorker: Worker | null = null;
const getWorker = () => {
  if (!sharedWorker) sharedWorker = new Worker('/pyodide-worker.js', { type: 'module' });
  return sharedWorker;
};

let runCounter = 0;

export default function PostRuntime({ cells, children }: { cells: string[]; children: React.ReactNode }) {
  const [codes, setCodes] = useState<string[]>(cells);
  const [runs, setRuns] = useState<Record<number, CellRun>>({});
  const codesRef = useRef(codes);
  codesRef.current = codes;

  const getCode = useCallback((index: number) => codes[index] ?? '', [codes]);

  const setCode = useCallback((index: number, code: string) => {
    setCodes((prev) => prev.map((c, i) => (i === index ? code : c)));
  }, []);

  const resetCode = useCallback(
    (index: number) => {
      setCodes((prev) => prev.map((c, i) => (i === index ? cells[index] : c)));
      setRuns((prev) => {
        const next = { ...prev };
        delete next[index];
        return next;
      });
    },
    [cells]
  );

  const run = useCallback((index: number) => {
    const id = ++runCounter;
    const worker = getWorker();
    const update = (r: CellRun) => setRuns((prev) => ({ ...prev, [index]: { ...prev[index], ...r } }));
    update({ status: 'running', message: 'Starting…', error: undefined });

    const onMessage = (event: MessageEvent) => {
      const msg = event.data;
      if (msg.id !== id) return;
      if (msg.type === 'status') {
        update({ status: 'running', message: msg.message });
      } else if (msg.type === 'result') {
        worker.removeEventListener('message', onMessage);
        if (msg.error) {
          update({ status: 'error', error: msg.error, errorCell: msg.errorCell, outputs: [] });
        } else {
          update({ status: 'done', outputs: msg.outputs, message: undefined });
        }
      }
    };
    worker.addEventListener('message', onMessage);
    // Notebook semantics: run all the cells above, then this one
    worker.postMessage({ id, cells: codesRef.current.slice(0, index + 1) });
  }, []);

  return (
    <PostRuntimeContext.Provider value={{ getCode, setCode, resetCode, run, runs }}>
      {children}
    </PostRuntimeContext.Provider>
  );
}
