
var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".basic2")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });




// //First, we select the chart container using a class selector.
// var chart = d3.select(".basic2");

// //Next we initiate the data join by defining the selection to which we will join data.
// var bar = chart.selectAll("div");

// //Next we join the data (defined previously) to the selection using selection.data. 
// var barUpdate = bar.data(data);

// var barEnter = barUpdate.enter().append("div");

// barEnter.style("width", function(d) { return d * 10 + "px"; });

// barEnter.text(function(d) { return d; });