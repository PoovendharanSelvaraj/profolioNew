const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://pooga:12345@cluster0.qaybd.mongodb.net/visitorDB"
);

app.use("/", require("./router/route"));

app.listen(3001, function () {
  console.log("listening port 3000");
});
