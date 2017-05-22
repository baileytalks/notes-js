'use strict';

function NoteList() {
  this.notes = [];
}

NoteList.prototype.new = function(text, fakeNote) {
  this.notes.push(fakeNote || new Note(text));
}

NoteList.prototype.displayNotes = function() {
  var note = 0,
      returnArray = [];
  for (note in this.notes) {
    returnArray.push(this.notes[note].text);
  }
  return returnArray.join(', ');
}
