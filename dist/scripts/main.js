// Working with D3 Layouts: Pie Chart (basic 3-part)
var width = 400,
	height = 400,
	radius = 200,
	colors = d3.scale.category20c();

var piedata = [
	{
		label: "Barot",
		value: 10
	},{
		label: "Gerard",
		value: 10
	},{
		label: "Jennifer",
		value: 50
	}
]

var pie = d3.layout.pie()
	.value(function(d) {
			return d.value;
	})

var arc = d3.svg.arc()
	.outerRadius(radius)

var myChart = d3.select('#pie1').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
	.selectAll('path').data(pie(piedata))
	.enter().append('path')
		.attr('fill', function(d,i) {
			return colors(i);
		})
		.attr('d', arc)




// Working with D3 Layouts: Pie Chart (more complex)
var width = 400,
	height = 400,
	radius = 200,
	colors = d3.scale.ordinal()
		.range(['#595AB7','#A57706','#D11C24','#C61C6F','#BD3613','#2176C7','#259286','#738A05']);

var piedata = [
	{	label: "Barot",
		value: 50	},
	{	label: "Gerard",
		value: 50	},
	{	label: "Jonathan",
		value: 50	},
	{	label: "Lorenzo",
		value: 50	},
	{	label: "Hillary",
		value: 50	},
	{	label: "Jennifer",
		value: 50	}
]

var pie = d3.layout.pie()
	.value(function(d) {
			return d.value;
	})

var arc = d3.svg.arc()
	.outerRadius(radius)

var myChart = d3.select('#pie2').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
	.selectAll('path').data(pie(piedata))
	.enter().append('g')
		.attr('class', 'slice')


var slices = d3.selectAll('g.slice')
	.append('path')
	.attr('fill', function(d,i) {
		return colors(i);
	})
	.attr('d', arc)

var text = d3.selectAll('g.slice')
	.append('text')
	.text(function(d,i) {
		return d.data.label;
	})
	.attr('text-anchor', 'middle')
	.attr('fill', 'white')
	.attr('transform', function(d){
		d.innerRadius = 0;
		d.outerRadius = radius;
		return 'translate('+arc.centroid(d)+')'
	})



// Force layouts!
var w = 600,
    h = 400;

var circleWidth = 5;

var palette = {
      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",
      "darkblue": "#0A2933",
      "darkerblue": "#042029",
      "paleryellow": "#FCF4DC",
      "paleyellow": "#EAE3CB",
      "yellow": "#A57706",
      "orange": "#BD3613",
      "red": "#D11C24",
      "pink": "#C61C6F",
      "purple": "#595AB7",
      "blue": "#2176C7",
      "green": "#259286",
      "yellowgreen": "#738A05"
  }
// array of objects with name parameter, and target parameter if a child of another node.
var nodes = [
  {name: "Parent"},
  {name: "child1"},
  {name: "child2", target: [0]},
  {name: "child3", target: [0]},
  {name: "child4", target: [1]},
  {name: "child5", target: [0, 1, 2, 3]},
]

// array of objects that have source and target elements
var links =[];
              
for (var i = 0; i<nodes.length; i++) {
	if(nodes[i].target !== undefined) {
		for(var x = 0; x< nodes[i].target.length; x++) {
			links.push({
					source: nodes[i],
					target: nodes[nodes[i].target[x]]
			})
		}
	}
}

var myChart = d3.select('#force')
	.append('svg')
	.attr('width', w)
	.attr('height', h)

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .gravity(0.1)
    .charge(-1000)
    .size([w, h]);

 var link = myChart.selectAll('line')
    .data(links).enter().append('line')
    .attr('stroke', palette.gray)
        
 var node = myChart.selectAll('circle')
    .data(nodes).enter()
    .append('g')
    .call(force.drag)


    //CIRCLE
    node.append('circle')
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", circleWidth)
      .attr("fill", function(d, i) {
      	if (i>0) { return palette.pink }
      	else { return palette.blue }
      })

    //TEXT
    node.append("text")
      .text(function(d, i) { return d.name })
      .attr("fill", function(d) {
      	if (i>0) { return palette.mediumgray }
      	else { return palette.yellowgreen }
      })
      .attr("x", function(d, i) {
      	if (i>0) { return circleWidth + 4 }
      	else{ return circleWidth - 15 }
      })  
      .attr("y", function(d, i) {
      	if (i>0) { return circleWidth }
      	else{ return 8 }
      })        
      .attr("font-size", function(d, i) {
      	if (i>0) { return '1em'}
      	else{ return '1.8em'}
      })        
      .attr("text-anchor", function(d, i) {
      	if (i>0) { return 'beginning'}
      	else{ return 'end'}
      })        



