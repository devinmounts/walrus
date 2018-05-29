$(document).ready(function() {
  $("#fade-in-walrus").hide();
  $("#toggle-walrus").hide();
  $("#slide-walrus").hide();
  $("#slideToggle-walrus").hide();


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

  $(".toggle").click(function() {
    $("#toggle-walrus").fadeToggle();
  });

  $(".slideUpWalrus").click(function() {
    $("#slide-walrus").slideUp();
  });

  $(".slideDownWalrus").click(function() {
    $("#slide-walrus").slideDown();
  });

  $(".slideToggle").click(function() {
    $("#slideToggle-walrus").slideToggle();
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
