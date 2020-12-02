const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
app.use(cors("*"));

app.get("/", (reg, res) => {
  res.send("Welcome!");
});

app.get("/search", (reg, res) => {
  res.json([{ a: 1, b: 2, c: { x: "", y: 25 } }]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
