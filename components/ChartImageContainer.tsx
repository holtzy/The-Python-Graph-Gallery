import Link from 'next/link';
import ChartImage from './ChartImage';

type ChartImageContainerProps = {
  imgName: string;
  caption?: string;
  linkTo: string;
};

// A chart image that links to its blog post. Meant to be placed in a <ChartGrid>.
export default function ChartImageContainer({ imgName, caption, linkTo }: ChartImageContainerProps) {
  return (
    <Link href={linkTo} className="block">
      <ChartImage imgName={imgName} caption={caption} />
    </Link>
  );
}
