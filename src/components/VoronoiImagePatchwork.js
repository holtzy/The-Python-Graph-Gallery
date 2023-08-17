import React, { useRef } from 'react';
import './voronoi-image-patchwork.css';
import { useMemo } from 'react';
import * as d3 from 'd3';
import { Delaunay } from 'd3';
import { useDimensions } from '../util/use-dimensions';
import { listOfBestCharts } from '../util/list-of-best-charts';

const data = [
  { x: 110, y: 10 },
  { x: 224, y: 4 },
  { x: 135, y: 90 },
  { x: 67, y: 34 },
  { x: 267, y: 34 },
  { x: 367, y: 34 },
  { x: 667, y: 234 },
  { x: 867, y: 134 },
  { x: 367, y: 340 },
  { x: 767, y: 34 },
];

export const VoronoiImagePatchworkResponsive = () => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  return (
    <div ref={chartRef} className="patchwork-container">
      <VoronoiImagePatchwork
        height={chartSize.height}
        width={chartSize.width}
      />
    </div>
  );
};

const VoronoiImagePatchwork = ({ width, height }) => {
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
  // Voronoi Diagram Coordinates
  //
  const voronoi = useMemo(() => {
    return delaunay.voronoi([0, 0, width, height]);
  }, [data, width, height]);

  // // Render all path in what shot as a string
  // const allPath = voronoi.render();
  // console.log({ allPath });

  // // Render a specific cell, but as an array of coordinates
  // const singlePath = voronoi.cellPolygon(3);
  // console.log({ singlePath });

  // Render cell
  const allCells = data.map((cell, i) => {
    const key = 'img' + i;
    const cellPath = voronoi.renderCell(i);

    const imgInfo = listOfBestCharts[i];
    const imgUrl =
      'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/graph/' +
      imgInfo.img +
      '?raw=true';
    console.log({ cellPath });

    return (
      <g key={key}>
        <defs>
          <pattern
            id={'img' + i}
            patternUnits="userSpaceOnUse"
            width="300"
            height="300"
          >
            <image href={imgUrl} x="0" y="0" width="300" height="300" />
          </pattern>
        </defs>
        <path
          d={cellPath}
          stroke="black"
          strokeWidth={5}
          fill={'url(#' + key + ')'}
        />
      </g>
    );
  });
  //
  // Images with clip ?
  //

  // Loop through all images
  // For each, render image centered on the voronoi cell baricenter
  // Use the cell coordinates to crop using a mask
  // voronoi.cellPolygons().map((cell, i) => {
  //   console.log(i, cell);
  // });

  return (
    <svg width={width} height={height}>
      {allCells}
    </svg>
  );
};
