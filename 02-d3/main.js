////////////////////////////
///// JSON DATA IMPORT /////
////////////////////////////

// To use, comment out dummy data below
// and add type="module" attr to js import
// in html file


// let data, studentCounts, terms = [];

// await d3.json('hw3data.json')
//     .then((d) => {
//         data = d;
//         studentCounts = data.map(d => { return d.students });
//         terms = data.map(d => { return d.term });
//     })
//     .catch((error) => {
//         console.error(error);
//     });

////////////////////////////
///END JSON DATA IMPORT ////
////////////////////////////


//////////////////////////////////
// DUMMY DATA FOR LOCAL TESTING //
//////////////////////////////////

const data = [
    {
        "term": "Spring 16",
        "students": 160
    },
    {
        "term": "Fall 16",
        "students": 170
    },
    {
        "term": "Spring 17",
        "students": 120
    },
    {
        "term": "Fall 17",
        "students": 185
    },
    {
        "term": "Spring 18",
        "students": 190
    },
    {
        "term": "Fall 18",
        "students": 195
    }
];

const studentCounts = data.map(d => { return d.students });
const terms = data.map(d => { return d.term });

////////////////////////////
////// END DUMMY DATA///////
////////////////////////////

const margin = { top: 30, right: 30, bottom: 30, left: 40, }
const height = 200 - margin.top - margin.bottom,
    width = 400 - margin.left - margin.right,
    barW = 40,
    barSpace = 5;
const fontSize = 10;

const myColors = d3.scaleLinear()
    .domain([0, studentCounts.length])
    .range(['indianred', 'darkred']);

const tooltip = d3.select('body').append('div')
    .classed('tooltip', true);

const verticalGuide = d3.scaleLinear()
    .domain([0, d3.max(studentCounts)])
    .range([height, 0]);

const yS = d3.scaleLinear()
    .domain([0, d3.max(studentCounts)])
    .range([0, height]);

const xS = d3.scaleBand()
    .domain(d3.range(0, terms.length))
    .range([0, width])
    .padding(0.1);

const graph = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('background', '#ccc')
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    .call(
        d3.axisLeft(yS)
            .scale(verticalGuide)
            .ticks(3)
            .tickSize(-width, 0, 0)
            .tickPadding(5)
    )
    .classed('axis', true);

graph.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', (_, i) => { return myColors(i) })
    .attr('width', xS.bandwidth)
    .attr('height', d => { return yS(d.students) })
    .attr('x', (_, i) => { return xS(i) })
    .attr('y', (d, _) => { return height - yS(d.students) })
    .on('mouseover', function (_, d) {
        d3.select(this)
            .style('opacity', 0.9);

        const chartCoords = d3.select("#chart svg").node().getBoundingClientRect();
        const [chartOffsetX, chartOffsetY] = [chartCoords.x, chartCoords.y]

        const barOffsetX = parseInt(d3.select(this).attr('x'));
        const barOffsetY = parseInt(d3.select(this).attr('y'));
        const barLabelX = chartOffsetX + barOffsetX + barW + barSpace;
        const barLabelY = chartOffsetY + barOffsetY + fontSize;
        tooltip.transition()
            .style('opacity', 1);
        tooltip.html(d.students)
            .style('left', barLabelX + 'px')
            .style('top', barLabelY + 'px')
    })

    .on('mouseout', function () {
        d3.select(this)
            .style('opacity', 1);
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    })

const xLabels = d3.scaleBand()
    .domain(terms)
    .range([0, width]);

graph.append('g')
    .call(
        d3.axisBottom(xLabels)
            .tickValues(terms)
            .tickSize(0)
            .tickPadding(8)
    )
    .attr('transform', 'translate(0, ' + height + ')');