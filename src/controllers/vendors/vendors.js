const fetch = require("node-fetch");
// example: http://localhost:5000/api/products/1334/0

const vendors = (req, res) => {
  const { category } = req.params;

  const query = {
    category: null,
  };

  if (category) {
    query.category = category;
  }

  const url = `http://api.brain.com.ua/vendors/${query.category}/${process.env.SID}`;
  fetch(`${url}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((prod) => prod)
    .then((json) => {
      res.json(json);
    })
    .catch((error) => console.log("error", error));
};

module.exports = vendors;
