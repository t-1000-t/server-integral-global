const catDB = require("./db/dbcatigories.json");

module.exports = function categ() {
  category = Object.entries(catDB.categories).map(el => el[1].elem.category);
  process.env.CATEGORYID =
    category[Math.floor(Math.random() * category.length)];
  console.log(process.env.CATEGORYID);
};
