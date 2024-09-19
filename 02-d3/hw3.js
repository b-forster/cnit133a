const data = [
    { "term": "Spring 16", "students": 160 },
    { "term": "Fall 16", "students": 170 },
    { "term": "Spring 17", "students": 120 },
    { "term": "Fall 17", "students": 185 },
    { "term": "Spring 18", "students": 190 },
    { "term": "Fall 18", "students": 195 }
]
const studentCounts = data.map((d) => { return d.students; });

const margin = { top: 20, right: 20, bottom: 30, left: 40, }
const height = 200 - margin.top - margin.bottom,
    width = 400 - margin.left - margin.right,
    barW = 40,
    barSpace = 5;

const myColors = d3.scaleLinear()
    .domain([0, studentCounts.length])
    .range(['indianred', 'darkred'])

const verticalGuide = d3.scaleLinear()
    .domain([0, d3.max(studentCounts)])
    .range([height, 0])

const yS = d3.scaleLinear()
    .domain([0, d3.max(studentCounts)])
    .range([0, height])

const xS = d3.scaleBand()
    .domain(d3.range(0, studentCounts.length))
    .range([0, width])
    .padding(0.1)

const graph = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('background', 'silver')
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    .call(d3.axisLeft(yS).scale(verticalGuide))

graph.append('g')
    .call(d3.axisBottom(xS))
    .attr('transform', 'translate(0, ' + height + ')')

graph.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', (_, i) => { return myColors(i) })
    .attr('width', xS.bandwidth)
    .attr('height', d => { return yS(d.students) })
    .attr('x', (_, i) => { return xS(i) })
    .attr('y', (d, _) => { return height - yS(d.students) })
    .on('mouseover', function () {
        d3.select(this).style('opacity', 0.6)
    })
    .on('mouseout', function () {
        d3.select(this).style('opacity', 1)
    })
