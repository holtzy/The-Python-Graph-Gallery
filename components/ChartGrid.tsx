import { cn } from '@/lib/utils';

type ChartGridProps = {
  children: React.ReactNode;
  // Number of columns on desktop. Default to 3 (= the former bootstrap md={4} columns)
  cols?: 2 | 3 | 4;
  className?: string;
};

// Responsive grid of chart images: 1 column on mobile, `cols` columns on desktop.
export default function ChartGrid({ children, cols = 3, className }: ChartGridProps) {
  return (
    <div
      className={cn(
        'my-6 grid grid-cols-1 items-start gap-4',
        cols === 2 && 'sm:grid-cols-2',
        cols === 3 && 'sm:grid-cols-2 md:grid-cols-3',
        cols === 4 && 'sm:grid-cols-2 md:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  );
}
