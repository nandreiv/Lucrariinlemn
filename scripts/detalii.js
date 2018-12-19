var idx = window.location.search.substring(4);

function getProjects() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      proiecte = JSON.parse(this.responseText);
      drawTable();
      //document.getElementById("#projectName").innerHTML = `${imagini.nume}`;
    }
  };
  xhttp.open("GET", `https://lucrari-in-lemn.firebaseio.com/${idx}.json`, true)
  xhttp.send();
}

function drawTable() {

  for (var i in proiecte.imagini) {  

    //if (/imagini/.test(i)) {
      document.querySelector("#imageShow").insertAdjacentHTML(
        'afterbegin',
        `<div class="col-md-4">
            <div class="card">
              <a class="lightbox" data-toggle="lightbox" href="${proiecte.imagini[i]}">
              <img class="card-img-top" alt="" src="${proiecte.imagini[i]}">
            </div>
          </div>`
      )
    //}
  }

  document.querySelector("#mainDiv").insertAdjacentHTML(
    'afterbegin',
    `<h1>${proiecte.nume}</h1>
     <hr class=light">`)
}

