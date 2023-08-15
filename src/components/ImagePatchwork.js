import React, { useRef } from 'react';
import './image-patchwork.css';
import { useMemo } from 'react';
import * as d3 from 'd3';
import { Delaunay } from 'd3';
import { useDimensions } from '../util/use-dimensions';

const data = [
  { x: 10, y: 10 },
  { x: 4, y: 4 },
  { x: 35, y: 90 },
  { x: 67, y: 34 },
  { x: 267, y: 34 },
  { x: 367, y: 34 },
  { x: 667, y: 234 },
  { x: 867, y: 134 },
  { x: 367, y: 340 },
  { x: 767, y: 34 },
];

export const ImagePatchworkResponsive = () => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  console.log(chartSize);

  return (
    <div ref={chartRef} className="patchwork-container">
      <ImagePatchwork height={chartSize.height} width={chartSize.width} />
    </div>
  );
};

const ImagePatchwork = ({ width, height }) => {
  const xScale = d3.scaleLinear().domain([0, 800]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 300]).range([0, height]);

  //
  // Delaunay triangulation
  //
  const delaunay = useMemo(() => {
    const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
    return Delaunay.from(formattedData);
  }, [width, height]);

  //
  // Voronoi Diagram
  //
  const voronoi = useMemo(() => {
    return delaunay.voronoi([0, 0, width, height]);
  }, [data, width, height]);

  const voronoiPath = voronoi.render();

  const allVoronoiPath = <path d={voronoiPath} stroke="black" fill="red" />;

  return (
    <svg width={width} height={height}>
      {allVoronoiPath}
    </svg>
  );
};
