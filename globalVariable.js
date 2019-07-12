var greeting = "Hello";

function helloWorld() {
  // this.name refers to window.name and will be available in the console when the program is run
  this.name = "world";
  // helloWorld() function has to be invoked for punct to have its value
  punct = "!";
  console.log(greeting + " " + this.name + punct);
}
