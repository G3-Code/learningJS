function test1() {
  num3 = 40; // global scope
  let num4 = 50; // local scope
  var num5 = 60;
  var num5 = 70;
  console.log(`a: ${num1}`);
  console.log(`b: ${num2}`);
  console.log(`c: ${num3}`);
  console.log(`e: ${num4}`);
  console.log(`f: ${num5}`);
}
let num2 = 30; // global scope
test1();
console.log(`d: ${num3}`);
var num1 = 20;
test1();
