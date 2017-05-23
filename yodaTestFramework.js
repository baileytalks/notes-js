'use strict';

(function(exports) {
  console.log("%c : : : YODA  TEST : : : ", 'background: black; color: yellow; font: bold 20px Verdana; display: block;')
  console.log("%c The greatest testing framework in the galaxy ", 'background: black; color: yellow; font: 10px Verdana; display: block;')

  var sameTheyAre = function(title, arg1, arg2) {
    var title = title;
    if (arg1 === arg2) {
      console.log("%cSame they are: " + title, 'background: green; color: white; display: block;');
    }else{
      console.log("%cSame they are not: " + title, 'background: red; color: white; display: block;');
    }
  }
  exports.sameTheyAre = sameTheyAre;
})(this);