force.on("tick", function(e) {
  node.attr("transform", function(d, i) {     
    return "translate(" + d.x + "," + d.y + ")"; 
});
    
  link
  	.attr("x1", function(d)   { return d.source.x; })
    .attr("y1", function(d)   { return d.source.y; })
    .attr("x2", function(d)   { return d.target.x; })
    .attr("y2", function(d)   { return d.target.y; })
	});

force.start();


d3.select(".basic2")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });


//First, we select the chart container using a class selector.
var chart = d3.select(".basic2");

//Next we initiate the data join by defining the selection to which we will join data.
var bar = chart.selectAll("div");

//Next we join the data (defined previously) to the selection using selection.data. 
var barUpdate = bar.data(data);

var barEnter = barUpdate.enter().append("div");

barEnter.style("width", function(d) { return d * 10 + "px"; });

barEnter.text(function(d) { return d; });
// From http://mkweb.bcgsc.ca/circos/guide/tables/
var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];

var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

var width = 960,
    height = 500,
    innerRadius = Math.min(width, height) * .41,
    outerRadius = innerRadius * 1.1;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(["#000000", "#FFDD89", "#957244", "#F26223"]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("g").selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

var ticks = svg.append("g").selectAll("g")
    .data(chord.groups)
  .enter().append("g").selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#000");

ticks.append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
    .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .text(function(d) { return d.label; });

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return fill(d.target.index); })
    .style("opacity", 1);

// Returns an array of tick angles and labels, given a group.
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
  };
}

// select method modifies only the first element's text with the specified class
d3.select('.item').text('selected')

// selectAll method modifies all elements' text with the specified class. Returns an array-like element!
d3.selectAll('.item').text('selected')

// selectAll method + "nth" psuedo-selector traverses the "array" (which IS NOT 0-indexed)
// d3.selectAll('.item:nth-child(2)').text('selected')
// d3.selectAll('.item:nth-child(odd)').text('selected')
// d3.selectAll('.item:nth-child(n+3)').text('selected')
d3.selectAll('.item:nth-child(2n)').text('selected')

// html method used to modify the content of an element 
d3.selectAll('.item:nth-child(3n)')
	.html('<strong>selection</strong>')

d3.select('.item')
	.append('div')
	.html('<strong>selection</strong>')

d3.select('.item')
	.append('span')
	.html(' <strong>selection</strong>')

d3.select('#chart1')
	.append('span')
	.html(' <strong>selection</strong>')

d3.select('#chart1')
	.insert('span', ':nth-child(3)')
	.html(' <strong>selection</strong>')

d3.select('#chart1 .item:nth-child(3)')
	.remove()

//attr method modifies any css attribute of an element
d3.selectAll('.item')
	.attr('class', 'highlight')

d3.selectAll('.item')
	.classed('highlight', true)

d3.selectAll('.item:nth-child(3)')
	.classed('highlight', true)

d3.selectAll('.item:nth-child(3)')
	.classed({
		'highlight': true,
		'item': false
	})

d3.selectAll('.item:nth-child(3)')
	.style({
		'background': 'black',
		'padding': '10px',
		'margin': '5px',
		'color': 'red'
	})

// data method
d3.selectAll('.item')
	.data([true, true, true])
	.style('background', '#268BD2')
	.style('color', 'white')

var myStyles = ['#268BD2'];

d3.selectAll('.item')
	.data(myStyles)
	.style('background', myStyles[0])

// using a callback function in place of specific value
var myStyles = [
	'#268BD2', 
	'#BD3613',
	'#D11C24',
	'#C61C6F',
	'#595AB7',
	'#2176C7'
];

d3.selectAll('.item')
	.data(myStyles)
	.style('background', function(d) {
		return d
	})

