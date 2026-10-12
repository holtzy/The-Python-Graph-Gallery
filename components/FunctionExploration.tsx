import Link from 'next/link';
import CodeChunk from './CodeChunk';
import ChartImage from './ChartImage';
import FunctionExplorationClient from './FunctionExplorationClient';
import type { FunctionDetails } from '@/lib/functions/types';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="!mt-5 !mb-0 text-xs text-muted-foreground">{children}</p>
);

// Interactive explanation of the parameters of a python function (e.g. seaborn's barplot()).
// Every parameter panel is rendered on the server (code highlighted at build time),
// the client component only switches between them.
export default function FunctionExploration({ funDetails }: { funDetails: FunctionDetails }) {
  if (!funDetails) return null;

  const panels = funDetails.parameters.map((param) => {
    const options = param.options ?? [null];
    return options.map((option, j) => (
      <div key={param.name + j} className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="text-base md:col-span-2">
          <Label>Description</Label>
          <div className="text-base leading-relaxed">{param.description}</div>

          <Label>
            Possible values &rarr;{' '}
            <span className="rounded border px-1 py-0.5 text-xs text-muted-foreground">{param.type}</span>
          </Label>
          <div className="text-base leading-relaxed">{param.howToUse}</div>
          {option?.explanation && <div className="mt-3 text-base">{option.explanation}</div>}

          <Label>Code Example</Label>
          <CodeChunk hasWhiteBackground>
            {option ? param.basicUsage.replace('paramgoeshere', option.name) : param.basicUsage}
          </CodeChunk>
        </div>
        <div className="pt-6">
          <Link href={'/' + param.post}>
            <ChartImage
              imgName={option?.img || param.img}
              caption={'More about the ' + funDetails.name + ' function.'}
            />
          </Link>
        </div>
      </div>
    ));
  });

  return (
    <div className="mb-16">
      <h2 id={capitalize(funDetails.name + ' details')}>
        &#128270; <code>{funDetails.name}</code> function parameters
        <a className="ml-4 text-sm font-normal" href={funDetails.docUrl}>
          &rarr; see full doc
        </a>
      </h2>

      <h3>&rarr; Description</h3>
      <div>{funDetails.description}</div>

      <FunctionExplorationClient
        parameterNames={funDetails.parameters.map((p) => p.name)}
        optionNames={funDetails.parameters.map((p) => p.options?.map((o) => o.name) ?? null)}
        panels={panels}
      />
    </div>
  );
}
