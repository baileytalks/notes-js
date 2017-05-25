'use-strict';

// const changeText = function(text) {
//     var appDiv = document.getElementById('app');
//     appDiv.innerHTML = text;
// };

function NoteController() {
  var pageHTML = function(text) {
    var noteList = new NoteList();
    var note = noteList.addNote(text);
    var noteListView = new NoteListView();

    return noteListView.createHTML(noteList);
  }

  return {
    pageHTML: pageHTML
  }
};
