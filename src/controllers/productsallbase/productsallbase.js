const fetch = require("node-fetch");
const fetchAllProducts = require("../../services/fetchAllProducts");
const fetchProducts = require("../../services/fetchProducts");

// http://localhost:5000/api/productsallbase/

const productsOnAllCategory = (req, res) => {
  const url = `http://api.brain.com.ua/categories/${process.env.SID}`;
  fetchAllProducts(url)
    .then((arr) => {
      const newArr = arr.result.map(function (elem) {
        if (elem.categoryID > 0) {
          return elem.categoryID;
        } else {
          return;
        }
      });
      fetch("https://allcat-cfe71.firebaseio.com/all.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newArr }),
      });
      return { newArr };
    })
    .then((json) => {
      res.json(json);
    })
    .catch((error) => console.log("error", error));
};

module.exports = productsOnAllCategory;
