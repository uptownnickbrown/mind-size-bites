// To pull this in you need to start browserifying again and include bundle.js in the index.html file
//var PitchShift = require('soundbank-pitch-shift');

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
        playhead = 33;

    function onPlayerReady(event) {
      $('#play-video').click(function() {
        $('#audio-player')[0].pause();
        clearInterval(audioMonitor);
        clearInterval(conductingMonitor);

        $('#video-player').css('display','block');
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


    $('.play-audio').click(function() {
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

    // var pitchShift = PitchShift(audioCtx);
    // pitchShift.wet.value = 1;
    // pitchShift.dry.value = 0;

    // pitchShift.transpose = $('#pitch').val();
    // $('#pitch').change(function() {
    //   pitchShift.transpose = $('#pitch').val();
    // });

    audioNode.mediaElement.playbackRate = 1

    audioNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    // pitchShift.connect(audioCtx.destination);


    var initialTempo = 1 * $('#bpm').text();

    var tempo = initialTempo,
        conducted = 0,
        beats = [];

    var initiateConducting = function() {
      conducted = 1;

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
    };

    var updateTempo = function(tempo) {
      $('#bpm').text(Math.floor(tempo));
      audioNode.mediaElement.playbackRate = tempo / initialTempo;
      firebase.database().ref("hebrides/tempo").set(tempo);
    };

    var processBeat = function(timeStamp) {
      if (conducted == 0 || (timeStamp - beats[6]) > 2000) {
        var msPerBeat = (60 * 1000 / initialTempo);
        beats = [timeStamp-(msPerBeat*6),timeStamp-(msPerBeat*5),timeStamp-(msPerBeat*4),timeStamp-(msPerBeat*3),timeStamp-(msPerBeat*2),timeStamp-msPerBeat,timeStamp];
        firebase.database().ref("hebrides/tempo").set(initialTempo);
        initiateConducting();
      } else {
        beats.shift();
        beats.push(timeStamp);
        tempo = 60 * 1000 / ((
          (beats[1] - beats[0] + beats[2] - beats[1]) +
          (beats[3] - beats[2] + beats[4] - beats[3]) * 3 +
          (beats[5] - beats[4] + beats[6] - beats[5]) * 7) / 22);
        updateTempo(tempo);
      }
    }

    $('#bpm-tap').click(function(e) {
      processBeat(Date.now());
    });

    $('#baton').change(function(e) {
      if ($('#baton').is(':checked')) {
        firebase.database().ref("hebrides/tempo").set(initialTempo);
        firebase.database().ref("hebrides").on('child_changed',function(snapshot) {
          if (conducted == 0) {
            initiateConducting();
          } else {
            tempo = snapshot.val();
            updateTempo(tempo);
          }
        });
      }
    });

  }
});
