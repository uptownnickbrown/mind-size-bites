function inC () {

  // TODO externalize this
  var score = [
    {
      "number": 1,
      "score": [
        {"pitch": "C4", "velocity": "50", "duration": 0, "grace": true},
        {"pitch": "E4", "velocity": "115", "duration": 2},
        {"pitch": "C4", "velocity": "50", "duration": 0, "grace": true},
        {"pitch": "E4", "velocity": "115", "duration": 2},
        {"pitch": "C4", "velocity": "50", "duration": 0, "grace": true},
        {"pitch": "E4", "velocity": "115", "duration": 2}
      ]
    },
    {
      "number": 2,
      "score": [
        {"pitch": "C4", "velocity": "50", "duration": 0, "grace": true},
        {"pitch": "E4", "velocity": "115", "duration": 1},
        {"pitch": "F4", "velocity": "50", "duration": 1},
        {"pitch": "E4", "velocity": "85", "duration": 2}
      ]
    },
    {
      "number": 3,
      "score": [
        {"duration": 1},
        {"pitch": "E4", "velocity": "50", "duration": 1},
        {"pitch": "F4", "velocity": "85", "duration": 1},
        {"pitch": "E4", "velocity": "50", "duration": 1}
      ]
    },
    {
      "number": 4,
      "score": [
        {"duration": 1},
        {"pitch": "E4", "velocity": "50", "duration": 1},
        {"pitch": "F4", "velocity": "85", "duration": 1},
        {"pitch": "G4", "velocity": "50", "duration": 1}
      ]
    },
    {
      "number": 5,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 1},
        {"pitch": "F4", "velocity": "50", "duration": 1},
        {"pitch": "G4", "velocity": "85", "duration": 1},
        {"duration": 1}
      ]
    },
    {
      "number": 6,
      "score": [
        {"pitch": "C5", "velocity": "115", "duration": 8},
        {"pitch": "C5", "velocity": "115", "duration": 8}
      ]
    },
    {
      "number": 7,
      "score": [
        {"duration": 2},
        {"duration": 2},
        {"duration": 2},
        {"duration": 1},
        {"pitch": "C4", "velocity": "115", "duration": 0.5},
        {"pitch": "C4", "velocity": "50", "duration": 0.5},
        {"pitch": "C4", "velocity": "50", "duration": 1},
        {"duration": 1},
        {"duration": 2},
        {"duration": 2},
        {"duration": 2},
        {"duration": 2}
      ]
    },
    {
      "number": 8,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 12},
        {"pitch": "F4", "velocity": "85", "duration": 8},
        {"pitch": "F4", "velocity": "85", "duration": 8}
      ]
    },
    {
      "number": 9,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"duration": 1},
        {"duration": 2},
        {"duration": 2},
        {"duration": 2}
      ]
    },
    {
      "number": 10,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 11,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 12,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 1},
        {"pitch": "G4", "velocity": "50", "duration": 1},
        {"pitch": "B4", "velocity": "85", "duration": 8},
        {"pitch": "C5", "velocity": "115", "duration": 2}
      ]
    },
    {
      "number": 13,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 1.5},
        {"pitch": "G4", "velocity": "85", "duration": 0.5},
        {"pitch": "F4", "velocity": "50", "duration": 0.5},
        {"pitch": "G4", "velocity": "85", "duration": 1},
        {"duration": 1.5},
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 6}
      ]
    },
    {
      "number": 14,
      "score": [
        {"pitch": "C5", "velocity": "115", "duration": 8},
        {"pitch": "B4", "velocity": "85", "duration": 8},
        {"pitch": "G4", "velocity": "85", "duration": 8},
        {"pitch": "Gb4", "velocity": "85", "duration": 8}
      ]
    },
    {
      "number": 15,
      "score": [
        {"pitch": "G4", "velocity": "115",  "duration": 0.5},
        {"duration": 1.5},
        {"duration": 2},
        {"duration": 2},
        {"duration": 2}
      ]
    },
    {
      "number": 16,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "B4", "velocity": "50", "duration": 0.5},
        {"pitch": "C5", "velocity": "85", "duration": 0.5},
        {"pitch": "B4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 17,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "C5", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "C5", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"duration": 0.5}
      ]
    },
    {
      "number": 18,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "E4", "velocity": "85", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "E4", "velocity": "85", "duration": 1.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 19,
      "score": [
        {"duration": 3},
        {"pitch": "G5", "velocity": "115", "duration": 3}
      ]
    },
    {
      "number": 20,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "E4", "velocity": "85", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "G3", "velocity": "115", "duration": 1.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "85", "duration": 0.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "85", "duration": 0.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 21,
      "score": [
        {"pitch": "Gb4", "velocity": "115", "duration": 6}
      ]
    },
    {
      "number": 22,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 3},
        {"pitch": "E4", "velocity": "85", "duration": 3},
        {"pitch": "E4", "velocity": "85", "duration": 3},
        {"pitch": "E4", "velocity": "85", "duration": 3},
        {"pitch": "E4", "velocity": "85", "duration": 3},
        {"pitch": "Gb4", "velocity": "85", "duration": 3},
        {"pitch": "G4", "velocity": "85", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocty": "50", "duration": 1}
      ]
    },
    {
      "number": 23,
      "score": [
        {"pitch": "E4", "velocity": "50", "duration": 1},
        {"pitch": "Gb4", "velocity": "115", "duration": 3},
        {"pitch": "Gb4", "velocity": "85", "duration": 3},
        {"pitch": "Gb4", "velocity": "85", "duration": 3},
        {"pitch": "Gb4", "velocity": "85", "duration": 3},
        {"pitch": "Gb4", "velocity": "85", "duration": 3},
        {"pitch": "G4", "velocity": "85", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocity": "85", "duration": 2}
      ]
    },
    {
      "number": 24,
      "score": [
        {"pitch": "E4", "velocity": "50", "duration": 1},
        {"pitch": "Gb4", "velocity": "50", "duration": 1},
        {"pitch": "G4", "velocity": "115", "duration": 3},
        {"pitch": "G4", "velocity" :"85", "duration": 3},
        {"pitch": "G4", "velocity": "85", "duration": 3},
        {"pitch": "G4", "velocity": "85", "duration": 3},
        {"pitch": "G4", "velocity": "85", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocity": "50", "duration": 1}
      ]
    },
    {
      "number": 25,
      "score": [
        {"pitch": "E4", "velocity": "50", "duration": 1},
        {"pitch": "Gb4", "velocity": "50", "duration": 1},
        {"pitch": "G4", "velocity": "50", "duration": 1},
        {"pitch": "A4", "velocity": "115", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "A4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocity": "85", "duration": 3}
      ]
    },
    {
      "number": 26,
      "score": [
        {"pitch": "E4", "velocity": "50", "duration": 1},
        {"pitch": "Gb4", "velocity": "50", "duration": 1},
        {"pitch": "G4", "velocity": "50", "duration": 1},
        {"pitch": "A4", "velocity": "50", "duration": 1},
        {"pitch": "B4", "velocity": "115", "duration": 3},
        {"pitch": "B4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocity": "85", "duration": 3},
        {"pitch": "B4", "velocity": "85", "duration": 3}
      ]
    },
    {
      "number": 27,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "E4", "velocity": "85", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "G4", "velocity": "115", "duration": 1},
        {"pitch": "E4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "85", "duration": 0.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "85", "duration": 0.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 28,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "E4", "velocity": "85", "duration": 0.5},
        {"pitch": "Gb4", "velocity": "50", "duration": 0.5},
        {"pitch": "E4", "velocity": "115", "duration": 1.5},
        {"pitch": "E4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 29,
      "score": [
        {"pitch": "E4", "velocity": "115", "duration": 6},
        {"pitch": "G4", "velocity": "85", "duration": 6},
        {"pitch": "C5", "velocity": "85", "duration": 6}
      ]
    },
    {
      "number": 30,
      "score": [
        {"pitch": "C5", "velocity": "115", "duration": 12}
      ]
    },
    {
      "number": 31,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "F4", "velocity": "50", "duration": 0.5},
        {"pitch": "G4", "velocity": "85", "duration": 0.5},
        {"pitch": "B4", "velocity": "50", "duration": 0.5},
        {"pitch": "G4", "velocity": "85", "duration": 0.5},
        {"pitch": "B4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 32,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "F4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "F4", "velocity": "50", "duration": 0.5},
        {"pitch": "F4", "velocity": "85", "duration": 6},
        {"pitch": "G4", "velocity": "85", "duration": 3}
      ]
    },
    {
      "number": 33,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "F4", "velocity": "50", "duration": 0.5},
        {"duration": 1}
      ]
    },
    {
      "number": 34,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "F4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 35,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"duration": 1},
        {"duration": 2},
        {"duration": 2},
        {"duration": 2},
        {"pitch": "Bb4", "velocity": "115", "duration": 2},
        {"pitch": "G5", "velocity": "85", "duration": 6},
        {"pitch": "A5", "velocity": "115", "duration": 1},
        {"pitch": "G5", "velocity": "50", "duration": 1},
        {"pitch": "G5", "velocity": "85", "duration": 1},
        {"pitch": "B5", "velocity": "50", "duration": 1},
        {"pitch": "A5", "velocity": "85", "duration": 3},
        {"pitch": "G5", "velocity": "50", "duration": 1},
        {"pitch": "E5", "velocity": "85", "duration": 6},
        {"pitch": "G5", "velocity": "115", "duration": 1},
        {"pitch": "Gb5", "velocity": "50", "duration": 1},
        {"pitch": "Gb5", "velocity": "50", "duration": 6},
        {"duration": 2},
        {"duration": 2},
        {"duration": 1},
        {"pitch": "E5", "velocity": "50", "duration": 1},
        {"pitch": "E5", "velocity": "115", "duration": 4},
        {"pitch": "F5", "velocity": "85", "duration": 12}
      ]
    },
    {
      "number": 36,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 37,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 38,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5}
      ]
    },
    {
      "number": 39,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "F4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "B4", "velocity": "85", "duration": 0.5},
        {"pitch": "C5", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 40,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "F4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 41,
      "score": [
        {"pitch": "B4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 42,
      "score": [
        {"pitch": "C5", "velocity": "115", "duration": 8},
        {"pitch": "B4", "velocity": "115", "duration": 8},
        {"pitch": "A4", "velocity": "115", "duration": 8},
        {"pitch": "C5", "velocity": "115", "duration": 8}
      ]
    },
    {
      "number": 43,
      "score": [
        {"pitch": "F5", "velocity": "115", "duration": 0.5},
        {"pitch": "E5", "velocity": "50", "duration": 0.5},
        {"pitch": "F5", "velocity": "85", "duration": 0.5},
        {"pitch": "E5", "velocity": "50", "duration": 0.5},
        {"pitch": "E5", "velocity": "115", "duration": 1},
        {"pitch": "E5", "velocity": "85", "duration": 1},
        {"pitch": "E5", "velocity": "85", "duration": 1},
        {"pitch": "F5", "velocity": "85", "duration": 0.5},
        {"pitch": "E5", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 44,
      "score": [
        {"pitch": "F5", "velocity": "115", "duration": 1},
        {"pitch": "E5", "velocity": "85", "duration": 1},
        {"pitch": "E5", "velocity": "85", "duration": 1},
        {"pitch": "E5", "velocity": "85", "duration": 1},
        {"pitch": "C5", "velocity": "115", "duration": 2}
      ]
    },
    {
      "number": 45,
      "score": [
        {"pitch": "D5", "velocity": "115", "duration": 2},
        {"pitch": "D5", "velocity": "85", "duration": 2},
        {"pitch": "G4", "velocity": "85", "duration": 2}
      ]
    },
    {
      "number": 46,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "D5", "velocity": "50", "duration": 0.5},
        {"pitch": "E5", "velocity": "85", "duration": 0.5},
        {"pitch": "D5", "velocity": "50", "duration": 0.5},
        {"duration": 1},
        {"pitch": "G4", "velocity": "85", "duration": 1},
        {"duration": 1},
        {"pitch": "G4", "velocity": "85", "duration": 1},
        {"duration": 1},
        {"pitch": "G4", "velocity": "85", "duration": 1},
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "D5", "velocity": "50", "duration": 0.5},
        {"pitch": "E5", "velocity": "85", "duration": 0.5},
        {"pitch": "D5", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 47,
      "score": [
        {"pitch": "D5", "velocity": "115", "duration": 0.5},
        {"pitch": "E5", "velocity": "50", "duration": 0.5},
        {"pitch": "D5", "velocity": "85", "duration": 1}
      ]
    },
    {
      "number": 48,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 12},
        {"pitch": "G4", "velocity": "115", "duration": 8},
        {"pitch": "F4", "velocity": "115", "duration": 8},
        {"pitch": "F4", "velocity": "85", "duration": 2}
      ]
    },
    {
      "number": 49,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "Bb4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "Bb4", "velocity": "85", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 50,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 51,
      "score": [
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "Bb4", "velocity": "85", "duration": 0.5},
        {"pitch": "F4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5},
        {"pitch": "Bb4", "velocity": "85", "duration": 0.5}
      ]
    },
    {
      "number": 52,
      "score": [
        {"pitch": "G4", "velocity": "115", "duration": 0.5},
        {"pitch": "Bb4", "velocity": "50", "duration": 0.5}
      ]
    },
    {
      "number": 53,
      "score": [
        {"pitch": "Bb4", "velocity": "115", "duration": 0.5},
        {"pitch": "G4", "velocity": "50", "duration": 0.5}
      ]
    }
  ];

  this.tempo = 240;
  this.phraseCounter = 0;

  this.getCurrentPhrase = function() {
    return this.phraseCounter;
  }

  this.init = function() {
    var eighthNoteMilliseconds = 60 * 1000 / this.tempo;
    console.log("millisec per eighth note: " + eighthNoteMilliseconds);

    MIDI.setVolume(0, 80);
    MIDI.programChange(0, MIDI.GM.byName["marimba"].number);

    // Set up first performer
    MIDI.setVolume(1, 80);
    MIDI.programChange(1, MIDI.GM.byName["acoustic_grand_piano"].number);

    var nextPhraseStart = 6;
    var beat = 0;

    new Date;
    var start = Date.now();

    var self = this;
    var metronome = setInterval(function() {
      console.log(self);
      if (nextPhraseStart == beat) {
        var phraseScore = score[self.phraseCounter].score;
        var phraseInstructions = [];
        var phraseDuration = 0;
        var phraseNoteCount = phraseScore.length;
        var i = 0;

        phraseScore.forEach(function(note) {
          var duration = note.duration;
          var velocity = note.velocity;
          if (note.pitch) {
            var pitchValue = MIDI.keyToNote[note.pitch];
            var noteOn = {
              "type": "on",
              "channel": 1,
              "pitch": pitchValue,
              "velocity": velocity,
              "duration": duration,
              "targetBeat": phraseDuration * 2,
              "delay": (phraseDuration * eighthNoteMilliseconds + 10) / 1000
            };
            phraseInstructions.push(noteOn);

            var noteOff = {
              "type":"off",
              "channel":1,
              "pitch":pitchValue,
              "duration": duration,
              "targetBeat": phraseDuration * 2,
              "delay": (phraseDuration * eighthNoteMilliseconds + (note.grace ? (eighthNoteMilliseconds / 6) : (duration * eighthNoteMilliseconds - 50))) / 1000
            };
            phraseInstructions.push(noteOff);
          }
          phraseDuration += duration;
        });
        nextPhraseStart = beat + phraseDuration * 2;
        phraseInstructions.forEach(function(instruction) {
          if (instruction.type == "on") {
            console.log('sending note on note ' + instruction.pitch + ', ' + instruction.delay + ' ms from now');
            MIDI.noteOn(instruction.channel, instruction.pitch, instruction.velocity, instruction.delay);
          } else {
            console.log('sending note off for note ' + instruction.pitch + ', ' + instruction.delay + ' ms from now');
            MIDI.noteOff(instruction.channel, instruction.pitch, instruction.delay);
          }
        });
      }

      if (beat % 2 == 0) {
        var elapsed = Date.now() - start;
        console.log('metronome: ' + beat + ' at ' + elapsed);
        MIDI.noteOn(0, 72, 100, 0);
        MIDI.noteOff(0, 72, 0.25);
      }
      beat += 1;
      if (beat % (Math.floor(Math.random() * 16) + 23) == 0) {
        self.phraseCounter += 1;
        console.log(self);
        console.log(window.inC);
      }

    }, eighthNoteMilliseconds / 2);




  }
  this.init();
};

$(document).ready(function() {


  	MIDI.loadPlugin({
  		soundfontUrl: "./audio/",
  		instruments: [ "acoustic_grand_piano", "marimba"],
  		onprogress: function(state, progress) {
  			console.log(state, progress);
  		},
  		onsuccess: function() {
        window.inC = new inC();
  		}
  	});
});
