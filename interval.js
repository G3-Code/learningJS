var i = 0;
var intervalId = setInterval(() => {
  console.log(i);
  i++;
  if (i > 5) {
    clearInterval(intervalId);
  }
}, 1000);
