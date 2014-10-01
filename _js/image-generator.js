$(function() {
    $('#images,#folder').change(update).keyup(update).on('paste',function(){setTimeout(update, 100);});

    $("#markdown").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });
  
  function update(){
    var $f = $('#folder');
    var $i = $('#images');
    var f = $f.val();
    var files = $i.val().split("\n");
    var md = '';
    for(var i = 0; i < files.length; i++){
        md += "\n!["+files[i].replace(/\-/g,' ').replace(/\.jpg/gi,'').replace(/\.png/gi,'').replace(/\.jpeg/gi,'')+"]("+f+files[i]+")\n";
    }
    $('#markdown').val(md);
  }
  
});