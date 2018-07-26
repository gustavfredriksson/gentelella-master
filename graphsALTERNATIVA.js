var globlist2 = [];
var globlist = [];

$.ajax({
  type: "GET",
  url: "../test.csv",
  dataType: "text",
  async: false,
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

var chart = AmCharts.makeChart("chartdiv", { //format på csv filen måste ha stingande datum
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
      "compared": true
    }, {
      "title": chartData3[1]["title2"],
      "fieldMappings": [{
        "fromField": "value",
        "toField": "value"
      }],
      "dataProvider": chartData3,
      "categoryField": "date",
      "compared": true
    },
    {
      "title": chartData4[1]["title2"],
      "fieldMappings": [{
        "fromField": "value",
        "toField": "value"
      }],
      "dataProvider": chartData4,
      "categoryField": "date",
      "compared": true,
    }
  ],

  "panels": [{
    "showCategoryAxis": true,
    "title": "Utveckling från startdatum: ",
    "percentHeight": 50,
    "stockGraphs": [{
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value",
      "balloonText": "[[title]]: <b>[[value]]</b>",
      "compareGraphBalloonText": "[[title]]: <b>[[value]]</b>"
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

  "periodSelector": {
    "position": "bottom",
    "periods": [{
      "period": "MM",
      "count": 1,
      "label": "1 månad"
    }, {
      "period": "MM",
      "count": 3,
      "label": "3 månader"
    }, {
      "period": "MM",
      "count": 6,
      "label": "6 månader"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 år"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "Max"
    }]
  },

  // "dataSetSelector": {
  //   "position": "right",
  //   "listHeight":342,
  // },

  "export": {
    "enabled": false, //"Ladda ner"-funktionen
    "position": "right"
  }
});





var chart = AmCharts.makeChart("boxplotSE", {
  "type": "serial",
  "theme": "dark",
  "graphs": [{
    "id": "g5",
    "bullet": "round",
    "valueField": "actual",
    "lineAlpha": 0,
    "balloonText": "Portfölj: <b>[[actual]]%</b>",
  },{
    "type": "candlestick",
    "balloonText": "Högsta: <b>[[high]]</b>%\n 25% bästa: <b>[[open]]</b>%\n Medel: <b>[[mid]]</b>%\n 25 sämsta: <b>[[close]]</b>%\nSämst: <b>[[low]]</b>%",
    "highField": "high",
    "openField": "open",
    "closeField": "close",
    "valueField": "close",
    "lowField": "low",
    "fillColors": "#ffffff",
    "lineColor": "#000",
    "lineAlpha": 1,
    "fillAlphas": 0.9,
    "columnWidth": 0.4
  }, {
    "type": "column",
    "columnWidth": 0.2,
    "valueField": "high",
    "openField": "high",
    "lineColor": "#ED6E4F",
    "lineThickness": 3,
    "showBalloon": false,
    "clustered": false
  }, {
    "type": "column",
    "columnWidth": 0.2,
    "valueField": "low",
    "openField": "low",
    "lineColor": "#ED6E4F",
    "lineThickness": 3,
    "showBalloon": false,
    "clustered": false
  }, {
    "type": "column",
    "columnWidth": 0.4,
    "valueField": "mid",
    "openField": "mid",
    "lineColor": "#ED6E4F",
    "lineThickness": 3,
    "showBalloon": false,
    "clustered": false
  }],
  "chartCursor": {
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true
  },
  "categoryField": "exp",
  "categoryAxis": {
    "gridPosition": "start",
    "tickPosition": "start",
    "tickLength": 0,
    "axisAlpha": 0.7,
    "gridAlpha": 0
  },
  "valueAxes": [{
    "position": "left",
    "title": "Avkastning 24 månader(%)",
    "minimum": -3,
    "maximum": 15,
    "axisAlpha": 0,
  }],
  "dataProvider": [{
    "exp": "1 månad",
    "high": 5,
    "open": 4,
    "mid": 2,
    "close": 1,
    "low": -2,
    "actual":3.3,
  }, {
    "exp": "YTD",
    "high": 10,
    "open": 8,
    "mid": 5,
    "close": 3,
    "low": 0,
    "actual":4,
  }, {
    "exp": "24 månader",
    "high": 10,
    "open": 8,
    "mid": 7,
    "close": 4,
    "low": 2,
    "actual":6,
  }],
  "export": {
    "enabled": false
  },
});


var chart = AmCharts.makeChart("scatterSE", {
  "type": "xy",
  "theme": "dark",
  "autoMarginOffset": 20,
  "dataProvider": [{
      "bx": 5.918868875,
      "by": 10.28345368
    }, {
      "bx": 0.08372705,
      "by": 8.843943061
    }, {
      "bx": 0.032833021,
      "by": 7.303741842
    }, {
      "bx": 0.03158726,
      "by": 8.303483146
    }, {
      "bx": 0.12971972,
      "by": 9.256140276
    }, {
      "bx": 1.845547393,
      "by": 9.814938351
    }, {
      "bx": 0.394056374,
      "by": 9.016792835
    }, {
      "bx": 0.091102338,
      "by": 9.4150107
    }, {
      "bx": 0.800485143,
      "by": 9.941955182
    }, {
      "bx": 0.584381922,
      "by": 8.27302598
    }, {
      "bx": 0.017165579,
      "by": 7.928911284
    }, {
      "bx": 0.400218417,
      "by": 4.930066642
    }, {
      "bx": 0.956450159,
      "by": 9.361677906
    }, {
      "bx": 1.968153496,
      "by": 8.662843859
    }, {
      "bx": 0.91353733,
      "by": 9.106357492
    }, {
      "bx": 2.325449813,
      "by": 8.816548039
    }, {
      "bx": 1.312641006,
      "by": 8.625151508
    }, {
      "bx": 0.479685326,
      "by": 7.783061372
    }, {
      "bx": 0.221111325,
      "by": 8.856492975
    }, {
      "bx": 2.844431478,
      "by": 10.97477912
    }, {
      "bx": 0.721070512,
      "by": 9.494429958
    }, {
      "bx": 0.069124424,
      "by": 8.970750642
    }, {
      "bx": 2.956415727,
      "by": 9.388651658
    }, {
      "bx": 0.864684687,
      "by": 8.588373352
    }, {
      "bx": 0.628899612,
      "by": 9.293682794
    }, {
      "bx": 0.291129291,
      "by": 8.631263664
    }, {
      "bx": 5.143972854,
      "by": 8.039864557
    }, {
      "bx": 6.084656085,
      "by": 14.7228763
    }, {
      "bx": 1.316348071,
      "by": 9.500227675
    }, {
      "bx": 1.020914506,
      "by": 9.540875345
    }, {
      "bx": 0.240867122,
      "by": 9.10590446
    }, {
      "bx": 1.054211973,
      "by": 12.84262894
    }, {
      "bx": -0.033581839,
      "by": 9.030922912
    }, {
      "bx": 1.192145863,
      "by": 8.150965491
    }, {
      "bx": 0.004805643,
      "by": 8.55643515
    }, {
      "bx": 2.022261911,
      "by": 8.359304471
    }, {
      "bx": 1.756422377,
      "by": 9.867019861
    }, {
      "bx": 1.817904878,
      "by": 9.839486542
    }, {
      "bx": 0.400733927,
      "by": 7.892217418
    }, {
      "bx": 0.072796747,
      "by": 9.616376969
    }, {
      "ax": 1.315901221,
      "ay": 7.21192949
    }, {
      "bx": 1.225753083,
      "by": 10.09197469
    }, {
      "bx": 1,
      "by": 2.2
    }, {
      "bx": 2,
      "by": 4.9
    }, {
      "bx": 3,
      "by": 5.1
    }, {
      "bx": 4,
      "by": 5.3
    }, {
      "bx": 5,
      "by": 6.1
    }, {
      "bx": 6,
      "by": 8.3
    }, {
      "bx": 7,
      "by": 10.5
    }, {
      "bx": 8,
      "by": 12.3
    }, {
      "bx": 9,
      "by": 14.5
    }, {
      "bx": 10,
      "by": 15
    }, {
      "bx": 11,
      "by": 18.8
    }, {
      "bx": 12,
      "by": 19
    }
  ],
  "valueAxes": [{
    "position": "bottom",
    "axisAlpha": 0,
    "dashLength": 1,
    "title": "Standardavvikelse(%)"
  }, {
    "axisAlpha": 0,
    "dashLength": 1,
    "position": "left",
    "title": "Avkastning 24 månader(%)"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "x:[[x]]% y:[[y]]%",
    "bullet": "square",
    "bulletSize": 8,
    "lineAlpha": 0,
    "lineThickness": 2,
    "xField": "bx",
    "yField": "by",
    "fillAlphas": 0
  }, {
    "balloonText": "x:[[x]]% y:[[y]]%",
    "bullet": "triangleUp",
    "bulletSize": 13,
    "lineAlpha": 0,
    "xField": "ax",
    "yField": "ay",
    "fillAlphas": 0
  }],
  // "trendLines": [{
  //     "finalValue": 11,
  //     "finalXValue": 12,
  //     "initialValue": 2,
  //     "initialXValue": 1,
  //     "lineColor": "#FF6600"
  // }, {
  //     "finalValue": 19,
  //     "finalXValue": 12,
  //     "initialValue": 1,
  //     "initialXValue": 1,
  //     "lineColor": "#FCD202"
  // }],
  "marginLeft": 64,
  "marginBottom": 60,
  "chartCursor": {},
  "export": {
    "enabled": false,
    "position": "bottom-right"
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

var chart = AmCharts.makeChart("portfoljSE", {
    "type": "serial",
	  "theme": "dark",
    "marginRight" : 0,
    "marginLeft" : 0,
    "marginTop" : 10,
    "marginBottom" :0,
    "autoMarginOffset" :10,
    "legend": {
        "autoMargins":false,
        "align": "left",
        "valueAlign": "left",
        "valueText": "[[value]] ([[percents]]%)",
        "valueWidth": 1,
        "spacing":10,
        "forceWidth":true,
        "marginRight":20,
        "marginLeft":20
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



var chart = AmCharts.makeChart("boxplotUTL", {
  "type": "serial",
  "theme": "dark",
  "graphs": [{
    "id": "g5",
    "bullet": "round",
    "valueField": "actual",
    "lineAlpha": 0,
    "balloonText": "Portfölj: <b>[[actual]]%</b>",
  },{
    "type": "candlestick",
    "balloonText": "Högsta: <b>[[high]]</b>%\n 25% bästa: <b>[[open]]</b>%\n Medel: <b>[[mid]]</b>%\n 25 sämsta: <b>[[close]]</b>%\nSämst: <b>[[low]]</b>%",
    "highField": "high",
    "openField": "open",
    "closeField": "close",
    "valueField": "close",
    "lowField": "low",
    "fillColors": "#ffffff",
    "lineColor": "#000",
    "lineAlpha": 1,
    "fillAlphas": 0.9,
    "columnWidth": 0.4
  }, {
    "type": "column",
    "columnWidth": 0.2,
    "valueField": "high",
    "openField": "high",
    "lineColor": "#ED6E4F",
    "lineThickness": 3,
    "showBalloon": false,
    "clustered": false
  }, {
    "type": "column",
    "columnWidth": 0.2,
    "valueField": "low",
    "openField": "low",
    "lineColor": "#ED6E4F",
    "lineThickness": 3,
    "showBalloon": false,
    "clustered": false
  }, {
    "type": "column",
    "columnWidth": 0.4,
    "valueField": "mid",
    "openField": "mid",
    "lineColor": "#ED6E4F",
    "lineThickness": 3,
    "showBalloon": false,
    "clustered": false
  }],
  "chartCursor": {
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true
  },
  "categoryField": "exp",
  "categoryAxis": {
    "gridPosition": "start",
    "tickPosition": "start",
    "tickLength": 0,
    "axisAlpha": 0.7,
    "gridAlpha": 0
  },
  "valueAxes": [{
    "position": "left",
    "title": "Avkastning 24 månader(%)",
    "minimum": -3,
    "maximum": 15,
    "axisAlpha": 0,
  }],
  "dataProvider": [{
    "exp": "1 månad",
    "high": 5,
    "open": 4,
    "mid": 2,
    "close": 1,
    "low": -2,
    "actual":3.3,
  }, {
    "exp": "YTD",
    "high": 10,
    "open": 8,
    "mid": 5,
    "close": 3,
    "low": 0,
    "actual":4,
  }, {
    "exp": "24 månader",
    "high": 10,
    "open": 8,
    "mid": 7,
    "close": 4,
    "low": 2,
    "actual":6,
  }],
  "export": {
    "enabled": false
  },
});


var chart = AmCharts.makeChart("scatterUTL", {
  "type": "xy",
  "theme": "dark",
  "autoMarginOffset": 20,
  "dataProvider": [{
      "bx": 5.918868875,
      "by": 10.28345368
    }, {
      "bx": 0.08372705,
      "by": 8.843943061
    }, {
      "bx": 0.032833021,
      "by": 7.303741842
    }, {
      "bx": 0.03158726,
      "by": 8.303483146
    }, {
      "bx": 0.12971972,
      "by": 9.256140276
    }, {
      "bx": 1.845547393,
      "by": 9.814938351
    }, {
      "bx": 0.394056374,
      "by": 9.016792835
    }, {
      "bx": 0.091102338,
      "by": 9.4150107
    }, {
      "bx": 0.800485143,
      "by": 9.941955182
    }, {
      "bx": 0.584381922,
      "by": 8.27302598
    }, {
      "bx": 0.017165579,
      "by": 7.928911284
    }, {
      "bx": 0.400218417,
      "by": 4.930066642
    }, {
      "bx": 0.956450159,
      "by": 9.361677906
    }, {
      "bx": 1.968153496,
      "by": 8.662843859
    }, {
      "bx": 0.91353733,
      "by": 9.106357492
    }, {
      "bx": 2.325449813,
      "by": 8.816548039
    }, {
      "bx": 1.312641006,
      "by": 8.625151508
    }, {
      "bx": 0.479685326,
      "by": 7.783061372
    }, {
      "bx": 0.221111325,
      "by": 8.856492975
    }, {
      "bx": 2.844431478,
      "by": 10.97477912
    }, {
      "bx": 0.721070512,
      "by": 9.494429958
    }, {
      "bx": 0.069124424,
      "by": 8.970750642
    }, {
      "bx": 2.956415727,
      "by": 9.388651658
    }, {
      "bx": 0.864684687,
      "by": 8.588373352
    }, {
      "bx": 0.628899612,
      "by": 9.293682794
    }, {
      "bx": 0.291129291,
      "by": 8.631263664
    }, {
      "bx": 5.143972854,
      "by": 8.039864557
    }, {
      "bx": 6.084656085,
      "by": 14.7228763
    }, {
      "bx": 1.316348071,
      "by": 9.500227675
    }, {
      "bx": 1.020914506,
      "by": 9.540875345
    }, {
      "bx": 0.240867122,
      "by": 9.10590446
    }, {
      "bx": 1.054211973,
      "by": 12.84262894
    }, {
      "bx": -0.033581839,
      "by": 9.030922912
    }, {
      "bx": 1.192145863,
      "by": 8.150965491
    }, {
      "bx": 0.004805643,
      "by": 8.55643515
    }, {
      "bx": 2.022261911,
      "by": 8.359304471
    }, {
      "bx": 1.756422377,
      "by": 9.867019861
    }, {
      "bx": 1.817904878,
      "by": 9.839486542
    }, {
      "bx": 0.400733927,
      "by": 7.892217418
    }, {
      "bx": 0.072796747,
      "by": 9.616376969
    }, {
      "ax": 1.315901221,
      "ay": 7.21192949
    }, {
      "bx": 1.225753083,
      "by": 10.09197469
    }, {
      "bx": 1,
      "by": 2.2
    }, {
      "bx": 2,
      "by": 4.9
    }, {
      "bx": 3,
      "by": 5.1
    }, {
      "bx": 4,
      "by": 5.3
    }, {
      "bx": 5,
      "by": 6.1
    }, {
      "bx": 6,
      "by": 8.3
    }, {
      "bx": 7,
      "by": 10.5
    }, {
      "bx": 8,
      "by": 12.3
    }, {
      "bx": 9,
      "by": 14.5
    }, {
      "bx": 10,
      "by": 15
    }, {
      "bx": 11,
      "by": 18.8
    }, {
      "bx": 12,
      "by": 19
    }
  ],
  "valueAxes": [{
    "position": "bottom",
    "axisAlpha": 0,
    "dashLength": 1,
    "title": "Standardavvikelse(%)"
  }, {
    "axisAlpha": 0,
    "dashLength": 1,
    "position": "left",
    "title": "Avkastning 24 månader(%)"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "x:[[x]]% y:[[y]]%",
    "bullet": "square",
    "bulletSize": 8,
    "lineAlpha": 0,
    "lineThickness": 2,
    "xField": "bx",
    "yField": "by",
    "fillAlphas": 0
  }, {
    "balloonText": "x:[[x]]% y:[[y]]%",
    "bullet": "triangleUp",
    "bulletSize": 13,
    "lineAlpha": 0,
    "xField": "ax",
    "yField": "ay",
    "fillAlphas": 0
  }],
  // "trendLines": [{
  //     "finalValue": 11,
  //     "finalXValue": 12,
  //     "initialValue": 2,
  //     "initialXValue": 1,
  //     "lineColor": "#FF6600"
  // }, {
  //     "finalValue": 19,
  //     "finalXValue": 12,
  //     "initialValue": 1,
  //     "initialXValue": 1,
  //     "lineColor": "#FCD202"
  // }],
  "marginLeft": 64,
  "marginBottom": 60,
  "chartCursor": {},
  "export": {
    "enabled": false,
    "position": "bottom-right"
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

var chart = AmCharts.makeChart("portfoljUTL", {
    "type": "serial",
	  "theme": "dark",
    "marginRight" : 0,
    "marginLeft" : 0,
    "marginTop" : 10,
    "marginBottom" :0,
    "autoMarginOffset" :10,
    "legend": {
        "autoMargins":false,
        "align": "left",
        "valueAlign": "left",
        "valueText": "[[value]] ([[percents]]%)",
        "valueWidth": 1,
        "spacing":10,
        "forceWidth":true,
        "marginRight":20,
        "marginLeft":20
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


var chart = AmCharts.makeChart( "piechart", {
  "type": "pie",
  "theme": "dark",
  "dataProvider": [ {
    "country": "Produkt 1",
    "litres": 501.9
  }, {
    "country": "Produkt 2",
    "litres": 301.9
  }, {
    "country": "Produkt 3",
    "litres": 201.1
  }, {
    "country": "Produkt 4",
    "litres": 165.8
  }],
  "valueField": "litres",
  "titleField": "country",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );
