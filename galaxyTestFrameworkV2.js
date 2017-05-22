'use strict';

// This tests one note
(function(exports){
  var string = "My favourite testing framework is Galaxy(tm)";
  var note = new Note(string);

  function firstTest() {
    var result = (note.text === string);
    return ('Contains string: ' + result);
  }

  function secondTest() {
    var result = (note.textPrint() === string);
    return ('Using .text prints the string: ' + result);
  }

  exports.firstTest = firstTest;
  exports.secondTest = secondTest;

})(this);

// This tests the list of notes
(function(exports){
  var noteList = new NoteList();

  function thirdTest() {
    var result = Array.isArray(noteList.notes);
    return ('Note list has an array of notes: ' + result);
  }

  function fourthTest() {
    var note1 = { text: 'Here is a note'};
    noteList.new('fakenote', note1);
    var result = (noteList.notes[0] === note1);
    return ('Making a new note pushes it to the array: ' + result)
  }

  function fifthTest() {
    var note2 = { text: 'Here is another note' };
    noteList.new('fakenote', note2);
    var result = (noteList.displayNotes() === "Here is a note, Here is another note");
    return ('Displays all notes in list: ' + result)
  }

  exports.thirdTest = thirdTest;
  exports.fourthTest = fourthTest;
  exports.fifthTest = fifthTest;
})(this);

console.log('%c-----GALAXY TEST-----', 'background: black; color: white; display: block;');
console.log(firstTest());
console.log(secondTest());
console.log(thirdTest());
console.log(fourthTest());
console.log(fifthTest());
