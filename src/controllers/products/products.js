// const fetch = require("node-fetch");
const fetchProducts = require("../../services/fetchProducts");
// example: http://localhost:5000/api/products/1334/0

const products = (req, res) => {
  const { category, pagenum } = req.params;

  const query = {
    category: null,
    pagenum: null,
  };

  if (category) {
    query.category = category;
    query.pagenum = pagenum;
  }

  const url = `http://api.brain.com.ua/products/${query.category}/${process.env.SID}?offset=${query.pagenum}`;
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

module.exports = products;
