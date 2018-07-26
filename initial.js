// var globlist2 = [];
// var globlist = [];
//
// $(document).ready(function() {
//   $.ajax({
//     type: "GET",
//     url: "../google_msft.csv",
//     dataType: "text",
//     async : false,
//     success: function(data) {
//         globlist = processData(data);
//     }
//   });
//   globlist2 = globlist;
// });
//
// alert(globlist2);

var lines = [];
function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(';');
  for (var i = 0; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(';');
    if (data.length == headers.length) {
      var tarr = [];
      for (var j = 0; j < headers.length; j++) { //- 1 för att ta bort handelsvolymer
        tarr.push(data[j]);
      }
      lines.push(tarr);
    }
  }
  return lines;
};



function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
