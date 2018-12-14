
var imagini = [];

function getProject() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      imagini = JSON.parse(this.responseText);
      //drawTable();
    }
  };
  xhttp.open("GET", `https://lucrari-in-lemn.firebaseio.com/.json`, true)
  xhttp.send();
}


function clickButton () {
  for (var i = 0; i < imagini.length; i++) {
  window.location=`detalii.html?id=${i}`;
  }
}