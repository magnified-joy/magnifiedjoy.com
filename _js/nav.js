$(function() {

  if(!$('body').hasClass('home')){
      $(window).on("scroll touchmove", function () {
          $('.navigation').toggleClass('small', $(document).scrollTop() > 0);
       });
  }
  
  $('.carousel').carousel({
        interval:2000,
        pause: "false"
    });
  
    $('.carousel-control').click(function(){
        $(this).parents('.carousel').carousel('pause');
    });
  
    if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
        $("a.thumbnail").on('click touchstart mousedown touchend mouseup',function(){
            window.location = $(this).attr('href');
        });
    }
  
});