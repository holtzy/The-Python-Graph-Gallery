'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

type ResearcherNode = { id: string | number; name: string; grp: string | number; n: number };
type ResearcherLink = { source: string | number; target: string | number };
type ResearcherNetwork = { nodes: ResearcherNode[]; links: ResearcherLink[] };

const DATA_URL =
  'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_researcherNetwork.json';

// Interactive arc diagram of a researcher network, drawn with d3. Only displayed on screens wider than 600px.
export default function ArcDiagramD3() {
  const [data, setData] = useState<ResearcherNetwork | undefined>(undefined);
  const [graphWidth, setGraphWidth] = useState<number | undefined>(undefined);
  const parentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  // Track the available width
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    const handleResize = () => setGraphWidth(parent.offsetWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load the dataset
  useEffect(() => {
    let cancelled = false;
    d3.json<ResearcherNetwork>(DATA_URL).then((d) => {
      if (!cancelled && d) setData(d);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Draw
  useEffect(() => {
    const container = svgRef.current;
    if (!container) return;
    d3.select(container).html('');

    if (!data || !graphWidth || graphWidth < 600) return;

    const finalWidth = Math.min(1200, graphWidth);
    const sideMargin = (graphWidth - finalWidth) / 2 + 30;
    const margin = { top: 0, right: sideMargin, bottom: 80, left: sideMargin };
    const width = graphWidth - margin.left - margin.right;
    const height = finalWidth / 1.7 - margin.top - margin.bottom;

    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const allNodes = data.nodes.map((d) => d.name);
    const allGroups = [...new Set(data.nodes.map((d) => String(d.grp)))];

    const color = d3.scaleOrdinal<string, string>().domain(allGroups).range(d3.schemeSet3);
    const size = d3.scaleLinear().domain([1, 10]).range([2, 10]);
    const x = d3.scalePoint<string>().range([0, width]).domain(allNodes);

    // Links are provided between node ids, not names
    const idToNode: Record<string, ResearcherNode> = {};
    data.nodes.forEach((n) => {
      idToNode[String(n.id)] = n;
    });

    const links = svg
      .selectAll('mylinks')
      .data(data.links)
      .enter()
      .append('path')
      .attr('d', (d) => {
        const start = x(idToNode[String(d.source)].name) ?? 0;
        const end = x(idToNode[String(d.target)].name) ?? 0;
        return [
          'M', start, height - 30,
          'A',
          (start - end) / 2, ',',
          (start - end) / 2, 0, 0, ',',
          start < end ? 1 : 0, end, ',', height - 30,
        ].join(' ');
      })
      .style('fill', 'none')
      .attr('stroke', 'grey')
      .style('stroke-width', 1);

    const sortedNodes = [...data.nodes].sort((a, b) => +b.n - +a.n);

    const nodes = svg
      .selectAll('mynodes')
      .data(sortedNodes)
      .enter()
      .append('circle')
      .attr('cx', (d) => x(d.name) ?? 0)
      .attr('cy', height - 30)
      .attr('r', (d) => size(d.n))
      .style('fill', (d) => color(String(d.grp)))
      .attr('stroke', 'white');

    const labels = svg
      .selectAll('mylabels')
      .data(sortedNodes)
      .enter()
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .text((d) => d.name)
      .style('text-anchor', 'end')
      .attr('transform', (d) => `translate(${x(d.name) ?? 0},${height - 15})rotate(-45)`)
      .style('font-size', '6px');

    const isLinked = (link: ResearcherLink, node: ResearcherNode) =>
      String(link.source) === String(node.id) || String(link.target) === String(node.id);

    nodes
      .on('mouseover', function (_event, d) {
        nodes.style('opacity', 0.2);
        d3.select(this).style('opacity', 1);
        links
          .style('stroke', (l) => (isLinked(l, d) ? color(String(d.grp)) : '#b8b8b8'))
          .style('stroke-opacity', (l) => (isLinked(l, d) ? 1 : 0.2))
          .style('stroke-width', (l) => (isLinked(l, d) ? 4 : 1));
        labels
          .style('font-size', (l) => (l.name === d.name ? '16px' : '2px'))
          .attr('y', (l) => (l.name === d.name ? 10 : 0));
      })
      .on('mouseout', () => {
        nodes.style('opacity', 1);
        links.style('stroke', 'grey').style('stroke-opacity', 0.8).style('stroke-width', 1);
        labels.style('font-size', '6px').attr('y', 0);
      });
  }, [data, graphWidth]);

  return (
    <div ref={parentRef} className="w-full">
      <div ref={svgRef} id="my_dataviz" />
    </div>
  );
}
