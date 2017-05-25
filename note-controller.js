'use-strict';

function NoteController() {
  var pageHTML = function(text) {
    var noteList = new NoteList();
    var note = noteList.addNote(text);
    var noteListView = new NoteListView();

    var newAppDiv = noteListView.createHTML(noteList);

    var appDiv = document.getElementById('app');
    appDiv.innerHTML = newAppDiv;
  }

  return {
    pageHTML: pageHTML
  }
};

//
// function changeText(noteController.pageHTML) {
//     var appDiv = document.getElementById('app');
//     appDiv.innerHTML = text;
// };)(this);
