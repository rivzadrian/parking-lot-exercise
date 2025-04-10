class Car {
  constructor(plate) {
    if (!plate) throw new Error("Car plate is required");
    this.plate = plate;
  }
}

module.exports = Car;
