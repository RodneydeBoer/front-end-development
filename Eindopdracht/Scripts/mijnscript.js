
// $(document).ready(function(){
// $( "main" ).fadeIn( 1500, function() {
//   });
// $( "header nav ul li:nth-child(1)" ).fadeIn( 500, function() {
//   });
// $( "header nav ul li:nth-child(2)" ).fadeIn( 1000, function() {
//   });
// $( "header nav ul li:nth-child(3)" ).fadeIn( 1500, function() {
//   });
// $( "header nav ul li:nth-child(4)" ).fadeIn( 2000, function() {
//   });
// });

function myFunction() {
  var x = document.getElementById('mijnlinks');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}