var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Ticket.findAll({}).then(function(dbTickets) {
      res.render("submit", {
        msg: "Submit a Ticket",
      });
    });
  });

  app.get("/ticket/", function(req, res) {
    db.Ticket.findAll({}).then(function(dbTickets) {
      res.render("viewtickets", {
        msg: "View All Tickets",
        examples: dbTickets
      });
    });
  });

  // Load single ticket page and pass in a ticket by id
  app.get("/ticket/:id", function(req, res) {
    db.Ticket.findOne({ where: { id: req.params.id } }).then(function(dbTicket) {
      res.render("singleticket", {
        msg: "View Single Ticket",
        example: dbTicket
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};