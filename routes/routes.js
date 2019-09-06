let express = require("express");
let router = express.Router();

router.get("/test", (req, res) => {
  res.send("GET works");
});

router.post("/test", (req, res) => {
  res.send("POST works");
});

router.put("/test/:id", (req, res) => {
  res.send("PUT works");
});

router.delete("/test/:id", (req, res) => {
  res.send("DELETE works");
});

module.exports = router;
