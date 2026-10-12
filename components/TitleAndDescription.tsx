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
    <div className="w-full pt-10 pb-10 sm:pt-20">
      <div className="flex items-center justify-between gap-6">
        <h1>{title}</h1>
        {chartInfo && (
          <div className="w-20 min-w-20 sm:w-24 sm:min-w-24">
            <SectionLogo chartType={chartInfo.logo} />
          </div>
        )}
      </div>

      <hr className="my-6 w-24 border-t-2 border-brand" />

      {typeof description === 'string' ? (
        <div className="max-w-3xl" dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <div className="max-w-3xl">{description}</div>
      )}

      {chartInfo && (
        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href={fullUrlToInternalLink(chartInfo.pythonURL)}
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            {chartInfo.label + ' section'}
          </Link>
          {chartInfo.dataToVizURL && (
            <a href={chartInfo.dataToVizURL} className={buttonVariants({ size: 'sm' })}>
              About this chart
            </a>
          )}
        </div>
      )}
    </div>
  );
}
