const Car = require("./car");
const ParkingTicket = require("./parking-ticket");

class Parking_lot {
  name;
  lot_avail;
  space_list;

  constructor(lot_avail) {
    this.lot_avail = lot_avail;
    this.space_list = [];
  }
  enter(Car) {
    if (this.lot_avail > 0) {
      const ticket = new ParkingTicket(this.lot_avail);
      this.space_list.push(Car.plate);
      this.lot_avail--;
      return ticket;
    }
    return "no";
  }
}
const park = new Parking_lot(2);
const car1 = new Car("absccsd");
const car2 = new Car("abscwwsx");
const car3 = new Car("awsx");

console.log(park.lot_avail);
console.log(park.enter(car1));
console.log(park.space_list);

console.log(park.lot_avail);
console.log(park.enter(car2));
console.log(park.space_list);

console.log(park.lot_avail);
console.log(park.enter(car3));
console.log(park.space_list);
