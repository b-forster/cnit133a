const data = [
    { "term": "Spring 16", "students": 160 },
    { "term": "Fall 16", "students": 170 },
    { "term": "Spring 17", "students": 120 },
    { "term": "Fall 17", "students": 185 },
    { "term": "Spring 18", "students": 190 },
    { "term": "Fall 18", "students": 195 }
]
const studentCounts = data.map((d) => { return d.students; });

const height = 200, width = 400, barW = 40, barSpace = 5;

const myColors = d3.scaleLinear()
    .domain([0, studentCounts.length])
    .range(['indianred', 'darkred'])

const yS = d3.scaleLinear()
    .domain([0, d3.max(studentCounts)])
    .range([0, height])

const xS = d3.scaleBand()
    .domain(d3.range(0, studentCounts.length))
    .range([0, width])
    .padding(0.1)

const graph = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'silver')

graph.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', (_, i) => { return myColors(i) })
    .attr('width', xS.bandwidth)
    .attr('height', d => { return yS(d.students) })
    .attr('x', (_, i) => { return xS(i) })
    .attr('y', (d, _) => { return height - d.students })
    .on('mouseover', function () {
        d3.select(this).style('opacity', 0.6)
    })
    .on('mouseout', function () {
        d3.select(this).style('opacity', 1)
    })