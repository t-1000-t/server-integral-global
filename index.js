const express = require("express");
const router = require("./src/router/router");
const cors = require("cors");
const morgan = require("morgan");
const { expressCspHeader, INLINE, NONE, SELF } = require("express-csp-header");

const notFound = require("./src/middlewares/notFound");
const errorHandler = require("./src/middlewares/errorHandler");
const getitems = require("./src/middlewares/getItems/getItems");
const postitems = require("./src/middlewares/postitems/postitems");
const updateitems = require("./src/middlewares/updateitems/updateitems");
const getItems = require("./src/middlewares/getItems/getItems");
const interval = require("./interval");
const moment = require("moment");
const intervalDay = require("./src/controllers/intervalDay/intervalDay");
const removeAll = require("./src/middlewares/removeAll/removeAll");
const deleteItemsDB = require("./src/controllers/deleteItemsDB/deleteItemsDB");
const listMainProducts = require("./src/controllers/listMainProducts/listMainProducts");
const dbConnection = require("./src/controllers/dbConnection/dbConnection");

require("dotenv").config();

const app = express();

app.use(morgan("tiny"));
app.use(cors("*"));

app.use(
  expressCspHeader({
    policies: {
      "default-src": [SELF],
      "script-src": [SELF, INLINE, "shop-bootstrap.herokuapp.com"]
    }
  })
);

dbConnection();

app.use(express.json());

number = [];
numberDay = [];
stopNext = [];

setInterval(() => {
  timeHour = moment().format("h:mm:ss a");
  if (timeHour === "6:00:02 am") {
    console.log("Let's GO!");
    deleteItemsDB();
    intervalDay();
  }
  if (number.length === 0) {
    interval();
    // categ();
  }

  if (numberDay.length === 5 && process.env.SID) {
    // deleteItemsDB();
    // intervalDay();
  }

  if (stopNext.length === 0 && process.env.SID) {
    listMainProducts();
    stopNext.push("1");
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  number.push(getRandomInt(99));
  if (number.length > 600) {
    number = [];
  }

  numberDay.push(getRandomInt(999));
  if (numberDay.length > 86400) {
    numberDay = [];
  }
}, 1000);

app.get("/items", getitems); //false
app.get("/search/:str", getItems); //false
app.post("/items", postitems); //false
app.post("/items/:id", updateitems); //false
app.delete("/items", removeAll); //false

app.use("/api", router);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
