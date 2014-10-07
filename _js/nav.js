$(function() {

  if(!$('body').hasClass('home')){
      $(window).on("scroll touchmove", function () {
          $('.navigation').toggleClass('small', $(document).scrollTop() > 0);
       });
  }
  
});