const allcategoriesproducts = require("../../../db/allcategoriesproducts.json");

// http://localhost:5000/api/main?num=33

const main = function (req, res, next) {
  const { num } = req.query;

  const query = {
    num: null,
  };

  if (num) {
    query.num = num - 1;
  }

  listProducts = Object.values(allcategoriesproducts)
    .map((e) => e.elem)
    .flat(2);

  console.log("listProducts: ", listProducts.length);

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const chunkProducts = chunk(listProducts, 12);

  let randomPage;
  if (num === undefined) {
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    query.num = getRandomInRange(1, chunkProducts.length);

    for (let i = 0; i < chunkProducts.length; i++) {
      if (i === Number(query.num)) {
        randomPage = chunkProducts[i];
      }
    }

    console.log("query.num ", query.num);
  }

  if (num > chunkProducts.length || num <= 0) {
    return res.status(422).json({
      message:
        "Number page are missing, max number page is " + chunkProducts.length,
    });
  }

  let numPage;
  for (let i = 0; i < chunkProducts.length; i++) {
    if (i === Number(query.num)) {
      numPage = chunkProducts[i];
    }
  }

  res.status(200).json({
    main: num ? numPage : randomPage,
  });
};

module.exports = main;
