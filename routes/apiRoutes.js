var db = require("../models");

module.exports = function(app) {
  // Get all tickets
  app.get("/api/tickets", function(req, res) {
    db.Ticket.findAll({}).then(function(dbTickets) {
      res.json(dbTickets);
    });
  });

  // Create a new ticket
  app.post("/submit/api/tickets", function(req, res) {
    console.log('req.body', req.body);

    db.Ticket.create(req.body).then(function(dbTicket) {
      
      res.json(dbTicket);
    });
  });

  // trying to get view single ticket to post notes
  app.put("/ticket/api/tickets", function(req, res, next) {
    console.log("note entry");
    const reqNotes = req.body;

    db.Ticket.update(
      {notes: reqNotes.notes},
      { where: { id: req.body.id }}).then(function(updatedTicket) {
      res.json(updatedTicket);
    }).catch(next);
  })


  app.put("/ticket/api/updated", function(req, res, next) {
    console.log("apiRequest");
    const reqCompleted = req.body;
    console.log(reqCompleted);

    db.Ticket.update(
      {completed: reqCompleted.completed},
      { where: { id: reqCompleted.id }}).then(function(updateComplete) {
        res.json(updateComplete);
      }).catch(next);
    
  });


// Update ticket status to complete
  app.put("/api/tickets/:id", function(req, res) {
    console.log("params", req.params);
    console.log("body", req.body);
    
    db.Ticket.update({
      completed: true
    }, {
      where: {
        id: req.params.id
      }
    }.then(function(dbTicket) {
      res.json(dbTicket);
    })
      
    )
  })

  // Delete a ticket by id
  app.delete("/api/tickets/:id", function(req, res) {
    db.Ticket.destroy({ where: { id: req.params.id } }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });
};
