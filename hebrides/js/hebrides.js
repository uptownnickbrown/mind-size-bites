$(document).ready(function() {
  // Add youtube embed api
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Set up youtube player
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-player', {
      height: '400',
      width: '700',
      videoId: 'CtJkEWCQEbE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.seekTo(32);
    event.target.playVideo();
  }

  if ('ondeviceorientation' in window) {
    console.log('yes ondeviceorientation');
    window.addEventListener('deviceorientation', function(event) {
       $('#beta').text(Math.round(event.beta));
       $('#gamma').text(Math.round(event.gamma));
       $('#alpha').text(Math.round(event.alpha));
    });
  }

  if ('ondevicemotion' in window) {
    console.log('yes ondevicemotion');
    var eventCounter = 0;
    var beatTimeStamp = 0;
    window.addEventListener('devicemotion', function(event) {
      eventCounter++;
      var x = Math.round(event.acceleration.x);
      var y = Math.round(event.acceleration.y);
      var z = Math.round(event.acceleration.z);
      if (x > 10 || y > 10 || z > 10 && (event.timeStamp - beatTimeStamp) > 200 ) {
        beatTimeStamp = event.timeStamp;
        console.log('Beat! At time: ' + beatTimeStamp);
        console.log(event);
        console.log(x,y,z);
      }
      //console.log(event.acceleration.x,event.acceleration.y,event.acceleration.z);
      $('#acceleration-x').text(Math.round(event.acceleration.x));
      $('#acceleration-y').text(Math.round(event.acceleration.y));
      $('#acceleration-z').text(Math.round(event.acceleration.z));
    });
  }
});
