class ParkingTicket {
  constructor(ticketNumber) {
    if (!ticketNumber) throw new Error("Ticket number is required");
    this.ticketNumber = ticketNumber;
  }
}

module.exports = ParkingTicket;
