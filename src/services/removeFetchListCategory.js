const fetch = require("node-fetch");
const moment = require("moment");

// удаляем массив с https://all-category.firebaseio.com/allcategoriesproducts.json

const removeFetchListCategory = async function(elem) {
  d = moment().format("YYYY_h_mm_ss");
  console.log(d);

  const res = await fetch(
    `https://all-category.firebaseio.com/allcategoriesproducts.json`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ elem })
    }
  );
  const data = await res.json();
  console.log("Data 2", data);
};

module.exports = removeFetchListCategory;
