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

console.log(fibonacci(10));
