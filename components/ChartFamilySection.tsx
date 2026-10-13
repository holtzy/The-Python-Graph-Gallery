import SectionLogoWithOverlay from './SectionLogoWithOverlay';
import { chartTypesInfo } from '@/lib/sectionDescriptions';
import { fullUrlToInternalLink } from '@/lib/site';

const TITLES: Record<string, string> = {
  distribution: 'Distribution',
  correlation: 'Correlation',
  ranking: 'Ranking',
  partOfAWhole: 'Part Of A Whole',
  evolution: 'Evolution',
  map: 'Map',
  flow: 'Flow',
  general: 'General Knowledge',
};

type ChartFamilySectionProps = {
  chartFamily: string;
  // "related": a "Related chart types" section, used at the bottom of pages.
  // "family": a small family title (e.g. "Distribution"), used on the home page to list all families.
  variant?: 'related' | 'family';
  hasGreyBackground?: boolean;
};

// Lists all the chart types of a family (e.g. all the "distribution" charts)
export default function ChartFamilySection({ chartFamily, variant = 'related' }: ChartFamilySectionProps) {
  const charts = chartTypesInfo.filter((chart) => chart.family === chartFamily);
  return (
    <div className={variant === 'family' ? 'pb-2' : 'pb-4'}>
      {variant === 'related' ? (
        <h2 id="Related charts">Related chart types</h2>
      ) : (
        <h3 className="!mt-6 !mb-0 !text-base !font-medium !tracking-normal text-muted-foreground">
          {TITLES[chartFamily]}
        </h3>
      )}
      <div className="grid grid-cols-4 gap-x-4 gap-y-3 pt-3 sm:grid-cols-6 md:grid-cols-7">
        {charts.map((chart) => (
          <SectionLogoWithOverlay
            key={chart.id}
            link={fullUrlToInternalLink(chart.pythonURL)}
            chartType={chart.logo}
            caption={chart.label}
          />
        ))}
      </div>
    </div>
  );
}
