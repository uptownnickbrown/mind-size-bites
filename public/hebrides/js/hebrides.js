var PitchShift = require('soundbank-pitch-shift');

$(document).ready(function() {
  function checkYouTube () {
     setTimeout(function () {
       console.log(YT);
        if (YT.loaded == 0) {
           checkYouTube();
        } else {
          loadPage();
        }
     }, 10)
  }
  checkYouTube();

  var loadPage = function() {

    var audioMonitor,
        videoMonitor,
        playhead = 34;

    function onPlayerReady(event) {
      $('#play-video').click(function() {
        $('#audio-player')[0].pause();
        clearInterval(audioMonitor);

        event.target.seekTo(playhead);
        event.target.playVideo();

        var videoMonitor = setInterval(function () {
          playhead = event.target.getCurrentTime();
          $('#timer').text(Math.round(playhead));
        }, 166);
      });
    }

    // Set up youtube player
    var youtubePlayer = new YT.Player('video-player', {
        height: '400',
        width: '700',
        videoId: 'CtJkEWCQEbE',
        events: {
          'onReady': onPlayerReady
        }
      });


    $('#play-audio').click(function() {
      youtubePlayer.pauseVideo();
      clearInterval(videoMonitor);

      $('#audio-player')[0].currentTime = playhead;
      $('#audio-player')[0].play();
      var audioMonitor = setInterval(function () {
        playhead = $('#audio-player')[0].currentTime;
        $('#timer').text(Math.round(playhead));
      }, 166);
    });

    $('#stop').click(function() {
      $('#audio-player')[0].pause();
      clearInterval(audioMonitor);

      youtubePlayer.pauseVideo();
      clearInterval(videoMonitor);

      conducted = 0;
    });

    // Establish an audio context - need this to get audio output
    var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

    // Make all the audio nodes we need
    // Connect to the <audio> element with the trumpet file in it
    var audioElement = document.getElementById('audio-player');
    var audioNode = audioCtx.createMediaElementSource(audioElement);

    // create  gain node
    var gainNode = audioCtx.createGain();
    gainNode.gain.value = $('#gain').val();

    $('#gain').change(function() {
      gainNode.gain.value = $('#gain').val();
    });

    var pitchShift = PitchShift(audioCtx);
    pitchShift.wet.value = 1;
    pitchShift.dry.value = 0;

    pitchShift.transpose = $('#pitch').val();
    $('#pitch').change(function() {
      pitchShift.transpose = $('#pitch').val();
    });

    audioNode.mediaElement.playbackRate = $('#rate').val();
    $('#rate').change(function(e) {
      audioNode.mediaElement.playbackRate = $('#rate').val();
    });


    audioNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    //pitchShift.connect(audioCtx.destination);


    var initialTempo = $('#bpm').text();
    var tempo = initialTempo,
        conducted = 0,
        beats = [];

    $('#bpm-tap').click(function(e) {
      if (conducted == 0) {
        conducted = 1;
        var msPerBeat = (60 * 1000 / initialTempo);
        beats = [e.timeStamp-(msPerBeat*3),e.timeStamp-(msPerBeat*2),e.timeStamp-msPerBeat,e.timeStamp];

        youtubePlayer.pauseVideo();
        clearInterval(audioMonitor);
        clearInterval(videoMonitor);

        $('#audio-player')[0].currentTime = playhead;
        audioNode.mediaElement.playbackRate = 1.0;
        $('#audio-player')[0].play();

        var audioMonitor = setInterval(function () {
          playhead = $('#audio-player')[0].currentTime;
          $('#timer').text(Math.round(playhead));
        }, 166);

      } else {
        beats.shift();
        beats.push(e.timeStamp);
      }
      tempo = 60 * 1000 / (
              ((beats[1] - beats[0]) +
               (beats[2] - beats[1]) * 3 +
               (beats[3] - beats[2]) * 6) / 10);

      console.log(tempo);
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
  }
});
