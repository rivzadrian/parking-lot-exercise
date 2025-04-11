const Parking_lot = require("./parking-lot");
const Car = require("./car");
const ParkingTicket = require("./parking-ticket");

class Attendant {
    constructor(parking_lot){
        if (!parking_lot) throw new Error ("Not a parking lot")
        this.parking_lot = parking_lot
    }

    park(car){
        return this.parking_lot.enter(car);
    }

    unpark(ticket){
        return this.parking_lot.exit(ticket)
    }
}

const park = new Parking_lot(2);
const car2 = new Car("abscwwsx");
const car3 = new Car("awsx");
const car4 = new Car("a33sfdsx");
const attendant1 = new Attendant(park)

console.log(attendant1.park(car2));
console.log(attendant1.park(car3));
console.log(attendant1.park(car4));

console.log(attendant1.unpark("2abscwwsx"));
