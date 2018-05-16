var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  //express callback response by calling burger.selectAll
  burger.selectAll(function (burgerData) {
    //wrapper for orm.js using MySQL query
    res.render("index", { burger_data: burgerData });
  });
});

//a POST route to go back to index
router.post("/burgers/create", function (req, res) {
  //uses request object as input for burger.addBurger
  burger.insertOne(req.body.burger_name, function (result) {
    //wrapper for orm.js using MySQL query
    //render back to index with handlebars
    console.log(result);
    res.redirect("/");
  });
});

//PUT route back to index
router.put("/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    //wrapper for orm.js using MySQL query
    //render back to index with handlebars
    console.log(result);
    //send back response & let page reload from .thn in Ajax
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
