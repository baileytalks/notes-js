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

  exports.thirdTest = thirdTest;
  
})(this);

console.log('%c-----GALAXY TEST-----', 'background: black; color: white; display: block;');
console.log(firstTest());
console.log(secondTest());
console.log(thirdTest());
