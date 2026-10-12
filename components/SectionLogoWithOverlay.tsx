import Link from 'next/link';
import SectionLogo from './SectionLogo';
import { chartTypesInfo } from '@/lib/sectionDescriptions';

const generalList = chartTypesInfo
  .filter((info) => info.family === 'general')
  .map((info) => info.logo);

type Props = { chartType: string; caption: string; link: string };

// A chart type logo linking to its section, with a "+" overlay on hover
export default function SectionLogoWithOverlay({ chartType, caption, link }: Props) {
  const isGeneralFamily = generalList.includes(chartType);
  return (
    <Link href={link} className="group block no-underline">
      <div className="relative">
        <SectionLogo chartType={chartType} />
        {!isGeneralFamily && (
          <div className="absolute inset-0 rounded-full bg-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-10" />
        )}
      </div>
      <p className="!mt-1 text-center text-xs leading-4 text-muted-foreground group-hover:text-foreground">{caption}</p>
    </Link>
  );
}
