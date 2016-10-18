$(document).ready(function() {
  var initialTempo = $('#bpm').text() * 1;
  firebase.database().ref("tempo").set(initialTempo);

  $('#stop').click(function() {
    conducted = 0;
    firebase.database().ref("tempo").set(initialTempo);
    $('#bpm').text(initialTempo);
  });

  var tempo = initialTempo,
      conducted = 0,
      beats = [];

  var processBeat = function(timeStamp) {
    if (conducted == 0 || (timeStamp - beats[6]) > 1500) {
      conducted = 1;
      var msPerBeat = (60 * 1000 / initialTempo);
      beats = [timeStamp-(msPerBeat*6),timeStamp-(msPerBeat*5),timeStamp-(msPerBeat*4),timeStamp-(msPerBeat*3),timeStamp-(msPerBeat*2),timeStamp-msPerBeat,timeStamp];
      firebase.database().ref("tempo").set(initialTempo);
    } else {
        beats.shift();
        beats.push(timeStamp);
        tempo = 60 * 1000 / ((
          (beats[1] - beats[0] + beats[2] - beats[1]) +
          (beats[3] - beats[2] + beats[4] - beats[3]) * 2 +
          (beats[5] - beats[4] + beats[6] - beats[5]) * 4) / 14);
        $('#bpm').text(tempo);
        firebase.database().ref("tempo").set(tempo);
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
});
