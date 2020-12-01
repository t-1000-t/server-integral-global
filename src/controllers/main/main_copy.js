const allcategoriesproducts = require("../../../db/allcategoriesproducts.json");
const fetchCategories = require("../../services/fetchCategories");

// http://localhost:5000/api/main?num=33

const main = function (req, res, next) {
  const url = `http://api.brain.com.ua/categories/${process.env.SID}`;
  //

  fetchCategories(url)
    .then((data) => {
      const newDataArray = data.result.filter(function (elem) {
        if (elem.categoryID > 0) {
          return newArr;
        } else {
          return;
        }
      });
      console.log("categoryID", newDataArray);
    })
    .then((json) => {
      res.json(json);
    })
    .catch((error) => console.log("error", error));
};

module.exports = main;
