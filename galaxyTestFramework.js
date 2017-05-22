'use strict';

function Test() {
  var string = "My favourite testing framework is Galaxy(tm)"
  note = new Note(string)
  console.log('Contains string: ' + note.text === string)
}
