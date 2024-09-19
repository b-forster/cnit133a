const data = [
    { "term": "Spring 16", "students": 160 },
    { "term": "Fall 16", "students": 170 },
    { "term": "Spring 17", "students": 120 },
    { "term": "Fall 17", "students": 185 },
    { "term": "Spring 18", "students": 190 },
    { "term": "Fall 18", "students": 195 }
]
const studentCounts = data.map((d) => { return d.students; });

const height = 200, width = 500, barW = 40, barSpace = 5;

let yS = d3.scaleLinear()
    .domain([0, d3.max(studentCounts)])
    .range([0, height])

let graph = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'silver')

graph.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', 'blue')
    .attr('width', barW)
    .attr('height', d => { return yS(d.students) })
    .attr('x', (_, i) => { return i * (barW + barSpace) })
    .attr('y', (d, _) => { return height - d.students })