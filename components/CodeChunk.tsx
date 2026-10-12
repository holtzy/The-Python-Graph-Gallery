import { highlightCode } from '@/lib/highlight';
import CopyButton from './CopyButton';
import { cn } from '@/lib/utils';

type CodeChunkProps = {
  children: string;
  language?: string;
  hasWhiteBackground?: boolean;
};

// A code block, highlighted at build time, with a copy button
export default async function CodeChunk({ children, language = 'python', hasWhiteBackground }: CodeChunkProps) {
  const code = children.replace(/\n+$/, '');
  const html = await highlightCode(code, language);
  return (
    <div className={cn('group relative my-6 rounded-lg border', hasWhiteBackground ? 'bg-background' : 'bg-muted/40')}>
      <CopyButton text={code} className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="overflow-x-auto px-4 py-3" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
