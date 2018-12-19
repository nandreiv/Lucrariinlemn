
var proiecte = [];

function getProjects() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      proiecte = JSON.parse(this.responseText);
      drawCards();
    }
  };
  xhttp.open("GET", `https://lucrari-in-lemn.firebaseio.com/.json`, true)
  xhttp.send();
}

function drawCards (){

  for (var i in proiecte) {

   document.querySelector("#contentProjects").insertAdjacentHTML (
    'afterbegin',
    `<div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="${proiecte[i].imagini[0]}">
          <div class="card-body">
            <h4 class="card-title">${proiecte[i].nume}</h4>
            <button  class="btn btn-outline-secondary" onclick="window.location='detalii.html?id=${i}'">Vezi proiect</button>
          </div>
        </div>
      </div>`
   )
  }
}
     
