var PitchShift = require('soundbank-pitch-shift');

$(document).ready(function() {
  function checkYouTube () {
     setTimeout(function () {
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
        conductingMonitor,
        playhead = 34;

    function onPlayerReady(event) {
      $('#play-video').click(function() {
        $('#audio-player')[0].pause();
        clearInterval(audioMonitor);
        clearInterval(conductingMonitor);

        event.target.seekTo(playhead);
        event.target.playVideo();

        videoMonitor = setInterval(function () {
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
      clearInterval(conductingMonitor);

      $('#audio-player')[0].currentTime = playhead;
      $('#audio-player')[0].play();
      audioMonitor = setInterval(function () {
        playhead = $('#audio-player')[0].currentTime;
        $('#timer').text(Math.round(playhead));
      }, 166);
    });

    $('#stop').click(function() {
      $('#audio-player')[0].pause();
      clearInterval(audioMonitor);
      clearInterval(conductingMonitor);

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


    var processBeat = function(timeStamp) {
      if (conducted == 0) {
        conducted = 1;
        var msPerBeat = (60 * 1000 / initialTempo);
        beats = [timeStamp-(msPerBeat*5),timeStamp-(msPerBeat*4),timeStamp-(msPerBeat*3),timeStamp-(msPerBeat*2),timeStamp-msPerBeat,timeStamp];

        youtubePlayer.pauseVideo();
        clearInterval(audioMonitor);
        clearInterval(videoMonitor);

        $('#audio-player')[0].currentTime = playhead;
        audioNode.mediaElement.playbackRate = 1.0;
        $('#audio-player')[0].play();

        conductingMonitor = setInterval(function () {
          playhead = $('#audio-player')[0].currentTime;
          $('#timer').text(Math.round(playhead));
        }, 166);

      } else {
        if (beats.length == 6) {
          beats.push(timeStamp);
        } else {
          beats.shift();
          beats.push(timeStamp);

          tempo = 60 * 1000 / ((
            (beats[1] - beats[0] + beats[2] - beats[1]) +
            (beats[3] - beats[2] + beats[4] - beats[3]) * 2 +
            (beats[5] - beats[4] + beats[6] - beats[5]) * 4) / 14);

          beats.shift();

          $('#bpm').text(tempo);
          audioNode.mediaElement.playbackRate = tempo / initialTempo;
          console.log(tempo);
          console.log(audioNode.mediaElement.playbackRate);
        }
      }
    }

    $('#bpm-tap').click(function(e) {
      processBeat(Date.now());
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
          processBeat(beatTimeStamp);
        }
        //console.log(event.acceleration.x,event.acceleration.y,event.acceleration.z);
        $('#acceleration-x').text(Math.round(event.acceleration.x));
        $('#acceleration-y').text(Math.round(event.acceleration.y));
        $('#acceleration-z').text(Math.round(event.acceleration.z));
      });
    }
  }
});
