** Ignore for now **

list = new NoteList();

Object {notes: Array(0), addNote: function, displayNotes: function}

list.addNote('1 note');
undefined

list.addNote('2 note');
undefined

forview = new NoteListView();
Object {createHTML: function}

forview.createHTML(list);
"<ul><li><div>1 note</div></li><li><div>2 note</div></li></ul>"

list.displayNotes();
"1 note, 2 note"
