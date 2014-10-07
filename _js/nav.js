$(function() {
  
  var pTop = parseInt($('body').css('padding-top'));
  var startSize = 170;
  var endSize = 100;
  
  var startPadding = 70;
  var endPadding = 0;
  
  var $l = $('.navigation .left');
  var $c = $('.navigation .center .logo');
  var $r = $('.navigation .right')
  
  $(window).scroll(function(){
    var p = (pTop-document.body.scrollTop)/pTop;
    if(p >= 0){
        var w = (startSize-endSize)*p;
        $c.css({
            width: (endSize+w)+'%',
            'margin-left':(-w/2)+'%'
            
        });
        $l.css({
            'padding-right': (startPadding*p)+'px'
        });
        $r.css({
            'padding-left': (startPadding*p)+'px'
        });
    }

  });
  
});