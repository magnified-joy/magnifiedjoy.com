$(function() {

    $(window).resize(resize);

    resize();

    function resize(){
        $(".carousel, .carousel .item, .carousel-inner .item img").css({
            height: window.innerHeight-parseInt($('body').css('padding-top'))+"px"
        });
    }

});