'use strict';

function NoteList() {
  var notes = [];

  var newNote = function(text, fakeNote) {
    notes.push(fakeNote || new Note(text));
  }

  var displayNotes = function() {
    var note = 0,
    returnArray = [];
    for (note in notes) {
      returnArray.push(notes[note].text);
    }
    return returnArray.join(', ');
  }

  return {
    notes: notes,
    newNote: newNote,
    displayNotes: displayNotes,
  }
}
