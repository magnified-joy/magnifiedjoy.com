$(function() {

  if(!$('body').hasClass('home')){
      $(window).on("scroll touchmove", function () {
          $('.navigation').toggleClass('small', $(document).scrollTop() > 0);
       });
  }
  
    if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)){
        $("a.thumbnail").on('click touchstart mousedown touchend mouseup',function(){
            window.location = $(this).attr('href');
        });
    }
  
});