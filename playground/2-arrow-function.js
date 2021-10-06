// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x ** 2;
// };

// const square = (x) => x * x;

const event = {
  name: "Birthday Party",
  guestList: ["Ujjwal", "Tulsi", "Aniket", "Bhindi"],
  printGuestList: function () {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending the ${this.name}.`);
    });
  },
};
event.printGuestList();
