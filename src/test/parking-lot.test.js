const Parking_lot = require("../domain/parking-lot");
const Car = require("../domain/car");

describe("parking lot", () => {
  it("Should return ticket number if vehicle enter", () => {
    //given
    const park = new Parking_lot(2);
    const car1 = new Car("absccsd");

    //when
    const result = park.enter(car1);

    //then
    const expectedResult = "2absccsd";

    expect(result).toBe(expectedResult);
  });

  it("Should return ticket number if vehicle exit", () => {
    //given
    const park = new Parking_lot(2);
    const car1 = new Car("absccsd");
    park.enter(car1);

    //when
    const result = park.exit("2absccsd");

    //then
    const expectedResult = "absccsd";

    expect(result).toBe(expectedResult);
  });

  it("Should not accept car if parking is full", () => {
    //given
    const park = new Parking_lot(2);
    const car1 = new Car("absccsd");
    const car2 = new Car("abscwwsx");
    const car3 = new Car("awsx");
    park.enter(car1);
    park.enter(car2);
    park.enter(car3);

    //when
    const result = park.enter(car3);

    //then
    const expectedResult = "No enter parking full";

    expect(result).toBe(expectedResult);
  });

  it("Should not accept car if its not a car", () => {
    //given
    const park = new Parking_lot(2);

    //when
    const result = park.enter("test");

    //then
    const expectedResult = "Ur car is Illegal!!";

    expect(result).toBe(expectedResult);
  });
});
