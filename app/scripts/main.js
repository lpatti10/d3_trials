// // select method modifies only the first element's text with the specified class
// d3.select('.item').text('selected')

// // selectAll method modifies all elements' text with the specified class. Returns an array-like element!
// d3.selectAll('.item').text('selected')

// // selectAll method + "nth" psuedo-selector traverses the "array" (which IS NOT 0-indexed)
// // d3.selectAll('.item:nth-child(2)').text('selected')
// // d3.selectAll('.item:nth-child(odd)').text('selected')
// // d3.selectAll('.item:nth-child(n+3)').text('selected')
// d3.selectAll('.item:nth-child(2n)').text('selected')

// // html method used to modify the content of an element 
// d3.selectAll('.item:nth-child(3n)')
// 	.html('<strong>selection</strong>')

// d3.select('.item')
// 	.append('div')
// 	.html('<strong>selection</strong>')

// d3.select('.item')
// 	.append('span')
// 	.html(' <strong>selection</strong>')

// d3.select('#chart1')
// 	.append('span')
// 	.html(' <strong>selection</strong>')

// d3.select('#chart1')
// 	.insert('span', ':nth-child(3)')
// 	.html(' <strong>selection</strong>')

// d3.select('#chart1 .item:nth-child(3)')
// 	.remove()

// attr method modifies any css attribute of an element
// d3.selectAll('.item')
// 	.attr('class', 'highlight')

// d3.selectAll('.item')
// 	.classed('highlight', true)

// d3.selectAll('.item:nth-child(3)')
// 	.classed('highlight', true)

// d3.selectAll('.item:nth-child(3)')
// 	.classed({
// 		'highlight': true,
// 		'item': false
// 	})

// d3.selectAll('.item:nth-child(3)')
// 	.style({
// 		'background': 'black',
// 		'padding': '10px',
// 		'margin': '5px',
// 		'color': 'red'
// 	})

// data method
// d3.selectAll('.item')
// 	.data([true, true, true])
// 	.style('background', '#268BD2')
// 	.style('color', 'white')

// var myStyles = ['#268BD2'];

// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style('background', myStyles[0])

// using a callback function in place of specific value
// var myStyles = [
// 	'#268BD2', 
// 	'#BD3613',
// 	'#D11C24',
// 	'#C61C6F',
// 	'#595AB7',
// 	'#2176C7'
// ];

// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style('background', function(d) {
// 		return d
// 	})

// // pass in an object vs. one value in style method
// var myStyles = [
// 	'#A57706', 
// 	'#BD3613',
// 	'#D11C24',
// 	'#C61C6F',
// 	'#595AB7',
// 	'#2176C7'
// ];

// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style({
// 		'color': 'white',
// 		'background': function(d) {
// 			return d;
// 		}
// 	})

// convert styles to object notations to add multiple styles
// var myStyles = [
// 	{ width: 200,
// 		hue: '#A57706'},
// 	{ width: 230,
// 		hue: '#BD3613'},
// 	{ width: 220,
// 		hue: '#D11C24'},
// 	{ width: 290,
// 		hue: '#C61C6F'},
// 	{ width: 236,
// 		hue: '#595AB7'},
// 	{ width: 230,
// 		hue: '#2176C7'},
// ];

// d3.selectAll('.item')
// 	.data(myStyles)
// 	.style({
// 		'color': 'white',
// 		'background': function(d) {
// 			return d.hue;
// 		},
// 		width: function(d) {
// 			return d.width + 'px';
// 		}
// 	})

// var myStyles = [
// 	{ width: 200,
// 		name: 'Person One',
// 		hue: '#A57706'},
// 	{ width: 230,
// 		name: 'Person Two',
// 		hue: '#BD3613'},
// 	{ width: 220,
// 		name: 'Person Three',
// 		hue: '#D11C24'},
// 	{ width: 290,
// 		name: 'Person Four',
// 		hue: '#C61C6F'},
// 	{ width: 236,
// 		name: 'Person Five',
// 		hue: '#595AB7'},
// 	{ width: 230,
// 		name: 'Person Six',
// 		hue: '#2176C7'},
// ];
// // "time travel" sub-selections: selecting things before they exist
// d3.selectAll('#chart2').selectAll('div')
// 	.data(myStyles)
// 	.enter().append('div')
// 	.classed('.item', true)
// 	.text(function(d) {
// 		return d.name;
// 	})
// 	.style({
// 		'color': 'white',
// 		'background': function(d) {
// 			return d.hue;
// 		},
// 		width: function(d) {
// 			return d.width + 'px';
// 		}
// 	})

// // Drawing svg using d3
// d3.select('#chart3')
// 	.append('svg')
// 		.attr('width', 600)
// 		.attr('height', 400)
// 		.style('background', '#93A1A1')
// 	.append('rect')
// 		.attr('x', 200)
// 		.attr('y', 100)
// 		.attr('height', 200)
// 		.attr('width', 200)
// 		.style('fill', '#CB4B19')
// 	d3.select('svg')
// 		.append('circle')
// 			.attr('cx', 300)
// 			.attr('cy', 200)
// 			.attr('r', 50)
// 			.style('fill', '#840043')
	

// var bardata = [20, 30, 45, 15];

// var height = 400,
// 		width = 600,
// 		barWidth = 50,
// 		barOffset = 5;

// d3.select('#chart4').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
// 	.style('background', '#C9D7D6')
// 	.selectAll('rect').data(bardata)
// 	.enter().append('rect')
// 		.style('fill', '#C61C6F')
// 		.attr('width', barWidth)
// 		.attr('height', function(d) {
// 			return d;
// 		})
// 		.attr('x', function(d,i) {
// 			return i * (barWidth + barOffset);
// 		})
// 		// this flips chart to be right side up
// 		.attr('y', function(d) {
// 			return height - d;
// 		})


