'use client';

import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { keymap, EditorView } from '@codemirror/view';
import { Prec } from '@codemirror/state';

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
};

// The editable version of a code cell. Loaded lazily, only when a reader clicks "Edit code".
export default function CodeEditor({ value, onChange, onRun }: CodeEditorProps) {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      autoFocus
      basicSetup={{ lineNumbers: false, foldGutter: false, highlightActiveLine: false }}
      extensions={[
        python(),
        EditorView.lineWrapping,
        Prec.highest(
          keymap.of([
            {
              key: 'Shift-Enter',
              run: () => {
                onRun();
                return true;
              },
            },
          ])
        ),
      ]}
      theme="light"
      className="text-[14.5px] [&_.cm-editor]:bg-transparent [&_.cm-editor.cm-focused]:outline-none [&_.cm-scroller]:font-mono [&_.cm-gutters]:hidden"
    />
  );
}
