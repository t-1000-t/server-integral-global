const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(
    "mongodb+srv://node:o0bHsoIVxe9UCFVP@database-pz6ed.mongodb.net/db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (err) {
        console.log("err :", err);
        process.exit(1);
      }
      console.log("DB connected...");
    }
  );
};

module.exports = dbConnection;