// pass in an object vs. one value in style method
var myStyles = [
	'#A57706', 
	'#BD3613',
	'#D11C24',
	'#C61C6F',
	'#595AB7',
	'#2176C7'
];

d3.selectAll('.item')
	.data(myStyles)
	.style({
		'color': 'white',
		'background': function(d) {
			return d;
		}
	})

// convert styles to object notations to add multiple styles
var myStyles = [
	{ width: 200,
		hue: '#A57706'},
	{ width: 230,
		hue: '#BD3613'},
	{ width: 220,
		hue: '#D11C24'},
	{ width: 290,
		hue: '#C61C6F'},
	{ width: 236,
		hue: '#595AB7'},
	{ width: 230,
		hue: '#2176C7'},
];

d3.selectAll('.item')
	.data(myStyles)
	.style({
		'color': 'white',
		'background': function(d) {
			return d.hue;
		},
		width: function(d) {
			return d.width + 'px';
		}
	})

var myStyles = [
	{ width: 200,
		name: 'Person One',
		hue: '#A57706'},
	{ width: 230,
		name: 'Person Two',
		hue: '#BD3613'},
	{ width: 220,
		name: 'Person Three',
		hue: '#D11C24'},
	{ width: 290,
		name: 'Person Four',
		hue: '#C61C6F'},
	{ width: 236,
		name: 'Person Five',
		hue: '#595AB7'},
	{ width: 230,
		name: 'Person Six',
		hue: '#2176C7'},
];
// "time travel" sub-selections: selecting things before they exist
d3.selectAll('#chart2').selectAll('div')
	.data(myStyles)
	.enter().append('div')
	.classed('.item', true)
	.text(function(d) {
		return d.name;
	})
	.style({
		'color': 'white',
		'background': function(d) {
			return d.hue;
		},
		width: function(d) {
			return d.width + 'px';
		}
	})

// Drawing svg using d3
d3.select('#chart3')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', '#93A1A1')
	.append('rect')
		.attr('x', 200)
		.attr('y', 100)
		.attr('height', 200)
		.attr('width', 200)
		.style('fill', '#CB4B19')
	d3.select('svg')
		.append('circle')
			.attr('cx', 300)
			.attr('cy', 200)
			.attr('r', 50)
			.style('fill', '#840043')
	

var bardata = [20, 30, 45, 15];

var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;

d3.select('#chart4').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', '#C61C6F')
		.attr('width', barWidth)
		.attr('height', function(d) {
			return d;
		})
		.attr('x', function(d,i) {
			return i * (barWidth + barOffset);
		})
		// this flips chart to be right side up
		.attr('y', function(d) {
			return height - d;
		})


// Balance the proportions of data using scales
var bardata = [20, 30, 20, 15, 40, 80];

var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;
// quantitative scales: no matter what max value of data is, the proportions will resize to fit
var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])
// ordinal scales: no matter how many values we enter into chart, the width will fit
var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))
		.rangeBands([0, width])

d3.select('#chart4').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', '#C61C6F')
		// Note: 'rangeBand' is singular unlike plural method above
		.attr('width', xScale.rangeBand)
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x', function(d,i) {
			return xScale(i);
		})
		// this flips chart to be right side up
		.attr('y', function(d) {
			return height - yScale(d);
		})



// Stepped colors based on value
var bardata = [20, 30, 20, 15, 40, 80, 20, 30, 20, 15, 40, 80, 20, 30, 20, 15, 40, 80];

var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;

var colors = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range(['#FFB832', '#C61C6F'])

// quantitative scales: no matter what max value of data is, the proportions will resize to fit
var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])
// ordinal scales: no matter how many values we enter into chart, the width will fit
var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))
		.rangeBands([0, width])

d3.select('#chart4').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#C9D7D6')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', colors)
		// Note: 'rangeBand' is singular unlike plural method above
		.attr('width', xScale.rangeBand)
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x', function(d,i) {
			return xScale(i);
		})
		// this flips chart to be right side up
		.attr('y', function(d) {
			return height - yScale(d);
		})


// !! LOVE !! Gradient color based on length/position vs. value
var bardata = [];

for (var i=0; i<100; i++) {
	bardata.push(Math.random()*30)
}

var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;

var tempColor;

var colors = d3.scale.linear()
		.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
		.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

