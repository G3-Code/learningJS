//"use strict";
/*
 * Understanding scope in JS
 */

// Global scope
var a = 10;

var add5 = function(num) {
  // b is not declared and hence will be automatically declared and used in global scope.
  b = 5;
  console.log(num + b);

  // scope of add10 is only within add5
  var add10 = function(num2) {
    console.log(num2 + a);
  };

  add10(num);

  var add15 = function(num3) {
    var c = 15;
    console.log(num3 + c);
  };
  add15(num);
};

add5(3);

// An error will be thrown if I 'use strict' as b will have to be declared and will not be visible.
console.log(b);
