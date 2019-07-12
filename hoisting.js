hoisting();

// This is function delcaration
function hoisting() {
  console.log(hoist);
  var what = "Variables and function declarations";

  console.log("What is hoisted?" + what);

  var hoist = "to lift or raise up";
  console.log("Hoist means " + hoist);
}

//This is function expression
const addNums = (a, b) => {
  console.log("Added numbers is " + (a + b));
};
addNums(4, 5);
