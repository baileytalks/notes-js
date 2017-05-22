'use strict';

function NoteList() {
  this.notes = [];
}

NoteList.prototype.new = function(text) {
  this.notes.push(new Note(text));
}
