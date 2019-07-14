// 0,1,1,2,3,5,8,13
function fibonacci(num) {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < num; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

console.log(fibonacci(10));
