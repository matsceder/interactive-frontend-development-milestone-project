

/* ------------- Modal ------------- */
/* ------------- Code structure from w3schools ------------- */
var modal = document.getElementById("rulesModal");

var btnModal = document.getElementById("rulesBtn");

var btnModalClose =  document.getElementById("modalBtnClose");

btnModal.onclick = function() {
  modal.style.display = "block";
}

btnModalClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function strictToggle() {

    var sB = document.getElementById("strictBlank");
    if (sB.style.display === "none") {
        sB.style.display = "inline-block";
    } else {
        sB.style.display = "none";
    }

    var sC = document.getElementById("strictCheck");
    if (sC.style.display === "inline-block") {
        sC.style.display = "none";
    } else {
        sC.style.display = "inline-block";
    } 
}