const ParkingTicket = require("../domain/parking-ticket");


describe("ParkingTicket", () => {
  it("should create ticket with ticketNumber only", () => {
    const ticket = new ParkingTicket("TICKET-001");

    expect(ticket.ticketNumber).toBe("TICKET-001");
  });

  it("should throw error if ticketNumber is missing", () => {
    expect(() => new ParkingTicket()).toThrow("Ticket number is required");
  });
});
