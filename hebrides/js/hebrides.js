var timeMonitor,
    playhead = 0;

function onPlayerReady(event) {
  $('#play-video').click(function() {
    event.target.seekTo(playhead);
    event.target.playVideo();
    timeMonitor = setInterval(function () {
      playhead = event.target.getCurrentTime();
      console.log(playhead);
      $('#timer').text(Math.round($('#audio-player')[0].currentTime));
    }, 166);
  });
}

// Set up youtube player
var youtubePlayer;
function onYouTubeIframeAPIReady() {
  console.log('on youtube player ready');
  youtubePlayer = new YT.Player('video-player', {
    height: '400',
    width: '700',
    videoId: 'CtJkEWCQEbE',
    events: {
      'onReady': onPlayerReady
    }
  });
}

$(document).ready(function() {
  $('#play-audio').click(function() {
    console.log(playhead);
    $('#audio-player')[0].currentTime = playhead;
    $('#audio-player')[0].play();
    timeMonitor = setInterval(function () {
      playhead = $('#audio-player')[0].currentTime;
      console.log(playhead);
      $('#timer').text(Math.round($('#audio-player')[0].currentTime));
    }, 166);
  });

  $('#stop').click(function() {
    $('#audio-player')[0].pause();
    youtubePlayer.pauseVideo();
    clearInterval(timeMonitor);
  });

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
