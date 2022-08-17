const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create a new ticket
   * @param {string} username
   * @param {number} price
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  //Sell multiple ticket
  bulkCreate() {}

  //Return All Tickets
  find() {}

  //Single Ticket
  findById() {}

  //Update Ticket
  updateById() {}

  //Delete Ticket
  deleteById() {}

  //Find a winner
  draw() {}
}

const MyDB = new MyDB();
module.exports = MyDB;