// // Balance the proportions of data using scales
// var bardata = [20, 30, 20, 15, 40, 80];

// var height = 400,
// 		width = 600,
// 		barWidth = 50,
// 		barOffset = 5;
// // quantitative scales: no matter what max value of data is, the proportions will resize to fit
// var yScale = d3.scale.linear()
// 		.domain([0, d3.max(bardata)])
// 		.range([0, height])
// // ordinal scales: no matter how many values we enter into chart, the width will fit
// var xScale = d3.scale.ordinal()
// 		.domain(d3.range(0, bardata.length))
// 		.rangeBands([0, width])

// d3.select('#chart4').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
// 	.style('background', '#C9D7D6')
// 	.selectAll('rect').data(bardata)
// 	.enter().append('rect')
// 		.style('fill', '#C61C6F')
// 		// Note: 'rangeBand' is singular unlike plural method above
// 		.attr('width', xScale.rangeBand)
// 		.attr('height', function(d) {
// 			return yScale(d);
// 		})
// 		.attr('x', function(d,i) {
// 			return xScale(i);
// 		})
// 		// this flips chart to be right side up
// 		.attr('y', function(d) {
// 			return height - yScale(d);
// 		})



// // Stepped colors based on value
// var bardata = [20, 30, 20, 15, 40, 80, 20, 30, 20, 15, 40, 80, 20, 30, 20, 15, 40, 80];

// var height = 400,
// 		width = 600,
// 		barWidth = 50,
// 		barOffset = 5;

// var colors = d3.scale.linear()
// 		.domain([0, d3.max(bardata)])
// 		.range(['#FFB832', '#C61C6F'])

// // quantitative scales: no matter what max value of data is, the proportions will resize to fit
// var yScale = d3.scale.linear()
// 		.domain([0, d3.max(bardata)])
// 		.range([0, height])
// // ordinal scales: no matter how many values we enter into chart, the width will fit
// var xScale = d3.scale.ordinal()
// 		.domain(d3.range(0, bardata.length))
// 		.rangeBands([0, width])

// d3.select('#chart4').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
// 	.style('background', '#C9D7D6')
// 	.selectAll('rect').data(bardata)
// 	.enter().append('rect')
// 		.style('fill', colors)
// 		// Note: 'rangeBand' is singular unlike plural method above
// 		.attr('width', xScale.rangeBand)
// 		.attr('height', function(d) {
// 			return yScale(d);
// 		})
// 		.attr('x', function(d,i) {
// 			return xScale(i);
// 		})
// 		// this flips chart to be right side up
// 		.attr('y', function(d) {
// 			return height - yScale(d);
// 		})


// // !! LOVE !! Gradient color based on length/position vs. value
// var bardata = [];

// for (var i=0; i<100; i++) {
// 	bardata.push(Math.random()*30)
// }

// var height = 400,
// 		width = 600,
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
// 		.rangeBands([0, width])

// var myChart = d3.select('#chart4').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
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
// 		.attr('height', function(d) {
// 			return yScale(d);
// 		})
// 		// this flips chart to be right side up
// 		.attr('y', function(d) {
// 			return height - yScale(d);
// 		})

// 	.on('mouseover', function(d) {
// 		tempColor = this.style.fill;
// 		d3.select(this)
// 			.style('opacity', .5)
// 			.style('fill', 'white')
// 	})

// 	.on('mouseout', function(d) {
// 		d3.select(this)
// 			.style('opacity', 1)
// 			.style('fill', tempColor)
// 	})


// // !! LOVE !! Adding transition events
// var bardata = [];

// for (var i=0; i<100; i++) {
// 	bardata.push(Math.random()*30)
// }

// var height = 400,
// 		width = 600,
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
// 		.rangeBands([0, width])

// var myChart = d3.select('#chart4').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
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
// 		tempColor = this.style.fill;
// 		d3.select(this)
// 			.style('opacity', .5)
// 			.style('fill', 'white')
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


// // !! LOVE !! Adding tooltips
// var bardata = [];

// for (var i=0; i<100; i++) {
// 	bardata.push(Math.round(Math.random()*30)+1)
// }

// var height = 400,
// 		width = 600,
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
// 		.rangeBands([0, width])

// var tooltip = d3.select('body').append('div')
// 	.style('position', 'absolute')
// 	.style('padding', '0 10px')
// 	.style('background', 'white')
// 	.style('opacity', 0)

// var myChart = d3.select('#chart4').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
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

// })


// // Working with D3 Layouts: Pie Chart (basic 3-part)
// var width = 400,
// 	height = 400,
// 	radius = 200,
// 	colors = d3.scale.category20c();

// var piedata = [
// 	{
// 		label: "Barot",
// 		value: 10
// 	},{
// 		label: "Gerard",
// 		value: 10
// 	},{
// 		label: "Jennifer",
// 		value: 50
// 	}
// ]

// var pie = d3.layout.pie()
// 	.value(function(d) {
// 			return d.value;
// 	})

// var arc = d3.svg.arc()
// 	.outerRadius(radius)

// var myChart = d3.select('#chart5').append('svg')
// 	.attr('width', width)
// 	.attr('height', height)
// 	.append('g')
// 	.attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
// 	.selectAll('path').data(pie(piedata))
// 	.enter().append('path')
// 		.attr('fill', function(d,i) {
// 			return colors(i);
// 		})
// 		.attr('d', arc)



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

var myChart = d3.select('#chart5').append('svg')
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




