const db = require("../models")

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.burgers.findAll({})
      .then(function (data) {
        var hbsObject = {
          burgers: data
        }
        res.render("index", hbsObject)
      })
  })
  app.get("/api/burgers", function (req, res) {
    db.burgers.findAll({})
      .then(function (dbBurger) {
        res.json(dbBurger);  
      })
  })
}