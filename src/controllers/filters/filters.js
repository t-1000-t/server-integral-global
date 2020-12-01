const fetch = require("node-fetch");

// example: http://localhost:5000/api/filters_all/1334/

const filters = (req, res) => {
  console.log("reg.params", req.params);

  const { category } = req.params;

  // res.send("Ok");

  const query = {
    category: null,
  };

  if (category) {
    query.category = category;
  }

  const url = `http://api.brain.com.ua/filters/${query.category}/${process.env.SID}`;
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

module.exports = filters;
