var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// route to get the all function from burger and renders it into index.handlebars and puts the hbsObject in as well
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// route to let people see all of the JSON data if they go to /api/burgers
router.get("/api/burgers", function (req, res) {
    burger.all(function(data) {
        res.json(data);
    });
});

// route to post a new burger into the database
router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "consumed"
    ], [
        req.body.burger_name, req.body.consumed 
    ], function (result) {
        res.json({ id: result.InsertId })
    });
});

// route to change the consumed status of a burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        consumed: req.body.consumed
    }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;