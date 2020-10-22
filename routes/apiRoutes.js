var db = require("../models");

module.exports = function(app) {
  // Get all ticketss
  app.get("/api/tickets", function(req, res) {
    db.Ticket.findAll({}).then(function(dbTickets) {
      res.json(dbTickets);
    });
  });

  // Create a new ticket
  app.post("/api/tickets", function(req, res) {
    db.Ticket.create(req.body).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // Delete a ticket by id
  app.delete("/api/tickets/:id", function(req, res) {
    db.Ticket.destroy({ where: { id: req.params.id } }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });
};
