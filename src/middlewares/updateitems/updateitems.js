const Item = require("../../controllers/model/item");

const updateitems = async (req, res) => {
  itemID = req.params.id;
  newFields = req.body;
  Item.findByIdAndUpdate(
    { productID: itemID },
    { $set: newFields },
    { new: true }
  ).then((item) => {
    if (!item) {
      res.status(400).json({ item: item });
    }

    res.json({ item: item });
  });
};

module.exports = updateitems;
