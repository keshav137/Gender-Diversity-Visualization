"use strict";

/* Boilerplate jQuery */
$(function() {
  $.get("res/genderDiversity.csv")
   .done(function (csvData) {
     var data = d3.csvParse(csvData);
     visualize(data);
   })
   .fail(function (e) {
     alert("Failed to load CSV data!");
   });
});

/* Visualize the data in the visualize function */
var visualize = function(data) {
  console.log(data);


  // == BOILERPLATE ==
  var margin = { top: 50, right: 50, bottom: 50, left: 50 },
     width = 800 - margin.left - margin.right,
     height = 930 - margin.top - margin.left;

  var svg = d3.select("#chart")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .style("width", width + margin.left + margin.right)
              .style("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var groupData = _.groupBy(data,"College");
    groupData = _.toArray(groupData);

    console.log(groupData);

    //college svg
    var cSvg = svg.selectAll("whatever")
                .data(groupData)
                .enter()
                .attr("transform" function(d,i){
                  return "translate" + i
                })
                .append("g");



   //drawing a line for every value           
    cSvg.selectAll("s")
         .data(function (d) { return d; })
         .enter()
         .append("circle")
         .attr("cx",300)
         .attr("cy",300)
         .attr("r",function(d){
          return (+d["Total_2015"]) / 30; / 
         })
         .attr("fill","blue");


};
