const express = require("express");
const router = express.Router();
//const db = require("../models");
router.get("/api/user", function(req, res){
    res.send("Get Users")
});

router.post("/api/user", function(req, res){
    res.send("Post Users")
})

router.put("/api/user/:id", function(req, res){
    res.send("Update Users")
})

router.delete("/api/user/:id", function(req, res){
    res.send("Delete Users")
})



module.exports = router;