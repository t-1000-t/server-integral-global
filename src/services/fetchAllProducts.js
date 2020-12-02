const fetch = require("node-fetch");

async function fetchAllProducts(url, res) {
  return await fetch(`${url}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((prod) => prod);
}

module.exports = fetchAllProducts;
