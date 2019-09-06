const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.listen(8000, () => {
  console.log("Server started!");
});
