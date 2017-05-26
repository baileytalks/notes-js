(function(exports){

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

  var string = "My favourite testing framework is this one",
      note = new Note('string'),
      noteList = new NoteList();
      noteListView = new NoteListView();
      dummyNoteController = new DummyNoteController();

    elementsAreTheSame('Contains a string', note.text, 'string')
    elementsAreTheSame('Using .text prints the string', note.textPrint(), 'string')

    var note1 = { text: 'Here is a note'};
    noteList.addNote('fakenote', note1);
    elementsAreTheSame('Making new note pushes to array', noteList.notes[0], note1)

    noteList.addNote('fakenote', { text: 'Here is another note' });
    elementsAreTheSame('Displays all notes in list', noteList.displayNotes(), "Here is a note, Here is another note")

    var htmlString = '<ul><li><div>Here is a note</div></li><li><div>Here is another note</div></li></ul>';
    var fakeNoteList = { notes: [{ text: 'Here is a note' }, { text: 'Here is another note' }] };
    elementsAreTheSame('Produces string of HTML with notes', noteListView.createHTML(fakeNoteList), htmlString);

    var htmlStringOneNote = '<ul><li><div>Here is a note</div></li></ul>';
    var fakeNoteObject = { notes: [{ text: 'Here is a note' }] };
    elementsAreTheSame('Produces string of HTML with one note', noteListView.createHTML(fakeNoteObject), htmlStringOneNote);

    var htmlStringNoNotes = '';
    var fakeNoNote = [];
    elementsAreTheSame('Does not produce string of HTML with no note', noteListView.createHTML(fakeNoNote), htmlStringNoNotes);

    dummyNoteController.pageHTML('Favourite food: pesto');
    var appDiv = document.getElementById('app').innerHTML;
    var foodNote = 'Favourite food: pesto';
    elementContains('The innerHTML property of the app element contains HTML with string', appDiv, foodNote);
})();
