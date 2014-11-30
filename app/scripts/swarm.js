

var data = d3.range(500).map(function() {
  return {xloc: 0, yloc: 0, xvel: 0, yvel: 0};
});

var width = 960,
    height = 500,
    angle = 2 * Math.PI;

var x = d3.scale.linear()
    .domain([-5, 5])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([-5, 5])
    .range([0, height]);

var time0 = Date.now(),
    time1;

var fps = d3.select("#fps span");

// var canvas = d3.select("body").append("canvas")
//     .attr("width", width)
//     .attr("height", height);

var canvas1 = d3.select("canvas")
    .attr("width", width)
    .attr("height", height);

var context = canvas1.node().getContext("2d");
context.fillStyle = "steelblue";
context.strokeStyle = "#666";
context.strokeWidth = 1.5;

d3.timer(function() {
  context.clearRect(0, 0, width, height);
            
  data.forEach(function(d) {
    d.xloc += d.xvel;
    d.yloc += d.yvel;
    d.xvel += 0.04 * (Math.random() - .5) - 0.05 * d.xvel - 0.0005 * d.xloc;
    d.yvel += 0.04 * (Math.random() - .5) - 0.05 * d.yvel - 0.0005 * d.yloc;
    context.beginPath();
    context.arc(x(d.xloc), y(d.yloc), Math.min(1 + 1000 * Math.abs(d.xvel * d.yvel), 10), 0, angle);
    context.fill();
    context.stroke();
  });

  time1 = Date.now();
  fps.text(Math.round(1000 / (time1 - time0)));
  time0 = time1;
});