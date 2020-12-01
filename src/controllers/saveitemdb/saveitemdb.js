const Item = require("../model/item");

const saveitemdb = async data => {
  try {
    const newItem = new Item(data);
    await newItem.save();
  } catch (error) {
    console.error(error);
  }
};

module.exports = saveitemdb;
