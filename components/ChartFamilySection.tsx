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

// Lists all the chart types of a family (e.g. all the "distribution" charts)
export default function ChartFamilySection({ chartFamily }: { chartFamily: string; hasGreyBackground?: boolean }) {
  const charts = chartTypesInfo.filter((chart) => chart.family === chartFamily);
  return (
    <div className="pb-4">
      <h2
        id="Related charts"
        className="!mt-4 !mb-0 !border-b !pb-1 !font-sans !text-xl !font-normal !tracking-normal"
      >
        {TITLES[chartFamily]}
      </h2>
      <div className="grid grid-cols-4 gap-x-6 gap-y-4 pt-4 md:grid-cols-7 md:gap-x-2">
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
