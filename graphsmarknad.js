var globlist2 = [];
var globlist = [];

$.ajax({
  type: "GET",
  url: "../test.csv",
  dataType: "text",
  async : false,
  success: function(data) {
      globlist = processData(data);
  }
});
globlist2 = globlist;



var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];

generateChartData();

function generateChartData() {

  for (var i = 1; i < globlist.length; i++) {
    var newDate = new Date(globlist2[i][0]);

    a1 = globlist2[i][1];
    a2 = globlist2[i][2];
    a3 = globlist2[i][3];
    a4 = globlist2[i][4];
    // alert(a4);
    chartData1.push({
      "date": newDate,
      "value": Number(a1),
      "title2": globlist2[0][1]
    });
    chartData2.push({
      "date": newDate,
      "value": Number(a2),
      "title2": globlist2[0][2]
    });
    chartData3.push({
      "date": newDate,
      "value": Number(a3),
      "title2": globlist2[0][3]
    });
    chartData4.push({
      "date": newDate,
      "value": Number(a4),
      "title2": globlist2[0][4]
    });
  }
};

var chart = AmCharts.makeChart("chartdiv", {//format på csv filen måste ha stingande datum
  "pathToImages": "https://www.amcharts.com/lib/3/images/",
  "type": "stock",
  "theme": "dark",
  "dataSets": [{
    "title": chartData1[1]["title2"],
    "fieldMappings": [{
      "fromField": "value",
      "toField": "value"
    }, ],
    "dataProvider": chartData1,
    "categoryField": "date"
  }, {
    "title": chartData2[1]["title2"],
    "fieldMappings": [{
      "fromField": "value",
      "toField": "value"
    }],
    "dataProvider": chartData2,
    "categoryField": "date",
    "compared":true
  }, {
    "title": chartData3[1]["title2"],
    "fieldMappings": [{
      "fromField": "value",
      "toField": "value"
    }],
    "dataProvider": chartData3,
    "categoryField": "date",
    "compared":true
  },
  {
    "title": chartData4[1]["title2"],
    "fieldMappings": [{
      "fromField": "value",
      "toField": "value"
    }],
    "dataProvider": chartData4,
    "categoryField": "date",
    "compared":true
  }
],

  "panels": [{
    "showCategoryAxis": true,
    "title": "Value",
    "percentHeight": 70,
    "stockGraphs": [{
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value",
      "balloonText": "[[title]]:<b>[[value]]</b>",
      "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
    }],
    "stockLegend": {
      "periodValueTextComparing": "[[percents.value.close]]%",
      "periodValueTextRegular": "[[value.close]]"
    }
  }, ],

  "chartScrollbarSettings": {
    "graph": "g1"
  },
  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5
  },



  "export": {
    "enabled": false, //"Ladda ner"-funktionen
    "position": "right"
  }
});

// nästa graf
var globlist2 = [];
var globlist = [];

$.ajax({
  type: "GET",
  url: "../test.csv",
  dataType: "text",
  async : false,
  success: function(data) {
      globlist = processData(data);
  }
});
globlist2 = globlist;
var allocdata1 = [];
generateChartData3();
function generateChartData3() {
  a1 = a2 = a3 = globlist2[1][1];
  for (var i = 1; i < globlist.length; i++) {
    var newDate = new Date(globlist2[i][0]).toString("MMM yyyy");
    // alert(a4);
    allocdata1.push({
      "date": newDate,
      "value1": Number(a1),
      "value2": Number(a2),
      "value3": Number(a3),
      "title1": "Aktier",
      "title2": "Räntor",
      "title3": "Alternativa",
    });
    a1 = Math.round(a1*((Math.random()-0.5)/50+1));
    a2 = Math.round(a2*((Math.random()-0.5)/50+1));
    a3 = Math.round(a3*((Math.random()-0.5)/50+1));
  }
};



// nästa graf
var globlist2 = [];
var globlist = [];

$.ajax({
  type: "GET",
  url: "../test.csv",
  dataType: "text",
  async : false,
  success: function(data) {
      globlist = processData(data);
  }
});
globlist2 = globlist;
var allocdata1 = [];
generateChartData6();
function generateChartData6() {
  a1 = a2 = a3 = globlist2[1][1];
  for (var i = 1; i < globlist.length; i++) {
    var newDate = new Date(globlist2[i][0]).toString("MMM yyyy");
    // alert(a4);
    allocdata1.push({
      "date": newDate,
      "value1": Number(a1),
      "value2": Number(a2),
      "value3": Number(a3),
      "title1": "STIBOR 3M",
      "title2": "SSVX 3M",
      "title3": "5Y",
    });
    a1 = Math.round(a1*((Math.random()-0.5)/50+1));
    a2 = Math.round(a2*((Math.random()-0.5)/50+1));
    a3 = Math.round(a3*((Math.random()-0.5)/50+1));
  }
};

var chart = AmCharts.makeChart("portfoljallokering", {
    "type": "serial",
	  "theme": "dark",
    "marginRight" : 0,
    "marginLeft" : 0,
    "marginTop" : 10,
    "marginBottom" :0,
    "autoMarginOffset" :10,
    "legend": {
        "align": "left",
        "equalWidths": false,
        "valueAlign": "left",
        "valueText": "[[value]] ([[percents]]%)",
        "valueWidth": 5,
        "spacing":5,
    },
    "dataProvider": allocdata1,
    "valueAxes": [{
        "gridAlpha": 0.9,
        "position": "left"
    }],
    "graphs": [{
        "balloonText": "<span style='font-size:14px; color:#000000;'>[[title]]: <b>[[value]]</b></span>",
        "fillAlphas": 0,
        "lineAlpha": 0.5,
        "title": allocdata1[0]["title1"],
        "valueField": "value1"
    }, {
        "balloonText": "<span style='font-size:14px; color:#000000;'>[[title]]: <b>[[value]]</b></span>",
        "fillAlphas": 0,
        "lineAlpha": 0.5,
        "title": allocdata1[0]["title2"],
        "valueField": "value2"
    }, {
        "balloonText": "<span style='font-size:14px; color:#000000;'>[[title]]: <b>[[value]]</b></span>",
        "fillAlphas": 0,
        "lineAlpha": 0.5,
        "title": allocdata1[0]["title3"],
        "valueField": "value3"
    }],
    "AmLegend":{
      "spacing":0,
    },
    "plotAreaBorderAlpha": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "date",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.97,
        "gridCount":20,
    },
    "export": {
    	"enabled": false
     }
});
