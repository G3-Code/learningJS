//Type coercion examples
var a = 5;
var isTrue = true;
var isFalse = false;
console.log(a + isTrue);
console.log(a + isFalse);
console.log(a - isTrue);
console.log(a - isFalse);
console.log(a / isTrue);
console.log(a / isFalse);
console.log(a * isTrue);
console.log(a * isFalse + "\n--------\n");

var b = "2";
// Type coercion - b is automatically converted to true
if (b) {
  console.log(a * b);
  console.log(a - b);
  console.log(a / b);
  console.log(a + b);
}

// Seven values that conver to false
// false, 0, -0, "", NaN, null, undefined

var i;
if (typeof i === "undefined") {
  i = 10;
}
console.log(i);
