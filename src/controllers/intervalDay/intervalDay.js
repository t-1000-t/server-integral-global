const allcat = require("../../../db/allcat.json");
const getFetchMain = require("../../services/getFetchMain");
const getFatchLocalProducts = require("../../services/getFatchLocalProducts");
const moment = require("moment");
const saveitemdb = require("../saveitemdb/saveitemdb");

arrEverythingProducts = [];
sum = [];

module.exports = async function intervalDay() {
  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  for (let i = 0; allcat.length > i; i++) {
    await getFetchMain(allcat[i]).then(data => {
      if (!data) {
        console.log("No category: ", allcat[i]);
        return;
      }
      sum.push(data.count);
      if (data.count > data.list.length) {
        quantity = Math.floor(data.count / 1000);
        async function foo() {
          try {
            await getFatchLocalProducts(quantity, allcat[i]).then(data => {
              arrEverythingProducts.push(data);
            });
          } catch (err) {
            console.error(err);
          } finally {
          }
        }
        foo();
      }
      arrEverythingProducts.push(data.list);
    });
    // console.log("arrEverythingProducts", arrEverythingProducts.length),
    // console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
  }
  // deleteitemsdb();
  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  console.log(
    "sum",
    sum.reduce((s, item) => {
      return s + item;
    }, 0)
  );
  console.log("ALL_Length", arrEverythingProducts.flat().length);
  arrEverythingProducts.flat().map(async item => await saveitemdb(item));
  console.log("Finish");
  return;
};
