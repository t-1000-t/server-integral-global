const Item = require("../../controllers/model/item");

const postitems = async (req, res) => {
  try {
    const itemData = req.body;
    console.log("itemData", itemData.productID);
    const newItem = new Item(itemData);
    // console.log("newItem", newItem);
    const result = await newItem.save();
    res.status(201).json({
      item: result,
    });
  } catch (error) {}
};

module.exports = postitems;
