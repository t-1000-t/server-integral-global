const Item = require("../model/item");

const deleteItemsDB = () => {
  try {
    Item.deleteMany({}).then((item) => item);
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteItemsDB;
