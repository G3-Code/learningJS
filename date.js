var date = new Date();
console.log(date);
// starts counting from 0 - jan , 6-july
console.log(date.getMonth());

console.log("------------------>" + date.getDate());

console.log(date.getTime());

var date2 = new Date();
console.log(date2.getTime());
console.log(date2.getTime() - date.getTime());
