const fetch = require("node-fetch");
const fetchProducts = require("../../services/fetchProducts");
// example: http://localhost:5000/api/products/1334/0

const products_search = (req, res) => {
  const {
    category,
    // check2,
    // check3,
    // check4,
    // check5,
    // check6,
  } = req.params;

  const query = {
    category: null,
    // check2: "",
    // check3: "",
    // check4: "",
    // check5: "",
    // check6: "",
  };

  if (category) {
    query.category = category;
    // query.check2 = check2;
    // query.check3 = check3;
    // query.check4 = check4;
    // query.check5 = check5;
    // query.check6 = check6;
  }

  // const url = `http://api.brain.com.ua/products/${query.category}/${process.env.SID}?filters[]=${query.chek1}&filters[]=${query.chek2}&filters[]=${query.chek3}&filters[]=${query.chek4}&filters[]=${query.chek5}&filters[]=${query.chek6}`;
  const url = `http://api.brain.com.ua/products/${query.category}/${process.env.SID}?limit=1000`;
  fetchProducts(url)
    .then((arr) => {
      const count = arr.result.count;
      const newArr = arr.result.list.filter(function (elem) {
        if (elem.stocks.length === 0) {
          return;
        } else {
          return elem;
        }
      });
      return { count, newArr };
    })
    .then((json) => {
      res.json(json);
    })
    .catch((error) => console.log("error", error));
};

module.exports = products_search;
