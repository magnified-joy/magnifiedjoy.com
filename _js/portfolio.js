$(function() {

    $(window).resize(resize);

    resize();
å
    function resize(){
        var h = window.innerHeight-parseInt($('body').css('padding-top'))+'px';
        var w = window.innerWidth+'px';
        $(".carousel, .carousel .item, .carousel-inner .item img").css({
            height: h
        });
        $('.carousel-inner .item img').attr('height',h).attr('width',w).css({
            width: w
        });
    }

});