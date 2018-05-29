$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".fadeInClickable").click(function() {
    $("#initially-hidden-fade-in").fadeIn();
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
