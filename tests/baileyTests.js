(function() {

  function DummyNoteController() {
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

    var note = new Note('string');
    var noteList = new NoteList();
    var noteListView = new NoteListView();
    var dummyNoteController = new DummyNoteController();
    var singleNoteView = new SingleNoteView(note);

    var title = 'Contains a string';
    elementsAreTheSame(title, note.text, 'string')

    var title = 'Using .text prints the string';
    elementsAreTheSame(title, note.textPrint(), 'string')

    var title = 'Making new note pushes to array';
    var note1 = { text: 'Here is a note'};
    noteList.addNote('fakenote', note1);
    elementsAreTheSame(title, noteList.notes[0], note1)

    var title = 'Displays all notes in list';
    noteList.addNote('fakenote', { text: 'Here is another note' });
    elementsAreTheSame(title, noteList.displayNotes(), "Here is a note, Here is another note")

    var title = 'Produces string of HTML with notes';
    var htmlString = '<ul><li><div>Here is a note</div></li><li><div>Here is another note</div></li></ul>';
    var fakeNoteList = { notes: [{ text: 'Here is a note' }, { text: 'Here is another note' }] };
    elementsAreTheSame(title, noteListView.createHTML(fakeNoteList), htmlString);

    var title = 'Produces string of HTML with one note';
    var htmlStringOneNote = '<ul><li><div>Here is a note</div></li></ul>';
    var fakeNoteObject = { notes: [{ text: 'Here is a note' }] };
    elementsAreTheSame(title, noteListView.createHTML(fakeNoteObject), htmlStringOneNote);

    var title = 'Does not produce string of HTML with no note';
    var htmlStringNoNotes = '';
    var fakeNoNote = [];
    elementsAreTheSame(title, noteListView.createHTML(fakeNoNote), htmlStringNoNotes);

    var title = 'The innerHTML property of the app element contains HTML with string';
    dummyNoteController.pageHTML('Favourite food: pesto');
    var appDiv = document.getElementById('app').innerHTML;
    var foodNote = 'Favourite food: pesto';
    elementContains(title, appDiv, foodNote);

    var title = 'Expects the output of single note view to include the note given to it';
    elementContains(title, singleNoteView.noteview(), 'string')

})();
