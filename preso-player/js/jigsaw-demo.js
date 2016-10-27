 $(document).ready(function() {
    var client_id = $("vst-simple-reader").attr("data-vstclient");
    var client_param = '';
    if(typeof client_id !== 'undefined') {
      client_param = "?customer=" + client_id;
    } 
    var frame_content =  '<iframe width="700" height="650" id="seemore" name="seemore" frameborder="5" src="http://demo.vpg.com/jigsaw_demo/rog/new_roger/index.html'+client_param+'"></iframe>';
    $("vst-simple-reader").html(frame_content);  
 });
 
  function prev_page(){
    iframe = document.getElementById('seemore');
    iframe.contentWindow.postMessage('prev', 'http://demo.vpg.com/');
    console.log("prev");
    }
  function next_page(){
    iframe = document.getElementById('seemore');
    iframe.contentWindow.postMessage('next', 'http://demo.vpg.com/');
    console.log("next");
  }
 