"use-strict";

// const changeText = function(text) {
//     var appDiv = document.getElementById('app');
//     appDiv.innerHTML = text;
// };

function NoteController(text) {
  var noteList = new NoteList();
  var note = noteList.addNote(text);
  var noteListView = new NoteListView();

  NoteController.prototype.createHTML = function() {
    return noteListView.createHTML(noteList);
  }
};
