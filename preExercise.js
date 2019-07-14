// Create date object

// print date in format of date/month/year

let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
month++;
console.log(`${day}\/ ${month}\/ ${year}`);
