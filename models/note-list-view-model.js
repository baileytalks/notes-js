'use strict';

function NoteListView() {
  const createHTML = function(noteList) {
    var n = 0;
    var noteArray = [];
    var notes = noteList.notes;

    for (n in notes) {
      noteArray.push(notes[n].text.substr(0, 20));
    }

    if (noteArray.length === 0) {
      return '';
    }

    else {
      var noteString = noteArray.join('</div></li><li><div>');
      return (`<ul><li><div>${noteString}</div></li></ul>`);
    }
  }

  return {
    createHTML: createHTML
  }
};
