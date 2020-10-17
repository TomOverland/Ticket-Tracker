// This is example code to be used as a reference

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/examples/", function(req, res) {
    db.Example.findAll({})
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });

  // Get route for returning tickets for a specific category
  app.get("/api/examples/department/:department", function(req, res) {
    db.Example.findAll({
      where: {
        category: req.params.department
      }
    })
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/examples/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });

  // POST route for saving a new post
  app.post("/api/examples", function(req, res) {
    console.log(req.body);
    db.Example.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });

  // PUT route for updating posts
  app.put("/api/examples", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbExample) {
        res.json(dbExample);
      });
  });
};