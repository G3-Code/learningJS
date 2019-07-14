//Find out how many hours have passed since 1/1/2000.

//Print it to the console.

let curDate = new Date();
let date2000 = new Date(2000, 1, 1);

let timeDiff = (curDate.getTime() - date2000.getTime()) / (60 * 60 * 1000);

console.log(Math.floor(timeDiff));
