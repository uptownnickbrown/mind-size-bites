// To pull this in you need to start browserifying again and include bundle.js in the index.html file
//var PitchShift = require('soundbank-pitch-shift');

$(document).ready(function() {
  var inC = function() {
    var init = function() {
      var note = 72; // the MIDI note
      var velocity = 100; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 100);
      MIDI.setVolume(1, 80);
      MIDI.setVolume(2, 60);
      MIDI.programChange(0, MIDI.GM.byName["guitar_harmonics"].number);
      MIDI.programChange(1, MIDI.GM.byName["marimba"].number);
      MIDI.programChange(2, MIDI.GM.byName["baritone_sax"].number);

      //MIDI.noteOn(channel, note, velocity, delay);

      var start = new Date().getTime()
      var metronome = setInterval(function() {
        var time = new Date().getTime() - start;
        console.log(time);
        MIDI.noteOn(1, 72, 100, 0);
        MIDI.noteOff(1, 72, 0.25);
      }, 272);
    };
  };

  	MIDI.loadPlugin({
  		soundfontUrl: "./audio/",
  		instruments: [ "guitar_harmonics", "marimba", "baritone_sax" ],
  		onprogress: function(state, progress) {
  			console.log(state, progress);
  		},
  		onsuccess: function() {
        inC.init();
  		}
  	});
});
