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
    window.addEventListener('deviceorientation', function(event) {
       $('#beta').text(Math.round(event.beta));
       $('#gamma').text(Math.round(event.gamma));
       $('#alpha').text(Math.round(event.alpha));
    });
  }

  if ('ondevicemotion' in window) {
    var eventCounter = 0;
    var beatTimeStamp = 0;
    var beatCounter = 0;
    var accelerationSensitivity = 8;
    var timeSensitivity = 500;
    window.addEventListener('devicemotion', function(event) {
      eventCounter++;
      var x = Math.round(event.acceleration.x);
      var y = Math.round(event.acceleration.y);
      var z = Math.round(event.acceleration.z);
      if ((x > accelerationSensitivity || y > accelerationSensitivity || z > accelerationSensitivity) && ((event.timeStamp - beatTimeStamp) > timeSensitivity) ) {
        beatTimeStamp = event.timeStamp;
        beatCounter > 3 ? beatCounter = 1 : beatCounter++;
        console.log(beatCounter + '! At time: ' + beatTimeStamp);
      }
      //console.log(event.acceleration.x,event.acceleration.y,event.acceleration.z);
      $('#acceleration-x').text(Math.round(event.acceleration.x));
      $('#acceleration-y').text(Math.round(event.acceleration.y));
      $('#acceleration-z').text(Math.round(event.acceleration.z));
    });
  }
});
