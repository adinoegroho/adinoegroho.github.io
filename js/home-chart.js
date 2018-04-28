/* Chart 1 

window.onload = function () 
{

var options = 
{
  animationEnabled: true,
  title: 
  {
    text: "GDP Growth Rate - 2016"
  },
  axisY: 
  {
    title: "Growth Rate (in %)",
    suffix: "%",
    includeZero: false
  },
  axisX: 
  {
    title: "Countries"
  },
  data: 
  [{
    type: "column",
    yValueFormatString: "#,##0.0#"%"",
    dataPoints: 
    [
      { label: "Iraq", y: 10.09 },  
      { label: "Turks & Caicos Islands", y: 9.40 }, 
      { label: "Nauru", y: 8.50 },
      { label: "Ethiopia", y: 7.96 }, 
      { label: "Uzbekistan", y: 7.80 },
      { label: "Nepal", y: 7.56 },
      { label: "Iceland", y: 7.20 },
      { label: "India", y: 7.1 }
      
    ]
  }]
};
$("#chartContainer").CanvasJSChart(options);

}

/* Chart 2 */

var chart = null;
var dataPoints = [];

window.onload = function() 
{

  chart = new CanvasJS.Chart("chartContainer", 
  {
    animationEnabled: true,
    theme: "light2",
    title: 
    {
      text: "Daily Sales Data"
    },
    axisY: 
    {
      title: "pegawai",
      titleFontSize: 24
    },
    data: 
    [{
      type: "column",
      yValueFormatString: "#,### pegawai",
      dataPoints: dataPoints
    }]
  });


  $.getJSON("json/data-chart.json?callback=?", callback);  

}

function callback(data) 
{
  for (var i = 0; i < data.dps.length; i++) 
  {
    dataPoints.push(
    {
      x: new Date(data.dps[i].date),
      y: data.dps[i].pegawai
    });
  }
  chart.render(); 
}