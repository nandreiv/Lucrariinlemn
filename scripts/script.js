
var imagini = [];

function getProjects() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      imagini = JSON.parse(this.responseText);
      drawCards();
    }
  };
  xhttp.open("GET", `https://lucrari-in-lemn.firebaseio.com/.json`, true)
  xhttp.send();
}

function drawCards (){

  for (var i in imagini) {

   document.querySelector("#contentProjects").insertAdjacentHTML (
    'afterend',
    `<div class="col-md-4">
                    <div class="card">
                      <img class="card-img-top" src="${imagini[i].imagine1}">
                        <h4 class="card-title">${imagini[i].nume}</h4>
                        <button  class="btn btn-outline-secondary" onclick="window.location='detalii.html?id=${i}'">Vezi proiect</button>
                      </div>
                      </div>
                    </div>`
   )
  }
}
     
