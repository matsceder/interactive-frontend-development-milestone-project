

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

/* ------------- Buttons ------------- */
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

function soundToggle() { 
    var sOn = document.getElementById("soundOn");
    if (sOn.style.display === "none") {
        sOn.style.display = "inline-block";
    } else {
        sOn.style.display = "none";
    }

    var sOff = document.getElementById("soundOff");
    if (sOff.style.display === "inline-block") {
        sOff.style.display = "none";
    } else {
        sOff.style.display = "inline-block";
    } 
}