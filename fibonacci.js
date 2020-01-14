// 0,1,1,2,3,5,8,13
function fibonacci(num) {
  let a = 0,
    b = 1;
  var fib = [a, b];
  for (let i = 2; i < num; i++) {
    c = a + b;
    fib.push(c);
    a = b;
    b = c;
  }
  return fib;
}

let evenOdd = num => (num % 2 === 0 ? `${num} is even` : `${num} is odd`);

console.log(fibonacci(20));
console.log(evenOdd(3));
