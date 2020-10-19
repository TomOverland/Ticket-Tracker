// This is example code to be used as a reference


// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    // change path from /blog to /index.html, and below paths to pages that I want
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  // blog route loads blog.html
  app.get("/tickets", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/tickets.html"));
  });

};
