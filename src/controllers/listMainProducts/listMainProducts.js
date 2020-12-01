const arrCategory = require("../../../db/dbcatigories.json");
const getFetchMain = require("../../services/getFetchMain");
const addFetchListCategory = require("../../services/addFetchListCategory");
const removeFetchListCategory = require("../../services/removeFetchListCategory");

// функция для обновления масива всех продуктов
//

const listMainProducts = async function(req, res) {
  console.log(
    "'listMainProducts()' - функция для обновления масивая всех продуктов сайта не ВКЛ."
  );
  // listCategory = Object.entries(arrCategory.categories).map(
  //   el => el[1].elem.category
  // );
  // console.log("listcategory:", listCategory.length);
  // listFilterDuplicatesNon = listCategory.filter(
  //   (item, index) => listCategory.indexOf(item) === index
  // );
  // console.log("listfilter:", listFilterDuplicatesNon.length);
  // allArr = [];
  // for (let i = 0; listFilterDuplicatesNon.length > i; i++) {
  //   await getFetchMain(listFilterDuplicatesNon[i]).then(data => {
  //     allArr.push(data);
  //     console.log("allArr:", allArr.length);
  //     console.log("listFilterDuplicutes:", listFilterDuplicatesNon.length);
  //     if (allArr.length === listFilterDuplicatesNon.length) {
  // removeFetchListCategory();
  // addFetchListCategory(allArr);
  // Console.log("compare array");
  // }
  // });
  // }
  // console.log("allArr finish:", allArr.length);
};

module.exports = listMainProducts;