// quantitative scales: no matter what max value of data is, the proportions will resize to fit
var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])
// ordinal scales: no matter how many values we enter into chart, the width will fit
var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))
		.rangeBands([0, width])

var myChart = d3.select('#chart4').append('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', function(d,i) {
			return colors(i);
		})
		// Note: 'rangeBand' is singular unlike plural method above
		.attr('width', xScale.rangeBand)
		.attr('x', function(d,i) {
			return xScale(i);
		})
		.attr('height', function(d) {
			return yScale(d);
		})
		// this flips chart to be right side up
		.attr('y', function(d) {
			return height - yScale(d);
		})

	.on('mouseover', function(d) {
		tempColor = this.style.fill;
		d3.select(this)
			.style('opacity', .5)
			.style('fill', 'white')
	})

	.on('mouseout', function(d) {
		d3.select(this)
			.style('opacity', 1)
			.style('fill', tempColor)
	})


// !! LOVE !! Adding transition events
var bardata = [];

for (var i=0; i<100; i++) {
	bardata.push(Math.random()*30)
}

var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;

var tempColor;

var colors = d3.scale.linear()
		.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
		.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

// quantitative scales: no matter what max value of data is, the proportions will resize to fit
var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])
// ordinal scales: no matter how many values we enter into chart, the width will fit
var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))
		.rangeBands([0, width])

var myChart = d3.select('#chart4').append('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', function(d,i) {
			return colors(i);
		})
		// Note: 'rangeBand' is singular unlike plural method above
		.attr('width', xScale.rangeBand)
		.attr('x', function(d,i) {
			return xScale(i);
		})
		.attr('height', 0)
		// this flips chart to be right side up
		.attr('y', height)

	.on('mouseover', function(d) {
		tempColor = this.style.fill;
		d3.select(this)
			.style('opacity', .5)
			.style('fill', 'white')
	})

	.on('mouseout', function(d) {
		d3.select(this)
			.style('opacity', 1)
			.style('fill', tempColor)
	})

myChart.transition()
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})
		.delay(function(d, i) {
			return i * 20;
		})
		.duration(1000)
		.ease('elastic')


// !! LOVE !! Adding tooltips
var bardata = [];

for (var i=0; i<100; i++) {
	bardata.push(Math.round(Math.random()*30)+1)
}

var height = 400,
		width = 600,
		barWidth = 50,
		barOffset = 5;

var tempColor;

var colors = d3.scale.linear()
		.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
		.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

// quantitative scales: no matter what max value of data is, the proportions will resize to fit
var yScale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])
// ordinal scales: no matter how many values we enter into chart, the width will fit
var xScale = d3.scale.ordinal()
		.domain(d3.range(0, bardata.length))
		.rangeBands([0, width])

var tooltip = d3.select('body').append('div')
	.style('position', 'absolute')
	.style('padding', '0 10px')
	.style('background', 'white')
	.style('opacity', 0)

var myChart = d3.select('#chart4').append('svg')
	.attr('width', width)
	.attr('height', height)
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', function(d,i) {
			return colors(i);
		})
		// Note: 'rangeBand' is singular unlike plural method above
		.attr('width', xScale.rangeBand)
		.attr('x', function(d,i) {
			return xScale(i);
		})
		.attr('height', 0)
		// this flips chart to be right side up
		.attr('y', height)

	.on('mouseover', function(d) {
		tooltip.transition()
			.style('opacity', .9)

		tooltip.html(d)
			.style('left', (d3.event.pageX -35) + 'px')
			.style('top', (d3.event.pageY -30) + 'px')

		tempColor = this.style.fill;
		d3.select(this)
			.style('opacity', .5)
			.style('fill', 'gray')
	})

	.on('mouseout', function(d) {
		d3.select(this)
			.style('opacity', 1)
			.style('fill', tempColor)
	})

myChart.transition()
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})
		.delay(function(d, i) {
			return i * 20;
		})
		.duration(1000)
		.ease('elastic')








// // Sorting data
// var bardata = [];

// for (var i=0; i<100; i++) {
// 	bardata.push(Math.round(Math.random()*30)+1)
// }

// // Ascending order display of random numbers
// bardata.sort(function compareNumbers(a,b) {
// 	return a -b;
// })

