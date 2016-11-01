function inC(sessionID) {
  // TODO externalize the score
  this.score = [
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
        {"pitch": "B4", "velocity": "50", "duration": 1}
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

  this.performerMock = {
    "461c9669-ef45-33e1-0b7b-a8bd7b6d7eee" : {
      "advanceToPhrase" : 9,
      "channel" : 2,
      "currentPhrase" : 6,
      "instrumentName" : "marimba",
      "nextPhraseStart" : 38,
      "bot" : 1
    },
    "b6df1e27-13ab-81dd-4a0f-142cc6e50bb4" : {
      "advanceToPhrase" : 8,
      "channel" : 3,
      "currentPhrase" : 2,
      "instrumentName" : "kalimba",
      "nextPhraseStart" : 32,
      "bot" : 0
    },
    "bdf9757b-840c-2f75-be99-738338c75031" : {
      "advanceToPhrase" : 7,
      "channel" : 4,
      "currentPhrase" : 4,
      "instrumentName" : "vibraphone",
      "nextPhraseStart" : 6,
      "bot" : 1
    },
    "dcc67053-16f8-936d-a999-d2a1aa37fe4d" : {
      "advanceToPhrase" : 7,
      "channel" : 5,
      "currentPhrase" : 2,
      "instrumentName" : "acoustic_bass",
      "nextPhraseStart" : 10,
      "bot" : 0
    },
    "deb656fd-670b-b947-db16-aacdb5ef3201" : {
      "advanceToPhrase" : 6,
      "channel" : 1,
      "currentPhrase" : 6,
      "instrumentName" : "acoustic_grand_piano",
      "nextPhraseStart" : 4,
      "bot" : 1
    }
  };

  this.octaveMap = {
    "acoustic_bass"         :-2,
    "acoustic_grand_piano"  :-1,
    "cello"                 :-1,
    "kalimba"               : 1,
    "marimba"               : 0,
    "oboe"                  : 0,
    "vibraphone"            : 1,
    "viola"                 : 0
  };

  this.tempo = 240;
  this.performers = {};
  this.availableChannel = 1;
  var performerRef = firebase.database().ref("inC/" + sessionID + "/performers");
  var sessionRef = firebase.database().ref("inC/" + sessionID);

  this.newPerformer = function(id,instrument,bot) {
    if (this.availableChannel > 15) {
      // TODO reassign channels, maybe add a reset button someone / remove bots
      console.log('sorry, too many instruments!');
    } else {
      // If someone is already playing, find out what beat # they're on and join in then.
      var normalizeToBeatNumber;
      if (typeof self.performers === "undefined") {
        self.performers = {};
      }
      if (Object.keys(self.performers).length > 0) {
        var syncOnPerformerKey = Object.keys(self.performers).reduce(function(a, b){
          return self.performers[a]['nextPhraseStart'] > self.performers[b]['nextPhraseStart'] ? b : a
        });
        normalizeToBeatNumber = self.performers[syncOnPerformerKey]['nextPhraseStart'];
      } else {
        normalizeToBeatNumber = 4;
      }
      // otherwise start after a few metronome ticks
      this.performers[id] = {
        "channel":this.availableChannel,
        "instrumentName":instrument,
        "currentPhrase":1,
        "nextPhraseStart":normalizeToBeatNumber,
        "advanceToPhrase":1,
        "bot":bot ? 1 : 0
      };
      // Set up performer audio Channel
      MIDI.setVolume(this.availableChannel, 100);
      MIDI.programChange(this.availableChannel, MIDI.GM.byName[instrument].number);
      this.availableChannel += 1;
      firebase.database().ref("inC/" + sessionID + "/availableChannel").set(this.availableChannel);
      performerRef.set(this.performers);
      self.setupPerformer(id,1);
    }
  };

  this.setupPerformer = function(id,mine) {
    if (self.performers[id].bot) {
      $('.performers').prepend('<div class="player" id="' + id + '"><div class="avatar"></div><div class="bot"><button class="disabled">Randomizing...</button></div><div class="current"><img src="./images/' + self.performers[id]['currentPhrase'] + '.png" /></div><div class="instrument"></div></div><hr />');
      $('#' + id + ' .avatar').css("background-image","url('/in-c/images/bot.jpg')");
      $('#' + id + ' .instrument').css("background-image","url('/in-c/images/" + self.performers[id].instrumentName + ".jpg')");
    } else {
    if (mine) {
      $('.performers').prepend('<div class="player" id="' + id + '"><div class="avatar"></div><div class="advance"><button>Next Phrase</button></div><div class="current"><img src="./images/' + self.performers[id]['currentPhrase'] + '.png" /></div><div class="instrument"></div></div><hr />');
      $('#' + id + ' .avatar').css("background-image","url('https://api.adorable.io/avatars/75/" + id + ".png')");
      $('#' + id + ' .instrument').css("background-image","url('/in-c/images/" + self.performers[id].instrumentName + ".jpg')");
      $('#' + id + ' .advance button').click(function(e){
        e.preventDefault();
        self.advanceByOne(id);
      });
    } else {
        $('.performers').prepend('<div class="player" id="' + id + '"><div class="avatar"></div><div class="not-mine"><button class="disabled">Syncing</button></div><div class="current"><img src="./images/' + self.performers[id]['currentPhrase'] + '.png" /></div><div class="instrument"></div></div><hr />');
        $('#' + id + ' .avatar').css("background-image","url('https://api.adorable.io/avatars/75/" + id + ".png')");
        $('#' + id + ' .instrument').css("background-image","url('/in-c/images/" + self.performers[id].instrumentName + ".jpg')");
      }
    }
  };

  this.advanceByOne = function(id) {
    this.performers[id].advanceToPhrase += 1;
    performerRef.set(this.performers);
  };

  this.advanceToPhrase = function(id,phrase) {
    this.performers[id].advanceToPhrase = phrase;
    performerRef.set(this.performers);
  };

  this.progressPerformer = function(id) {
    self.performers[id].currentPhrase = self.performers[id].currentPhrase + 1;
    $('#' + id + ' .current img').attr("src", "./images/" + self.performers[id].currentPhrase + ".png");
    if (self.performers[id].currentPhrase > 53) {
      self.removePerformer(id);
    }
    performerRef.set(this.performers);
  };

  this.removePerformer = function(id) {
    delete this.performers[id];
    $('#' + id + ' .advance button').remove();
    $('#' + id + ' .current img').attr("src", "./images/shh.jpg");
    performerRef.set(this.performers);
  };

  var self = null;
  self = this;

  sessionRef.once('value',function(snapshot) {
    var sessionSnapshot = snapshot.val();
    if (sessionSnapshot) {
      self.tempo = sessionSnapshot.tempo;
      self.availableChannel = sessionSnapshot.availableChannel;
      self.performers = sessionSnapshot.performers;
      if (self.performers) {
        var syncOnPerformerKey = Object.keys(self.performers).reduce(function(a, b){ return self.performers[a]['nextPhraseStart'] > self.performers[b]['nextPhraseStart'] ? b : a });
        var normalizeToBeatNumber = self.performers[syncOnPerformerKey]['nextPhraseStart'];
        Object.keys(self.performers).forEach(function(performerId) {
          var selfInLoop = self;
          var performer = self.performers[performerId];
          self.performers[performerId]['nextPhraseStart'] = performer['nextPhraseStart'] - (normalizeToBeatNumber - 4);
          // TODO add detection for who owns this performer
          self.setupPerformer(performerId,0);
          MIDI.setVolume(performer.channel, 100);
          MIDI.programChange(performer.channel, MIDI.GM.byName[performer.instrumentName].number);
        });
      }
    } else {
      firebase.database().ref("inC/" + sessionID + "/availableChannel").set(self.availableChannel);
      firebase.database().ref("inC/" + sessionID + "/tempo").set(self.tempo);
    }
  });

  sessionRef.on('child_changed',function(snapshot) {
    var key = snapshot.key;
    if (key == 'performers') {
      var remotePerformers = snapshot.val();
      Object.keys(self.performers).forEach(function(performerId) {
        if (remotePerformers[performerId]['advanceToPhrase'] > self.performers[performerId]['currentPhrase'] && remotePerformers[performerId]['advanceToPhrase'] > self.performers[performerId]['advanceToPhrase']) {
          self.advanceToPhrase(performerId,remotePerformers[performerId]['advanceToPhrase']);
        }
      });
    }
  });

  this.init = function() {
    var eighthNoteMilliseconds = 60 * 1000 / this.tempo;

    MIDI.setVolume(0, 60);
    MIDI.programChange(0, MIDI.GM.byName["marimba"].number);

    var self = this;
    var beat = 0;

    var metronome = setInterval(function() {

      Object.keys(self.performers).forEach(function(id){
        if (self.performers[id].nextPhraseStart == beat) {
          if (self.performers[id].advanceToPhrase > self.performers[id].currentPhrase) {
            self.progressPerformer(id);
          }
          var scoreIndex = (self.performers[id].currentPhrase - 1);
          var phraseScore = self.score[scoreIndex].score;
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
                "channel": self.performers[id].channel,
                "pitch": pitchValue,
                "velocity": velocity,
                "duration": duration,
                "targetBeat": phraseDuration * 2,
                "delay": (phraseDuration * eighthNoteMilliseconds + 10) / 1000
              };
              phraseInstructions.push(noteOn);

              var noteOff = {
                "type":"off",
                "channel":self.performers[id].channel,
                "pitch":pitchValue,
                "duration": duration,
                "targetBeat": phraseDuration * 2,
                "delay": (phraseDuration * eighthNoteMilliseconds + (note.grace ? (eighthNoteMilliseconds / 4) : (duration * eighthNoteMilliseconds - 25))) / 1000
              };
              phraseInstructions.push(noteOff);
            }
            phraseDuration += duration;
          });
          self.performers[id].nextPhraseStart = beat + phraseDuration * 2;
          phraseInstructions.forEach(function(instruction) {
            var adjustedPitch = instruction.pitch + (12 * self.octaveMap[self.performers[id].instrumentName]);
            if (instruction.type == "on") {
              MIDI.noteOn(instruction.channel, adjustedPitch, instruction.velocity, instruction.delay);
            } else {
              MIDI.noteOff(instruction.channel, adjustedPitch, instruction.delay);
            }
          });
        } else {
          if (self.performers[id].bot == 1 && (Math.random() > .98)) {
            self.advanceByOne(id);
          }
        }
      });
      if (beat % 2 == 0) {
        MIDI.noteOn(0, 72, 50, 0);
        MIDI.noteOff(0, 72, 0.15);
      }
      beat += 1;
    }, eighthNoteMilliseconds / 2);
    return metronome;
  };

  // store reference to beat timing setInterval
  var metronome;
  $('.start').click(function(e){
    e.preventDefault();
    metronome = self.init();
  });

  $('.leave').click(function(e){
    e.preventDefault();

    // stop playing music
    if (metronome) {
      clearInterval(metronome);
    }

    // detach firebase event listeners
    sessionRef.off();
    performerRef.off();

    // unbind events from buttons
    $('.performers *').unbind();
    $('.start').unbind();
    $('.add').unbind();
    $('.add-bot').unbind();
    $('.leave').unbind();

    // delete the active inC object
    window.activeSession = null;

    // clean up the UI
    $('.inactive').removeClass('hidden');
    $('.active-performance').addClass('hidden');
    $('.performers').html('');
  });

  $('.add').click(function(e){
    e.preventDefault();
    var insts = [ "acoustic_bass","acoustic_grand_piano", "cello","kalimba","marimba","oboe","vibraphone", "viola"];
    var randInst = insts[Math.floor(Math.random()*insts.length)]
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    var randName = s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
    self.newPerformer(randName,randInst,false);
  });

  $('.add-bot').click(function(e){
    e.preventDefault();
    var insts = [ "acoustic_bass","acoustic_grand_piano", "cello","kalimba","marimba","oboe","vibraphone", "viola"];
    var randInst = insts[Math.floor(Math.random()*insts.length)]
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    var randName = s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
    self.newPerformer(randName,randInst,true);
  });
};

