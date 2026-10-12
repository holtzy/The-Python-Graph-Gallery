'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Delaunay } from 'd3';
import { cn } from '@/lib/utils';

// All images in cells can be more or less zoomed in
// If zoom is too strong, img will be blurry
// If zoom is not strong enough, img will be duplicated
const IMG_ZOOM = 400;
const NUMBER_OF_CELLS = 21;
const PADDING_BETWEEN_CELLS = 7;
const HEIGHT = 400;

export type PatchworkChart = {
  link: string;
  title: string;
  description: string;
  author: string;
  // Url of the image to display in the cell
  src: string;
};

type Point = { x: number; y: number };

// Each point is the center of a cell of the voronoi diagram. x goes from 0 to 1000, y from 0 to 800
const generateRandomData = (n: number): Point[] =>
  Array.from({ length: n }, () => ({ x: Math.random() * 1000, y: Math.random() * 800 }));

// A full width voronoi diagram where each cell displays one of the best charts of the gallery.
// Hovering a cell shows its title, author and description. Click to read the tutorial.
export default function VoronoiImagePatchwork({ charts }: { charts: PatchworkChart[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  // Random positions are only generated in the browser (avoids a server / client mismatch)
  const [data, setData] = useState<Point[]>([]);
  const [hovered, setHovered] = useState<PatchworkChart | undefined>();

  useEffect(() => {
    setData(generateRandomData(NUMBER_OF_CELLS));
    const node = containerRef.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const voronoi = useMemo(() => {
    if (!width || !data.length) return undefined;
    const points = data.map((d): [number, number] => [(d.x / 1000) * width, (d.y / 800) * HEIGHT]);
    return Delaunay.from(points).voronoi([0, 0, width, HEIGHT]);
  }, [data, width]);

  return (
    <div className="w-full">
      <div ref={containerRef} className="w-full" style={{ height: HEIGHT }}>
        {voronoi && charts.length > 0 && (
          <svg width={width} height={HEIGHT} role="img" aria-label="A selection of the best charts of the gallery">
            {data.map((_, i) => {
              const key = 'img' + i;
              const chart = charts[i % charts.length];
              return (
                <g key={key}>
                  <defs>
                    <pattern id={key} patternUnits="objectBoundingBox" width={1} height={1}>
                      {/* the -100 here allows to center the image a bit */}
                      <image href={chart.src} x={-100} y={-100} width={IMG_ZOOM} height={IMG_ZOOM} />
                    </pattern>
                  </defs>
                  <a href={'/' + chart.link} aria-label={chart.title}>
                    <path
                      d={voronoi.renderCell(i)}
                      style={{ stroke: 'var(--background)' }}
                      strokeWidth={PADDING_BETWEEN_CELLS}
                      fill={`url(#${key})`}
                      onMouseEnter={() => setHovered(chart)}
                      onMouseLeave={() => setHovered(undefined)}
                      className={cn(
                        'cursor-pointer transition-[opacity,filter] duration-500 hover:opacity-100 hover:grayscale-0',
                        hovered && 'opacity-30 grayscale'
                      )}
                    />
                  </a>
                </g>
              );
            })}
          </svg>
        )}
      </div>

      <div className="wrapper">
        <div className="flex h-[110px] items-start">
          {hovered && (
            <div className="mt-5 border-l-2 border-brand pl-3 text-[15px] leading-5 text-muted-foreground">
              <p className="!mt-0 leading-6">
                <b className="text-foreground">{hovered.title}</b>
                <i className="pl-1">{'by ' + hovered.author}</i>
              </p>
              <p className="!mt-1 leading-6">{hovered.description}</p>
              <p className="!mt-1 leading-6 text-brand">
                <i>Click to read code</i>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
