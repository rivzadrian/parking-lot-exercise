const Car = require("../domain/car");

describe("Car", () => {
  it("should create car with plate number", () => {
    const car = new Car("B 1234 ABC");

    expect(car.plate).toBe("B 1234 ABC");
  });

  it("should throw error if plate number is missing", () => {
    expect(() => new Car()).toThrow("Car plate is required");
  });
});
