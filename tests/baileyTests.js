(function() {

  function DummyNoteController() {
    var pageHTML = function(text) {
      var noteList = new NoteList();
      var note = noteList.addNote(text);
      var noteListView = new NoteListView();

      var newAppDiv = noteListView.createHTML(noteList);

      var findAppDiv = document.getElementById('app');
      findAppDiv.innerHTML = newAppDiv;
    }

    return {
      pageHTML: pageHTML
    }
  };

// Helpers function above, tests below ------------------------------------

    var note = new Note('string');
    var noteList = new NoteList();
    var noteListView = new NoteListView();
    var dummyNoteController = new DummyNoteController();
    var singleNoteView = new SingleNoteView(note);
    // The next line adds a note for test 12, with an ID of 1
    var secondNote = new Note('another string');

    // The next line adds another note! It has an id of 2, and is used in test 8
    dummyNoteController.pageHTML('Favourite food: pesto');
    var findAppDiv = document.getElementById('app').innerHTML;

    var title = '1. Contains a string';
    elementsAreTheSame(title, note.text, 'string')

    var title = '2. Using .text prints the string';
    elementsAreTheSame(title, note.textPrint(), 'string')

    var title = '3. Making new note pushes to array';
    var note1 = { text: 'Here is a note'};
    noteList.addNote('fakenote', note1);
    elementsAreTheSame(title, noteList.notes[0], note1)

    var title = '4. Displays all notes in list';
    noteList.addNote('fakenote', { text: 'Here is another note' });
    elementsAreTheSame(title, noteList.displayNotes(), "Here is a note, Here is another note")

    var title = '5. Produces string of HTML with notes';
    var htmlString = '<ul><li><div><a href="#0">Here is a note</a></div></li><li><div><a href="#1">Here is another note</a></div></li></ul>';
    var fakeNoteList = { notes: [{ text: 'Here is a note', id: 0 }, { text: 'Here is another note', id: 1 }] };
    elementsAreTheSame(title, noteListView.createHTML(fakeNoteList), htmlString);

    var title = '6. Produces string of HTML with one note';
    var htmlStringOneNote = '<ul><li><div><a href="#0">Here is a note</a></div></li></ul>';
    var fakeNoteObject = { notes: [{ text: 'Here is a note', id: 0 }] };
    elementsAreTheSame(title, noteListView.createHTML(fakeNoteObject), htmlStringOneNote);

    var title = '7. Does not produce string of HTML with no note';
    var htmlStringNoNotes = '';
    var fakeNoNote = [];
    elementsAreTheSame(title, noteListView.createHTML(fakeNoNote), htmlStringNoNotes);

    var title = '8. The innerHTML property of the app element contains HTML with string';
    var foodNote20char = 'Favourite food: pest';
    elementContains(title, findAppDiv, foodNote20char);

    var title = '9. Expects the output of single note view to include the note given to it';
    elementContains(title, singleNoteView.noteview(), 'string')

    var title = '10. Expect the note view to only show the first 20 characters';
    var fakeNoteObject = { notes: [{ text: 'Here is a note which is really really really really really long', id: 0 }] };
    var expectedResult = '<ul><li><div><a href="#0">Here is a note which</a></div></li></ul>';
    elementsAreTheSame(title, noteListView.createHTML(fakeNoteObject), expectedResult)

    var title = '11. The first note has an id of 0';
    elementsAreTheSame(title, note.id, 0)

    var title = '12. The second note has an id of 1';
    elementsAreTheSame(title, secondNote.id, 1);

    var title = '13. All notes are hyperlinks';
    elementContains(title, findAppDiv, 'href')

    var title = '14. Notes are hyperlinked to their own # page';
    elementContains(title, findAppDiv, 'href="#2"')

})();
