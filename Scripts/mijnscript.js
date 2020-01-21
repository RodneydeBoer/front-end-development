// body staat op display none en wordt hierdoor langzaam ingefade
$(function() {
    $('body').fadeIn(1300);
});

//  functie voor het hamburgermenu
function hamburgermenu() {
  var x = document.getElementById('mijnlinks');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Javascript checkt hoe breed het scherm is, omdat pas vanaf 770px de carousels te zien zijn
function schermformaat(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "gray";
  } else {
    document.body.style.backgroundColor = "black";
  }
}

var x = window.matchMedia("(max-width: 70px)")
schermformaat(x) // Call listener function at run time
x.addListener(schermformaat) // Attach listener function on state changes