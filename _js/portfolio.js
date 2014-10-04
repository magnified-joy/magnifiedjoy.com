$(function() {

$(window).resize(resize);

resize();

function resize(){
    var h = window.innerHeight-$('.navigation').height()-20;
    $(".carousel, .carousel .item, .carousel-inner .item img").css({
        height: h+"px"
    });
}

});