$(document).ready(function() {
	MIDI.loadPlugin({
		soundfontUrl: "./audio/",
		instruments: [ "acoustic_bass","acoustic_grand_piano", "cello","kalimba","marimba","oboe","vibraphone", "viola"],
		onsuccess: function() {
      $('.loader').addClass('hidden');
      $('.inactive').removeClass('hidden');
      $('.session-name').on('input',function(){
        var sessionsRef = firebase.database().ref("inC");
        sessionsRef.once('value',function(snapshot) {
          var validSessions = Object.keys(snapshot.val());
          var inputValue = $('.session-name').val();
          if (inputValue == '') {
            $('.create').off();
            $('.create').addClass('disabled');
            $('.join').off();
            $('.join').addClass('disabled');
          } else {
            if ($.inArray(inputValue,validSessions) > -1) {
              $('.join').removeClass('disabled');
              $('.join').off();
              $('.join').on('click',function(e){
                e.preventDefault();
                window.activeSession = new inC(inputValue);
                $('.inactive').addClass('hidden');
                $('.active-performance').removeClass('hidden');
              });
              $('.create').off();
              $('.create').addClass('disabled');
            } else {
              $('.create').removeClass('disabled');
              $('.create').off();
              $('.create').on('click',function(e){
                e.preventDefault();
                window.activeSession = new inC(inputValue);
                $('.inactive').addClass('hidden');
                $('.active-performance').removeClass('hidden');
              });
              $('.join').off();
              $('.join').addClass('disabled');
            }
          }
        });
      });
		}
	});
});
