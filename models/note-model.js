'use strict';

var counter = 0;

function Note(string) {
  this.text = string;
  this.id = counter;
  counter++;
}

Note.prototype.textPrint = function() {
  return this.text;
}
