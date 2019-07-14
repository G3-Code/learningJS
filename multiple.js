// write any number between 1-100 which is a multiple of 3 and 5

for (let i = 1; i < 101; i++) {
  i % 3 === 0 && i % 5 === 0 ? console.log(i) : null;
}
