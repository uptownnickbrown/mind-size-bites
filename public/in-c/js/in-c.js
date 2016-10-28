// To pull this in you need to start browserifying again and include bundle.js in the index.html file
//var PitchShift = require('soundbank-pitch-shift');

$(document).ready(function() {
  var inC = {
    init : function() {
      MIDI.programChange(1, MIDI.GM.byName["marimba"].number);
      MIDI.programChange(2, MIDI.GM.byName["baritone_sax"].number);
      var channel = 1; // the MIDI note
      var note = 50; // the MIDI note
      var velocity = 127; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 127);
      MIDI.noteOn(channel, note, velocity, .5);
      MIDI.noteOff(channel, note, 1.5);
      MIDI.noteOn(channel, note + 2, velocity, 1);
      MIDI.noteOff(channel, note + 2, 2);
      MIDI.noteOn(channel, note + 4, velocity, 1.5);
      MIDI.noteOff(channel, note + 4, 2.5);
      MIDI.noteOn(0, note, velocity, 5);
      MIDI.noteOff(0, note, 5.5);
      MIDI.noteOn(0, note + 2, velocity, 6);
      MIDI.noteOff(0, note + 2, 7);
      MIDI.noteOn(0, note + 4, velocity, 8);
      MIDI.noteOff(0, note + 4, 8);
      MIDI.noteOn(2, note, velocity, 1);
      MIDI.noteOff(2, note, 3);
      MIDI.noteOn(2, note + 2, velocity, 3);
      MIDI.noteOff(2, note + 2, 7);
      MIDI.noteOn(2, note + 4, velocity, 7);
      MIDI.noteOff(2, note + 4, 12);
    }
  };

  	MIDI.loadPlugin({
  		soundfontUrl: "./audio/",
  		instruments: [ "acoustic_grand_piano", "marimba", "baritone_sax" ],
  		onprogress: function(state, progress) {
  			console.log(state, progress);
  		},
  		onsuccess: function() {
        inC.init();
  		}
  	});
});
