var idx = window.location.search.substring(4);

function getProjects() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      imagini = JSON.parse(this.responseText);
      //drawTable();
    }
  };
  xhttp.open("GET", `https://lucrari-in-lemn.firebaseio.com/${idx}.json`, true)
  xhttp.send();
}

function drawTable() {
  var str = "";

  for (var i = 0; i < imagini.length; i++) {
    if (i != null) {
      str += `<tr>
                <td><b>${imagini[i].nume}</b></td>
                <td><img src="${imagini[i].imagine1}"/></td>
                <td><img src="${imagini[i].imagine2}"/></td>
                <td><img src="${imagini[i].imagine3}"/></td>
                <td><img src="${imagini[i].imagine4}"/></td>
                <td><img src="${imagini[i].imagine5}"/></td>
                <td><img src="${imagini[i].imagine6}"/></td>
                <td><img src="${imagini[i].imagine7}"/></td>
                <td><img src="${imagini[i].imagine8}"/></td>
                <td><img src="${imagini[i].imagine9}"/></td>
                <td><img src="${imagini[i].imagine10}"/></td>
                <td><img src="${imagini[i].imagine11}"/></td>
                <td><img src="${imagini[i].imagine12}"/></td>
              </tr>`;
    }
  }

  document.querySelector("table tbody").innerHTML = str;
}

