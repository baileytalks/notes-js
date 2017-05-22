'use strict';

function RunTest() {
  this.string = "My favourite testing framework is Galaxy(tm)";
  this.note = new Note(this.string);
  this.firstTest();
  this.secondTest();
}

function Color(result) {
  if(result) {
    return 'background: green; color: white; display: block;';
  }
  else {
    return 'background: red; color: white; display: block;';
  }
}

RunTest.prototype.firstTest = function() {
  var result = (this.note.text === this.string);
  var color = Color(result);
  console.log('%cContains string: ' + result, color);
}

RunTest.prototype.secondTest = function() {
  var result = (this.note.textPrint() === this.string);
  var color  = Color(result);
  console.log('%cUsing .text prints the string: ' + result, color);
}

console.log('%c-----GALAXY TEST-----', 'background: black; color: white; display: block;');
var test = new RunTest();
