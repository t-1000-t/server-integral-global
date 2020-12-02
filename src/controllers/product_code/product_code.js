const fetch = require("node-fetch");

// example: http://localhost:5000/api/product/product_code/U0057989

const product_code = (req, res) => {
  const { num } = req.params;

  // console.log(num);

  const query = {
    prodID: null,
  };

  if (num) {
    query.prodID = num;
  }

  const url = `http://api.brain.com.ua/product/product_code/${query.prodID}/${process.env.SID}`;
  fetch(`${url}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((prod) => prod.result)
    .then((json) => {
      res.json(json);
    })
    .catch((error) => console.log("error", error));
};

module.exports = product_code;
