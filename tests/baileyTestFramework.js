'use strict';

(function(exports) {
  console.log("%c : : : LET'S TEST! : : : ", 'background: grey; color: white; display: block;')
  const pass = 'color: green; font-weight: bold;';
  const fail = 'color: red; font-weight: bold;';


  var elementsAreTheSame = function(title, arg1, arg2) {
    var title = title;
    if (arg1 === arg2) {
      console.log("%c" + title, pass);
    }
    else {
      console.log("%c" + title, fail);
    }
  }

  var elementContains = function(title, arg1, arg2) {
    var title = title;
    if (arg1.includes(arg2)) {
      console.log("%c" + title, pass);
    }
    else {
      console.log("%c" + title, fail);
    }
  }
  exports.elementsAreTheSame = elementsAreTheSame;
  exports.elementContains = elementContains;
})(this);
