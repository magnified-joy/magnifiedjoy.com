$(function() {

    var SCROLL_AMOUNT = 1;

    $(window).resize(resize);

    resize();

    $('.navigation').css({position:'absolute',width:'100%',background:'#fff'});

    var pTop = parseInt($('body').css('padding-top'));
    
    scroll();

    function scroll(){
      if(document.body.scrollTop < pTop){
        window.scrollBy(0,SCROLL_AMOUNT);
        setTimeout(scroll,1000/60);
      }
    }

    function resize(){
        $(".carousel, .carousel .item, .carousel-inner .item img").css({
            height: window.innerHeight+10+"px"
        });
    }

});