const fetch = require("node-fetch");

// example: http://localhost:5000/api/comments?num=35342

const comments = (req, res) => {
  const { num } = req.query;

  console.log(num);

  const query = {
    prodID: null,
  };

  if (num) {
    query.prodID = num;
  }

  const url = `http://api.brain.com.ua/comments/${query.prodID}/${process.env.SID}`;
  fetch(`${url}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((prod) => console.log(prod.result))
    .then((json) => {
      res.json(json);
    })
    .catch((error) => console.log("error", error));
};

module.exports = comments;
