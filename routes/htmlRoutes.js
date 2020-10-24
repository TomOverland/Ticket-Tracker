var db = require("../models");
const path = require("path");

module.exports = function(app) {
  // Load index (login) page

  // Load index page
  // Change route to "/index/" once login page is up
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // Load analytics page
  app.get("/analytics", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/analytics.html"));
  });


  // load submit a ticket page
  app.get("/submit/", function(req, res) {
    db.Ticket.findAll({}).then(function(dbTickets) {
      
      res.render("submit", {
        msg: "Submit a Ticket",
      });
    });
  });

  // load view all tickets page
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