const Car = require("./car");
const ParkingTicket = require("./parking-ticket");

class Parking_lot {
  name;
  lot_avail;
  space_list;

  constructor(lot_avail) {
    this.lot_avail = lot_avail;
    this.space_list = new Map();
  }
  enter(car) {
    if (!(car instanceof Car)){
        return "Ur car is Illegal!!"
    }

    if (this.lot_avail > 0) {
      const ticket = new ParkingTicket(this.lot_avail + car.plate);
      this.space_list.set(ticket.ticketNumber, car);
      this.lot_avail--;
      return ticket.ticketNumber;
    }
    return "No enter parking full";
  }
  exit(ticketNumber) {
    if (this.space_list.has(ticketNumber)) {
      const exit_car = this.space_list.get(ticketNumber);
      this.space_list.delete(ticketNumber);
      this.lot_avail++;
      return exit_car;
    }
    return "your car is gone sorry";
  }
}
module.exports = Parking_lot;

// const park = new Parking_lot(2);
// const car1 = new car("");
// const car2 = new Car("abscwwsx");
// const car3 = new car("awsx");

// console.log(park.lot_avail);
// console.log(park.enter("heloo"));
// console.log(park.space_list);

// console.log(park.lot_avail);
// console.log(park.enter(car2));
// console.log(park.space_list);

// console.log(park.exit("2abscwwsx"));
// console.log(park.space_list);
