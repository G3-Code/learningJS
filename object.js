var fname = "Global";
var user1 = {
  fname: "Gai",
  printName: function() {
    console.log(this);
  }
};

var user2 = {
  fname: "Mani",
  name: "Manikandan",
  printName: user1.printName
};

var user3 = user1.printName;

user1.printName();
user2.printName();
//user3();
console.log(fname);
