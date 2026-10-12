import { getSectionImage } from '@/lib/images';

// Displays the logo representing a chart type of the gallery. Example: "Violin150"
export default function SectionLogo({ chartType }: { chartType: string }) {
  const image = getSectionImage(chartType);
  if (!image) return null;
  const chartName = chartType.replace('150', '').replace('Small', '');
  return (
    <img
      src={image.thumb}
      alt={'logo of a chart:' + chartName}
      width={image.width}
      height={image.height}
      loading="lazy"
      className="h-auto w-full"
    />
  );
}
