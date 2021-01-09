import React from "react";
import * as d3 from "d3";

export default function ArcDiagramD3() {

    const [data, setData] = React.useState(undefined);

    const [graphWidth, setGraphWidth] = React.useState();

    const parentRef = React.useRef(null);

    React.useEffect(() => {
        if (!parentRef.current) {
            return
        }

        setGraphWidth(parentRef.current.offsetWidth);
        // Callback function: what to do when window resizes
        const handleResize = () => {
            setGraphWidth(parentRef.current.offsetWidth);
        };
        window.addEventListener("resize", handleResize);
    }, [parentRef]);

    React.useEffect(() => {
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_researcherNetwork.json").then((d) => {
            setData(d);
        });
        return () => undefined;
    }, []);

    React.useEffect(() => {
        // Start by removing everything from the viz div
        d3.select("#my_dataviz").html("");

        if (!data || !graphWidth || graphWidth < 600) { return }

        // set the dimensions and margins of the graph
        const finalWidth = Math.min(1200, graphWidth)
        const sideMargin = (graphWidth - finalWidth) / 2 + 30
        const margin = { top: 0, right: sideMargin, bottom: 80, left: sideMargin },
            width = graphWidth - margin.left - margin.right,
            height = finalWidth / 1.7 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#my_dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


        // List of node names
        const allNodes = data.nodes.map(function (d) { return d.name })

        // List of groups
        const allGroups = [...new Set(data.nodes.map(function (d) { return d.grp }))]

        // A color scale for groups:
        const color = d3.scaleOrdinal()
            .domain(allGroups)
            .range(d3.schemeSet3);

        // A linear scale for node size
        const size = d3.scaleLinear()
            .domain([1, 10])
            .range([2, 10]);

        // A linear scale to position the nodes on the X axis
        const x = d3.scalePoint()
            .range([0, width])
            .domain(allNodes)

        // In my input data, links are provided between nodes -id-, NOT between node names.
        // So I have to do a link between this id and the name
        const idToNode = {};
        data.nodes.forEach(function (n) {
            idToNode[n.id] = n;
        });

        // Add the links
        const links = svg
            .selectAll('mylinks')
            .data(data.links)
            .enter()
            .append('path')
            .attr('d', function (d) {
                const start = x(idToNode[d.source].name)    // X position of start node on the X axis
                const end = x(idToNode[d.target].name)      // X position of end node
                return ['M', start, height - 30,    // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
                    'A',                            // This means we're gonna build an elliptical arc
                    (start - end) / 2, ',',    // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
                    (start - end) / 2, 0, 0, ',',
                    start < end ? 1 : 0, end, ',', height - 30] // We always want the arc on top. So if end is before start, putting 0 here turn the arc upside down.
                    .join(' ');
            })
            .style("fill", "none")
            .attr("stroke", "grey")
            .style("stroke-width", 1)

        // Add the circle for the nodes
        const nodes = svg
            .selectAll("mynodes")
            .data(data.nodes.sort(function (a, b) { return +b.n - +a.n }))
            .enter()
            .append("circle")
            .attr("cx", function (d) { return (x(d.name)) })
            .attr("cy", height - 30)
            .attr("r", function (d) { return (size(d.n)) })
            .style("fill", function (d) { return color(d.grp) })
            .attr("stroke", "white")

        // And give them a label
        const labels = svg
            .selectAll("mylabels")
            .data(data.nodes)
            .enter()
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .text(function (d) { return (d.name) })
            .style("text-anchor", "end")
            .attr("transform", function (d) { return ("translate(" + (x(d.name)) + "," + (height - 15) + ")rotate(-45)") })
            .style("font-size", 6)

        // Add the highlighting functionality
        nodes
            .on('mouseover', function (d) {
                // Highlight the nodes: every node is grey except him
                nodes
                    .style('opacity', .2)
                d3.select(this)
                    .style('opacity', 1)
                // Highlight the connections
                links
                    .style('stroke', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? color(d.grp) : '#b8b8b8'; })
                    .style('strokeOpacity', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? 1 : .2; })
                    .style('strokeWidth', function (link_d) { return link_d.source === d.id || link_d.target === d.id ? 4 : 1; })
                labels
                    .style("fontSize", function (label_d) { return label_d.name === d.name ? 16 : 2 })
                    .attr("y", function (label_d) { return label_d.name === d.name ? 10 : 0 })

            })
            .on('mouseout', function (d) {
                nodes.style('opacity', 1)
                links
                    .style('stroke', 'grey')
                    .style('strokeOpacity', .8)
                    .style('strokeWidth', '1')
                labels
                    .style("fontSize", 6)

            })
    }, [data, graphWidth])

    return (
        <div ref={parentRef} id="my_dataviz"></div>
    )

}
