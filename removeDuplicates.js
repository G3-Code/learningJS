let fruits = [
  "banana",
  "kiwi",
  "mango",
  "kiwi",
  "apple",
  "kiwi",
  "pear",
  "banana",
  "apple"
];
let compareVal;

fruits.sort();
for (let i = fruits.length - 1; i > -1; i--) {
  compareVal = fruits[i];
  if (compareVal === fruits[i - 1]) {
    fruits.splice(i, 1);
  }
}
console.log(fruits);
