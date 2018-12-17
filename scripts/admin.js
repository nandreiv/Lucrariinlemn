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

function drawCards() {

  for (var i in imagini) {

    if (imagini[i] !== null) {

      document.querySelector("#contentProjects").insertAdjacentHTML(
        'afterbegin',
        `<div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src="${imagini[i].imagine1}">
          <div class="card-body">
            <h4 class="card-title">${imagini[i].nume}</h4>
            <div class="adminBtn">
              <button  class="btn btn-danger btn-sm" onclick="deleteProject(${i});">Sterge</button>
            </div>
          </div>
        </div>
      </div>`
      )
    };
  };
};

function deleteProject(idx) {
  if (confirm("Sigur stergeti proiectul ?")) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        getProjects();
        location.reload();
      }
    };
    xhttp.open("DELETE", `https://lucrari-in-lemn.firebaseio.com/${idx}.json`, true);
    xhttp.send();
  }
}