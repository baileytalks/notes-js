'use strict';

function Note(string) {
  this.text = string;
}

Note.prototype.textPrint = function() {
  return this.text;
}
