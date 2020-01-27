
// Functie voor het infaden van MAIN
window.onload = function(){
  var main = document.getElementsByTagName("MAIN")[0];
  main.classList.add("infaden");
}

//  functie voor het hamburgermenu
function hamburgermenu() {
  var x = document.getElementById('mijnlinks');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}