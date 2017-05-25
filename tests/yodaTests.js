(function(exports){
  var string = "My favourite testing framework is this one",
      note = new Note('string'),
      noteList = new NoteList();
      noteListView = new NoteListView();
      noteController = new NoteController();

    sameTheyAre('Contains a string', note.text, 'string')
    sameTheyAre('Using .text prints the string', note.textPrint(), 'string')

    var note1 = { text: 'Here is a note'};
    noteList.addNote('fakenote', note1);
    sameTheyAre('Making new note pushes to array', noteList.notes[0], note1)

    noteList.addNote('fakenote', { text: 'Here is another note' });
    sameTheyAre('Displays all notes in list', noteList.displayNotes(), "Here is a note, Here is another note")

    var htmlString = '<ul><li><div>Here is a note</div></li><li><div>Here is another note</div></li></ul>';
    var fakeNoteList = { notes: [{ text: 'Here is a note' }, { text: 'Here is another note' }] };
    sameTheyAre('Produces string of HTML with notes', noteListView.createHTML(fakeNoteList), htmlString);

    var htmlStringOneNote = '<ul><li><div>Here is a note</div></li></ul>';
    var fakeNoteObject = { notes: [{ text: 'Here is a note' }] };
    sameTheyAre('Produces string of HTML with one note', noteListView.createHTML(fakeNoteObject), htmlStringOneNote);

    var htmlStringNoNotes = '';
    var fakeNoNote = [];
    sameTheyAre('Does not produce string of HTML with no note', noteListView.createHTML(fakeNoNote), htmlStringNoNotes);

    var appDiv = document.getElementById('app');
    sameTheyAre('The innerHTML property of the app element contains HTML with string', appDiv, noteController.pageHTML('string'));

})();
