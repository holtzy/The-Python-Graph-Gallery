import { getGraphImage } from '@/lib/images';

type ChartImageProps = {
  imgName: string;
  caption?: string;
  // Set to true for images visible without scrolling
  priority?: boolean;
};

// Displays a chart of public/graph (lightweight webp thumbnail) with its caption on hover.
export default function ChartImage({ imgName, caption, priority }: ChartImageProps) {
  const image = getGraphImage(imgName);
  if (!image) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`ChartImage: no image found for "${imgName}"`);
    }
    return null;
  }

  return (
    <div className="group relative overflow-hidden rounded-md">
      <img
        src={image.thumb}
        alt={caption || imgName.replace(/[_-]/g, ' ')}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />
      {caption && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="!m-0 text-center text-sm leading-6 text-white">{caption}</p>
        </div>
      )}
    </div>
  );
}
