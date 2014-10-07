$(function() {
  
  var pTop = parseInt($('body').css('padding-top'));
  var startSize = 340;
  var endSize = 200;
  
  var startPadding = 70;
  var endPadding = 0;
  
  var marginStart = 70;
  var marginEnd = 40;
  
  var $l = $('.navigation .left');
  var $c = $('.navigation .center .logo');
  var $r = $('.navigation .right');
  var $a = $('.navigation .link');
  
  $(window).scroll(function(){
    var p = (pTop-document.body.scrollTop)/pTop;
    if(p >= 0){
        var w = endSize+(startSize-endSize)*p;
        var m = (marginStart-marginEnd)*p;
        $c.css({
            width: w+'px',
            'margin-left':(-w/2)+'px'
        });
        $l.css({
            'padding-right': (startPadding*p)+'px'
        });
        $r.css({
            'padding-left': (startPadding*p)+'px'
        });
        $a.css({
            'margin-top': (marginEnd+m)+'px'
        });
        console.log(m);
    }

  });
  
});