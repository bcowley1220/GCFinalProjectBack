let express = require("express");
let cors = require("cors");
let app = express();
let router = require("./routes/routes");
let port = 8000;

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use(cors());
app.use(express.json());

app.use("/", router);
app.listen(port, () => console.log(`Server is running on PORT: ${port}!`));
