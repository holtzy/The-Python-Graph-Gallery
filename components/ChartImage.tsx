import { getGraphImage } from '@/lib/images';

type ChartImageProps = {
  imgName: string;
  caption?: string;
  // Set to true for images visible without scrolling
  priority?: boolean;
};

// Displays a chart of static/graph (lightweight webp thumbnail) with its caption on hover.
export default function ChartImage({ imgName, caption, priority }: ChartImageProps) {
  const image = getGraphImage(imgName);
  if (!image) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`ChartImage: no image found for "${imgName}"`);
    }
    return null;
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <img
        src={image.thumb}
        alt={caption || imgName.replace(/[_-]/g, ' ')}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-auto w-full transition duration-300 group-hover:scale-[1.02] group-hover:opacity-60 group-hover:grayscale-[40%]"
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/70 px-3 py-2 backdrop-blur-sm transition-transform duration-200 group-hover:translate-y-0">
          <p className="!m-0 text-sm leading-5 font-medium text-foreground">{caption}</p>
        </div>
      )}
    </div>
  );
}
