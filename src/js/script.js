(function ($){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-116px";
    }
    prevScrollpos = currentScrollPos;
  }
}(jQuery));

$(function() {
  $('.intro').addClass('go');

  $('.reload').click(function() {
    $('.intro').removeClass('go').delay(100).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });

  });
})