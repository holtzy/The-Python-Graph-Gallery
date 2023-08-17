import React, { useRef, useState } from 'react';
import './voronoi-image-patchwork.css';
import { useMemo } from 'react';
import * as d3 from 'd3';
import { Delaunay } from 'd3';
import { useDimensions } from '../util/use-dimensions';
import { listOfBestCharts } from '../util/list-of-best-charts';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

// All images in cells can be more or less zoomed in
// If zoom is too strong, img will be blurry
// If zoom  is not strong enough, img will be duplicated
const IMG_ZOOM = 400;
const NUMBER_OF_CELLS = 21;
const PADDING_BETWEEN_CELLS = 7;
const HEIGHT = 400;

// Arbitrary data.
// Each data point is the circumcenter of a cell in the voronoi diagram
// x goes from 0 to 800 and y from 0 to 400
// const data = [
//   { x: 110, y: 10 },
//   { x: 224, y: 4 },
//   { x: 135, y: 90 },
//   { x: 67, y: 34 },
//   { x: 267, y: 34 },
//   { x: 367, y: 34 },
//   { x: 667, y: 234 },
//   { x: 867, y: 134 },
//   { x: 367, y: 340 },
//   { x: 767, y: 34 },
// ];

export const VoronoiImagePatchworkResponsive = () => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  return (
    <div ref={chartRef} className="patchwork-container">
      <VoronoiImagePatchwork height={HEIGHT} width={chartSize.width} />
    </div>
  );
};

const VoronoiImagePatchwork = ({ width, height }) => {
  const data = generateRandomData(NUMBER_OF_CELLS);

  const xScale = d3.scaleLinear().domain([0, 1000]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 800]).range([0, height]);

  //
  // State
  //
  const [hovered, setHovered] = useState(undefined);

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

  //
  // Draw cells with images in it
  //
  const allCells = data.map((cell, i) => {
    const key = 'img' + i;
    const cellPath = voronoi.renderCell(i);

    const imgInfo = listOfBestCharts[i % listOfBestCharts.length];
    const imgUrl =
      'https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/graph/' +
      imgInfo.img +
      '?raw=true';

    return (
      <g key={key}>
        <defs>
          <pattern
            id={'img' + i}
            patternUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <image
              href={imgUrl}
              x={-100} // the -100 here allows to center the image a bit
              y={-100}
              width={IMG_ZOOM}
              height={IMG_ZOOM}
            />
          </pattern>
        </defs>
        <Link href={imgInfo.link}>
          <path
            className={hovered ? 'voronoi-cell dimmed' : 'voronoi-cell'}
            onMouseEnter={() => setHovered(imgInfo)}
            onMouseLeave={() => setHovered(undefined)}
            d={cellPath}
            stroke="#f8f9fa"
            strokeWidth={PADDING_BETWEEN_CELLS}
            fill={'url(#' + key + ')'}
          />
        </Link>
      </g>
    );
  });

  return (
    <>
      <svg width={width} height={height}>
        {allCells}
      </svg>
      <Container>
        <div style={{ height: 100, display: 'flex' }}>
          {hovered && (
            <div className="cell-caption">
              <p>
                <span className="cell-caption-title">
                  <b>{hovered.title}</b>
                </span>
                <span className="cell-caption-author">
                  <i>{'by ' + hovered.author}</i>
                </span>
              </p>
              <p>
                <span className="cell-caption-description">
                  {hovered.description}
                </span>
              </p>
              <p>
                <span className="cell-caption-click">
                  <i>Click to read code</i>
                </span>
              </p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

VoronoiImagePatchwork.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

function generateRandomData(n) {
  const dataArray = [];

  for (let i = 0; i < n; i++) {
    const x = Math.random() * 1000; // Uniform distribution between 0 and 1000
    const y = Math.random() * 800; // Uniform distribution between 0 and 800

    dataArray.push({ x, y });
  }

  return dataArray;
}
