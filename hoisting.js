// hoisting();
// console.log("--->>" + i);

// // This is function delcaration
// function hoisting() {
//   console.log(hoist);
//   var what = "Variables and function declarations";

//   console.log("What is hoisted?" + what);

//   var hoist = "to lift or raise up";
//   console.log("Hoist means " + hoist);
// }
// var i;
// //This is function expression
// const addNums = (a, b) => {
//   console.log("Added numbers is " + (a + b));
// };
// addNums(4, 5);

// var globalVar = "global";
// var outerVar = "outer";

// function outerFunc(outerParam) {
//   function innerFunc(innerParam) {
//     console.log(globalVar, outerParam, innerParam);
//   }
//   return innerFunc;
// }
// const x = outerFunc(outerVar);
// outerVar = "outer-2";
// globalVar = "guess";

// x("inner");

const arrFuncs = [];
for (let i = 0; i < 5; i++) {
  console.log(i);
  arrFuncs.push(function() {
    return i;
  });
}

for (let j = 0; j < arrFuncs.length; j++) {
  console.log(arrFuncs[j]()); // all logs "5"
}
