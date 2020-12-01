const fetchProducts = require("../services/fetchProducts");

module.exports = async function getFatchLocalProducts(quantity, cat) {
  //   console.log("quantityGet", quantity);
  //   console.log("catGet", cat);
  const arr = [];
  for (let j = 1; quantity >= j; j++) {
    num = j * 1000;
    // console.log("num", num);
    // console.log("indexValue", cat);
    const url = `http://api.brain.com.ua/products/${cat}/${process.env.SID}?offset=${num}`;
    await fetchProducts(url).then(res => {
      arr.push(res.result.list);
    });
  }
  //   console.log("arrGet", arr.flat());
  return arr.flat();
};
