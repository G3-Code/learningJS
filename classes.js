// class Foo {}
// console.log(typeof Foo);

const myFavoriteObj = {
  guessThis() {
    const getName = () => {
      //copies the value of "this" outside of this arrow function
      console.log(this.name);
    };
    getName();
  },
  name: "Marko Polo",
  thisIsAnnoying(callback) {
    callback();
  }
};

myFavoriteObj.guessThis();
