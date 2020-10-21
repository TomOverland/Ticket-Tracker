var db = require("../models");
var sequelize = require("sequelize");
var path = require("path");
var fs = require("fs");
var util = require("util");
var express = require("express");
var router = express.Router();


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/html/user/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get('/viewtickets', function (req, res, next) {
    res.render('example', {layout: "main"});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");

  });
};

