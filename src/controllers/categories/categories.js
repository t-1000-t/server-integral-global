const fetch = require("node-fetch");

// example: http://localhost:5000/api/categories

const categories = (req, res) => {
  const url = `http://api.brain.com.ua/categories/${process.env.SID}`;
  fetch(`${url}`, {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(error => console.log("error", error));
};

module.exports = categories;
