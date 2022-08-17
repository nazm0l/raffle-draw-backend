const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  //Create new Ticket
  create() {}

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
