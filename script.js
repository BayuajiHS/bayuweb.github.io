document.title = "WEB BAYU UAS";

alert("Selamat Datang di WEB UAS BAYUAJI");

function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
  function myFunction(xhttp) {
    document.getElementById("artikel").innerHTML = xhttp.responseText;
  }