// // adding margins to data (using a d3 convention)
// var margin = { top: 30, right: 30, bottom: 40, left:50}
// // test changing the width and make sure margins/axises are still aligned
// var height = 400 - margin.top - margin.bottom,
// 		width = 600 - margin.left - margin.right,
// 		barWidth = 50,
// 		barOffset = 5;

// var tempColor;

// var colors = d3.scale.linear()
// 		.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
// 		.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

// // quantitative scales: no matter what max value of data is, the proportions will resize to fit
// var yScale = d3.scale.linear()
// 		.domain([0, d3.max(bardata)])
// 		.range([0, height])
// // ordinal scales: no matter how many values we enter into chart, the width will fit
// var xScale = d3.scale.ordinal()
// 		.domain(d3.range(0, bardata.length))
// 		// create space between bars with third value below
// 		.rangeBands([0, width], 0.5)

// var tooltip = d3.select('body').append('div')
// 	.style('position', 'absolute')
// 	.style('padding', '0 10px')
// 	.style('background', 'white')
// 	.style('opacity', 0)

// var myChart = d3.select('#chart4').append('svg')
// 	.style('background', '#E7E0CB') //allows us to see margin area
// 	.attr('width', width + margin.left + margin.right)
// 	.attr('height', height + margin.top + margin.bottom)
// 	.append('g') // groups below svg elements
// 	.attr('transform', 'translate('+ margin.left +', '+ margin.top +')')
// 	.selectAll('rect').data(bardata)
// 	.enter().append('rect')
// 		.style('fill', function(d,i) {
// 			return colors(i);
// 		})
// 		// Note: 'rangeBand' is singular unlike plural method above
// 		.attr('width', xScale.rangeBand)
// 		.attr('x', function(d,i) {
// 			return xScale(i);
// 		})
// 		.attr('height', 0)
// 		// this flips chart to be right side up
// 		.attr('y', height)

// 	.on('mouseover', function(d) {
// 		tooltip.transition()
// 			.style('opacity', .9)

// 		tooltip.html(d)
// 			.style('left', (d3.event.pageX -35) + 'px')
// 			.style('top', (d3.event.pageY -30) + 'px')

// 		tempColor = this.style.fill;
// 		d3.select(this)
// 			.style('opacity', .5)
// 			.style('fill', 'gray')
// 	})

// 	.on('mouseout', function(d) {
// 		d3.select(this)
// 			.style('opacity', 1)
// 			.style('fill', tempColor)
// 	})

// myChart.transition()
// 		.attr('height', function(d) {
// 			return yScale(d);
// 		})
// 		.attr('y', function(d) {
// 			return height - yScale(d);
// 		})
// 		.delay(function(d, i) {
// 			return i * 20;
// 		})
// 		.duration(1000)
// 		.ease('elastic')

// // setting up axises
// var vGuideScale = d3.scale.linear()
// 	.domain([0, d3.max(bardata)])
// 	.range([height, 0])

// var vAxis = d3.svg.axis()
// 	.scale(vGuideScale)
// 	.orient('left')
// 	.ticks(10)

// var vGuide = d3.select('svg').append('g')
// 	vAxis(vGuide)
// 	vGuide.attr('transform', 'translate('+ margin.left+', '+ margin.top +')')
// 	vGuide.selectAll('path')
// 		.style({fill: 'none', stroke: '#000'})
// 	vGuide.selectAll('line')
// 		.style({stroke: '#000'})

// var hAxis = d3.svg.axis()
// 	.scale(xScale)
// 	.orient('bottom')
// 	.tickValues(xScale.domain().filter(function(d, i) {
// 			return !(i % (bardata.length/5)); //modulous operator (%) for incremental result
// 	}))

// var hGuide = d3.select('svg').append('g')
// 	hAxis(hGuide)
// 	hGuide.attr('transform', 'translate('+ margin.left+', ' +(height + margin.top) +')')
// 	hGuide.selectAll('path')
// 		.style({fill: 'none', stroke: '#000'})
// 	hGuide.selectAll('line')
// 		.style({stroke: '#000'})




// // External data!!! Requires disabling web security setting to work in Chrome
// var bardata = [];

// // convenience method for external data parsing and imports
// d3.tsv('data.tsv', function(data) {

// 	for (key in data) {
// 		bardata.push(data[key].value)
// 	}


