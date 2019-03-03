var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var jerky = require("../models/jerky");
console.log('controller');
// Create all our routes and set up logic within those routes where required.
router.get("/order", function(req, res) {
  jerky.all(function(data) {
    var hbsObject = {
      jerky: data
    };
    //console.log(hbsObject);
    res.render("order", hbsObject);
    
    
    
  });
});

router.post("/api/jerky", function(req, res) {
  jerky.create([
    "flavor", "purchased"
  ], [
    req.body.flavor, req.body.purchased
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    // console.log(req.body)
    // console.log(req.body.flavor)
    // console.log(req.body.purchased)
  });
});

router.put("/api/jerky/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  jerky.update({
    purchased: req.body.purchased
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/jerky/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  jerky.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
