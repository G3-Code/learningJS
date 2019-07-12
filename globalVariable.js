var greeting = "Hello";

function helloWorld() {
  this.name = "world";
  punct = "!";
  console.log(greeting + " " + this.name + punct);
}
