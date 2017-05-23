'use strict';

function NoteListView() {

  const getHTML = function(noteList) {
    var n = 0;
    var noteArray = [];
    for (n in noteList) {
      noteArray.push(noteList[n].text);
    }
    if (noteArray.length === 0) {
      return '';
    }
    else {
      var noteString = noteArray.join('</div></li><li><div>');
      return ('<ul><li><div>' + noteString + '</div></li></ul>');
    }
  }

  return {
    getHTML: getHTML,
  }
}
