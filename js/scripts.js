$(document).ready(function() {
  $("#fade-in-walrus").hide();

  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".fadeable-in").click(function() {
    $("#fade-in-walrus").fadeIn();
  });

  $(".fadeable-out").click(function() {
    $("#fade-in-walrus").fadeOut();
  });

});

/*

fadeIn()
fadeOut()
fadeToggle()
slideDown()
slideUp()
slideToggle()

*/
