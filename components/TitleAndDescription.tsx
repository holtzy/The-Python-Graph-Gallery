import Link from 'next/link';
import SectionLogo from './SectionLogo';
import { chartTypesInfo } from '@/lib/sectionDescriptions';
import { fullUrlToInternalLink } from '@/lib/site';
import { buttonVariants } from './ui/button';

type TitleAndDescriptionProps = {
  title: React.ReactNode;
  // A string containing html (from the posts frontmatter), or JSX
  description: string | React.ReactNode;
  chartType?: string;
};

// Top of every page: title, chart type logo, description and useful links
export default function TitleAndDescription({ title, description, chartType }: TitleAndDescriptionProps) {
  const chartInfo = chartTypesInfo.find((chart) => chart.id === chartType);

  return (
    <div className="w-full pt-12 pb-6 sm:pt-20">
      <div className="flex items-start justify-between gap-6">
        <h1>{title}</h1>
        {chartInfo && (
          <div className="w-16 min-w-16 sm:w-20 sm:min-w-20">
            <SectionLogo chartType={chartInfo.logo} />
          </div>
        )}
      </div>

      <div className="mt-6 text-lg leading-8 text-muted-foreground [&_a]:text-foreground [&_b]:text-foreground [&_strong]:text-foreground">
        {typeof description === 'string' ? <div dangerouslySetInnerHTML={{ __html: description }} /> : description}
      </div>

      {chartInfo && (
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href={fullUrlToInternalLink(chartInfo.pythonURL)}
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            {chartInfo.label + ' section'}
          </Link>
          {chartInfo.dataToVizURL && (
            <a href={chartInfo.dataToVizURL} className={buttonVariants({ variant: 'outline', size: 'sm' })}>
              About this chart
            </a>
          )}
        </div>
      )}
    </div>
  );
}