// 	// adding margins to data (using a d3 convention)
// 	var margin = { top: 30, right: 30, bottom: 40, left:50}
// 	// test changing the width and make sure margins/axises are still aligned
// 	var height = 400 - margin.top - margin.bottom,
// 			width = 600 - margin.left - margin.right,
// 			barWidth = 50,
// 			barOffset = 5;

// 	var tempColor;

// 	var colors = d3.scale.linear()
// 			.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
// 			.range(['#FFB832', '#C61C6F', '#268BD2', '#85992C'])

// 	// quantitative scales: no matter what max value of data is, the proportions will resize to fit
// 	var yScale = d3.scale.linear()
// 			.domain([0, d3.max(bardata)])
// 			.range([0, height])
// 	// ordinal scales: no matter how many values we enter into chart, the width will fit
// 	var xScale = d3.scale.ordinal()
// 			.domain(d3.range(0, bardata.length))
// 			// create space between bars with third value below
// 			.rangeBands([0, width], 0.5)

// 	var tooltip = d3.select('body').append('div')
// 		.style('position', 'absolute')
// 		.style('padding', '0 10px')
// 		.style('background', 'white')
// 		.style('opacity', 0)

// 	var myChart = d3.select('#chart4').append('svg')
// 		.style('background', '#E7E0CB') //allows us to see margin area
// 		.attr('width', width + margin.left + margin.right)
// 		.attr('height', height + margin.top + margin.bottom)
// 		.append('g') // groups below svg elements
// 		.attr('transform', 'translate('+ margin.left +', '+ margin.top +')')
// 		.selectAll('rect').data(bardata)
// 		.enter().append('rect')
// 			.style('fill', function(d,i) {
// 				return colors(i);
// 			})
// 			// Note: 'rangeBand' is singular unlike plural method above
// 			.attr('width', xScale.rangeBand)
// 			.attr('x', function(d,i) {
// 				return xScale(i);
// 			})
// 			.attr('height', 0)
// 			// this flips chart to be right side up
// 			.attr('y', height)

// 		.on('mouseover', function(d) {
// 			tooltip.transition()
// 				.style('opacity', .9)

// 			tooltip.html(d)
// 				.style('left', (d3.event.pageX -35) + 'px')
// 				.style('top', (d3.event.pageY -30) + 'px')

// 			tempColor = this.style.fill;
// 			d3.select(this)
// 				.style('opacity', .5)
// 				.style('fill', 'gray')
// 		})

// 		.on('mouseout', function(d) {
// 			d3.select(this)
// 				.style('opacity', 1)
// 				.style('fill', tempColor)
// 		})

// 	myChart.transition()
// 			.attr('height', function(d) {
// 				return yScale(d);
// 			})
// 			.attr('y', function(d) {
// 				return height - yScale(d);
// 			})
// 			.delay(function(d, i) {
// 				return i * 20;
// 			})
// 			.duration(1000)
// 			.ease('elastic')

// 	// setting up axises
// 	var vGuideScale = d3.scale.linear()
// 		.domain([0, d3.max(bardata)])
// 		.range([height, 0])

// 	var vAxis = d3.svg.axis()
// 		.scale(vGuideScale)
// 		.orient('left')
// 		.ticks(10)

// 	var vGuide = d3.select('svg').append('g')
// 		vAxis(vGuide)
// 		vGuide.attr('transform', 'translate('+ margin.left+', '+ margin.top +')')
// 		vGuide.selectAll('path')
// 			.style({fill: 'none', stroke: '#000'})
// 		vGuide.selectAll('line')
// 			.style({stroke: '#000'})

// 	var hAxis = d3.svg.axis()
// 		.scale(xScale)
// 		.orient('bottom')
// 		.tickValues(xScale.domain().filter(function(d, i) {
// 				return !(i % (bardata.length/5)); //modulous operator (%) for incremental result
// 		}))

// 	var hGuide = d3.select('svg').append('g')
// 		hAxis(hGuide)
// 		hGuide.attr('transform', 'translate('+ margin.left+', ' +(height + margin.top) +')')
// 		hGuide.selectAll('path')
// 			.style({fill: 'none', stroke: '#000'})
// 		hGuide.selectAll('line')
// 			.style({stroke: '#000'});

// });

// // force.start();


