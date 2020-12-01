const fetch = require("node-fetch");

// функция запроса по номеру категории

const getFetchMain = async (num, res) => {
  console.log(num);
  console.log(process.env.SID);
  const url = `http://api.brain.com.ua/products/${num}/${process.env.SID}`;

  const request = await fetch(`${url}`, {
    method: "GET"
  })
    // .then(res => console.log("res :", res))
    .then(response => response.json())
    .then(prod => prod.result)
    .catch(error => console.log("error", error));
  return request;
};

module.exports = getFetchMain;
