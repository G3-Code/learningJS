const carDetails = {
  name: "Ford Mustang",
  yearBought: 2005,
  getName() {
    return this.name;
  },
  isRegistered: true
};

console.log(carDetails.getName());
var name = "Ford Ranger";
var getCarName = carDetails.getName;

console.log(getCarName.apply(carDetails)); //logs Ford Mustang
console.log(getCarName.call(carDetails));
