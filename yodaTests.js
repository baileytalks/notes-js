
(function(exports){
  var string = "My favourite testing framework is from Dagobah",
      note = new Note(string),
      noteList = new NoteList();

    sameTheyAre('Contains a string', note.text, string)
    sameTheyAre('Using .text prints the string', note.textPrint(), string)

    var note1 = { text: 'Here is a note'};
    noteList.newNote('fakenote', note1);
    sameTheyAre('Making new note pushes to array', noteList.notes[0], note1)

    noteList.newNote('fakenote', { text: 'Here is another note' });
    sameTheyAre('Displays all notes in list', noteList.displayNotes(), "Here is a note, Here is another note")

})();
