$(function() {
    $('input,textarea').change(update).keyup(update).on('paste',function(){setTimeout(update, 100);});

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
  
  var filename = '';
  var md = '';
  
  $('#download').click(function(){
     download();
  });
  
  function update(){
    var $f = $('#folder');
    var $i = $('#images');
    var f = $f.val();
    var files = $i.val().split("\n");
    var title = $('#title').val();
    md = "---\n";
    md += "title: "+title+"\n";
    md += "label: "+$('#label').val()+"\n";
    md += "thumbnail: "+$('#thumbnail').val()+"\n";
    md += "description: "+$('#description').val()+"\n";
    md += "keywords: "+$('#keywords').val()+"\n";
    md += "---\n";
    md += $('#content').val();
    for(var i = 0; i < files.length; i++){
        md += "\n!["+files[i].replace(/\-/g,' ').replace(/\.jpg/gi,'').replace(/\.png/gi,'').replace(/\.jpeg/gi,'')+"]("+f+files[i]+")\n";
    }
    $('#markdown').val(md);
  
    filename = $('#date').val()+'-'+title.toLowerCase().replace(' ','-')+".markdown";
    $('#filename').text(filename);
  
  }
  
  function download() {
      var pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(md));
      pom.setAttribute('download', filename);
      pom.click();
}
  
});